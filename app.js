document.addEventListener("DOMContentLoaded", () => {
  // Bind UI Elements
  const studentIdInput = document.getElementById("student-id-input");
  const stepsNav = document.getElementById("steps-nav-container");
  const mainContent = document.getElementById("main-content-panel");
  const btnThemeToggle = document.getElementById("btn-theme-toggle");
  const btnShowDashboard = document.getElementById("btn-show-dashboard");
  const btnExportExcel = document.getElementById("btn-export-excel");
  const btnExportJson = document.getElementById("btn-export-json");
  const btnImportTrigger = document.getElementById("btn-import-trigger");
  const fileImport = document.getElementById("file-import");
  const btnResetData = document.getElementById("btn-reset-data");

  // Local configuration state
  let currentActiveStep = null;

  // Initialize App
  function init() {
    ERPdb.load();
    
    // Load student ID
    if (ERPdb.state.studentId) {
      studentIdInput.value = ERPdb.state.studentId;
    } else {
      ERPdb.state.studentId = "000";
    }

    // Set Theme
    const savedTheme = localStorage.getItem("ERP_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeButtonText(savedTheme);

    // Render navigation and default view (Dashboard)
    renderSidebar();
    renderDashboard();
    
    // Bind Event Listeners
    studentIdInput.addEventListener("input", handleStudentIdChange);
    btnThemeToggle.addEventListener("click", toggleTheme);
    btnShowDashboard.addEventListener("click", () => {
      currentActiveStep = null;
      renderSidebar();
      renderDashboard();
    });
    
    // Export/Import/Reset bindings
    btnExportExcel.addEventListener("click", () => ERPdb.exportExcel());
    btnExportJson.addEventListener("click", () => ERPdb.exportJSON());
    btnImportTrigger.addEventListener("click", () => fileImport.click());
    fileImport.addEventListener("change", handleImportFile);
    btnResetData.addEventListener("click", handleResetData);
  }

  // Toggle Themes
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("ERP_theme", newTheme);
    updateThemeButtonText(newTheme);
  }

  function updateThemeButtonText(theme) {
    if (theme === "dark") {
      btnThemeToggle.innerHTML = `<span class="material-symbols-outlined" style="margin-right: 0;">light_mode</span>`;
    } else {
      btnThemeToggle.innerHTML = `<span class="material-symbols-outlined" style="margin-right: 0;">dark_mode</span>`;
    }
  }

  // Handle Student ID Dynamic updates
  function handleStudentIdChange(e) {
    let val = e.target.value.replace(/\D/g, ""); // numbers only
    if (val.length > 3) val = val.substring(0, 3);
    e.target.value = val;
    ERPdb.setStudentId(val);
    
    // Rerender active screen or dashboard to update template tokens
    if (currentActiveStep) {
      renderStep(currentActiveStep);
    } else {
      renderDashboard();
    }
    renderSidebar();
  }

  // Reset progress confirmation
  function handleResetData() {
    if (confirm("Are you sure you want to reset all progress? This will delete all mock databases and steps completed.")) {
      ERPdb.reset();
      studentIdInput.value = "000";
      currentActiveStep = null;
      renderSidebar();
      renderDashboard();
    }
  }

  // Handle file imports (dynamically parses Excel or JSON based on file extension)
  function handleImportFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const fileName = file.name.toLowerCase();
    
    if (fileName.endsWith(".xlsx") || fileName.endsWith(".xls")) {
      // Excel import
      const reader = new FileReader();
      reader.onload = function(evt) {
        const success = ERPdb.importExcel(evt.target.result);
        if (success) {
          alert("Progress Excel spreadsheet successfully imported and restored!");
          studentIdInput.value = ERPdb.state.studentId;
          renderSidebar();
          renderDashboard();
        } else {
          alert("Failed to parse Excel progress sheet. Please make sure the structure is correct.");
        }
      };
      reader.readAsArrayBuffer(file);
    } else if (fileName.endsWith(".json")) {
      // JSON import
      const reader = new FileReader();
      reader.onload = function(evt) {
        const success = ERPdb.importData(evt.target.result);
        if (success) {
          alert("Progress JSON file successfully imported!");
          studentIdInput.value = ERPdb.state.studentId;
          renderSidebar();
          renderDashboard();
        } else {
          alert("Failed to parse JSON file. Invalid format.");
        }
      };
      reader.readAsText(file);
    } else {
      alert("Unsupported file format! Please upload an Excel sheet (.xlsx, .xls) or JSON file.");
    }
    
    // Clear file input value to allow uploading the same file again
    e.target.value = "";
  }

  // Render Sidebar navigation with module grouping
  function renderSidebar() {
    stepsNav.innerHTML = "";
    
    // Add Dedicated Business Flow Tab
    const flowTab = document.createElement("div");
    flowTab.className = `step-item ${currentActiveStep === 'business-flow' ? 'active' : ''}`;
    flowTab.innerHTML = `
      <div class="step-indicator" style="border-radius: 4px; background: var(--primary);"></div>
      <span>Business Cycles Dashboard</span>
    `;
    flowTab.style.fontWeight = "800";
    flowTab.addEventListener("click", () => {
      currentActiveStep = 'business-flow';
      renderSidebar();
      renderBusinessFlowPage();
    });
    stepsNav.appendChild(flowTab);
    
    // Group steps by module
    const groups = {};
    ERPSteps.forEach(step => {
      if (!groups[step.module]) {
        groups[step.module] = {
          name: step.module_name,
          steps: []
        };
      }
      groups[step.module].steps.push(step);
    });

    Object.keys(groups).forEach(key => {
      const g = groups[key];
      const mGroup = document.createElement("div");
      mGroup.className = "module-group";
      
      const mTitle = document.createElement("div");
      mTitle.className = "module-title";
      mTitle.innerText = g.name;
      mGroup.appendChild(mTitle);
      
      g.steps.forEach(step => {
        const item = document.createElement("div");
        const isCompleted = ERPdb.state.completedSteps.includes(step.number);
        const isActive = currentActiveStep === step.number;
        
        item.className = `step-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`;
        item.innerHTML = `
          <div class="step-indicator"></div>
          <span>Step ${step.number}: ${step.title.replace("###", ERPdb.state.studentId || "000")}</span>
        `;
        
        item.addEventListener("click", () => {
          currentActiveStep = step.number;
          renderSidebar();
          renderStep(step.number);
        });
        
        mGroup.appendChild(item);
      });
      
      stepsNav.appendChild(mGroup);
    });
  }

  // Renders the Consolidated Dashboard
  function renderDashboard() {
    const sId = ERPdb.state.studentId || "000";
    const totalSteps = ERPSteps.length;
    const completedCount = ERPdb.state.completedSteps.length;
    const percentage = Math.round((completedCount / totalSteps) * 100);

    mainContent.innerHTML = `
      <h1 class="welcome-title">ERP Simulator</h1>
      <p style="color: var(--text-muted); margin-bottom: 25px;">Simulate Materials Management (MM), Production Planning (PP), and Sales &amp; Distribution (SD) end-to-end in an integrated ERP environment.</p>
      
      <div class="dashboard-grid">
        
        <!-- Welcome and overall progress card -->
        <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <h2 style="font-size: 1.5rem; margin-bottom: 12px;">Student Progress Overview</h2>
            <div class="progress-header">
              <span style="font-size: 0.9rem; font-weight: 600; color: var(--text-muted);">Step Progress</span>
              <span style="font-size: 1.1rem; font-weight: 700; color: var(--primary);">${completedCount} / ${totalSteps} Steps (${percentage}%)</span>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar-fill" style="width: ${percentage}%;"></div>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 15px;">
              Active Student ID: <strong>### = ${sId}</strong>. All system inputs, customer names, and material IDs are customized to your student ID. Close this browser anytime; progress is automatically saved to your local storage.
            </p>
            
            <!-- Excel Templates Download Section -->
            <div style="background: var(--primary-glow); padding: 18px; border-radius: 16px; border: 1px solid var(--panel-border); margin-top: 15px;">
              <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--primary); display: block; margin-bottom: 8px; letter-spacing: 0.5px;">Excel Offline Templates</span>
              <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                <a href="ERP_template_empty.xlsx" download="ERP_template_empty.xlsx" class="btn-secondary" style="font-size: 0.8rem; padding: 6px 14px;">
                  <span class="material-symbols-outlined" style="font-size: 16px;">download</span>
                  <span>Download Empty Template</span>
                </a>
                <a href="ERP_template_filled.xlsx" download="ERP_template_filled.xlsx" class="btn-secondary" style="font-size: 0.8rem; padding: 6px 14px; color: var(--success); border-color: var(--success);">
                  <span class="material-symbols-outlined" style="font-size: 16px;">task_alt</span>
                  <span>Download Pre-filled Example (ID 045)</span>
                </a>
                <a href="EXCEL_GUIDE.html" target="_blank" class="btn-secondary" style="font-size: 0.8rem; padding: 6px 14px; color: var(--primary); border-color: var(--primary);">
                  <span class="material-symbols-outlined" style="font-size: 16px;">picture_as_pdf</span>
                  <span>How to Use Guide (PDF)</span>
                </a>
              </div>
              <small style="display: block; margin-top: 10px; color: var(--text-muted); font-size: 0.75rem; line-height: 1.4;">
                Students can log inputs offline using these templates, then upload them here using the <strong>Import File</strong> button at the top to restore or review their progress.
              </small>
            </div>
          </div>
          
          <div style="margin-top: 30px;">
            <button class="btn-fiori-primary" id="btn-resume-next" style="padding: 12px 30px; font-size: 1rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
              <span class="material-symbols-outlined">${completedCount === 0 ? 'rocket_launch' : 'play_arrow'}</span>
              <span>${completedCount === 0 ? "Start Step 1" : "Resume Case Study"}</span>
            </button>
          </div>
        </div>

        <!-- Quick Summary statistics -->
        <div class="card">
          <h2 style="font-size: 1.3rem; margin-bottom: 15px;">Modules Summary</h2>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px; font-size: 0.9rem;">
            ${renderModuleSummaryList()}
          </ul>
        </div>
        
        <!-- Hero Card for Business Cycles -->
        <div class="card" style="grid-column: 1 / -1; background: linear-gradient(135deg, var(--dark-grey), var(--dark-grey-panel)); border: 1px solid var(--primary); display: flex; justify-content: space-between; align-items: center; padding: 40px; cursor: pointer; transition: transform 0.3s, box-shadow 0.3s;" id="hero-business-cycles">
          <div>
            <h2 style="color: var(--primary); font-size: 2rem; margin-bottom: 8px; display: flex; align-items: center; gap: 12px;"><span class="material-symbols-outlined" style="font-size: 32px;">account_tree</span> End-to-End Business Flow Explorer</h2>
            <p style="color: var(--text-muted); font-size: 1.1rem;">Interactive visualizer mapping all 54 simulation steps rigorously across MM, PP, and SD.</p>
          </div>
          <div>
             <button class="btn-secondary" style="background: var(--primary); color: #fff; border: none; font-size: 1.1rem; padding: 14px 28px; font-weight: 800;">Launch Explorer</button>
          </div>
        </div>

      </div>

      <!-- Mock ERP Database -->
      <div class="card db-values" style="margin-top: 30px;">
        <div class="db-values-title">
          <span class="material-symbols-outlined" style="color: var(--primary);">storage</span>
          <span>Active Simulated ERP Database State (ID: ${sId})</span>
        </div>
        <div class="db-grid">
          ${renderDatabaseGrid(sId)}
        </div>
      </div>
    `;

    const heroBtn = document.getElementById("hero-business-cycles");
    if (heroBtn) {
      heroBtn.addEventListener("click", () => {
        currentActiveStep = 'business-flow';
        renderSidebar();
        renderBusinessFlowPage();
      });
      heroBtn.addEventListener("mouseenter", () => {
        heroBtn.style.transform = "translateY(-5px)";
        heroBtn.style.boxShadow = "0 20px 45px -15px rgba(92, 131, 116, 0.4)";
      });
      heroBtn.addEventListener("mouseleave", () => {
        heroBtn.style.transform = "translateY(0)";
        heroBtn.style.boxShadow = "none";
      });
    }

    document.getElementById("btn-resume-next").addEventListener("click", () => {
      // Find first incomplete step
      let nextStep = 1;
      for (let i = 1; i <= totalSteps; i++) {
        if (!ERPdb.state.completedSteps.includes(i)) {
          nextStep = i;
          break;
        }
      }
      currentActiveStep = nextStep;
      renderSidebar();
      renderStep(nextStep);
    });
  }

  function renderModuleSummaryList() {
    const modules = {};
    ERPSteps.forEach(s => {
      if (!modules[s.module]) {
        modules[s.module] = { name: s.module_name, count: 0, completed: 0 };
      }
      modules[s.module].count++;
      if (ERPdb.state.completedSteps.includes(s.number)) {
        modules[s.module].completed++;
      }
    });

    return Object.keys(modules).map(key => {
      const m = modules[key];
      const isDone = m.completed === m.count;
      return `
        <li style="display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 1px dashed var(--border);">
          <span style="font-weight: 500; color: ${isDone ? 'var(--success)' : 'var(--text-main)'}">${m.name}</span>
          <span style="font-weight: bold;">${m.completed}/${m.count}</span>
        </li>
      `;
    }).join("");
  }

  function renderDatabaseGrid(sId) {
    const docs = ERPdb.state.documents;
    const dbFields = [
      { label: "Customer ID", val: docs.customerId || "Not Created Yet" },
      { label: "Customer Name", val: docs.customerName || "Not Created Yet" },
      { label: "Basic Bike ID", val: docs.materialBasic || "Not Created Yet" },
      { label: "Endurance Bike ID", val: docs.materialEndur || "Not Created Yet" },
      { label: "Carbon Bike ID", val: docs.materialCarbon || "Not Created Yet" },
      { label: "GPS Computer ID", val: docs.materialGps || "Not Created Yet" },
      { label: "Sales Inquiry ID", val: docs.salesInquiry || "Not Created Yet" },
      { label: "Sales Quotation ID", val: docs.salesQuotation || "Not Created Yet" },
      { label: "Sales Order ID", val: docs.salesOrder || "Not Created Yet" },
      { label: "Planned Order / Req", val: docs.purchaseRequisition || "Not Created Yet" },
      { label: "Vendor ID", val: docs.vendorId || "Not Created Yet" },
      { label: "RFQ Document ID", val: docs.vendorRfq || "Not Created Yet" },
      { label: "Supplier Quotation", val: docs.vendorQuotation || "Not Created Yet" },
      { label: "Purchase Order ID", val: docs.purchaseOrder || "Not Created Yet" },
      { label: "Production Order ID", val: docs.productionOrder || "Not Created Yet" },
      { label: "Outbound Delivery", val: docs.outboundDelivery || "Not Created Yet" },
      { label: "Customer Invoice", val: docs.customerInvoice || "Not Created Yet" },
      { label: "Incoming Payment ID", val: docs.incomingPayment || "Not Created Yet" }
    ];

    return dbFields.map(field => `
      <div class="db-item">
        <span class="db-item-lbl">${field.label}</span>
        <span class="db-item-val" style="color: ${field.val.includes("Not") ? 'var(--text-muted)' : 'var(--primary)'}">${field.val}</span>
      </div>
    `).join("");
  }

  // Renders the Interactive Step Simulator Panel
  function renderStep(stepNumber) {
    const step = ERPSteps.find(s => s.number === stepNumber);
    if (!step) return;

    const sId = ERPdb.state.studentId || "000";
    const docs = ERPdb.state.documents;
    
    // Load active rows from database or initialize with one empty row
    let activeRows = [{}];
    const saved = ERPdb.state.customState[stepNumber];
    if (saved) {
      if (Array.isArray(saved)) {
        activeRows = JSON.parse(JSON.stringify(saved));
      } else {
        activeRows = [JSON.parse(JSON.stringify(saved))];
      }
    }

    // Inject step contents
    mainContent.innerHTML = `
      <div style="margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between;">
        <div>
          <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--primary); letter-spacing: 0.5px;">
            ${step.module_name} &bull; Step ${step.number}
          </span>
          <h1 style="font-size: 1.8rem; font-weight: 800; margin-top: 4px;">
            ${step.title.replace(/###/g, sId)}
          </h1>
        </div>
        <button class="btn-secondary" id="btn-back-dash">
          <span class="material-symbols-outlined">arrow_back</span>
          <span>Back to Dashboard</span>
        </button>
      </div>

      <div class="simulator-layout">
        
        <!-- Left Column: Instructions -->
        <div class="card panel-instructions">
          <div style="display: flex; gap: 20px; margin-bottom: 15px; border-bottom: 1px solid var(--border); padding-bottom: 15px;">
            <div>
              <span style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-muted);">Assigned Role</span>
              <div style="font-weight: 700; font-size: 1.05rem; color: var(--primary);">${step.role || "Consultant"}</div>
            </div>
            <div>
              <span style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-muted);">Est. Time</span>
              <div style="font-weight: 700; font-size: 1.05rem; color: var(--text-main);">${step.time || "10 min"}</div>
            </div>
          </div>
          
          <h3 style="font-size: 1.1rem; font-weight: 700;">Task Guidance</h3>
          <div class="instruction-steps">
            ${step.instructions.map((inst, index) => `
              <div class="instruction-step">
                <span class="instruction-step-num">${index + 1}</span>
                <span>${inst.replace(/###/g, sId)}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Right Column: Mock Fiori Form -->
        <div class="fiori-app-mock">
          
          <div class="fiori-app-bar">
            <div class="fiori-app-title">
              <span class="material-symbols-outlined" style="color: var(--primary);">grid_view</span>
              <span>${step.app || "Fiori Transaction System"}</span>
            </div>
            <div class="fiori-app-status" style="display: flex; align-items: center; gap: 4px;">
              <span class="material-symbols-outlined" style="font-size: 14px; color: ${ERPdb.state.completedSteps.includes(step.number) ? 'var(--success)' : 'var(--warning)'};">
                ${ERPdb.state.completedSteps.includes(step.number) ? 'verified' : 'pending'}
              </span>
              <span>${ERPdb.state.completedSteps.includes(step.number) ? "Completed" : "Draft"}</span>
            </div>
          </div>

          <div class="fiori-app-body">
            <form id="fiori-mock-form">
              <div class="fiori-section">
                <div class="fiori-section-title">Transaction Inputs</div>
                <div id="fiori-form-rows-container">
                  <!-- Dynamic Multi-Entry Rows Appended Here -->
                </div>
                
                <div style="display: flex; justify-content: center; margin-top: 20px; margin-bottom: 10px;">
                  <button type="button" class="btn-secondary" id="btn-add-row" style="border-radius: 9999px; padding: 10px 24px; font-weight: 700; border-color: var(--primary); color: var(--primary); display: flex; align-items: center; gap: 6px;">
                    <span class="material-symbols-outlined">add_circle</span>
                    <span>Add Another Entry</span>
                  </button>
                </div>
              </div>
            </form>
            
            <div class="feedback-box" id="fiori-feedback"></div>
          </div>

          <div class="fiori-actions-bar" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div>
              <button class="btn-secondary" id="btn-prev-step" ${step.number === 1 ? 'disabled style="opacity: 0.5; pointer-events: none;"' : ''}>
                <span class="material-symbols-outlined">navigate_before</span>
                <span>Previous</span>
              </button>
              <button class="btn-secondary" id="btn-next-step" ${step.number === ERPSteps.length ? 'disabled style="opacity: 0.5; pointer-events: none;"' : ''}>
                <span>Next</span>
                <span class="material-symbols-outlined">navigate_next</span>
              </button>
            </div>
            <div style="display: flex; gap: 12px;">
              <button class="btn-secondary" id="btn-fill-defaults">
                <span class="material-symbols-outlined" style="color: var(--accent);">magic_button</span>
                <span>Autofill Defaults</span>
              </button>
              <button class="btn-fiori-primary" id="btn-submit-step" style="display: flex; align-items: center; gap: 8px;">
                <span class="material-symbols-outlined">check_circle</span>
                <span>${ERPdb.state.completedSteps.includes(step.number) ? "Re-submit & Save" : "Post & Confirm"}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    `;

    // Local controller functions for dynamic multi-entry rows
    function captureCurrentFormValues() {
      const container = document.getElementById("fiori-form-rows-container");
      if (!container) return;
      
      const rowElements = container.querySelectorAll(".fiori-form-row");
      const captured = [];
      rowElements.forEach((rowEl) => {
        const rowData = {};
        step.fields.forEach(f => {
          const input = rowEl.querySelector(`[name="${f.name}"]`);
          if (input) {
            rowData[f.name] = input.value.trim();
          }
        });
        captured.push(rowData);
      });
      activeRows = captured;
    }

    function renderAllActiveRows() {
      const container = document.getElementById("fiori-form-rows-container");
      if (!container) return;
      container.innerHTML = "";

      activeRows.forEach((rowData, idx) => {
        const rowDiv = document.createElement("div");
        rowDiv.className = "fiori-form-row";
        
        rowDiv.innerHTML = `
          <div class="fiori-row-header">
            <span class="fiori-row-title">
              <span class="material-symbols-outlined" style="font-size: 18px;">dynamic_feed</span>
              <span>Entry Row #${idx + 1}</span>
            </span>
            ${activeRows.length > 1 ? `
              <button type="button" class="btn-remove-row" data-remove-index="${idx}">
                <span class="material-symbols-outlined" style="font-size: 16px;">delete</span>
                <span>Remove</span>
              </button>
            ` : ''}
          </div>
          <div class="fiori-form-grid">
            ${renderRowFields(step, sId, docs, rowData, idx + 1)}
          </div>
        `;
        container.appendChild(rowDiv);
      });

      // Bind deletion clicks
      container.querySelectorAll(".btn-remove-row").forEach(btn => {
        btn.addEventListener("click", () => {
          const removeIdx = parseInt(btn.getAttribute("data-remove-index"));
          captureCurrentFormValues();
          activeRows.splice(removeIdx, 1);
          renderAllActiveRows();
        });
      });

      // Bind help triggers
      container.querySelectorAll(".fiori-help-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const fieldName = e.currentTarget.getAttribute("data-field");
          const fieldLabel = e.currentTarget.getAttribute("data-label");
          showHelpModal(fieldName, fieldLabel);
        });
      });
    }

    // Render the initial rows
    renderAllActiveRows();

    // Bind Add Row event
    document.getElementById("btn-add-row").addEventListener("click", () => {
      captureCurrentFormValues();
      activeRows.push({});
      renderAllActiveRows();
    });

    // Bind panel events
    document.getElementById("btn-back-dash").addEventListener("click", () => {
      currentActiveStep = null;
      renderSidebar();
      renderDashboard();
    });

    document.getElementById("btn-fill-defaults").addEventListener("click", () => {
      fillFormDefaults(step, sId, docs);
    });

    document.getElementById("btn-submit-step").addEventListener("click", (e) => {
      e.preventDefault();
      validateAndSubmit(step, sId, docs);
    });

    // Prev/Next Navigation
    const prevBtn = document.getElementById("btn-prev-step");
    const nextBtn = document.getElementById("btn-next-step");

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (step.number > 1) {
          currentActiveStep = step.number - 1;
          renderSidebar();
          renderStep(step.number - 1);
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (step.number < ERPSteps.length) {
          currentActiveStep = step.number + 1;
          renderSidebar();
          renderStep(step.number + 1);
        }
      });
    }

    // Helper functions defined locally to easily capture/manipulate activeRows
    function fillFormDefaults(step, sId, docs) {
      const container = document.getElementById("fiori-form-rows-container");
      if (!container) return;
      
      const rowElements = container.querySelectorAll(".fiori-form-row");
      rowElements.forEach((rowEl, rIdx) => {
        const rowIndex = rIdx + 1;
        step.fields.forEach(f => {
          const input = rowEl.querySelector(`[name="${f.name}"]`);
          if (input && !f.readonly) {
            let val = f.value || "";
            val = val.replace(/###/g, sId);
            
            if (f.name === "ref_inquiry") val = docs.salesInquiry || "18100999" + sId;
            if (f.name === "ref_quotation" && step.number === 7) val = docs.salesQuotation || "200000" + sId;
            if (f.name === "ref_quotation" && step.number === 20) val = docs.vendorQuotation || "700000" + sId;
            if (f.name === "ref_rfq") val = docs.vendorRfq || "600000" + sId;
            if (f.name === "ref_po") val = docs.purchaseOrder || "450000" + sId;
            if (f.name === "ref_so") val = docs.salesOrder || "300000" + sId;
            if (f.name === "ref_delivery") val = docs.outboundDelivery || "800000" + sId;
            if (f.name === "prod_order") val = docs.productionOrder || "10001" + sId;
            if (f.name === "planned_order") val = "PL-450" + sId;
            
            // Intelligently vary default values for row index > 1
            if (rowIndex > 1 && val) {
              if (val.startsWith("1 ")) {
                val = val.replace(/^1 /, `${rowIndex} `);
              } else if (/^[A-Z]{3,4}\d/.test(val) || f.name.startsWith("ref_") || f.name === "prod_order" || f.name === "planned_order") {
                val = val + "_" + rowIndex;
              }
            }
            
            input.value = val;
            input.classList.remove("invalid");
          }
        });
      });
    }

    function validateAndSubmit(step, sId, docs) {
      const feedback = document.getElementById("fiori-feedback");
      feedback.className = "feedback-box";
      feedback.style.display = "none";

      captureCurrentFormValues();

      let isValid = true;
      const container = document.getElementById("fiori-form-rows-container");
      const rowElements = container.querySelectorAll(".fiori-form-row");

      rowElements.forEach((rowEl, rIdx) => {
        const rowIndex = rIdx + 1;
        step.fields.forEach(f => {
          const input = rowEl.querySelector(`[name="${f.name}"]`);
          if (input) {
            const val = input.value.trim();
            
            // Compute expected standard value
            let expectedVal = f.value || "";
            expectedVal = expectedVal.replace(/###/g, sId);
            
            if (rowIndex > 1 && expectedVal) {
              if (expectedVal.startsWith("1 ")) {
                expectedVal = expectedVal.replace(/^1 /, `${rowIndex} `);
              } else if (/^[A-Z]{3,4}\d/.test(expectedVal)) {
                expectedVal = expectedVal + "_" + rowIndex;
              }
            }

            // Reference checks
            let isRefCorrect = true;
            if (f.name === "ref_inquiry") {
              let refVal = docs.salesInquiry || "18100999" + sId;
              if (rowIndex > 1 && !refVal.includes("_")) refVal = refVal + "_" + rowIndex;
              isRefCorrect = val === refVal;
            }
            if (f.name === "ref_quotation" && step.number === 7) {
              let refVal = docs.salesQuotation || "200000" + sId;
              if (rowIndex > 1 && !refVal.includes("_")) refVal = refVal + "_" + rowIndex;
              isRefCorrect = val === refVal;
            }
            if (f.name === "ref_quotation" && step.number === 20) {
              let refVal = docs.vendorQuotation || "700000" + sId;
              if (rowIndex > 1 && !refVal.includes("_")) refVal = refVal + "_" + rowIndex;
              isRefCorrect = val === refVal;
            }
            if (f.name === "ref_rfq") {
              let refVal = docs.vendorRfq || "600000" + sId;
              if (rowIndex > 1 && !refVal.includes("_")) refVal = refVal + "_" + rowIndex;
              isRefCorrect = val === refVal;
            }
            if (f.name === "ref_po") {
              let refVal = docs.purchaseOrder || "450000" + sId;
              if (rowIndex > 1 && !refVal.includes("_")) refVal = refVal + "_" + rowIndex;
              isRefCorrect = val === refVal;
            }
            if (f.name === "ref_so") {
              let refVal = docs.salesOrder || "300000" + sId;
              if (rowIndex > 1 && !refVal.includes("_")) refVal = refVal + "_" + rowIndex;
              isRefCorrect = val === refVal;
            }
            if (f.name === "ref_delivery") {
              let refVal = docs.outboundDelivery || "800000" + sId;
              if (rowIndex > 1 && !refVal.includes("_")) refVal = refVal + "_" + rowIndex;
              isRefCorrect = val === refVal;
            }
            if (f.name === "prod_order") {
              let refVal = docs.productionOrder || "10001" + sId;
              if (rowIndex > 1 && !refVal.includes("_")) refVal = refVal + "_" + rowIndex;
              isRefCorrect = val === refVal;
            }

            // Standard match checks â€” only strict for SAP code fields
            let isStandardMatch = true;
            if (expectedVal && !f.placeholder && f.name !== "status" && !f.name.startsWith("ref_") && f.name !== "prod_order") {
              if (isSapCode(f, expectedVal)) {
                // SAP code: must match exactly (case-insensitive)
                isStandardMatch = val.toLowerCase() === expectedVal.toLowerCase();
              }
              // else: free-text field â€” any non-empty value is accepted (already checked by !val above)
            }

            if (!val || !isRefCorrect || !isStandardMatch) {
              input.classList.add("invalid");
              isValid = false;
            } else {
              input.classList.remove("invalid");
            }
          }
        });
      });

      if (!isValid) {
        // Collect the names of invalid fields for a targeted error message
        const invalidLabels = [];
        document.querySelectorAll(".fiori-input.invalid").forEach(inp => {
          const grp = inp.closest(".fiori-form-group");
          if (grp) {
            const lbl = grp.querySelector("label");
            if (lbl) invalidLabels.push(`"${lbl.textContent.trim()}"`);
          }
        });
        const fieldList = invalidLabels.length ? ` â€” check: ${invalidLabels.join(", ")}` : "";
        feedback.className = "feedback-box error";
        feedback.innerHTML = `âŒ <strong>Validation Failed!</strong> Some fields are blank or contain incorrect SAP codes${fieldList}. <br><small>ðŸ’¡ SAP code fields (marked with <strong>ðŸ”‘ Required SAP code</strong>) must be entered exactly as shown. Free-text fields accept any value. Click <strong>Autofill Defaults</strong> if you are stuck.</small>`;
        return;
      }

      // Success: Save activeRows array
      ERPdb.completeStep(step.number, activeRows);
      
      const statusLabel = document.querySelector(".fiori-app-status");
      if (statusLabel) {
        statusLabel.innerHTML = '<span class="material-symbols-outlined" style="font-size: 14px; color: var(--success);">verified</span><span>Completed</span>';
      }

      feedback.className = "feedback-box success";
      
      // Dynamic generated document feedback
      let generatedMsg = "Transaction posted successfully.";
      const count = activeRows.length;
      const countStr = count > 1 ? ` (${count} items)` : "";
      
      if (step.number === 1) generatedMsg = `Business Partners ALPIN${sId}${count > 1 ? ` (+${count-1} BPs)` : ""} created.`;
      else if (step.number === 2) generatedMsg = `Materials XM10${sId}, XM20${sId}, XM30${sId}${countStr} created.`;
      else if (step.number === 4) generatedMsg = `Material ZC10${sId}${countStr} created.`;
      else if (step.number === 5) generatedMsg = `Sales Inquiry #18100999${sId}${countStr} saved.`;
      else if (step.number === 6) generatedMsg = `Sales Quotation #200000${sId}${countStr} created.`;
      else if (step.number === 7) generatedMsg = `Sales Order #300000${sId}${countStr} created with reference.`;
      else if (step.number === 15) generatedMsg = `Planned Order converted to Purchase Requisition #10005${sId}${countStr}.`;
      else if (step.number === 16) generatedMsg = `Vendor AlpineGear Solutions (SUPP${sId})${count > 1 ? ` (+${count-1} vendors)` : ""} created.`;
      else if (step.number === 17) generatedMsg = `Request for Quotation (RFQ) #600000${sId}${countStr} submitted to Vendor.`;
      else if (step.number === 18) generatedMsg = `Quotation #700000${sId}${countStr} created from Supplier.`;
      else if (step.number === 20) generatedMsg = `Purchase Order #450000${sId}${countStr} created.`;
      else if (step.number === 22) generatedMsg = `Goods Receipt posted under Material Document #500000${sId}${countStr}.`;
      else if (step.number === 25) generatedMsg = `Supplier Invoice #900000${sId}${countStr} posted successfully.`;
      else if (step.number === 28) generatedMsg = `Outgoing Payment OP-5000${sId}${countStr} cleared.`;
      else if (step.number === 35) generatedMsg = `Production Order #10001${sId}${countStr} created from Planned Order.`;
      else if (step.number === 41) generatedMsg = `Goods Receipt posted for Production Order #510001${sId}${countStr}.`;
      else if (step.number === 47) generatedMsg = `Outbound Delivery #800000${sId}${countStr} created.`;
      else if (step.number === 51) generatedMsg = `Billing Document Customer Invoice #950000${sId}${countStr} posted.`;
      else if (step.number === 53) generatedMsg = `Incoming Payment IP-8000${sId}${countStr} cleared. Cycle completed!`;

      feedback.innerHTML = `ðŸŽ‰ <strong>Success!</strong> ${generatedMsg} Progress saved.`;
      
      renderSidebar();

      setTimeout(() => {
        if (step.number < ERPSteps.length) {
          currentActiveStep = step.number + 1;
          renderSidebar();
          renderStep(step.number + 1);
        } else {
          currentActiveStep = null;
          renderSidebar();
          renderDashboard();
          alert("Congratulations! You have completed the entire end-to-end integrative case study cycle!");
        }
      }, 1500);
    }
  }

  /**
   * Determines if a field's expected value is a strict SAP code that the student
   * must enter exactly (e.g. ZN10, MU10, FLCU00, WS, QT, PR00).
   * Free-text fields (names, descriptions, addresses, quantities, prices, dates)
   * return false and only require a non-empty value.
   */
  function isSapCode(field, resolvedValue) {
    // Reference fields are always handled separately (cross-step memory check)
    if (field.name.startsWith("ref_") || field.name === "prod_order" || field.name === "planned_order") return false;
    // Status / placeholder-only fields are free text
    if (field.name === "status" || field.placeholder) return false;
    // No value defined â†’ can't be a code
    if (!resolvedValue) return false;
    // Purely numeric values are free-entry quantities / prices / dates
    if (/^\d+(\.\d+)?$/.test(resolvedValue)) return false;
    // Values with spaces are free-text (names, descriptions, addresses, etc.)
    if (resolvedValue.includes(" ")) return false;
    // Values containing ### are student-specific IDs â†’ we validate those strictly
    // (they already replace ### with the student ID so no spaces will be present)
    // Short alphanumeric codes (â‰¤ 20 chars, no spaces): treat as SAP code
    if (resolvedValue.length <= 20) return true;
    // Long values are free text
    return false;
  }

  function renderRowFields(step, sId, docs, rowData, rowIndex) {
    return step.fields.map(f => {
      let val = f.value || "";
      val = val.replace(/###/g, sId);
      
      if (rowData[f.name] !== undefined) {
        val = rowData[f.name];
      } else {
        if (f.name === "ref_inquiry") val = docs.salesInquiry || "";
        if (f.name === "ref_quotation" && step.number === 7) val = docs.salesQuotation || "";
        if (f.name === "ref_quotation" && step.number === 20) val = docs.vendorQuotation || "";
        if (f.name === "ref_rfq") val = docs.vendorRfq || "";
        if (f.name === "ref_po") val = docs.purchaseOrder || "";
        if (f.name === "ref_so") val = docs.salesOrder || "";
        if (f.name === "ref_delivery") val = docs.outboundDelivery || "";
        if (f.name === "prod_order") val = docs.productionOrder || "";
        if (f.name === "planned_order") val = "PL-450" + sId;
        
        // Auto-vary initial load defaults for secondary rows
        if (rowIndex > 1 && val) {
          if (val.startsWith("1 ")) {
            val = val.replace(/^1 /, `${rowIndex} `);
          } else if (/^[A-Z]{3,4}\d/.test(val) || f.name.startsWith("ref_") || f.name === "prod_order" || f.name === "planned_order") {
            val = val + "_" + rowIndex;
          }
        }
      }

      if (f.readonly) {
        let defaultVal = (f.value || "").replace(/###/g, sId);
        if (rowIndex > 1 && defaultVal.startsWith("1 ")) {
          defaultVal = defaultVal.replace(/^1 /, `${rowIndex} `);
        } else if (rowIndex > 1 && /^[A-Z]{3,4}\d/.test(defaultVal)) {
          defaultVal = defaultVal + "_" + rowIndex;
        }
        val = defaultVal;
      }

      if (f.name === "status" && f.value === "Completed") {
        return `
          <div class="fiori-form-group" style="grid-column: 1 / -1; display: flex; justify-content: center; padding-top: 10px;">
            <button class="btn-fiori-primary" type="button" onclick="document.getElementById('btn-submit-step').click();" style="width: 100%; max-width: 300px; display: flex; justify-content: center; align-items: center; gap: 8px;">
              <span class="material-symbols-outlined">check_circle</span>
              ${f.value}
            </button>
            <input type="hidden" name="${f.name}" value="${val}">
          </div>
        `;
      }

      const isReadonly = f.readonly ? "readonly style='background: var(--background); pointer-events: none;'" : "";

      // Compute the expected value for hint display
      const expectedVal = (f.value || "").replace(/###/g, sId);
      const isCode = isSapCode(f, expectedVal);
      const isRef = f.name.startsWith("ref_") || f.name === "prod_order" || f.name === "planned_order";

      // Build the hint line
      let hintHtml = "";
      if (isCode && expectedVal && !f.readonly) {
        hintHtml = `<span style="font-size: 0.72rem; color: var(--primary); font-weight: 700; margin-top: 4px; display: block;">
          <span class="material-symbols-outlined" style="font-size: 12px; vertical-align: middle;">key</span>
          Required SAP code: <code style="background: var(--primary-glow); padding: 1px 6px; border-radius: 6px; font-size: 0.72rem; color: var(--primary);">${expectedVal}</code>
        </span>`;
      } else if (isRef && f.placeholder) {
        hintHtml = `<span style="font-size: 0.72rem; color: var(--warning); font-weight: 600; margin-top: 4px; display: block;">
          <span class="material-symbols-outlined" style="font-size: 12px; vertical-align: middle;">history_edu</span>
          ${f.placeholder} â€” enter the ID you recorded
        </span>`;
      } else if (!isCode && !isRef && !f.readonly && expectedVal) {
        hintHtml = `<span style="font-size: 0.72rem; color: var(--text-muted); margin-top: 4px; display: block;">
          <span class="material-symbols-outlined" style="font-size: 12px; vertical-align: middle;">edit_note</span>
          Example: <em>${expectedVal}</em> &nbsp;(free entry â€” type your own value)
        </span>`;
      }
      
      return `
        <div class="fiori-form-group">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <label>${f.label}</label>
            <span class="fiori-help-btn" data-field="${f.name}" data-label="${f.label}" title="Explain this field">
              <span class="material-symbols-outlined" style="font-size: 16px; pointer-events: none;">info</span>
            </span>
          </div>
          <input 
            type="text" 
            name="${f.name}" 
            class="fiori-input" 
            value="${val}" 
            placeholder="${(f.placeholder || f.value || '').replace(/###/g, sId)}"
            ${isReadonly}
          >
          ${hintHtml}
        </div>
      `;
    }).join("");
  }


  // ERP ERP field explanations lookup table
  const ERPFieldExpl = {
    "bp_role": "BP Role (Business Partner Role): Defines the business function of this master record in ERP. FLCU00 is for Financial Accounting (FI Customer) and FLCU01 is for Sales (Customer Sales Data).",
    "form_address": "Form of Address: Standard greeting format for the business partner database. We use 'Company' for corporate accounts.",
    "name": "Name: The legal business name of the customer organization. In the training environment, we prefix it with '1' and suffix with your student ID (###) to guarantee uniqueness.",
    "street": "Street: The street name for the business partner's primary delivery and billing address. We use 'Main Street' for Alpine Velo.",
    "house_num": "House Number: The building number for the business partner's address, set to 7.",
    "city": "City: The city where the business partner's headquarters is located, set to Munich.",
    "postal_code": "Postal Code: The postal code for the address. Munich's Zenith Electro-Mobility warehouse uses 60311.",
    "country": "Country/Region: Two-letter ISO country code. DE represents Germany (Deutschland).",
    "region": "Region: Sub-state region code. 15 represents Saxony-Anhalt (Sachsen-Anhalt) in Germany.",
    "language": "Language: The language key for all communications and printing. DE stands for German (Deutsch).",
    "search_term": "Search Term: A 10-character keyword used to quickly find and filter this Business Partner in search dialogs. We use your student ID (###).",
    "trans_zone": "Transportation Zone: Groups regional locations to simplify shipping route determination. We use Zone Central due to Munich's geographic location.",
    "company_code": "Company Code: Represents an independent legal financial accounting entity in ERP. ZN00 represents Zenith Electro-Mobility GmbH.",
    "recon_account": "Reconciliation Account: The G/L account that aggregates postings from sub-ledger accounts (Accounts Receivable / Trade Receivables). 12100999 is Trade Receivables Domestic, and 21100999 is Trade Payables Domestic.",
    "sort_key": "Sort Key: Determines how line items are automatically sorted in financial reports. 001 sorts by Posting Date.",
    "payment_term": "Payment Term: Terms of payment agreed with the partner. 0001 represents immediate payment due net (no cash discount).",
    "sales_org": "Sales Organization: An organizational unit responsible for distributing goods and services and negotiating sales terms. ZN10 represents Zenith Electro-Mobility Germany's wholesale sales organization.",
    "dist_channel": "Distribution Channel: The channel through which goods reach the customer. WS represents Wholesale (sales to retail stores).",
    "division": "Division: Represents a product line in Sales. VL represents the Bicycles division.",
    "price_xm10": "Material Price (PR00) for XM10###: The wholesale selling price for the Basic Sport & Commute Bike, set to 1500 EUR.",
    "price_xm20": "Material Price (PR00) for XM20###: The wholesale selling price for the Endurance Sport & Commute Bike, set to 3500 EUR.",
    "price_xm30": "Material Price (PR00) for XM30###: The wholesale selling price for the Carbon Sport & Commute Bike, set to 4000 EUR.",
    "cond_type": "Condition Type: Dictates the pricing element in ERP. PR00 stands for standard Selling Price.",
    "plant": "Delivering Plant: The plant location from which goods are manufactured, stored, and shipped. MU10 represents Munich.",
    "zc10_id": "Material ID: Unique identifier for the ride computer. In training, we use ZC10###.",
    "zc10_desc": "Description: A short descriptive text for the material master record, set to 'Zenith Integrated Ride Computer'.",
    "uom": "Base Unit of Measure: The unit in which inventory is managed. PC stands for Pieces.",
    "mat_group": "Material Group: Groups materials with similar characteristics for purchasing and reporting. UTILITY is used for accessories.",
    "price_std": "Standard Price: The pre-calculated inventory cost of the item in the material master, set to 150 EUR.",
    "inq_type": "Inquiry Type: Document type for sales inquiries. ZI10 is standard Sales Inquiry.",
    "customer": "Customer ID: Reference business partner number created in Step 1.",
    "ref_inquiry": "Reference Inquiry ID: The Inquiry document number generated in Step 5, used to copy details and maintain integration.",
    "ref_quotation": "Reference Quotation ID: The Quotation document number generated in Step 6 (for Sales Order) or Step 18 (for Purchase Order).",
    "cust_po": "Customer PO Number: The purchase order number issued by the customer, formatted as PO-###.",
    "ref_rfq": "Reference RFQ ID: The Request for Quotation document number created in Step 17.",
    "quantity": "Quantity: The number of pieces or units being ordered or processed.",
    "amount": "Amount: The total financial amount in EUR for the posting or invoice.",
    "bank_acc": "Bank Account: The G/L account representing bank funds. 18100999 is the main house bank account.",
    "planned_order": "Planned Order ID: Generated automatically by MRP (Material Requirements Planning) based on independent demands.",
    "prod_order": "Production Order ID: Authorizes production on the shop floor. Converted from Planned Order.",
    "yield_qty": "Yield Quantity: The number of completed pieces being confirmed from production.",
    "shipping_point": "Shipping Point: The physical location responsible for shipping. MU10 is Munich.",
    "ref_so": "Reference Sales Order ID: The Sales Order document number generated in Step 7.",
    "ref_delivery": "Reference Outbound Delivery ID: The Delivery document number generated in Step 47.",
    "pick_xm10": "Picked Quantity (XM10###): The quantity of Basic bikes physically picked from storage (must match order quantity).",
    "pick_xm20": "Picked Quantity (XM20###): The quantity of Endurance bikes physically picked from storage.",
    "pick_xm30": "Picked Quantity (XM30###): The quantity of Carbon custom bikes physically picked from storage.",
    "settle_rule": "Settlement Rule: Defines how production costs are settled. ZS10D settles to the Production Order.",
    "xm10_id": "Basic Bike Material ID: Unique part number for the Basic Sport & Commute Bike. Configured as XM10### to distinguish your student stock.",
    "xm10_desc": "Basic Bike Description: Short text describing the Basic Sport & Commute Bike in the Material Master for cataloging and search. Set to 'Basic Sport & Commute Bike (Black)'.",
    "xm20_id": "Endurance Bike Material ID: Unique part number for the Endurance Sport & Commute Bike (XM20###) in ERP Logistics.",
    "xm20_desc": "Endurance Bike Description: Material catalog text describing the Endurance Sport & Commute Bike, set to 'Endurance Sport & Commute Bike (Red)'.",
    "xm30_id": "Carbon Bike Material ID: Unique part number for the Custom Carbon Bike (XM30###), which is manufactured on-demand under Make-to-Order.",
    "xm30_desc": "Carbon Bike Description: Material catalog text for the Custom Carbon Sport & Commute Bike, set to 'Carbon Sport & Commute Bike (Gray)'.",
    "inv_date": "Billing Invoice Date: The official accounting posting date for the billing document. In real life, it establishes when accounts receivable are recognized and determines the payment due date based on payment terms.",
    "m1_fc": "Basic Bike Forecast Qty: Represents the Planned Independent Requirement (PIR) forecast quantity. In real ERPs, this forecast is entered by demand planners to drive material requirements planning (MRP) to build inventory before sales occur.",
    "m2_fc": "Endurance Bike Forecast Qty: Represents the Planned Independent Requirement (PIR) forecast quantity for the Endurance bike, establishing demand signals in the production schedule.",
    "m3_fc": "Carbon Bike Forecast Qty: Represents the Planned Independent Requirement (PIR) forecast quantity for the Carbon bike (set to 0, since carbon bikes are make-to-order).",
    "movement": "Goods Movement Type: A 3-digit key that controls goods receipt, goods issue, and stock transfers. 561 represents Initial Stock Entry (used to load initial balance sheets), and MT10 represents Goods Receipt for a Purchase Order (updates stock inventory and balances clearing).",
    "mrp_param": "MRP Parameters: Defines how material requirements planning operates. 'NETCH' stands for Net Change Planning (only plans items with demand changes since last run), '1' triggers automatic Purchase Requisition creation for component deficits, and '3' schedules routing lines.",
    "pg_id": "Product Group ID: Groups similar products together (e.g. PG-AV###) in ERP PP. This allows planners to run production forecasts, planning, and capacity analysis at an aggregated group level rather than planning each individual bike.",
    "pg_desc": "Product Group Description: Descriptive name for the bicycle grouping, set to 'Sport & Commute Bikes ###'.",
    "pg_members": "Product Group Members: The specific material part numbers (XM10###, XM20###) that are grouped under this planning family for aggregated demand forecasts.",
    "qty_xm10": "Order Quantity (Basic): The number of Basic Sport & Commute Bikes ordered by the customer (5 units), driving logistics demand downstream.",
    "qty_xm20": "Order Quantity (Endurance): The number of Endurance Sport & Commute Bikes ordered by the customer (2 units), driving shipping and inventory allocation.",
    "qty_xm30": "Order Quantity (Carbon): The number of custom Carbon Sport & Commute Bikes ordered by the customer (5 units) under Make-to-Order.",
    "quot_type": "Quotation Type: Document type for sales quotations, set to QT. It represents a legally binding offer to deliver goods at a set price within a specific validity period.",
    "rfq_type": "Request for Quotation Type: Document type for RFQ, set to ZR10. In real procurement, an RFQ is sent to multiple suppliers to invite competing bids for raw materials.",
    "routing_title": "Routing Worklist Group: The routing group header used to group assembly routing operations for finished bicycles under a single administrative task list.",
    "so_type": "Sales Order Type: Document type for standard sales orders, set to ZS10 (Order). In ERP, it represents a formal contractual agreement between the seller and customer.",
    "strat_20": "Strategy Group 20 (Make-to-Order): A production planning strategy where manufacturing is only triggered by an active sales order. No inventory is built in advance. This is used for expensive, customized products like the Carbon Custom Bike.",
    "strat_40": "Strategy Group 40 (Make-to-Stock): A production planning strategy driven by forecast demands (PIRs). Finished goods are assembled in advance and stored in inventory to fulfill customer orders immediately from stock (used for Basic and Endurance bikes).",
    "supplier": "Supplier / Vendor ID: The unique business partner number for your vendor (SUPP-###), representing AlpineGear Solutions in accounts payable.",
    "target": "Target Qty: The baseline quantity of goods being negotiated in the initial sales inquiry document (e.g., 5 Basic, 2 Endurance, 5 Carbon custom bikes).",
    "temp_basic": "Routing Template (Basic): The standard assembly work sequence template (XM10-DE) used as a reference to compile the setup and assembly routing times for the Basic bike.",
    "temp_endurance": "Routing Template (Endurance): The standard assembly work sequence template (XM20-DE) used as a reference for compilation of production lines.",
    "valid_to": "Validity End Date: Specifies the expiration date of the quotation or agreement. In real life, it protects the company by ensuring that wholesale pricing commitments expire after a set time (e.g. 1 month)."
  };

  // ERP ERP display-only step-specific status explanations
  const ERPStepStatusExpl = {
    11: "Planned Independent Requirements (PIRs) represent stock forecasts that drive your Production Planning. This transaction (MD63) displays the forecast levels (50, 60, 55 units) successfully saved in the Munich plant. It guarantees that the Material Requirements Planning (MRP) run in Step 13 has correct demands to calculate component shortages.",
    12: "A Production Version defines which bill of materials (BOM) and routing are used to manufacture a product. Supplementing the Production Version ensures that the ERP system has a valid manufacturing route for XM10### and XM20### in Munich. It links the Bill of Materials (BOM) to the Routing before shop-floor conversion.",
    14: "The Stock/Requirements List (MD04) is the most critical transaction in ERP Logistics. It shows real-time stock levels, sales demands, and planned independent requirements. It displays that you currently have 0 stock but a demand of 50 units of XM10###, confirming that a shortage exists which MRP will solve.",
    15: "This step converts a planned order created during MRP into a formal Purchase Requisition (PR). A PR represents an internal request from the production department to the purchasing department, asking them to procure 100 units of the Zenith Integrated Ride Computer (ZC10###) from an external supplier.",
    19: "This step compares quotations received from various suppliers to find the most cost-effective deal. It ranks vendor bids by net price, allowing you to select AlpineGear Solutions's bid of 130 EUR per unit as the cheapest supplier for the Zenith Integrated Ride Computer component.",
    21: "Verifies that Purchase Order (PO) #450000### has been successfully registered in the Munich plant. Displaying the PO details ensures that the quantity (100 units), vendor (AlpineGear Solutions), plant (MU10), and wholesale pricing (130 EUR) are correct before posting the receipt of goods.",
    23: "This step checks the stock level of the ride computer in MU10 after receiving the goods from the vendor. It displays that unrestricted stock has increased from 0 to 100 units, confirming the receipt was posted successfully in the material master.",
    24: "This step checks the Material Document generated by the goods receipt. It confirms that a movement type MT10 (Goods Receipt for Purchase Order) has successfully updated the General Ledger, matching the physical stock increase to the procurement cycle.",
    26: "The Purchase Order History displays all material documents (goods receipts) and accounting documents (supplier invoices) linked to this PO. This allows you to verify that 100 units were received and an invoice for 13,000 EUR was successfully processed.",
    27: "The Document Flow links all sales and logistics documents in chronological order. In MM procurement, this shows the sequential flow from Purchase Requisition to Purchase Order, Goods Receipt, and Supplier Invoice, confirming that the cycle is fully integrated.",
    29: "This step displays the accounts payable balance for AlpineGear Solutions (SUPP-###) before issuing the cash payment. It confirms a credit balance of 13,000 EUR in ZN00, representing the outstanding trade payables owed to the supplier.",
    30: "Displays the PO history again after making the supplier payment. This allows you to check that both the goods receipt document and the invoice document are settled, and the payment voucher has been successfully posted to PO history.",
    31: "This transaction displays the General Ledger (G/L) accounts balance list. It allows the accountant to check that the G/L bank account (18100999) was credited by 13,000 EUR and the trade payables account (21100999) was debited, balancing the cash clearing.",
    32: "A Routing defines the sequential operations (work centers, setup times, machine times) required to manufacture a product. Creating a routing for the custom Carbon Bike (XM30###) by copying XM20### ensures that the shop floor worker knows exactly how to assemble this custom-ordered bike.",
    33: "Creates the active Production Version for the custom XM30### bike. This links the custom Bill of Material (BOM) to the newly created XM30### routing, which is a mandatory prerequisite in ERP to convert make-to-order sales orders into production orders.",
    34: "Verifies the material master record details for the three bikes XM10###, XM20###, and XM30###. It displays that strategy groups are correctly set (40 for basic/endurance, 20 for custom make-to-order) and production versions are fully active.",
    36: "This step verifies that the Production Order #10001### has been successfully converted and registered on the shop floor. Displaying the order details allows you to confirm that the routing operations and material components (frame, wheels, GPS) are fully committed.",
    38: "This step checks the status of the Production Order after confirming the partial completion (2 units) in Step 37. It displays the order status as PCNF (Partially Confirmed) and checks that actual assembly costs are being accrued.",
    40: "This step checks the status of the Production Order after confirming the complete completion (remaining 3 units) in Step 39. It verifies that the order status has changed to CNF (Confirmed), meaning all 5 units are fully assembled and ready for storage.",
    42: "This step displays the production cost analysis report. It compares the target manufacturing cost (standard inventory value) against the actual costs incurred (material issues and work center activity hours), helping controllers track cost variances.",
    43: "Variance Calculation calculates the financial differences between target costs and actual costs. This calculates any cost variance (over-allocations or under-allocations) on the shop floor before closing and settling the production order.",
    45: "This transaction displays the current inventory levels for your finished product XM10###. It confirms that the stock has increased from 0 to 5 units in Munich, representing the finished bikes received from the production shop floor.",
    46: "The Track Sales Orders app displays the chronological lifecycle of the customer order. It shows that Sales Order #300000### has been created and the inventory is now available in stock, indicating that the warehouse supervisor can proceed to delivery.",
    48: "Tracks the Sales Order status again after creating the Outbound Delivery in Step 47. It displays that the sales order has moved from 'Open' to 'Being Processed', confirming that the delivery note is registered in the shipping queue.",
    50: "Checks the inventory levels after picking and posting the Goods Issue in Step 49. It displays that stock has decreased from 5 units to 0 (all 5 units shipped to Alpine Velo), confirming that goods have physically left the Munich plant."
  };

  // Sleek modal overlay renderer for field information
  function showHelpModal(fieldName, fieldLabel) {
    let explanation = "";
    
    if (fieldName === "status") {
      explanation = ERPStepStatusExpl[currentActiveStep] || "Verifies and displays the transaction data registered in this step.";
    } else {
      explanation = ERPFieldExpl[fieldName];
      
      // Dynamic real-life business context fallback generator if field is not in dictionary
      if (!explanation) {
        let desc = `Represents the **${fieldLabel}** in the ERP ERP ERP environment. `;
        const lowerName = fieldName.toLowerCase();
        if (lowerName.includes("date")) {
          desc += "In a real enterprise, this establishes the document or accounting posting date. This is crucial for financial audit trials, taxation windows, and calculating accounts payable/receivable maturity periods based on payment terms.";
        } else if (lowerName.includes("qty") || lowerName.includes("quantity")) {
          desc += "In a real logistics cycle, this specifies the physical count of units to be processed. It directly affects inventory levels in the warehouse (MM), production capacity scheduling (PP), and shipping fulfillment targets (SD).";
        } else if (lowerName.includes("price") || lowerName.includes("amount") || lowerName.includes("cost")) {
          desc += "In commercial transactions, this establishes the financial valuation. In ERP, it determines accounts receivable records, supplier invoicing liabilities, general ledger balances, and sales revenue metrics.";
        } else if (lowerName.includes("ref_") || lowerName.includes("planned_") || lowerName.includes("prod_")) {
          desc += "This acts as a document integration link. ERP integrates processes by requiring you to reference a preceding document (like reference Sales Order or Production Order) to automatically copy data and establish a clear transaction chain.";
        } else if (lowerName.includes("type")) {
          desc += "This is a document classification indicator. Document types in ERP determine the number range allocation, field requirements, and control the business workflow rules for the transaction.";
        } else {
          desc += "This parameter provides critical descriptive, organizational, or financial metadata required to complete this business transaction and update the central ERP general ledger and logistics databases.";
        }
        explanation = desc;
      }
    }
    
    // Check if modal already exists, if so remove it
    const existing = document.getElementById("fiori-help-modal");
    if (existing) existing.remove();
    
    // Create new modal overlay
    const modal = document.createElement("div");
    modal.id = "fiori-help-modal";
    modal.style = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.2s ease-out;
    `;
    
    const sId = ERPdb.state.studentId || "000";
    
    modal.innerHTML = `
      <div class="card" style="width: 450px; padding: 30px; border-radius: 24px; box-shadow: 0 20px 50px rgba(0,0,0,0.3); background: var(--panel-bg); border: 1px solid var(--border); display: flex; flex-direction: column; gap: 15px; animation: slideUp 0.2s ease-out;">
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border); padding-bottom: 10px;">
          <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--primary); display: flex; align-items: center; gap: 8px;">
            <span class="material-symbols-outlined">info</span>
            <span>Field Definition: ${fieldLabel}</span>
          </h3>
          <button id="close-help-modal" style="background: none; border: none; cursor: pointer; color: var(--text-muted); display: flex; align-items: center;">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-main);">
          ${explanation.replace(/###/g, sId)}
        </p>
        <div style="display: flex; justify-content: flex-end; margin-top: 10px;">
          <button class="btn-fiori-primary" id="btn-close-help-ok" style="display: flex; align-items: center; gap: 6px;">
            <span class="material-symbols-outlined" style="font-size: 16px;">thumb_up</span>
            <span>Got it!</span>
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Bind Close events
    const close = () => modal.remove();
    document.getElementById("close-help-modal").addEventListener("click", close);
    document.getElementById("btn-close-help-ok").addEventListener("click", close);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) close();
    });
  }

  // Fire it up
  init();


  function renderBusinessFlowPage() {
    const main = document.getElementById("main-content-panel");
    const docs = ERPdb.state.documents;
    const sId = ERPdb.state.studentId || "000";

    const pipelines = [
      {
        title: "Procure-to-Pay (Materials Management)",
        icon: "local_shipping",
        nodes: [
          {
            name: "Perform MRP", step: 13, out: "MRP Run complete",
            app: "MD01N - MRP Live",
            context: "Material Requirements Planning (MRP) is the brain of the supply chain. It scans all sales demands, production forecasts (PIRs), and current stock levels across the plant, then automatically calculates which components are short and when they need to be ordered or produced.",
            inputDetails: ["Plant: MU10 (Munich)", "Planning parameters: NETCH (net change)", "Scope: XM10, XM20, ZC10 materials", "Automatic PR creation flag: enabled"],
            outputDetails: ["Planned orders for raw materials and components", "Purchase Requisitions (PRs) for externally sourced items like ZC10", "The system identifies a shortfall of 100 pcs of ZC10 and creates a PR automatically"],
            whyItMatters: "Without MRP, supply chain planning is manual and error-prone. MRP ensures that the right quantity of materials arrives at exactly the right time, preventing stock-outs on the production floor and excess capital locked up in inventory.",
            nextStep: 15
          },
          {
            name: "Convert PR", step: 15, out: docs.purchaseRequisition,
            app: "Convert Planned Orders",
            context: "A Purchase Requisition (PR) is an internal document raised by the production/planning team to formally request that the purchasing department procure a specific item. Converting a planned order into a PR is the handoff from Production Planning (PP) to Materials Management (MM).",
            inputDetails: ["Planned order number from MRP run", "Material: ZC10" + sId + " (Zenith Integrated Ride Computer)", "Quantity: 100 pcs", "Plant: MU10"],
            outputDetails: ["Purchase Requisition document (PR#) created", "PR triggers the purchasing workflow - buyers are notified to source the material", "PR number is referenced in all subsequent procurement documents"],
            whyItMatters: "The PR creates a formal, auditable internal request. In large corporations, this segregates duties: production decides what to buy, while procurement decides from whom and at what price. This separation prevents unauthorized purchasing.",
            nextStep: 16
          },
          {
            name: "Create Vendor", step: 16, out: docs.vendorId,
            app: "Maintain Business Partner",
            context: "Before the company can issue a Purchase Order, the supplier must exist as a Business Partner (Vendor) in the ERP system. Vendor master data stores the supplier name, address, bank details, payment terms, and purchasing organization assignments.",
            inputDetails: ["Vendor name: AlpineGear Solutions", "BP Role: FLVN00 (Vendor)", "Company Code: ZN00", "Payment terms: negotiated credit terms", "Reconciliation Account: 21100999 (Trade Payables)"],
            outputDetails: ["Vendor ID: SUPP-" + sId + " created in the system", "Vendor is now available as a purchase order recipient", "Accounts Payable sub-ledger is linked via reconciliation account"],
            whyItMatters: "Vendor master data is the foundation of the entire procurement cycle. All purchase orders, goods receipts, and invoices flow through this vendor record. Without it, no payment can be processed and no legal purchasing contract can be generated.",
            nextStep: 17
          },
          {
            name: "Create RFQ", step: 17, out: docs.vendorRfq,
            app: "Create RFQ (ME41)",
            context: "A Request for Quotation (RFQ) is a formal invitation sent to one or more suppliers, asking them to submit a price offer for a specific material and quantity. In competitive procurement, multiple vendors receive the same RFQ so their bids can be compared.",
            inputDetails: ["Material: ZC10" + sId + " (Zenith Integrated Ride Computer)", "Quantity: 100 pcs", "Delivery date: negotiated", "Vendor: SUPP-" + sId + " (AlpineGear Solutions)", "Purchasing Organization: ZN00"],
            outputDetails: ["RFQ document number created", "RFQ is transmitted to the vendor (AlpineGear Solutions)", "RFQ opens the quotation workflow for the vendor to respond"],
            whyItMatters: "RFQs enforce competitive sourcing, ensuring the company gets the best market price. They are legally significant as the vendor response becomes a binding quotation. Skipping RFQs can lead to audit findings and procurement policy violations.",
            nextStep: 18
          },
          {
            name: "Vendor Quotation", step: 18, out: docs.vendorQuotation,
            app: "Maintain Quotation (ME47)",
            context: "The vendor price response is entered into the system as a Quotation. This captures the supplier offered price per unit, delivery lead time, and any discount conditions. When multiple vendors respond, the Price Comparison (ME49) report ranks them by net value.",
            inputDetails: ["Reference RFQ number", "Vendor: SUPP-" + sId, "Offered price: 130 EUR per unit", "Delivery lead time: as agreed", "Currency: EUR"],
            outputDetails: ["Quotation document number created", "Price comparison list (ME49) is now ready to evaluate bids", "Selected quotation becomes the basis for the Purchase Order"],
            whyItMatters: "Quotation management is the competitive heart of procurement. The 130 EUR unit price agreed here directly determines the cost of goods and impacts the company gross margin. This data feeds directly into the accounts payable forecast.",
            nextStep: 20
          },
          {
            name: "Purchase Order", step: 20, out: docs.purchaseOrder,
            app: "Create Purchase Order (ME21N)",
            context: "A Purchase Order (PO) is a legally binding commercial document issued by the buyer to the vendor, confirming the agreed quantity, price, and delivery terms. In ERP, it is created with reference to the approved quotation, automatically copying all pricing and conditions.",
            inputDetails: ["Reference Quotation: " + (docs.vendorQuotation || "from Step 18"), "Material: ZC10" + sId, "Quantity: 100 pcs", "Price: 130 EUR/pc (Total: 13,000 EUR)", "Vendor: SUPP-" + sId, "Delivery Plant: MU10"],
            outputDetails: ["Purchase Order #" + (docs.purchaseOrder || "450000" + sId) + " created", "PO is transmitted to AlpineGear Solutions", "Goods Receipt and Invoice can now be posted against this PO number"],
            whyItMatters: "The PO is the central document of MM procurement. Every downstream transaction - goods receipt, invoice verification, and payment - references this one PO. It provides the 3-way match anchor: PO quantity vs GR quantity vs Invoice amount.",
            nextStep: 22
          },
          {
            name: "Goods Receipt", step: 22, out: docs.goodsReceiptPo,
            app: "Post Goods Receipt for PO (MIGO)",
            context: "When the physical goods arrive at the warehouse dock, the warehouse worker posts a Goods Receipt (GR) against the PO. This is the moment the company legally takes ownership of the goods. The system automatically updates inventory stock, creates a material document, and credits the GR/IR clearing account.",
            inputDetails: ["Reference PO: " + (docs.purchaseOrder || "450000" + sId), "Material: ZC10" + sId, "Quantity received: 100 pcs", "Storage Location: RM10 (Raw Materials)", "Movement Type: 101 (GR for PO)"],
            outputDetails: ["Material Document created - stock updated from 0 to 100 pcs", "Accounting: Dr. Inventory Account / Cr. GR/IR Clearing Account", "PO history is updated with the goods receipt posting"],
            whyItMatters: "The Goods Receipt is a critical financial event. It creates an accounting entry that increases asset value on the balance sheet (inventory). The 3-way match between PO, GR, and Invoice is a fundamental internal control that prevents fraudulent payments.",
            nextStep: 25
          },
          {
            name: "Supplier Invoice", step: 25, out: docs.supplierInvoice,
            app: "Create Incoming Invoice (MIRO)",
            context: "Invoice Verification matches the supplier invoice amount against the Purchase Order price and the Goods Receipt quantity. If all three match (3-way match), the system posts the invoice and creates a liability in Accounts Payable. If they do not match, a blocking indicator is set for manual review.",
            inputDetails: ["Reference PO: " + (docs.purchaseOrder || "450000" + sId), "Invoice amount: 13,000 EUR (100 pcs x 130 EUR)", "Invoice date: current date", "Tax code: as applicable"],
            outputDetails: ["Invoice document posted to Accounts Payable", "Accounting: Dr. GR/IR Clearing / Cr. Vendor Account (SUPP-" + sId + ")", "Vendor account now shows an open payable of 13,000 EUR"],
            whyItMatters: "Invoice verification is where finance meets procurement. The 3-way match (PO-GR-Invoice) is the company primary defense against double payments and fraud. Only invoices that match PO price and GR quantity will pass automatic posting - others get flagged for buyer review.",
            nextStep: 28
          },
          {
            name: "Payment", step: 28, out: docs.outgoingPayment,
            app: "Post Outgoing Payments (F-53)",
            context: "The final step of the Procure-to-Pay cycle. The accountant posts the outgoing bank payment to clear the open vendor liability created in the previous invoice step. This deducts cash from the company bank account and marks the vendor invoice as paid.",
            inputDetails: ["Vendor: SUPP-" + sId + " (AlpineGear Solutions)", "Bank G/L Account: 18100999", "Payment amount: 13,000 EUR", "Reference invoice from Step 25"],
            outputDetails: ["Outgoing payment document posted", "Accounting: Dr. Vendor Account / Cr. Bank Account", "Vendor balance cleared to zero - cycle complete", "Bank balance reduced by 13,000 EUR"],
            whyItMatters: "This closes the financial loop of MM procurement. After this step, the company books show: +100 units ZC10 in inventory, -13,000 EUR in cash. The complete audit trail from PO to GR to Invoice to Payment is fully traceable in the document flow.",
            nextStep: null
          }
        ]
      },
      {
        title: "Plan-to-Produce (Production Planning)",
        icon: "precision_manufacturing",
        nodes: [
          {
            name: "Create Routing", step: 8, out: "Routing Created",
            app: "Create Routing (CA01)",
            context: "A Routing is a step-by-step manufacturing recipe that tells the production floor exactly how to assemble a product. It lists each operation such as Frame Assembly, Wheel Fitting, and Quality Check, which work center performs it, and how long it takes in setup time and machine time.",
            inputDetails: ["Material: XM10" + sId + " (Basic Sport and Commute Bike)", "Plant: MU10 (Munich)", "Template routing from XM-REF1-" + sId + " (Deluxe Touring Bike)", "Work centers: Assembly Line AL10, QC Station"],
            outputDetails: ["Routing group created for XM10" + sId, "Operations defined with times: e.g. Frame Assembly 30 min, Wheel Fitting 20 min", "Routing links to Bill of Materials (BOM) via Production Version"],
            whyItMatters: "The routing is the foundation of production cost calculation. Every minute of machine time and labor is costed against the production order using the routing. Without it, no production order can be created, and the system cannot calculate standard costs for inventory valuation.",
            nextStep: 10
          },
          {
            name: "Independent Req.", step: 10, out: "PIR Created",
            app: "Maintain PIRs (MD61)",
            context: "Planned Independent Requirements (PIRs) are demand forecasts entered by the production planner. They represent anticipated sales quantities that have not yet been confirmed by actual customer orders. PIRs drive the MRP run to build-to-stock inventory in advance.",
            inputDetails: ["Product Group: PG-AV" + sId, "Plant: MU10", "Month 1 forecast: 220 units (Basic and Endurance combined)", "Month 2 forecast: 140 units", "Month 3 forecast: 160 units"],
            outputDetails: ["PIR records created for XM10 and XM20 materials in Munich", "MRP is now triggered with these as planned demand inputs", "System will calculate required component quantities based on BOM explosion"],
            whyItMatters: "PIRs enable Make-to-Stock production strategy (Strategy Group 40). Without forecasts, the warehouse would always be empty until a customer orders, causing long lead times. Accurate forecasting balances the risk of overproduction against stock-outs.",
            nextStep: 35
          },
          {
            name: "Convert Prod. Order", step: 35, out: docs.productionOrder,
            app: "Create Production Order (CO40)",
            context: "A Production Order is the formal authorization from the planning department to the shop floor to begin manufacturing. It is converted from a Planned Order generated by MRP and contains all the details needed: what to build, how many, which components to use, and which routing to follow.",
            inputDetails: ["Planned order from MRP", "Material: XM10" + sId + " (5 units)", "Routing: XM10" + sId + "-HD", "BOM explosion: Frame, Wheels, GPS Computer ZC10, Paint", "Plant: MU10"],
            outputDetails: ["Production Order #" + (docs.productionOrder || "10001" + sId) + " created", "Components are reserved in inventory (reservation documents)", "Order status: CRTD (Created) then Released (REL) for shop floor"],
            whyItMatters: "The Production Order is the central document of PP. It triggers material reservations, schedules capacity at work centers, and begins cost collection. It is the legal authority for the production team to start assembly.",
            nextStep: 39
          },
          {
            name: "Confirm Production", step: 39, out: "Yield Confirmed",
            app: "Production Order Confirmation (CO15)",
            context: "Production Confirmation is reported by the shop floor supervisor to tell the system how many finished units were actually assembled. It records the actual machine time and labor time consumed, which are compared against the planned standard times in the routing for cost variance analysis.",
            inputDetails: ["Production Order: " + (docs.productionOrder || "10001" + sId), "Yield quantity: 5 units completed", "Actual machine time recorded", "Scrap quantity: 0"],
            outputDetails: ["Order status changes from REL to CNF (Confirmed - fully complete)", "Actual costs accrued to the production order", "Components (ZC10, frame, wheels) are consumed from stock (Goods Issue)"],
            whyItMatters: "Confirmations feed actual costs into the order. The variance between planned cost from the standard routing and actual cost from confirmations reveals production efficiency. A negative variance means you produced cheaper than planned - a positive variance signals inefficiency.",
            nextStep: 41
          },
          {
            name: "Goods Receipt (FG)", step: 41, out: docs.goodsReceiptProd,
            app: "Goods Receipt for Order (MIGO)",
            context: "After the shop floor confirms production is complete, a Goods Receipt for Production Order moves the finished bicycles from the production floor into the Finished Goods (FG) storage location. This is the moment the finished product is officially in stock and available to fulfill customer orders.",
            inputDetails: ["Production Order: " + (docs.productionOrder || "10001" + sId), "Material: XM10" + sId, "Quantity: 5 pcs", "Storage Location: FG10 (Finished Goods)", "Movement Type: 101 (GR for Production Order)"],
            outputDetails: ["Stock of XM10 increases by 5 pcs in FG10", "Accounting: Dr. Inventory (Finished Goods) / Cr. Production Order (WIP)", "Production order status: GR completed"],
            whyItMatters: "This step closes the production cost loop. Finished goods are now capitalized as inventory on the balance sheet. The 5 bikes are physically stored and logistically available for the Sales and Distribution team to pick and ship to Alpine Velo.",
            nextStep: 44
          },
          {
            name: "Settle Costs", step: 44, out: "Order Settled",
            app: "Settle Production Order (KO88)",
            context: "Cost Settlement is the final accounting step of the PP cycle. All costs collected on the production order (material issues, labor, and overhead) are transferred to the finished goods inventory. Any variance between actual costs and standard costs is posted to the Cost of Goods Sold (COGS) variance account.",
            inputDetails: ["Production Order: " + (docs.productionOrder || "10001" + sId), "Settlement receiver: Material XM10 inventory", "Settlement rule: ZS10D (full variance to COGS)"],
            outputDetails: ["Production order balance cleared to zero", "Variances posted to COGS variance account in P&L", "Inventory valued at standard cost; actual over/under absorbed cost moves to variance", "Order status: SETC (Settlement Complete)"],
            whyItMatters: "Settlement is critical for accurate financial reporting. Without it, costs would remain stuck on the production order as Work-in-Process (WIP) and the balance sheet would be overstated. After settlement, the P&L correctly shows the true cost of each bike produced.",
            nextStep: null
          }
        ]
      },
      {
        title: "Order-to-Cash (Sales & Distribution)",
        icon: "point_of_sale",
        nodes: [
          {
            name: "Create Customer", step: 1, out: docs.customerId,
            app: "Maintain Business Partner",
            context: "Before any sale can be processed, the customer must exist as a Business Partner in the ERP system. Customer master data is created in three views: General Data (name, address), Financial Accounting Data (reconciliation account, payment terms), and Sales Area Data (sales org, distribution channel, division).",
            inputDetails: ["BP Role: FLCU00 (Financial Customer) + FLCU01 (Sales Customer)", "Customer name: Alpine Velo " + sId, "Address: Apex Boulevard 42, 70173 Stuttgart, DE", "Company Code: ZN00", "Sales Org: ZN10 / Channel: WS / Division: VL", "Payment Terms: ZN45 (45-day net)"],
            outputDetails: ["Customer ID (ALPIN" + sId + ") created in Business Partner master", "Customer is now searchable in all sales transactions", "Accounts Receivable sub-ledger linked via reconciliation account 12100999"],
            whyItMatters: "The customer master is the data foundation of the entire Order-to-Cash cycle. Every sales document - inquiry, quotation, order, delivery, invoice - references this record. Payment terms stored here determine when the customer must pay, directly affecting cash flow planning.",
            nextStep: 5
          },
          {
            name: "Sales Inquiry", step: 5, out: docs.salesInquiry,
            app: "Manage Sales Inquiries (VA11)",
            context: "A Sales Inquiry is a non-binding request from Alpine Velo asking Zenith Electro-Mobility about available products and pricing. It is the first step in the pre-sales process and initiates the customer interaction in the system. Inquiries can later be referenced when creating quotations.",
            inputDetails: ["Inquiry Type: ZI10", "Sales Org: ZN10 / Channel: WS / Division: VL", "Customer: Alpine Velo " + sId, "Products: XM10 (12 pcs), XM20 (6 pcs), XM30 (4 pcs)", "Valid from/to dates"],
            outputDetails: ["Sales Inquiry #" + (docs.salesInquiry || "18100999" + sId) + " created", "Inquiry is tracked in the document management system", "Serves as a reference document for the subsequent Quotation"],
            whyItMatters: "Inquiries help sales teams track customer interest before a formal commitment. They feed pipeline reporting and CRM analytics. Since they are non-binding, they give the company flexibility to negotiate pricing before committing in a quotation.",
            nextStep: 6
          },
          {
            name: "Sales Quotation", step: 6, out: docs.salesQuotation,
            app: "Manage Sales Quotations (VA21)",
            context: "A Sales Quotation is a legally binding offer to deliver specific goods at a fixed price within a defined validity period. It is created with reference to the Sales Inquiry, copying all product and customer data. The customer can choose to accept (leading to a Sales Order) or decline.",
            inputDetails: ["Quotation Type: QT", "Reference Inquiry: " + (docs.salesInquiry || "18100999" + sId), "Valid to: 1 month from creation", "Pricing: PR00 condition type applied (EUR 1,500 / EUR 3,500 / EUR 4,000 per unit)"],
            outputDetails: ["Quotation #" + (docs.salesQuotation || "200000" + sId) + " created with fixed pricing", "Quotation sent to Alpine Velo for acceptance", "Validity date set - pricing is locked until expiry"],
            whyItMatters: "The quotation is Zenith formal commercial offer. Once issued, the company is legally obligated to honor the quoted price if the customer accepts within the validity period. It protects both parties and creates a documented paper trail for dispute resolution.",
            nextStep: 7
          },
          {
            name: "Sales Order", step: 7, out: docs.salesOrder,
            app: "Manage Sales Orders (VA01)",
            context: "The Sales Order is created when Alpine Velo formally accepts the quotation and places an order. It is created with reference to the Quotation, copying all pricing, products, and customer data. The SO triggers availability checks in inventory, credit checks in finance, and kicks off the delivery scheduling process.",
            inputDetails: ["Order Type: ZS10 (Standard Order)", "Reference Quotation: " + (docs.salesQuotation || "200000" + sId), "Customer PO Number: PO-" + sId, "Requested delivery date confirmed"],
            outputDetails: ["Sales Order #" + (docs.salesOrder || "300000" + sId) + " created", "Availability check: system checks if 5 XM10 bikes are in stock or scheduled", "Credit check: Alpine Velo credit limit validated", "Delivery schedule confirmed for shipping from MU10"],
            whyItMatters: "The Sales Order is the single most important SD document. It creates a binding commitment to deliver. Every downstream logistics step - delivery, picking, goods issue, billing - flows from this one document. It also triggers revenue recognition planning and cash flow forecasting.",
            nextStep: 47
          },
          {
            name: "Outbound Delivery", step: 47, out: docs.outboundDelivery,
            app: "Create Outbound Delivery (VL01N)",
            context: "The Outbound Delivery is the logistics document that instructs the warehouse to prepare and ship the goods. It is created with reference to the Sales Order and includes shipping point, route, and pick instructions. The warehouse team uses this document to physically locate, pick, and pack the bikes.",
            inputDetails: ["Reference Sales Order: " + (docs.salesOrder || "300000" + sId), "Shipping Point: MU10", "Planned goods issue date: as per schedule", "Delivery quantities: 5 x XM10" + sId],
            outputDetails: ["Outbound Delivery #" + (docs.outboundDelivery || "800000" + sId) + " created", "Transfer Order (TO) created for warehouse picking instructions", "Sales Order status changes to Being Processed"],
            whyItMatters: "The delivery document is the bridge between sales and warehouse. Without it, the warehouse has no formal instruction to pick goods. It also initiates the legal shipment process - once goods are issued against this delivery, ownership transfers to the customer.",
            nextStep: 49
          },
          {
            name: "Pick & Goods Issue", step: 49, out: "GI Posted",
            app: "Post Goods Issue (VL02N)",
            context: "After the warehouse picker physically collects the bikes from storage, the system Goods Issue is posted. This is the legal moment of title transfer - ownership of the bikes passes from Zenith to Alpine Velo. The system decreases inventory, creates an accounting document, and marks the delivery as Goods Issued.",
            inputDetails: ["Delivery: " + (docs.outboundDelivery || "800000" + sId), "Picked quantity: 5 x XM10 from FG10", "Movement Type: 601 (Goods Issue for Delivery)", "Pick confirmation required before GI posting"],
            outputDetails: ["Inventory of XM10 decreases by 5 pcs (FG10 to 0)", "Accounting: Dr. Cost of Goods Sold / Cr. Inventory (Finished Goods)", "Delivery status: Goods Issued - shipment dispatched to Alpine Velo"],
            whyItMatters: "Goods Issue triggers revenue recognition readiness. The cost of the bikes sold (COGS) is now recorded, and the SD team can create the billing document (invoice). From a supply chain perspective, the truck has left the dock - inventory is gone and the customer relationship shifts to accounts receivable.",
            nextStep: 51
          },
          {
            name: "Customer Invoice", step: 51, out: docs.customerInvoice,
            app: "Create Billing Document (VF01)",
            context: "The Billing Document (Customer Invoice) is created after Goods Issue is posted. It is the formal demand for payment sent to Alpine Velo. In ERP, creating the billing document posts a revenue accounting entry and creates an Accounts Receivable open item for the invoiced amount.",
            inputDetails: ["Reference Delivery: " + (docs.outboundDelivery || "800000" + sId), "Billing Type: F2 (Invoice)", "Invoice amount: calculated from Sales Order pricing", "Payment terms: ZN45 (45 days net - due date calculated automatically)"],
            outputDetails: ["Billing Document #" + (docs.customerInvoice || "950000" + sId) + " created", "Accounting: Dr. Accounts Receivable (Alpine Velo) / Cr. Revenue Account", "Revenue is now recognized in the Profit and Loss statement", "Open item appears on Alpine Velo account for collection"],
            whyItMatters: "The invoice is when revenue is officially recognized. Under accrual accounting, revenue is earned when goods are delivered - not when cash is received. This invoice creates the receivable that the finance team will monitor and chase for payment within the agreed 45-day window.",
            nextStep: 53
          },
          {
            name: "Incoming Payment", step: 53, out: docs.incomingPayment,
            app: "Post Incoming Payments (F-28)",
            context: "The final step of the Order-to-Cash cycle. When Alpine Velo bank transfer arrives, the accountant posts the incoming payment against the open customer invoice. This clears the Accounts Receivable balance, completing the full cycle from customer creation to cash collection.",
            inputDetails: ["Customer: ALPIN" + sId + " (Alpine Velo)", "Bank Account: 18100999 (House Bank)", "Payment amount: full invoice amount", "Reference billing document from Step 51"],
            outputDetails: ["Incoming payment posted and matched to open invoice", "Accounting: Dr. Bank Account / Cr. Accounts Receivable", "Customer balance cleared to zero - AR closed", "Cash position in G/L bank account increased", "Full Order-to-Cash cycle complete!"],
            whyItMatters: "This is the ultimate goal of the entire SD cycle - cash in the bank. The Days Sales Outstanding (DSO) metric tracks how long this step takes from invoice to payment. Faster collection improves the company working capital position and reduces credit risk.",
            nextStep: null
          }
        ]
      }
    ];

    let html = `
      <div class="bfd-shell">
        <div class="bfd-header">
          <h1 style="display: flex; align-items: center; gap: 12px; font-size: clamp(1.4rem, 2vw, 2rem); flex-wrap: wrap;">
            <span class="material-symbols-outlined" style="color: var(--primary); font-size: 32px;">account_tree</span>
            End-to-End Business Flow Dashboard
          </h1>
          <p style="color: var(--text-muted); margin-top: 8px; font-size: 0.95rem;">
            Click any process node to explore its business purpose, SAP inputs, outputs, and why it matters in the enterprise.
          </p>
        </div>
        <div class="bfd-pipelines">
    `;

    pipelines.forEach((pipe, pIndex) => {
      html += `
        <div class="bfd-pipeline-card card">
          <h3 class="bfd-pipeline-title">
            <span class="material-symbols-outlined">${pipe.icon}</span> ${pipe.title}
          </h3>
          <div class="bfd-pipeline-scroll">
            <div class="bfd-pipeline-inner">
      `;
      pipe.nodes.forEach((node, i) => {
        html += `
              <div class="bfd-node clickable-node" data-pipe="${pIndex}" data-node="${i}">
                <div class="bfd-node-icon">
                  <span class="material-symbols-outlined" style="font-size: 22px;">verified</span>
                </div>
                <div class="bfd-node-name">${node.name}</div>
                ${node.out ? `<div class="bfd-node-doc">${node.out}</div>` : ''}
              </div>
        `;
        if (i < pipe.nodes.length - 1) {
          html += `<div class="bfd-connector"></div>`;
        }
      });
      html += `</div></div></div>`;
    });

    html += `
        </div>
        <div id="flow-details-panel" class="bfd-detail-panel" style="display:none;">
          <div class="bfd-detail-header">
            <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap; justify-content:space-between;">
              <div style="display:flex; align-items:center; gap:12px;">
                <span class="material-symbols-outlined" style="color:var(--primary); font-size:28px;">schema</span>
                <div>
                  <div style="font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:var(--text-muted);" id="fd-cycle">Cycle</div>
                  <h2 id="fd-title" style="font-size:clamp(1.1rem,1.6vw,1.4rem); color:var(--primary); margin:0;">Step Details</h2>
                </div>
              </div>
              <button id="fd-goto-btn" class="btn-fiori-primary" style="display:flex; align-items:center; gap:6px; font-size:0.85rem; padding:8px 18px;">
                <span class="material-symbols-outlined" style="font-size:16px;">open_in_new</span>
                <span>Go to Simulator Step</span>
              </button>
            </div>
          </div>
          <div class="bfd-rich-body">
            <div class="bfd-rich-section bfd-rich-context">
              <div class="bfd-rich-label"><span class="material-symbols-outlined">menu_book</span> Business Context</div>
              <p id="fd-context" class="bfd-rich-text"></p>
            </div>
            <div class="bfd-rich-row">
              <div class="bfd-rich-section">
                <div class="bfd-rich-label"><span class="material-symbols-outlined">input</span> SAP Inputs Required</div>
                <ul id="fd-inputs" class="bfd-rich-list"></ul>
              </div>
              <div class="bfd-rich-section bfd-rich-alt">
                <div class="bfd-rich-label"><span class="material-symbols-outlined">output</span> Generated Outputs</div>
                <ul id="fd-outputs" class="bfd-rich-list"></ul>
              </div>
            </div>
            <div class="bfd-rich-section bfd-rich-why">
              <div class="bfd-rich-label"><span class="material-symbols-outlined">lightbulb</span> Why This Step Matters</div>
              <p id="fd-why" class="bfd-rich-text"></p>
            </div>
            <div class="bfd-rich-section" style="padding:16px 24px; display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
              <span class="material-symbols-outlined" style="color:var(--primary);">grid_view</span>
              <span style="font-size:0.82rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.5px;">SAP Application:</span>
              <code id="fd-app" style="font-size:0.9rem; font-weight:700; color:var(--primary); background:var(--primary-glow); padding:4px 12px; border-radius:8px;"></code>
            </div>
          </div>
        </div>
      </div>
    `;

    main.innerHTML = html;

    if (!document.getElementById("bfd-rich-styles")) {
      const style = document.createElement("style");
      style.id = "bfd-rich-styles";
      style.textContent = `
        .bfd-rich-body { display: flex; flex-direction: column; }
        .bfd-rich-section { padding: 20px 28px; border-bottom: 1px solid var(--border); }
        .bfd-rich-context { background: var(--background); }
        .bfd-rich-alt { background: var(--background); }
        .bfd-rich-why { background: var(--panel-bg); }
        .bfd-rich-row { display: grid; grid-template-columns: 1fr 1fr; border-bottom: 1px solid var(--border); }
        .bfd-rich-row .bfd-rich-section { border-bottom: none; border-right: 1px solid var(--border); }
        .bfd-rich-row .bfd-rich-section:last-child { border-right: none; }
        .bfd-rich-label { display: flex; align-items: center; gap: 8px; font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: var(--primary); margin-bottom: 12px; }
        .bfd-rich-label .material-symbols-outlined { font-size: 16px; }
        .bfd-rich-text { font-size: 0.92rem; line-height: 1.7; color: var(--text-main); margin: 0; }
        .bfd-rich-list { list-style: none; display: flex; flex-direction: column; gap: 8px; margin: 0; padding: 0; }
        .bfd-rich-list li { display: flex; align-items: flex-start; gap: 8px; font-size: 0.88rem; line-height: 1.5; color: var(--text-main); }
        .bfd-rich-list li::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: var(--primary); flex-shrink: 0; margin-top: 6px; }
        @media (max-width: 700px) { .bfd-rich-row { grid-template-columns: 1fr; } .bfd-rich-row .bfd-rich-section { border-right: none; border-bottom: 1px solid var(--border); } }
      `;
      document.head.appendChild(style);
    }

    document.querySelectorAll(".clickable-node").forEach(nodeEl => {
      nodeEl.addEventListener("click", () => {
        document.querySelectorAll(".clickable-node").forEach(n => n.classList.remove("bfd-node-active"));
        nodeEl.classList.add("bfd-node-active");

        const pIndex = nodeEl.getAttribute("data-pipe");
        const nIndex = nodeEl.getAttribute("data-node");
        const data = pipelines[pIndex].nodes[nIndex];
        const pipe = pipelines[pIndex];

        const panel = document.getElementById("flow-details-panel");
        panel.style.display = "block";

        document.getElementById("fd-title").textContent = data.name + "  \u2022  Step " + data.step;
        document.getElementById("fd-cycle").textContent = pipe.title;
        document.getElementById("fd-app").textContent = data.app;
        document.getElementById("fd-context").textContent = data.context;
        document.getElementById("fd-why").textContent = data.whyItMatters;

        const inputsList = document.getElementById("fd-inputs");
        inputsList.innerHTML = data.inputDetails.map(i => `<li>${i}</li>`).join("");

        const outputsList = document.getElementById("fd-outputs");
        outputsList.innerHTML = data.outputDetails.map(o => `<li>${o}</li>`).join("");

        const gotoBtn = document.getElementById("fd-goto-btn");
        gotoBtn.onclick = () => {
          currentActiveStep = data.step;
          renderSidebar();
          renderStep(data.step);
        };

        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
  }

});

