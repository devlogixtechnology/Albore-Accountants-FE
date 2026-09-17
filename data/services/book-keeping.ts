import type { Service } from "./types";

export const bookKeeping: Service = {
  slug: "book-keeping",
  title: "Book Keeping",
  teaser:
    "Accurate day-to-day record keeping and month-end closes, so your accounts are always ready for review, lending, or filing.",
  summary:
    "Reliable, ongoing bookkeeping so your financials are always audit-ready.",

  // Section 1: Hero
  heroTagline: "Accurate record, better Descion",
  heroImage: "/images/ServicesPage/BookKeeping/BookKeeping.png",
  heroDescription:
    "Introduce the bookkeeping service and immediately communicate its main value: accurate records, better financial clarity, and confident decisions.",

  // Section 2: 6-Card Solutions Grid
  solutionsHeading: "Comprehensive BookKeeping Solution",
  solutionsSubtitle:
    "From daily transaction recording to IFRS-compliant financial statements, our AI-integrated workflows eliminate repetitive tasks while our 3-tier review ensures every deliverable meets institutional standards.",
  solutions: [
    {
      title: "Full-Cycle Bookkeeping",
      description:
        "Daily transaction recording, bank reconciliation, accounts payable & receivable, managed end to end so your books are always audit-ready.",
      icon: "/images/ServicesPage/icons/full-cycle-bookkeeping.svg",
    },
    {
      title: "Month-End & Year-End Close",
      description:
        "Structured close processes with checklists and sign-off protocols. We deliver accurate, timely closes every cycle.",
      icon: "/images/ServicesPage/icons/calendar-close.svg",
    },
    {
      title: "Financial Statement Preparation",
      description:
        "Monthly accounts, annual accounts, and audit-ready financial statements prepared under IFRS and applicable GAAPs.",
      icon: "/images/ServicesPage/icons/financial-statement.svg",
    },
    {
      title: "Audit Support & Liaison",
      description:
        "Full preparation for external audits including workpaper compilation, auditor liaison, and query resolution.",
      icon: "/images/ServicesPage/icons/audit-support.svg",
    },
    {
      title: "AI-Integrated Workflows",
      description:
        "We have integrated AI into our systems to streamline repetitive tasks. You don't pay for labour hours, AI handles the routine so our experts focus on quality.",
      icon: "/images/ServicesPage/icons/ai-workflow.svg",
    },
    {
      title: "3-Tier Quality Review",
      description:
        "Every deliverable goes through 3 levels of review: Dedicated Senior Resource → Manager → Director & CEO, ensuring top-notch quality.",
      icon: "/images/ServicesPage/icons/quality-review.svg",
    },
  ],

  // Section 3: 5-Step Workflow
  workflowHeading: "Bookkeeping Work-Flow",
  workflowSteps: [
    { step: 1, label: "Gather Document" },
    { step: 2, label: "Data Entry" },
    { step: 3, label: "Reconciliation" },
    { step: 4, label: "Track Expenses" },
    { step: 5, label: "Financial reporting" },
  ],

  // Section 4: Key Capabilities
  capabilitiesCardTitle: "Precise, Scalable Bookkeeping Systems",
  capabilitiesCardDescription:
    "We build reconciliation and reporting systems that support multi-entity, multi-currency businesses — tailored to how your company actually operates.",
  capabilitiesHeading: "Key capabilities include:",
  capabilities: [
    "Full-cycle bookkeeping across multiple entities",
    "Multi-currency reconciliation and reporting",
    "Real-time dashboards via AI-integrated workflows",
    "Bank feed integration and automated categorisation",
    "Structured month-end and year-end close",
    "Audit-ready records at every stage",
    "3-tier internal quality review on every deliverable",
  ],
  capabilitiesBottomText:
    "We assess your current bookkeeping setup and identify structural gaps. Then we implement the right systems to keep your books accurate, current, and audit-ready.",
  capabilitiesImage: "/images/ServicesPage/BookKeeping/BookKeepingCover.png",

  // Section 5: What We Do (Staggered Timeline)
  whatWeDoHeading: "What we do",
  whatWeDoSubtitle: "Everything your books need, handled",
  whatWeDoIntro:
    "Every audit engagement runs on tested procedures — nothing is left to assumption.",
  whatWeDo: [
    {
      title: "Daily transaction recording",
      description:
        "Every sale, expense, and transfer is logged as it happens, so your ledger never falls behind and month-end never turns into a scramble. Transactions are categorized correctly from the start, keeping your records clean and ready for reporting at any time.",
    },
    {
      title: "Bank and account reconciliation",
      description:
        "We match every entry against bank and card statements each cycle, catching mismatches early instead of letting them compound. This keeps your books accurate and gives you confidence that every number reflects reality.",
    },
    {
      title: "Financial statement preparation",
      description:
        "Monthly income statements, balance sheets, and cash flow reports are prepared under IFRS so leadership always has a clear lens. Reports are delivered on time, every time, so decisions are never made on outdated numbers.",
    },
    {
      title: "Audit support and compliance",
      description:
        "Records are kept audit-ready year-round, with documentation organized for external auditors and regulatory review. When audit season arrives, there's no scramble — everything is already in order and easy to hand over.",
    },
  ],
};