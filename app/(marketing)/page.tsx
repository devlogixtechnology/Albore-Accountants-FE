import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { ServicesSection } from "@/components/marketing";
import IndustrySection from "@/components/marketing/IndustrySection";
import ConsultationSection from "@/components/marketing/Contact/ConsultationSection";
import WhoWeServeSection from "@/components/marketing/WhoWeServeSection";
import TestimonialsSection from "@/components/marketing/TestimonialsSection";
import LeadershipSection from "@/components/marketing/LeadershipSection";
import WhyAlboreSection from "@/components/marketing/WhyChooseUsSection";
import InsightsSection from "@/components/marketing/InsightsSection";

export const metadata: Metadata = {
  title: "Albore Chartered Accountants | Advisory & Tax Compliance",
  description:
    "Specialized corporate accounting, FBR tax compliance, auditing, and financial advisory services for modern enterprises.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Section */}
      <ServicesSection />

      {/* 3. Industry-Focused Advisory Section */}
      <IndustrySection />

      {/* 4. Consultation Form */}
      <ConsultationSection variant="home" />

      {/* 5. Who We Serve */}
      <WhoWeServeSection />

      {/* 6. Our Clients / Testimonials */}
      <TestimonialsSection />

      {/* 7. Executive Leadership Team */}
      <LeadershipSection />

      {/* 8. Why Choose Us / Fiduciary Distinction */}
      <WhyAlboreSection />

      {/* 9. Insights & Publications */}
      <InsightsSection />
    </div>
  );
}