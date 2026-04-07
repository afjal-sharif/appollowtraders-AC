# Apollow Traders — BizManager v2.0

## Project Overview
- **Name**: Apollow Traders BizManager
- **Goal**: Complete business accounting & management system for small/medium trading businesses
- **Platform**: Cloudflare Workers + Hono Framework + KV Storage
- **Auth**: PIN-based login (default: `1234`)

## Features

### Completed & Work-Ready Modules

| Module | Status | Features |
|--------|--------|----------|
| **Dashboard** | ✅ Complete | Overview stats, recent sales & purchases |
| **Inventory** | ✅ Complete | Add/edit/delete products, SKU, stock tracking, search |
| **Customers & Suppliers** | ✅ Complete | Add/edit contacts, balance tracking, tab switching |
| **Purchases** | ✅ Complete | Create/edit/view purchase invoices, VAT, print |
| **Sales** | ✅ Complete | Create/edit/view sale invoices, discount/VAT/AIT, print |
| **Accounts & Banking** | ✅ Complete | Receipts, payments, transfers, cheque books, bank ledger, voucher print |
| **Expenses** | ✅ Complete | Full CRUD, heads/sub-heads management, date/head filtering, bank tracking, edit/delete |
| **Ledger** | ✅ Complete | Party ledger with debit/credit/balance, date range, running totals, Dr/Cr labels, print |
| **Day Details** | ✅ Complete | Daily snapshot, date navigation (prev/next/today), cash flow summary, print report |
| **Profit & Loss** | ✅ Complete | Revenue/COGS/Expenses breakdown by head, margins, print |
| **Admin** | ✅ Complete | License info, data export/import JSON, change PIN, KV browser, data statistics, purge tools |

### What Was Fixed & Added

#### EXPENSES Module
- **Added**: Edit expense functionality (click Edit to modify any expense)
- **Added**: Delete expense with bank balance reversal
- **Added**: Date range filtering (From/To)
- **Added**: Filter by expense head
- **Added**: Delete heads & sub-heads (with usage protection)
- **Added**: Entry count in summary cards

#### LEDGER Module
- **Fixed**: Debit/Credit logic for both customers and suppliers
- **Added**: Dr/Cr labels on balance column
- **Added**: Period summary row (total debit, total credit, net)
- **Added**: Totals row at bottom of table
- **Added**: Print ledger button
- **Added**: Party contact info display
- **Added**: Balance label (Receivable/Payable/Advance/Overpaid)

#### DAY DETAILS Module
- **Added**: Previous/Next day navigation arrows
- **Added**: "Today" quick button
- **Added**: Print full day report
- **Added**: Cash Flow Summary section (In vs Out breakdown)
- **Added**: Net Position card (Cash + Bank)
- **Added**: Due amounts in purchase/sales tables
- **Added**: Total rows for each section
- **Fixed**: Bank balance calculation including expense deductions

#### ADMIN Module
- **Added**: Data Export (download all data as JSON backup)
- **Added**: Data Import (restore from JSON file)
- **Added**: Change PIN functionality
- **Added**: KV Storage Browser (view/delete individual keys)
- **Added**: Data Statistics (counts for all data types)
- **Added**: Danger Zone with selective purge (per module or all)
- **Added**: Double confirmation for destructive actions

### UI Redesign
- Modern indigo/violet color scheme (was blue)
- Google Material Symbols icons (replacing emoji icons)
- Improved card hover effects and shadows
- Better badge system with color-coded status
- Enhanced sidebar with gradient logo
- Backdrop blur on modal overlays
- Custom scrollbar styling
- Print-optimized CSS media queries
- Better mobile responsive layout

## URLs
- **Sandbox Preview**: https://3000-icmk14sojlxkol058rjpr-dfc00ec5.sandbox.novita.ai
- **Login PIN**: `1234`

## Data Architecture
- **Storage**: Cloudflare KV (`DATA_STORE` binding)
- **Prefixes**: `product:`, `party:`, `sale:`, `purchase:`, `payment:`, `expense:`, `exphead:`, `expsubhead:`, `bank:`, `cb:`
- **Auth**: Cookie-based (`auth=1`)
- **License**: KV key `APP_LICENSE` or hardcoded `2028-12-31`

## API Endpoints
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/list` | List items by prefix |
| POST | `/api/save` | Save/update item |
| POST | `/api/get` | Get single item |
| POST | `/api/delete` | Delete item |
| POST | `/api/export-all` | Export all data |
| POST | `/api/import-all` | Import data from JSON |
| POST | `/api/change-pin` | Change login PIN |
| POST | `/api/kv-keys` | Browse KV keys |
| POST | `/api/kv-get` | Get raw KV value |
| POST | `/api/kv-delete` | Delete KV key |
| GET | `/api/license-info` | License status |

## Deployment

### Local Development
```bash
npm run build
npm run preview  # starts wrangler pages dev on port 3000
```

### Cloudflare Pages Deployment
```bash
npm run build
npx wrangler pages deploy dist --project-name apollow-traders
```

**Required KV Binding**: Create a KV namespace and bind as `DATA_STORE`

## Tech Stack
- **Backend**: Hono v4 on Cloudflare Workers
- **Frontend**: Vanilla JS + Tailwind-style custom CSS
- **Storage**: Cloudflare KV
- **Icons**: Google Material Symbols
- **Fonts**: Inter (Google Fonts)
- **Build**: Vite + @hono/vite-build

## Deployment
- **Platform**: Cloudflare Pages
- **Status**: ✅ Ready for deployment
- **Last Updated**: 2026-04-06
