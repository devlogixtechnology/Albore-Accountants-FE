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
      className="w-full py-12 sm:py-16 lg:py-20"
    >
      <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <span className="block font-body text-xs font-bold text-text-accent uppercase tracking-[0.3em] mb-2 sm:mb-3">
            Market Intelligence
          </span>
          <h2
            id="explore-insights-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-text-heading tracking-tight"
          >
            Explore the Latest Insights
          </h2>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 xl:gap-8">
          {insights.map((insight) => (
            <InsightCard key={insight.title} {...insight} />
          ))}
        </div>
      </div>
    </section>
  );
}