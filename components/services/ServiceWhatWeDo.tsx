import type { WhatWeDoItem } from "@/data/services/types";

interface ServiceWhatWeDoProps {
  heading?: string;
  subtitle?: string;
  intro?: string;
  items: WhatWeDoItem[];
}

export default function ServiceWhatWeDo({
  heading = "What we do",
  subtitle = "Everything your books need, handled",
  intro = "Every audit engagement runs on tested procedures — nothing is left to assumption.",
  items = [],
}: ServiceWhatWeDoProps) {
  if (!items || items.length === 0) return null;

  return (
    <section aria-labelledby="what-we-do-heading" className="w-full my-12 sm:my-16">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto px-4 mb-12 sm:mb-16">
        <h2
          id="what-we-do-heading"
          className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight"
        >
          {heading}
        </h2>

        {subtitle && (
          <p className="font-heading text-base sm:text-lg font-semibold text-accent mt-1">
            {subtitle}
          </p>
        )}

        {intro && (
          <p className="font-body text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
            {intro}
          </p>
        )}
      </div>

      {/* Staggered Connected Process Grid */}
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="flex flex-col space-y-8 sm:space-y-12 md:space-y-16 relative">
          {items.map((item, idx) => {
            const isEven = idx % 2 === 0; // 0, 2: Left column; 1, 3: Right column

            return (
              <div
                key={item.title || idx}
                className={`relative flex flex-col w-full md:w-[48%] border-l-2 border-[#b08d57]/40 pl-4 md:border-l-0 md:pl-0 ${
                  isEven ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                {/* Connector Lines on Desktop */}
                {idx < items.length - 1 && (
                  <div
                    aria-hidden="true"
                    className={`hidden md:block absolute pointer-events-none ${
                      isEven
                        ? "left-full top-6 w-[20%] h-full border-t border-r border-slate-300 rounded-tr-2xl"
                        : "right-full top-6 w-[20%] h-full border-t border-l border-slate-300 rounded-tl-2xl"
                    }`}
                  />
                )}

                {/* Content Block */}
                <div className="p-1 sm:p-4">
                  <h3 className="font-heading text-base sm:text-xl font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mt-2 sm:mt-2.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
