import type { Service } from "./types";

export const payrollManagement: Service = {
  slug: "payroll-management",
  title: "Payroll Management",
  teaser:
    "End-to-end payroll administration, employee tax withholding, and statutory compliance handled with total accuracy.",
  summary:
    "Reliable, confidential payroll processing and statutory filings handled on schedule.",

  heroTagline: "Timely compensation, strict compliance",
  heroImage: "/images/ServicesPage/BookKeeping/BookKeeping.png",
  heroDescription:
    "Comprehensive payroll processing that guarantees timely disbursements, accurate statutory deductions, and complete regulatory compliance.",

  solutionsHeading: "Comprehensive Payroll Management Solution",
  solutionsSubtitle:
    "From gross-to-net wage computations to annual employee tax filings, our six-point integrated workflows eliminate processing errors and guarantee on-time pay cycles.",
  solutions: [
    {
      title: "Salary Calculation & Payroll Runs",
      description:
        "Precise calculation of monthly wages, overtime, allowances, bonuses, and reimbursements across complex salary structures.",
      icon: "/images/ServicesPage/icons/full-cycle-bookkeeping.svg",
    },
    {
      title: "Tax Withholding & Filing",
      description:
        "Accurate deduction and timely deposit of employee income tax withholding, accompanied by monthly statutory returns.",
      icon: "/images/ServicesPage/icons/calendar-close.svg",
    },
    {
      title: "EOBI & Social Security Management",
      description:
        "Complete administration of pension, provident fund, and statutory employee benefit contributions.",
      icon: "/images/ServicesPage/icons/financial-statement.svg",
    },
    {
      title: "Direct Deposit & Digital Payslips",
      description:
        "Automated bank transfer file generation and secure, password-protected digital pay slip distribution to employees.",
      icon: "/images/ServicesPage/icons/audit-support.svg",
    },
    {
      title: "Leave & Attendance Integration",
      description:
        "Synchronization of biometric and timesheet attendance data for seamless unpaid leave and overtime adjustments.",
      icon: "/images/ServicesPage/icons/ai-workflow.svg",
    },
    {
      title: "2-Tier Payroll Audit",
      description:
        "Every monthly disbursement ledger is verified by senior payroll accountants before funds are released.",
      icon: "/images/ServicesPage/icons/quality-review.svg",
    },
  ],

  workflowHeading: "Payroll Management Work-Flow",
  workflowSteps: [
    { step: 1, label: "Data Intake" },
    { step: 2, label: "Calculation" },
    { step: 3, label: "Verification" },
    { step: 4, label: "Disbursement" },
    { step: 5, label: "Tax Filing" },
  ],

  capabilitiesCardTitle: "Automated, Confidential Payroll Systems",
  capabilitiesCardDescription:
    "We build automated payroll frameworks tailored to your corporate headcount, branch offices, and statutory obligations.",
  capabilitiesHeading: "Key capabilities include:",
  capabilities: [
    "Automated gross-to-net salary calculation",
    "Employee income tax withholding & returns",
    "Social security, EOBI & pension deductions",
    "Confidential pay slip generation & direct deposits",
    "Multi-tier approval workflows",
    "Annual employer tax certificates",
    "Audit-ready payroll records",
  ],
  capabilitiesBottomText:
    "We assess your existing compensation structure and payroll workflows. Then we implement secure, compliant systems that free up your HR and finance teams.",
  capabilitiesImage: "/images/ServicesPage/BookKeeping/BookKeeping.png",

  whatWeDoHeading: "What we do",
  whatWeDoSubtitle: "Everything your payroll needs, handled",
  whatWeDoIntro:
    "Every payroll cycle is managed with confidentiality, precision, and adherence to labor laws.",
  whatWeDo: [
    {
      title: "Salary & Wage Calculation",
      description:
        "Accurate wage, bonus, commission, and overtime calculation aligned with contract terms and tax schedules.",
    },
    {
      title: "Tax Withholding & Compliance",
      description:
        "Timely calculation and filing of monthly salary withholding tax with tax authorities to prevent penalties.",
    },
    {
      title: "Statutory Deductions & Filings",
      description:
        "Full management of EOBI, social security, provident fund, and statutory employee benefit contributions.",
    },
    {
      title: "Year-End Tax Certificates",
      description:
        "Annual salary certificates and employer tax statements prepared accurately for your employees and board.",
    },
  ],
};
