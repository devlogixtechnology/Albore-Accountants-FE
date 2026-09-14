import type { Metadata } from 'next';
import ConsultationSection from '@/components/marketing/Contact/ConsultationSection';
import FaqAccordion from '@/components/marketing/Contact/FaqAccordion';

export const metadata: Metadata = {
  title: 'Contact | Albore Chartered Accountants',
  description:
    'Book a free consultation with Albore Chartered Accountants — share your requirements and pick a time that works for you.',
};

const faqItems = [
  {
    question: 'What services does Albore Accountant offer?',
    answer:
      'We provide book keeping, audits & assurance, financial advisory, and tax services tailored to your business.',
  },
  {
    question: 'How can Albore help my business grow?',
    answer:
      'Our partners work alongside your team to streamline your finances, stay compliant, and surface the insights that support better growth decisions.',
  },
  {
    question: 'How do I get started with Albore?',
    answer:
      'Fill out the form above or pick a slot on the calendar, and a partner will follow up to confirm the details.',
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      
      {/* Consultation Section */}
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
        <ConsultationSection variant="page" />
      </div>

      {/* FAQ Section */}
      <section className="bg-gradient-to-r from-brand-primary-dark to-brand-primary py-12 sm:py-16">
        
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          
          <h2 className="text-center font-heading text-2xl font-bold text-text-inverse sm:text-3xl">
            Frequently Asked Question
          </h2>

          <FaqAccordion
            items={faqItems}
            className="mt-8 w-full"
          />

        </div>

      </section>
    </div>
  );
}
