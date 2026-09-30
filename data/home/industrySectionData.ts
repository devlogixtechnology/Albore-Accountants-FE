export interface IndustryItem {
  id: string;
  category: string;
  title: string;
  solution?: string;
  image: string;
  href: string;
}

export const defaultIndustryItems: IndustryItem[] = [
  {
    id: "financial-services",
    category: "CAPITAL & COMPLIANCE",
    title: "Financial Services & Banking",
    solution: "Capital adequacy modeling, statutory audits & regulatory AML compliance.",
    image: "/images/IndustrySection/financial-services.jpg",
    href: "/industries/financial-services",
  },
  {
    id: "energy-utilities",
    category: "INFRASTRUCTURE & POWER",
    title: "Energy, Power & Utilities",
    solution: "Renewable energy tax structures, carbon credits & asset depreciation.",
    image: "/images/IndustrySection/energy-utilities.jpg",
    href: "/industries/energy-and-resources",
  },
  {
    id: "technology-telecom",
    category: "DIGITAL ENTERPRISE",
    title: "Technology & Telecom",
    solution: "SaaS revenue recognition, R&D tax credits & global IP structuring.",
    image: "/images/IndustrySection/technology-telecom.jpg",
    href: "/industries/technology-media",
  },
  {
    id: "real-estate-construction",
    category: "ASSET DEVELOPMENT",
    title: "Real Estate & Construction",
    solution: "Project escrow accounting, joint venture tax planning & yield optimization.",
    image: "/images/IndustrySection/real-estate-construction.jpg",
    href: "/industries/real-estate",
  },
  {
    id: "manufacturing-retail",
    category: "SUPPLY CHAIN",
    title: "Manufacturing & Retail",
    solution: "Standard inventory costing, supply chain tariffs & factory automation audits.",
    image: "/images/IndustrySection/manufacturing-retail.jpg",
    href: "/industries/manufacturing",
  },
];

export const industrySectionData = {
  eyebrow: "DOMAIN-SPECIFIC EXCELLENCE",
  headingPart1: "Industry-Focused",
  headingPart2: "Advisory",
  descriptionLine1:
    "Delivering tailored audit, tax, and financial advisory service designed for the unique dynamics of your sector.",
  descriptionLine2:
    "Navigating complex compliance, tax structures, and growth strategies across key global industries.",
  industries: defaultIndustryItems,
};

export default industrySectionData;
