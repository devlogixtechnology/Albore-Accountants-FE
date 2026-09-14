import Hero from "@/components/marketing/Hero";
import ConsultationSection from "@/components/marketing/Contact/ConsultationSection";
import WhyAlboreSection from "@/components/marketing/WhyChooseUsSection";
import IndustrySection from "@/components/marketing/IndustrySection";
import LeadershipSection from "@/components/marketing/LeadershipSection";
import TestimonialsSection from "@/components/marketing/TestimonialsSection";
import WhoWeServeSection from "@/components/marketing/WhoWeServeSection";
import InsightsSection from "@/components/marketing/InsightsSection";
import SectionDivider from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />

      <SectionDivider />

      {/* Teammate's work from main */}
      <ConsultationSection variant="home" />

      <SectionDivider />

      <WhyAlboreSection />

      <SectionDivider />

      {/* Industries */}
      <IndustrySection />

      <SectionDivider />

      {/* Leadership */}
      <LeadershipSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Who We Serve */}
      <WhoWeServeSection />

      <SectionDivider />

      {/* Insights */}
      <InsightsSection />
    </div>
  );
}