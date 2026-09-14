import { Hero } from "@/components/marketing/Hero";
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
      {/* Teammate's Hero Component */}
      <Hero />

      <SectionDivider />

      {/* Consultation Section */}
      <ConsultationSection variant="home" />

      <SectionDivider />

      {/* Why Choose Us */}
      <WhyAlboreSection />

      <SectionDivider />

      {/* Industry Section */}
      <IndustrySection />

      <SectionDivider />

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Who We Serve */}
      <WhoWeServeSection />

      <SectionDivider />

      {/* Insights Section */}
      <InsightsSection />
    </div>
  );
}