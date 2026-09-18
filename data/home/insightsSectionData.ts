import { type Insight } from "@/components/ui/InsightCard";

/**
 * Homepage Insights section data.
 * Features 4 curated intelligence briefs using verified assets in public/images/InsightSection/
 */
export const homeInsightsData: Insight[] = [
  {
    title: "Retail Governance",
    description:
      "How commercial retail operations can streamline multi-tenant lease accounting and eliminate operational revenue leakage.",
    image: "/images/InsightSection/ImagePlaceholder (1).png",
    href: "/insights/retail-governance",
  },
  {
    title: "Corporate Tax",
    description:
      "Strategic tax frameworks to navigate changes, optimize structures, and ensure FBR and SECP compliance for enterprises.",
    image: "/images/InsightSection/ImagePlaceholder.png",
    href: "/insights/corporate-tax",
  },
  {
    title: "Audit Pulse",
    description:
      "Quarterly analysis on financial reporting standards, internal risk controls, and statutory audit readiness for mid-market leaders.",
    image: "/images/InsightSection/ImagePlaceholder (2).png",
    href: "/insights/audit-pulse",
  },
  {
    title: "Growth Advisory",
    description:
      "Key financial due diligence metrics and corporate valuation insights shaping cross-border transactions and market expansion.",
    image: "/images/InsightSection/ImagePlaceholder (3).png",
    href: "/insights/growth-advisory",
  },
];

export default homeInsightsData;

