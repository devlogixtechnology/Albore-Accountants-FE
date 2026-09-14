import type { Metadata } from 'next';
import ConsultationSection from '@/components/marketing/Contact/ConsultationSection';
import ContactHero from '@/components/marketing/Contact/ContactHero';
import FaqAccordion from '@/components/marketing/Contact/FaqAccordion';
import { contactFaqItems } from '@/data/contactData';

export const metadata: Metadata = {
  title: 'Contact | Albore Chartered Accountants',
  description:
    'Initiate dialogue with Albore Chartered Accountants — share your requirements for audit, tax, and corporate advisory.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Contact Hero */}
      <ContactHero />

      {/* Revamped Consultation Section */}
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
    </div>
  );
}
