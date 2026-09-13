import InsightCard, { type Insight } from "@/components/ui/InsightCard";

const insights: Insight[] = [
  {
    title: "Retail Governance",
    description:
      "How commercial retail operations can streamline multi-tenant lease accounting and eliminate operational revenue leakage.",
    image: "/images/InsightSection/insightPlaceholder1.png",
    href: "/insights/retail-governance",
  },
  {
    title: "Corporate Tax",
    description:
      "Strategic tax frameworks to navigate changes, optimize structures, and ensure FBR and SECP compliance for enterprises.",
    image: "/images/InsightSection/insightPlaceholder.png",
    href: "/insights/corporate-tax",
  },
  {
    title: "Audit Pulse",
    description:
      "Quarterly analysis on financial reporting standards, internal risk controls, and statutory audit readiness for mid-market leaders.",
    image: "/images/InsightSection/insightPlaceholder2.png",
    href: "/insights/audit-pulse",
  },
  {
    title: "Growth Advisory",
    description:
      "Key financial due diligence metrics and corporate valuation insights shaping cross-border transactions and market expansion.",
    image: "/images/InsightSection/insightPlaceholder3.png",
    href: "/insights/growth-advisory",
  },
];

/**
 * "Explore the Latest Insights" section.
 * Fully responsive 1-col (mobile) -> 2-col (tablet) -> 4-col (desktop) layout.
 */
export default function InsightsSection() {
  return (
    <section
      aria-labelledby="explore-insights-heading"
      className="w-full px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 py-6 sm:py-8 lg:py-10"
    >
      {/* Centered Heading */}
      <h2
        id="explore-insights-heading"
        className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-text-heading tracking-tight text-center mb-8 sm:mb-10 md:mb-12"
      >
        Explore the Latest Insights
      </h2>

      {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 xl:gap-8">
        {insights.map((insight) => (
          <InsightCard key={insight.title} {...insight} />
        ))}
      </div>
    </section>
  );
}