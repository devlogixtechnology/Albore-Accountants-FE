'use client';

import { useState } from 'react';

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
            className="
              w-full
              bg-gradient-to-r
              from-surface-muted
              via-surface
              to-surface-muted
              px-10
              py-5
            "
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="font-heading text-lg font-semibold text-text-heading sm:text-xl">
                {item.question}
              </span>
            </button>

            {isOpen && (
              <p className="mt-3 font-body text-text-body">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}

    </div>
  );
}