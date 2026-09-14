import Hero from "@/components/marketing/Hero";
import IndustrySection from "@/components/marketing/IndustrySection";
import InsightsSection from "@/components/marketing/InsightsSection";
import LeadershipSection from "@/components/marketing/LeadershipSection";
import TestimonialsSection from "@/components/marketing/TestimonialsSection";
import WhoWeServeSection from "@/components/marketing/WhoWeServeSection";
import SectionDivider from "@/components/ui/SectionDivider";

/**
 * Moved from using Divider as simple SVG to converting to a component
 */

export default function HomePage() {
  return (
    <>
      <Hero />

      <TestimonialsSection />
      <WhoWeServeSection />
      <SectionDivider />

      <IndustrySection />
      <SectionDivider />

      <LeadershipSection />
      <SectionDivider />

      <InsightsSection />
    </>
  );
}
