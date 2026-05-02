-- ============================================================
-- BizManager v3.0 — D1 Schema (SQLite)
-- Normalized, indexed, ledger-safe, with FK constraints
-- Version: 2.0 — Complete migration-ready schema
-- ============================================================

PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

-- ============================================================
-- PRODUCTS & CATEGORIES
-- ============================================================

CREATE TABLE IF NOT EXISTS prod_groups (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_prod_groups_name ON prod_groups(name);

CREATE TABLE IF NOT EXISTS prod_brands (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_prod_brands_name ON prod_brands(name);

CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  sku TEXT DEFAULT '',
  unit TEXT DEFAULT 'pcs',
  "group" TEXT DEFAULT '',
  brand TEXT DEFAULT '',
  purchase_price REAL DEFAULT 0,
  sale_price REAL DEFAULT 0,
  stock REAL DEFAULT 0,
  extra_data TEXT DEFAULT '{}',
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_products_name ON products(name);
CREATE INDEX IF NOT EXISTS idx_products_group ON products("group");
CREATE INDEX IF NOT EXISTS idx_products_brand ON products(brand);
CREATE INDEX IF NOT EXISTS idx_products_sku ON products(sku);

-- ============================================================
-- PARTIES (Customers & Suppliers)
-- ============================================================

CREATE TABLE IF NOT EXISTS parties (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'customer',
  phone TEXT DEFAULT '',
  address TEXT DEFAULT '',
  division TEXT DEFAULT '',
  district TEXT DEFAULT '',
  thana TEXT DEFAULT '',
  post_office TEXT DEFAULT '',
  postcode TEXT DEFAULT '',
  opening_balance REAL DEFAULT 0,
  credit_limit REAL DEFAULT 0,
  salesperson_id TEXT DEFAULT '',
  salesperson_name TEXT DEFAULT '',
  extra_data TEXT DEFAULT '{}',
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_parties_type ON parties(type);
CREATE INDEX IF NOT EXISTS idx_parties_name ON parties(name);
CREATE INDEX IF NOT EXISTS idx_parties_salesperson ON parties(salesperson_id);
CREATE INDEX IF NOT EXISTS idx_parties_thana ON parties(thana);

-- ============================================================
-- SALESPERSONS
-- ============================================================

CREATE TABLE IF NOT EXISTS salespersons (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  code TEXT DEFAULT '',
  pin TEXT DEFAULT '',
  phone TEXT DEFAULT '',
  active INTEGER DEFAULT 1,
  extra_data TEXT DEFAULT '{}',
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_salespersons_code ON salespersons(code);

-- ============================================================
-- BANKS
-- ============================================================

CREATE TABLE IF NOT EXISTS banks (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  account_no TEXT DEFAULT '',
  opening_balance REAL DEFAULT 0,
  balance REAL DEFAULT 0,
  extra_data TEXT DEFAULT '{}',
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- ============================================================
-- SALES (header + line items)
-- ============================================================

CREATE TABLE IF NOT EXISTS sales (
  id TEXT PRIMARY KEY,
  invoice_no TEXT NOT NULL,
  date TEXT NOT NULL,
  customer_id TEXT DEFAULT '',
  customer_name TEXT DEFAULT '',
  salesperson_id TEXT DEFAULT '',
  salesperson_name TEXT DEFAULT '',
  method TEXT DEFAULT 'cash',
  bank_name TEXT DEFAULT '',
  discount REAL DEFAULT 0,
  discount_type TEXT DEFAULT 'amount',
  extra REAL DEFAULT 0,
  vat REAL DEFAULT 0,
  vat_type TEXT DEFAULT 'amount',
  vat_amount REAL DEFAULT 0,
  ait REAL DEFAULT 0,
  ait_type TEXT DEFAULT 'amount',
  ait_amount REAL DEFAULT 0,
  truck_fare REAL DEFAULT 0,
  total REAL DEFAULT 0,
  paid REAL DEFAULT 0,
  note TEXT DEFAULT '',
  customer_thana TEXT DEFAULT '',
  created_by TEXT DEFAULT '',
  extra_data TEXT DEFAULT '{}',
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_sales_date ON sales(date);
CREATE INDEX IF NOT EXISTS idx_sales_customer ON sales(customer_id);
CREATE INDEX IF NOT EXISTS idx_sales_salesperson ON sales(salesperson_id);
CREATE INDEX IF NOT EXISTS idx_sales_invoice ON sales(invoice_no);
CREATE INDEX IF NOT EXISTS idx_sales_method ON sales(method);
-- Composite index for date-range reports
CREATE INDEX IF NOT EXISTS idx_sales_date_customer ON sales(date, customer_id);
CREATE INDEX IF NOT EXISTS idx_sales_date_salesperson ON sales(date, salesperson_id);

CREATE TABLE IF NOT EXISTS sale_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  sale_id TEXT NOT NULL,
  product_id TEXT DEFAULT '',
  product_name TEXT DEFAULT '',
  qty REAL DEFAULT 0,
  rate REAL DEFAULT 0,
  amount REAL DEFAULT 0,
  extra_data TEXT DEFAULT '{}',
  FOREIGN KEY (sale_id) REFERENCES sales(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_sale_items_sale ON sale_items(sale_id);
CREATE INDEX IF NOT EXISTS idx_sale_items_product ON sale_items(product_id);

-- ============================================================
-- PURCHASES (header + line items)
-- ============================================================

CREATE TABLE IF NOT EXISTS purchases (
  id TEXT PRIMARY KEY,
  purchase_no TEXT NOT NULL,
  date TEXT NOT NULL,
  supplier_id TEXT DEFAULT '',
  supplier_name TEXT DEFAULT '',
  method TEXT DEFAULT 'cash',
  bank_name TEXT DEFAULT '',
  discount REAL DEFAULT 0,
  extra REAL DEFAULT 0,
  vat REAL DEFAULT 0,
  vat_type TEXT DEFAULT 'amount',
  total REAL DEFAULT 0,
  paid REAL DEFAULT 0,
  note TEXT DEFAULT '',
  extra_data TEXT DEFAULT '{}',
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_purchases_date ON purchases(date);
CREATE INDEX IF NOT EXISTS idx_purchases_supplier ON purchases(supplier_id);
CREATE INDEX IF NOT EXISTS idx_purchases_method ON purchases(method);
-- Composite index for date-range reports
CREATE INDEX IF NOT EXISTS idx_purchases_date_supplier ON purchases(date, supplier_id);

CREATE TABLE IF NOT EXISTS purchase_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  purchase_id TEXT NOT NULL,
  product_id TEXT DEFAULT '',
  product_name TEXT DEFAULT '',
  qty REAL DEFAULT 0,
  rate REAL DEFAULT 0,
  amount REAL DEFAULT 0,
  extra_data TEXT DEFAULT '{}',
  FOREIGN KEY (purchase_id) REFERENCES purchases(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_purchase_items_purchase ON purchase_items(purchase_id);
CREATE INDEX IF NOT EXISTS idx_purchase_items_product ON purchase_items(product_id);

-- ============================================================
-- PAYMENTS (receipts, payments, transfers)
-- ============================================================

CREATE TABLE IF NOT EXISTS payments (
  id TEXT PRIMARY KEY,
  "no" TEXT DEFAULT '',
  date TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'receipt',
  party TEXT DEFAULT '',
  method TEXT DEFAULT 'cash',
  bank_name TEXT DEFAULT '',
  amount REAL DEFAULT 0,
  note TEXT DEFAULT '',
  cheque_no TEXT DEFAULT '',
  status TEXT DEFAULT 'done',
  from_acc TEXT DEFAULT '',
  to_acc TEXT DEFAULT '',
  auto_invoice TEXT DEFAULT '',
  is_truck_fare INTEGER DEFAULT 0,
  bill_keys TEXT DEFAULT '[]',
  extra_data TEXT DEFAULT '{}',
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_payments_date ON payments(date);
CREATE INDEX IF NOT EXISTS idx_payments_type ON payments(type);
CREATE INDEX IF NOT EXISTS idx_payments_party ON payments(party);
CREATE INDEX IF NOT EXISTS idx_payments_method ON payments(method);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
-- Composite for ledger queries
CREATE INDEX IF NOT EXISTS idx_payments_date_party ON payments(date, party);
CREATE INDEX IF NOT EXISTS idx_payments_type_date ON payments(type, date);

-- ============================================================
-- EXPENSES
-- ============================================================

CREATE TABLE IF NOT EXISTS exp_heads (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS exp_subheads (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  head_id TEXT DEFAULT '',
  head_name TEXT DEFAULT '',
  created_at TEXT DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_exp_subheads_head ON exp_subheads(head_id);

CREATE TABLE IF NOT EXISTS expenses (
  id TEXT PRIMARY KEY,
  expense_no TEXT DEFAULT '',
  date TEXT NOT NULL,
  head_name TEXT DEFAULT '',
  sub_head_name TEXT DEFAULT '',
  method TEXT DEFAULT 'cash',
  bank_name TEXT DEFAULT '',
  amount REAL DEFAULT 0,
  description TEXT DEFAULT '',
  is_truck_fare INTEGER DEFAULT 0,
  extra_data TEXT DEFAULT '{}',
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_expenses_date ON expenses(date);
CREATE INDEX IF NOT EXISTS idx_expenses_head ON expenses(head_name);
CREATE INDEX IF NOT EXISTS idx_expenses_method ON expenses(method);
CREATE INDEX IF NOT EXISTS idx_expenses_date_head ON expenses(date, head_name);

-- ============================================================
-- ORDERS (SP Portal orders)
-- ============================================================

CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  order_no TEXT NOT NULL,
  date TEXT NOT NULL,
  customer_id TEXT DEFAULT '',
  customer_name TEXT DEFAULT '',
  sp_id TEXT DEFAULT '',
  sp_name TEXT DEFAULT '',
  sp_code TEXT DEFAULT '',
  total REAL DEFAULT 0,
  status TEXT DEFAULT 'pending',
  converted_invoice TEXT DEFAULT '',
  note TEXT DEFAULT '',
  extra_data TEXT DEFAULT '{}',
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_orders_date ON orders(date);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_sp ON orders(sp_id);
CREATE INDEX IF NOT EXISTS idx_orders_customer ON orders(customer_id);

CREATE TABLE IF NOT EXISTS order_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id TEXT NOT NULL,
  product_key TEXT DEFAULT '',
  product_name TEXT DEFAULT '',
  qty REAL DEFAULT 0,
  rate REAL DEFAULT 0,
  amount REAL DEFAULT 0,
  extra_data TEXT DEFAULT '{}',
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);

-- ============================================================
-- USERS (App users with roles)
-- ============================================================

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  name TEXT DEFAULT '',
  role TEXT DEFAULT 'entry',
  active INTEGER DEFAULT 1,
  extra_data TEXT DEFAULT '{}',
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_users_username ON users(username);

-- ============================================================
-- APPROVALS (edit/delete approval queue)
-- ============================================================

CREATE TABLE IF NOT EXISTS approvals (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL DEFAULT 'edit',
  target_key TEXT NOT NULL,
  prefix TEXT DEFAULT '',
  new_data TEXT DEFAULT '{}',
  old_data TEXT DEFAULT '{}',
  detail TEXT DEFAULT '',
  requested_by TEXT DEFAULT '',
  requested_at TEXT DEFAULT (datetime('now')),
  status TEXT DEFAULT 'pending',
  processed_by TEXT DEFAULT '',
  processed_at TEXT DEFAULT '',
  extra_data TEXT DEFAULT '{}',
  created_at TEXT DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_approvals_status ON approvals(status);
CREATE INDEX IF NOT EXISTS idx_approvals_target ON approvals(target_key);
CREATE INDEX IF NOT EXISTS idx_approvals_prefix ON approvals(prefix);

-- ============================================================
-- MODIFICATION LOGS (append-only audit trail)
-- ============================================================

CREATE TABLE IF NOT EXISTS mod_logs (
  id TEXT PRIMARY KEY,
  action TEXT DEFAULT '',
  detail TEXT DEFAULT '',
  key TEXT DEFAULT '',
  prefix TEXT DEFAULT '',
  old_data TEXT DEFAULT '',
  "user" TEXT DEFAULT '',
  timestamp TEXT DEFAULT (datetime('now')),
  extra_data TEXT DEFAULT '{}'
);
CREATE INDEX IF NOT EXISTS idx_mod_logs_timestamp ON mod_logs(timestamp);
CREATE INDEX IF NOT EXISTS idx_mod_logs_action ON mod_logs(action);
CREATE INDEX IF NOT EXISTS idx_mod_logs_key ON mod_logs(key);
CREATE INDEX IF NOT EXISTS idx_mod_logs_prefix ON mod_logs(prefix);

-- ============================================================
-- CREDIT LIMITS (standalone credit limit records)
-- ============================================================

CREATE TABLE IF NOT EXISTS credit_limits (
  id TEXT PRIMARY KEY,
  party_id TEXT DEFAULT '',
  party_name TEXT DEFAULT '',
  amount REAL DEFAULT 0,
  extra_data TEXT DEFAULT '{}',
  created_at TEXT DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_credit_limits_party ON credit_limits(party_id);

-- ============================================================
-- THANA FARES (Truck fare settings per thana)
-- ============================================================

CREATE TABLE IF NOT EXISTS thana_fares (
  id TEXT PRIMARY KEY,
  thana TEXT NOT NULL,
  district TEXT DEFAULT '',
  division TEXT DEFAULT '',
  max_fare REAL DEFAULT 0,
  extra_data TEXT DEFAULT '{}',
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_thana_fares_thana ON thana_fares(thana);

-- ============================================================
-- CASH BALANCE TRACKING (opening balance)
-- ============================================================

CREATE TABLE IF NOT EXISTS cb (
  id TEXT PRIMARY KEY,
  opening_balance REAL DEFAULT 0,
  extra_data TEXT DEFAULT '{}',
  created_at TEXT DEFAULT (datetime('now'))
);

-- ============================================================
-- MIGRATION METADATA (tracks KV→D1 migration state)
-- ============================================================

CREATE TABLE IF NOT EXISTS _migration_meta (
  id TEXT PRIMARY KEY,
  kv_prefix TEXT NOT NULL,
  d1_table TEXT NOT NULL,
  migrated_count INTEGER DEFAULT 0,
  total_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'pending',
  started_at TEXT DEFAULT '',
  completed_at TEXT DEFAULT '',
  error TEXT DEFAULT '',
  checksum TEXT DEFAULT ''
);
CREATE INDEX IF NOT EXISTS idx_migration_meta_status ON _migration_meta(status);
