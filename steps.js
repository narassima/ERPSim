const ERPSteps = [
  {
    "number": 1,
    "title": "Create New Business Partners (Customer)",
    "role": "Sales Person",
    "time": "15 min",
    "app": "Manage Customer Master Data",
    "module": "setup_sd",
    "module_name": "Sales & Distribution Setup",
    "instructions": [
      "Step 1: Create New Business Partners (Customer)",
      "want to win Alpine Velo ### as a new customer as part of this case study (which",
      "is therefore not yet stored in the system), you will create the customer master",
      "record for it. You enter two types of customer data \u2013 sales and financial data.",
      "In general, customer data is created in three groups or views \u2013 General,",
      "Financial Accounting, and Sales.",
      "Customers can be created centrally, which means that all views are created",
      "by a single employee in one step. However, responsibility can also be",
      "distributed so that different employees of the finance and sales departments",
      "are responsible for creating and maintaining the data in their respective views.",
      "In this activity, you will use central maintenance to enter all necessary data",
      "for the new customer at once.",
      "To create a new customer, click the Manage Customer Master Data app in the",
      "section Sales & Distribution in the Sales Person role.",
      "Initial Screen",
      "Note If the app is not displayed, search for it using the search bar .",
      "In the Manage Customer Master view, choose the  button. As the new",
      "customer Alpine Velo ### is a company, click Organization in the submenu",
      "that opens.",
      "Organization",
      "Note Business partners are created at a higher level (or cross -department).",
      "They can be categorized as a person or organization. An organization",
      "represents entities such as a company (for example, a legal person), parts of a",
      "legal person (such as a department), or an association. \u201cOrganization\u201d is an",
      "umbrella term used to map any situation that can occur during daily business"
    ],
    "fields": [
      {
        "label": "BP Role",
        "value": "FLCU00 (Customer)",
        "name": "bp_role",
        "required": true
      },
      {
        "label": "Address Form",
        "value": "Corporation",
        "name": "form_address",
        "required": true
      },
      {
        "label": "Name",
        "value": "1 Alpine Velo ###",
        "name": "name",
        "required": true
      },
      {
        "label": "Street",
        "value": "Apex Boulevard",
        "name": "street",
        "required": true
      },
      {
        "label": "House Number",
        "value": "42",
        "name": "house_num",
        "required": true
      },
      {
        "label": "City",
        "value": "Stuttgart",
        "name": "city",
        "required": true
      },
      {
        "label": "Postal Code",
        "value": "70173",
        "name": "postal_code",
        "required": true
      },
      {
        "label": "Country/Region",
        "value": "DE",
        "name": "country",
        "required": true
      },
      {
        "label": "Region",
        "value": "08 (Baden-Württemberg)",
        "name": "region",
        "required": true
      },
      {
        "label": "Language",
        "value": "DE",
        "name": "language",
        "required": true
      },
      {
        "label": "Search Term 1",
        "value": "###",
        "name": "search_term",
        "required": true
      },
      {
        "label": "Transportation Zone",
        "value": "Zone South",
        "name": "trans_zone",
        "required": true
      },
      {
        "label": "Company Code",
        "value": "ZN00",
        "name": "company_code",
        "required": true
      },
      {
        "label": "Reconciliation Account",
        "value": "12100999",
        "name": "recon_account",
        "required": true
      },
      {
        "label": "Sort Key",
        "value": "015",
        "name": "sort_key",
        "required": true
      },
      {
        "label": "Payment Term",
        "value": "ZN45",
        "name": "payment_term",
        "required": true
      }
    ]
  },
  {
    "number": 2,
    "title": "Create Material from Template (Bike)",
    "role": "Warehouse Supervisor",
    "time": "10 min",
    "app": "Manage Product Master Data",
    "module": "setup_sd",
    "module_name": "Sales & Distribution Setup",
    "instructions": [
      "Step 2: Create Material from Template (Bike)",
      "XM30###.",
      "these should be a modification of the previous bikes, use the Deluxe Touring",
      "bikes XM-REF1-### and XM-REF2-### already stored in the system as a template.",
      "For the carbon fiber wheel XM30###, the newly created XM20### can be",
      "used as a template. All new components of the bicycles will be completed later",
      "in the case study.",
      "To create new products , use the Manage Product Master Data  app in the",
      "Materials Management area in the Warehouse Supervisor role.",
      "Initial Screen",
      "Use the Product field to find your mountain bike XM-REF1-###.",
      "XM-REF1-###",
      "Select the line with your Deluxe Touring Bike and click .",
      "In the Select Organizational Data to Copy popup, click on the Plants row.",
      "-- PAGE_BREAK ---",
      "Deselect all plants except your plant in Munich (MU10). Click .",
      "MU10",
      "Now click on the line of the distribution chains and select only all lines with",
      "the sales organization ZN10. Click",
      "ZN10",
      "-- PAGE_BREAK ---",
      "Confirm your adjustments with .",
      "In the Create Master Data Record  dialog box, enter XM10### as the",
      "product number and Zenith Commuter Smart Bike as the description.",
      "Click ."
    ],
    "fields": [
      {
        "label": "Product Template (Basic)",
        "value": "XM-REF1-###",
        "name": "temp_basic",
        "required": true
      },
      {
        "label": "Product Template (Endurance)",
        "value": "XM-REF2-###",
        "name": "temp_endurance",
        "required": true
      },
      {
        "label": "New Basic Bike ID",
        "value": "XM10###",
        "name": "xm10_id",
        "required": true
      },
      {
        "label": "Basic Bike Description",
        "value": "Zenith Commuter Smart Bike",
        "name": "xm10_desc",
        "required": true
      },
      {
        "label": "New Endurance Bike ID",
        "value": "XM20###",
        "name": "xm20_id",
        "required": true
      },
      {
        "label": "Endurance Bike Description",
        "value": "Zenith Endurance Pro Bike",
        "name": "xm20_desc",
        "required": true
      },
      {
        "label": "New Carbon Bike ID",
        "value": "XM30###",
        "name": "xm30_id",
        "required": true
      },
      {
        "label": "Carbon Bike Description",
        "value": "Zenith Elite Carbon Aero Bike",
        "name": "xm30_desc",
        "required": true
      },
      {
        "label": "Delivering Plant",
        "value": "MU10",
        "name": "plant",
        "required": true
      },
      {
        "label": "Sales Organization",
        "value": "ZN10",
        "name": "sales_org",
        "required": true
      },
      {
        "label": "Basic Inventory Price (EUR)",
        "value": "1058",
        "name": "price_basic",
        "required": true
      },
      {
        "label": "Endurance Inventory Price (EUR)",
        "value": "2133",
        "name": "price_endurance",
        "required": true
      },
      {
        "label": "Carbon Inventory Price (EUR)",
        "value": "2633",
        "name": "price_carbon",
        "required": true
      },
      {
        "label": "Strategy Group Basic/Endur",
        "value": "40",
        "name": "strat_40",
        "required": true
      },
      {
        "label": "Strategy Group Carbon",
        "value": "20",
        "name": "strat_20",
        "required": true
      }
    ]
  },
  {
    "number": 3,
    "title": "Maintain Condition Types",
    "role": "Sales Person",
    "time": "5 min",
    "app": "Condition Maintenance: Create",
    "module": "setup_sd",
    "module_name": "Sales & Distribution Setup",
    "instructions": [
      "Step 3: Maintain Condition Types",
      "bicycles in the range, it is necessary to set pricing conditions for the new",
      "materials.",
      "To create a new price condition, use the Condition Maintenance: Create app in",
      "the Sales and Distribution area in the role Sales Person.",
      "Initial Screen",
      "Note If the app is not displayed, search for it using the search bar .",
      "Open the menu entry Prices \uf0e0 and double-click Material Price.",
      "Now choose  (Material with release status) on the right side of the",
      "screen.",
      "Enter sales organization ZN10 and distribution channel WS. Choose Enter to",
      "confirm your entry.",
      "ZN10",
      "VH",
      "In the Material with Release Status  table, enter PR00 (price) as the condition",
      "type for the first three lines and enter an amount of EUR 1500 for material",
      "XM10###, EUR 3500 for material XM20###, and EUR 4000 for material",
      "XM30###.",
      "PR00",
      "XM10###",
      "1500 EUR",
      "XM20###",
      "3500 EUR",
      "XM30###",
      "4000 EUR"
    ],
    "fields": [
      {
        "label": "Sales Org",
        "value": "ZN10",
        "name": "sales_org",
        "required": true
      },
      {
        "label": "Distribution Channel",
        "value": "WS",
        "name": "dist_channel",
        "required": true
      },
      {
        "label": "Condition Type",
        "value": "PR00",
        "name": "cond_type",
        "required": true
      },
      {
        "label": "XM10### Price (EUR)",
        "value": "1950",
        "name": "price_xm10",
        "required": true
      },
      {
        "label": "XM20### Price (EUR)",
        "value": "3950",
        "name": "price_xm20",
        "required": true
      },
      {
        "label": "XM30### Price (EUR)",
        "value": "4450",
        "name": "price_xm30",
        "required": true
      }
    ]
  },
  {
    "number": 4,
    "title": "Create material from template (Integrated GPS Bike",
    "role": "Warehouse Supervisor",
    "time": "10 min",
    "app": "Manage Product \nMaster Data",
    "module": "setup_mm",
    "module_name": "Materials Management Setup",
    "instructions": [
      "Step 4: Create material from template (Integrated GPS Bike",
      "Computer)",
      "Computer IDGC2###.",
      "materials in the system, but differs in its integration into the handlebars during",
      "the production phase. Please use the ERP Fiori launchpad to create this new",
      "Zenith Integrated Ride Computer in the system. As a reference, you can use the",
      "Deluxe Bike Computer with the name ZC-REF1-### as a template.",
      "To create new Zenith Integrated Ride Computer s, use the  Manage Product",
      "Master Data  app in the Materials Management  area in the Warehouse",
      "Supervisor role.",
      "Initial Screen",
      "Use the Product field to find the Ironing Lock ZC-REF1-###. Click .",
      "ZC-REF1-###",
      "Select the row with the ironing lock and click .",
      "In the Select Organizational Data to Copy popup, click on the Plants row.",
      "-- PAGE_BREAK ---",
      "Deselect all plants except for the plant in Munich (MU10). Click .",
      "MU10",
      "Now click on the line of the distribution chains and select only the line with",
      "the sales organization ZN10. Click .",
      "ZN10",
      "Confirm your adjustments with .",
      "In the Create Master Data Record dialog box, enter IDGC1### as the product",
      "number, Raw Material (Raw)  as the product type, Raw Materials (RAW)",
      "as the product group , and Zenith Integrated Ride Computer  ### as the"
    ],
    "fields": [
      {
        "label": "New Material ID",
        "value": "ZC10###",
        "name": "zc10_id",
        "required": true
      },
      {
        "label": "Description",
        "value": "Zenith Integrated Ride Computer",
        "name": "zc10_desc",
        "required": true
      },
      {
        "label": "Plant",
        "value": "MU10",
        "name": "plant",
        "required": true
      },
      {
        "label": "Base Unit of Measure",
        "value": "EA",
        "name": "uom",
        "required": true
      },
      {
        "label": "Material Group",
        "value": "ACCESSORY",
        "name": "mat_group",
        "required": true
      },
      {
        "label": "Standard Price (EUR)",
        "value": "195",
        "name": "price_std",
        "required": true
      }
    ]
  },
  {
    "number": 5,
    "title": "Create Sales Inquiry",
    "role": "Sales Person",
    "time": "10 min",
    "app": "Manage Sales Inquiries",
    "module": "sd_sales",
    "module_name": "Sales and Distribution (Pre-sales)",
    "instructions": [
      "Step 5: Create Sales Inquiry",
      "Cycle ###) in the system. An inquiry is a request from a customer for specific",
      "sales information or a non -binding quotation. An inquiry can relate to",
      "materials or services, conditions and, if necessary, delivery dates.",
      "To create an inquiry, use the Manage Sales Inquiries  app in the Sales and",
      "Distribution area in the Sales Person role.",
      "Initial Screen",
      "Note This app is dynamic and displays a 6 in this case. This means that Global",
      "Bikes currently has 6  different customer inquiries. The number you see",
      "depends on the requests that you and the other participants created previously.",
      "You will also encounter this functionality with other apps.",
      "If you want to display all existing sales inquiries, choose . A list of all",
      "requests is output. If, on the other hand, you want to create a new customer",
      "inquiry, click .",
      "Enter AF (Inquiry) as the RFQ type and ZN10  (North Germany) as the sales",
      "organization. In addition, add WS (wholesale) in the Distribution Channel",
      "field and VL (bicycles) as the division.",
      "AF",
      "ZN10",
      "VH",
      "VL",
      "-- PAGE_BREAK ---",
      "Compare your entries with the screenshot above. Then choose  at the",
      "bottom of the screen to be able to enter further data for the request. The",
      "following screen is now displayed."
    ],
    "fields": [
      {
        "label": "Inquiry Type",
        "value": "ZI10",
        "name": "inq_type",
        "required": true
      },
      {
        "label": "Sales Org",
        "value": "ZN10",
        "name": "sales_org",
        "required": true
      },
      {
        "label": "Distribution Channel",
        "value": "WS",
        "name": "dist_channel",
        "required": true
      },
      {
        "label": "Division",
        "value": "VL",
        "name": "division",
        "required": true
      },
      {
        "label": "Sold-To Party (Customer)",
        "value": "Alpine Velo ###",
        "name": "customer",
        "required": true
      },
      {
        "label": "XM10### Quantity",
        "value": "12",
        "name": "qty_xm10",
        "required": true
      },
      {
        "label": "XM20### Quantity",
        "value": "6",
        "name": "qty_xm20",
        "required": true
      },
      {
        "label": "XM30### Quantity",
        "value": "4",
        "name": "qty_xm30",
        "required": true
      }
    ]
  },
  {
    "number": 6,
    "title": "Create Quotation",
    "role": "Sales Representative",
    "time": "10 min",
    "app": "Manage Sales \nQuotations - Version 1",
    "module": "sd_sales",
    "module_name": "Sales and Distribution (Pre-sales)",
    "instructions": [
      "Step 6: Create Quotation",
      "in the RFQ. Using the Create with Reference function, you can simply transfer",
      "the data from the RFQ to the quotation and send it to Alpine Velo ###.",
      "In the Sales area, in the role Sales Representative , use the Manage Sales",
      "Quotations - Version 1 app.",
      "Initial Screen",
      "Note If the app is not displayed, search for it using the search bar .",
      "Initial Screen",
      "Note In an inquiry, a customer wants to know the conditions (price, scheduling",
      "agreement) for a specific product or service. The only difference to an offer is",
      "that it is a legally binding offer for the delivery of the desired goods.",
      "If you want to display all existing quotations, press . A list of all",
      "quotations is output. However, if you want to respond to the request you just",
      "entered, click .",
      "In the Offer Type  field, enter the abbreviation QT (Quotation) and click",
      "in the lower part of the screen. In the following dialog box, you",
      "can search for your inquiry and thus copy the data to the quotation. To do so,",
      "make sure that the Request tab is selected. In the Inquiry field, enter your",
      "inquiry number.",
      "SP",
      "Inquiry Number",
      "Note If you have forgotten your inquiry number, alternatively click in the",
      "Inquiry field and then click the value help icon  . On the Sales document",
      "according to customer PO number tab page, enter your number (###) as the",
      "customer reference."
    ],
    "fields": [
      {
        "label": "Quotation Type",
        "value": "QT",
        "name": "quot_type",
        "required": true
      },
      {
        "label": "Reference Inquiry ID",
        "value": "",
        "name": "ref_inquiry",
        "required": true,
        "placeholder": "Enter Inquiry ID from Step 5"
      },
      {
        "label": "Valid To Date",
        "value": "1 Month from now",
        "name": "valid_to",
        "required": true
      }
    ]
  },
  {
    "number": 7,
    "title": "Create sales order with reference to quotation",
    "role": "Sales Representative",
    "time": "10 min",
    "app": "",
    "module": "sd_sales",
    "module_name": "Sales and Distribution (Pre-sales)",
    "instructions": [
      "Step 7: Create sales order with reference to quotation",
      "and now wants to order the bikes. Since you have already maintained the",
      "quotation in the system as an example, you can create the order with reference",
      "to the quotation and save time again by transferring the data.",
      "To create a sales order, in the Sales area, in the role Sales Representative, click",
      "the Manage Sales Orders - Version 1 app.",
      "Initial Screen",
      "Note If the app is not displayed, search for it using the search bar .",
      "If you want to display all existing sales orders, choose . A list of all sales",
      "orders is output. If, on the other hand, you want to create a sales order for the",
      "accepted quotation, click   and then .",
      "In the Create Sales Documents  view, in the Order Type field, enter ZS10",
      "(Standard Order). Click  to find your quote from the previous",
      "step. Therefore, in the following dialog box, make sure that the \"Offer\" tab",
      "page is selected. Enter your quotation number  in the Quotation  field.",
      "ZS101",
      "Quotation Number",
      "Note If you have forgotten your quotation number, alternatively click in the",
      "Quotation field and then click the value help icon . On the Sales Document",
      "by Customer PO Number  tab, enter your number ( ###) for Customer",
      "Reference.",
      "###",
      "Then click  and double-click your purchase order. Your quotation number",
      "is supplemented accordingly.",
      "The system displays a list with the inquiry created previously and the"
    ],
    "fields": [
      {
        "label": "Sales Order Type",
        "value": "ZS10",
        "name": "so_type",
        "required": true
      },
      {
        "label": "Reference Quotation ID",
        "value": "",
        "name": "ref_quotation",
        "required": true,
        "placeholder": "Enter Quotation ID from Step 6"
      },
      {
        "label": "Purchase Order Number",
        "value": "PO-###",
        "name": "cust_po",
        "required": true
      }
    ]
  },
  {
    "number": 8,
    "title": "Create Routing (from Template)",
    "role": "Production Manager",
    "time": "15 min",
    "app": "Create Routing",
    "module": "pp_setup",
    "module_name": "Production Planning Setup",
    "instructions": [
      "Step 8: Create Routing (from Template)",
      "components of the bicycles must now be assigned to the individual work steps.",
      "This is usually a dependent process in which each operation is based on the",
      "results (products) of the preceding transaction.",
      "Since the bicycles of the new \"Sport & Commute\" series are derived from the",
      "Deluxe Touring Bike series, these are similar. Therefore, please use the",
      "routing of the Deluxe Touring Bike series as a template and adjust it",
      "accordingly.",
      "To create a Routing, click the Create Routing app in the Production Planning",
      "and Execution area in the Production Manager role.",
      "Initial Screen",
      "On the Create Routing: Initial  Screen, enter material XM10### and plant",
      "MU10.",
      "XM10###",
      "MU10",
      "Choose .",
      "In the dialog box that appears, select Routing and choose .",
      "Routing",
      "In the Template Selection dialog box, enter XM-REF1-### as the material and",
      "enter MU10 as the plant.",
      "XM-REF1-###",
      "MU10",
      "-- PAGE_BREAK ---",
      "Click .",
      "On the Create Routing: Header Data Check screen, use the F4 help for the"
    ],
    "fields": [
      {
        "label": "Material",
        "value": "XM10###",
        "name": "material",
        "required": true
      },
      {
        "label": "Plant",
        "value": "MU10",
        "name": "plant",
        "required": true
      },
      {
        "label": "Routing Group Title",
        "value": "XM10###-HD",
        "name": "routing_title",
        "required": true
      }
    ]
  },
  {
    "number": 9,
    "title": "Create Product Group",
    "role": "Production Manager",
    "time": "5 min",
    "app": "Display Product Group",
    "module": "pp_setup",
    "module_name": "Production Planning Setup",
    "instructions": [
      "Step 9: Create Product Group",
      "portfolio and supports later material requirements planning (MRP) through",
      "aggregated planning and forecasting.",
      "Group the two bicycles XM10### and XM20### into one product group.",
      "To create a product group , click the Display Product Group  app in the",
      "Production Planning and Execution area in the Production Manager role.",
      "Initial Screen",
      "On the Display Product Group: Initial Screen, choose Menu \uf0e0 Product",
      "Groups \uf0e0 Create",
      "On the Create Product Group: Initial Screen, enter PG-GC### as the product",
      "group and Product Group Sport & Commute ### as the description directly",
      "below. Enter MU10 as the plant and EA as the base unit of measure.",
      "PG-GC###",
      "Product group Sport &",
      "Commute ###",
      "MU10",
      "EA",
      "Make sure that materials are selected for members.",
      "Materials",
      "Press Enter.",
      "-- PAGE_BREAK ---",
      "In the Create Product Group: Maintain Members (Materials) view, enter your",
      "material numbers XM10### and XM20###  as membership numbers with",
      "plant MU10.",
      "XM10###"
    ],
    "fields": [
      {
        "label": "Product Group ID",
        "value": "PG-AV###",
        "name": "pg_id",
        "required": true
      },
      {
        "label": "Description",
        "value": "Sport & Commute Bikes ###",
        "name": "pg_desc",
        "required": true
      },
      {
        "label": "Members",
        "value": "XM10###, XM20###",
        "name": "pg_members",
        "required": true
      }
    ]
  },
  {
    "number": 10,
    "title": "Create Planned Independent Requirements",
    "role": "",
    "time": "15 min",
    "app": "Maintain PIRs",
    "module": "pp_setup",
    "module_name": "Production Planning Setup",
    "instructions": [
      "Step 10: Create Planned Independent Requirements",
      "GC### Bike product group.",
      "Name (job) Jun Lee (Production Manager)",
      "A planned independent requirement  is a planned requirement note for a",
      "material that has not yet been covered by sales orders. It is used in planning as",
      "the basis for requirements planning and consists of a plan ned quantity at a",
      "certain point in time or distributed over several periods.",
      "In the area of Production Planning and Execution , in the role Production",
      "Manager, use the Maintain PIRs app.",
      "Initial Screen",
      "When you first open the app, you receive a welcome message informing you",
      "that you should select an area of responsibility. If you confirm this with ,",
      "another My Area of Responsibility app appears.",
      "No plant is currently assigned to you. Select the plant in Munich by",
      "entering MU10 as the plant  and your three -digit number ### as the MRP",
      "controller and clicking .",
      "MU10",
      "###",
      "Then set the status to green.",
      "Green",
      "-- PAGE_BREAK ---",
      "The values are saved automatically here. Go to the ERP Fiori launchpad",
      "and open the Maintain PIRs app again.",
      "In the search, enter both XM10### and XM20### as the material and",
      "MU10 as the plant. Make sure that Version Active is N/A. Click ."
    ],
    "fields": [
      {
        "label": "Product Group",
        "value": "PG-AV###",
        "name": "pg_id",
        "required": true
      },
      {
        "label": "Plant",
        "value": "MU10",
        "name": "plant",
        "required": true
      },
      {
        "label": "Month 1 Forecast",
        "value": "220",
        "name": "m1_fc",
        "required": true
      },
      {
        "label": "Month 2 Forecast",
        "value": "140",
        "name": "m2_fc",
        "required": true
      },
      {
        "label": "Month 3 Forecast",
        "value": "160",
        "name": "m3_fc",
        "required": true
      }
    ]
  },
  {
    "number": 11,
    "title": "Display Planned Independent Requirements",
    "role": "Plant Manager",
    "time": "5 min",
    "app": "Display PIRs",
    "module": "pp_setup",
    "module_name": "Production Planning Setup",
    "instructions": [
      "Step 11: Display Planned Independent Requirements",
      "are production requirements for the respective components.",
      "To display demand management, use the Display PIRs app in the Plant",
      "Manager role in the Production Planning and Execution area.",
      "Initial Screen",
      "In the Planned Independent Requirements area, select Product Group and add",
      "your product group PG-GC###. Then specify the plant MU10.",
      "PG-GC###",
      "MU10",
      "Click . The system displays an overview of the independent",
      "requirements for the individual products in the product group.",
      "-- PAGE_BREAK ---",
      "You see the previously created planned independent requirements for your",
      "product group.",
      "Use the navigation buttons  and  to also display values in the hidden",
      "view area.",
      "Click  to return to the ERP Fiori launchpad.",
      "-- PAGE_BREAK ---"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 12,
    "title": "Supplement Production Version in Material Master",
    "role": "Production Manager",
    "time": "5 min",
    "app": "Schedule Mass Creation of Production Version",
    "module": "pp_setup",
    "module_name": "Production Planning Setup",
    "instructions": [
      "Step 12: Supplement Production Version in Material Master",
      "Record",
      "following step, it is necessary for the determination of the dependent",
      "requirements that all materials are equipped with a production version. As of",
      "ERP ERP 2020, a production version is  mandatory for the BOM",
      "explosion. However, it is not possible to create a production version for each",
      "material using the Manage Product Master Data app.",
      "To set up a background process for creating the required function versions,",
      "use the Schedule Mass Creation of Production Version app in the Production",
      "Planning and Execution area in the Production Manager  role.",
      "Initial Screen",
      "Note If the app is not displayed, search for it using the search bar .",
      "On the Application Jobs screen, click .",
      "On the New Job: Mass Creation of Production Versions screen, click .",
      "Make sure that Start Immediately is selected for Scheduling Options. Click",
      ".",
      "-- PAGE_BREAK ---",
      "Enter material XM10### and plant MU10 as parameters for the material",
      "restriction.",
      "XM10###",
      "MU10",
      "Click .",
      "Back on the Application Jobs screen, you can see that your job is now in",
      "progress.",
      "Refresh the view. You will notice that your job is now finished."
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 13,
    "title": "Perform Material Requirements Planning",
    "role": "Production Manager",
    "time": "15 min",
    "app": "",
    "module": "mrp",
    "module_name": "Material Requirements Planning (MRP)",
    "instructions": [
      "Step 13: Perform Material Requirements Planning",
      "orders that meet the requirements of sales and operations planning and demand",
      "management. If necessary, MRP also creates planned orders for dependent",
      "requirements that are determined by the BOM explosion.",
      "To perform material requirements planning, use the app Schedule MRP Run -",
      "Run MPS with MRP in the Production Planning and Execution area in the role",
      "Production Manager.",
      "Initial Screen",
      "Note If the app is not displayed, search for it using the search bar .",
      "Enter PG-GC### as the material and MU10 as the plant. Select Product",
      "Group.",
      "PG-GC###",
      "MU10",
      "Product Group",
      "The MRP control parameters  can be adopted and should be filled by the",
      "system as follows:",
      "Processing key: NETCH (net change in total horizon)",
      "Create purchase requisition: 2 (purchase requisition in opening period)",
      "Scheduling agreement schedule line: 3 (Basically scheduling agreement",
      "delivery schedule lines)",
      "Create MRP list: 1 (basic MRP list)",
      "Planning Mode: 1 (Adapt Planning Data (Normal Mode))",
      "Scheduling: 1 (Determination of basic dates for planned orders)",
      "NETCH",
      "2"
    ],
    "fields": [
      {
        "label": "Material / Product Group",
        "value": "PG-AV###",
        "name": "target",
        "required": true
      },
      {
        "label": "Plant",
        "value": "MU10",
        "name": "plant",
        "required": true
      },
      {
        "label": "MRP Control Parameters",
        "value": "NETCH",
        "name": "mrp_param",
        "required": true
      }
    ]
  },
  {
    "number": 14,
    "title": "Display Stock/Requirements List",
    "role": "Shop Floor Worker",
    "time": "10 min",
    "app": "",
    "module": "mrp",
    "module_name": "Material Requirements Planning (MRP)",
    "instructions": [
      "Step 14: Display Stock/Requirements List",
      "The stock/requirements list is a dynamic list that displays the existing stock in",
      "the warehouses of a plant and incoming requirements of a material combined.",
      "Scenario",
      "To display the stock/requirements list, use the Monitor Stock/Requirements",
      "List app in the Production Planning and Execution  area in the Shop Floor",
      "Worker role.",
      "Initial Screen",
      "On the Individual access tab page, enter your material XM10### and plant",
      "MU10.",
      "XM10###",
      "MU10",
      "Choose  to display the corresponding stock/requirements list.",
      "-- PAGE_BREAK ---",
      "You can see the current available quantity in stock, as well as all requirements",
      "and planned orders determined by MRP to cover the requirements.",
      "The system currently lists all entries as individual lines. Choose  to group",
      "the entries into period totals. This enables you to see the planned independent",
      "requirements, planned receipts, and ATP quantities totaled by days, weeks, or",
      "months, depending on which tab is selected.",
      "Choose  to return to the individual display.",
      "To see the details of the first planned order (PldOrd), choose  at the",
      "beginning of the row. A popup opens.",
      "Choose  to display the pegged requirement.",
      "-- PAGE_BREAK ---"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 15,
    "title": "Convert Planned Orders to Purchase Requisition",
    "role": "Plant Manager",
    "time": "5 min",
    "app": "",
    "module": "mrp",
    "module_name": "Material Requirements Planning (MRP)",
    "instructions": [
      "Step 15: Convert Planned Orders to Purchase Requisition",
      "planned orders for components of the integrated GPS ride computer into",
      "purchase requisitions (PReqs) and transfer them to Materials Management, it",
      "is necessary to convert these planned orders.",
      "The differently scheduled planned orders are converted to a uniform date to",
      "simplify the procurement process and to take advantag e of potential benefits",
      "such as volume discounts or reduced shipping costs. Therefore, the date for all",
      "purchase requisitions should be set to one week from today.",
      "To convert the planned orders into purchase requisitions, use the Convert",
      "Planned Orders \u2013 to Purchase Requisitions app in the Plant Manage  role in",
      "the area of Production Planning and Execution.",
      "Initial Screen",
      "Note If the app is not displayed, search for it using the search bar .",
      "In the Collective Conversion of Planned Orders to Pur. Req.: Initial Screen",
      "view, enter MU10 as the plant and IDGC1### as the material. In addition,",
      "select the Material field. Click .",
      "MU10",
      "IDGC1###",
      "Material",
      "In the following view, all planned orders for your material are displayed.",
      "Select all of them using .",
      "-- PAGE_BREAK ---",
      "Then choose Convert Online.",
      "Convert Online",
      "In the following view, adjust the Delivery and Release Date to one week from"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 16,
    "title": "Create Vendor",
    "role": "Contract Manager",
    "time": "15 min",
    "app": "Manage Business Partner Master Data",
    "module": "procurement",
    "module_name": "Procurement Process (MM)",
    "instructions": [
      "Step 16: Create Vendor",
      "To create a new vendor, use the Manage Business Partner Master Data app in",
      "the Materials Management area in the Contract Manager role.",
      "Initial Screen",
      "Vendors are used in both finance and procurement. The master record of a",
      "vendor contains 3 categories \u2013 General Data, Financial Accounting, and",
      "Procurement. Vendors can be created centrally or with shared responsibilities.",
      "During central creation, all views are generated in one step and by one person.",
      "With shared responsibility, finance and procurement create the views that are",
      "relevant for them. In this case study, the vendor is created centrally. This",
      "means that the vendor master record will contain all the information necessary",
      "to carry out business transactions.",
      "On the Manage Business Partner screen, choose  and then",
      "Organization.",
      "Organization",
      "In the Create Organization dialog box, leave the Business Partner field blank.",
      "The system will generate a unique number later. In the BP Role field, click",
      ", then in the Select: BP Role window, select FI Vendor (FLSUPP).",
      "FLSUPP",
      "For the Form of Address  field, select Organization Company and enter 1",
      "AlpineGear Solutions ### as the Name.",
      "Company",
      "AlpineGear Solutions ###",
      "In the Address area, enter Breiterweg 2 in the Street field, 39112 for postal",
      "code, and Munich as the city. Continue to select Germany (DE) as the"
    ],
    "fields": [
      {
        "label": "BP Role",
        "value": "FLSUPP (Supplier)",
        "name": "bp_role",
        "required": true
      },
      {
        "label": "Name",
        "value": "1 AlpineGear Solutions ###",
        "name": "name",
        "required": true
      },
      {
        "label": "City",
        "value": "Stuttgart",
        "name": "city",
        "required": true
      },
      {
        "label": "Company Code",
        "value": "ZN00",
        "name": "company_code",
        "required": true
      },
      {
        "label": "Reconciliation Account",
        "value": "21100999",
        "name": "recon_account",
        "required": true
      }
    ]
  },
  {
    "number": 17,
    "title": "Create RFQ",
    "role": "Inventory Supervisor",
    "time": "10 min",
    "app": "Process Purchase Requisition",
    "module": "procurement",
    "module_name": "Procurement Process (MM)",
    "instructions": [
      "Step 17: Create RFQ",
      "relevant information (such as pricing, delivery, and so on) needed to select the",
      "supplier that best meets your requirements.",
      "To create a request for quotation (RFQ) for your purchase requisition, use the",
      "Process Purchase Requisition app in the Inventory Supervisor role in the area",
      "of Materials Management.",
      "Initial Screen",
      "Click . Add the value group Material and apply the filter with .",
      "Material",
      "In the Material field, enter IDGC1### and click .",
      "IDGC1###",
      "Select all lines with your purchase requisition for material IDGC1### and then",
      "click .",
      "-- PAGE_BREAK ---",
      "Note The number of existing lines is based on material planning. As explained",
      "above, the requirements may be split or combined. Accordingly, a different",
      "number of rows can also be displayed.",
      "Under General Information, enter RFQ as the RFQ type , the submission",
      "deadline in three working days , the RFQ description  IDGC-RFQ###, the",
      "purchasing organization, and  the company code  ZN00. Compare your screen",
      "with the following screenshot.",
      "RFQ",
      "Purchase Quotation",
      "in three working days",
      "IDGC-RFQ###"
    ],
    "fields": [
      {
        "label": "RFQ Type",
        "value": "ZR10",
        "name": "rfq_type",
        "required": true
      },
      {
        "label": "Item Material",
        "value": "ZC10###",
        "name": "material",
        "required": true
      },
      {
        "label": "RFQ Quantity",
        "value": "140",
        "name": "quantity",
        "required": true
      },
      {
        "label": "Plant",
        "value": "MU10",
        "name": "plant",
        "required": true
      }
    ]
  },
  {
    "number": 18,
    "title": "Create Quotation from Supplier",
    "role": "",
    "time": "10 min",
    "app": "Manage RFQs",
    "module": "procurement",
    "module_name": "Procurement Process (MM)",
    "instructions": [
      "Step 18: Create Quotation from Supplier",
      "inquiry, it is necessary to maintain the respective information in our",
      "procurement system in order to create comparability with which we can support",
      "the choice of supplier.",
      "Name (job Inventory Assistant",
      "To maintain the vendor quotations, use the Manage RFQs app in the Inventory",
      "Assistan role in the Materials Management area.",
      "Initial Screen",
      "Click   . Add the value group RFQ Description and apply the filter",
      "with .",
      "RFQ Description",
      "For the RFQ Description field, enter IDGC-RFQ###. Start the search by",
      "clicking on .",
      "IDGC-RFQ###",
      "Click on your request for quotation.",
      "Go to the Bidders area. Select the entry of your supplier AlpineGear Solutions ###",
      "and click .",
      "-- PAGE_BREAK ---",
      "Enter quotation submission date  today and follow -on document type NB",
      "(standard purchase order).",
      "today",
      "NB",
      "Note The quotation submission date must not be later than the quotation",
      "deadline. You can find the submission deadline under General Information  in",
      "the RFQ area."
    ],
    "fields": [
      {
        "label": "Reference RFQ ID",
        "value": "",
        "name": "ref_rfq",
        "required": true,
        "placeholder": "Enter RFQ ID from Step 17"
      },
      {
        "label": "Supplier",
        "value": "AlpineGear Solutions ###",
        "name": "supplier",
        "required": true
      },
      {
        "label": "Unit Price (EUR)",
        "value": "165",
        "name": "price",
        "required": true
      }
    ]
  },
  {
    "number": 19,
    "title": "Price-Based Bid Evaluation",
    "role": "Inventory Supervisor",
    "time": "10 min",
    "app": "Compare Supplier Quotations",
    "module": "procurement",
    "module_name": "Procurement Process (MM)",
    "instructions": [
      "Step 19: Price-Based Bid Evaluation",
      "the individual vendors. Offer price comparison list ranks offers from lowest to",
      "highest",
      "The successful supplier (AlpineGear Solutions ###) was selected using the",
      "criterion of the best bid. It is now necessary to inform the subordinate",
      "providers about the rejection of their offers. The system stipulates this in the",
      "process because it is defined for these providers that you need to be notified.",
      "Generate a quotation price comparison list from the quotations of the",
      "individual vendors. Offer price comparison list ranks offers from lowest to",
      "highest.",
      "The successful supplier (AlpineGear Solutions ###) was selected using the",
      "criterion of the best bid. It is now necessary to inform the subordinate",
      "providers about the rejection of their offers. The system stipulates this in the",
      "process because it is defined for these providers that you need to be notified.",
      "Scenario",
      "To reject a quotation, use the Compare Supplier Quotations  app in the",
      "Inventory Supervisor role in the area of Materials Management.",
      "Initial Screen",
      "Use the F4 help to search for your RFQ. Enter IDGC-RFQ### as the RFQ",
      "IDGC-RFQ###",
      "-- PAGE_BREAK ---",
      "Select your posting.",
      "Compare the quotations. Select all two quotations and click Compare.",
      "You now get a detailed breakdown of bids submitted per item.",
      "As you can see, for item 00015, the Shell Gear quotation is highlighted in"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 20,
    "title": "Create purchase order with reference to RFQ",
    "role": "",
    "time": "10 min",
    "app": "Manage RFQs",
    "module": "procurement",
    "module_name": "Procurement Process (MM)",
    "instructions": [
      "Step 20: Create purchase order with reference to RFQ",
      "successful supplier. The details are then imported into the new purchase order.",
      "Name (job) Inventory Assistant",
      "To create a purchase order , use the Manage RFQs app in the role Inventory",
      "Assistant in the area of Materials Management.",
      "Initial Screen",
      "For the RFQ Description field, enter IDGC-RFQ###. Start the search by",
      "clicking on .",
      "IDGC-RFQ###",
      "Click on your purchase quotation. Go to the Process Flow area.",
      "-- PAGE_BREAK ---",
      "You see your purchase requisitions, which were bundled in the RFQ, followed",
      "by the two quotations. One of the two quotations has been rejected and you",
      "can see from the comment Cancelled.",
      "Click on the supplier quotation with remark   and then click on the",
      "quotation number.",
      "Create a purchase order from this quotation by clicking",
      "and then Create Purchase Order.",
      "-- PAGE_BREAK ---",
      "On the purchase order screen, switch to the Items area. Check your order of",
      "180 Zenith Integrated Ride Computers there.",
      "Now click  to create your order.",
      "Note A purchase order is a formal request to a vendor to deliver goods or",
      "services in accordance with the purchase order conditions. Several objects can",
      "trigger a purchase order."
    ],
    "fields": [
      {
        "label": "Reference RFQ / Quotation",
        "value": "",
        "name": "ref_quotation",
        "required": true,
        "placeholder": "Enter Quotation ID from Step 18"
      },
      {
        "label": "Order Quantity",
        "value": "140",
        "name": "quantity",
        "required": true
      }
    ]
  },
  {
    "number": 21,
    "title": "Display Purchase Order",
    "role": "Inventory Supervisor",
    "time": "5 min",
    "app": "My Purchasing Document Items - \nProfessional",
    "module": "procurement",
    "module_name": "Procurement Process (MM)",
    "instructions": [
      "Step 21: Display Purchase Order",
      "the system.",
      "To display the purchase order,  in the Materials Management  area, in the",
      "Inventory Supervisor   role, use the  My Purchasing Document Items -",
      "Professional app.",
      "Initial Screen",
      "The app enables you to get an overview of all purchase requisitions, purchase",
      "orders, goods receipts, and supplier invoices.",
      "In the Supplier field, enter or search for your supplier AlpineGear Solutions ###",
      "using the input help and choose .",
      "AlpineGear Solutions ###",
      "Click .",
      "-- PAGE_BREAK ---",
      "You can see that the Next Delivery Quantity is 180 pcs Integrated GPS Bike",
      "Computers.",
      "Click  to return to the ERP Fiori launchpad.",
      "-- PAGE_BREAK ---"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 22,
    "title": "Post Goods Receipt for Purchase Order",
    "role": "Goods Receipt Clerk",
    "time": "10 min",
    "app": "Post Goods Receipt for  Purchasing \nDocument",
    "module": "procurement",
    "module_name": "Procurement Process (MM)",
    "instructions": [
      "Step 22: Post Goods Receipt for Purchase Order",
      "### in your stock in the previous step. A goods receipt posting is created that",
      "refers to your purchase order. The stock is increased and a financial document",
      "is created that correctly posts the value of the goods.",
      "To post the goods receipt, use the Post Goods Receipt for  Purchasing",
      "Document app in the area Materials Management in the role Goods Receipt",
      "Clerk.",
      "Initial Screen",
      "Enter your purchasing document number  in the Purchasing Document",
      "field.",
      "Purchasing Document",
      "Number",
      "If you want to search for your purchasing document number, use the F4 help.",
      "In the search field, enter IDGC1###  and then click",
      ".",
      "IDGC1###",
      "Then select the first of your purchase orders by double-clicking them.",
      "First of your orders",
      "You now see your purchase order.",
      "-- PAGE_BREAK ---",
      "When goods are delivered for a purchase order, you document a goods receipt",
      "with reference to the purchase order. The system  checks the purchase order",
      "and copies only the open purchase order items to the goods receipt transaction.",
      "During goods receipt with reference to a purchase order, the system checks",
      "the following:"
    ],
    "fields": [
      {
        "label": "Reference Purchase Order",
        "value": "",
        "name": "ref_po",
        "required": true,
        "placeholder": "Enter PO ID from Step 20"
      },
      {
        "label": "Movement Type",
        "value": "MT10 (Goods Receipt for PO)",
        "name": "movement",
        "required": true
      }
    ]
  },
  {
    "number": 23,
    "title": "Check received goods",
    "role": "",
    "time": "10 min",
    "app": "Stock - Single Material",
    "module": "procurement",
    "module_name": "Procurement Process (MM)",
    "instructions": [
      "Step 23: Check received goods",
      "quality. The goods are transferred to unrestricted-use stock.",
      "Name (job) Warehouse Supervisor",
      "To display the stock, use the Stock - Single Material app in the area Materials",
      "Management in the role Warehouse Supervisor.",
      "Initial Screen",
      "If it is not already selected, enter your material IDGC1###. A list is displayed.",
      "Click on your material IDGC1###.",
      "IDGC1###.",
      "In the previous step, you posted the received goods for quality inspection. Here",
      "you can see the 180 units in the quality inspection stock.",
      "You can only take goods from unrestricted -use stock for consumption.",
      "Therefore, you must transfer the goods.",
      "Note In reality, you would check whether the correct goods and quantity were",
      "delivered before you post them to unrestricted-use stock.",
      "Select the line of the storage location Raw Materials in the plant Munich",
      "and click .",
      "-- PAGE_BREAK ---",
      "In the Stock in Quality Inspection column, click  next to the 180 units. The",
      "icon under Unrestricted-Use Stock is now clickable. Click .",
      "In the Transfer Stock \u2013 In-Plant window, increase the quantity to 180.",
      "180",
      "Click . You receive a success message.",
      "The material has been transferred. Close the window.",
      "-- PAGE_BREAK ---"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 24,
    "title": "Check physical goods receipt",
    "role": "Goods Receipt Clerk",
    "time": "5 min",
    "app": "",
    "module": "procurement",
    "module_name": "Procurement Process (MM)",
    "instructions": [
      "Step 24: Check physical goods receipt",
      "overview gives you an overview of the stocks of a material across all",
      "organizational levels.",
      "To check the warehouse stock of a material in the sales order, use in the area",
      "Materials Management in the role Goods Receipt Clerk , the Manage Stock",
      "app.",
      "Initial Screen",
      "In the dropdown menu, select the plant in Plant Munich (MU10). To find",
      "the material number from your Zenith Integrated Ride Computer s, click in the",
      "Material field and then click the value help icon .",
      "MU10",
      "In the Search field, enter *### (for example, if your number is 002, enter",
      "*002).",
      "Click  to view the list of materials. Extend the Material Description field.",
      "Scoll down until you find your material IDGC1###.",
      "IDGC1###",
      "Double click on it. The report shows you the storage level for the plant in",
      "Munich.",
      "-- PAGE_BREAK ---",
      "You can find out more details about the stock of the Integrated GPS Bike",
      "Computer. To do so, click . This will give you detailed",
      "information about the stock of the ride computer in the various plants.",
      "Click on the following icon  to see detailed information about the stock of",
      "the GPS ride computer in Munich.",
      "On the following screen, you can see a graphical overview."
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 25,
    "title": "Create and Post Supplier Invoice",
    "role": "Accounts Payable Accountant",
    "time": "10 min",
    "app": "Create Supplier  Invoice",
    "module": "procurement",
    "module_name": "Procurement Process (MM)",
    "instructions": [
      "Step 25: Create and Post Supplier Invoice",
      "current purchase order and the received goods. This invoice is assigned to an",
      "existing expense account in the general ledger of your chart of accounts and",
      "saved as a payable to AlpineGear Solutions ###.",
      "To create a supplier invoice , use the Create Supplier  Invoice app in the",
      "Materials Management area in the Accounts Payable Accountant  role.",
      "Initial Screen",
      "On the Create Supplier Invoice screen, enter today\u2019s date as the invoice date",
      "by pressing F4 and then Enter. Enter your company code ZN00. Now enter",
      "ZI10VOICE.IDGC1### as the reference.",
      "Today's date",
      "ZN00",
      "ZI10VOIC.IDGC1###",
      "Choose the Purchasing Document References section.",
      "Now enter (or search for) your purchase order number  in the Purchase",
      "Order/Scheduling Agreement field. Then press Enter.",
      "Your purchase order",
      "number",
      "Make sure that V1 is entered as the tax code.",
      "V1",
      "-- PAGE_BREAK ---",
      "Your invoicing party and the balance have updated with the invoice items.",
      "Enter the amount of the invoice EUR 23,562.00 (EUR 19,800.00  plus Taxes)",
      "in the Gross Amount field",
      "Click ."
    ],
    "fields": [
      {
        "label": "Invoice Date",
        "value": "Today's Date",
        "name": "inv_date",
        "required": true
      },
      {
        "label": "Reference Purchase Order",
        "value": "",
        "name": "ref_po",
        "required": true,
        "placeholder": "Enter PO ID from Step 20"
      },
      {
        "label": "Amount (EUR)",
        "value": "19800",
        "name": "amount",
        "required": true
      }
    ]
  },
  {
    "number": 26,
    "title": "Display Purchase Order History",
    "role": "",
    "time": "10 min",
    "app": "",
    "module": "procurement",
    "module_name": "Procurement Process (MM)",
    "instructions": [
      "Step 26: Display Purchase Order History",
      "of the first operation that was carried out for your purchase order number, the",
      "Purchase Order Processing tab page is now available in the purchase order.",
      "Name (job) of in-force business manager",
      "To display the purchase order history,  in the Materials Management area, in",
      "the Inventory Supervisor role, use  the My Purchasing Document Items -",
      "Professional app.",
      "Initial Screen",
      "The app provides you with an overview of all purchase requisitions, purchase",
      "orders, goods receipts, and supplier invoices.",
      "In the Supplier field, enter the number of your supplier AlpineGear Solutions",
      "###. Choose .",
      "AlpineGear Solutions ###",
      "Then click the  tab.",
      "In the Purchase Order Items area, choose  and select the Delivered Amount",
      "column in the Display Settings dialog box.",
      "-- PAGE_BREAK ---",
      "Click .",
      "As you can see, the purchase order was delivered with several items in the",
      "amount of a delivery value of 19,800 EUR.",
      "Now click on the tab . You can see the supplied bike",
      "computers there. You see the material document with multiple items created",
      "in the system when you confirmed the goods receipt.",
      "On the Supplier Invoice  tab page, you can see further activities that were",
      "carried out with reference to your purchase order. Click ."
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 27,
    "title": "Display Document Flow",
    "role": "",
    "time": "5 min",
    "app": "Material Documents Overview",
    "module": "procurement",
    "module_name": "Procurement Process (MM)",
    "instructions": [
      "Step 27: Display Document Flow",
      "material.",
      "Name (job) Inventory Supervisor",
      "Check the goods receipt document and the document flow of your material.",
      "Scenario",
      "To display the document history, use the Material Documents Overview app",
      "in the Inventory Supervisor role in the Materials Management area.",
      "Initial Screen",
      "The app provides an overview of material documents. You can find your",
      "purchase order by using the assigned number. To do this, enter your material",
      "number IDGC1### in the Material field. If you do n ot see the search fields,",
      "click  to expand the search fields.",
      "IDGC1###",
      "After entering the search term, click . Then click Settings . In the view",
      "settings, activate the Stock Type (Stock Transfer) column. Confirm with",
      ".",
      "Stock Type (Stock",
      "Transfer).",
      "-- PAGE_BREAK ---",
      "A new material document is created for each material movement. You see the",
      "material documents with your material IDGC1###.",
      "On the one hand, the documents for the goods receipt for each item into stock",
      "in quality inspection. You can also see a document tha t was generated by the",
      "transfer posting of the material to unrestricted-use stock.",
      "Identify the line with the stock type (Stock Transfer): Unrestricted-Use Stock"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 28,
    "title": "Post Outgoing Payment",
    "role": "Accounts Payable Accountant",
    "time": "10 min",
    "app": "Post Outgoing Payments",
    "module": "procurement",
    "module_name": "Procurement Process (MM)",
    "instructions": [
      "Step 28: Post Outgoing Payment",
      "your liabilities. Note that the total amount matches your invoice. The created",
      "posting will clear the payable and debit your bank account.",
      "To post the payment to a supplier, use the Post Outgoing Payments app in the",
      "Materials Management area in the Accounts Payable Accountant role.",
      "Initial Screen",
      "On the Post Outgoing Payments  screen, choose Zenith Electro-Mobilitys Germany",
      "(ZN00) as the company code, the current date as the posting date and journal",
      "entry date, ZI10VOICE.IDGC###  as the reference, and the current period.",
      "For G/L account, enter 18100999 (Bank 1) and the amount EUR 23,562.00.",
      "ZN00",
      "current date",
      "ZI10VOICE.IDGC###",
      "Current Period",
      "18100999",
      "EUR 7,140.00.",
      "Ensure that the journal entry type KZ (Vendor Payment) is selected. Check",
      "your entries using the following screenshot.",
      "KZ (Vendor Payment)",
      "Under Open Item Selection, enter your vendor number for AlpineGear Solutions",
      "### as the account (use the F4 help if necessary).",
      "AlpineGear Solutions ###",
      "Click .",
      "On the upper right, you can see that the open balance is USD 23,562.00.",
      "On the Open Items tab page, you see the invoice for the delivery."
    ],
    "fields": [
      {
        "label": "Bank Account",
        "value": "18100999",
        "name": "bank_acc",
        "required": true
      },
      {
        "label": "Supplier (Vendor)",
        "value": "AlpineGear Solutions ###",
        "name": "supplier",
        "required": true
      },
      {
        "label": "Amount Paid (EUR)",
        "value": "19800",
        "name": "amount",
        "required": true
      }
    ]
  },
  {
    "number": 29,
    "title": "Display Vendor Balance",
    "role": "Head of Accounting",
    "time": "5 min",
    "app": "Display Supplier Balances",
    "module": "procurement",
    "module_name": "Procurement Process (MM)",
    "instructions": [
      "Step 29: Display Vendor Balance",
      "your supplier AlpineGear Solutions ###. You should see a debit and a credit",
      "posting generated by  the invoice and the issuance of a payment to pay the",
      "payables to AlpineGear Solutions ###.",
      "To display the balances of a supplier, you use the Display Supplier Balances",
      "app in the Materials Management area in the Head of Accounting role.",
      "Initial Screen",
      "Use the in the Supplier field to find the number of your vendor. In the",
      "Search Term field, enter your number ### and in the City field, enter",
      "Munich. Press .",
      "###",
      "Select your supplier AlpineGear Solutions ###.",
      "Confirm with . Back on the Display Supplier Balances screen, choose",
      "ZN00 as the company code and the current year as the fiscal year.",
      "ZN00",
      "Current Year",
      "-- PAGE_BREAK ---",
      "Then display the balances by choosing . You get a similar overview.",
      "Click  to return to the ERP Fiori launchpad.",
      "-- PAGE_BREAK ---"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 30,
    "title": "Display Purchase Order History",
    "role": "",
    "time": "5 min",
    "app": "",
    "module": "procurement",
    "module_name": "Procurement Process (MM)",
    "instructions": [
      "Step 30: Display Purchase Order History",
      "Purchase Order History tab page was updated by further postings.",
      "Name (job) Inventory Supervisor",
      "To display the purchase order history, in the Materials Management area, in",
      "the Inventory Supervisor  role, use  the My Purchasing Document Items -",
      "Professional app.",
      "Initial Screen",
      "The app provides you with an overview of all purchase requisitions, purchase",
      "orders, goods receipts, and supplier invoices.",
      "In the Supplier field, enter the number of your supplier AlpineGear Solutions ###",
      "and choose .",
      "AlpineGear Solutions ###",
      "Click .",
      "You may need to scroll down to see your supplier and purchase order.",
      "-- PAGE_BREAK ---",
      "As you can see, no open quantities are displayed under Next Delivery",
      "Quantity.",
      "Click . There, you can see the delivered ride computers",
      "divided by item.",
      "In the Supplier Invoice overview, you can see further activities that have been",
      "performed with reference to your purchase order.",
      "Click . The invoice has been created and has the status",
      "Posted as a result of the payment.",
      "-- PAGE_BREAK ---",
      "To display more information about the documents, you can click on the"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 31,
    "title": "Display Balance List and Line Item List",
    "role": "Head of Accounting",
    "time": "5 min",
    "app": "",
    "module": "procurement",
    "module_name": "Procurement Process (MM)",
    "instructions": [
      "Step 31: Display Balance List and Line Item List",
      "balances for some accounts in your general ledger.",
      "Use G/L account numbers to display the activities and related balances for",
      "some accounts in your general ledger.",
      "Scenario",
      "To display the balance and line item list, use the Balance Sheet/Income",
      "Statement app the Materials Management area in the Head of Accounting role.",
      "Initial Screen",
      "On the Balance Sheet  screen, enter ZN00 (Zenith Electro-Mobilitys Germany) for the",
      "company code, 0L for the ledger, and G### for the statement version. Make",
      "sure that the statement type is Normal (Actual - Actual) and the End Period",
      "is Current Period/Year  and Comparison Period  01/2016. Compare your",
      "screen with the following screenshot.",
      "ZN00",
      "0L",
      "G###",
      "Normal (Actual - Actual)",
      "Current Period/Year",
      "1/2016",
      "Choose . In the view, you can see all items of the accounts of Zenith Electro-Mobilitys",
      "in Germany. Expand Assets and the Intangible Assets item below.",
      "-- PAGE_BREAK ---",
      "Note Since all participants in your course book to the same bank account, the",
      "number you see next to the bank account 18100999 used is different.",
      "Note The procurement process of the ride computers is completed at this"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 32,
    "title": "Create Routing XM30### (from template)",
    "role": "Production Manager",
    "time": "15 min",
    "app": "Create Routing",
    "module": "production",
    "module_name": "Production Execution (PP)",
    "instructions": [
      "Step 32: Create Routing XM30### (from template)",
      "XM30###. Copy your material XM20###.",
      "To create the routing, use the Create Routing app in the Production Planning",
      "and Execution area in the Production Manager role.",
      "Initial Screen",
      "On the Create Routing: Initial  Screen, enter material XM30### and plant",
      "MU10.",
      "XM30###",
      "MU10",
      "Choose .",
      "In the dialog box that appears, select Routing and choose .",
      "Routing",
      "In the Template Selection dialog box, enter the mountain bike XM20### as",
      "the material and enter MU10 as the plant.",
      "XM20###",
      "MU10",
      "-- PAGE_BREAK ---",
      "Click .",
      "On the Create Routing: Header  Data Check screen, use the F4 help for the",
      "Overall Status field and select 4 (Released (General)).",
      "4 (Released (general))",
      "Press Enter.",
      "-- PAGE_BREAK ---",
      "Choose  to display a list of all components. If the button is not displayed",
      "directly in the top bar, you can find the entry in the pull-down menu under"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 33,
    "title": "Create Production Version",
    "role": "Production Manager",
    "time": "5 min",
    "app": "Schedule Mass \nCreation of Production Version",
    "module": "production",
    "module_name": "Production Execution (PP)",
    "instructions": [
      "Step 33: Create Production Version",
      "orders for the production planning process, the view of work scheduling must",
      "be added to the material master and the production version must be set. In this",
      "step, generate the production version.",
      "Note The production version has already been generated for materials",
      "XM10### and XM20### by dispatching the production version in step 12.",
      "A production version was automatically created and inserted into the",
      "corresponding views of the material master.",
      "However, since the MRP run (step 13) for material XM30### should be",
      "simplified, the production version of this material is only added manually at",
      "this point in an alternative way. You could also use the Schedule Mass",
      "Creation of Production Version app again.",
      "To enter the production version in the material master, use the Manage",
      "Production Versions - C223 app in the Production Planning and Execution",
      "area in the Production Manager   role.",
      "Initial Screen",
      "Note If the app is not displayed, search for it using the search bar .",
      "Note A production version determines which BOM and routing are used to",
      "produce an article. It is important when converting planned orders into",
      "production orders because it enables a precise selection of manufacturing",
      "processes.",
      "In the Production Version: M ass Processing view, enter MU10 as the plant",
      "and XM30### as the material. Press Enter.",
      "MU10",
      "XM30###"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 34,
    "title": "Display Material",
    "role": "Production Manager",
    "time": "5 min",
    "app": "Display Material",
    "module": "production",
    "module_name": "Production Execution (PP)",
    "instructions": [
      "Step 34: Display Material",
      "whether the previously generated production version was added automatically.",
      "To display the material, use the Display Material  app in the Materials",
      "Management area in the Warehouse Employee role.",
      "Initial Screen",
      "Note If the app is not displayed, search for it using the search bar .",
      "In the Display Material (Initial Screen) view, for material enter XM30###.",
      "Click .",
      "XM30###",
      "Select the MRP 4 and Work Scheduling views. Confirm with .",
      "MRP 4 Work scheduling",
      "-- PAGE_BREAK ---",
      "In the Organizational Levels dialog box, enter MU10 as the plant and choose",
      "Enter.",
      "MU10",
      "In the Work Scheduling  view and the MRP 4  view, check that the production",
      "version is set.",
      "Click . Compare the entries in the dialog box that",
      "appears with the following screenshot.",
      "-- PAGE_BREAK ---",
      "Click  to return to the ERP Fiori launchpad.",
      "-- PAGE_BREAK ---"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 35,
    "title": "Planned Order in Production Order",
    "role": "Shop Floor Worker",
    "time": "15 min",
    "app": "",
    "module": "production",
    "module_name": "Production Execution (PP)",
    "instructions": [
      "Step 35: Planned Order in Production Order",
      "into a production order.",
      "Do not yet use the remaining planned orders.",
      "To convert a planned order to a production order, use the Monitor",
      "Stock/Requirements List app again in the Production Planning and Execution",
      "area in the Shop Floor Worker role.",
      "Initial Screen",
      "On the Individual access tab page, enter your material XM10### and plant",
      "MU10 and choose .",
      "XM10###",
      "MU10",
      "Choose  at the beginning of the line of the planned order that is assigned to",
      "your sales order (the planned order has the same date as the sales order).",
      "-- PAGE_BREAK ---",
      "The system displays a dialog box with the details of the order.",
      "Press  to convert the planned order into a production order.",
      "Accept the upcoming Message with .",
      "The system creates a temporary production order, identified by the generic",
      "order number.",
      "-- PAGE_BREAK ---",
      "The status of your order is REL, SETC, and MACM.",
      "Note Click  for more information about the abbreviations.",
      "You can see that the production order has been released automatically by the",
      "system, a settlement rule has been entered, and the material has already been",
      "checked and commited."
    ],
    "fields": [
      {
        "label": "Planned Order ID",
        "value": "",
        "name": "planned_order",
        "required": true,
        "placeholder": "Enter Planned Order from Requirements List"
      },
      {
        "label": "Material",
        "value": "XM10###",
        "name": "material",
        "required": true
      },
      {
        "label": "Order Quantity",
        "value": "18",
        "name": "quantity",
        "required": true
      }
    ]
  },
  {
    "number": 36,
    "title": "Display Production Order",
    "role": "Shop Floor Worker",
    "time": "10 min",
    "app": "Manage Production Orders",
    "module": "production",
    "module_name": "Production Execution (PP)",
    "instructions": [
      "Step 36: Display Production Order",
      "status.",
      "To display the production order status, use the Manage Production Orders app",
      "in the Production Planning and Execution area in the Shop Floor Worker role.",
      "Initial Screen",
      "When you first open the app, you receive a welcome message informing you",
      "to select an area of responsibility. If you confirm this with , the system",
      "displays another dialog box.",
      "No plant is currently assigned to you.",
      "In the Production Supervisors area, select the Munich plant by setting the",
      "status of the responsibility to green. (set to green).",
      "Navigate to the Work Centers/Resources tab page and activate the",
      "responsibilities in the Munich plant (MU10) for  HD Production",
      "-- PAGE_BREAK ---",
      "(ASSEMBLY), HD Final Control  (ZI10SPECT), and HD Packaging",
      "(PACKZI10G).",
      "Your area of res ponsibility is now maintained. The values are saved",
      "automatically here. Go to the ERP Fiori launchpad  and open the Manage",
      "Production Orders app again.",
      "The system displays an overview of all existing orders. Depending on the",
      "progress of your course, there may be several production orders with different",
      "processing statuses.",
      "In the Material Number field, enter your material XM10### and choose",
      "to display only your order.",
      "XM10###"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 37,
    "title": "Confirm Partial Production Completion",
    "role": "Shop Floor Worker",
    "time": "5 min",
    "app": "Enter Production Order Confirmation",
    "module": "production",
    "module_name": "Production Execution (PP)",
    "instructions": [
      "Step 37: Confirm Partial Production Completion",
      "part of the successfully completed  operations and the quantity of finished",
      "goods already produced can be confirmed.",
      "In the Production Planning and Execution area, in the Shop Floor Worker role,",
      "use the Enter Production Order Confirmation app to report the completion of",
      "a production order.",
      "Initial Screen",
      "Determine your order number. Click in the Order field and choose the value",
      "help icon . In the dialog box for searching for production orders by material",
      "and routing, switch.",
      "Enter your material number XM10### and click  to execute the search.",
      "Select your order and then click .",
      "XM10###",
      "-- PAGE_BREAK ---",
      "Your order number is added to the initial screen. Press  to continue.",
      "A partial confirmation is now carried out on the Enter Confirmation for",
      "Production Order: Actual Data  screen. Change the confirmation type  to",
      "Partial confirmation , deselect Clear Open Reservs. and enter 10 of the",
      "planned quantity to be confirmed as yield quantity.",
      "Partial Confirmation",
      "Deselect clear open",
      "Reservations",
      "10",
      "Press  to save the confirmation.",
      "Note If you receive failed goods movements at this point, you can use the"
    ],
    "fields": [
      {
        "label": "Production Order ID",
        "value": "",
        "name": "prod_order",
        "required": true,
        "placeholder": "Enter Production Order from Step 35"
      },
      {
        "label": "Yield to Confirm",
        "value": "10",
        "name": "yield_qty",
        "required": true
      }
    ]
  },
  {
    "number": 38,
    "title": "Check Production Order",
    "role": "Shop Floor Worker",
    "time": "5 min",
    "app": "Manage Production Orders",
    "module": "production",
    "module_name": "Production Execution (PP)",
    "instructions": [
      "Step 38: Check Production Order",
      "the partial confirmation from production.",
      "To display the production order status, use the Manage Production Orders app",
      "in the Production Planning and Execution area in the Shop Floor Worker role.",
      "Initial Screen",
      "The system displays an overview of all existing orders. Depending on the",
      "progress of your course, there may be several production orders with different",
      "processing statuses.",
      "In the Material Number field, enter your material XM10### and choose",
      "to display only your order.",
      "XM10###",
      "In the table overview, you can see that the current status and the processing",
      "status of the production order have changed.",
      "Select the entry to display the details of the production order.",
      "Now choose the \"Components\" tab page. The screen scrolls to the appropriate",
      "location.",
      "-- PAGE_BREAK ---",
      "The quantities of the components are now two-thirds consumed and one-third",
      "open. The remaining components are consumed when the production quantity",
      "that is still open is produced.",
      "Now choose the Confirmation tab page. The screen scrolls to the appropriate",
      "location.",
      "Here you can see your first confirmation, the confirmation quantity, and that",
      "it is not a final confirmation.",
      "Click  to return to the ERP Fiori launchpad."
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 39,
    "title": "Confirm Complete Production Completion",
    "role": "Shop Floor Worker",
    "time": "5 min",
    "app": "Enter  Production Order Confirmation",
    "module": "production",
    "module_name": "Production Execution (PP)",
    "instructions": [
      "Step 39: Confirm Complete Production Completion",
      "completed. Confirm this by finally confirming your production orders.",
      "In the Production Planning and Execution area, in the Shop Floor Worker role,",
      "use the Enter  Production Order Confirmation app to report the completion of",
      "a production order.",
      "Initial Screen",
      "Determine your order number. Click in the Order field and choose the value",
      "help icon . In the dialog box for searching for production orders for the",
      "material and routing, switch.",
      "Enter your material number XM10### and click  to execute the search.",
      "Select your order and then click .",
      "XM10###",
      "Your order number is added to the initial screen. Press  to continue.",
      "On the Enter Confirmation for Production Order: Actual Data  screen, the",
      "final confirmation is now carried out. Final confirmation should already be",
      "selected as the confirmation type , and Clear Open Reservation should be",
      "selected.",
      "Final Confirmation",
      "The reservations can only be cleared with the final confirmation.",
      "Yield Quantity should be filled with the remaining 5 quantities to be",
      "confirmed.",
      "5",
      "-- PAGE_BREAK ---",
      "Press  to save the confirmation.",
      "Repeat this procedure for your production order of material XM20###."
    ],
    "fields": [
      {
        "label": "Production Order ID",
        "value": "",
        "name": "prod_order",
        "required": true,
        "placeholder": "Enter Production Order from Step 35"
      },
      {
        "label": "Yield to Confirm (Remaining)",
        "value": "8",
        "name": "yield_qty",
        "required": true
      }
    ]
  },
  {
    "number": 40,
    "title": "Check Production Order",
    "role": "Shop Floor Worker",
    "time": "5 min",
    "app": "Manage Production Orders",
    "module": "production",
    "module_name": "Production Execution (PP)",
    "instructions": [
      "Step 40: Check Production Order",
      "the complete confirmation from production.",
      "To display the production order status, use the Manage Production Orders app",
      "in the Production Planning and Execution area in the Shop Floor Worker role.",
      "Initial Screen",
      "The system displays an overview of all existing orders. Depending on the",
      "progress of your course, there may be several production orders with different",
      "processing statuses.",
      "In the Material Number  field, enter your material *### and choose  to",
      "display only your order.",
      "*###",
      "-- PAGE_BREAK ---",
      "In the table overview, you can see that the current status and the processing",
      "status of the production order have changed again.",
      "Select the entry for your XM10### bicycle to display the details of the",
      "production order.",
      "Now choose the \"Components\" tab page. The screen scrolls to the appropriate",
      "location.",
      "The quantities of the components are now completely consumed.",
      "Now choose the Confirmation tab page. The screen scrolls to the appropriate",
      "location.",
      "-- PAGE_BREAK ---",
      "You see your two confirmations without scrap or rework and the second",
      "confirmation is the final confirmation.",
      "Note Your production order is now completely confirmed, but not yet"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 41,
    "title": "Goods Receipt for Production Order",
    "role": "Goods Receipt Clerk",
    "time": "5 min",
    "app": "Post Goods Receipt for Production Order",
    "module": "production",
    "module_name": "Production Execution (PP)",
    "instructions": [
      "Step 41: Goods Receipt for Production Order",
      "confirmed products in your finished  goods warehouse. Check the proposed",
      "quantity with the quantity confirmed in the production order.",
      "To post the goods issue, use the Post Goods Receipt for Production Order app",
      "in the role Goods Receipt Clerk  in the area Production Planning and",
      "Execution.",
      "Initial Screen",
      "Determine your order number. Click the value help icon  in the Production",
      "Order field. Enter your material XM10### and press .",
      "XM10###",
      "Select your production order, the system automatically displays the related",
      "General Information.",
      "-- PAGE_BREAK ---",
      "Make sure that Unrestricted Use is selected as the stock type and FG10 as the",
      "storage location. Select the entry for the material.",
      "FG10",
      "Unrestricted-Use",
      "Save your goods receipt with . The ERP system assigns a unique number",
      "to the goods receipt and issues a corresponding message.",
      "As a result, the current value of the produced material is updated in the",
      "production order. Confirm the message with .",
      "Repeat this step for the production order of material XM20### and",
      "XM30###.",
      "Retry",
      "XM20###"
    ],
    "fields": [
      {
        "label": "Production Order ID",
        "value": "",
        "name": "prod_order",
        "required": true,
        "placeholder": "Enter Production Order"
      },
      {
        "label": "Quantity to Post",
        "value": "18",
        "name": "quantity",
        "required": true
      }
    ]
  },
  {
    "number": 42,
    "title": "Analyze Production Costs",
    "role": "Controller",
    "time": "5 min",
    "app": "Production Cost Analysis",
    "module": "production",
    "module_name": "Production Execution (PP)",
    "instructions": [
      "Step 42: Analyze Production Costs",
      "production order.",
      "To display the costs for a production order, use the Production Cost Analysis",
      "app in the Production Planning and Execution area in the Controller role.",
      "Initial Screen",
      "In the search for Product, enter XM10###  and change the order status from",
      "Open to Closed.",
      "XM10###",
      "Closed",
      "Press  to execute the search. Your just completed production order is",
      "displayed.",
      "Note If you do not see any data, change the default value in your user settings",
      "for the controlling area from NA00 to EU00. Then reload the app and try the",
      "search again.",
      "-- PAGE_BREAK ---",
      "This overview lists the total target and actual costs and displays any variances.",
      "Click  at the end of the row to open the charge details.",
      "Now that the finished products have been received into the warehouse, the",
      "consumption of the values of all manufactured bicycles has been added.",
      "-- PAGE_BREAK ---",
      "Perform the production cost analysis for material XM20### as well.",
      "Click  to return to the ERP Fiori launchpad.",
      "-- PAGE_BREAK ---"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 43,
    "title": "Execute Variance Calculation",
    "role": "Controller",
    "time": "5 min",
    "app": "SPRO",
    "module": "production",
    "module_name": "Production Execution (PP)",
    "instructions": [
      "Step 43: Execute Variance Calculation",
      "or target costs (for example, in production orders or on cost centers) to identify",
      "and analyze differences (variances). This helps companies understand where",
      "costs deviate from expectations. Execute Variance Calculation = Compare the",
      "actual costs with the planned costs to calculate the difference.",
      "To execute variance calculation, use the  SPRO app in the Customizing area.",
      "Enter transaction code /nKKS2. Click Enter.",
      "Initial Screen",
      "Note Transaction KKS2 is used in ERP to calculate variances for orders",
      "(usually production orders or process orders). It serves to determine the",
      "deviations produced during production (e.g. B. cost variances between target",
      "and actual).",
      "On the Variance Calculation: Initial Screen , you can maintain or select an",
      "order. You can either select an existing order from the list and view or edit its",
      "details, or create a new order to record new business transactions. Use the",
      "available filter and search functions t o search specifically for specific orders",
      "and to design your work processes efficiently.",
      "Enter the order number for your material XM10### and enter the current",
      "period and fiscal year. Select All Target Cost Versions.",
      "-- PAGE_BREAK ---",
      "Click 'Execute' and ignore the warning by pressing Enter.",
      "Repeat this procedure for the production order of material XM20###.",
      "Note With this procedure, we have cleared the existing differences in the",
      "system. As a result, both the accounting documents and the document flow are",
      "consistent and correct again. The status of the delivery and invoice have been"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 44,
    "title": "Settle production order",
    "role": "Controller",
    "time": "15 min",
    "app": "Run Actual Settlement",
    "module": "production",
    "module_name": "Production Execution (PP)",
    "instructions": [
      "Step 44: Settle production order",
      "the production order and must now be assigned to a suitable cost object.",
      "Compare the actual costs with the target costs to identify variances or potential",
      "problems in this area.",
      "To settle the costs from a production order, in the Production Planning and",
      "Execution area, in the Controller role, use the Run Actual Settlement app.",
      "Initial Screen",
      "If you need to enter the controlling area, select EU00 and click .",
      "EU00",
      "Click in the Order field and choose the value help icon . Search for your",
      "order using your material XM10### and transfer it with .",
      "XM10###",
      "In the Parameters area, enter the current month (for example, 005 for May)",
      "as the settlement period and posting period, and the current year as the fiscal",
      "year. In addition, make sure that Test Run  is selected.",
      "Current Month Current",
      "Year",
      "Test Run",
      "-- PAGE_BREAK ---",
      "Press  to continue. Choose Enter to confirm any message that may appear.",
      "The Actual Settlement Order Basic List screen appears.",
      "In the process control, you can see that this is only a test run.",
      "Click  to open the detail lists.",
      "To view more reports, press .",
      "A popup opens in which you can choose between several reports. Choose"
    ],
    "fields": [
      {
        "label": "Production Order ID",
        "value": "",
        "name": "prod_order",
        "required": true,
        "placeholder": "Enter Production Order"
      },
      {
        "label": "Settlement Rule",
        "value": "ZS10D (Order)",
        "name": "settle_rule",
        "required": true
      }
    ]
  },
  {
    "number": 45,
    "title": "Display Stock",
    "role": "Sales Representative",
    "time": "5 min",
    "app": "",
    "module": "sd_fulfillment",
    "module_name": "Sales Fulfillment & Settlement",
    "instructions": [
      "Step 45: Display Stock",
      "stock in the delivering plant to fulfill the Alpine Velo ### order. Therefore, you",
      "use the ERP Fiori launchpad to check the material stock.",
      "To check the warehouse stock of a material, use the Stock \u2013 Multiple Materials",
      "app in the Sales and Distribution area in the Sales Representative role.",
      "Initial Screen",
      "This takes you to the default view of the app. Due to the high quantity of",
      "materials, we recommend that you do not search without further restrictions.",
      "Therefore, use the input help symbol  in the Material Number field.",
      "In the dialog box that appe ars, enter *### in the Material field and enter",
      "AV* as the description.",
      "*###",
      "AV*",
      "-- PAGE_BREAK ---",
      "Choose  to generate a results list of all materials that contains \"Commute\"",
      "and whose material key ends with \"###\". Select the Global Basic Sport &",
      "Commute Bike , the Global Endurance Sport Commute Bike  and the",
      "Carbon Global Sport Commute Bike. Click  to apply the selection.",
      "Global Basic Sport &",
      "Commute Bike",
      "Global Endurance Sport",
      "Commute Bike",
      "Carbon Sport Commute",
      "Bike",
      "Back in Stock \u2013 Multiple Materials Overview screen, enter MU10"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 46,
    "title": "Track Sales Order",
    "role": "Sales Representative",
    "time": "10 min",
    "app": "Track Sales  Orders",
    "module": "sd_fulfillment",
    "module_name": "Sales Fulfillment & Settlement",
    "instructions": [
      "Step 46: Track Sales Order",
      "To track a sales order, you use the Track Sales  Orders app in the Sales",
      "Representative role in the Sales area.",
      "Initial Screen",
      "This takes you to the default view of the app. In the Cust. Reference field, enter",
      "your number (###) and press .",
      "###",
      "Your standard order is displayed in the results list. Here, you can already see",
      "initial details such as the net value or the fulfillment status. You can also check",
      "the sold-to party in one of the columns at the bottom.",
      "Click this line. You are navi gated to Track Sales Order Details  View where",
      "you can see all the details.",
      "-- PAGE_BREAK ---",
      "For example, you can see that the processing of the quotation is completely",
      "processed (\"fully referenced\"), but the processing of the forward order is",
      "currently still \"open\". You can also see the requested delivery date of the order",
      "and the planned delivery from the overview.",
      "Click the Items tab. Here you can see a list of the ordered bicycles and the",
      "quantity of billed or already shipped quantity.",
      "-- PAGE_BREAK ---",
      "Go back to the Process Flow tab and click your standard order. The following",
      "context menu opens.",
      "Choose  and in the dialog box that opens, choose Display Sales",
      "Order \u2013 VA03. The related app opens automatically.",
      "-- PAGE_BREAK ---"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 47,
    "title": "Create Outbound Delivery",
    "role": "Warehouse Employee",
    "time": "5 min",
    "app": "Create Outbound Deliveries - From Sales \nOrders",
    "module": "sd_fulfillment",
    "module_name": "Sales Fulfillment & Settlement",
    "instructions": [
      "Step 47: Create Outbound Delivery",
      "Alpine Velo ###, you need to trigger the outbound delivery and create an",
      "outbound delivery document. To do this, you use the ERP Fiori launchpad.",
      "To start the delivery process, use the Create Outbound Deliveries - From Sales",
      "Orders app in the Warehouse Employee role of Sales.",
      "Initial Screen",
      "Shipping processes are triggered by the creation of deliveries. The responsible",
      "organizational unit for creating outbound deliveries is the shipping point. The",
      "shipping point can be a loading ramp, a post office, or a rail freight depot.",
      "Furthermore, the s hipping point can, for example, consist of a group of",
      "employees who are responsible for organizing urgent deliveries.",
      "The app starts with a collapsed header section. Expand it by clicking on .",
      "On the search screen, in the Ship-to Party field, enter your business partner",
      "number (Alpine Velo ###).",
      "Business Partner",
      "Number (Customer)",
      "Note If you have forgotten your BP number, alternatively, click the value help",
      "icon  in the Ship-to Party field. The system displays a dialog box. In the",
      "Name 1  field, enter Alpine* and press .",
      "-- PAGE_BREAK ---",
      "Select your customer and copy the entry with .",
      "In addition, enter MU10 as the shipping point  and remove the Planned",
      "Creation Date. Press  to execute the search. The prepared sales order is",
      "displayed.",
      "Select your sales order and choose the  button. You can see that"
    ],
    "fields": [
      {
        "label": "Shipping Point",
        "value": "MU10",
        "name": "shipping_point",
        "required": true
      },
      {
        "label": "Reference Sales Order ID",
        "value": "",
        "name": "ref_so",
        "required": true,
        "placeholder": "Enter Sales Order from Step 7"
      }
    ]
  },
  {
    "number": 48,
    "title": "Track Sales Order",
    "role": "Sales Representative",
    "time": "5 min",
    "app": "Track Sales  Orders",
    "module": "sd_fulfillment",
    "module_name": "Sales Fulfillment & Settlement",
    "instructions": [
      "Step 48: Track Sales Order",
      "colleagues from the warehouse have already triggered the outbound delivery.",
      "Therefore, you want to find out about the current status of the sales order again",
      "and use the tracking function of the ERP Fiori launchpad again.",
      "To track a sales order, you use the Track Sales  Orders app in the Sales",
      "Representative role in the Sales area.",
      "Initial Screen",
      "This takes you to the default view of the app. In the Cust. Reference field, enter",
      "your number (###) and press .",
      "###",
      "Your standard order is displayed. You can now also see changes to the",
      "previous state. The overall fulfillment  is now Partially Processed  and the",
      "processing of orders is completely processed.",
      "-- PAGE_BREAK ---",
      "Click this line. You are navigated to Track Sales Order Det ails View where",
      "you can see all the details.",
      "In the overview that opens, you can see the completed standard order and the",
      "delivery that is still open. In addition, billing has already been scheduled",
      "automatically by the system. In the header area, the shipping status ( Not",
      "Shipped; Before: Delivery Not Started) and the invoicing status (Not Invoiced,",
      "previously:  Not Relevant for Billing) have also changed.",
      "Click  to return to the ERP Fiori launchpad.",
      "-- PAGE_BREAK ---"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 49,
    "title": "Pick and Goods Issue",
    "role": "Warehouse Employee",
    "time": "5 min",
    "app": "Manage Outbound Deliveries",
    "module": "sd_fulfillment",
    "module_name": "Sales Fulfillment & Settlement",
    "instructions": [
      "Step 49: Pick and Goods Issue",
      "in the correct quantity. When you do this, the outbound delivery document is",
      "changed automatically. The goods issue then changes t he ownership of the",
      "material from Zenith Electro-Mobilitys to Alpine Velo ###.",
      "Use the ERP Fiori launchpad to pick materials and post goods issue.",
      "Picking a material changes the outbound delivery document, whereas the",
      "goods issue then changes the ownership of the material from Zenith Electro-Mobility to",
      "Alpine Velo. To do this, you use the Manage Outbound Deliveries app in the",
      "Warehouse Employee role in Sales and Distribution.",
      "Initial Screen",
      "The app starts with a collapsed header section. Expand it by clicking on . In",
      "the Ship-to Party field, enter your business partner number.",
      "Business Partner",
      "Number",
      "Note If you have forgotten your BP number, proceed as described in the",
      "previous steps.",
      "In addition, select All Open Deliveries as the overall status. To execute the",
      "search, press . Your outbound delivery is now displayed.",
      "All Open Deliveries",
      "You can see that neither picking nor goods issue have been processed so far.",
      "-- PAGE_BREAK ---",
      "Then choose  to start picking. The Pick Outbound Delivery  app opens",
      "automatically. Your outbound delivery is already preselected.",
      "In the Delivery Items  area, enter the appropriate quantities in the Picking",
      "Quantity field: for your XM10### 15, for your XM20### 5, and for"
    ],
    "fields": [
      {
        "label": "Outbound Delivery ID",
        "value": "",
        "name": "ref_delivery",
        "required": true,
        "placeholder": "Enter Delivery ID from Step 47"
      },
      {
        "label": "Picked Quantity (XM10###)",
        "value": "12",
        "name": "pick_xm10",
        "required": true
      },
      {
        "label": "Picked Quantity (XM20###)",
        "value": "6",
        "name": "pick_xm20",
        "required": true
      },
      {
        "label": "Picked Quantity (XM30###)",
        "value": "4",
        "name": "pick_xm30",
        "required": true
      }
    ]
  },
  {
    "number": 50,
    "title": "Display stock",
    "role": "Sales Representative",
    "time": "5 min",
    "app": "",
    "module": "sd_fulfillment",
    "module_name": "Sales Fulfillment & Settlement",
    "instructions": [
      "Step 50: Display stock",
      "warehouse stock. Therefore, you use the ERP Fiori launchpad to recheck the",
      "material stock.",
      "To check the warehouse stock of a material in the sales order for The Bike",
      "Zone, use the Stock \u2013 Multiple Materials app in the Sales and Distribution area",
      "in the Sales Representative role.",
      "Initial Screen",
      "This takes you to the default view of the app. Due to the high quantity of",
      "materials, we recommend that you do not search without further restrictions.",
      "Therefore, use the input help symbol  in the Material Number field.",
      "In the dialog box that appears, enter *### in the Material field and enter",
      "AV* as the description.",
      "*###",
      "AV*",
      "Choose  to generate a results list of all materials that contains AV and",
      "whose material key ends with ###. Select the Global Basic Spor t &",
      "Commute Bike, the Zenith Endurance Pro Bike  and the",
      "Global Basic Sport &",
      "Commute Bike",
      "Global Endurance Sport",
      "& Commute Bike",
      "-- PAGE_BREAK ---",
      "Zenith Elite Carbon Aero Bike . Click  to apply the",
      "selection.",
      "Carbon Global Sport &"
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  },
  {
    "number": 51,
    "title": "Create Customer Invoice",
    "role": "Accounts Receivable Accountant",
    "time": "5 min",
    "app": "Create Billing Documents",
    "module": "sd_fulfillment",
    "module_name": "Sales Fulfillment & Settlement",
    "instructions": [
      "Step 51: Create Customer Invoice",
      "Now an invoice can be created. However, it is not yet sent or posted.",
      "Use the ERP Fiori launchpad to create the invoice for customer Alpine Velo",
      "###",
      "With the complete delivery, an invoice can be created for the customer. To do",
      "this, you use the Create Billing Documents  app in the role Accounts",
      "Receivable Accountant in the area of Sales and Distribution.",
      "Initial Screen",
      "In the Create Billing Documents  view, all billing due list items are",
      "automatically listed. For a better overview, the list is restricted. To do this,",
      "enter your business partner number in the Sold-To Party field.",
      "Business Partner",
      "Number (Customer)",
      "Note If you have forgotten your BP number, proceed as described in the",
      "previous steps.",
      "Apply the new filter, click . Now your SD document is displayed.",
      "Select your SD documents and choose . The system",
      "prepares the customer invoice: the date and sold -to party are copied from the",
      "previous selection.",
      "-- PAGE_BREAK ---",
      "In particular, take a look at the total amount (incl. Tax) and keep it in mind.",
      "Select the Process Flow tab. Here, you can track the pre -executed steps that",
      "are relevant for the customer invoice.",
      "Proceed to the \"Price Elements\" tab page. As a billing clerk, you can see the",
      "discounts granted during quotation creation and how the total price is"
    ],
    "fields": [
      {
        "label": "Reference Outbound Delivery ID",
        "value": "",
        "name": "ref_delivery",
        "required": true,
        "placeholder": "Enter Delivery ID from Step 47"
      }
    ]
  },
  {
    "number": 52,
    "title": "Post Customer Invoice",
    "role": "Accounts Receivable Accountant",
    "time": "5 min",
    "app": "",
    "module": "sd_fulfillment",
    "module_name": "Sales Fulfillment & Settlement",
    "instructions": [
      "Step 53: Post Customer Invoice",
      "the ERP Fiori launchpad to display and post them.",
      "After the invoice has been sent to Alpine Velo, it must now be posted. You can",
      "do this in the area of Sales and Distribution   in the Accounts Receivable",
      "Accountant role using the Manage Billing Documents app.",
      "Initial Screen",
      "In the subsequent Manage Billing Documents window, enter your business",
      "partner number in the Sold-To Party field.",
      "Business Partner",
      "Number",
      "Alternatively, in the Sold-To Party  field, click the value help icon  and",
      "search for your business partner using your number (###), as in the previous",
      "step.",
      "###",
      "Choose  to display your invoice.",
      "Your billing document now has the status \"To Be Posted\".  Select your entry",
      "and choose . This sends the invoice to the customer.",
      "You can then call up the invoice again by clicking on the line. Navigate to the",
      "Process Flow area. You will notice that the invoice is now highlighted in green",
      "instead of red and that a journal entry has already been created.",
      "-- PAGE_BREAK ---",
      "Click  to return to the ERP Fiori launchpad.",
      "-- PAGE_BREAK ---"
    ],
    "fields": [
      {
        "label": "Customer ID",
        "value": "Alpine Velo ###",
        "name": "customer",
        "required": true
      },
      {
        "label": "Invoice Amount (EUR)",
        "value": "64900",
        "name": "amount",
        "required": true
      }
    ]
  },
  {
    "number": 53,
    "title": "Post Incoming Payment",
    "role": "Accounts Receivable Accountant",
    "time": "15 min",
    "app": "Post Incoming Payments",
    "module": "sd_fulfillment",
    "module_name": "Sales Fulfillment & Settlement",
    "instructions": [
      "Step 53: Post Incoming Payment",
      "customer.",
      "You have since received the payment from Alpine Velo ###. For entry, use the",
      "Post Incoming Payments  app in the Accounts Receivable Accountant role in",
      "Sales and Distribution.",
      "Initial Screen",
      "In the General Information area, enter ZN00 (Zenith Electro-Mobilitys Germany) as the",
      "company code . In the Posting Date  and Journal Entry Date  fields, use",
      "(Open Selection) to enter the current date. In the Period field, also select the",
      "current period (for example, 09  for September). Ensure that DZ (Customer",
      "Payment) is selected as the journal entry type.",
      "ZN00",
      "Current date",
      "Current Period",
      "DC",
      "Under Bank Data, select 18100999  (Bank 1)  as the G/L account. In addition,",
      "add EUR 89,592,13  (including 19% tax) as the amount. Under Open Item",
      "Selection, on the other hand, you select Customer as the account type  and",
      "your business partner number in the field directly next to it. Compare your",
      "entries with the following screenshots.",
      "18100999",
      "EUR 89,592,13",
      "Customer",
      "Business Partner",
      "Number"
    ],
    "fields": [
      {
        "label": "Customer ID",
        "value": "Alpine Velo ###",
        "name": "customer",
        "required": true
      },
      {
        "label": "Amount Received (EUR)",
        "value": "64900",
        "name": "amount",
        "required": true
      }
    ]
  },
  {
    "number": 54,
    "title": "Display Document Flow",
    "role": "Sales Representative",
    "time": "15 min",
    "app": "Track Sales  Orders",
    "module": "sd_fulfillment",
    "module_name": "Sales Fulfillment & Settlement",
    "instructions": [
      "Step 54: Display Document Flow",
      "entire order. To do this, you can use the document flow. This tool connects all",
      "documents used in the Alpine Velo ### sales order. There are some ways to",
      "access the document flow tool.",
      "Use the ERP Fiori launchpad to access and analyze the document flow using",
      "a sales order document.",
      "To track a sales order, you use the Track Sales  Orders app in the Sales",
      "Representative role in the Sales area.",
      "Initial Screen",
      "This takes you to the default view of the app. In the Cust. Reference field, enter",
      "your number (###) and press .",
      "###",
      "Your standard order is displayed and you can see that its overall fulfillment is",
      "now Fully Processed . Also note the processing of deliveries , billing, and",
      "accounting.",
      "-- PAGE_BREAK ---",
      "Click this line. You are naviga ted to Track Sales Order Details  View where",
      "you can see all the details. For example, the Fulfillment section displays the",
      "document flow for the sales order. All related documents have been created",
      "and entered completely.",
      "Depending on which document is selected, the content of the right -hand side",
      "of the screen changes. In this way, information about the outbound delivery or",
      "invoice can be viewed directly. When the standard order is fulfilled, the steps",
      "from quotation to inv oice are also represented as a process flow. The",
      "respective documents can also be called from here."
    ],
    "fields": [
      {
        "label": "Click button below to confirm step is completed",
        "value": "Completed",
        "name": "status",
        "required": true,
        "readonly": true
      }
    ]
  }
];