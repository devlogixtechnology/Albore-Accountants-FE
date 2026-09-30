"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ServiceCard } from "./ServiceCard";
import {
  DEFAULT_SERVICES,
  servicesSectionHeader,
  type HomeService,
} from "@/data/home/servicesSectionData";
import { MotionReveal } from "@/components/ui/motion";

export { DEFAULT_SERVICES };

export type ServicesSectionProps = {
  eyebrow?: string;
  headingPart1?: string;
  headingPart2?: string;
  description?: string;
  services?: HomeService[];
};

/**
 * Editorial Interactive Practice Capabilities Amphitheater Carousel Slider.
 * Grounded 100% in Figma prototype (media_1790762201686.png):
 * - Specialized Practice Capabilities two-tone headline
 * - Clean flat 2D amphitheater formation with symmetrical arch curves (no distorted 3D perspective)
 * - Center card (Audit & Assurance) active by default, elevated with deep maroon header & shadow bloom
 * - Neighboring cards step down smoothly with coordinated dusty rose and faded rose headers
 * - Smooth horizontal carousel slider with continuous momentum & swipe precision (Embla engine)
 * - Circular floating maroon navigation buttons (< and >) on both flanks
 * - Pennant V-point cards with responsive drop-shadow
 * - Seamless touch swipe, mouse drag, and keyboard navigation
 * - Responsive from 360px phones up to 4K displays
 */
export function ServicesSection({
  eyebrow = servicesSectionHeader.eyebrow,
  headingPart1 = servicesSectionHeader.headingPart1,
  headingPart2 = servicesSectionHeader.headingPart2,
  description = servicesSectionHeader.description,
  services = DEFAULT_SERVICES,
}: ServicesSectionProps) {
  // Repeat the 5 services 3 times (15 slides) for seamless infinite buffer in both directions
  const repeatedServices = useMemo(() => {
    return [
      ...services.map((s, i) => ({ ...s, originalIndex: i, uid: `set0-${i}` })),
      ...services.map((s, i) => ({ ...s, originalIndex: i, uid: `set1-${i}` })),
      ...services.map((s, i) => ({ ...s, originalIndex: i, uid: `set2-${i}` })),
    ];
  }, [services]);

  // Initial index 7 centers "Audit & Assurance" (index 2 of the middle set)
  const initialIndex = 7;
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const [windowWidth, setWindowWidth] = useState(1280);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: initialIndex,
    align: "center",
    skipSnaps: false,
    duration: 26,
  });

  const totalSlides = repeatedServices.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Seamless invisible recentering when drifting near outer bounds of the 3 sets
  const onSettle = useCallback(() => {
    if (!emblaApi) return;
    const current = emblaApi.selectedScrollSnap();
    if (current < 3) {
      emblaApi.scrollTo(current + 5, true);
    } else if (current > 11) {
      emblaApi.scrollTo(current - 5, true);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("settle", onSettle);

    const frameId = requestAnimationFrame(onSelect);

    return () => {
      cancelAnimationFrame(frameId);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("settle", onSettle);
    };
  }, [emblaApi, onSelect, onSettle]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollNext, scrollPrev]);

  // Calculate circular signed distance from selectedIndex
  const getSignedDiff = (index: number) => {
    let diff = index - selectedIndex;
    if (diff > totalSlides / 2) diff -= totalSlides;
    if (diff < -totalSlides / 2) diff += totalSlides;
    return diff;
  };

  const handleCardClick = (index: number) => {
    if (index !== selectedIndex && emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const activeOriginalIndex = selectedIndex % services.length;

  return (
    <section
      aria-labelledby="services-heading"
      className="w-full bg-white pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20 overflow-hidden select-none"
    >
      <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* 1. Header with Eyebrow, Two-Tone Headline, and Description matching Figma */}
        <MotionReveal>
          <div className="max-w-3xl text-left">
            <p className="font-heading text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] text-maroon-hover">
              {eyebrow}
            </p>

            <h2
              id="services-heading"
              className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold tracking-tight leading-[1.12]"
            >
              <span className="block text-slate-900">{headingPart1}</span>
              <span className="block text-accent">{headingPart2}</span>
            </h2>

            <p className="mt-3.5 sm:mt-4 font-body text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed font-normal">
              {description}
            </p>
          </div>
        </MotionReveal>

        {/* 2. Interactive Amphitheater Carousel Arena with Floating Flank Buttons */}
        <div className="relative mt-12 sm:mt-16 lg:mt-20">
          {/* Floating Left Carousel Navigation Button */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous service capability"
            className="absolute -left-3 sm:-left-4 lg:-left-5 xl:-left-6 top-1/2 -translate-y-1/2 z-40 flex h-11 w-11 sm:h-12 sm:w-12 lg:h-13 lg:w-13 items-center justify-center rounded-full bg-brand-primary-dark hover:bg-brand-primary text-white shadow-xl transition-all duration-200 active:scale-90 hover:scale-105 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-dark"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 sm:h-6 sm:w-6 -translate-x-0.5"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Floating Right Carousel Navigation Button */}
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next service capability"
            className="absolute -right-3 sm:-right-4 lg:-right-5 xl:-right-6 top-1/2 -translate-y-1/2 z-40 flex h-11 w-11 sm:h-12 sm:w-12 lg:h-13 lg:w-13 items-center justify-center rounded-full bg-brand-primary-dark hover:bg-brand-primary text-white shadow-xl transition-all duration-200 active:scale-90 hover:scale-105 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-dark"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 sm:h-6 sm:w-6 translate-x-0.5"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Embla Viewport with vertical clearance for elevated hero bloom */}
          <div
            ref={emblaRef}
            className="overflow-hidden py-10 sm:py-14 lg:py-18 cursor-grab active:cursor-grabbing"
          >
            {/* Slider Track */}
            <div className="flex touch-pan-y items-center -ml-2.5 sm:-ml-3 lg:-ml-3.5 xl:-ml-4">
              {repeatedServices.map((service, index) => {
                const diff = getSignedDiff(index);
                const dist = Math.abs(diff);
                const isCenter = dist === 0;
                const isAdjacent = dist === 1;
                const isOuter = dist === 2;

                // Symmetrical amphitheater arch curve based on distance from center
                const zIndex = isCenter ? 30 : isAdjacent ? 20 : isOuter ? 10 : 0;

                const scale = isCenter
                  ? isMobile
                    ? 1.02
                    : 1.05
                  : isAdjacent
                  ? isMobile
                    ? 0.98
                    : 0.97
                  : isOuter
                  ? 0.92
                  : 0.88;

                const yOffset = isCenter
                  ? isMobile
                    ? -8
                    : isTablet
                    ? -14
                    : -22
                  : isAdjacent
                  ? 0
                  : isOuter
                  ? isMobile
                    ? 8
                    : 18
                  : 28;

                const opacity = isCenter
                  ? 1
                  : isAdjacent
                  ? isMobile
                    ? 0.75
                    : 0.88
                  : isOuter
                  ? isMobile
                    ? 0.4
                    : 0.58
                  : 0; // Offscreen cards fade completely

                return (
                  <div
                    key={service.uid}
                    style={{ zIndex }}
                    className="flex-[0_0_82%] xs:flex-[0_0_75%] sm:flex-[0_0_46%] md:flex-[0_0_33.33%] lg:flex-[0_0_20%] min-w-0 pl-2.5 sm:pl-3 lg:pl-3.5 xl:pl-4 relative"
                  >
                    <div
                      style={{
                        transform: `translateY(${yOffset}px) scale(${scale})`,
                        opacity,
                        transformOrigin: "center center",
                        transition:
                          "transform 420ms cubic-bezier(0.25, 1, 0.5, 1), opacity 380ms ease",
                      }}
                      className="relative w-full"
                    >
                      <ServiceCard
                        service={service}
                        isActive={isCenter}
                        distanceFromActive={dist}
                        onClick={() => handleCardClick(index)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. Slider Pagination Pill Indicators */}
        <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2">
          {services.map((item, idx) => {
            const isSelected = idx === activeOriginalIndex;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => {
                  const targetIndex = repeatedServices.findIndex(
                    (s, sIdx) =>
                      s.originalIndex === idx &&
                      Math.abs(sIdx - selectedIndex) <= 2
                  );
                  if (targetIndex !== -1) {
                    emblaApi?.scrollTo(targetIndex);
                  } else {
                    emblaApi?.scrollTo(idx + 5);
                  }
                }}
                aria-label={`Slide to ${item.title}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "w-8 bg-brand-primary-dark"
                    : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

