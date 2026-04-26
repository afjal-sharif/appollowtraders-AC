# BizManager v3.0 - Complete Calculation Logic & Audit Report

## Table of Contents
1. [Sales Invoice Calculation](#1-sales-invoice-calculation)
2. [Purchase Invoice Calculation](#2-purchase-invoice-calculation)
3. [Cost of Goods Sold (COGS) - FIFO Method](#3-cost-of-goods-sold-cogs---fifo-method)
4. [Profit & Loss Statement](#4-profit--loss-statement)
5. [Truck Fare Handling](#5-truck-fare-handling)
6. [Ledger (Party Account)](#6-ledger-party-account)
7. [Cash in Hand Calculation](#7-cash-in-hand-calculation)
8. [Bank Balance Tracking](#8-bank-balance-tracking)
9. [Receivables & Payables](#9-receivables--payables)
10. [Balance Sheet](#10-balance-sheet)
11. [Trial Balance](#11-trial-balance)
12. [Truck Fare Settings & Validation](#12-truck-fare-settings--validation)
13. [Opening Balance Handling](#13-opening-balance-handling)
14. [Auto-Voucher System](#14-auto-voucher-system)
15. [Audit Notes](#15-audit-notes)

---

## 1. Sales Invoice Calculation

### Formula
```
Subtotal       = SUM(item.qty * item.rate) for all line items
Discount Amt   = IF discountType == 'percent' THEN (Subtotal * discount / 100) ELSE discount
Base           = Subtotal - Discount Amt + Extra Charges
VAT Amount     = IF vatType == 'percent' THEN (Base * vat / 100) ELSE vat
AIT Amount     = IF aitType == 'percent' THEN (Base * ait / 100) ELSE ait
TOTAL          = Base + VAT Amount + AIT Amount
Due            = TOTAL - Paid
```

### Data Flow on Save
- **Stock**: Each item's product stock is DECREMENTED by `item.qty`
- **Bank**: If `method != 'cash' && method != 'credit'` and `bankName` is set, bank balance is INCREMENTED by `paid` amount
- **Auto Receipt Voucher**: If `paid > 0 && method != 'credit'`, a receipt voucher (type=receipt) is auto-created with `_autoInvoice` flag
- **Truck Fare Vouchers**: If `truckFare > 0`, two auto-vouchers are created:
  - Receipt voucher (cash IN from customer) with `_isTruckFare=true`
  - Expense voucher (Transportation > Cement Truck Fare) with `_isTruckFare=true`

### Edit/Delete Reversal
- On EDIT: Old stock is restored, old bank reversed, old vouchers deleted. Then new values applied.
- On DELETE: Stock restored, bank reversed, all auto-vouchers deleted.

---

## 2. Purchase Invoice Calculation

### Formula
```
Subtotal       = SUM(item.qty * item.rate) for all line items
Base           = Subtotal - Discount + Extra Charges
VAT Amount     = IF vatType == 'percent' THEN (Base * vat / 100) ELSE vat
TOTAL          = Base + VAT Amount
Due            = TOTAL - Paid
```

### Data Flow on Save
- **Stock**: Each item's product stock is INCREMENTED by `item.qty`
- **Purchase Price**: Product's `purchasePrice` updated to latest purchase rate
- **Bank**: If `method != 'cash' && method != 'credit'` and `bankName` is set, bank balance is DECREMENTED by `paid` amount
- **Auto Payment Voucher**: If `paid > 0 && method != 'credit'`, a payment voucher (type=payment) is auto-created with `_autoInvoice` flag

---

## 3. Cost of Goods Sold (COGS) - FIFO Method

### Algorithm
The system uses **First-In-First-Out (FIFO)** inventory valuation:

```
1. Build inventory layers from ALL purchases (sorted by date ASC)
   For each purchase item:
     stock[productId].push({ qty, price: rate, remaining: qty, date })

2. Sort layers per product by date (earliest first)

3. For each sale item (in chronological order):
   qtyNeeded = saleItem.qty
   For each layer in FIFO order:
     used = MIN(layer.remaining, qtyNeeded)
     COGS += used * layer.price
     layer.remaining -= used
     qtyNeeded -= used
     IF qtyNeeded == 0: break
```

### Why FIFO
- Industry standard for perishable and non-perishable goods
- Matches physical flow (first purchased = first sold)
- Audit-compliant and accepted by tax authorities
- More accurate than weighted average for businesses with fluctuating purchase prices

---

## 4. Profit & Loss Statement

### Formula
```
Revenue           = SUM(sale.total) for all sales in period
COGS              = FIFO-based cost (see section 3)
Gross Profit      = Revenue - COGS

Expenses          = SUM(expense.amount) for all expenses in period
                    [Optional: Can EXCLUDE truck fare expenses when checkbox is checked]

Net Profit/Loss   = Gross Profit - Total Expenses

IF Net >= 0 => PROFIT badge (green)
IF Net < 0  => LOSS badge (red)
```

### Truck Fare Exclusion
- Checkbox "Exclude Truck Fare" filters out expenses where `_isTruckFare === true`
- When excluded, truck fare expenses under "Transportation" head are removed
- This allows viewing core business profitability without pass-through costs
- Badge indicator shows when truck fare is excluded

### Expense Grouping
- Expenses are grouped by `headName` (e.g., Transportation, Office, Utilities)
- Transportation head includes both regular transport costs AND truck fare (if not excluded)

---

## 5. Truck Fare Handling

### Design: Revenue-Neutral Pass-Through
Truck fare is money collected FROM the customer and paid OUT for transportation. It's a pass-through:

```
Customer pays Truck Fare --> Business receives it (Cash IN)
Business pays Transporter --> Money goes out (Expense OUT)
NET EFFECT on profit = 0 (revenue neutral)
```

### On Sale Creation (when truckFare > 0)
1. **Receipt Voucher Created**: 
   - `type: 'receipt'`, `party: customerName`, `method: 'cash'`
   - `_isTruckFare: true`, `_autoInvoice: invoiceNo`
   - This records MONEY IN from customer

2. **Expense Voucher Created**:
   - `headName: 'Transportation'`, `subHeadName: 'Cement Truck Fare'`
   - `method: 'cash'`, `_isTruckFare: true`, `_autoInvoice: invoiceNo`
   - This records MONEY OUT as expense

### Ledger Display
- **Customer Ledger**: Shows "Truck Fare IN" as a credit entry (money received)
- Truck fare auto-receipts are filtered from regular receipts to avoid double-counting

### Fare Validation (Per Thana)
```
maxFareForOrder = thanaFare.maxFare * totalSaleQuantity
IF truckFare > maxFareForOrder => EXCEEDED warning
```

---

## 6. Ledger (Party Account)

### Customer Ledger
```
Opening Balance (if exists):
  IF openingBalance > 0 => Debit (receivable)
  IF openingBalance < 0 => Credit (advance)

For each Sale to customer:
  Debit  = sale.total (amount owed)
  Credit = sale.paid (amount paid at sale)

For each Truck Fare (from sale with truckFare > 0):
  Debit  = 0
  Credit = truckFare (additional money received)

For each Receipt payment (non-auto, non-bill-linked, non-truck-fare):
  Debit  = 0
  Credit = receipt.amount

Running Balance = Cumulative (Debit - Credit)
  Positive = Customer owes us (Receivable)
  Negative = We owe customer (Advance)
```

### Supplier Ledger
```
Opening Balance (if exists):
  IF openingBalance > 0 => Debit (payable)
  IF openingBalance < 0 => Credit (advance to supplier)

For each Purchase from supplier:
  Debit  = purchase.total (amount owed)
  Credit = purchase.paid (amount paid at purchase)

For each Payment (non-auto, non-bill-linked):
  Debit  = payment.amount
  Credit = 0

Running Balance = Cumulative (Debit - Credit)
  Positive = We owe supplier (Payable)
  Negative = Supplier owes us (Overpaid)
```

---

## 7. Cash in Hand Calculation

### Formula
```
Cash IN:
  + Sales paid via cash (sale.method == 'cash' => sale.paid)
  + Cash receipts (payment.type == 'receipt' && method == 'cash' && !_autoInvoice)
  + Transfers TO cash (transfer.toAcc == 'Cash')

Cash OUT:
  - Purchases paid via cash (purchase.method == 'cash' => purchase.paid)
  - Cash payments (payment.type == 'payment' && method == 'cash' && !_autoInvoice)
  - Cash expenses (expense.method == 'cash')
  - Transfers FROM cash (transfer.fromAcc == 'Cash')

Cash in Hand = Cash IN - Cash OUT
```

### Note on Truck Fare
- Truck fare auto-receipts (cash IN) and auto-expenses (cash OUT) are both `method: 'cash'`
- The receipt is marked `_autoInvoice` so it's excluded from manual receipt totals
- The expense IS included in cash expenses
- Net effect: The truck fare receipt auto-voucher doesn't inflate manual cash receipts, but the sale itself (which recorded truckFare as separate field) properly handles the cash flow through the auto-voucher system

---

## 8. Bank Balance Tracking

### Per-Bank Running Balance
```
Initial Balance = bank.openingBalance

Increases (+):
  + Sale payments to bank (sale.bankName == bank && method != 'cash/credit')
  + Receipt deposits to bank (receipt.bankName == bank && method != 'cash')
  + Transfers TO this bank (transfer.toAcc == bankName)

Decreases (-):
  - Purchase payments from bank (purchase.bankName == bank)
  - Payment withdrawals from bank (payment.bankName == bank)
  - Expense payments from bank (expense.bankName == bank)
  - Transfers FROM this bank (transfer.fromAcc == bankName)

Current Balance = Initial + Increases - Decreases
```

---

## 9. Receivables & Payables

### Customer Receivable
```
For each customer:
  Total Billed   = SUM(sale.total for customer) + MAX(0, openingBalance)
  Total Received = SUM(sale.paid for customer) 
                 + SUM(receipt.amount where party == customer && !_autoInvoice && !billKeys)
                 + (openingBalance < 0 ? ABS(openingBalance) : 0)
  Outstanding    = MAX(0, Total Billed - Total Received)
```

### Supplier Payable
```
For each supplier:
  Total Billed   = SUM(purchase.total for supplier) + MAX(0, openingBalance)
  Total Paid     = SUM(purchase.paid for supplier)
                 + SUM(payment.amount where party == supplier && !_autoInvoice && !billKeys)
                 + (openingBalance < 0 ? ABS(openingBalance) : 0)
  Outstanding    = MAX(0, Total Billed - Total Paid)
```

### DSO (Days Sales Outstanding)
```
avgDaily = totalBilled / MAX(1, invoiceCount)
DSO = ROUND(outstanding / avgDaily * 30) days
```

---

## 10. Balance Sheet

### Assets
```
Inventory        = SUM(product.stock * product.purchasePrice) for all products
Receivables      = SUM(customer outstanding) (see section 9)
Bank Balances    = SUM(bank.balance) for all banks
Cash in Hand     = MAX(0, cash calculation from section 7)

Total Assets     = Inventory + Receivables + Bank Balances + Cash in Hand
```

### Liabilities
```
Payables         = SUM(supplier outstanding) (see section 9)
Total Liabilities = Payables
```

### Equity
```
Owner Equity     = Total Assets - Total Liabilities
Total L + E      = Total Liabilities + Owner Equity  (must equal Total Assets)
```

---

## 11. Trial Balance

### Debit Accounts
| Account | Formula |
|---------|---------|
| COGS | SUM(product.purchasePrice * saleItem.qty) |
| Purchases | SUM(purchase.total) |
| Inventory | SUM(product.stock * product.purchasePrice) |
| Receivables | Customer outstanding calculation |
| Expenses | SUM(expense.amount) |
| Bank Accounts | SUM(bank.balance) |

### Credit Accounts
| Account | Formula |
|---------|---------|
| Sales Revenue | SUM(sale.total) |
| Payables | Supplier outstanding calculation |

### Validation
```
Total Debits should equal Total Credits
Difference = ABS(Total Debits - Total Credits)
IF Difference < 1 => BALANCED (green)
ELSE => IMBALANCED (red) - requires investigation
```

---

## 12. Truck Fare Settings & Validation

### Per-Thana Max Fare Configuration
```
Each thana has: { thana, district, division, maxFare (per qty) }
```

### Fare Validation on Sale
```
totalSaleQty   = SUM(item.qty) for all sale items
maxAllowedFare = thanaFare.maxFare * totalSaleQty

IF truckFare > maxAllowedFare:
  fareExceeded = true
  exceedAmount = truckFare - maxAllowedFare
  => Warning shown to user
  => Sale marked with fareExceeded flag
  => Truck Fare Report tracks exceeded trips
```

### Import from Excel
- Columns: Thana, Max Fare
- District and Division auto-filled from Bangladesh geo data
- Duplicate thanas are updated (upsert behavior)

---

## 13. Opening Balance Handling

### Customer Opening Balance
```
Positive (+)  = Customer OWES us (Receivable / Debit)
Negative (-)  = We OWE customer / Customer has advance (Credit)
```

### Supplier Opening Balance
```
Positive (+)  = We OWE supplier (Payable / Debit)
Negative (-)  = Supplier OWES us / We have advance (Credit)
```

### Impact on Calculations
- Opening balances are included in Receivable/Payable calculations
- Shown as first entry in Ledger
- Affect Balance Sheet totals

---

## 14. Auto-Voucher System

### Purpose
When a sale or purchase includes payment, the system auto-creates corresponding vouchers to maintain double-entry consistency.

### Sale Auto-Vouchers
| Trigger | Voucher Type | Flag |
|---------|-------------|------|
| `paid > 0 && method != 'credit'` | Receipt | `_autoInvoice: invoiceNo` |
| `truckFare > 0` | Receipt (cash) | `_isTruckFare: true, _autoInvoice: invoiceNo` |
| `truckFare > 0` | Expense (Transportation) | `_isTruckFare: true, _autoInvoice: invoiceNo` |

### Purchase Auto-Vouchers
| Trigger | Voucher Type | Flag |
|---------|-------------|------|
| `paid > 0 && method != 'credit'` | Payment | `_autoInvoice: purchaseNo` |

### Filtering Rules
- Auto-vouchers (`_autoInvoice` set) are EXCLUDED from manual receipt/payment lists in Ledger to prevent double-counting
- Truck fare auto-receipts (`_isTruckFare`) are EXCLUDED from manual receipt totals
- Bill-linked payments (`billKeys.length > 0`) are also excluded from general receipt/payment ledger entries

---

## 15. Audit Notes

### Data Integrity
1. **Stock accuracy**: Every sale DECREASES stock, every purchase INCREASES stock. Edit/Delete operations properly reverse before re-applying.
2. **Bank balance accuracy**: Every bank transaction is tracked. Edit/Delete operations reverse old bank effects.
3. **Double-entry compliance**: Auto-vouchers ensure every sale payment has a corresponding receipt, and every purchase payment has a corresponding payment voucher.

### Truck Fare Audit Trail
- Every truck fare generates TWO vouchers (receipt + expense) traceable to the original invoice
- Truck fare keys are stored on the sale record (`_autoTfRcvKey`, `_autoTfExpKey`)
- Editing or deleting a sale automatically cleans up truck fare vouchers

### FIFO COGS Audit
- COGS calculation uses ALL purchases (not date-filtered) to build inventory layers
- Sales consume inventory in purchase-date order (First In, First Out)
- This ensures consistent and verifiable cost allocation

### Modification Logging
- All create, edit, and delete operations are logged in `modlog:` prefix
- Logs include: action, detail, key, user, timestamp
- Entry-role users require approval for edits/deletes (approval queue system)

---

*Generated: 2026-04-26 | BizManager v3.0 | Apollow Traders*
