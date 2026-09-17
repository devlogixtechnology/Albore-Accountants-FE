"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import IndustryCard from "../ui/IndustryCard";
import { industriesData as industries } from "@/data/contactData";

/**
 * "Explore All Industries" Carousel Section
 * Fully responsive across mobile, tablet, desktop, and ultra-wide screens.
 */
export default function IndustrySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
    duration: 35, // Smooth gradual ease-out curve
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // React 19 safe initial state sync deferred to a microtask
    queueMicrotask(onSelect);

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Keyboard accessibility (ArrowLeft / ArrowRight navigation)
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!emblaApi) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        emblaApi.scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        emblaApi.scrollNext();
      }
    },
    [emblaApi]
  );

  const paddedIndex = String(selectedIndex + 1).padStart(2, "0");
  const paddedCount = String(industries.length).padStart(2, "0");

  return (
    <section
      aria-labelledby="industries-heading"
      className="w-full overflow-hidden py-6 sm:py-8 lg:py-10"
    >
      {/* Constrained Header Container */}
      <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* HEADER & CONTROLS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 md:mb-12 gap-5 sm:gap-6">
          <div>
            {/* Eyebrow */}
            <span className="block font-body text-xs font-bold text-text-accent uppercase tracking-[0.3em] mb-2 sm:mb-3">
              Verticalized Expertise
            </span>

            {/* Heading */}
            <h2
              id="industries-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-text-heading tracking-tight leading-tight"
            >
              Excellence Across Sectors
              <span className="sr-only">
                {" "}
                - Industry-Specific Accounting, Tax, and Advisory
              </span>
            </h2>
          </div>

          {/* Controls: Counter + Arrows + Drag hint */}
          <div className="flex items-center gap-2.5 sm:gap-4 self-start md:self-end">
            {/* Dynamic Counter */}
            <span className="font-heading text-xs sm:text-sm md:text-base font-bold text-brand-primary tracking-wider select-none min-w-[40px] sm:min-w-[50px]">
              {paddedIndex}/{paddedCount}
            </span>

            {/* Navigation Buttons Matching Brand Color Theme */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canScrollPrev}
                aria-label="Scroll industries left"
                className={`flex h-8 w-8 sm:h-9 sm:w-9 md:h-11 md:w-11 items-center justify-center rounded-none border transition-all duration-300 ${
                  canScrollPrev
                    ? "border-accent/60 bg-cream text-gold hover:bg-cream-hover hover:border-accent cursor-pointer active:scale-95 shadow-xs"
                    : "border-border/50 bg-surface-muted text-text-body/30 cursor-not-allowed"
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canScrollNext}
                aria-label="Scroll industries right"
                className={`flex h-8 w-8 sm:h-9 sm:w-9 md:h-11 md:w-11 items-center justify-center rounded-none border transition-all duration-300 ${
                  canScrollNext
                    ? "border-brand-primary bg-brand-primary text-text-inverse hover:bg-brand-primary-dark hover:border-brand-primary-dark cursor-pointer active:scale-95 shadow-sm"
                    : "border-border/50 bg-surface-muted text-text-body/30 cursor-not-allowed"
                }`}
              >
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>
            </div>

            <p
              aria-hidden="true"
              className="hidden sm:inline-block text-[11px] uppercase tracking-widest text-text-body/50 ml-2 select-none"
            >
              Drag to Explore
            </p>
          </div>
        </div>
      </div>

      {/* Embla Carousel Track bounded by max-w-9xl */}
      <div
        className="w-full max-w-9xl mx-auto cursor-grab active:cursor-grabbing select-none overflow-hidden px-6 sm:px-10 lg:px-14 xl:px-16 focus-visible:outline-none"
        ref={emblaRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label="Industries carousel"
      >
        <div className="flex gap-6 will-change-transform">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="flex-shrink-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${industries.length}`}
            >
              <IndustryCard {...industry} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
