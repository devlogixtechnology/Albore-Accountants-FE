"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { SolutionItem } from "@/data/Industries/industryDetails";

interface IndustrySolutionsProps {
  heading?: string;
  solutions: SolutionItem[];
}

interface SolutionCardProps {
  item: SolutionItem;
  index: number;
  isScrollable: boolean;
}

function SolutionCard({ item, index, isScrollable }: SolutionCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`min-w-0 shrink-0 bg-surface text-text-heading rounded-2xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between shadow-2xl min-h-[420px] sm:min-h-[460px] group cursor-default select-none ${
        isScrollable
          ? "flex-[0_0_88%] xs:flex-[0_0_84%] sm:flex-[0_0_360px] lg:flex-[0_0_380px] xl:flex-[0_0_400px]"
          : "w-full flex-[0_0_88%] sm:flex-1 sm:max-w-[380px] lg:max-w-[400px]"
      }`}
    >
      <div>
        <h3 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl text-text-heading mb-3 leading-snug">
          {item.title}
        </h3>

        <p className="font-body text-xs sm:text-[13.5px] text-text-body leading-relaxed mb-6 font-normal">
          {item.description}
        </p>

        {item.deliverables && item.deliverables.length > 0 && (
          <ul className="space-y-2.5 mb-6 sm:mb-8">
            {item.deliverables.map((del, dIdx) => (
              <li
                key={dIdx}
                className="flex items-start gap-2.5 font-body text-xs sm:text-[13.5px] text-text-body font-normal leading-relaxed"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-brand-primary-dark mt-1.5 shrink-0"
                  aria-hidden="true"
                />
                <span>{del}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-4 flex justify-center">
        <Link
          href={item.ctaHref || "/contact"}
          className="inline-flex items-center justify-center bg-brand-primary-dark hover:bg-brand-primary text-text-inverse font-semibold text-xs sm:text-sm px-7 py-2.5 rounded-full transition-colors duration-200 shadow-sm self-center mx-auto active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {item.ctaText || "View More"}
        </Link>
      </div>
    </motion.article>
  );
}

export default function IndustrySolutions({
  heading = "Explore Our Solutions",
  solutions = [],
}: IndustrySolutionsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const syncEmblaState = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };

    emblaApi.on("select", syncEmblaState);
    emblaApi.on("reInit", syncEmblaState);

    const frameId = requestAnimationFrame(syncEmblaState);

    return () => {
      cancelAnimationFrame(frameId);
      emblaApi.off("select", syncEmblaState);
      emblaApi.off("reInit", syncEmblaState);
    };
  }, [emblaApi]);

  const isScrollable = scrollSnaps.length > 1;

  return (
    <section
      id="solutions"
      className="w-full bg-brand-primary-dark py-16 sm:py-20 lg:py-24 text-text-inverse overflow-hidden"
      aria-labelledby="solutions-heading"
    >
      <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* Centered Heading with Desktop-Aligned Controls */}
        <div className="relative mb-10 sm:mb-14 lg:mb-16">
          <motion.h2
            id="solutions-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-text-inverse tracking-tight text-center"
          >
            {heading}
          </motion.h2>

          {/* Circular Navigation Buttons on Desktop right / Mobile center only when scrollable */}
          {isScrollable && (
            <div
              className="mt-6 sm:mt-0 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 flex items-center justify-center sm:justify-end gap-3 shrink-0"
              aria-label="Solutions carousel controls"
            >
              <button
                type="button"
                onClick={scrollPrev}
                disabled={prevBtnDisabled}
                aria-label="Previous solutions"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface text-brand-primary-dark hover:bg-surface-muted disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all duration-200 shadow-md active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                disabled={nextBtnDisabled}
                aria-label="Next solutions"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface text-brand-primary-dark hover:bg-surface-muted disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all duration-200 shadow-md active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.2]" />
              </button>
            </div>
          )}
        </div>

        {/* Embla Smooth Carousel Viewport with Centered Cards Track */}
        <div
          ref={emblaRef}
          className={`w-full overflow-hidden pb-2 ${
            isScrollable ? "cursor-grab active:cursor-grabbing" : ""
          }`}
        >
          <div
            className={`flex gap-5 sm:gap-6 lg:gap-7 ${
              isScrollable ? "" : "justify-center"
            }`}
          >
            {solutions.map((item, index) => (
              <SolutionCard
                key={`${item.title}-${index}`}
                item={item}
                index={index}
                isScrollable={isScrollable}
              />
            ))}
          </div>
        </div>

        {/* Centered Pagination Indicators only when scrollable */}
        {isScrollable && (
          <div
            className="mt-8 sm:mt-10 flex justify-center items-center gap-2.5"
            role="tablist"
            aria-label="Solutions carousel slides"
          >
            {scrollSnaps.map((_, idx) => (
              <button
                key={`solution-dot-${idx}`}
                type="button"
                role="tab"
                aria-selected={idx === selectedIndex}
                aria-label={`Go to slide ${idx + 1} of ${scrollSnaps.length}`}
                onClick={() => scrollTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  idx === selectedIndex
                    ? "w-7 bg-accent"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export { IndustrySolutions };