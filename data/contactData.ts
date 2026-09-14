/**
 * ==============================================================================
 * CENTRALIZED DATA REPOSITORY - ALBORE CHARTERED ACCOUNTANTS
 * ==============================================================================
 * Single source of truth for:
 * 1. Global Delivery Hub (Contact channels, address, phone, email)
 * 2. Country Dial Codes (Pakistan + Gulf Cooperation Council / GCC)
 * 3. Region Options (Middle East & Domestic)
 * 4. Service Options (Audit, Tax, Advisory, Bookkeeping, SECP, M&A)
 * 5. Consultation Form Labels, Placeholders & State Messages
 * 6. Contact Hero Content & SEO Metadata
 * 7. Frequently Asked Questions (FAQ Items)
 * 8. Industry Sectors
 *
 * Any changes made here automatically propagate across all components.
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. GLOBAL DELIVERY HUB & CONTACT CHANNELS
// ------------------------------------------------------------------------------
export interface ContactChannel {
  label: string;
  value: string;
  href?: string;
}

export interface ContactHubData {
  badge: string;
  titleLine1: string;
  titleAccent: string;
  email: ContactChannel;
  hq: ContactChannel;
  phone: ContactChannel;
}

export const contactHubData: ContactHubData = {
  badge: "Global Delivery Hub",
  titleLine1: "Initiate",
  titleAccent: "The Dialogue.",
  email: {
    label: "Electronic Mail",
    value: "hello@alboreaccountants.com",
    href: "mailto:hello@alboreaccountants.com",
  },
  hq: {
    label: "Global HQ",
    value: "Main Boulevard, Bahria Town, Lahore, Pakistan.",
  },
  phone: {
    label: "Secure Line",
    value: "+92 (335) 427 4079",
    href: "tel:+923354274079",
  },
};

// ------------------------------------------------------------------------------
// 2. COUNTRY DIAL CODES (Gulf Countries & Pakistan)
// ------------------------------------------------------------------------------
export interface CountryCode {
  name: string;
  code: string;
  dial: string;
}

export const countryCodes: CountryCode[] = [
  { name: "Pakistan", code: "PK", dial: "+92" },
  { name: "United Arab Emirates", code: "AE", dial: "+971" },
  { name: "Saudi Arabia", code: "SA", dial: "+966" },
  { name: "Qatar", code: "QA", dial: "+974" },
  { name: "Kuwait", code: "KW", dial: "+965" },
  { name: "Bahrain", code: "BH", dial: "+973" },
  { name: "Oman", code: "OM", dial: "+968" },
];

// ------------------------------------------------------------------------------
// 3. REGION OPTIONS
// ------------------------------------------------------------------------------
export interface RegionOption {
  value: string;
  label: string;
}

export const consultationRegions: RegionOption[] = [
  { value: "PK", label: "Pakistan (Domestic)" },
  { value: "UAE", label: "United Arab Emirates (UAE)" },
  { value: "SA", label: "Saudi Arabia (KSA)" },
  { value: "QA", label: "Qatar" },
  { value: "KW", label: "Kuwait" },
  { value: "BH", label: "Bahrain" },
  { value: "OM", label: "Oman" },
];

// ------------------------------------------------------------------------------
// 4. SERVICE OFFERINGS
// ------------------------------------------------------------------------------
export interface ServiceOption {
  value: string;
  label: string;
}

export const consultationServices: ServiceOption[] = [
  { value: "tax", label: "Corporate Tax & FBR Compliance" },
  { value: "audit", label: "Statutory Audit & Assurance" },
  { value: "advisory", label: "Strategic Financial Advisory" },
  { value: "bookkeeping", label: "Bookkeeping & Management Accounts" },
  { value: "secp", label: "Company Incorporation & SECP Filing" },
  { value: "ma_advisory", label: "Cross-Border M&A and Due Diligence" },
];

// ------------------------------------------------------------------------------
// 5. CONSULTATION FORM COPY & STATE MESSAGES
// ------------------------------------------------------------------------------
export interface FormCopyData {
  sectionHeading: string;
  fields: {
    fullName: string;
    email: string;
    phone: string;
    region: string;
    companyName: string;
    website: string;
    service: string;
    briefing: string;
  };
  actions: {
    submit: string;
    submitting: string;
    reset: string;
  };
  successState: {
    title: string;
    message: string;
  };
}

export const formCopyData: FormCopyData = {
  sectionHeading: "Initiate Consultation",
  fields: {
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    region: "Region",
    companyName: "Company Name",
    website: "Company Website",
    service: "Services Looking For",
    briefing: "Executive Briefing (Project Details)",
  },
  actions: {
    submit: "Submit Inquiry",
    submitting: "Transmitting...",
    reset: "Reset Form",
  },
  successState: {
    title: "Consultation Request Logged.",
    message:
      "Our senior advisory partners have received your details and will follow up within 4 business hours.",
  },
};

// ------------------------------------------------------------------------------
// 6. CONTACT HERO SECTION
// ------------------------------------------------------------------------------
export interface ContactHeroData {
  titlePrefix: string;
  titleAccent: string;
  seoSubtitle: string;
  description: string;
}

export const contactHeroData: ContactHeroData = {
  titlePrefix: "Partner With ",
  titleAccent: "Alboré",
  seoSubtitle: " - Chartered Accountants, Tax Advisory, and Statutory Audit Services",
  description:
    "Connect with our chartered accountants and senior advisory partners to streamline your tax compliance, audit readiness, and institutional financial growth.",
};

// ------------------------------------------------------------------------------
// 7. FREQUENTLY ASKED QUESTIONS (FAQ)
// ------------------------------------------------------------------------------
export interface FaqItem {
  question: string;
  answer: string;
}

export const contactFaqItems: FaqItem[] = [
  {
    question: "What services does Albore Accountant offer?",
    answer:
      "We provide bookkeeping, audits & assurance, financial advisory, and tax services tailored to your business.",
  },
  {
    question: "How can Albore help my business grow?",
    answer:
      "Our partners work alongside your team to streamline your finances, stay compliant, and surface the insights that support better growth decisions.",
  },
  {
    question: "How do I get started with Albore?",
    answer:
      "Fill out the form above or call our direct office line, and a partner will follow up within 4 business hours.",
  },
];

// ------------------------------------------------------------------------------
// 8. INDUSTRY SECTORS (Square Card Carousel)
// ------------------------------------------------------------------------------
export interface IndustrySector {
  title: string;
  category: string;
  solution: string;
  image: string;
  link: string;
  label: string;
  href: string;
}

export const industriesData: IndustrySector[] = [
  {
    title: "Retail & Trade",
    category: "Commercial",
    solution:
      "Inventory valuation, multi-jurisdiction sales tax compliance, and automated retail margin analysis.",
    image: "/images/IndustrySection/IndustrySection1.png",
    link: "/industries/retail-trade",
    label: "Retail & Trade",
    href: "/industries/retail-trade",
  },
  {
    title: "Real Estate",
    category: "Commercial",
    solution:
      "Capital gains structuring, REIT accounting, and asset depreciation frameworks for developers and landlords.",
    image: "/images/IndustrySection/IndustrySection2.png",
    link: "/industries/real-estate",
    label: "Real Estate",
    href: "/industries/real-estate",
  },
  {
    title: "Financial Services",
    category: "Sovereign",
    solution:
      "Statutory audits, regulatory capital compliance, and corporate governance for institutional funds.",
    image: "/images/IndustrySection/IndustrySection3.png",
    link: "/industries/financial-services",
    label: "Financial Services",
    href: "/industries/financial-services",
  },
  {
    title: "Energy & Resources",
    category: "Industrial",
    solution:
      "Project finance audits, environmental tax credit optimization, and joint venture compliance.",
    image: "/images/IndustrySection/IndustrySection4.png",
    link: "/industries/energy-resources",
    label: "Energy & Resources",
    href: "/industries/energy-resources",
  },
  {
    title: "Technology & Media",
    category: "Commercial",
    solution:
      "R&D tax credits, intellectual property structuring, and scalable international tax planning for tech firms.",
    image: "/images/IndustrySection/IndustrySection1.png",
    link: "/industries/technology-media",
    label: "Technology & Media",
    href: "/industries/technology-media",
  },
  {
    title: "Manufacturing & Logistics",
    category: "Industrial",
    solution:
      "Cost accounting, supply chain customs reconciliation, and enterprise statutory audit assurance.",
    image: "/images/IndustrySection/IndustrySection2.png",
    link: "/industries/manufacturing-logistics",
    label: "Manufacturing & Logistics",
    href: "/industries/manufacturing-logistics",
  },
];
