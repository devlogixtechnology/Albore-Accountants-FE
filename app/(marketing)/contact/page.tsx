import ConsultationSection from "@/components/marketing/Contact/ConsultationSection";
import FaqSection from "@/components/marketing/Contact/FaqAccordion";
import { contactFaqItems } from "@/data/contact";

export default function ContactPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: contactFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <ConsultationSection variant="page" />

      <FaqSection className="py-12 sm:py-16" />

      <div className="h-6 bg-white sm:h-8" aria-hidden="true" />

    </div>
  );
}