'use client';

import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { contactFaqItems, faqSectionData, type FaqItem } from '@/data/contact';

export interface FaqSectionProps {
  items?: FaqItem[];
  className?: string;
}

export default function FaqSection({
  items = contactFaqItems,
  className = '',
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section
      aria-labelledby={`${baseId}-heading`}
      className={`w-full rounded-2xl bg-brand-primary-dark sm:rounded-3xl ${className}`}
    >
      <div className="mx-auto w-full px-6 py-14 sm:px-10 sm:py-16 lg:px-[5vw] lg:py-20">
        {/* Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="rounded-full bg-accent px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
            {faqSectionData.badge}
          </span>

          <h2
            id={`${baseId}-heading`}
            className="mt-5 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            {faqSectionData.heading}
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            {faqSectionData.description}
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-3 sm:mt-12 sm:gap-4 2xl:max-w-[100rem]">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `${baseId}-btn-${idx}`;
            const panelId = `${baseId}-panel-${idx}`;

            return (
              <div
                key={item.question}
                className="w-full overflow-hidden rounded-lg bg-white shadow-sm"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full cursor-pointer items-center gap-4 px-4 py-4 text-left sm:gap-5 sm:px-6 sm:py-5"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-[11px] font-bold text-brand-primary-dark sm:h-9 sm:w-9"
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    <span className="flex-1 font-body text-sm font-medium text-text-heading sm:text-base lg:text-lg">
                      {item.question}
                    </span>

                    <ChevronDown
                      aria-hidden="true"
                      className={`h-4 w-4 shrink-0 text-brand-primary transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-4 pb-5 sm:px-6"
                  >
                    {/* Indented to line up with the question text, past the badge */}
                    <p className="pl-12 font-body text-sm leading-relaxed text-text-body sm:pl-14 lg:text-base">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}