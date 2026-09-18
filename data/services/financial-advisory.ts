import type { Service } from "./types";

export const financialAdvisory: Service = {
  slug: "financial-advisory",
  title: "Financial Advisory",
  teaser: "Strategic guidance for the decisions that matter most.",
  summary:
    "Hands-on financial advisory covering forecasting, valuations, and strategic decision support.",

  heroTagline: "Strategic advice for scalable growth",
  heroImage: "/images/ServicesPage/financial-advisory/Advisary.png",
  heroDescription:
    "Clear, practical financial guidance that helps executive leadership navigate complexity, optimize capital, and make confident business decisions.",

  solutionsHeading: "Comprehensive Financial Advisory Solution",
  solutionsSubtitle:
    "From financial modeling to M&A due diligence, our six-point integrated workflows deliver analytical clarity and strategic foresight so leadership can scale with confidence.",
  solutions: [
    {
      title: "Financial Forecasting & Modeling",
      description:
        "Dynamic financial models projecting multi-scenario revenue, cash requirements, and working capital under varying market conditions.",
      icon: "/images/ServicesPage/icons/full-cycle-bookkeeping.svg",
    },
    {
      title: "Cash Flow & Liquidity Optimization",
      description:
        "Disciplined cash runway management, debtor aging reductions, and liquidity planning to safeguard solvency.",
      icon: "/images/ServicesPage/icons/calendar-close.svg",
    },
    {
      title: "Business Valuation",
      description:
        "Defensible valuations based on DCF, market multiples, and asset methodologies for fundraising, buyouts, or tax restructuring.",
      icon: "/images/ServicesPage/icons/financial-statement.svg",
    },
    {
      title: "M&A Due Diligence & Deal Support",
      description:
        "Rigorous buy-side and sell-side financial due diligence uncovering hidden liabilities and confirming true earnings quality.",
      icon: "/images/ServicesPage/icons/audit-support.svg",
    },
    {
      title: "Budget Planning & Variance Analysis",
      description:
        "Clear departmental budgets and monthly variance dashboards tracking actuals against operational milestones.",
      icon: "/images/ServicesPage/icons/ai-workflow.svg",
    },
    {
      title: "Strategic Board & Stakeholder Advisory",
      description:
        "Executive-level financial presentations and strategic counsel for board members, angel syndicates, and venture funds.",
      icon: "/images/ServicesPage/icons/quality-review.svg",
    },
  ],

  workflowHeading: "Financial Advisory Work-Flow",
  workflowSteps: [
    { step: 1, label: "Discovery & Data Intake" },
    { step: 2, label: "Financial Analysis" },
    { step: 3, label: "Strategy & Roadmap" },
    { step: 4, label: "Advisory Implementation" },
    { step: 5, label: "Periodic Review" },
  ],

  capabilitiesCardTitle: "Strategic, Value-Driven Advisory",
  capabilitiesCardDescription:
    "We build strategic financial models and growth roadmaps that support scaling businesses — tailored to your company's long-term enterprise valuation.",
  capabilitiesHeading: "Key capabilities include:",
  capabilities: [
    "Multi-scenario financial modeling",
    "Multi-currency consolidation and reporting",
    "Cash flow and liquidity planning",
    "Restructuring under industry-standard methodologies",
    "M&A due diligence and deal support",
    "Deep shareholder and board advisory",
    "Exit planning and enterprise valuation",
  ],
  capabilitiesBottomText:
    "We evaluate your capital structure and identify growth bottlenecks. Then we implement robust financial strategies to optimize cash flow, mitigate risk, and maximize shareholder returns.",
  capabilitiesImage: "/images/ServicesPage/financial-advisory/advisary-insights.png",

  whatWeDoHeading: "What we do",
  whatWeDoSubtitle: "Actionable advisory, measurable outcomes",
  whatWeDoIntro:
    "Advisory built on hard numbers and strategic insight, not assumptions.",
  whatWeDo: [
    {
      title: "Financial forecasting & modeling",
      description:
        "Build multi-scenario financial models projected by revenue streams, gross margins, variable costs, headcount projections, and cash consumption.",
    },
    {
      title: "Budget planning & variance analysis",
      description:
        "Budgeting paired with disciplined monthly tracking to keep teams aligned and prevent margin erosion.",
    },
    {
      title: "Business valuation",
      description:
        "Defensible valuations calculated via industry standard methodologies, ready for investor due diligence, audits, or regulatory scrutiny.",
    },
    {
      title: "Budgets are set with benchmark",
      description:
        "Corporate plans, fundraising schedules, and investment models benchmarked against peer groups before deployment.",
    },
  ],
};