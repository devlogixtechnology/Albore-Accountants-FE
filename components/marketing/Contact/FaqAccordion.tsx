'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

export default function FaqAccordion({
  items,
  className = '',
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`flex w-full flex-col gap-4 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={item.question}
            className="w-full overflow-hidden rounded-lg bg-surface-muted px-6 py-4 sm:px-8 sm:py-5
            "
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="font-body text-sm text-text-heading sm:text-base">
                {item.question}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-text-heading transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isOpen && (
              <p className="mt-3 font-body text-sm text-text-body">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}