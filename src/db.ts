// ============================================================
// BizManager v3.0 — D1 Database Helper Module
// Prepared statements, CRUD, batch ops, pagination
// ============================================================

// --------------- Types ---------------

export interface D1Database {
  prepare(query: string): D1PreparedStatement;
  batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>;
  exec(query: string): Promise<D1ExecResult>;
}

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(colName?: string): Promise<T | null>;
  run(): Promise<D1Result>;
  all<T = unknown>(): Promise<D1Result<T>>;
  raw<T = unknown>(): Promise<T[]>;
}

interface D1Result<T = unknown> {
  results: T[];
  success: boolean;
  meta: { duration: number; changes: number; last_row_id: number; rows_read: number; rows_written: number };
}

interface D1ExecResult {
  count: number;
  duration: number;
}

// --------------- Prefix → Table Mapping ---------------

export const PREFIX_TABLE_MAP: Record<string, string> = {
  'product:': 'products',
  'party:': 'parties',
  'sale:': 'sales',
  'purchase:': 'purchases',
  'payment:': 'payments',
  'expense:': 'expenses',
  'exphead:': 'exp_heads',
  'expsubhead:': 'exp_subheads',
  'bank:': 'banks',
  'cb:': 'cb',
  'user:': 'users',
  'order:': 'orders',
  'salesperson:': 'salespersons',
  'creditlimit:': 'credit_limits',
  'prodgroup:': 'prod_groups',
  'prodbrand:': 'prod_brands',
  'modlog:': 'mod_logs',
  'approval:': 'approvals',
  'thanafare:': 'thana_fares',
};

// Tables that have associated line-item tables
const HEADER_ITEM_MAP: Record<string, string> = {
  'sales': 'sale_items',
  'purchases': 'purchase_items',
  'orders': 'order_items',
};

// Column mappings: KV JSON field → D1 column name
// (maps camelCase KV fields to snake_case D1 columns)
const FIELD_MAP: Record<string, Record<string, string>> = {
  products: {
    purchasePrice: 'purchase_price', salePrice: 'sale_price',
    extraData: 'extra_data',
  },
  parties: {
    postOffice: 'post_office', openingBalance: 'opening_balance',
    creditLimit: 'credit_limit', salespersonId: 'salesperson_id',
    salespersonName: 'salesperson_name', extraData: 'extra_data',
  },
  sales: {
    invoiceNo: 'invoice_no', customerId: 'customer_id', customerName: 'customer_name',
    salespersonId: 'salesperson_id', salespersonName: 'salesperson_name',
    bankName: 'bank_name', discountType: 'discount_type',
    vatType: 'vat_type', vatAmount: 'vat_amount',
    aitType: 'ait_type', aitAmount: 'ait_amount',
    truckFare: 'truck_fare', customerThana: 'customer_thana',
    createdBy: 'created_by', extraData: 'extra_data',
  },
  purchases: {
    purchaseNo: 'purchase_no', supplierId: 'supplier_id', supplierName: 'supplier_name',
    bankName: 'bank_name', vatType: 'vat_type', extraData: 'extra_data',
  },
  payments: {
    bankName: 'bank_name', chequeNo: 'cheque_no', fromAcc: 'from_acc', toAcc: 'to_acc',
    autoInvoice: 'auto_invoice', isTruckFare: 'is_truck_fare',
    billKeys: 'bill_keys', extraData: 'extra_data',
    _autoInvoice: 'auto_invoice',
  },
  expenses: {
    expenseNo: 'expense_no', headName: 'head_name', subHeadName: 'sub_head_name',
    bankName: 'bank_name', isTruckFare: 'is_truck_fare', extraData: 'extra_data',
  },
  orders: {
    orderNo: 'order_no', customerId: 'customer_id', customerName: 'customer_name',
    spId: 'sp_id', spName: 'sp_name', spCode: 'sp_code',
    convertedInvoice: 'converted_invoice', extraData: 'extra_data',
  },
  salespersons: {
    extraData: 'extra_data',
  },
  banks: {
    accountNo: 'account_no', openingBalance: 'opening_balance', extraData: 'extra_data',
  },
  users: {
    extraData: 'extra_data',
  },
  approvals: {
    targetKey: 'target_key', newData: 'new_data', oldData: 'old_data',
    requestedBy: 'requested_by', requestedAt: 'requested_at',
    processedBy: 'processed_by', processedAt: 'processed_at',
    extraData: 'extra_data',
  },
  mod_logs: {
    oldData: 'old_data', extraData: 'extra_data',
  },
  exp_heads: {},
  exp_subheads: {
    headId: 'head_id', headName: 'head_name',
  },
  credit_limits: {
    partyId: 'party_id', partyName: 'party_name', extraData: 'extra_data',
  },
  thana_fares: {
    maxFare: 'max_fare', extraData: 'extra_data',
  },
  cb: {
    openingBalance: 'opening_balance', extraData: 'extra_data',
  },
  prod_groups: {},
  prod_brands: {},
};

// Item-table field maps
const ITEM_FIELD_MAP: Record<string, Record<string, string>> = {
  sale_items: {
    saleId: 'sale_id', productId: 'product_id', productName: 'product_name',
    extraData: 'extra_data',
  },
  purchase_items: {
    purchaseId: 'purchase_id', productId: 'product_id', productName: 'product_name',
    extraData: 'extra_data',
  },
  order_items: {
    orderId: 'order_id', productKey: 'product_key', productName: 'product_name',
    extraData: 'extra_data',
  },
};

// --------------- Column Schema (for insert/update) ---------------

// Returns the known columns for a table (excluding auto-generated ones)
function getTableColumns(table: string): string[] {
  const schemas: Record<string, string[]> = {
    products: ['id', 'name', 'sku', 'unit', '"group"', 'brand', 'purchase_price', 'sale_price', 'stock', 'extra_data', 'created_at', 'updated_at'],
    parties: ['id', 'name', 'type', 'phone', 'address', 'division', 'district', 'thana', 'post_office', 'postcode', 'opening_balance', 'credit_limit', 'salesperson_id', 'salesperson_name', 'extra_data', 'created_at', 'updated_at'],
    salespersons: ['id', 'name', 'code', 'pin', 'phone', 'active', 'extra_data', 'created_at', 'updated_at'],
    banks: ['id', 'name', 'account_no', 'opening_balance', 'balance', 'extra_data', 'created_at', 'updated_at'],
    sales: ['id', 'invoice_no', 'date', 'customer_id', 'customer_name', 'salesperson_id', 'salesperson_name', 'method', 'bank_name', 'discount', 'discount_type', 'extra', 'vat', 'vat_type', 'vat_amount', 'ait', 'ait_type', 'ait_amount', 'truck_fare', 'total', 'paid', 'note', 'customer_thana', 'created_by', 'extra_data', 'created_at', 'updated_at'],
    sale_items: ['sale_id', 'product_id', 'product_name', 'qty', 'rate', 'amount', 'extra_data'],
    purchases: ['id', 'purchase_no', 'date', 'supplier_id', 'supplier_name', 'method', 'bank_name', 'discount', 'extra', 'vat', 'vat_type', 'total', 'paid', 'note', 'extra_data', 'created_at', 'updated_at'],
    purchase_items: ['purchase_id', 'product_id', 'product_name', 'qty', 'rate', 'amount', 'extra_data'],
    payments: ['id', '"no"', 'date', 'type', 'party', 'method', 'bank_name', 'amount', 'note', 'cheque_no', 'status', 'from_acc', 'to_acc', 'auto_invoice', 'is_truck_fare', 'bill_keys', 'extra_data', 'created_at', 'updated_at'],
    expenses: ['id', 'expense_no', 'date', 'head_name', 'sub_head_name', 'method', 'bank_name', 'amount', 'description', 'is_truck_fare', 'extra_data', 'created_at', 'updated_at'],
    exp_heads: ['id', 'name', 'created_at'],
    exp_subheads: ['id', 'name', 'head_id', 'head_name', 'created_at'],
    orders: ['id', 'order_no', 'date', 'customer_id', 'customer_name', 'sp_id', 'sp_name', 'sp_code', 'total', 'status', 'converted_invoice', 'note', 'extra_data', 'created_at', 'updated_at'],
    order_items: ['order_id', 'product_key', 'product_name', 'qty', 'rate', 'amount', 'extra_data'],
    users: ['id', 'username', 'password', 'name', 'role', 'active', 'extra_data', 'created_at', 'updated_at'],
    approvals: ['id', 'type', 'target_key', 'prefix', 'new_data', 'old_data', 'detail', 'requested_by', 'requested_at', 'status', 'processed_by', 'processed_at', 'extra_data', 'created_at'],
    mod_logs: ['id', 'action', 'detail', 'key', 'prefix', 'old_data', '"user"', 'timestamp', 'extra_data'],
    credit_limits: ['id', 'party_id', 'party_name', 'amount', 'extra_data', 'created_at'],
    thana_fares: ['id', 'thana', 'district', 'division', 'max_fare', 'extra_data', 'created_at', 'updated_at'],
    cb: ['id', 'opening_balance', 'extra_data', 'created_at'],
    prod_groups: ['id', 'name', 'created_at', 'updated_at'],
    prod_brands: ['id', 'name', 'created_at', 'updated_at'],
  };
  return schemas[table] || [];
}

// --------------- Helpers ---------------

function genId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

/** Map a camelCase KV JSON field to a snake_case D1 column name */
function mapField(table: string, field: string): string {
  const fm = FIELD_MAP[table];
  if (fm && fm[field]) return fm[field];
  // Standard camelCase → snake_case conversion for unmapped fields
  return field;
}

/** Map an item-table camelCase field to D1 column name */
function mapItemField(itemTable: string, field: string): string {
  const fm = ITEM_FIELD_MAP[itemTable];
  if (fm && fm[field]) return fm[field];
  return field;
}

/** Convert a KV JSON object to D1-compatible column→value pairs */
function kvDataToColumns(table: string, data: Record<string, unknown>): Record<string, unknown> {
  const cols = getTableColumns(table);
  // Clean column names (remove quotes) for matching
  const cleanCols = cols.map(c => c.replace(/"/g, ''));
  const result: Record<string, unknown> = {};
  const extraFields: Record<string, unknown> = {};

  for (const [key, val] of Object.entries(data)) {
    if (key === '_key' || key === '_items') continue;
    const mapped = mapField(table, key);
    if (cleanCols.includes(mapped)) {
      // Serialize objects/arrays to JSON strings
      if (typeof val === 'object' && val !== null) {
        result[mapped] = JSON.stringify(val);
      } else {
        result[mapped] = val;
      }
    } else {
      // Stash unmapped fields in extra_data
      extraFields[key] = val;
    }
  }

  // Merge extra fields into extra_data
  if (Object.keys(extraFields).length > 0) {
    let existing: Record<string, unknown> = {};
    if (result['extra_data'] && typeof result['extra_data'] === 'string') {
      try { existing = JSON.parse(result['extra_data'] as string); } catch {}
    }
    result['extra_data'] = JSON.stringify({ ...existing, ...extraFields });
  }

  return result;
}

/** Convert item data (from KV items array) to D1 columns */
function kvItemToColumns(itemTable: string, item: Record<string, unknown>, parentId: string): Record<string, unknown> {
  const cols = getTableColumns(itemTable);
  const cleanCols = cols.map(c => c.replace(/"/g, ''));
  const result: Record<string, unknown> = {};
  const extraFields: Record<string, unknown> = {};

  // Set the parent foreign key
  if (itemTable === 'sale_items') result['sale_id'] = parentId;
  else if (itemTable === 'purchase_items') result['purchase_id'] = parentId;
  else if (itemTable === 'order_items') result['order_id'] = parentId;

  for (const [key, val] of Object.entries(item)) {
    if (key === '_key') continue;
    const mapped = mapItemField(itemTable, key);
    if (cleanCols.includes(mapped)) {
      if (typeof val === 'object' && val !== null) {
        result[mapped] = JSON.stringify(val);
      } else {
        result[mapped] = val;
      }
    } else {
      extraFields[key] = val;
    }
  }

  if (Object.keys(extraFields).length > 0) {
    result['extra_data'] = JSON.stringify(extraFields);
  }

  return result;
}

/** Convert a D1 row back to KV-compatible JSON (for API compatibility) */
function rowToKvFormat(table: string, row: Record<string, unknown>, prefix: string): Record<string, unknown> {
  const id = row['id'] as string;
  const result: Record<string, unknown> = { _key: prefix + id };

  // Reverse-map columns back to camelCase
  const reverseMap: Record<string, string> = {};
  const fm = FIELD_MAP[table] || {};
  for (const [camel, snake] of Object.entries(fm)) {
    reverseMap[snake] = camel;
  }

  for (const [col, val] of Object.entries(row)) {
    if (col === 'id') continue;
    if (col === 'created_at' || col === 'updated_at') continue;
    const fieldName = reverseMap[col] || col;
    // Parse JSON strings back to objects
    if (col === 'extra_data' && typeof val === 'string' && val !== '{}') {
      try {
        const extra = JSON.parse(val);
        Object.assign(result, extra);
      } catch {}
      continue;
    }
    if (col === 'bill_keys' && typeof val === 'string') {
      try { result[fieldName] = JSON.parse(val); } catch { result[fieldName] = val; }
      continue;
    }
    if (col === 'new_data' || col === 'old_data') {
      if (typeof val === 'string') {
        try { result[fieldName] = JSON.parse(val); } catch { result[fieldName] = val; }
      } else {
        result[fieldName] = val;
      }
      continue;
    }
    result[fieldName] = val;
  }

  return result;
}

/** Convert item rows to KV-compatible format */
function itemRowsToKvFormat(rows: Record<string, unknown>[]): Record<string, unknown>[] {
  return rows.map(row => {
    const result: Record<string, unknown> = {};
    for (const [col, val] of Object.entries(row)) {
      if (col === 'id' || col === 'extra_data') continue;
      if (col === 'sale_id' || col === 'purchase_id' || col === 'order_id') continue;
      result[col] = val;
    }
    // Merge extra_data fields
    if (row['extra_data'] && typeof row['extra_data'] === 'string' && row['extra_data'] !== '{}') {
      try { Object.assign(result, JSON.parse(row['extra_data'] as string)); } catch {}
    }
    return result;
  });
}

// --------------- Core DB Operations ---------------

/**
 * List all records from a D1 table (replaces kvList).
 * Returns KV-compatible JSON array with _key field.
 */
export async function dbList(db: D1Database, prefix: string): Promise<Record<string, unknown>[]> {
  const table = PREFIX_TABLE_MAP[prefix];
  if (!table) return [];

  const stmt = db.prepare(`SELECT * FROM ${table} ORDER BY created_at DESC`);
  const { results } = await stmt.all<Record<string, unknown>>();

  const items = results.map(row => rowToKvFormat(table, row, prefix));

  // For header tables with line items, load items too
  const itemTable = HEADER_ITEM_MAP[table];
  if (itemTable && results.length > 0) {
    const ids = results.map(r => r['id'] as string);
    // Batch load all items for all headers at once (N+1 avoidance)
    const placeholders = ids.map(() => '?').join(',');
    const fkCol = itemTable === 'sale_items' ? 'sale_id'
      : itemTable === 'purchase_items' ? 'purchase_id'
      : 'order_id';
    const itemStmt = db.prepare(`SELECT * FROM ${itemTable} WHERE ${fkCol} IN (${placeholders})`).bind(...ids);
    const { results: itemResults } = await itemStmt.all<Record<string, unknown>>();

    // Group items by parent ID
    const itemsByParent: Record<string, Record<string, unknown>[]> = {};
    for (const ir of itemResults) {
      const pid = ir[fkCol] as string;
      if (!itemsByParent[pid]) itemsByParent[pid] = [];
      itemsByParent[pid].push(ir);
    }

    // Attach items to their parent records
    for (const item of items) {
      const key = item._key as string;
      const id = key.replace(prefix, '');
      const childRows = itemsByParent[id] || [];
      if (childRows.length > 0) {
        (item as any).items = itemRowsToKvFormat(childRows);
      }
    }
  }

  return items;
}

/**
 * Get a single record by key (replaces KV.get).
 * Key format: "prefix:id"
 */
export async function dbGet(db: D1Database, key: string): Promise<Record<string, unknown> | null> {
  const colonIdx = key.indexOf(':');
  if (colonIdx === -1) return null;
  const prefix = key.substring(0, colonIdx + 1);
  const id = key.substring(colonIdx + 1);
  const table = PREFIX_TABLE_MAP[prefix];
  if (!table) return null;

  const stmt = db.prepare(`SELECT * FROM ${table} WHERE id = ?`).bind(id);
  const row = await stmt.first<Record<string, unknown>>();
  if (!row) return null;

  const result = rowToKvFormat(table, row, prefix);

  // Load items if applicable
  const itemTable = HEADER_ITEM_MAP[table];
  if (itemTable) {
    const fkCol = itemTable === 'sale_items' ? 'sale_id'
      : itemTable === 'purchase_items' ? 'purchase_id'
      : 'order_id';
    const itemStmt = db.prepare(`SELECT * FROM ${itemTable} WHERE ${fkCol} = ?`).bind(id);
    const { results: itemResults } = await itemStmt.all<Record<string, unknown>>();
    if (itemResults.length > 0) {
      (result as any).items = itemRowsToKvFormat(itemResults);
    }
  }

  // Strip _key for raw get (matches original KV.get behavior)
  delete result._key;
  return result;
}

/**
 * Save (insert or upsert) a record to D1 (replaces KV.put).
 * Returns the key that was saved.
 */
export async function dbSave(
  db: D1Database,
  prefix: string,
  data: Record<string, unknown>,
  existingKey?: string
): Promise<string> {
  const table = PREFIX_TABLE_MAP[prefix];
  if (!table) throw new Error(`Unknown prefix: ${prefix}`);

  // Determine the record ID
  let id: string;
  if (existingKey) {
    id = existingKey.startsWith(prefix) ? existingKey.substring(prefix.length) : existingKey;
  } else {
    id = genId();
  }

  const now = new Date().toISOString();
  const cols = kvDataToColumns(table, data);
  cols['id'] = id;
  cols['updated_at'] = now;
  if (!existingKey) {
    cols['created_at'] = now;
  }

  // Build UPSERT statement
  const colNames = Object.keys(cols);
  const quotedColNames = colNames.map(c => {
    if (c === 'group') return '"group"';
    if (c === 'no') return '"no"';
    if (c === 'user') return '"user"';
    return c;
  });
  const placeholders = colNames.map(() => '?').join(', ');
  const updateClauses = colNames
    .filter(c => c !== 'id' && c !== 'created_at')
    .map(c => {
      const qc = c === 'group' ? '"group"' : c === 'no' ? '"no"' : c === 'user' ? '"user"' : c;
      return `${qc} = excluded.${qc}`;
    })
    .join(', ');

  const sql = `INSERT INTO ${table} (${quotedColNames.join(', ')}) VALUES (${placeholders})
    ON CONFLICT(id) DO UPDATE SET ${updateClauses}`;

  const values = colNames.map(c => cols[c] ?? null);

  const stmts: D1PreparedStatement[] = [db.prepare(sql).bind(...values)];

  // Handle line items (sale_items, purchase_items, order_items)
  const itemTable = HEADER_ITEM_MAP[table];
  const itemsData = data.items || data._items;
  if (itemTable && Array.isArray(itemsData)) {
    // Delete existing items first
    const fkCol = itemTable === 'sale_items' ? 'sale_id'
      : itemTable === 'purchase_items' ? 'purchase_id'
      : 'order_id';
    stmts.push(db.prepare(`DELETE FROM ${itemTable} WHERE ${fkCol} = ?`).bind(id));

    // Insert new items
    for (const item of itemsData as Record<string, unknown>[]) {
      const itemCols = kvItemToColumns(itemTable, item, id);
      const itemColNames = Object.keys(itemCols);
      const quotedItemCols = itemColNames.map(c => c === 'no' ? '"no"' : c);
      const itemPlaceholders = itemColNames.map(() => '?').join(', ');
      const itemValues = itemColNames.map(c => itemCols[c] ?? null);
      stmts.push(
        db.prepare(`INSERT INTO ${itemTable} (${quotedItemCols.join(', ')}) VALUES (${itemPlaceholders})`).bind(...itemValues)
      );
    }
  }

  // Execute as a batch for atomicity
  await db.batch(stmts);

  return prefix + id;
}

/**
 * Delete a record from D1 (replaces KV.delete).
 * CASCADE will handle line items automatically.
 */
export async function dbDelete(db: D1Database, key: string): Promise<void> {
  const colonIdx = key.indexOf(':');
  if (colonIdx === -1) return;
  const prefix = key.substring(0, colonIdx + 1);
  const id = key.substring(colonIdx + 1);
  const table = PREFIX_TABLE_MAP[prefix];
  if (!table) return;

  await db.prepare(`DELETE FROM ${table} WHERE id = ?`).bind(id).run();
}

/**
 * Write a modification log entry to D1.
 */
export async function dbWriteLog(
  db: D1Database,
  action: string,
  detail: string,
  key: string,
  prefix: string,
  user: string,
  oldData?: string
): Promise<void> {
  const id = genId();
  const now = new Date().toISOString();
  await db.prepare(
    `INSERT INTO mod_logs (id, action, detail, key, prefix, old_data, "user", timestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(id, action, detail, key, prefix, oldData || '', user, now).run();
}

/**
 * Create an approval record in D1.
 */
export async function dbCreateApproval(
  db: D1Database,
  type: 'edit' | 'delete',
  targetKey: string,
  prefix: string,
  newData: unknown,
  oldData: unknown,
  detail: string,
  requestedBy: string
): Promise<string> {
  const id = genId();
  const now = new Date().toISOString();
  await db.prepare(
    `INSERT INTO approvals (id, type, target_key, prefix, new_data, old_data, detail, requested_by, requested_at, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?)`
  ).bind(
    id, type, targetKey, prefix,
    JSON.stringify(newData), JSON.stringify(oldData),
    detail, requestedBy, now, now
  ).run();
  return 'approval:' + id;
}

/**
 * Process an approval (approve or reject).
 */
export async function dbProcessApproval(
  db: D1Database,
  approvalId: string,
  action: 'approve' | 'reject',
  processedBy: string
): Promise<{ success: boolean; error?: string; status?: string }> {
  // Extract raw id
  const id = approvalId.startsWith('approval:') ? approvalId.substring(9) : approvalId;

  const row = await db.prepare(`SELECT * FROM approvals WHERE id = ?`).bind(id).first<Record<string, unknown>>();
  if (!row) return { success: false, error: 'Approval not found' };
  if (row['status'] !== 'pending') return { success: false, error: 'Already processed' };

  const now = new Date().toISOString();
  const newStatus = action === 'approve' ? 'approved' : 'rejected';

  if (action === 'approve') {
    const targetKey = row['target_key'] as string;
    const prefix = row['prefix'] as string;
    const type = row['type'] as string;
    const requestedBy = row['requested_by'] as string;

    if (type === 'edit' && row['new_data']) {
      const newData = typeof row['new_data'] === 'string' ? JSON.parse(row['new_data'] as string) : row['new_data'];
      await dbSave(db, prefix, newData, targetKey);
      await dbWriteLog(db, 'edit', `Approved edit by ${requestedBy}: ${row['detail']}`, targetKey, prefix, processedBy);
    } else if (type === 'delete') {
      await dbDelete(db, targetKey);
      await dbWriteLog(db, 'delete', `Approved delete by ${requestedBy}: ${row['detail']}`, targetKey, prefix, processedBy);
    }
  }

  await db.prepare(`UPDATE approvals SET status = ?, processed_by = ?, processed_at = ? WHERE id = ?`)
    .bind(newStatus, processedBy, now, id).run();

  return { success: true, status: newStatus };
}

/**
 * Export all data from all D1 tables (replaces export-all).
 * Returns format compatible with existing import/export.
 */
export async function dbExportAll(db: D1Database): Promise<Record<string, Record<string, unknown>[]>> {
  const all: Record<string, Record<string, unknown>[]> = {};
  for (const [prefix] of Object.entries(PREFIX_TABLE_MAP)) {
    all[prefix] = await dbList(db, prefix);
  }
  return all;
}

/**
 * Import all data from KV export format into D1.
 * Returns count of imported records.
 */
export async function dbImportAll(db: D1Database, data: Record<string, unknown[]>): Promise<number> {
  let count = 0;
  for (const [prefix, items] of Object.entries(data)) {
    if (!Array.isArray(items)) continue;
    const table = PREFIX_TABLE_MAP[prefix];
    if (!table) continue;

    for (const item of items as Record<string, unknown>[]) {
      const key = item._key as string | undefined;
      const clean = { ...item };
      delete clean._key;
      await dbSave(db, prefix, clean, key);
      count++;
    }
  }
  return count;
}

/**
 * List KV key names for a prefix (for admin KV browser — now backed by D1).
 */
export async function dbListKeys(db: D1Database, prefix: string, limit = 100): Promise<string[]> {
  const table = PREFIX_TABLE_MAP[prefix];
  if (!table) return [];

  const { results } = await db.prepare(`SELECT id FROM ${table} ORDER BY created_at DESC LIMIT ?`).bind(limit).all<{ id: string }>();
  return results.map(r => prefix + r.id);
}

/**
 * Count records in a table (useful for migration verification).
 */
export async function dbCount(db: D1Database, prefix: string): Promise<number> {
  const table = PREFIX_TABLE_MAP[prefix];
  if (!table) return 0;

  const row = await db.prepare(`SELECT COUNT(*) as cnt FROM ${table}`).first<{ cnt: number }>();
  return row?.cnt || 0;
}
