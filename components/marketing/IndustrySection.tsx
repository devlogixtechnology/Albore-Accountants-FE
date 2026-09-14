"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import IndustryCard, { type Industry } from "../ui/IndustryCard";

/**
 * 6 industry sectors matching the Figma design counter (01/06).
 */
const industries: Industry[] = [
  {
    label: "Retail & Trade",
    image: "/images/IndustrySection/IndustrySection1.png",
    href: "/industries/retail-trade",
  },
  {
    label: "Real Estate",
    image: "/images/IndustrySection/IndustrySection2.png",
    href: "/industries/real-estate",
  },
  {
    label: "Financial Services",
    image: "/images/IndustrySection/IndustrySection3.png",
    href: "/industries/financial-services",
  },
  {
    label: "Energy & Resources",
    image: "/images/IndustrySection/IndustrySection4.png",
    href: "/industries/energy-resources",
  },
  {
    label: "Technology & Media",
    image: "/images/IndustrySection/IndustrySection1.png",
    href: "/industries/technology-media",
  },
  {
    label: "Manufacturing & Logistics",
    image: "/images/IndustrySection/IndustrySection2.png",
    href: "/industries/manufacturing-logistics",
  },
];

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
      aria-labelledby="explore-industries-heading"
      className="w-full px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 py-6 sm:py-8 lg:py-10"
    >
      {/* Heading & Controls Row (Heading centered, controls on right on md+) */}
      <div className="relative flex flex-col md:flex-row items-center justify-center min-h-[48px] w-full">
        {/* Centered Heading */}
        <h2
          id="explore-industries-heading"
          className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-text-heading tracking-tight text-center"
        >
          Explore All Industries
        </h2>

        {/* Right-aligned Counter & Navigation Buttons */}
        <div className="mt-4 md:mt-0 md:absolute md:right-0 flex items-center gap-4 sm:gap-6 self-center md:self-auto">
          {/* Dynamic Counter */}
          <span className="font-body text-sm sm:text-base md:text-lg font-medium text-text-body tracking-wider select-none">
            {paddedIndex}/{paddedCount}
          </span>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Previous Button */}
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              aria-label="Previous industry"
              className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full transition-all duration-200 ${
                canScrollPrev
                  ? "bg-surface-muted text-text-heading hover:bg-surface-muted/80 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                  : "bg-surface-muted/70 text-text-heading/35 cursor-not-allowed"
              }`}
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              aria-label="Next industry"
              className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full transition-all duration-200 ${
                canScrollNext
                  ? "bg-brand-primary text-text-inverse hover:bg-brand-primary-dark hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                  : "bg-brand-primary/70 text-text-inverse/40 cursor-not-allowed"
              }`}
            >
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Embla Carousel Viewport */}
      <div
        className="mt-6 sm:mt-8 md:mt-10 overflow-hidden cursor-grab active:cursor-grabbing select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-[20px] sm:rounded-[24px]"
        ref={emblaRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label="Industries carousel"
      >
        <div className="flex gap-4 sm:gap-5 md:gap-6 will-change-transform">
          {industries.map((industry, index) => (
            <div
              key={industry.label}
              className="min-w-0 shrink-0"
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
