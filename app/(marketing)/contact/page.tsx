import ConsultationSection from '@/components/marketing/Contact/ContactForm';
import FaqAccordion from '@/components/marketing/Contact/FaqAccordion';
import { contactFaqItems } from '@/data/Contact/contact';

export default function ContactPage() {
  return (
    <div className="flex flex-col">

      <ConsultationSection/>

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
