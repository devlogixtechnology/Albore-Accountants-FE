import Image from "next/image";
import Hero from "@/components/marketing/Hero";
import IndustrySection from "@/components/marketing/IndustrySection";
import InsightsSection from "@/components/marketing/InsightsSection";

/**
 * Marketing landing page for Albore Accountants.
 * Uses /images/Others/divider.svg directly between sections.
 */
export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Ornamental Section Divider */}
      <div className="flex justify-center py-6 sm:py-8 md:py-12" aria-hidden="true">
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

      <IndustrySection />

      {/* Ornamental Section Divider */}
      <div className="flex justify-center py-6 sm:py-8 md:py-12" aria-hidden="true">
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

      <InsightsSection />
    </>
  );
}
