import { industryItems } from "./industries";
import { industriesData } from "@/data/contactData";

// -----------------------------------------------------------------------------
// 1. TypeScript Contracts
// -----------------------------------------------------------------------------

export interface FocusItem {
  icon: string;
  title: string;
  description: string;
}

export interface SolutionItem {
  title: string;
  description: string;
  deliverables: string[];
  ctaText: string;
  ctaHref: string;
}

export interface PartnerPillar {
  icon?: string;
  svgIcon?: string;
  title: string;
  description: string;
}

export interface IndustryDetailData {
  slug: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  heroImage: string;
  heroCta: {
    label: string;
    href: string;
  };
  focusHeading: string;
  focusItems: FocusItem[];
  solutionsHeading: string;
  solutions: SolutionItem[];
  whyPartnerHeading: string;
  whyPartnerSubtitle: string;
  partnerPillars: PartnerPillar[];
  metaTitle?: string;
  metaDescription?: string;
}

// -----------------------------------------------------------------------------
// 2. Slug Aliases Map (Guarantees all site links resolve seamlessly)
// -----------------------------------------------------------------------------

export const slugAliases: Record<string, string> = {
  "retail-trade": "retail-and-trade",
  "retail-and-trade": "retail-and-trade",
  "manufacturing-logistics": "manufacturing",
  "manufacturing": "manufacturing",
  "energy-resources": "energy-and-resources",
  "energy-and-resources": "energy-and-resources",
  "technology-media": "technology-media",
  "technology-and-media": "technology-media",
  "real-estate": "real-estate",
  "financial-services": "financial-services",
};

// -----------------------------------------------------------------------------
// 3. Curated Industry Records
// -----------------------------------------------------------------------------

export const industryDetailsMap: Record<string, IndustryDetailData> = {
  "retail-and-trade": {
    slug: "retail-and-trade",
    title: "Retail and Trade",
    subtitle: "Smart finance for a fast-moving industry.",
    heroDescription:
      "We help retailers, wholesalers, and e-commerce businesses gain control of their numbers, improve operational efficiency, and build a strong foundation for sustainable growth.",
    heroImage: "/industrypage/IndsutryStandaloneHeroBg.png",
    heroCta: {
      label: "Get Started",
      href: "#solutions",
    },
    focusHeading: "Industry Focus",
    focusItems: [
      {
        icon: "ShoppingCart",
        title: "Domain Knowledge",
        description:
          "Deep understanding of retail and trade business models and challenges.",
      },
      {
        icon: "TrendingUp",
        title: "Actionable Insights",
        description:
          "Clear reporting and analytics to help you make confident business decisions.",
      },
      {
        icon: "Shield",
        title: "Compliance Assured",
        description:
          "Stay compliant with tax and regulatory requirements, without the stress.",
      },
      {
        icon: "Users",
        title: "Growth Focused",
        description:
          "Practical strategies that improve cash flow, margins, and long-term value.",
      },
    ],
    solutionsHeading: "Explore Our Solutions",
    solutions: [
      {
        title: "Streamline Operations",
        description:
          "We analyze your operations and inventory workflows to identify points of friction and inefficiency, helping you implement scalable processes that reduce waste and increase throughput.",
        deliverables: [
          "Automate manual bookkeeping",
          "Stock and inventory alignment",
          "Real-time margin tracking",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
      {
        title: "Elevate Profitability",
        description:
          "Gain full visibility into your gross margins and direct costs across products and channels to understand where you make money and where you lose it, so you can make informed decisions.",
        deliverables: [
          "Margin by SKU optimization",
          "Supplier contract management",
          "Working capital forecasting",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
      {
        title: "Regulatory Assurance",
        description:
          "Navigate complex retail sales taxes, employment regulations, and statutory compliance without disruption to your daily business. We provide peace of mind so you can focus on serving your customers.",
        deliverables: [
          "Multi-jurisdiction VAT & sales tax",
          "Statutory payroll compliance",
          "HMRC liaison & audit defense",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
      {
        title: "Working Capital & Inventory Financing",
        description:
          "Unlock tied-up cash in stock and receivables with structured trade financing models, optimized payment terms, and dynamic cash-cycle management.",
        deliverables: [
          "Cash conversion cycle acceleration",
          "Revolving inventory credit lines",
          "Seasonal purchase order financing",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
    ],
    whyPartnerHeading: "Why Partner With Us",
    whyPartnerSubtitle: "Built around the way modern businesses operate.",
    partnerPillars: [
      {
        svgIcon: "/Icons/industryStandalone/institution.svg",
        icon: "institution",
        title: "Established Financial Governance",
        description:
          "Institutional-grade accounting rigor, senior partner oversight, and audit-ready reporting built for complex businesses.",
      },
      {
        svgIcon: "/Icons/industryStandalone/execution.svg",
        icon: "execution",
        title: "Disciplined Execution",
        description:
          "Relentless attention to operational detail, proactive cash reconciliations, and on-time statutory delivery without friction.",
      },
      {
        svgIcon: "/Icons/industryStandalone/solutions.svg",
        icon: "solutions",
        title: "Tailored Sector Solutions",
        description:
          "Accounting systems designed specifically for high-velocity transaction volumes, inventory cycles, and omnichannel commerce.",
      },
      {
        svgIcon: "/Icons/industryStandalone/goal.svg",
        icon: "goal",
        title: "Goal-Aligned Partnership",
        description:
          "Strategic advisory that aligns financial performance with your long-term growth, margin targets, and valuation objectives.",
      },
    ],
    metaTitle: "Retail and Trade Accounting & Financial Advisory | Albore",
    metaDescription:
      "Expert accounting, inventory reconciliations, and financial advisory for retail, wholesale, and e-commerce businesses.",
  },

  manufacturing: {
    slug: "manufacturing",
    title: "Manufacturing",
    subtitle: "Precision accounting for modern production.",
    heroDescription:
      "Guiding manufacturing plants and industrial operators through cost allocation, capital asset depreciation, supply chain workflows, and project yield optimization.",
    heroImage: "/industrypage/IndsutryStandaloneHeroBg.png",
    heroCta: {
      label: "Get Started",
      href: "#solutions",
    },
    focusHeading: "Industry Focus",
    focusItems: [
      {
        icon: "Factory",
        title: "Cost Accounting",
        description:
          "Accurate bill of materials (BOM), scrap monitoring, and labor allocation to calculate true product unit costs.",
      },
      {
        icon: "BarChart3",
        title: "Capacity Planning",
        description:
          "Evaluate production machine utilization against output margins to optimize capital expenditure and cash flow.",
      },
      {
        icon: "ShieldCheck",
        title: "R&D Tax Incentives",
        description:
          "Unlock innovation credits and patent allowances while maintaining full statutory compliance with HMRC guidelines.",
      },
      {
        icon: "TrendingUp",
        title: "Supply Chain Resilience",
        description:
          "Manage vendor terms, raw material hedging, and dynamic inventory valuation for uninterrupted operations.",
      },
    ],
    solutionsHeading: "Explore Our Solutions",
    solutions: [
      {
        title: "Plant & Machinery Depreciation",
        description:
          "Maximize capital allowances and tax depreciation on high-value machinery, robotics, and physical equipment investments.",
        deliverables: [
          "Super-deduction and annual investment allowances",
          "Fixed asset register modernization",
          "Equipment leasing cost analysis",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
      {
        title: "Inventory & Work-in-Progress",
        description:
          "Real-time visibility into raw materials, WIP, and finished goods to eliminate variance write-offs at fiscal year-end.",
        deliverables: [
          "Automated WIP valuation models",
          "Standard-to-actual variance audits",
          "Cycle count accounting frameworks",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
      {
        title: "Industrial Growth Strategy",
        description:
          "Structured financial modeling to scale production lines, acquire facilities, or negotiate institutional credit facilities.",
        deliverables: [
          "Capacity expansion feasibility",
          "Working capital credit lines",
          "M&A and plant acquisition advisory",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
    ],
    whyPartnerHeading: "Why Partner With Us",
    whyPartnerSubtitle: "Built around the way modern industrial enterprises operate.",
    partnerPillars: [
      {
        icon: "Users",
        title: "Direct Access to Senior Partners",
        description:
          "Engage directly with chartered manufacturing specialists who understand factory floors and cost-center accounting.",
      },
      {
        icon: "Cpu",
        title: "ERP & Production Integration",
        description:
          "Direct integration with SAP, NetSuite, and specialized shop-floor ERPs for seamless reconciliation.",
      },
      {
        icon: "Sliders",
        title: "Bespoke Margin Models",
        description:
          "Custom financial structures adapted to batch, continuous, or job-order manufacturing environments.",
      },
      {
        icon: "FileCheck2",
        title: "Rigorous Compliance",
        description:
          "Comprehensive support with statutory audits, carbon reporting, and international trade tariffs.",
      },
    ],
    metaTitle: "Manufacturing Accounting & Advisory Services | Albore",
    metaDescription:
      "Cost accounting, plant asset depreciation, and R&D tax incentives tailored for mid-market manufacturing companies.",
  },

  "real-estate": {
    slug: "real-estate",
    title: "Real Estate",
    subtitle: "Strategic finance for property portfolios and development.",
    heroDescription:
      "Providing specialized project accounting, capital asset depreciation, lease management, and tax restructuring to optimize yield across property portfolios and developments.",
    heroImage: "/industrypage/IndsutryStandaloneHeroBg.png",
    heroCta: {
      label: "Get Started",
      href: "#solutions",
    },
    focusHeading: "Industry Focus",
    focusItems: [
      {
        icon: "Building2",
        title: "Portfolio Optimization",
        description:
          "Comprehensive asset tracking and yield calculations across commercial, industrial, and multi-family holdings.",
      },
      {
        icon: "BarChart3",
        title: "Cash Flow Forecasts",
        description:
          "Dynamic modeling of debt service coverage ratios (DSCR), tenant rent rolls, and seasonal vacancy buffers.",
      },
      {
        icon: "ShieldCheck",
        title: "Tax Structuring & SPVs",
        description:
          "Tax-efficient special purpose vehicle (SPV) architectures, stamp duty mitigation, and capital allowances.",
      },
      {
        icon: "TrendingUp",
        title: "Development Financing",
        description:
          "Feasibility appraisal, drawdown accounting, and mezzanine funding management for construction projects.",
      },
    ],
    solutionsHeading: "Explore Our Solutions",
    solutions: [
      {
        title: "SPV & Corporate Structuring",
        description:
          "Establish robust corporate holding structures for property acquisitions to safeguard assets and optimize corporation tax.",
        deliverables: [
          "SPV incorporation and structuring",
          "Capital gains tax mitigation plans",
          "Inter-company loan accounting",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
      {
        title: "Capital Allowances & Reliefs",
        description:
          "Identify embedded fixtures and qualifying commercial building expenditure to generate substantial cash tax savings.",
        deliverables: [
          "Commercial property fixture audits",
          "Land remediation tax relief",
          "Structures and buildings allowances (SBA)",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
      {
        title: "Development & Construction Accounting",
        description:
          "End-to-end development appraisals, construction phase drawdowns, and contractor CIS compliance management.",
        deliverables: [
          "Construction Industry Scheme (CIS) filings",
          "Gross development value (GDV) monitoring",
          "Joint venture waterfall profit models",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
    ],
    whyPartnerHeading: "Why Partner With Us",
    whyPartnerSubtitle: "Built around the way property investors and developers operate.",
    partnerPillars: [
      {
        icon: "Users",
        title: "Direct Access to Senior Partners",
        description:
          "Collaborate with chartered accountants with extensive real estate transaction and advisory backgrounds.",
      },
      {
        icon: "Cpu",
        title: "Property Management Software Sync",
        description:
          "Direct synchronization with Yardi, MRI, Re-Leased, and Arthur Online for zero-effort rent reconciliation.",
      },
      {
        icon: "Sliders",
        title: "Flexible Financing Guidance",
        description:
          "Tailored reporting frameworks designed specifically to satisfy institutional lenders and private investors.",
      },
      {
        icon: "FileCheck2",
        title: "Proactive SDLT & VAT Advice",
        description:
          "Navigate Option to Tax, reverse charge VAT, and Stamp Duty Land Tax complexities with complete confidence.",
      },
    ],
    metaTitle: "Real Estate & Property Accounting Advisory | Albore",
    metaDescription:
      "Specialized accounting, SPV tax structuring, capital allowances, and development appraisal for real estate professionals.",
  },

  "financial-services": {
    slug: "financial-services",
    title: "Financial Services",
    subtitle: "Resilient accounting and compliance for modern finance.",
    heroDescription:
      "Connecting insight and experience to build stronger, more resilient financial operations across banking, insurance, investment management, and private equity.",
    heroImage: "/industrypage/IndsutryStandaloneHeroBg.png",
    heroCta: {
      label: "Get Started",
      href: "#solutions",
    },
    focusHeading: "Industry Focus",
    focusItems: [
      {
        icon: "Landmark",
        title: "Regulatory Reporting",
        description:
          "Streamlined statutory reporting frameworks aligned with regulatory requirements, capital adequacy, and liquidity ratios.",
      },
      {
        icon: "BarChart3",
        title: "Fund & Portfolio Accounting",
        description:
          "Accurate net asset value (NAV) calculations, carried interest models, and LP reporting for investment funds.",
      },
      {
        icon: "ShieldCheck",
        title: "Governance & Controls",
        description:
          "Internal audit readiness, SOX/compliance frameworks, and automated control verification for risk mitigation.",
      },
      {
        icon: "TrendingUp",
        title: "Capital Optimization",
        description:
          "Working capital and treasury management strategies to optimize yield while staying comfortably within liquidity covenants.",
      },
    ],
    solutionsHeading: "Explore Our Solutions",
    solutions: [
      {
        title: "Fund Administration & NAV Support",
        description:
          "Independent accounting support, portfolio valuation reconciliations, and capital call management for syndicates and funds.",
        deliverables: [
          "Periodic NAV calculation oversight",
          "Waterfall distribution schedules",
          "Investor statement preparation",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
      {
        title: "Regulatory Reporting & Compliance",
        description:
          "Ensure ongoing compliance with financial regulatory authorities, prudential capital requirements, and annual returns.",
        deliverables: [
          "Prudential capital adequacy reporting",
          "Client money (CASS) review readiness",
          "FATCA and CRS reporting support",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
      {
        title: "Tax Governance & Structuring",
        description:
          "International tax planning, withholding tax recovery, and partnership tax return filings for complex investment vehicles.",
        deliverables: [
          "Carried interest tax planning",
          "Cross-border treaty relief advisory",
          "Partnership & corporate tax returns",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
    ],
    whyPartnerHeading: "Why Partner With Us",
    whyPartnerSubtitle: "Built around institutional standards of precision and confidentiality.",
    partnerPillars: [
      {
        icon: "Users",
        title: "Direct Access to Senior Partners",
        description:
          "Direct partnership with specialists versed in financial services regulations and institutional standards.",
      },
      {
        icon: "Cpu",
        title: "Enterprise Systems Sync",
        description:
          "Robust integration with institutional core banking, custodial feeds, and portfolio accounting systems.",
      },
      {
        icon: "Sliders",
        title: "Custom Reporting Packages",
        description:
          "Board-ready and investor-ready reporting packs customized to your fund or firm's exact specifications.",
      },
      {
        icon: "FileCheck2",
        title: "Stringent Audit Readiness",
        description:
          "Clean workpapers and audit trail documentation that simplify external audit cycles and regulator inquiries.",
      },
    ],
    metaTitle: "Financial Services Accounting & Advisory | Albore",
    metaDescription:
      "Specialist accounting, regulatory compliance, and fund administration for asset managers, fintechs, and financial firms.",
  },

  "energy-and-resources": {
    slug: "energy-and-resources",
    title: "Energy & Resources",
    subtitle: "Navigate transition, compliance, and capital expenditure.",
    heroDescription:
      "Partnering with companies across chemicals, utilities, renewables, and mining to illuminate opportunities, manage compliance costs, and streamline operations.",
    heroImage: "/industrypage/IndsutryStandaloneHeroBg.png",
    heroCta: {
      label: "Get Started",
      href: "#solutions",
    },
    focusHeading: "Industry Focus",
    focusItems: [
      {
        icon: "Zap",
        title: "Renewables Transition",
        description:
          "Financial modeling for clean energy infrastructure, power purchase agreements (PPAs), and grid connectivity.",
      },
      {
        icon: "BarChart3",
        title: "CapEx Monitoring",
        description:
          "Rigorous tracking of major exploration, drilling, or renewable plant capital expenditure against project budgets.",
      },
      {
        icon: "ShieldCheck",
        title: "ESG & Carbon Compliance",
        description:
          "Transparent accounting for carbon offset credits, emissions quotas, and environmental reporting standards.",
      },
      {
        icon: "TrendingUp",
        title: "Tax Incentives & Grants",
        description:
          "Capture green investment tax reliefs, renewable energy allowances, and governmental enterprise grants.",
      },
    ],
    solutionsHeading: "Explore Our Solutions",
    solutions: [
      {
        title: "Project & Capital Expenditure Accounting",
        description:
          "Accurate cost tracking through exploration, development, commissioning, and decommissioning lifecycles.",
        deliverables: [
          "Depletion and amortization schedules",
          "Joint venture cost billing audits",
          "Decommissioning provision accounting",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
      {
        title: "Green Energy Reliefs & Subsidies",
        description:
          "Leverage government initiatives and green tax credits designed to stimulate decarbonization and sustainable development.",
        deliverables: [
          "Enhanced capital allowances on green tech",
          "Climate Change Levy (CCL) management",
          "Renewable energy tariff administration",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
      {
        title: "Joint Venture & Asset Advisory",
        description:
          "Ensure transparent accounting and equitable cost sharing across complex consortiums, concessions, and asset pools.",
        deliverables: [
          "Joint venture cash calls and billing",
          "Concession agreement financial models",
          "Farm-in and farm-out tax advisory",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
    ],
    whyPartnerHeading: "Why Partner With Us",
    whyPartnerSubtitle: "Engineered for high-capital, high-scrutiny energy sectors.",
    partnerPillars: [
      {
        icon: "Users",
        title: "Direct Access to Senior Partners",
        description:
          "Direct consultation with partners experienced in resource lifecycles, commodity pricing, and transition finance.",
      },
      {
        icon: "Cpu",
        title: "Integrated Asset Management",
        description:
          "Seamless data flow between engineering project trackers and multi-currency general ledgers.",
      },
      {
        icon: "Sliders",
        title: "Lifecycle-Specific Models",
        description:
          "Financial architectures that adapt from initial capital expenditure through long-term cash flow generation.",
      },
      {
        icon: "FileCheck2",
        title: "Environmental Tax Compliance",
        description:
          "Ahead-of-the-curve compliance with evolving statutory carbon schemes and environmental legislation.",
      },
    ],
    metaTitle: "Energy & Resources Accounting Advisory | Albore",
    metaDescription:
      "Capital project accounting, green tax credits, and joint venture financial management for energy and resources businesses.",
  },

  "technology-media": {
    slug: "technology-media",
    title: "Technology & Media",
    subtitle: "Financial agility for high-growth tech innovators.",
    heroDescription:
      "Guiding software, SaaS, digital media, and technology enterprises through R&D tax incentives, revenue recognition, capital funding, and international expansion.",
    heroImage: "/industrypage/IndsutryStandaloneHeroBg.png",
    heroCta: {
      label: "Get Started",
      href: "#solutions",
    },
    focusHeading: "Industry Focus",
    focusItems: [
      {
        icon: "Laptop",
        title: "R&D Tax Relief",
        description:
          "Maximize research and development tax credits and patent box claims under HMRC guidelines.",
      },
      {
        icon: "BarChart3",
        title: "Revenue Recognition",
        description:
          "Specialized IFRS 15 / ASC 606 multi-element contract and subscription ARR accounting.",
      },
      {
        icon: "ShieldCheck",
        title: "IP & Global Tax",
        description:
          "Tax-efficient intellectual property structuring and cross-border expansion planning.",
      },
      {
        icon: "TrendingUp",
        title: "Venture & Seed Capital",
        description:
          "Cap table management, EIS/SEIS compliance, and board-ready investor metric packs.",
      },
    ],
    solutionsHeading: "Explore Our Solutions",
    solutions: [
      {
        title: "SaaS Metrics & ARR Modeling",
        description:
          "Real-time tracking of MRR, CAC, LTV, and churn rates to satisfy Series A-C venture investors and scale sustainably.",
        deliverables: [
          "SaaS cohort and retention modeling",
          "Automated recurring revenue reconciliations",
          "Unit economics dashboard integration",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
      {
        title: "R&D Tax Credit Optimization",
        description:
          "Audit-proof technical narratives and software engineering cost allocation to unlock cash tax refunds and credits.",
        deliverables: [
          "Technical innovation qualification",
          "Subcontractor cost apportionment",
          "HMRC technical liaison defense",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
      {
        title: "Global Expansion & Nexus",
        description:
          "Cross-border tax compliance, transfer pricing, and VAT/sales tax registration for digital products and overseas teams.",
        deliverables: [
          "US sales tax & nexus evaluation",
          "International transfer pricing policies",
          "Digital services VAT/GST compliance",
        ],
        ctaText: "View More",
        ctaHref: "/contact",
      },
    ],
    whyPartnerHeading: "Why Partner With Us",
    whyPartnerSubtitle: "Engineered for rapid growth, venture funding, and innovation.",
    partnerPillars: [
      {
        icon: "Users",
        title: "Direct Access to Senior Partners",
        description:
          "Collaborate with partners experienced in software scaling, cap table mechanics, and VC due diligence.",
      },
      {
        icon: "Cpu",
        title: "Modern Tech Stack Integration",
        description:
          "Seamless integration with Stripe, Chargebee, Xero, and GitHub for automated billing reconciliation.",
      },
      {
        icon: "Sliders",
        title: "Tailored SaaS & Media Solutions",
        description:
          "Custom financial architectures configured for bootstrapping, angel rounds, or institutional VC backing.",
      },
      {
        icon: "FileCheck2",
        title: "Proactive Global Compliance",
        description:
          "Zero surprises with international employment regulations, option pools, and international tax treaties.",
      },
    ],
    metaTitle: "Technology & Media Accounting & Advisory | Albore",
    metaDescription:
      "R&D tax credits, SaaS revenue recognition, and venture capital accounting advisory for technology and media companies.",
  },
};

// -----------------------------------------------------------------------------
// 4. Fallback Resolver
// -----------------------------------------------------------------------------

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Resolves industry details by slug.
 * Supports canonical slugs, slug variations, aliases (e.g. retail-trade <=> retail-and-trade),
 * industryItems from industries.ts, and industriesData from contactData.ts.
 */
export function getIndustryDetails(rawSlug: string): IndustryDetailData | null {
  if (!rawSlug) return null;

  const normalized = decodeURIComponent(rawSlug)
    .toLowerCase()
    .trim()
    .replace(/^\/+|\/+$/g, "");

  // 1. Check alias resolution
  const mappedSlug = slugAliases[normalized] || normalized;

  // 2. Direct lookup in curated map
  if (industryDetailsMap[mappedSlug]) {
    const data = industryDetailsMap[mappedSlug];
    return { ...data, slug: normalized };
  }

  // 3. Normalized variations
  const variations = [
    mappedSlug,
    normalized,
    normalized.replace(/-and-/g, "-"),
    normalized.replace(/-/g, "-and-"),
  ];

  for (const v of variations) {
    if (industryDetailsMap[v]) {
      return { ...industryDetailsMap[v], slug: normalized };
    }
  }

  // 4. Match against industryItems in industries.ts
  const matchedItem = industryItems.find((item) => {
    const itemSlug = item.readMoreHref
      .replace(/^\/industries\//, "")
      .replace(/^\/+|\/+$/g, "");
    return (
      itemSlug === normalized ||
      itemSlug === mappedSlug ||
      slugAliases[itemSlug] === mappedSlug ||
      slugify(item.title) === normalized ||
      slugify(item.title) === mappedSlug
    );
  });

  if (matchedItem) {
    return {
      slug: normalized,
      title: matchedItem.title,
      subtitle: `Expert financial solutions for the ${matchedItem.title} sector.`,
      heroDescription: matchedItem.description,
      heroImage: "/industrypage/IndsutryStandaloneHeroBg.png",
      heroCta: {
        label: "Get Started",
        href: "#solutions",
      },
      focusHeading: "Industry Focus",
      focusItems: [
        {
          icon: "LineChart",
          title: "Strategic Financial Control",
          description: `Clear financial structures tailored to ${matchedItem.title} operating models.`,
        },
        {
          icon: "BarChart3",
          title: "Actionable Insights",
          description:
            "Turn complex numbers into forward-looking decisions that improve margins and cash flow.",
        },
        {
          icon: "ShieldCheck",
          title: "Compliance Assured",
          description:
            "Stay ahead of statutory deadlines, reporting mandates, and evolving tax regulations.",
        },
        {
          icon: "TrendingUp",
          title: "Sustainable Growth",
          description:
            "Scalable financial processes that support steady expansion and long-term valuation.",
        },
      ],
      solutionsHeading: "Explore Our Solutions",
      solutions: [
        {
          title: "Operational Efficiency",
          description:
            "Modernizing workflows and financial controls to eliminate friction and elevate organizational performance.",
          deliverables: [
            "Workflow automation & software sync",
            "Monthly management reporting",
            "Direct cost optimization",
          ],
          ctaText: "View More",
          ctaHref: "/contact",
        },
        {
          title: "Profitability & Forecasting",
          description:
            "Comprehensive margin analysis, rolling cash flow projections, and working capital advisory.",
          deliverables: [
            "Revenue driver breakdown",
            "13-week rolling cash flow forecasts",
            "Vendor contract benchmarking",
          ],
          ctaText: "View More",
          ctaHref: "/contact",
        },
        {
          title: "Statutory & Tax Governance",
          description:
            "Proactive corporate tax planning, audit preparation, and full regulatory liaison for complete confidence.",
          deliverables: [
            "Corporate tax structuring",
            "Year-end statutory accounts",
            "Regulatory compliance liaison",
          ],
          ctaText: "View More",
          ctaHref: "/contact",
        },
      ],
      whyPartnerHeading: "Why Partner With Us",
      whyPartnerSubtitle: "Built around the way modern businesses operate.",
      partnerPillars: [
        {
          icon: "Users",
          title: "Direct Access to Senior Partners",
          description:
            "Collaborate with experienced partners who understand your business model inside and out.",
        },
        {
          icon: "Cpu",
          title: "Modern Tech Integration",
          description:
            "Seamless cloud accounting integration with your operational software stack.",
        },
        {
          icon: "Sliders",
          title: "Tailored Solutions",
          description:
            "Custom-crafted service packages designed to match your stage of growth and business goals.",
        },
        {
          icon: "FileCheck2",
          title: "Proactive Compliance",
          description:
            "Zero surprises. Continuous tax planning and forward-looking risk management.",
        },
      ],
      metaTitle: `${matchedItem.title} Accounting & Advisory | Albore Accountants`,
      metaDescription: matchedItem.description,
    };
  }

  // 5. Match against industriesData in contactData.ts
  const contactItem = industriesData.find((item) => {
    const itemSlug = (item.link || item.href || "")
      .replace(/^\/industries\//, "")
      .replace(/^\/+|\/+$/g, "");
    return (
      itemSlug === normalized ||
      itemSlug === mappedSlug ||
      slugify(item.title) === normalized ||
      slugify(item.title) === mappedSlug
    );
  });

  if (contactItem) {
    return {
      slug: normalized,
      title: contactItem.title,
      subtitle: `Specialized advisory & financial accounting for ${contactItem.title}.`,
      heroDescription: contactItem.solution,
      heroImage: "/industrypage/IndsutryStandaloneHeroBg.png",
      heroCta: {
        label: "Get Started",
        href: "#solutions",
      },
      focusHeading: "Industry Focus",
      focusItems: [
        {
          icon: "LineChart",
          title: "Sector Financial Architecture",
          description: `Strategic financial reporting and accounting structures built for ${contactItem.title}.`,
        },
        {
          icon: "BarChart3",
          title: "Data-Driven Margin Analysis",
          description:
            "Gain full visibility into profitability drivers, cash flows, and operational costs.",
        },
        {
          icon: "ShieldCheck",
          title: "Regulatory & Tax Assurance",
          description:
            "Audit-ready statutory accounts, payroll compliance, and proactive corporate tax mitigation.",
        },
        {
          icon: "TrendingUp",
          title: "Scalable Advisory",
          description:
            "Continuous forecasting and working capital advisory to support long-term capital expansion.",
        },
      ],
      solutionsHeading: "Explore Our Solutions",
      solutions: [
        {
          title: "Operational Modernization",
          description: contactItem.solution,
          deliverables: [
            "Automated cloud reconciliations",
            "Periodic management accounts",
            "Statutory filing readiness",
          ],
          ctaText: "View More",
          ctaHref: "/contact",
        },
        {
          title: "Profitability & Performance",
          description:
            "Strategic analysis of margins, operational bottlenecks, and cash flow cycles.",
          deliverables: [
            "Variance and margin audits",
            "Cash flow liquidity projections",
            "Overhead reduction modeling",
          ],
          ctaText: "View More",
          ctaHref: "/contact",
        },
        {
          title: "Compliance & Governance",
          description:
            "Comprehensive risk management, statutory audit preparation, and corporate tax governance.",
          deliverables: [
            "Corporate tax planning",
            "Statutory accounts preparation",
            "HMRC and regulatory liaison",
          ],
          ctaText: "View More",
          ctaHref: "/contact",
        },
      ],
      whyPartnerHeading: "Why Partner With Us",
      whyPartnerSubtitle: "Built around the way modern businesses operate.",
      partnerPillars: [
        {
          icon: "Users",
          title: "Direct Access to Senior Partners",
          description:
            "Direct advisory access to seasoned partners with deep sector domain expertise.",
        },
        {
          icon: "Cpu",
          title: "Modern Tech Integration",
          description:
            "Cloud-native software ecosystem integration tailored to your operations.",
        },
        {
          icon: "Sliders",
          title: "Tailored Solutions",
          description:
            "Bespoke financial architectures designed around your unique corporate structure.",
        },
        {
          icon: "FileCheck2",
          title: "Proactive Compliance",
          description:
            "Continuous oversight, accurate filings, and strategic tax planning with zero surprises.",
        },
      ],
      metaTitle: `${contactItem.title} Accounting & Advisory | Albore Accountants`,
      metaDescription: contactItem.solution,
    };
  }

  return null;
}
