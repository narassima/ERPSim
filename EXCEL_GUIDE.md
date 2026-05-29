# How to Use: Offline Excel Progress Templates
## ERP ERP Logistics Simulation Ledger Guide

This guide explains how to fill out the offline Excel template (`ERP_template_empty.xlsx`) to record your transactional data offline and import it into the interactive simulator to restore your progress.

---

## 📑 Understanding the Spreadsheet Structure

The workbook has been designed to look **identical to the web interface's module structure**, split into multiple tabs corresponding directly to each business function. This helps you visualize and understand the end-to-end logistics flow with ease.

When completing work offline, you must enter details in the exact designated cells described below:

```
📁 ERP_template_empty.xlsx
├── 📄 Tab 1: Progress & Config          (Metadata & Student Identity)
├── 📄 Tab 2: Generated Documents         (Simulated ERP System Document Registry)
├── 📄 Tab 3: Sales & Distribution Setup  (Setup Master Data - Step 1-3)
├── 📄 Tab 4: Materials Management Setup  (Setup raw components - Step 4)
├── 📄 Tab 5: Sales and Distribution (Pre (Sales inquiry, quotes, orders - Step 5-7)
├── 📄 Tab 6: Production Planning Setup   (Groupings, Routings, PIR demands - Step 8-12)
├── 📄 Tab 7: Material Requirements Plan  (MRP runs & stock verification - Step 13-14)
├── 📄 Tab 8: Procurement Process (MM)    (Purchasing raw materials - Step 15-31)
├── 📄 Tab 9: Production Execution (PP)   (Manufacturing execution - Step 32-45)
└── 📄 Tab 10: Sales Fulfillment & Settle (Shipping, deliveries, billing - Step 46-54)
```

---

## 🔑 Tab 1: Progress & Config

This sheet registers who you are and which steps you have completed.

| Parameter Name | Internal Key (Do Not Change) | Value (Enter Your Details Here) | Explanation |
| :--- | :--- | :--- | :--- |
| **Student 3-Digit ID (###)** | `studentId` | **e.g., `045` or `112`** | **CRITICAL:** Enter your assigned three-digit student ID. This dynamically updates all custom material IDs, vendor accounts, and customer names. |
| **Current Active Step** | `currentStep` | **e.g., `15`** | The sequential step number (1 to 54) you are currently working on. |
| **Completed Steps List** | `completedSteps` | **e.g., `1,2,3,4,5,6,7`** | A comma-separated list of all step numbers you have successfully confirmed. |

*⚠️ **Rule:** Do not edit Columns A or B. Only enter your values in **Column C (Row 5, 6, and 7)**.*

---

## 💾 Tab 2: Generated Documents

This tab represents the simulated ERP document registry. When transactions are posted in the simulator, document numbers (e.g., Purchase Orders, Quotations) are auto-generated. 

If you are logging offline, write your generated document IDs in **Column C (Value Registered)**:

| Document / Record Name | System DB Key (Do Not Change) | Value Registered (Enter IDs Here) | Pattern Example (ID `045`) |
| :--- | :--- | :--- | :--- |
| **Customer ID** | `customerId` | `US00###` | `US00045` |
| **Customer Name** | `customerName` | `1 Elbe Cycle ###` | `1 Elbe Cycle 045` |
| **Sales Inquiry ID** | `salesInquiry` | `100000###` | `100000045` |
| **Sales Quotation ID** | `salesQuotation` | `200000###` | `200000045` |
| **Sales Order ID** | `salesOrder` | `300000###` | `300000045` |
| **Purchase Requisition ID** | `purchaseRequisition` | `10005###` | `10005045` |
| **Vendor ID** | `vendorId` | `VN00###` | `VN00045` |
| **RFQ Document ID** | `vendorRfq` | `600000###` | `600000045` |
| **Supplier Quotation ID** | `vendorQuotation` | `700000###` | `700000045` |
| **Purchase Order ID** | `purchaseOrder` | `450000###` | `450000045` |
| **Production Order ID** | `productionOrder` | `10000###` | `10000045` |
| **Outbound Delivery ID** | `outboundDelivery` | `800000###` | `800000045` |
| **Customer Invoice ID** | `customerInvoice` | `950000###` | `950000045` |

*💡 **Integration Benefit:** Registering these document IDs offline allows the simulator to dynamically insert them as autocompletes when you import the sheet!*

---

## 📝 Module Tabs 3 to 10: Transaction Logs

These sheets are where you log your step-by-step transaction form field entries, grouped by business function sheet. Each sheet has 6 columns:
- **Columns A to E (`Step Number` through `Internal Field Key`):** These are display-only references matching the web forms exactly. **Do not modify these!**
- **Column F (`Entered Value`):** This is the **input column**. Type your entered values in this column for each field.

### 📚 Field Guidelines & Standard Case Study Values

To make entries easy, refer to this cheatsheet of standard parameters required by the Global Bike ERP Case Study:

#### 1. Organizational & Accounting Parameters (Constant across all students)
When the Excel sheet asks for these parameters in **Column F**, enter the exact code below:

| Field Label | Internal Key | Correct Value | Meaning / Context |
| :--- | :--- | :---: | :--- |
| **Company Code** | `company_code` | **`DE00`** | Global Bike Germany GmbH |
| **Sales Organization** | `sales_org` | **`DS00`** | German Wholesale Sales Org |
| **Distribution Channel** | `dist_channel` | **`WH`** | Wholesale Distribution |
| **Division** | `division` | **`BI`** | Bicycles division |
| **Delivering Plant** | `plant` / `shipping_point` | **`HD00`** | Heidelberg plant / shipping point |
| **Base Unit of Measure** | `uom` | **`PC`** | Pieces |
| **Material Group** | `mat_group` | **`UTILITY`** | Accessory materials |
| **Reconciliation Account** | `recon_account` | **`12000000`** | Trade Receivables (Domestic Customer) |
| **Reconciliation Account** | `recon_account` | **`30000000`** | Trade Payables (Supplier / Vendor) |
| **Sort Key** | `sort_key` | **`001`** | Sorted by Posting Date |
| **Payment Terms** | `payment_term` | **`0001`** | Payable immediately net |
| **Condition Type** | `cond_type` | **`PR00`** | Standard wholesale pricing condition |
| **Settlement Rule** | `settle_rule` | **`ORD`** | Settle manufacturing costs to Order |

#### 2. Student ID Dependent Parameters (Contains `###`)
For these fields, you must replace `###` with your own 3-digit student ID (e.g. if your ID is `045`, type `GCBK1045`):

| Field Label | Internal Key | Format Pattern | Example for Student `045` |
| :--- | :--- | :---: | :--- |
| **Customer Name** | `name` | `1 Elbe Cycle ###` | **`1 Elbe Cycle 045`** |
| **Search Term** | `search_term` | `###` | **`045`** |
| **Material: Basic Bike** | `material` / `mat_id` | `GCBK1###` | **`GCBK1045`** |
| **Material: Endurance Bike** | `material` / `mat_id` | `GCBK2###` | **`GCBK2045`** |
| **Material: Carbon Custom** | `material` / `mat_id` | `GCBK3###` | **`GCBK3045`** |
| **Material: GPS Computer** | `gps_id` | `GPS1###` | **`GPS1045`** |
| **Vendor: MagdePedal** | `name` | `1 MagdePedal ###` | **`1 MagdePedal 045`** |
---

## 📖 Complete ERP Logistics Simulation Glossary (Tab by Tab)

Understanding the practical, real-life meaning and context of each field in ERP makes it much easier to enter values offline. Refer to this comprehensive parameter dictionary organized by the respective worksheet tabs:

### 🔑 Tab 1: Progress & Config
| Field Name | Key | Real-Life Business Context & Meaning | Typical Value / Pattern |
| :--- | :--- | :--- | :--- |
| **Student 3-Digit ID** | `studentId` | Unique training identifier assigned to each student. It dynamically updates all customer names, vendor accounts, and material IDs to avoid data overlap on shared servers. | E.g. `045` or `112` |
| **Current Active Step** | `currentStep` | The sequential index number of the current operation you are performing (from Step 1 to Step 54). | E.g. `15` |
| **Completed Steps List** | `completedSteps` | A comma-separated log of all completed steps. The simulator reads this to unlock downstream processes and populate visual dashboards. | E.g. `1,2,3,4,5,6,7` |

### 💾 Tab 2: Generated Documents
| Field Name | Key | Real-Life Business Context & Meaning | Pattern Example (ID `045`) |
| :--- | :--- | :--- | :--- |
| **Customer ID** | `customerId` | The unique ERP master business partner record ID representing the customer account. | `US00045` |
| **Customer Name** | `customerName` | Legal wholesale trading entity name. Contains the student ID to differentiate student database records. | `1 Elbe Cycle 045` |
| **Sales Inquiry ID** | `salesInquiry` | Pre-sales document recording the customer's request for product pricing and availability. | `100000045` |
| **Sales Quotation ID** | `salesQuotation` | Legally binding proposal sent to the customer containing specific pricing, valid dates, and quantities. | `200000045` |
| **Sales Order ID** | `salesOrder` | Internal binding contract authorizing the delivery of goods under negotiated commercial conditions. | `300000045` |
| **Purchase Requisition ID** | `purchaseRequisition` | Internal procurement request generated automatically by MRP to notify purchasing of component shortages. | `10005045` |
| **Vendor ID** | `vendorId` | Master record identifier representing the external partner/supplier supplying raw components. | `VN00045` |
| **RFQ Document ID** | `vendorRfq` | Request for Quotation sent out to multiple prospective suppliers to bid on material replenishment. | `600000045` |
| **Supplier Quotation ID** | `vendorQuotation` | Formal bid received back from a supplier specifying prices, quantities, and delivery conditions. | `700000045` |
| **Purchase Order ID** | `purchaseOrder` | Legally binding procurement contract sent to a vendor committing to purchase specified component stocks. | `450000045` |
| **Production Order ID** | `productionOrder` | Released workshop authorization document directing shop floor workers to stage and assemble bikes. | `10000045` |
| **Outbound Delivery ID** | `outboundDelivery` | Shipping ledger document representing goods prepared for dispatch at the Heidelberg shipping point. | `800000045` |
| **Customer Invoice ID** | `customerInvoice` | Accounts Receivable invoice sent to the customer requesting payment for fulfilled goods. | `950000045` |

### 📄 Tab 3: Sales & Distribution Setup (Master Data)
| Field Name | Key | Real-Life Business Context & Meaning | Required Case Study Value |
| :--- | :--- | :--- | :--- |
| **BP Role** | `bp_role` | Defines the functional role of the Business Partner. `FLCU00` (Customer - Financial Accounting) enables G/L billing, and `FLCU01` (Customer - Sales & Distribution) enables ordering and physical shipping. | `FLCU00 (Customer)` / `FLCU01` |
| **Address Form** | `form_address` | Formal title used in shipping dockets and G/L accounts receivable records. | `Company` |
| **Name** | `name` | Legal name of the business partner organization. For customers, it is `1 Elbe Cycle ###` and for vendors, it is `1 MagdePedal Tech ###`. | `1 Elbe Cycle ###` |
| **Street** | `street` | Registered street address of the customer's corporate office or warehouse facility. | `Main Street` |
| **House Number** | `house_num` | Building address number of the partner's headquarters. | `7` |
| **City** | `city` | Physical city location of the customer, used by ERP to calculate regional sales tax and route freight. | `Magdeburg` |
| **Postal Code** | `postal_code` | Geographic area mailing code of the wholesale customer. | `39106` |
| **Country/Region** | `country` | Two-character ISO code representing the partner's legal country of jurisdiction. Controls tax compliance. | `DE` |
| **Region** | `region` | German federal state code representing Saxony-Anhalt (15), used for regional commercial grouping. | `15 (Saxony-Anhalt)` |
| **Language** | `language` | Standard language code used for print output documents (invoices, shipping notes). | `DE` |
| **Search Term 1** | `search_term` | Concise 10-character keyword used to search for the master record on shared ERP databases. | `###` (Your 3-digit student ID) |
| **Transportation Zone** | `trans_zone` | Freight delivery band representing regional distance criteria for calculating transit times. | `Area North` |
| **Company Code** | `company_code` | The highest structural unit in financial accounting. `DE00` represents the legal German subsidiary (Global Bike Germany GmbH). | `DE00` |
| **Reconciliation Account** | `recon_account` | Aggregating G/L balance sheet account. Account `12000000` groups domestic Trade Receivables, while account `30000000` groups supplier Trade Payables. | `12000000` / `30000000` |
| **Sort Key** | `sort_key` | Rules mapping how transactions are sorted in accounting reports. `001` sorts items by Posting Date. | `001` |
| **Payment Term** | `payment_term` | Agreed timeline for financial payment. Code `0001` specifies that payment is due immediately, net. | `0001` |
| **Product Template (Basic)** | `temp_basic` | Pre-existing product master record (`DXTR1###` Black Deluxe Touring Bike) used as a template to copy baseline physical data. | `DXTR1###` |
| **Product Template (Endur)** | `temp_endurance` | Pre-existing product master record (`DXTR2###` Silver Deluxe Touring Bike) used as a template. | `DXTR2###` |
| **New Basic Bike ID** | `gcbk1_id` | Unique material catalog code representing the new Basic Sport & Commute bicycle product. | `GCBK1###` |
| **Basic Bike Description** | `gcbk1_desc` | Detailed commercial product name cataloged in the ERP master record. | `Global Basic Sport & Commute Bike` |
| **New Endurance Bike ID** | `gcbk2_id` | Unique material catalog code representing the new Endurance Road bicycle product. | `GCBK2###` |
| **Endurance Description** | `gcbk2_desc` | Detailed commercial product name cataloged in the master record. | `Global Endurance Road Bike` |
| **New Carbon Bike ID** | `gcbk3_id` | Unique material catalog code representing the custom hand-built Carbon bicycle product. | `GCBK3###` |
| **Carbon Bike Description** | `gcbk3_desc` | Detailed commercial product name cataloged in the master record. | `Global Carbon Custom Bike` |
| **Basic Inventory Price** | `price_basic` | Standard asset valuation per unit stored in the Material Master for basic bikes. | `1058` |
| **Endurance Inventory Price**| `price_endurance` | Standard asset valuation per unit stored in the Material Master for endurance bikes. | `2133` |
| **Carbon Inventory Price** | `price_carbon` | Standard asset valuation per unit stored in the Material Master for carbon custom bikes. | `2633` |
| **Sales Organization** | `sales_org` | Organizational unit responsible for negotiating wholesale terms and selling bicycles in Germany. | `DS00` |
| **GCBK1### Price (EUR)** | `price_gcbk1` | Standard wholesale selling price negotiated for basic bikes. | `1500` |
| **GCBK2### Price (EUR)** | `price_gcbk2` | Standard wholesale selling price negotiated for endurance road bikes. | `3500` |
| **GCBK3### Price (EUR)** | `price_gcbk3` | Standard wholesale selling price negotiated for premium carbon custom bikes. | `4000` |

### 📄 Tab 4: Materials Management Setup
| Field Name | Key | Real-Life Business Context & Meaning | Required Case Study Value |
| :--- | :--- | :--- | :--- |
| **Standard Price (EUR)** | `price_std` | Inventory asset value per unit assigned to purchased raw accessories in the Material Master. | `150` |
| **Base Unit of Measure** | `uom` | Physical baseline counting unit for inventory tracking. `PC` stands for pieces. | `PC` |
| **Material Group** | `mat_group` | Categorization code used to group raw component materials for reporting and capacity scheduling. | `UTILITY` |
| **Delivering Plant** | `plant` | The production facility or warehouse location where the raw components are received and registered. | `HD00` |

### 📄 Tab 5: Sales and Distribution (Pre-Sales & Orders)
| Field Name | Key | Real-Life Business Context & Meaning | Required Case Study Value |
| :--- | :--- | :--- | :--- |
| **Sales Inquiry Type** | `inq_type` | Pre-sales document type code. `IN` stands for standard non-binding Sales Inquiry. | `IN` |
| **GCBK1### Quantity** | `qty_gcbk1` | Number of basic bikes ordered by the customer (Elbe Cycle) in the pre-sales inquiries. | `5` |
| **GCBK2### Quantity** | `qty_gcbk2` | Number of endurance road bikes ordered by the customer in the pre-sales inquiries. | `2` |
| **GCBK3### Quantity** | `qty_gcbk3` | Number of carbon custom bikes ordered by the customer in the pre-sales inquiries. | `1` |
| **Valid To Date** | `valid_to` | Expiration date of the pricing and discount offers specified in the quotation. | `1 Month from now` |
| **Reference Inquiry ID** | `ref_inquiry` | Prior Inquiry document number used to copy all terms and partner details over to the Quotation. | E.g. `100000045` |
| **Quotation Type** | `quot_type` | Document classification code. `QT` represents a legally binding Quotation. | `QT` |
| **Sales Order Type** | `so_type` | Document classification code. `OR` represents a standard Wholesale Sales Order. | `OR` |
| **Reference Quotation ID** | `ref_quotation` | Prior Quotation document number used to copy binding conditions over to the Sales Order. | E.g. `200000045` |

### 📄 Tab 6: Production Planning Setup
| Field Name | Key | Real-Life Business Context & Meaning | Required Case Study Value |
| :--- | :--- | :--- | :--- |
| **Routing Group Title** | `routing_title` | Group ID defining the manufacturing sequence of work center operations required to assemble bikes. | `GCBK1###-HD` |
| **Delivering Plant** | `plant` | Shop floor plant where routing work center operations are executed. | `HD00` |
| **Product Group ID** | `pg_id` | Category code grouping materials together for aggregate inventory forecasting. | `PG-GCBK###` |
| **Description** | `pg_desc` | Text describing the newly created product group. | `Sport & Commute Bikes ###` |
| **Members** | `pg_members` | Comma-separated list of individual product IDs included in the product group. | `GCBK1###, GCBK2###` |
| **Forecast Quantity** | `forecast_qty` | Aggregate target quantity planned for manufacturing during the forecast period. | `100` |
| **Strategy Group Basic/Endur**| `strat_40` | Planning Strategy `40` (Make-to-Stock / MTS), triggering raw components procurement based on forecasts. | `40` |
| **Strategy Group Carbon** | `strat_20` | Planning Strategy `20` (Make-to-Order / MTO), locking custom carbon assembly to trigger only upon Sales Order. | `20` |

### 📄 Tab 7: Material Requirements Plan (MRP)
| Field Name | Key | Real-Life Business Context & Meaning | Required Case Study Value |
| :--- | :--- | :--- | :--- |
| **Material / Product Group** | `target` | The material code or product group ID targeted for MRP calculation to identify component shortfalls. | `PG-GCBK###` |
| **Delivering Plant** | `plant` | The production facility where the inventory shortage calculation is executed. | `HD00` |
| **Confirm Action** | `status` | Action confirmation signifying the ERP MRP planning run was completed successfully. | `Completed` |

### 📄 Tab 8: Procurement Process (MM)
| Field Name | Key | Real-Life Business Context & Meaning | Required Case Study Value |
| :--- | :--- | :--- | :--- |
| **RFQ Type** | `rfq_type` | Document classification code. `AN` represents standard vendor Request for Quotation. | `AN` |
| **Collective Number** | `coll_num` | Multi-character reference tag used to group multiple supplier RFQs together for comparative cost analysis. | `COLL###` |
| **RFQ Quantity** | `quantity` | Physical material quantity requested from the external supplier. | `100` / `5` |
| **Supplier** | `supplier` | The supplier master record name selected to receive the RFQ or Purchase Order. | `1 MagdePedal Tech ###` |
| **Unit Price (EUR)** | `price` | Negotiated price per unit offered by the supplier. | `130` |
| **Reference RFQ ID** | `ref_rfq` | Prior RFQ document number used as a reference to log the supplier's quotation bid. | E.g. `600000045` |
| **Reference Purchase Order** | `ref_po` | Prior Purchase Order ID referenced to verify goods receipt quantities and supplier invoice values. | E.g. `450000045` |
| **Delivery Note / Ref Doc** | `delivery_note` | External document ID assigned by the supplier to the shipping docket (used for goods matching). | E.g. `DN-###` |
| **Goods Movement Type** | `movement` | Three-digit key controlling physical inventory transactions. `561` initializes stock; `101` posts goods receipt. | `101` / `561` |
| **Storage Location** | `storage_loc` | Warehouse subdivision where stocks are held. `TG00` is Trading Goods; `RM00` is Raw Materials. | `TG00` / `RM00` |
| **Supplier Invoice Number** | `invoice_num` | External billing number assigned by the supplier to register accounts payable. | E.g. `INV-###` |
| **Supplier Invoice Amount** | `invoice_amt` | Total gross payable amount invoiced by the supplier (Quantity * Unit Price). | `13000` |

### 📄 Tab 9: Production Execution (PP)
| Field Name | Key | Real-Life Business Context & Meaning | Required Case Study Value |
| :--- | :--- | :--- | :--- |
| **Planned Order ID** | `planned_order` | Temporary planning document generated by MRP during material shortages. | E.g. generated PO ID |
| **Production Order ID** | `prod_order` | Official shop floor authorization document released to assemble the bicycles. | E.g. `10000045` |
| **Yield to Confirm** | `yield_qty` | Number of successfully manufactured, defect-free final products completed on the shop floor. | `3` / `2` |
| **Settlement Rule** | `settle_rule` | Cost controlling rule directing ERP how to allocate actual variance cost balances back to the G/L. | `ORD (Order)` |

### 📄 Tab 10: Sales Fulfillment & Settlement
| Field Name | Key | Real-Life Business Context & Meaning | Required Case Study Value |
| :--- | :--- | :--- | :--- |
| **Picked Qty GCBK1###** | `pick_gcbk1` | Physical quantity of basic bikes fetched from warehouse shelves at Heidelberg for customer dispatch. | `5` |
| **Picked Qty GCBK2###** | `pick_gcbk2` | Physical quantity of endurance road bikes fetched from warehouse shelves for customer dispatch. | `2` |
| **Picked Qty GCBK3###** | `pick_gcbk3` | Physical quantity of carbon custom bikes fetched from warehouse shelves for customer dispatch. | `1` |
| **Outbound Delivery ID** | `ref_delivery` | The Outbound Delivery document ID referenced to execute picking, post goods issue, and billing. | E.g. `800000045` |
| **Shipping Point** | `shipping_point` | Location from which physical goods are shipped. Heidelberg plant shipping point `HD00`. | `HD00` |
| **Clearing Amount (EUR)** | `clear_amt` | Total financial currency processed to clear accounts receivable balances after payment. | Standard invoice total |
| **Bank Account** | `bank_acct` | General Ledger cash asset account representing bank checking assets. | `10000000` |

---

## 🚀 How to Import & Export

### How to Save/Export Your Progress:
1. When working in the online simulator, click the **Export Excel** button in the header bar.
2. The browser will instantly compile your logs and download a file named `ERP_case_study_progress_###.xlsx`.
3. Open this sheet in Microsoft Excel or Google Sheets to check your entries!

### How to Restore/Import Offline Work:
1. Open the interactive simulator in your browser.
2. Click the **Import File** button in the header.
3. Choose your edited `ERP_case_study_progress_###.xlsx` workbook from your device.
4. **Result:** The system will read the sheets, update your student ID, automatically complete the steps list, and load your custom entries into forms and autocomplete pools!
