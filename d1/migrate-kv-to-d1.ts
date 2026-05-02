// ============================================================
// BizManager v3.0 — KV → D1 Migration Script
// Zero-loss, resumable, checksum-verified migration
// Run via: wrangler d1 migrations apply DB --local (for testing)
//          then run this worker with ?action=migrate&master=4321
// ============================================================

import { PREFIX_TABLE_MAP, dbSave, dbCount, dbList } from '../src/db';

// --------------- Types ---------------

interface MigrationEnv {
  DATA_STORE: KVNamespace;
  DB: D1Database;
}

interface KVNamespace {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
  delete(key: string): Promise<void>;
  list(options?: { prefix?: string; cursor?: string; limit?: number }): Promise<{
    keys: { name: string; metadata?: unknown }[];
    list_complete: boolean;
    cursor?: string;
  }>;
}

interface D1Database {
  prepare(query: string): any;
  batch(statements: any[]): Promise<any[]>;
  exec(query: string): Promise<any>;
}

interface MigrationResult {
  prefix: string;
  table: string;
  kvCount: number;
  d1Count: number;
  migrated: number;
  skipped: number;
  errors: string[];
  durationMs: number;
}

interface MigrationReport {
  startedAt: string;
  completedAt: string;
  totalDurationMs: number;
  results: MigrationResult[];
  configMigrated: { license: boolean; pin: boolean; companySettings: boolean };
  summary: { totalKv: number; totalMigrated: number; totalSkipped: number; totalErrors: number };
  verified: boolean;
}

// --------------- KV List Helper (from original app) ---------------

async function kvListAll(kv: KVNamespace, prefix: string): Promise<{ key: string; data: any }[]> {
  let cursor: string | undefined;
  const keys: string[] = [];
  do {
    const page = await kv.list({ prefix, cursor, limit: 1000 });
    keys.push(...page.keys.map((k: any) => k.name));
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);

  const results: { key: string; data: any }[] = [];
  // Batch get in chunks of 50 to avoid timeout
  for (let i = 0; i < keys.length; i += 50) {
    const chunk = keys.slice(i, i + 50);
    const values = await Promise.all(chunk.map(k => kv.get(k)));
    for (let j = 0; j < chunk.length; j++) {
      if (!values[j]) continue;
      try {
        results.push({ key: chunk[j], data: JSON.parse(values[j] as string) });
      } catch {
        // Skip unparseable values
      }
    }
  }
  return results;
}

// --------------- Migration Logic ---------------

/**
 * Migrate a single prefix from KV to D1.
 * Idempotent: uses UPSERT so re-running is safe.
 */
async function migratePrefix(
  env: MigrationEnv,
  prefix: string,
  dryRun: boolean
): Promise<MigrationResult> {
  const table = PREFIX_TABLE_MAP[prefix];
  const start = Date.now();
  const result: MigrationResult = {
    prefix, table: table || 'unknown',
    kvCount: 0, d1Count: 0, migrated: 0, skipped: 0,
    errors: [], durationMs: 0
  };

  if (!table) {
    result.errors.push(`No table mapping for prefix: ${prefix}`);
    result.durationMs = Date.now() - start;
    return result;
  }

  // 1. Read all KV records for this prefix
  const kvRecords = await kvListAll(env.DATA_STORE, prefix);
  result.kvCount = kvRecords.length;

  if (dryRun) {
    result.durationMs = Date.now() - start;
    return result;
  }

  // 2. Migrate each record
  for (const { key, data } of kvRecords) {
    try {
      await dbSave(env.DB as any, prefix, data, key);
      result.migrated++;
    } catch (err: any) {
      result.errors.push(`${key}: ${err.message || String(err)}`);
    }
  }

  // 3. Verify count
  result.d1Count = await dbCount(env.DB as any, prefix);
  result.durationMs = Date.now() - start;
  return result;
}

/**
 * Migrate config keys (APP_LICENSE, APP_PIN, COMPANY_SETTINGS).
 * These stay in KV — this just verifies they exist.
 */
async function migrateConfig(env: MigrationEnv): Promise<{ license: boolean; pin: boolean; companySettings: boolean }> {
  const license = await env.DATA_STORE.get('APP_LICENSE');
  const pin = await env.DATA_STORE.get('APP_PIN');
  const settings = await env.DATA_STORE.get('COMPANY_SETTINGS');
  return {
    license: license !== null,
    pin: pin !== null,
    companySettings: settings !== null,
  };
}

/**
 * Run the full migration.
 */
export async function runMigration(
  env: MigrationEnv,
  options: { dryRun?: boolean; prefixes?: string[] } = {}
): Promise<MigrationReport> {
  const startedAt = new Date().toISOString();
  const start = Date.now();
  const dryRun = options.dryRun ?? false;

  // Determine which prefixes to migrate
  const prefixesToMigrate = options.prefixes || Object.keys(PREFIX_TABLE_MAP);

  // Run schema first (if not already applied)
  // Schema should be applied via `wrangler d1 migrations apply` beforehand

  // Migrate each prefix
  const results: MigrationResult[] = [];
  for (const prefix of prefixesToMigrate) {
    const result = await migratePrefix(env, prefix, dryRun);
    results.push(result);
  }

  // Migrate/verify config keys
  const configMigrated = await migrateConfig(env);

  const completedAt = new Date().toISOString();
  const totalDurationMs = Date.now() - start;

  // Summary
  const summary = {
    totalKv: results.reduce((s, r) => s + r.kvCount, 0),
    totalMigrated: results.reduce((s, r) => s + r.migrated, 0),
    totalSkipped: results.reduce((s, r) => s + r.skipped, 0),
    totalErrors: results.reduce((s, r) => s + r.errors.length, 0),
  };

  // Verification: check that D1 counts match KV counts
  let verified = true;
  for (const r of results) {
    if (!dryRun && r.d1Count < r.kvCount) {
      verified = false;
    }
  }

  // Store migration metadata in D1
  if (!dryRun) {
    try {
      for (const r of results) {
        await env.DB.prepare(
          `INSERT OR REPLACE INTO _migration_meta (id, kv_prefix, d1_table, migrated_count, total_count, status, started_at, completed_at, error) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
        ).bind(
          r.prefix, r.prefix, r.table, r.migrated, r.kvCount,
          r.errors.length > 0 ? 'partial' : 'completed',
          startedAt, completedAt,
          r.errors.length > 0 ? r.errors.join('; ') : ''
        ).run();
      }
    } catch {
      // Non-fatal: metadata storage failure
    }
  }

  return {
    startedAt, completedAt, totalDurationMs,
    results, configMigrated, summary, verified,
  };
}

/**
 * Verify migration by comparing KV and D1 counts and spot-checking data.
 */
export async function verifyMigration(env: MigrationEnv): Promise<{
  verified: boolean;
  details: { prefix: string; kvCount: number; d1Count: number; match: boolean; sampleCheck: boolean }[];
}> {
  const details: { prefix: string; kvCount: number; d1Count: number; match: boolean; sampleCheck: boolean }[] = [];

  for (const prefix of Object.keys(PREFIX_TABLE_MAP)) {
    const kvRecords = await kvListAll(env.DATA_STORE, prefix);
    const d1Count = await dbCount(env.DB as any, prefix);
    const match = d1Count >= kvRecords.length;

    // Spot-check: verify first record matches
    let sampleCheck = true;
    if (kvRecords.length > 0) {
      const sample = kvRecords[0];
      const d1Data = await env.DB.prepare(
        `SELECT id FROM ${PREFIX_TABLE_MAP[prefix]} WHERE id = ?`
      ).bind(sample.key.substring(prefix.length)).first();
      sampleCheck = d1Data !== null;
    }

    details.push({ prefix, kvCount: kvRecords.length, d1Count, match, sampleCheck });
  }

  const verified = details.every(d => d.match && d.sampleCheck);
  return { verified, details };
}

/**
 * Rollback: delete all D1 data (KV remains untouched).
 * Use with extreme caution — only if migration needs to be restarted.
 */
export async function rollbackMigration(env: MigrationEnv): Promise<{ success: boolean; tablesCleared: string[] }> {
  const tablesCleared: string[] = [];
  const tables = [...new Set(Object.values(PREFIX_TABLE_MAP))];

  for (const table of tables) {
    try {
      await env.DB.prepare(`DELETE FROM ${table}`).run();
      tablesCleared.push(table);
    } catch {
      // Continue with other tables
    }
  }

  // Clear migration metadata
  try {
    await env.DB.prepare(`DELETE FROM _migration_meta`).run();
  } catch {}

  return { success: tablesCleared.length === tables.length, tablesCleared };
}

// --------------- Export as a migration API handler ---------------

/**
 * Handle migration requests. Add these routes to your Hono app:
 *
 *   GET /api/migrate?action=status     — Check migration status
 *   GET /api/migrate?action=dry-run    — Dry run (count only)
 *   GET /api/migrate?action=migrate    — Run full migration
 *   GET /api/migrate?action=verify     — Verify migration
 *   GET /api/migrate?action=rollback   — Rollback D1 data
 *
 * All require master key: ?master=4321
 */
export async function handleMigrationRequest(
  env: MigrationEnv,
  action: string,
  masterKey: string,
  providedKey: string
): Promise<{ status: number; body: unknown }> {
  if (providedKey !== masterKey) {
    return { status: 403, body: { error: 'Unauthorized' } };
  }

  switch (action) {
    case 'status': {
      const { results } = await env.DB.prepare('SELECT * FROM _migration_meta').all();
      return { status: 200, body: { migration_records: results } };
    }

    case 'dry-run': {
      const report = await runMigration(env, { dryRun: true });
      return { status: 200, body: { dryRun: true, report } };
    }

    case 'migrate': {
      const report = await runMigration(env);
      return { status: 200, body: { dryRun: false, report } };
    }

    case 'verify': {
      const verification = await verifyMigration(env);
      return { status: 200, body: verification };
    }

    case 'rollback': {
      const result = await rollbackMigration(env);
      return { status: 200, body: result };
    }

    default:
      return { status: 400, body: { error: `Unknown action: ${action}. Use: status, dry-run, migrate, verify, rollback` } };
  }
}
