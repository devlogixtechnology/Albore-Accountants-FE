"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import IndustryCard from "../ui/IndustryCard";
import {
  type IndustryItem,
  defaultIndustryItems as DEFAULT_INDUSTRY_ITEMS,
  industrySectionData,
} from "@/data/home/industrySectionData";
import { MotionReveal } from "@/components/ui/motion";

export type { IndustryItem };
export { DEFAULT_INDUSTRY_ITEMS };

export interface IndustrySectionProps {
  eyebrow?: string;
  heading?: ReactNode;
  descriptionLine1?: string;
  descriptionLine2?: string;
  industries?: IndustryItem[];
}

/**
 * Industry-Focused Advisory Section matching Figma:
 * - Reduced top spacing so it sits seamlessly directly under Services
 * - Domain-specific excellence eyebrow in brand maroon
 * - High-contrast editorial heading and 2-line sector description
 * - 5 curated industry showcase cards with signature red hue and animated reveals
 * - Responsive 5-column grid on desktop, smooth scroll track with arrow controls on mobile/tablet
 */
export default function IndustrySection({
  eyebrow = industrySectionData.eyebrow,
  heading = (
    <>
      {industrySectionData.headingPart1} <span className="text-accent">{industrySectionData.headingPart2}</span>
    </>
  ),
  descriptionLine1 = industrySectionData.descriptionLine1,
  descriptionLine2 = industrySectionData.descriptionLine2,
  industries = DEFAULT_INDUSTRY_ITEMS,
}: IndustrySectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 2);
    setAtEnd(track.scrollLeft >= track.scrollWidth - track.clientWidth - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    sync();
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      track.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const scrollByCards = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.getBoundingClientRect().width + 16 : 280;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="industries-heading"
      className="w-full bg-white pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-10"
    >
      <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* Header Container */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl text-left">
              <span className="block text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.08em] text-maroon-hover">
                {eyebrow}
              </span>

              <h2
                id="industries-heading"
                className="mt-2 font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-text-heading leading-tight"
              >
                {heading}
              </h2>

              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-text-body">
                <span className="block">{descriptionLine1}</span>
                <span className="block sm:mt-0.5">{descriptionLine2}</span>
              </p>
            </div>

            {/* Carousel Arrows on smaller screens */}
            <div className="flex items-center gap-2.5 lg:hidden self-start shrink-0">
              <button
                type="button"
                onClick={() => scrollByCards(-1)}
                disabled={atStart}
                aria-label="Previous industries"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-text-heading transition-colors hover:bg-neutral-100 disabled:opacity-35 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByCards(1)}
                disabled={atEnd}
                aria-label="Next industries"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary-dark text-white transition-colors hover:bg-brand-primary disabled:opacity-35 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </MotionReveal>

        {/* 5-Card Layout: smooth swipeable track on mobile/tablet, exact 5-column grid on desktop */}
        <MotionReveal delay={0.15}>
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <div
              ref={trackRef}
              className="albore-no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pt-2 pb-6 sm:-mx-10 sm:px-10 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:p-0 xl:gap-5"
            >
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  className="w-[78vw] shrink-0 snap-start sm:w-[calc(50%-10px)] md:w-[calc(33.333%-12px)] lg:w-full"
                >
                  <IndustryCard
                    title={industry.title}
                    category={industry.category}
                    solution={industry.solution}
                    image={industry.image}
                    href={industry.href}
                  />
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
