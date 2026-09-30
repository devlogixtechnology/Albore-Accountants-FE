import InsightCard from "@/components/ui/InsightCard";
import {
  homeInsightsData as insights,
  insightsSectionData,
} from "@/data/home/insightsSectionData";
import {
  MotionReveal,
  MotionStaggerGroup,
  MotionStaggerItem,
} from "@/components/ui/motion";

export { insights };

/**
 * "Thought Leadership & Publications" section matching Figma prototype.
 * Left-aligned executive header with two-tone title and 4-column white cards.
 */
export default function InsightsSection() {
  return (
    <section
      aria-labelledby="thought-leadership-heading"
      className="w-full pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20"
    >
      <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* Left-Aligned Executive Header */}
        <MotionReveal>
          <div className="max-w-3xl mb-10 sm:mb-12 md:mb-14">
            <p className="font-heading text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-maroon-hover">
              {insightsSectionData.eyebrow}
            </p>
            <h2
              id="thought-leadership-heading"
              className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[46px] font-bold tracking-tight text-ink leading-[1.15]"
            >
              {insightsSectionData.headingPart1}
              <span className="block mt-1">
                <span className="text-accent">{insightsSectionData.headingPart2}</span> &amp;{" "}
                <span className="text-accent">{insightsSectionData.headingPart3}</span>
              </span>
            </h2>
            <p className="mt-4 font-body text-sm sm:text-base lg:text-[16px] text-body/80 leading-relaxed max-w-3xl">
              {insightsSectionData.description}
            </p>
          </div>
        </MotionReveal>

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <MotionStaggerGroup
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8"
          staggerDelay={0.09}
        >
          {insights.map((insight) => (
            <MotionStaggerItem key={insight.title} className="h-full">
              <InsightCard {...insight} />
            </MotionStaggerItem>
          ))}
        </MotionStaggerGroup>
      </div>
    </section>
  );
}