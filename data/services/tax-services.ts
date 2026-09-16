import type { Service } from "./types";

export const taxServices: Service = {
  slug: "tax-services",
  title: "Tax Services",
  teaser: "Compliant, optimized tax strategy across every jurisdiction.",
  summary:
    "Comprehensive tax compliance and planning services designed to minimize risk and maximize efficiency.",

  heroTagline: "Compliant today, optimized for tomorrow",
  heroImage: "/images/ServicesPage/tax-service/tax-paper.png",
  heroDescription:
    "Comprehensive tax compliance and strategic planning that keeps your organization optimized, protected from penalties, and audit-ready year-round.",

  solutionsHeading: "Comprehensive Tax Solution",
  solutionsSubtitle:
    "From corporate income tax returns to cross-border sales tax structuring, our six-point integrated workflows eliminate costly compliance oversights and optimize tax liabilities.",
  solutions: [
    {
      title: "Corporate Tax Return Filing",
      description:
        "Accurate annual and quarterly income tax returns prepared under domestic regulations, maximizing legal deductions and credits.",
      icon: "/images/ServicesPage/icons/full-cycle-bookkeeping.svg",
    },
    {
      title: "Tax Planning & Strategy",
      description:
        "Proactive year-round tax structuring to minimize effective tax rates legally and align with capital deployment plans.",
      icon: "/images/ServicesPage/icons/calendar-close.svg",
    },
    {
      title: "Sales Tax & VAT Compliance",
      description:
        "Multi-jurisdiction sales tax registration, monthly return filings, input tax credit reconciliation, and audit support.",
      icon: "/images/ServicesPage/icons/financial-statement.svg",
    },
    {
      title: "Withholding Tax Management",
      description:
        "Rigorous verification of withholding tax rates on vendor disbursements and preparation of statutory withholding statements.",
      icon: "/images/ServicesPage/icons/audit-support.svg",
    },
    {
      title: "FBR & Tax Dispute Representation",
      description:
        "Experienced representation before tax authorities for audit notices, assessment orders, and appellate tribunals.",
      icon: "/images/ServicesPage/icons/ai-workflow.svg",
    },
    {
      title: "Cross-Border & Transfer Pricing",
      description:
        "Compliant transfer pricing documentation, arm's length pricing studies, and treaty tax optimization for international operations.",
      icon: "/images/ServicesPage/icons/quality-review.svg",
    },
  ],

  workflowHeading: "Tax Service Work-Flow",
  workflowSteps: [
    { step: 1, label: "Determination" },
    { step: 2, label: "Tax Position Review" },
    { step: 3, label: "Planning & Optimization" },
    { step: 4, label: "Filing" },
    { step: 5, label: "Ongoing Monitoring" },
  ],

  capabilitiesCardTitle: "Proactive, Optimized Tax Planning",
  capabilitiesCardDescription:
    "We build comprehensive tax planning and compliance frameworks that protect your bottom line — tailored to multi-jurisdiction and international operations.",
  capabilitiesHeading: "Key capabilities include:",
  capabilities: [
    "Corporate and individual tax filing",
    "Proactive year-round tax planning",
    "VAT / sales tax compliance",
    "Representation during tax authority audits",
    "Deadline tracking and compliance calendars",
    "Audit-ready records at every stage",
    "Direct communication on every deliverable",
  ],
  capabilitiesBottomText:
    "We evaluate your current tax positioning and identify potential exposure. Then we implement proactive procedures to safeguard your wealth, optimize filings, and eliminate compliance surprises.",
  capabilitiesImage: "/images/ServicesPage/tax-service/tax-planning.png",

  whatWeDoHeading: "What we do",
  whatWeDoSubtitle: "Everything your books need, handled",
  whatWeDoIntro:
    "Comprehensive tax execution covering all seasons of the year, not just at tax deadline time.",
  whatWeDo: [
    {
      title: "Tax return preparation",
      description:
        "Corporate and individual returns are prepared with meticulous calculation, ensuring all legal deductions and allowances are maximized without triggering audit red flags.",
    },
    {
      title: "Tax planning & advisory",
      description:
        "Strategic counsel on corporate restructuring, asset acquisitions, and distribution timing to minimize effective taxes across financial periods.",
    },
    {
      title: "VAT / Indirect tax compliance",
      description:
        "Registration, reconciliation, and monthly return preparation, ensuring your business stays strictly compliant with sales tax rules.",
    },
    {
      title: "Regulatory representation",
      description:
        "Standing alongside your team during tax authority examinations, audit inquiries, and assessment appeals, protecting your commercial interests.",
    },
  ],
};