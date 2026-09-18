import type { Metadata } from "next";
import ConsultationSection from "@/components/marketing/Contact/ConsultationSection";
import FaqAccordion from "@/components/marketing/Contact/FaqAccordion";
import { contactFaqItems } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Us | Albore Chartered Accountants",
  description:
    "Initiate the dialogue with Albore Chartered Accountants. Schedule an initial consultation or get in touch with our global delivery hub.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Albore Chartered Accountants",
    description:
      "Initiate the dialogue with Albore Chartered Accountants. Schedule an initial consultation or get in touch with our global delivery hub.",
    url: "/contact",
    type: "website",
  },
};

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

      {/* FAQ Section */}
      <section className="bg-gradient-to-r from-brand-primary-dark to-brand-primary py-12 sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <h2 className="text-center font-heading text-2xl font-bold text-text-inverse sm:text-3xl">
            Frequently Asked Questions
          </h2>

          <FaqAccordion
            items={contactFaqItems}
            className="mt-8 w-full"
          />
        </div>
      </section>
      <div className="h-6 bg-white sm:h-8" aria-hidden="true" />
    </div>
  );
}
