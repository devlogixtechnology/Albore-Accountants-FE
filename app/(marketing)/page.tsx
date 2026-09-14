import Image from "next/image";
import Hero from "@/components/marketing/Hero";
import ConsultationSection from "@/components/marketing/Contact/ConsultationSection";
import WhyAlboreSection from "@/components/marketing/WhyChooseUsSection";
import IndustrySection from "@/components/marketing/IndustrySection";
import InsightsSection from "@/components/marketing/InsightsSection";

function SectionDivider() {
  return (
    <div
      className="flex justify-center py-6 sm:py-8 md:py-12"
      aria-hidden="true"
    >
      <Image
        src="/images/Others/divider.svg"
        alt=""
        width={601}
        height={41}
        unoptimized
        priority={false}
        className="h-auto max-w-[601px] w-full px-4 sm:px-6"
      />
    </div>
  );
}

/**
 * Marketing landing page for Albore Accountants.
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

      <InsightsSection />
    </div>
  );
}