// ============================================================
// BizManager v3.0 — KV Cache Layer
// TTL-based caching with prefix-level invalidation
// KV is used ONLY for: APP_LICENSE, APP_PIN, COMPANY_SETTINGS, cache:*
// ============================================================

export interface KVNamespace {
  get(key: string, options?: { type?: string }): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
  delete(key: string): Promise<void>;
  list(options?: { prefix?: string; cursor?: string; limit?: number }): Promise<{
    keys: { name: string }[];
    list_complete: boolean;
    cursor?: string;
  }>;
}

// --------------- Cache Configuration ---------------

/** TTL in seconds for different cache types */
const CACHE_TTL: Record<string, number> = {
  'product:': 300,      // 5 min — products change rarely
  'party:': 300,        // 5 min
  'prodgroup:': 600,    // 10 min
  'prodbrand:': 600,    // 10 min
  'salesperson:': 300,  // 5 min
  'bank:': 300,         // 5 min
  'exphead:': 600,      // 10 min
  'expsubhead:': 600,   // 10 min
  'thanafare:': 600,    // 10 min
  'creditlimit:': 300,  // 5 min
  'cb:': 300,           // 5 min
  'user:': 120,         // 2 min — security-sensitive
  'sale:': 60,          // 1 min — changes frequently
  'purchase:': 60,      // 1 min
  'payment:': 60,       // 1 min
  'expense:': 60,       // 1 min
  'order:': 60,         // 1 min
  'modlog:': 120,       // 2 min
  'approval:': 30,      // 30 sec — needs to be responsive
};

const CACHE_PREFIX = 'cache:';

/** Maximum cache value size (KV limit is 25MB, we cap at 2MB for safety) */
const MAX_CACHE_SIZE = 2 * 1024 * 1024;

// --------------- Cache Operations ---------------

/**
 * Get cached data for a prefix.
 * Returns null on cache miss.
 */
export async function cacheGet(
  kv: KVNamespace | undefined,
  prefix: string
): Promise<Record<string, unknown>[] | null> {
  if (!kv) return null;
  try {
    const key = CACHE_PREFIX + prefix;
    const raw = await kv.get(key);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * Set cached data for a prefix with TTL.
 * Silently fails if KV is unavailable or data too large.
 */
export async function cacheSet(
  kv: KVNamespace | undefined,
  prefix: string,
  data: Record<string, unknown>[]
): Promise<void> {
  if (!kv) return;
  try {
    const serialized = JSON.stringify(data);
    if (serialized.length > MAX_CACHE_SIZE) return; // Skip caching oversized data
    const ttl = CACHE_TTL[prefix] || 60;
    await kv.put(CACHE_PREFIX + prefix, serialized, { expirationTtl: ttl });
  } catch {
    // Cache write failures are non-fatal
  }
}

/**
 * Invalidate cache for one or more prefixes.
 * Call this after any D1 write operation.
 */
export async function cacheInvalidate(
  kv: KVNamespace | undefined,
  ...prefixes: string[]
): Promise<void> {
  if (!kv) return;
  try {
    await Promise.all(
      prefixes.map(p => kv.delete(CACHE_PREFIX + p))
    );
  } catch {
    // Cache invalidation failures are non-fatal
  }
}

/**
 * Invalidate ALL cached prefixes (nuclear option — for import-all, etc.)
 */
export async function cacheInvalidateAll(kv: KVNamespace | undefined): Promise<void> {
  if (!kv) return;
  try {
    let cursor: string | undefined;
    const keysToDelete: string[] = [];
    do {
      const result = await kv.list({ prefix: CACHE_PREFIX, cursor, limit: 1000 });
      keysToDelete.push(...result.keys.map(k => k.name));
      cursor = result.list_complete ? undefined : result.cursor;
    } while (cursor);
    await Promise.all(keysToDelete.map(k => kv.delete(k)));
  } catch {
    // Non-fatal
  }
}

// --------------- Config KV Operations (non-cache) ---------------

/**
 * Get APP_LICENSE from KV.
 */
export async function kvGetLicense(kv: KVNamespace | undefined): Promise<string | null> {
  if (!kv) return null;
  return kv.get('APP_LICENSE');
}

/**
 * Set APP_LICENSE in KV.
 */
export async function kvSetLicense(kv: KVNamespace | undefined, date: string): Promise<void> {
  if (!kv) return;
  await kv.put('APP_LICENSE', date);
}

/**
 * Get APP_PIN from KV.
 */
export async function kvGetPin(kv: KVNamespace | undefined): Promise<string | null> {
  if (!kv) return null;
  return kv.get('APP_PIN');
}

/**
 * Set APP_PIN in KV.
 */
export async function kvSetPin(kv: KVNamespace | undefined, pin: string): Promise<void> {
  if (!kv) return;
  await kv.put('APP_PIN', pin);
}

/**
 * Get COMPANY_SETTINGS from KV.
 */
export async function kvGetCompanySettings(kv: KVNamespace | undefined): Promise<Record<string, unknown> | null> {
  if (!kv) return null;
  const raw = await kv.get('COMPANY_SETTINGS');
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

/**
 * Set COMPANY_SETTINGS in KV.
 */
export async function kvSetCompanySettings(kv: KVNamespace | undefined, data: Record<string, unknown>): Promise<void> {
  if (!kv) return;
  await kv.put('COMPANY_SETTINGS', JSON.stringify(data));
}

// --------------- Cache-Through Pattern ---------------

/**
 * Load data with cache-through pattern:
 * 1. Check KV cache
 * 2. If miss, query D1
 * 3. Store result in KV cache
 * 4. Return data
 *
 * This is the main function that replaces kvList() in the app.
 */
export async function cachedDbList(
  kv: KVNamespace | undefined,
  dbListFn: (prefix: string) => Promise<Record<string, unknown>[]>,
  prefix: string
): Promise<Record<string, unknown>[]> {
  // 1. Try cache
  const cached = await cacheGet(kv, prefix);
  if (cached !== null) return cached;

  // 2. Query D1
  const data = await dbListFn(prefix);

  // 3. Cache the result
  await cacheSet(kv, prefix, data);

  // 4. Return
  return data;
}

/**
 * Determine which prefixes are affected by a write operation.
 * Used to know what caches to invalidate.
 */
export function getRelatedPrefixes(prefix: string): string[] {
  // Some writes affect multiple caches
  const related: Record<string, string[]> = {
    'sale:': ['sale:', 'product:'],       // Sales affect product stock views
    'purchase:': ['purchase:', 'product:'], // Purchases affect product stock views
    'payment:': ['payment:'],
    'expense:': ['expense:'],
    'order:': ['order:'],
    'product:': ['product:'],
    'party:': ['party:'],
  };
  return related[prefix] || [prefix];
}
