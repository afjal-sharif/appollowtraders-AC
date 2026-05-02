# BizManager v3.0 — KV to D1 Migration: Complete Architecture & Implementation Guide

## Table of Contents
1. [Architecture Overview](#1-architecture-overview)
2. [D1 Schema](#2-d1-schema)
3. [DB Helper Module](#3-db-helper-module)
4. [KV Cache Layer](#4-kv-cache-layer)
5. [API Refactoring](#5-api-refactoring)
6. [Migration Script](#6-migration-script)
7. [Deployment Runbook](#7-deployment-runbook)
8. [Performance Improvements](#8-performance-improvements)
9. [Risks & Mitigations](#9-risks--mitigations)

---

## 1. Architecture Overview

### Current Problem: KV Read Amplification

The original architecture stores **all** business entities as individual KV key-value pairs with prefix-based grouping (e.g., `sale:abc123`, `party:xyz789`). The `kvList()` helper function is called on nearly every page load and API request:

```
kvList(env, prefix) → KV.list({prefix}) → get EVERY key → KV.get(key) for EACH result
```

**Cost per `kvList` call:**
- 1 × `KV.list()` operation (paginated at 1000 keys)
- N × `KV.get()` operations (one per key in the prefix)
- For 500 sales records: **501 KV reads per call**

**Amplification across the app:**
- Dashboard loads 8 prefixes: `product:`, `sale:`, `purchase:`, `payment:`, `expense:`, `party:`, `order:`, `bank:` = **8 × kvList calls**
- Each report page loads 4-7 prefixes
- Login page calls `kvList('user:')` on every visit
- Export-all iterates 18 prefixes sequentially

**Free plan limits (Cloudflare KV):**
- 100,000 reads/day, 1,000 writes/day
- A single dashboard load with 200 records per entity ≈ 1,600 reads
- 60 page views/day exhausts the read quota

### Hybrid Architecture: D1 Primary + KV Cache

```
┌─────────────────────────────────────────────────────────────┐
│                    Cloudflare Worker (Hono)                  │
│                                                             │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │   D1 (SQL)   │    │  KV (Config) │    │  KV (Cache)  │  │
│  │              │    │              │    │              │  │
│  │  products    │    │  APP_LICENSE │    │  cache:prod  │  │
│  │  parties     │    │  APP_PIN     │    │  cache:sale  │  │
│  │  sales       │    │  COMPANY_    │    │  cache:*     │  │
│  │  sale_items  │    │  SETTINGS    │    │              │  │
│  │  purchases   │    │              │    │  TTL: 30-600s│  │
│  │  purch_items │    │              │    │              │  │
│  │  payments    │    │              │    │  Invalidated │  │
│  │  expenses    │    │              │    │  on D1 write │  │
│  │  orders      │    │              │    │              │  │
│  │  order_items │    │              │    └──────────────┘  │
│  │  users       │    │              │                       │
│  │  salespersons│    └──────────────┘                       │
│  │  banks       │                                           │
│  │  approvals   │    D1 Free Plan:                          │
│  │  mod_logs    │    - 5M reads/day                         │
│  │  prod_groups │    - 100K writes/day                      │
│  │  prod_brands │    - 5GB storage                          │
│  │  exp_heads   │    - 25ms read latency                    │
│  │  exp_subheads│                                           │
│  │  credit_lmts │    KV Free Plan:                          │
│  │  thana_fares │    - 100K reads/day (cache only)          │
│  │  cb          │    - 1K writes/day (config only)          │
│  └──────────────┘                                           │
└─────────────────────────────────────────────────────────────┘
```

### Design Principles

1. **D1 is the source of truth** for all business entities, logs, and approvals
2. **KV stores only**: `APP_LICENSE`, `APP_PIN`, `COMPANY_SETTINGS`, and `cache:*` entries
3. **Prepared statements** for all D1 queries — no string interpolation
4. **Batch operations** via D1's `db.batch()` for multi-table writes (e.g., sale + sale_items + modlog)
5. **Client-side API unchanged** — `loadList()`, `saveItem()`, `deleteItem()` keep the same interface
6. **Zero KV list operations** — eliminates the entire `kvList()` pattern entirely
7. **Cache-through pattern** — KV cache with prefix-level TTL and write-through invalidation

### Free Plan Budget After Migration

| Resource | Before (KV-only) | After (D1+KV) | Free Limit |
|----------|------------------|---------------|------------|
| KV reads/day | ~50,000+ | ~500 (config+cache) | 100,000 |
| KV writes/day | ~200+ | ~10 (config changes) | 1,000 |
| D1 reads/day | 0 | ~10,000 | 5,000,000 |
| D1 writes/day | 0 | ~500 | 100,000 |

**Result: ≥95% reduction in KV traffic, comfortably within all free plan limits.**

---

## 2. D1 Schema

### File: `d1/schema.sql`

**21 tables** covering all business entities:

| Table | KV Prefix | Notes |
|-------|-----------|-------|
| `products` | `product:` | Inventory items |
| `prod_groups` | `prodgroup:` | Product categories |
| `prod_brands` | `prodbrand:` | Product brands |
| `parties` | `party:` | Customers & suppliers (type field) |
| `salespersons` | `salesperson:` | Sales reps |
| `banks` | `bank:` | Bank accounts |
| `sales` | `sale:` | Sale headers |
| `sale_items` | — | Sale line items (FK → sales) |
| `purchases` | `purchase:` | Purchase headers |
| `purchase_items` | — | Purchase line items (FK → purchases) |
| `payments` | `payment:` | Receipts, payments, transfers |
| `expenses` | `expense:` | Expense records |
| `exp_heads` | `exphead:` | Expense category heads |
| `exp_subheads` | `expsubhead:` | Expense sub-heads |
| `orders` | `order:` | SP Portal orders |
| `order_items` | — | Order line items (FK → orders) |
| `users` | `user:` | App users with roles |
| `approvals` | `approval:` | Edit/delete approval queue |
| `mod_logs` | `modlog:` | Append-only audit trail |
| `credit_limits` | `creditlimit:` | Party credit limits |
| `thana_fares` | `thanafare:` | Truck fare settings |
| `cb` | `cb:` | Cash balance tracking |
| `_migration_meta` | — | Migration state tracking |

### Key Design Decisions

- **Normalized structure**: Line items (sale_items, purchase_items, order_items) in separate tables with FK constraints and CASCADE delete
- **extra_data column**: Every table has a `TEXT DEFAULT '{}'` column to capture unmapped KV fields without data loss
- **Composite indexes**: Date+customer, date+supplier, date+salesperson for report query performance
- **WAL mode**: `PRAGMA journal_mode = WAL` for concurrent read performance
- **Foreign keys**: `PRAGMA foreign_keys = ON` for referential integrity

---

## 3. DB Helper Module

### File: `src/db.ts`

The DB helper module provides the complete D1 abstraction layer:

### Core Functions

| Function | Replaces | Description |
|----------|----------|-------------|
| `dbList(db, prefix)` | `kvList(env, prefix)` | SELECT * with N+1 avoidance for items |
| `dbGet(db, key)` | `KV.get(key)` | SELECT by id with item loading |
| `dbSave(db, prefix, data, key?)` | `KV.put(key, JSON)` | UPSERT with batch item handling |
| `dbDelete(db, key)` | `KV.delete(key)` | DELETE with CASCADE for items |
| `dbWriteLog(db, ...)` | manual KV log write | INSERT into mod_logs |
| `dbCreateApproval(db, ...)` | manual KV approval write | INSERT into approvals |
| `dbProcessApproval(db, ...)` | complex KV approval logic | UPDATE + execute approved action |
| `dbExportAll(db)` | multi-prefix kvList loop | Export all tables |
| `dbImportAll(db, data)` | multi-prefix KV.put loop | Import KV-format data |
| `dbListKeys(db, prefix)` | KV.list({prefix}) | SELECT id for admin browser |
| `dbCount(db, prefix)` | — | COUNT(*) for migration verification |

### Key Features

**N+1 Query Avoidance:**
```typescript
// BAD (old pattern): N+1 queries for sale items
for (const sale of sales) {
  sale.items = await getItems(sale.id); // 1 query per sale
}

// GOOD (new pattern): Single batch query
const ids = sales.map(s => s.id);
const placeholders = ids.map(() => '?').join(',');
const allItems = await db.prepare(
  `SELECT * FROM sale_items WHERE sale_id IN (${placeholders})`
).bind(...ids).all();
```

**Batch Atomicity:**
```typescript
// Sale + items + modlog in single atomic batch
await db.batch([
  db.prepare('INSERT OR REPLACE INTO sales ...').bind(...),
  db.prepare('DELETE FROM sale_items WHERE sale_id = ?').bind(id),
  db.prepare('INSERT INTO sale_items ...').bind(...), // item 1
  db.prepare('INSERT INTO sale_items ...').bind(...), // item 2
]);
```

**Field Mapping (camelCase ↔ snake_case):**
```typescript
// KV format: { invoiceNo: 'INV-001', customerName: 'Bob' }
// D1 format: { invoice_no: 'INV-001', customer_name: 'Bob' }
// Bidirectional mapping handled automatically by FIELD_MAP
```

**Extra Data Preservation:**
Any KV fields that don't map to a D1 column are serialized into the `extra_data` JSON column, ensuring zero data loss during migration.

---

## 4. KV Cache Layer

### File: `src/kv-cache.ts`

### Cache Architecture

```
Client → API → cachedDbList() → KV cache hit? → return cached
                              → KV cache miss → D1 query → cache in KV → return
```

### TTL Configuration

| Prefix | TTL | Rationale |
|--------|-----|-----------|
| `product:`, `party:`, `bank:`, `salesperson:` | 300s (5 min) | Changes rarely |
| `prodgroup:`, `prodbrand:`, `exphead:`, `thanafare:` | 600s (10 min) | Reference data |
| `sale:`, `purchase:`, `payment:`, `expense:`, `order:` | 60s (1 min) | Transaction data |
| `user:` | 120s (2 min) | Security-sensitive |
| `approval:` | 30s | Needs to be responsive |
| `modlog:` | 120s (2 min) | Audit trail |

### Write-Through Invalidation

Every D1 write triggers cache invalidation for the affected prefix:

```typescript
// In /api/save handler:
await dbSave(c.env.DB, prefix, data, key);
await cacheInvalidate(c.env.DATA_STORE, ...getRelatedPrefixes(prefix));
```

Related prefix tracking ensures that when a sale is created, the product cache is also invalidated (since stock views may change).

### Config KV Keys (Not Cached)

These keys are read/written directly via dedicated helper functions — they are NOT D1-backed:
- `APP_LICENSE` — License expiry date
- `APP_PIN` — Admin PIN
- `COMPANY_SETTINGS` — Company configuration JSON

---

## 5. API Refactoring

### File: `src/index.tsx`

### Bindings Change

```typescript
// Before:
type Bindings = { DATA_STORE: KVNamespace }

// After:
type Bindings = { DATA_STORE: KVNamespace; DB: D1Database }
```

### Route-by-Route Changes

| Route | Before | After |
|-------|--------|-------|
| `POST /api/list` | `kvList(env, prefix)` | `cachedDbList(kv, dbList, prefix)` |
| `POST /api/save` | `KV.put(key, JSON)` | `dbSave(db, prefix, data, key)` + cache invalidation |
| `POST /api/get` | `KV.get(key)` → parse | `dbGet(db, key)` |
| `POST /api/delete` | `KV.delete(key)` | `dbDelete(db, key)` + cache invalidation |
| `POST /api/approval-list` | `kvList(env, 'approval:')` | `cachedDbList(kv, dbList, 'approval:')` |
| `POST /api/approval-action` | manual KV ops | `dbProcessApproval(db, ...)` |
| `GET /api/company-settings` | `KV.get('COMPANY_SETTINGS')` | `kvGetCompanySettings(kv)` |
| `POST /api/company-settings` | `KV.put('COMPANY_SETTINGS')` | `kvSetCompanySettings(kv, data)` |
| `POST /api/export-all` | 18 × kvList loops | `dbExportAll(db)` |
| `POST /api/import-all` | loop KV.put | `dbImportAll(db, data)` + `cacheInvalidateAll()` |
| `POST /api/change-pin` | `KV.get/put('APP_PIN')` | `kvGetPin(kv)` / `kvSetPin(kv, pin)` |
| `POST /api/kv-keys` | `KV.list({prefix})` | `dbListKeys(db, prefix)` |
| `POST /api/kv-get` | `KV.get(key)` | `dbGet(db, key)` |
| `POST /api/kv-delete` | `KV.delete(key)` | `dbDelete(db, key)` + cache invalidation |
| `GET /api/license-info` | `KV.get('APP_LICENSE')` | `kvGetLicense(kv)` |
| `POST /api/set-license` | `KV.put('APP_LICENSE')` | `kvSetLicense(kv, date)` |
| `GET /api/migrate` | — | NEW: Migration management API |

### Approval Workflow Preserved

The entry-user approval workflow is fully preserved:
1. Entry user edits/deletes → `dbCreateApproval()` writes to D1 `approvals` table
2. Admin/manager approves → `dbProcessApproval()` executes the approved action + writes modlog
3. Cache invalidation fires after any approval action

### Frontend Unchanged

All client-side JavaScript functions (`loadList()`, `saveItem()`, `deleteItem()`, `api()`) continue to call the same API endpoints with the same request/response format. The migration is transparent to the frontend.

---

## 6. Migration Script

### File: `d1/migrate-kv-to-d1.ts`

### Migration Features

- **Resumable**: Uses UPSERT (INSERT OR REPLACE), so re-running is safe
- **Prefix-by-prefix**: Migrates one entity type at a time
- **Chunked reads**: KV gets in batches of 50 to avoid Worker timeout
- **Verification**: Post-migration count comparison + spot-check sampling
- **Rollback**: `DELETE FROM table` for all tables (KV data untouched)
- **Metadata tracking**: Migration state stored in `_migration_meta` table

### Migration API

The migration is exposed via a master-key-protected API:

```
GET /api/migrate?action=status&master=4321     — Check migration status
GET /api/migrate?action=dry-run&master=4321    — Count KV records without migrating
GET /api/migrate?action=migrate&master=4321    — Run full migration
GET /api/migrate?action=verify&master=4321     — Verify D1 matches KV
GET /api/migrate?action=rollback&master=4321   — Clear D1 data (KV untouched)
```

### Migration Flow

```
1. Deploy schema:       wrangler d1 migrations apply DB
2. Deploy worker:       npm run deploy
3. Dry run:            GET /api/migrate?action=dry-run&master=4321
4. Execute migration:  GET /api/migrate?action=migrate&master=4321
5. Verify:             GET /api/migrate?action=verify&master=4321
6. Monitor:            GET /api/migrate?action=status&master=4321
```

### Rollback Plan

If migration fails or data issues are discovered:
1. `GET /api/migrate?action=rollback&master=4321` — clears D1 data
2. Revert the worker code to the KV-only version
3. Redeploy — KV data is untouched throughout

---

## 7. Deployment Runbook

### Prerequisites

1. Create D1 database:
```bash
wrangler d1 create bizmanager-db
# Copy the database_id to wrangler.jsonc
```

2. Update `wrangler.jsonc` with actual D1 database ID:
```jsonc
"d1_databases": [
  {
    "binding": "DB",
    "database_name": "bizmanager-db",
    "database_id": "<YOUR-ACTUAL-DATABASE-ID>",
    "migrations_dir": "d1"
  }
]
```

3. Apply schema:
```bash
wrangler d1 execute bizmanager-db --file=d1/schema.sql
```

### Step-by-Step Deployment

```bash
# 1. Build and deploy
npm run build
wrangler pages deploy dist

# 2. Run migration (dry run first)
curl "https://your-worker.pages.dev/api/migrate?action=dry-run&master=4321"

# 3. Execute migration
curl "https://your-worker.pages.dev/api/migrate?action=migrate&master=4321"

# 4. Verify
curl "https://your-worker.pages.dev/api/migrate?action=verify&master=4321"

# 5. Test all pages manually:
#    - Dashboard, Inventory, Sales, Purchases, Payments, Expenses
#    - Reports (P&L, Balance Sheet, Trial Balance)
#    - Salesperson Portal, Orders, Approvals
#    - Export/Import, Admin, Mod Log
```

### Rollback Procedure

```bash
# Option A: Clear D1 and revert code
curl "https://your-worker.pages.dev/api/migrate?action=rollback&master=4321"
git revert HEAD  # revert to KV-only code
npm run deploy

# Option B: KV data is always intact — worst case, redeploy old code
```

---

## 8. Performance Improvements

### Query Cost Comparison

| Operation | KV (Before) | D1+KV Cache (After) | Improvement |
|-----------|-------------|---------------------|-------------|
| Dashboard load | 8 × kvList = ~1600 KV reads | 8 × cache check (≤8 KV reads) or 8 SQL queries | **200× fewer KV ops** |
| Save a sale | 1 KV.put + 1 modlog KV.put | 1 D1 batch (atomic) + 1 cache invalidate | **Atomic + consistent** |
| Delete a record | 1 KV.get + 1 KV.delete + 1 KV.put | 1 D1 DELETE (CASCADE) + 1 cache invalidate | **Simpler + cascading** |
| Export all | 18 × kvList = ~5000+ KV reads | 18 × SELECT queries | **50× fewer ops** |
| Login | kvList('user:') = N+1 KV reads | 1 SELECT or cached | **N× faster** |

### Latency Improvements

- **Cache hit**: ~5ms (KV edge cache)
- **Cache miss → D1**: ~25-50ms (single SQL query vs. N+1 KV reads)
- **Write path**: ~10-30ms (D1 batch) vs. ~50-100ms (multiple sequential KV.put)

### Resource Usage

- **D1 reads/day**: ~10,000 (well within 5M free limit)
- **D1 writes/day**: ~500 (well within 100K free limit)
- **KV reads/day**: ~500 (config + cache misses; 99.5% reduction)
- **KV writes/day**: ~10 (config changes only; 99% reduction)

---

## 9. Risks & Mitigations

### Risk 1: Data Loss During Migration

**Mitigation:**
- KV data is never deleted — migration is copy-only
- UPSERT ensures idempotent re-runs
- Verification step compares KV and D1 counts
- Rollback clears D1 only; KV remains intact
- `_migration_meta` table tracks per-prefix migration state

### Risk 2: D1 SQLite Limitations

**Mitigation:**
- D1 max row size: 1MB → `extra_data` column caps overflow
- D1 max database size: 5GB → more than sufficient for SMB accounting
- D1 max batch: 1000 statements → sales with 100+ items batched safely
- WAL mode + prepared statements for concurrent read safety

### Risk 3: Cache Staleness

**Mitigation:**
- Write-through invalidation on every D1 write
- Short TTLs for transaction data (60s)
- Related prefix tracking (sale write invalidates product cache)
- `cacheInvalidateAll()` available for bulk operations

### Risk 4: Field Mapping Errors

**Mitigation:**
- Comprehensive FIELD_MAP in db.ts covers all known camelCase → snake_case mappings
- `extra_data` column catches any unmapped fields — zero data loss
- Bidirectional conversion (KV→D1 and D1→KV format) preserves API compatibility

### Risk 5: Concurrent Write Conflicts

**Mitigation:**
- D1 batch operations are atomic (all-or-nothing)
- UPSERT (INSERT OR REPLACE) handles concurrent writes gracefully
- Approval workflow preserved — entry users can't directly modify data
- Mod logs capture all changes for audit trail

---

## File Structure

```
webapp/
├── d1/
│   ├── schema.sql              # D1 schema (21 tables + indexes)
│   └── migrate-kv-to-d1.ts    # Migration script with verify/rollback
├── src/
│   ├── index.tsx               # Refactored Hono app (D1+KV hybrid)
│   ├── db.ts                   # D1 database helper module
│   └── kv-cache.ts             # KV cache layer with TTL
├── wrangler.jsonc              # Updated with D1 binding
├── package.json
├── vite.config.ts
└── D1_MIGRATION.md             # This document
```
