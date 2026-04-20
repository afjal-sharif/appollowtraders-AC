# BizManager v3.0 - Complete Features & Usage Documentation

## Apollow Traders - Business Accounting System

**Platform:** Cloudflare Workers + Hono Framework  
**Data Storage:** Cloudflare KV Namespace  
**Version:** 3.0  

---

## Table of Contents

1. [Getting Started](#1-getting-started)
2. [Dashboard](#2-dashboard)
3. [Day Details](#3-day-details)
4. [Orders](#4-orders)
5. [Stock Check](#5-stock-check)
6. [Inventory Management](#6-inventory-management)
7. [Customers & Suppliers](#7-customers--suppliers)
8. [Purchases](#8-purchases)
9. [Sales](#9-sales)
10. [Accounts & Banking](#10-accounts--banking)
11. [Expenses](#11-expenses)
12. [Reports](#12-reports)
13. [Ledger](#13-ledger)
14. [Expense Ledger](#14-expense-ledger)
15. [Receivable / Payable](#15-receivable--payable)
16. [Profit & Loss](#16-profit--loss)
17. [Balance Sheet](#17-balance-sheet)
18. [Trial Balance](#18-trial-balance)
19. [Stock & Valuation](#19-stock--valuation)
20. [Users & Access Control](#20-users--access-control)
21. [Salesperson Management](#21-salesperson-management)
22. [Salesperson Portal](#22-salesperson-portal)
23. [Approval Queue](#23-approval-queue)
24. [Company Settings](#24-company-settings)
25. [Admin Panel](#25-admin-panel)
26. [Modification Log](#26-modification-log)

---

## 1. Getting Started

### Login
- Open the application URL in your browser.
- If users have been created, enter your **Username** and **Password**.
- If no users exist, enter the default **PIN** (default: `1234`).
- Click **Login** to access the system.

### Navigation
- **Desktop:** Use the sidebar on the left to navigate between pages.
- **Mobile:** Tap the hamburger menu (&#9776;) at the top-left to open the sidebar.
- The sidebar shows your current role and username at the bottom.

### Role-Based Access
| Role    | Dashboard | Inventory | Parties | Purchases | Sales | Payments | Expenses | Reports | Admin |
|---------|-----------|-----------|---------|-----------|-------|----------|----------|---------|-------|
| Admin   | Yes       | Yes       | Yes     | Yes       | Yes   | Yes      | Yes      | Yes     | Yes   |
| Manager | Yes       | Yes       | Yes     | Yes       | Yes   | Yes      | Yes      | Yes     | No    |
| Entry   | Yes       | Yes       | Yes     | Yes       | Yes   | Yes      | Yes      | No      | No    |
| Viewer  | Yes       | No        | No      | No        | No    | No       | No       | Yes     | No    |

---

## 2. Dashboard

The Dashboard provides a complete business overview at a glance.

### Features
- **Date Range Filtering:** Use From/To fields or quick buttons (Today, This Month, This Year, All Time).
- **Summary Statistics:** 
  - Total Sales, Purchases, and Expenses
  - Cash in Hand and Bank Balance
  - Receivables and Payables
  - Product Count and Pending Orders
- **Recent Sales:** Shows the latest 5 sales invoices with clickable invoice links.
- **Recent Purchases:** Shows the latest 5 purchase entries.
- **Low Stock Alerts:** Products with stock at or below 5 units.
- **Pending Orders:** Orders awaiting approval from the salesperson portal.

### How to Use
1. Navigate to **Dashboard** from the sidebar.
2. Adjust the date range to view data for a specific period.
3. Click **Apply** or use quick filter buttons.
4. Click on any invoice number to preview the document.

---

## 3. Day Details

A comprehensive daily snapshot showing all transactions for a selected date.

### Features
- **Date Navigation:** Navigate day-by-day using arrow buttons or jump to today.
- **Daily Statistics:** Sales, Purchases, Receipts, Payments, Expenses, Cash In/Out, Cash in Hand, Bank In/Out.
- **Detailed Sections:**
  - Sales list with invoice preview links
  - Purchases list with document links
  - Cash Transactions breakdown (all cash-in and cash-out items)
  - Bank Transactions breakdown (all bank-in and bank-out items)
  - Fund Transfers
  - Expense list
- **Cumulative Cash in Hand:** Shows running total up to the selected date.
- **Printable:** Click Print to generate a printable daily report.

### How to Use
1. Go to **Day Details** from the sidebar.
2. Select a date or use left/right arrows to navigate.
3. Review all transaction categories for that day.
4. Click **Print** to generate a hard copy.

---

## 4. Orders

Manage orders submitted by salespersons through the SP Portal.

### Features
- **Status Tabs:** Filter by Pending, Approved, Denied, Converted, or All.
- **Approve/Deny:** Approve or deny pending orders.
- **Convert to Invoice:** Convert approved orders directly into sales invoices with automatic stock deduction.
- **Stock Validation:** The system checks stock availability before converting an order.

### How to Use
1. Go to **Orders** from the sidebar.
2. Review pending orders in the **Pending** tab.
3. Click **Approve** or **Deny** for each order.
4. For approved orders, click **Convert to Invoice** to create a sale. Stock is automatically deducted.

---

## 5. Stock Check

A quick-reference page for checking product stock levels.

### Features
- **Search:** Type a product name to instantly filter results.
- **Group Filter:** Filter products by group.
- **Color-Coded Stock:** Green (OK), Yellow (Low, 1-5), Red (Out of Stock, 0).
- **Total Summary:** Shows total product count and total quantity.
- **Export/Print:** Export to Excel or print the stock list.

### How to Use
1. Go to **Stock Check** from the sidebar.
2. Search by product name or filter by group.
3. View available quantities at a glance.

---

## 6. Inventory Management

Full product management with groups and stock tracking.

### Features
- **Product CRUD:** Add, edit, and delete products.
- **Product Groups:** Organize products into groups (e.g., Electronics, Clothing).
- **Product Fields:** Name, Group, SKU (auto-generated), Unit, Stock, Purchase Price, Sale Price.
- **Group Management:** Create and delete product groups.
- **Search & Filter:** Search by name/SKU, filter by group.

### How to Use
1. Go to **Inventory** from the sidebar.
2. Click **Add Product** to create a new product.
3. Fill in product details (Name is required, SKU auto-generates if left blank).
4. Use **Manage Groups** to create product categories.
5. Click **E** (Edit) to modify a product or **D** (Delete) to remove it.

---

## 7. Customers & Suppliers

Manage your business contacts.

### Features
- **Tabs:** Switch between Customers and Suppliers.
- **Contact Fields:** Name, Phone, Address, Credit Limit, Salesperson assignment (customers only).
- **Credit Limit:** Set credit limits for customers.
- **Salesperson Tagging:** Assign a salesperson to each customer.
- **Balance Display:** Shows current outstanding balance (Debit/Credit).
- **Search:** Filter contacts by name or phone number.

### How to Use
1. Go to **Customers & Suppliers** from the sidebar.
2. Select the **Customers** or **Suppliers** tab.
3. Click **Add** to create a new contact.
4. For customers, optionally assign a salesperson and set a credit limit.
5. Click **Edit** to modify existing contacts.

---

## 8. Purchases

Record purchases from suppliers with full item-level detail.

### Features
- **Purchase Creation:** Auto-generated purchase number, date, supplier selection.
- **Multi-Item Entry:** Add multiple items per purchase, each with product, quantity, and rate.
- **Calculations:** Subtotal, Discount, Extra Charges, VAT/Tax (amount or percentage).
- **Payment Tracking:** Record paid amount, payment method, bank account, cheque number.
- **Payment Methods:** Cash, Bank Transfer, Cheque, Credit Card, Mobile Payment, On Credit.
- **Auto Stock Update:** Stock is automatically increased when a purchase is saved.
- **Auto Bank Deduction:** Bank balance is automatically adjusted for bank payments.
- **Auto Payment Voucher:** An automatic payment voucher is created when paid > 0.
- **Edit/Delete:** Full edit with stock reversal and re-application. Delete reverses all changes.
- **Search:** Filter purchases by purchase number, supplier name, or date.
- **Document Preview:** Click a purchase number to preview the purchase invoice.

### How to Use
1. Go to **Purchases** from the sidebar.
2. Click **New Purchase**.
3. Select a supplier and date.
4. Add items using the product dropdown, set quantity and rate.
5. Click **+ Add Item** for additional items.
6. Set discount, extra charges, and VAT if applicable.
7. Enter the paid amount and select a payment method.
8. Click **Save Purchase**.
9. Stock will be automatically updated, and a payment voucher is created.

---

## 9. Sales

Create and manage sales invoices with comprehensive options.

### Features
- **Invoice Creation:** Auto-generated invoice number, date, customer, salesperson.
- **Multi-Item Entry:** Multiple products per invoice with quantity, rate, and amount.
- **Flexible Calculations:**
  - Discount (fixed amount or percentage)
  - Extra charges
  - VAT/Tax (amount or percentage)
  - AIT (amount or percentage)
- **Payment Tracking:** Paid amount, method, bank, cheque number.
- **Credit Limit Warning:** Alerts when a customer's outstanding exceeds their credit limit.
- **Stock Validation:** Prevents sales when product stock is insufficient (new sales only).
- **Auto Stock Deduction:** Stock is automatically reduced when a sale is saved.
- **Auto Bank Credit:** Bank balance is automatically updated for bank payments.
- **Auto Receipt Voucher:** An automatic receipt voucher is created when paid > 0.
- **Cash Auto-Fill:** When Cash method is selected, the paid amount auto-fills to the total.
- **Edit/Delete:** Full edit with stock reversal. Delete reverses all changes.
- **Search:** Filter by invoice number, customer name, or date.
- **Document Preview:** Click an invoice number to preview the sales invoice.

### How to Use
1. Go to **Sales** from the sidebar.
2. Click **New Sale**.
3. Select a customer (salesperson auto-fills if tagged to the customer).
4. Add items, set quantities and rates.
5. Configure discount, extra charges, VAT, and AIT as needed.
6. Enter the paid amount and select a payment method.
7. Click **Save Sale**.
8. Stock is deducted, bank balance updated, and a receipt voucher is created automatically.

### Invoice Preview
- Click any invoice number to see a full preview with:
  - Company header (from Company Settings)
  - Customer details and salesperson info
  - Item-level breakdown
  - Subtotal, Discount, Extra, VAT, AIT, Total
  - Paid amount and balance due
  - Previous balance and current balance
- Click **Print** to print the invoice.

---

## 10. Accounts & Banking

Manage all financial transactions including receipts, payments, transfers, and bank accounts.

### Tabs

#### Receipts
- Record money received from customers.
- **Outstanding Bill Selection:** When you select a customer, their unpaid invoices are shown. Check bills to auto-calculate the receipt amount.
- **Bill Linking:** Selected bills have their paid amount automatically updated.
- **Bank Balance Update:** Bank balance is automatically adjusted for bank receipts.

#### Payments
- Record money paid to suppliers.
- **Outstanding Bill Selection:** When you select a supplier, their unpaid purchases are shown.
- **Bill Linking:** Selected bills have their paid amount automatically updated.
- **Bank Balance Update:** Bank balance is automatically adjusted.

#### Transfers
- Transfer funds between accounts (Cash to Bank, Bank to Bank, Bank to Cash).
- Bank balances are automatically adjusted for both source and destination.
- Edit and delete with automatic balance reversal.

#### Bank Accounts
- Add, edit, and delete bank accounts.
- Fields: Bank Name, Account Number, Opening Balance.
- Current balance is automatically maintained through all transactions.

#### Bank Ledger
- View detailed transaction history for any bank account.
- Shows: Opening Balance, Sale Payments, Purchase Payments, Receipts, Payments, Transfers, Expenses.
- Running balance calculation.
- Filter by date range.
- Summary statistics: Total Inflow, Total Outflow, Current Balance.

### How to Use
1. Go to **Accounts & Banking** from the sidebar.
2. Set up bank accounts first using the **Bank Accounts** tab.
3. Use **Receipts** tab to record money received from customers.
4. Use **Payments** tab to record money paid to suppliers.
5. Use **Transfers** tab for inter-account fund transfers.
6. Use **Bank Ledger** to review bank transaction history.

---

## 11. Expenses

Track business expenses with categorized heads and sub-heads.

### Features
- **Expense Heads:** Create categories (e.g., Rent, Utilities, Salaries, Transport).
- **Expense Sub-Heads:** Create sub-categories under each head (e.g., Electricity under Utilities).
- **Expense Entry:** Date, Head, Sub-Head, Amount, Payment Method, Bank, Description.
- **Payment Methods:** Cash, Bank Transfer, Cheque, Credit Card, Mobile Payment.
- **Auto Bank Deduction:** Bank balance is adjusted for non-cash expenses.
- **Filter:** Filter by head and date range.
- **Statistics:** Total expenses, Cash total, Bank total, Count.
- **Edit/Delete:** Full edit with bank balance reversal.
- **Document Preview:** Click expense number to preview the expense voucher.

### How to Use
1. Go to **Expenses** from the sidebar.
2. First, click **Manage Heads** to create expense categories.
3. Optionally click **Manage Sub-Heads** to create sub-categories.
4. Click **New Expense** to record an expense.
5. Select head, sub-head, enter amount, and choose payment method.
6. Click **Save**. Bank balance is automatically adjusted if applicable.

---

## 12. Reports

Comprehensive business analytics with multiple report types.

### Available Reports

| Report Type | Description |
|-------------|-------------|
| **Date-wise Sales** | Sales grouped by date with discount, extra, VAT breakdown |
| **Product-wise Sales** | Sales grouped by product with quantity and revenue |
| **Customer-wise Sales** | Sales grouped by customer with item-level detail |
| **Date-wise Gross Profit** | Profit analysis per invoice showing cost, revenue, and profit % |
| **Date-wise Purchases** | Purchases grouped by date |
| **Supplier-wise Purchases** | Purchases grouped by supplier |
| **Product-wise Purchases** | Purchases grouped by product |
| **Customer Invoice Detail** | Per-invoice breakdown: Total, Invoice Paid, Receipt Paid, Balance |
| **Salesperson Performance** | Sales count, revenue, paid, and due per salesperson |
| **SP x Customer Breakdown** | Cross-tabulation of salesperson and customer sales |
| **SP x Product Breakdown** | Cross-tabulation of salesperson and product sales |
| **Customer Outstanding** | Outstanding balance per customer |

### Filters
- **Date Range:** From and To dates.
- **Product Group:** Filter by product group (for applicable reports).
- **Product:** Filter by specific product.

### How to Use
1. Go to **Reports** from the sidebar.
2. Select a report type from the dropdown.
3. Set the date range.
4. Optionally set product group/product filters.
5. Click **View Report**.
6. Use **Print** or **Export XLS** to save the report.

---

## 13. Ledger

Complete account history for any customer or supplier.

### Features
- **Party Selection:** Choose any customer or supplier from the dropdown.
- **Date Range Filter:** Filter entries by date.
- **Transaction Types:**
  - **Customers:** Sales (Debit), Receipts (Credit)
  - **Suppliers:** Purchases (Credit), Payments (Debit)
- **Running Balance:** Shows running Debit/Credit balance after each transaction.
- **Color-Coded Rows:** Sales (blue), Purchases (yellow), Receipts/Payments (green).
- **Party Info Card:** Shows party details, phone, address, and overall balance.
- **Statistics:** Total Debit, Total Credit, Net Balance.
- **Document Links:** Click any document number to preview it.
- **Print/Export:** Print the ledger or export to Excel.

### How to Use
1. Go to **Ledger** from the sidebar.
2. Select a party from the dropdown.
3. Optionally set date range.
4. Review all transactions and running balance.
5. Click document numbers to preview invoices/vouchers.

---

## 14. Expense Ledger

Detailed expense analysis by head and sub-head.

### Features
- **Filter by Head:** View expenses for a specific category.
- **Filter by Sub-Head:** Further narrow down by sub-category.
- **Date Range:** Filter by period.
- **Summary:** Total expenses, number of categories, entry count.
- **Breakdown Table:** Head, Sub-Head, Amount, Percentage of Total.
- **Print/Export:** Print or export to Excel.

### How to Use
1. Go to **Expense Ledger** from the sidebar.
2. Select head and/or sub-head filters.
3. Set date range.
4. Review the breakdown by category.

---

## 15. Receivable / Payable

Track outstanding balances with customers and suppliers.

### Features
- **Tabs:** Switch between Receivables (customers) and Payables (suppliers).
- **Advanced Filters:**
  - Search by party name or phone
  - Filter by salesperson (receivables only)
  - Date range with quick presets (Today, This Week, This Month, Quarter, Year, All Time)
  - Toggle "Only Outstanding" to show only parties with due amounts
- **DSO Calculation:** Days Sales Outstanding for each party.
- **Credit Limit Display:** Shows credit limit alongside outstanding for comparison.
- **Summary Statistics:** Total outstanding, party count, total billed, total collected.
- **Print/Export:** Print or export to Excel.

### How to Use
1. Go to **Receivable / Payable** from the sidebar.
2. Select **Receivables** or **Payables** tab.
3. Use filters to narrow down results.
4. Review outstanding amounts, DSO, and credit limits.

---

## 16. Profit & Loss

Income statement showing Revenue, COGS, Expenses, and Net Profit.

### Features
- **FIFO COGS Calculation:** Cost of Goods Sold is calculated using First-In-First-Out method based on actual purchase batches.
- **Date Range Filter:** Analyze any period.
- **Sections:**
  - Revenue (Sales)
  - Cost of Goods Sold (FIFO-based)
  - Gross Profit
  - Expenses (grouped by head)
  - Net Profit / (Loss)
- **Summary Cards:** Revenue, COGS, Gross Profit, Net Profit.
- **Print/Export:** Print or export to Excel.

### How to Use
1. Go to **Profit & Loss** from the sidebar.
2. Set the From and To dates.
3. Click **View**.
4. Review the full income statement.

---

## 17. Balance Sheet

Assets, Liabilities, and Equity snapshot.

### Features
- **Assets:**
  - Inventory (at cost: stock x purchase price)
  - Accounts Receivable (outstanding from customers)
  - Bank Balances (sum of all bank accounts)
  - Cash in Hand (calculated from all cash transactions)
- **Liabilities:**
  - Accounts Payable (outstanding to suppliers)
- **Equity:**
  - Owner Equity (Assets - Liabilities)
- **Balancing:** Total Assets = Total Liabilities + Equity.
- **Print/Export:** Print or export to Excel.

### How to Use
1. Go to **Balance Sheet** from the sidebar.
2. Review the automatically calculated balance sheet.
3. Print for records.

---

## 18. Trial Balance

Summary of all account debits and credits.

### Features
- **Accounts Included:** Sales Revenue, COGS, Purchases, Inventory, Receivables, Payables, Expenses, Bank Accounts.
- **Balance Check:** Shows the difference between total debits and credits.
- **Summary Cards:** Total Debit, Total Credit, Difference.
- **Print/Export:** Print or export to Excel.

### How to Use
1. Go to **Trial Balance** from the sidebar.
2. Review all account balances.
3. Check that debits and credits are balanced.

---

## 19. Stock & Valuation

Detailed stock analysis with valuation.

### Features
- **Tabs:** All Stock, Available (>0), Low Stock (1-5), Out of Stock (0).
- **Filters:** Filter by product group and search by name.
- **Stock Details:** Product Name, Group, SKU, Stock Quantity, Buy Price, Sell Price, Cost Value, Sale Value, Status.
- **Summary Statistics:** Total Products, Total Qty, Cost Value, Sale Value, Low Stock Count, Out of Stock Count.
- **Color-Coded Status:** OK (green), Low (yellow), Out (red).
- **Print/Export:** Print or export to Excel.

### How to Use
1. Go to **Stock & Valuation** from the sidebar.
2. Use tabs to filter by stock status.
3. Use group filter and search for specific products.
4. Review stock values at cost and sale prices.

---

## 20. Users & Access Control

Manage user accounts and role-based permissions.

### Features
- **User Creation:** Name, Username, Password, Role, Active status.
- **Four Roles:** Admin, Manager, Entry, Viewer (see Role-Based Access table above).
- **Entry User Approval:** Changes made by Entry users require admin/manager approval.
- **Active/Inactive:** Deactivate users without deleting them.

### How to Use
1. Go to **Users & Access** from the sidebar (Admin only).
2. Click **Add User** to create a new user.
3. Set the name, username, password, and role.
4. Manage existing users with Edit/Delete buttons.

---

## 21. Salesperson Management

Manage your sales team for portal access and sales tracking.

### Features
- **Salesperson Fields:** Name, Code (e.g., SP01), PIN (for portal login), Phone, Active status.
- **Sales Tracking:** View total sales amount and count per salesperson.
- **Portal Access:** Salespersons use their Code and PIN to login to the SP Portal.

### How to Use
1. Go to **Salesperson Mgmt** from the sidebar.
2. Click **Add Salesperson**.
3. Set name, code, PIN, and phone.
4. Share the code and PIN with the salesperson for portal access.

---

## 22. Salesperson Portal

A separate portal for salespersons to place orders and view their reports.

### Features
- **Independent Login:** Accessed via `/sp-portal/login` with Code and PIN.
- **Place Orders:** Select customer, add products, set quantities and rates, submit orders.
- **My Orders:** View all submitted orders with status (Pending, Approved, Denied, Converted).
- **My Reports:** Five report types:
  - Product-wise Sales
  - Customer-wise Sales
  - Product + Customer Breakdown
  - Group & Product-wise
  - Customer & Product Detail
- **My Customers:** View assigned customers with total sales and outstanding amounts.
- **Zero-Stock Warning:** Warns when ordering products with 0 stock.

### How to Use (for Salespersons)
1. Open the SP Portal login page.
2. Enter your Code and PIN.
3. **Place Order:** Select customer, add products, click Submit.
4. **View Orders:** Check order status in the My Orders tab.
5. **View Reports:** Generate sales reports in the My Reports tab.

---

## 23. Approval Queue

Review and approve/reject changes submitted by Entry-role users.

### Features
- **Status Tabs:** Pending, Approved, Rejected, All.
- **Statistics:** Count of pending, approved, rejected items.
- **Actions:** Approve or Reject pending requests.
- **Detail View:** Click "View" to see:
  - Request info (who, when, what)
  - For edits: Side-by-side comparison of old vs new data with changed fields highlighted
  - For deletes: Full data of the record to be deleted
- **Modification Log:** All approvals/rejections are logged.

### How to Use
1. Go to **Approval Queue** from the sidebar (Admin/Manager only).
2. Review pending requests in the **Pending** tab.
3. Click **View** to see full details and comparison.
4. Click **Approve** or **Reject**.

---

## 24. Company Settings

Configure your company branding and details that appear on invoices and throughout the system.

### Features
- **Company Information:**
  - Company Name (appears on login page, sidebar, invoices)
  - Tagline / Slogan
  - Address
  - Phone and Email
  - Website
  - TIN/BIN Number
- **Theme & Appearance:**
  - Primary Color (buttons, links, active items)
  - Sidebar Color (navigation background)
  - Live Preview of color changes
  - Reset to Default option

### How to Use
1. Go to **Company Settings** from the sidebar (Admin only).
2. Fill in your company information.
3. Adjust theme colors using the color pickers.
4. Preview the appearance in real-time.
5. Click **Save Settings**. The page reloads with new branding.

---

## 25. Admin Panel

System administration tools and settings.

### Features
- **Change PIN:** Update the admin fallback PIN.
- **License Info:** View license expiry and status.
- **Export All Data:** Download complete backup as JSON file.
- **Import Data:** Restore from a JSON backup file (merges with existing data).
- **Developer Tools (Hidden by default):**
  - **KV Browser:** Browse and inspect raw KV store data.
  - **Purge Data:** Bulk delete all records of a specific type.

### How to Use
1. Go to **Admin** from the sidebar (Admin only).
2. **Change PIN:** Enter current PIN and new PIN, click Change.
3. **Export:** Click Export to download backup.
4. **Import:** Select a JSON file and click Import.
5. **Dev Tools:** Check the toggle to reveal KV Browser and Purge tools.

---

## 26. Modification Log

Complete audit trail of all system changes.

### Features
- **Action Filter:** Filter by Create, Edit, or Delete actions.
- **Search:** Search within log details.
- **Date Range:** Filter by period.
- **Log Details:** Timestamp, User, Action, Detail, Key.
- **Color-Coded Actions:** Create (green), Edit (yellow), Delete (red).
- **Print/Export:** Print or export to Excel.

### How to Use
1. Go to **Modification Log** from the sidebar.
2. Use filters to find specific changes.
3. Review who made what changes and when.

---

## Key System Behaviors

### Automatic Stock Management
- **Purchases:** Stock is increased when a purchase is saved.
- **Sales:** Stock is decreased when a sale is saved.
- **Edit:** Old quantities are reversed, new quantities are applied.
- **Delete:** All stock changes are reversed.

### Automatic Bank Balance Management
- **Sales/Purchases (bank methods):** Bank balance is credited/debited.
- **Receipts/Payments (bank methods):** Bank balance is adjusted.
- **Transfers:** Source bank debited, destination bank credited.
- **Expenses (bank methods):** Bank balance is debited.
- **Edit/Delete:** All bank changes are reversed and re-applied.

### Automatic Voucher Creation
- When a sale is created with payment > 0, an auto receipt voucher is created.
- When a purchase is created with payment > 0, an auto payment voucher is created.
- Auto-vouchers are tracked and reversed when editing/deleting the parent invoice.

### Cash in Hand Calculation
Cash in Hand = (Cash Sales Paid) + (Cash Receipts) - (Cash Purchases Paid) - (Cash Payments) - (Cash Expenses) + (Transfers to Cash) - (Transfers from Cash)

### Outstanding Balance Calculation
- **Receivable** = Customer's Total Sales - Invoice Paid Amounts - Unlinked Manual Receipts
- **Payable** = Supplier's Total Purchases - Invoice Paid Amounts - Unlinked Manual Payments

### Document Printing
- All invoices, vouchers, and reports can be printed.
- Company header is automatically included from Company Settings.
- Print opens in a new window with print-optimized formatting.

### Excel Export
- Most data tables can be exported to Excel (.xlsx format).
- Uses SheetJS library for client-side export.

---

## Tips & Best Practices

1. **Set up Company Settings first** - Your company name and details appear on all invoices.
2. **Create Bank Accounts** before making bank transactions.
3. **Create Expense Heads** before recording expenses.
4. **Set Credit Limits** for customers to get warnings during sales.
5. **Assign Salespersons** to customers for better tracking.
6. **Use Product Groups** to organize your inventory.
7. **Export data regularly** as backup from the Admin page.
8. **Review the Modification Log** to track who made what changes.
9. **Use the Entry role** for data-entry staff - their edits require approval.
10. **Check Day Details daily** for a complete picture of each day's transactions.
