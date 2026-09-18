/**
 * ==============================================================================
 * HOMESCREEN - SERVICES SECTION DATA
 * ==============================================================================
 * Centralized data source for the Services carousel on the Homepage.
 *
 * Grounded in Albore Chartered Accountants' professional practice:
 * - Audits & Assurance
 * - Financial Advisory
 * - Tax Services
 * - Bookkeeping
 * - Payroll Management
 * - Corporate Compliance
 * ==============================================================================
 */

export interface HomeService {
  title: string;
  description: string;
  href: string;
  hoverText?: string;
  moreLabel?: string;
  marquee?: "left" | "right";
  imageSrc?: string;
  imageAlt?: string;
}

export interface ServicesSectionData {
  heading: string;
  subheading?: string;
  services: HomeService[];
}

export const servicesSectionData: ServicesSectionData = {
  heading: "Our Services",
  subheading:
    "Comprehensive accounting, audit, tax, and strategic advisory solutions designed to keep your business optimized and compliant.",
  services: [
    {
      title: "Assurance & Audits",
      description:
        "Independent statutory audits, rigorous internal control evaluations, and regulatory assurance that give stakeholders, boards, and lenders complete confidence.",
      href: "/services/assurance-audits",
      imageSrc: "/images/ServicesPage/audit-assurance/Audit.png",
      imageAlt: "Audits & Assurance",
      hoverText: "AUDIT & ASSURANCE",
      moreLabel: "More",
      marquee: "left",
    },
    {
      title: "Financial Advisory",
      description:
        "Strategic financial forecasting, cash flow modeling, valuation analysis, and M&A advisory that empower executive leadership to scale with clarity.",
      href: "/services/financial-advisory",
      imageSrc: "/images/ServicesPage/financial-advisory/Advisary.png",
      imageAlt: "Financial Advisory",
      hoverText: "FINANCIAL ADVISORY",
      moreLabel: "More",
      marquee: "right",
    },
    {
      title: "Tax Services",
      description:
        "Comprehensive corporate and individual tax planning, FBR & sales tax compliance, and cross-border advisory structured to minimize liabilities and ensure audit-readiness.",
      href: "/services/tax-services",
      imageSrc: "/images/ServicesPage/tax-service/tax-paper.png",
      imageAlt: "Tax Services",
      hoverText: "TAX SERVICES",
      moreLabel: "More",
      marquee: "left",
    },
    {
      title: "Bookkeeping",
      description:
        "Disciplined day-to-day transaction recording, bank and ledger reconciliations, and structured month-end closes keeping your financial books accurate and up-to-date.",
      href: "/services/book-keeping",
      imageSrc: "/images/ServicesPage/BookKeeping/BookKeepingCover.png",
      imageAlt: "Bookkeeping",
      hoverText: "BOOKKEEPING",
      moreLabel: "More",
      marquee: "right",
    },
    {
      title: "Payroll Management",
      description:
        "End-to-end payroll administration, employee tax withholding, and statutory compliance handled with utmost precision, confidentiality, and timeliness.",
      href: "/services/payroll-management",
      imageSrc: "/images/ServicesPage/BookKeeping/BookKeeping.png",
      imageAlt: "Payroll Management",
      hoverText: "PAYROLL MANAGEMENT",
      moreLabel: "More",
      marquee: "left",
    },
    {
      title: "Corporate Compliance",
      description:
        "Company incorporation, SECP regulatory filings, corporate governance frameworks, and statutory register maintenance across all jurisdictions you operate in.",
      href: "/services/corporate-compliance",
      imageSrc: "/images/ServicesPage/tax-service/tax-planning.png",
      imageAlt: "Corporate Compliance",
      hoverText: "CORPORATE COMPLIANCE",
      moreLabel: "More",
      marquee: "right",
    },
  ],
};

export const homeServices: HomeService[] = servicesSectionData.services;
export const services: HomeService[] = servicesSectionData.services;
export const DEFAULT_SERVICES = homeServices;
export const servicesSection = servicesSectionData;
export const ServicesSection = servicesSectionData;

export default servicesSectionData;

