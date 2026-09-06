const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}


const projectData = {
  peoplecore: {
    eyebrow: "InsightTera • HRIS",
    title: "InsightTera-PeopleCore HRIS",
    image: "assets/images/projects/peoplecore-hris.svg",
    description: "A human resources information system concept focused on centralizing employee records, HR workflows, and people operations in a structured digital environment.",
    details: ["Centralized employee information and records", "Structured HR workflows and process visibility", "Designed for scalable people operations"]
  },
  governance: {
    eyebrow: "AHA! Behavioral Design • Consultancy",
    title: "IT Asset Management Consultant | Google Workspace & IT Governance",
    image: "assets/images/projects/google-workspace-governance.svg",
    description: "A four-month consultancy covering system audit, governance architecture, centralized asset management, role-based access, documentation, training, and formal system turnover.",
    details: ["Google Workspace and Google Apps Script asset management", "RACI governance, role-based access, and audit logging", "SOP development, user training, and ownership transfer"]
  },
  insighttera: {
    eyebrow: "InsightTera Suite • Custom ERP",
    title: "Insight Tera Suite",
    image: "assets/images/projects/insighttera-erp.svg",
    description: "A custom integrated ERP design created to streamline operations by connecting business processes, operational data, workflows, and management visibility.",
    details: ["Integrated operational modules", "Centralized business data and workflow visibility", "Scalable design for future growth"]
  },
  drs: {
    eyebrow: "Zenith Capital • Document Management",
    title: "DRS - Clients Document Record System 2.0",
    image: "assets/images/projects/drs-2.svg",
    description: "A secure centralized document records system designed to improve storage, retrieval, access control, compliance monitoring, and automated document workflows.",
    details: ["Role-based access and audit logs", "Document categorization, tagging, search, and filtering", "Approval, expiration, access-request, and maturity alerts", "Backup and disaster recovery planning"]
  },
  crm: {
    eyebrow: "Workflow Automation • monday.com + Zapier",
    title: "CRM & ERP Automation using Monday.com & Zapier",
    image: "assets/images/projects/crm-erp-automation.svg",
    description: "Workflow automation initiatives designed to connect sales, customer-management, and operational processes while reducing repetitive manual tasks.",
    details: ["Automated routing and notifications", "Cross-board and cross-system workflow integration", "Improved operational visibility and team collaboration"]
  },
  itam: {
    eyebrow: "JC TechSight Strategies • IT Asset Management",
    title: "IT Asset Management System",
    image: "assets/images/projects/itam-system.svg",
    description: "A hardware-focused IT Asset Management System covering complete asset lifecycle management from acquisition and assignment through maintenance, return, retirement, and disposal.",
    details: ["Centralized hardware inventory", "Asset ownership and transfer history", "Maintenance and lifecycle tracking", "Audit readiness and improved purchasing decisions"]
  }
};

const projectModal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalEyebrow = document.getElementById("modalEyebrow");
const modalDescription = document.getElementById("modalDescription");
const modalImage = document.getElementById("modalImage");
const modalDetails = document.getElementById("modalDetails");

document.querySelectorAll(".view-project-btn").forEach(button => {
  button.addEventListener("click", () => {
    const data = projectData[button.dataset.project];
    if (!data || !projectModal) return;

    modalEyebrow.textContent = data.eyebrow;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalImage.src = data.image;
    modalImage.alt = data.title + " project image";
    modalDetails.innerHTML = `
      <h4>Project Highlights</h4>
      <ul>${data.details.map(item => `<li>${item}</li>`).join("")}</ul>
    `;
    projectModal.classList.add("open");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  });
});

document.querySelectorAll("[data-close-modal]").forEach(button => {
  button.addEventListener("click", () => {
    if (!projectModal) return;
    projectModal.classList.remove("open");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && projectModal?.classList.contains("open")) {
    projectModal.classList.remove("open");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }
});
