import Hero from "@/components/marketing/Hero";
import ConsultationSection from "@/components/marketing/Contact/ConsultationSection";
import WhyAlboreSection from "@/components/marketing/WhyChooseUsSection";
import IndustrySection from "@/components/marketing/IndustrySection";
import LeadershipSection from "@/components/marketing/LeadershipSection";
import TestimonialsSection from "@/components/marketing/TestimonialsSection";
import WhoWeServeSection from "@/components/marketing/WhoWeServeSection";
import InsightsSection from "@/components/marketing/InsightsSection";
import SectionDivider from "@/components/ui/SectionDivider";

/**
 * Marketing landing page for Albore Accountants.
 * Integrates converted SectionDivider component and stacks all marketing sections.
 */
export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />

      <SectionDivider />

      <ConsultationSection variant="home" />

      <SectionDivider />

      <WhyAlboreSection />

      <SectionDivider />

      <IndustrySection />

      <SectionDivider />

      <LeadershipSection />

      {/* Testimonials (What our client Says) Section */}
      <TestimonialsSection />

      {/* Who We Serve Section */}
      <WhoWeServeSection />

      <SectionDivider />

      <InsightsSection />
    </div>
  );
}