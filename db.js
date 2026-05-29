// ERP Simulator State Manager
const ERPdb = {
  // Default State
  state: {
    studentId: "",
    currentStep: 1,
    completedSteps: [],
    documents: {
      customerId: "",
      customerName: "",
      materialBasic: "",
      materialEndur: "",
      materialCarbon: "",
      materialGps: "",
      salesInquiry: "",
      salesQuotation: "",
      salesOrder: "",
      routingBasic: "",
      productGroup: "",
      pirForecast: "",
      mrpRun: "",
      purchaseRequisition: "",
      vendorId: "",
      vendorRfq: "",
      vendorQuotation: "",
      purchaseOrder: "",
      goodsReceiptPo: "",
      supplierInvoice: "",
      outgoingPayment: "",
      productionOrder: "",
      partialConfirm: "",
      completeConfirm: "",
      goodsReceiptProd: "",
      settlement: "",
      outboundDelivery: "",
      customerInvoice: "",
      incomingPayment: ""
    },
    customState: {} // To store raw form responses
  },

  // Load from localStorage
  load() {
    const saved = localStorage.getItem("ERP_sim_state");
    if (saved) {
      try {
        this.state = JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved state:", e);
      }
    }
  },

  // Save to localStorage
  save() {
    localStorage.setItem("ERP_sim_state", JSON.stringify(this.state));
  },

  // Reset State
  reset() {
    localStorage.removeItem("ERP_sim_state");
    this.state = {
      studentId: "",
      currentStep: 1,
      completedSteps: [],
      documents: {
        customerId: "",
        customerName: "",
        materialBasic: "",
        materialEndur: "",
        materialCarbon: "",
        materialGps: "",
        salesInquiry: "",
        salesQuotation: "",
        salesOrder: "",
        routingBasic: "",
        productGroup: "",
        pirForecast: "",
        mrpRun: "",
        purchaseRequisition: "",
        vendorId: "",
        vendorRfq: "",
        vendorQuotation: "",
        purchaseOrder: "",
        goodsReceiptPo: "",
        supplierInvoice: "",
        outgoingPayment: "",
        productionOrder: "",
        partialConfirm: "",
        completeConfirm: "",
        goodsReceiptProd: "",
        settlement: "",
        outboundDelivery: "",
        customerInvoice: "",
        incomingPayment: ""
      },
      customState: {}
    };
    this.save();
  },

  // Set student ID and update all template IDs
  setStudentId(id) {
    id = id.toString().padStart(3, "0");
    this.state.studentId = id;
    this.save();
  },

  // Complete a step and update mock database details
  completeStep(stepNum, inputs = {}) {
    if (!this.state.completedSteps.includes(stepNum)) {
      this.state.completedSteps.push(stepNum);
    }
    
    // Increment current step if it is the current one
    if (this.state.currentStep === stepNum) {
      this.state.currentStep = stepNum + 1;
    }

    // Save custom input state
    this.state.customState[stepNum] = inputs;

    // Generate mock document numbers and state transfers based on step
    const sId = this.state.studentId || "000";
    const primaryInput = Array.isArray(inputs) ? (inputs[0] || {}) : inputs;
    const count = Array.isArray(inputs) ? inputs.length : 1;
    const suffix = count > 1 ? ` (+${count - 1} entries)` : "";

    if (stepNum === 1) {
      this.state.documents.customerId = "US00" + sId + (count > 1 ? ` (+${count - 1} BP)` : "");
      this.state.documents.customerName = (primaryInput.name || `1 Elbe Cycle ${sId}`) + (count > 1 ? ` (+${count - 1} BPs)` : "");
    } else if (stepNum === 2) {
      this.state.documents.materialBasic = `GCBK1${sId}` + suffix;
      this.state.documents.materialEndur = `GCBK2${sId}` + suffix;
      this.state.documents.materialCarbon = `GCBK3${sId}` + suffix;
    } else if (stepNum === 4) {
      this.state.documents.materialGps = `GPS1${sId}` + suffix;
    } else if (stepNum === 5) {
      this.state.documents.salesInquiry = "100000" + sId + suffix;
    } else if (stepNum === 6) {
      this.state.documents.salesQuotation = "200000" + sId + suffix;
    } else if (stepNum === 7) {
      this.state.documents.salesOrder = "300000" + sId + suffix;
    } else if (stepNum === 8) {
      this.state.documents.routingBasic = `RO-GCBK1-${sId}` + suffix;
    } else if (stepNum === 9) {
      this.state.documents.productGroup = `PG-GCBK${sId}` + suffix;
    } else if (stepNum === 10) {
      this.state.documents.pirForecast = "PIR-" + sId + suffix;
    } else if (stepNum === 13) {
      this.state.documents.mrpRun = "MRP-" + sId + suffix;
    } else if (stepNum === 15) {
      this.state.documents.purchaseRequisition = "10005" + sId + suffix;
    } else if (stepNum === 16) {
      this.state.documents.vendorId = "VN00" + sId + (count > 1 ? ` (+${count - 1} vendors)` : "");
    } else if (stepNum === 17) {
      this.state.documents.vendorRfq = "600000" + sId + suffix;
    } else if (stepNum === 18) {
      this.state.documents.vendorQuotation = "700000" + sId + suffix;
    } else if (stepNum === 20) {
      this.state.documents.purchaseOrder = "450000" + sId + suffix;
    } else if (stepNum === 22) {
      this.state.documents.goodsReceiptPo = "500000" + sId + suffix;
    } else if (stepNum === 25) {
      this.state.documents.supplierInvoice = "900000" + sId + suffix;
    } else if (stepNum === 28) {
      this.state.documents.outgoingPayment = "OP-5000" + sId + suffix;
    } else if (stepNum === 35) {
      this.state.documents.productionOrder = "10000" + sId + suffix;
    } else if (stepNum === 37) {
      this.state.documents.partialConfirm = "PC-10" + sId + suffix;
    } else if (stepNum === 39) {
      this.state.documents.completeConfirm = "CC-10" + sId + suffix;
    } else if (stepNum === 41) {
      this.state.documents.goodsReceiptProd = "510000" + sId + suffix;
    } else if (stepNum === 44) {
      this.state.documents.settlement = "SET-" + sId + suffix;
    } else if (stepNum === 47) {
      this.state.documents.outboundDelivery = "800000" + sId + suffix;
    } else if (stepNum === 51) {
      this.state.documents.customerInvoice = "950000" + sId + suffix;
    } else if (stepNum === 53) {
      this.state.documents.incomingPayment = "IP-8000" + sId + suffix;
    }

    this.save();
  },

  // Export State as JSON
  exportJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `ERP_case_study_progress_${this.state.studentId || "000"}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  },

  // Export State as Excel Sheet (.xlsx) using SheetJS
  exportExcel() {
    if (typeof XLSX === "undefined") {
      alert("SheetJS library not loaded. Make sure you are online to load the SheetJS CDN.");
      return;
    }

    const wb = XLSX.utils.book_new();

    // --- SHEET 1: CONFIGURATION & PROGRESS ---
    const ws1Data = [
      ["ERP ERP Logistics Simulation - Progress Sheet", "", ""],
      [],
      ["Configuration & Metadata", "", ""],
      ["Parameter Name", "Internal Key", "Value"],
      ["Student 3-Digit ID (###)", "studentId", this.state.studentId || "000"],
      ["Current Active Step", "currentStep", String(this.state.currentStep)],
      ["Completed Steps List", "completedSteps", this.state.completedSteps.join(",")]
    ];
    const ws1 = XLSX.utils.aoa_to_sheet(ws1Data);
    
    // Simple styling/column widths
    ws1["!cols"] = [{ wch: 30 }, { wch: 20 }, { wch: 25 }];
    XLSX.utils.book_append_sheet(wb, ws1, "Progress & Config");

    // --- SHEET 2: GENERATED DOCUMENTS ---
    const ws2Data = [
      ["Simulated ERP ERP Document Registry", "", ""],
      [],
      ["Simulated DB Tables (Auto-generated by steps)", "", ""],
      ["Document / Record Name", "System DB Key", "Value Registered"]
    ];

    const docs = this.state.documents;
    const docMap = [
      ["Customer ID", "customerId"],
      ["Customer Name", "customerName"],
      ["Basic Bike ID", "materialBasic"],
      ["Endurance Bike ID", "materialEndur"],
      ["Carbon Bike ID", "materialCarbon"],
      ["GPS Computer ID", "materialGps"],
      ["Sales Inquiry ID", "salesInquiry"],
      ["Sales Quotation ID", "salesQuotation"],
      ["Sales Order ID", "salesOrder"],
      ["Purchase Requisition ID", "purchaseRequisition"],
      ["Vendor ID", "vendorId"],
      ["RFQ Document ID", "vendorRfq"],
      ["Supplier Quotation ID", "vendorQuotation"],
      ["Purchase Order ID", "purchaseOrder"],
      ["Goods Receipt (PO) ID", "goodsReceiptPo"],
      ["Supplier Invoice ID", "supplierInvoice"],
      ["Outgoing Payment ID", "outgoingPayment"],
      ["Production Order ID", "productionOrder"],
      ["Goods Receipt (Prod) ID", "goodsReceiptProd"],
      ["Outbound Delivery ID", "outboundDelivery"],
      ["Customer Invoice ID", "customerInvoice"],
      ["Incoming Payment ID", "incomingPayment"]
    ];

    docMap.forEach(item => {
      ws2Data.push([item[0], item[1], docs[item[1]] || ""]);
    });

    const ws2 = XLSX.utils.aoa_to_sheet(ws2Data);
    ws2["!cols"] = [{ wch: 30 }, { wch: 25 }, { wch: 25 }];
    XLSX.utils.book_append_sheet(wb, ws2, "Generated Documents");

    // --- SHEETS 3+: STEP INPUT LOGS GROUPED BY MODULE ---
    if (typeof ERPSteps !== "undefined") {
      const moduleGroups = {};
      ERPSteps.forEach(step => {
        const modName = step.module_name || "Simulation Inputs";
        if (!moduleGroups[modName]) {
          moduleGroups[modName] = [];
        }
        moduleGroups[modName].push(step);
      });

      Object.keys(moduleGroups).forEach(modName => {
        const stepsInModule = moduleGroups[modName];
        const wsData = [
          [`Detailed Transaction Inputs - ${modName}`, "", "", "", "", ""],
          [],
          ["Step-by-Step Simulated Fiori Form Input Values", "", "", "", "", ""],
          ["Step Number", "Step Title", "Simulated Fiori App", "Form Field Label", "Internal Field Key", "Entered Value"]
        ];

        stepsInModule.forEach(step => {
          const custom = this.state.customState[step.number] || {};
          step.fields.forEach(field => {
            let enteredVal = "";
            if (Array.isArray(custom)) {
              enteredVal = custom.map(row => row[field.name] || "").join(" | ");
            } else {
              enteredVal = custom[field.name] || "";
            }
            wsData.push([
              step.number,
              step.title.replace(/###/g, this.state.studentId || "000"),
              step.app || "Fiori Application",
              field.label,
              field.name,
              enteredVal
            ]);
          });
        });

        const ws = XLSX.utils.aoa_to_sheet(wsData);
        ws["!cols"] = [{ wch: 12 }, { wch: 35 }, { wch: 30 }, { wch: 30 }, { wch: 20 }, { wch: 25 }];
        
        // Excel sheet names must not exceed 31 chars
        const safeSheetName = modName.substring(0, 31);
        XLSX.utils.book_append_sheet(wb, ws, safeSheetName);
      });
    }

    // Save
    XLSX.writeFile(wb, `ERP_case_study_progress_${this.state.studentId || "000"}.xlsx`);
  },

  // Import State from JSON string
  importData(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && typeof parsed === "object" && "currentStep" in parsed) {
        this.state = parsed;
        this.save();
        return true;
      }
    } catch (e) {
      console.error("Failed to import state:", e);
    }
    return false;
  },

  // Import State from Excel file binary data using SheetJS
  importExcel(dataBuffer) {
    if (typeof XLSX === "undefined") {
      alert("SheetJS library not loaded.");
      return false;
    }

    try {
      const data = new Uint8Array(dataBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      
      const newState = {
        studentId: "000",
        currentStep: 1,
        completedSteps: [],
        documents: {},
        customState: {}
      };

      // 1. Parse Progress & Config Sheet
      const ws1 = workbook.Sheets["Progress & Config"];
      if (ws1) {
        const rows = XLSX.utils.sheet_to_json(ws1, { header: 1 });
        if (rows[4] && rows[4][1] === "studentId") newState.studentId = String(rows[4][2] || "000").padStart(3, "0");
        if (rows[5] && rows[5][1] === "currentStep") newState.currentStep = Number(rows[5][2] || 1);
        if (rows[6] && rows[6][1] === "completedSteps") {
          const listStr = String(rows[6][2] || "");
          newState.completedSteps = listStr ? listStr.split(",").map(Number).filter(n => !isNaN(n)) : [];
        }
      }

      // 2. Parse Generated Documents
      const ws2 = workbook.Sheets["Generated Documents"];
      if (ws2) {
        const rows = XLSX.utils.sheet_to_json(ws2, { header: 1 });
        for (let r = 4; r < rows.length; r++) {
          const row = rows[r];
          if (row && row[1]) {
            newState.documents[row[1]] = String(row[2] || "");
          }
        }
      }

      // 3. Parse Step Input Logs from all other sheets
      workbook.SheetNames.forEach(sheetName => {
        if (sheetName === "Progress & Config" || sheetName === "Generated Documents") return;
        
        const ws = workbook.Sheets[sheetName];
        if (ws) {
          const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });
          for (let r = 4; r < rows.length; r++) {
            const row = rows[r];
            if (row && row[0] && row[4]) {
              const stepNum = Number(row[0]);
              const fieldKey = row[4];
              const val = String(row[5] || "");
              
              if (!isNaN(stepNum) && stepNum > 0) {
                if (val.includes(" | ")) {
                  // Multi-entry list
                  const parts = val.split(" | ");
                  if (!Array.isArray(newState.customState[stepNum])) {
                    newState.customState[stepNum] = [];
                  }
                  parts.forEach((partVal, pIdx) => {
                    if (!newState.customState[stepNum][pIdx]) {
                      newState.customState[stepNum][pIdx] = {};
                    }
                    newState.customState[stepNum][pIdx][fieldKey] = partVal;
                  });
                } else {
                  // Check if it's already partly an array because of prior field imports
                  if (Array.isArray(newState.customState[stepNum])) {
                    if (!newState.customState[stepNum][0]) newState.customState[stepNum][0] = {};
                    newState.customState[stepNum][0][fieldKey] = val;
                  } else {
                    if (!newState.customState[stepNum]) newState.customState[stepNum] = {};
                    newState.customState[stepNum][fieldKey] = val;
                  }
                }
              }
            }
          }
        }
      });

      // Apply and save
      this.state = newState;
      this.save();
      return true;
    } catch (e) {
      console.error("Failed to parse Excel progress sheet:", e);
    }
    return false;
  }
};

// Initialize DB
ERPdb.load();

if (typeof module !== 'undefined') {
  module.exports = ERPdb;
}
