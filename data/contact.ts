/**
 * ==============================================================================
 * CENTRALIZED CONTACT DATA REPOSITORY - ALBORE CHARTERED ACCOUNTANTS
 * ==============================================================================
 * Single source of truth for:
 * 1. Global Delivery Hub (Contact channels, address, phone, email, certifications)
 * 2. Country Dial Codes (Pakistan + Gulf Cooperation Council / GCC)
 * 3. Region Options (Middle East & Domestic)
 * 4. Service Options (Audit, Tax, Advisory, Bookkeeping, SECP, M&A)
 * 5. Consultation Form Labels, Placeholders & State Messages
 * 6. Contact Hero Content & SEO Metadata
 * 7. Frequently Asked Questions (FAQ Items)
 * 8. Industry Sectors
 * 9. Contact Page Intro & Appointment Time Slots
 * 10. Form Validation Rules & Copy
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
  certifications: string;
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
  certifications: "ISO 27001 Certified for Data Security",
};

// ------------------------------------------------------------------------------
// 2. COUNTRY DIAL CODES (Pakistan & GCC / Middle East Focus)
// ------------------------------------------------------------------------------
export interface CountryCode {
  code: string;
  dial: string;
  country: string;
}

export const countryCodes: CountryCode[] = [
  { code: "PK", dial: "+92", country: "Pakistan" },
  { code: "AE", dial: "+971", country: "United Arab Emirates" },
  { code: "SA", dial: "+966", country: "Saudi Arabia" },
  { code: "QA", dial: "+974", country: "Qatar" },
  { code: "OM", dial: "+968", country: "Oman" },
  { code: "KW", dial: "+965", country: "Kuwait" },
  { code: "BH", dial: "+973", country: "Bahrain" },
  { code: "GB", dial: "+44", country: "United Kingdom" },
  { code: "US", dial: "+1", country: "United States" },
];

// ------------------------------------------------------------------------------
// 3. TARGET OPERATING REGIONS
// ------------------------------------------------------------------------------
export interface RegionOption {
  value: string;
  label: string;
}

export const consultationRegions: RegionOption[] = [
  { value: "gulf_gcc", label: "Gulf & GCC Region (UAE, KSA, Qatar)" },
  { value: "pakistan_domestic", label: "Pakistan (Domestic Corporate)" },
  { value: "cross_border", label: "Cross-Border / International Operations" },
  { value: "uk_europe", label: "United Kingdom & Europe" },
  { value: "north_america", label: "North America (US / Canada)" },
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
    company: string;
    website: string;
    service: string;
    briefing: string;
    message: string;
    date?: string;
    time?: string;
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
    company: "Company Name",
    website: "Company Website",
    service: "Services Looking For",
    briefing: "Executive Briefing (Project Details)",
    message: "Executive Briefing (Project Details)",
    date: "Select Date",
    time: "Select Time Slot",
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
// 6. HOME CONSULTATION PROMO
// ------------------------------------------------------------------------------
export interface HomeConsultationData {
  badge: string;
  heading: string;
  description: string;
  benefits: string[];
}

export const homeConsultationData: HomeConsultationData = {
  badge: "Free Initial Consultation",
  heading: "Let's Begin Your Financial Journey",
  description:
    "Whether you need back-office support, audit-ready accounts, or strategic advisory, our team is ready to listen.",
  benefits: [
    "No obligation, first consultation is free",
    "Response within 4 business hours",
    "Senior-partner oversight on every engagement",
  ],
};

// ------------------------------------------------------------------------------
// 7. CONTACT PAGE INTRO
// ------------------------------------------------------------------------------
export interface ContactPageIntroData {
  titlePrefix: string;
  description: string;
}

export const contactPageIntroData: ContactPageIntroData = {
  titlePrefix: "Let's Talk About How We Can Help",
  description:
    "Share your requirements and our experts will get in touch with you to explore the best solutions for your business.",
};

// ------------------------------------------------------------------------------
// 8. CONTACT HERO SECTION
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
// 9. FREQUENTLY ASKED QUESTIONS (FAQ)
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
// 10. INDUSTRY SECTORS
// ------------------------------------------------------------------------------
export interface IndustrySector {
  number?: string;
  title: string;
  category?: string;
  description: string;
  solution: string;
  image: string;
  link?: string;
  href?: string;
  label?: string;
}

export const industriesData: IndustrySector[] = [
  {
    number: "01",
    title: "Healthcare & Pharmaceuticals",
    category: "Specialized Sector",
    description:
      "Cost accounting, hospital financial modeling, and drug regulatory pricing compliance for medical institutions.",
    solution:
      "Cost accounting, hospital financial modeling, and drug regulatory pricing compliance for medical institutions.",
    image: "/images/IndustrySection/IndustrySection1.png",
    link: "/industries/healthcare",
    href: "/industries/healthcare",
  },
  {
    number: "02",
    title: "Real Estate & Construction",
    category: "Property & Infrastructure",
    description:
      "Capital gains tax strategy, project-level escrow audits, and joint venture financial structuring for developers.",
    solution:
      "Capital gains tax strategy, project-level escrow audits, and joint venture financial structuring for developers.",
    image: "/images/IndustrySection/IndustrySection2.png",
    link: "/industries/real-estate",
    href: "/industries/real-estate",
  },
  {
    number: "03",
    title: "Technology & Software (SaaS)",
    category: "Innovation & Digital",
    description:
      "R&D tax credits, cross-border intellectual property holding structures, and investor-grade recurring revenue modeling.",
    solution:
      "R&D tax credits, cross-border intellectual property holding structures, and investor-grade recurring revenue modeling.",
    image: "/images/IndustrySection/IndustrySection3.png",
    link: "/industries/technology",
    href: "/industries/technology",
  },
  {
    number: "04",
    title: "Manufacturing & Industrial",
    category: "Production & Supply Chain",
    description:
      "Standard costing, supply chain tariff optimization, and capital asset depreciation schedules for factories.",
    solution:
      "Standard costing, supply chain tariff optimization, and capital asset depreciation schedules for factories.",
    image: "/images/IndustrySection/IndustrySection4.png",
    link: "/industries/manufacturing",
    href: "/industries/manufacturing",
  },
  {
    number: "05",
    title: "Financial Services & FinTech",
    category: "Capital & Compliance",
    description:
      "Anti-money laundering audit readiness, regulatory capital adequacy, and sovereign treasury compliance.",
    solution:
      "Anti-money laundering audit readiness, regulatory capital adequacy, and sovereign treasury compliance.",
    image: "/images/IndustrySection/IndustrySection1.png",
    link: "/industries/fintech",
    href: "/industries/fintech",
  },
  {
    number: "06",
    title: "E-Commerce & Retail",
    category: "Commerce & Trade",
    description:
      "Multi-jurisdiction sales tax reconciliation, automated inventory valuation, and payment gateway settlement auditing.",
    solution:
      "Multi-jurisdiction sales tax reconciliation, automated inventory valuation, and payment gateway settlement auditing.",
    image: "/images/IndustrySection/IndustrySection2.png",
    link: "/industries/ecommerce",
    href: "/industries/ecommerce",
  },
];

// ------------------------------------------------------------------------------
// 11. CONTACT FORM TIME SLOTS
// ------------------------------------------------------------------------------
export const TIME_SLOTS: string[] = [
  "10:00 am",
  "10:30 am",
  "11:00 am",
  "11:30 am",
  "12:00 pm",
  "12:30 pm",
  "2:00 pm",
  "2:30 pm",
  "3:00 pm",
];

// ------------------------------------------------------------------------------
// 12. CONTACT FORM VALIDATION COPY
// ------------------------------------------------------------------------------
export const formValidationCopy = {
  patterns: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\+?[0-9\s-]{7,15}$/,
  },
  errors: {
    fullNameRequired: "Please enter your full name.",
    fullNameShort: "Name must be at least 2 characters.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "Enter a valid email address.",
    companyRequired: "Please enter your business/company name.",
    phoneRequired: "Please enter your contact number.",
    phoneInvalid: "Enter a valid phone number.",
    serviceRequired: "Please select a service.",
    messageRequired: "Please describe your project.",
    dateTimeRequired: "Pick a date and time before booking.",
  },
  placeholders: {
    serviceSelect: "Select a service",
  },
  actions: {
    cancel: "Cancel submission",
  },
  prefixes: {
    selectedSlot: "Selected slot",
    requiredMark: "*",
  },
};

