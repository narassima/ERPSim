# Comprehensive Student Guide: Integrative Case Study in ERP Logistics
## End-to-End Enterprise Operations: Navigation & Business Understanding Handbook

Welcome to the **Zenith Dynamics Group (ZDG)** ERP Logistics Case Study! This detailed guide is designed as your academic companion. It walks you through each step of the end-to-end business cycle, explaining both the **exact Fiori App navigation steps** and the **critical underlying business concepts** behind every operation.

---

## 📂 Detailed Step-by-Step Training Manual

---

### 📁 Phase 1: Customer Master Setup (Steps 1 - 3)

#### **Step 1: Create New Business Partner (Customer)**
*   **Fiori App Navigation**: Open the **Sales Person Space** &rarr; Click on the **Manage Customer Master Data** app &rarr; Click **Create** &rarr; Select **Organization** (since Alpine Velo is a business). Enter name `1 Alpine Velo ###` (where `###` is your 3-digit student ID) and add address details: Street `Apex Boulevard`, City `Stuttgart`, Postal Code `70173`, Region `08 (Baden-Württemberg)`.
*   **Business Understanding**: Establishing customer master data is the absolute prerequisite for the Order-to-Cash (O2C) cycle. In enterprise systems, a Business Partner (BP) represents any entity with which the company conducts business. Differentiating partners between Person and Organization controls specific legal, taxation, and billing rules.

#### **Step 2: Define Reconciliation G/L Account**
*   **Fiori App Navigation**: Inside the customer master creation screen, navigate to the **Company Code** tab &rarr; Click **Create** &rarr; Select Company Code `ZN00`. In the **Reconciliation Account** field, enter G/L account `11015000` (Domestic Receivables).
*   **Business Understanding**: The Reconciliation Account acts as a financial bridge. Instead of posting individual customer transactions directly to the general ledger, postings go to the sub-ledger (Accounts Receivable) and are automatically consolidated in G/L account `11015000`. This ensures real-time general ledger integrity without manual data transfers.

#### **Step 3: Define Sales & Distribution (SD) Views**
*   **Fiori App Navigation**: Inside the master screen, switch to the **Sales & Distribution** tab &rarr; Select Sales Organization `ZN10` (Wholesale Germany), Distribution Channel `WS` (Wholesale), and Division `VL` (Velocipedes). Input standard wholesale prices for the Commuter (`1950 EUR`), Endurance (`3950 EUR`), and Carbon custom (`4450 EUR`) models.
*   **Business Understanding**: SD Views define the customer's commercial profile. Linking them to the sales organization (`ZN10`), channel (`WS`), and division (`VL`) controls pricing conditions, discount matrices, and tax calculations during sales transactions.

---

### 🛠️ Phase 2: Sourcing Setup (Step 4)

#### **Step 4: Create Raw Accessories Template**
*   **Fiori App Navigation**: Open **Warehouse Supervisor Space** &rarr; **Manage Product Master Data** &rarr; Click **Create** using template `ZC-REF1-###`. Set the new ID to `ZC10###` and description to `Zenith Integrated Ride Computer`. Select Plant Stuttgart `MU10`, base unit `EA`, material group `ACCESSORY`, and standard asset inventory price `195 EUR`.
*   **Business Understanding**: Raw Materials (`RAW` product type) are purchased externally and consumed during manufacturing. Setting an standard price (`195 EUR`) dictates the baseline asset value of inventory. When these parts are received from suppliers, they instantly increase raw inventory assets on the company's balance sheet.

---

### 📦 Phase 3: Pre-Sales & Sales Order Entry (Steps 5 - 7)

#### **Step 5: Log Customer Sales Inquiry**
*   **Fiori App Navigation**: Open **Sales Person Space** &rarr; **Manage Sales Inquiries** &rarr; Click **Create** &rarr; Select Inquiry Type `ZI10`. Input customer account `Alpine Velo ###` and requested quantities (10 Commuter `XM10###`, 5 Endurance `XM20###`, 3 Custom Carbon `XM30###`).
*   **Business Understanding**: Pre-sales inquiries represent the exploratory negotiation phase. An Inquiry is 100% non-binding and registers a customer's interest. It has zero impact on accounting or inventory, but allows the marketing department to track pre-sales conversion metrics.

#### **Step 6: Submit Binding Sales Quotation**
*   **Fiori App Navigation**: Open **Manage Sales Quotations** &rarr; Click **Create**. Reference the Sales Inquiry number generated in Step 5 to automatically pull all materials, address parameters, and quantities. Specify a valid-to date (3 months from today).
*   **Business Understanding**: A Quotation is a legally binding commitment. It locks in specific prices, freight terms, and delivery schedules for the customer. If the customer accepts within the valid validity window, the company is legally obligated to honor those wholesale pricing commitments.

#### **Step 7: Post Commercial Sales Order**
*   **Fiori App Navigation**: Open **Manage Sales Orders** &rarr; Click **Create** &rarr; Select Order Type `ZS10` (Standard Sales Order). Reference the Sales Quotation number from Step 6 to copy all binding commercial conditions and finalize the contract.
*   **Business Understanding**: The Sales Order is the central commercial contract. Saving the order triggers automatic downstream integrative checks: Availability Checks (checking stock levels), Credit Limit checks, and Delivery Scheduling. It serves as the formal demand trigger for the manufacturing and shipping departments.

---

###  Phase 4: Production Planning & MRP Runs (Steps 8 - 14)

#### **Step 8: Define Manufacturing Operations Routing**
*   **Fiori App Navigation**: Open **Production Planner Space** &rarr; **Manage Routings** app. Create a routing sequence `RO-XM10-###` by copying template `XM10-DE`.
*   **Business Understanding**: A Routing defines *how* a product is physically made. It outlines the sequence of operations, the specific work centers (e.g. assembly line, testing bench), and the target setup and machine times. Routings are critical for capacity planning, labor scheduling, and calculating accurate standard manufacturing costs.

#### **Step 9: Create Product Group**
*   **Fiori App Navigation**: Open **Manage Product Groups** &rarr; Click **Create** &rarr; Name it `PG-VELO###` (Sport & Commute Bikes). Add `XM10###` and `XM20###` as group members.
*   **Business Understanding**: Product Groups aggregate individual finished goods. Enterprise planners use product groups to forecast bulk demands at a high level (e.g. planning global bike forecasts) rather than scheduling individual configurations, greatly simplifying long-term capacity forecasts.

#### **Step 10: Register PIR Forecast Demands**
*   **Fiori App Navigation**: Open **Maintain PIRs** &rarr; Input forecast demands of 220 units for your product group in Plant `MU10`.
*   **Business Understanding**: Planned Independent Requirements (PIRs) represent demand forecasts. Entering PIRs tells the system to procure raw components in advance to support Make-to-Stock (Strategy `40`) production, minimizing order lead times.

#### **Step 11-12: Strategy Group Assignments**
*   **Fiori App Navigation**: Open **Manage Product Master Data** &rarr; Verify Strategy `40` (Make-to-Stock) for `XM10`/`XM20` velos, and Strategy `20` (Make-to-Order) for premium `XM30` builds.
*   **Business Understanding**: Planning strategies control *when* production is triggered. Strategy `40` (MTS) builds inventory based on bulk forecasts (PIRs), keeping stock ready. Strategy `20` (MTO) only triggers manufacturing when a concrete sales order contract is signed, preventing expensive custom inventory from laying unsold in warehouse storage.

#### **Step 13: Run MRP Live (MD01N)**
*   **Fiori App Navigation**: Open **MRP Live** &rarr; Input Plant `MU10` &rarr; Choose Execute to run the planning run.
*   **Business Understanding**: Material Requirements Planning (MRP) is the core calculations engine of ERP Logistics. It recursively calculates net requirements by comparing active demands (Sales Orders, PIRs) against available physical stock. If a shortfall is detected, MRP automatically generates Planned Orders for assembly and Purchase Requisitions for component shortfalls.

#### **Step 14: Inspect Stock/Requirements List (MD04)**
*   **Fiori App Navigation**: Open **Stock/Requirements List (MD04)** &rarr; Input material `XM10###` or `ZC10###` to view current stock (0) and outstanding purchase requisitions.
*   **Business Understanding**: MD04 is the most critical audit transaction for warehouse supervisors. It provides a real-time, dynamic view of supply and demand balances, illustrating precisely how planned orders and purchasing requisitions will satisfy inventory shortfalls.

---

### 🛒 Phase 5: Sourcing & Procurement (Steps 15 - 31)

#### **Step 15: Convert Purchase Requisition (PR)**
*   **Fiori App Navigation**: Open **Purchaser Space** &rarr; **Manage Purchase Requisitions** &rarr; Locate the PR generated by MRP.
*   **Business Understanding**: Requisitions are purely internal documents. They notify the purchasing department that a raw material deficit exists and must be sourced, but they hold no commercial weight until converted to a vendor request.

#### **Step 16: Create Supplier Master Record**
*   **Fiori App Navigation**: Open **Manage Supplier Master Data** &rarr; Create supplier **AlpineGear Solutions (SUPP-###)**. In the Company Code `ZN00` view, assign Reconciliation Account `21015000` (Accounts Payable).
*   **Business Understanding**: Sourcing requires supplier master records. Reconciliation Account `21015000` groups domestic accounts payable, tracking what liabilities are owed to external vendors before cash clearing.

#### **Step 17: Dispatch Request for Quotation (RFQ)**
*   **Fiori App Navigation**: Open **Create RFQ (ME41)** &rarr; Create RFQ type `ZR10`. Tag it with collective reference number `ZENITH###`.
*   **Business Understanding**: Sourcing professionals use RFQs to invite bids from multiple vendors. Tagging them with a collective number allows the system to aggregate all returns, preparing them for price comparisons.

#### **Step 18: Register Supplier Quotation**
*   **Fiori App Navigation**: Open **Maintain Supplier Quotations (ME47)** &rarr; Select RFQ and input the returned bid price of `165 EUR` per unit.
*   **Business Understanding**: This registers the supplier's legally binding bid into the ERP database, including specific unit prices, discount rules, and shipping conditions.

#### **Step 19: Price Compare and Select Sourcing**
*   **Fiori App Navigation**: Open **Compare Bids (ME49)** &rarr; Input Collective Number `ZENITH###`. Select the cheapest bid.
*   **Business Understanding**: ME49 automatically compares returned supplier quotations side-by-side, sorting them by net price to guarantee that the company awards procurement contracts to the most cost-effective partner.

#### **Step 20: Post Purchase Order (PO)**
*   **Fiori App Navigation**: Open **Manage Purchase Orders (ME21N)** &rarr; Create PO by referencing the quotation from Step 18 to automatically generate PO number `450000###`.
*   **Business Understanding**: The PO is a legally binding commercial contract sent to the supplier. It obligates the vendor to deliver the goods and obligates the purchaser to pay the negotiated amount upon receipt.

#### **Step 21-22: Goods Receipt Post (MIGO)**
*   **Fiori App Navigation**: Open **Post Goods Receipt (MIGO)** &rarr; Reference PO `450000###`. Receive components into storage location `RM10` (Trading Goods).
*   **Business Understanding**: Goods Receipt records the physical arrival of parts. Posting MIGO triggers double-entry bookkeeping: it debits Inventory Assets and credits G/L account **GR/IR (Goods Receipt / Invoice Receipt)** clearing, registering that asset value has arrived before the invoice is processed.

#### **Step 23-24: Check Stock and Movements**
*   **Fiori App Navigation**: Open **Display Stock** or **Display Material Document**. Verify stock levels at Stuttgart.
*   **Business Understanding**: Unrestricted stock is increased, indicating parts are ready for assembly. The material document represents the audit trial tracking physical movement.

#### **Step 25: Supplier Invoice Matching (MIRO)**
*   **Fiori App Navigation**: Open **Create Supplier Invoice (MIRO)** &rarr; Input invoice code `INV-###` and reference PO. Match the invoiced value of `19,800 EUR`.
*   **Business Understanding**: Invoice Verification performs the "Three-Way Match" (comparing Purchase Order details, Goods Receipt quantities, and Supplier Invoice rates). Posting MIRO debits the GR/IR clearing account (closing it) and credits Accounts Payable (`21015000`), recognizing the formal liability to the supplier.

#### **Step 26-27: Document Flow Verification**
*   **Fiori App Navigation**: Open **Purchase Order History** &rarr; Verify documents chain.
*   **Business Understanding**: Evaluates complete audit visibility, ensuring procurement dockets are sequential.

#### **Step 28-31: Outgoing Cash Payment (F110)**
*   **Fiori App Navigation**: Open **Clear Outgoing Payments** &rarr; Process cash clearing of `19,800 EUR` using House Bank account `10015000`.
*   **Business Understanding**: The cash payment completes the Procure-to-Pay cycle. It debits Accounts Payable (clearing the supplier liability) and credits the cash Bank account, reducing liquid assets to settle the debt.

---

### ️ Phase 6: Shop Floor Production Execution (Steps 32 - 45)

#### **Step 32-34: Release Production Order**
*   **Fiori App Navigation**: Open **Manage Production Orders** &rarr; Convert Planned Order to Production Order `10000###` and choose **Release**.
*   **Business Understanding**: Releasing the production order is the green light for the factory floor. It copies components lists (BOM) and operations routing, allowing shop floor workers to stage parts and start physical assembly.

#### **Step 35-37: Assembly Order Confirmation**
*   **Fiori App Navigation**: Open **Enter Order Confirmations** &rarr; Enter completed yield quantities (10 and 8 units).
*   **Business Understanding**: Confirmation records actual labor and machine hours spent on the shop floor. The system accrues actual costs and compares them against target standard costs to evaluate efficiency.

#### **Step 38-40: Order Status Audits**
*   **Fiori App Navigation**: Open **Manage Production Orders** &rarr; Verify order status is `CNF` (Confirmed).
*   **Business Understanding**: A confirmed order represents that physical manufacturing is complete. It unlocks the finished goods receipt downstream.

#### **Step 41-43: Post Finished Goods Receipt**
*   **Fiori App Navigation**: Open **Post Goods Receipt for Order** &rarr; Receive velos into storage location `SL30` (Finished Goods).
*   **Business Understanding**: finished goods receipt transfers bicycles from WIP (Work in Progress) into finished goods inventory on the balance sheet, increasing AMG's available asset valuations.

#### **Step 44-45: Variance Settlement**
*   **Fiori App Navigation**: Open **Settle Production Order** &rarr; Execute cost settlement.
*   **Business Understanding**: Cost Settlement calculates any financial variance (differences between actual labor/material costs and standard target valuations) and allocates the variance to the cost of goods sold ledger, ensuring complete balance sheet accuracy.

---

###  Phase 7: Order Fulfillment & Cash Settlement (Steps 46 - 54)

#### **Step 46: Verify Sales Order Availability**
*   **Fiori App Navigation**: Open **Track Sales Orders** &rarr; Verify order is ready to dispatch.
*   **Business Understanding**: Ensures warehouse clerks have finished goods available in inventory storage before packing freight.

#### **Step 47-48: Generate Outbound Delivery Note**
*   **Fiori App Navigation**: Open **Create Outbound Deliveries** &rarr; Enter Shipping Point `MU10` and reference the Sales Order to generate delivery `800000###`.
*   **Business Understanding**: Creating a delivery note allocates inventory to the shipping queue, instructing warehouse pickers to fetch and pack the products.

#### **Step 49-50: Pick and Post Goods Issue (PGI)**
*   **Fiori App Navigation**: Open **Pick & Post Goods Issue** &rarr; Select delivery, enter pick quantities (12 Commuter, 6 Endurance, 4 Elite Carbon), and choose Post Goods Issue.
*   **Business Understanding**: Post Goods Issue (PGI) is the critical legal pivot point. It decrements physical stock, records Cost of Goods Sold (COGS), and formally transfers legal ownership of the velos to the customer (Alpine Velo).

#### **Step 51-52: Issue Accounts Receivable Invoice**
*   **Fiori App Navigation**: Open **Create Billing Documents** &rarr; Select delivery and choose Post to generate customer invoice `950000###`.
*   **Business Understanding**: Billing recognizes sales revenue. It debits the customer's Accounts Receivable account (`11015000`) and credits Sales Revenue, triggering the financial maturity window.

#### **Step 53-54: Clear Cash Payment Receipt**
*   **Fiori App Navigation**: Open **Clear Incoming Payments** &rarr; Clear invoice `950000###` using Bank account `10015000`.
*   **Business Understanding**: Clearing the payment completes the Order-to-Cash cycle. It debits the bank checking account (increasing cash assets) and credits Accounts Receivable (clearing customer debt), completing the integrative loop successfully!
