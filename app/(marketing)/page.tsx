import Hero from "@/components/marketing/Hero";
import ConsultationSection from "@/components/marketing/Contact/ConsultationSection";

/**
 * Marketing landing page for Albore Accountants.
 * Hero + a compact "book a consultation" banner that reuses the same
 * building blocks as the full /contact page (see components/marketing/ConsultationSection).
 */
export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ConsultationSection variant="home" />
    </div>
  );
}
