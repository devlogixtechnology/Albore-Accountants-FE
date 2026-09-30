/**
 * ==============================================================================
 * HOMESCREEN - SERVICES SECTION DATA
 * ==============================================================================
 * Centralized data source for the Services carousel on the Homepage.
 * Grounded 100% in Figma prototype (media_1790762201686.png):
 * - Specialized Practice Capabilities
 * - 5 Core Pillars: Cross-Border Compliance, Tax Advisory, Audit & Assurance,
 *   Bookkeeping & Payroll, Financial Advisory
 * ==============================================================================
 */

export interface HomeService {
  title: string;
  category: string;
  featureTitle: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  iconType: "globe" | "tax" | "shield-check" | "calculator" | "trending-up";
  moreLabel?: string;
  hoverText?: string;
  marquee?: "left" | "right";
}

export interface ServicesSectionData {
  eyebrow: string;
  headingPart1: string;
  headingPart2: string;
  description: string;
  services: HomeService[];
}

export const servicesSectionHeader = {
  eyebrow: "COMPREHENSIVE PROFESSIONAL SCOPE",
  headingPart1: "Specialized",
  headingPart2: "Practice Capabilities.",
  description:
    "Integrated accounting, assurance, and fiduciary advisory services engineered to solve systemic corporate complexity under rigorous international mandates.",
};

export const defaultHomeServices: HomeService[] = [
  {
    title: "Cross-Border Compliance",
    category: "Cross-Border Compliance",
    featureTitle: "Multi-jurisdiction reporting",
    description:
      "adhering to customs rules, tariffs, import/export restrictions, and trade licensing set by both home and foreign countries",
    href: "/services/corporate-compliance",
    imageSrc: "/images/servicesSection/cross-border-complience.png",
    imageAlt: "Cross-Border Compliance",
    iconType: "globe",
    moreLabel: "Explore Compliance",
  },
  {
    title: "Tax Advisory",
    category: "Tax Advisory",
    featureTitle: "Corporate & VAT planning",
    description:
      "Comprehensive tax planning and cross-border advisory services ensuring full compliance, minimizing liabilities, and",
    href: "/services/tax-services",
    imageSrc: "/images/servicesSection/tax-advisary.png",
    imageAlt: "Tax Advisory",
    iconType: "tax",
    moreLabel: "Explore Tax",
  },
  {
    title: "Audit & Assurance",
    category: "Audit & Assurance",
    featureTitle: "Statutory & internal audits",
    description:
      "Precise daily transaction tracking, ledger reconciliation, and real-time financial reporting to keep your business fully organized.",
    href: "/services/assurance-audits",
    imageSrc: "/images/servicesSection/audit-assurance.png",
    imageAlt: "Audit & Assurance",
    iconType: "shield-check",
    moreLabel: "Explore Assurance",
  },
  {
    title: "Bookkeeping & Payroll",
    category: "Bookkeeping & Payroll",
    featureTitle: "Monthly reconciliations",
    description:
      "Strategic roadmap planning, performance optimization, and operational frameworks tailored to elevate business growth.",
    href: "/services/book-keeping",
    imageSrc: "/images/servicesSection/bookkeeping-payroll.png",
    imageAlt: "Bookkeeping & Payroll",
    iconType: "calculator",
    moreLabel: "Explore Bookkeeping",
  },
  {
    title: "Financial Advisory",
    category: "Financial Advisory",
    featureTitle: "CFO-level guidance",
    description:
      "Guidance on estimating post-career needs and building steady income stream",
    href: "/services/financial-advisory",
    imageSrc: "/images/servicesSection/financial-advisary.png",
    imageAlt: "Financial Advisory",
    iconType: "trending-up",
    moreLabel: "Explore Advisory",
  },
];

export const servicesSectionData: ServicesSectionData = {
  ...servicesSectionHeader,
  services: defaultHomeServices,
};

export const homeServices: HomeService[] = defaultHomeServices;
export const services: HomeService[] = defaultHomeServices;
export const DEFAULT_SERVICES = defaultHomeServices;
export const servicesSection = servicesSectionData;

export default servicesSectionData;
