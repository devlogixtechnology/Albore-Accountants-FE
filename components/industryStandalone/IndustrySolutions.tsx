"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { SolutionItem } from "@/data/Industries/industryDetails";

interface IndustrySolutionsProps {
  heading?: string;
  solutions: SolutionItem[];
}

export default function IndustrySolutions({
  heading = "Explore Our Solutions",
  solutions,
}: IndustrySolutionsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  // Default to 1 page if 3 or fewer cards on desktop, or solutions.length - 3 + 1
  const [pageCount, setPageCount] = useState<number>(() =>
    Math.max(1, solutions.length - 3 + 1)
  );
  const [activeDot, setActiveDot] = useState<number>(0);
  const [canScroll, setCanScroll] = useState<boolean>(false);

  const updateMetrics = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const isScrollable = maxScroll > 10;
    setCanScroll(isScrollable);

    const cardNodes = Array.from(el.children) as HTMLElement[];
    if (!cardNodes.length) return;

    if (!isScrollable) {
      setPageCount(1);
      setActiveDot(0);
      return;
    }

    const cardWidth = cardNodes[0].offsetWidth;
    const cardGap =
      cardNodes.length > 1
        ? cardNodes[1].offsetLeft - cardNodes[0].offsetLeft - cardWidth
        : 24;
    const stride = cardWidth + cardGap;
    const visibleCards = Math.max(
      1,
      Math.floor((el.clientWidth + cardGap) / stride)
    );
    const totalPages = Math.max(1, cardNodes.length - visibleCards + 1);
    setPageCount(totalPages);

    if (totalPages <= 1) {
      setActiveDot(0);
      return;
    }

    const scrollRatio = Math.max(0, Math.min(1, el.scrollLeft / maxScroll));
    const currentDot = Math.min(
      totalPages - 1,
      Math.max(0, Math.round(scrollRatio * (totalPages - 1)))
    );
    setActiveDot(currentDot);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateMetrics();

    const handleScroll = () => {
      updateMetrics();
    };

    el.addEventListener("scroll", handleScroll, { passive: true });

    const resizeObserver = new ResizeObserver(() => {
      updateMetrics();
    });
    resizeObserver.observe(el);

    window.addEventListener("resize", updateMetrics);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateMetrics);
    };
  }, [updateMetrics]);

  const scrollToPage = (pageIndex: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;

    const cardNodes = Array.from(el.children) as HTMLElement[];
    let targetScroll = 0;

    if (pageIndex >= pageCount - 1) {
      targetScroll = maxScroll;
    } else if (cardNodes[pageIndex]) {
      targetScroll = Math.min(
        cardNodes[pageIndex].offsetLeft - el.offsetLeft,
        maxScroll
      );
    } else {
      targetScroll = (pageIndex / Math.max(1, pageCount - 1)) * maxScroll;
    }

    el.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: "smooth",
    });
    setActiveDot(pageIndex);
  };

  const handleArrow = (direction: "left" | "right") => {
    const nextDot =
      direction === "left"
        ? Math.max(0, activeDot - 1)
        : Math.min(pageCount - 1, activeDot + 1);
    scrollToPage(nextDot);
  };

  return (
    <section
      id="solutions"
      className="w-full bg-industry-solutions py-16 sm:py-20 2xl:py-28 text-text-inverse"
      aria-labelledby="solutions-heading"
    >
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* Centered Heading with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <h2
            id="solutions-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-text-inverse tracking-tight"
          >
            {heading}
          </h2>
        </motion.div>

        {/* Carousel Container Centered with Standard Max-Width */}
        <div className="relative w-full max-w-7xl 2xl:max-w-[1600px] mx-auto min-w-0">
          {/* Arrow navigation buttons with Framer Motion micro-interactions */}
          {solutions.length > 1 && (
            <div
              className="flex justify-end gap-2.5 mb-6"
              aria-label="Solutions carousel controls"
            >
              <motion.button
                type="button"
                onClick={() => handleArrow("left")}
                disabled={activeDot === 0}
                aria-label="Previous solutions"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-surface text-text-inverse hover:text-industry-solutions disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-colors duration-200 shadow-sm"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2]" />
              </motion.button>
              <motion.button
                type="button"
                onClick={() => handleArrow("right")}
                disabled={activeDot >= pageCount - 1}
                aria-label="Next solutions"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-surface text-text-inverse hover:text-industry-solutions disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-colors duration-200 shadow-sm"
              >
                <ChevronRight className="w-5 h-5 stroke-[2]" />
              </motion.button>
            </div>
          )}

          {/* Multi-Card Track Centered when fitting, with snap-center on scroll */}
          <div
            ref={scrollRef}
            className={`w-full max-w-full min-w-0 overflow-x-auto albore-no-scrollbar snap-x snap-mandatory flex gap-6 2xl:gap-8 pb-4 scroll-smooth ${
              canScroll ? "justify-start" : "justify-center"
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {solutions.map((item, index) => (
              <motion.article
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className="flex-[0_0_88%] sm:flex-[0_0_360px] lg:flex-[0_0_380px] 2xl:flex-[0_0_420px] min-w-0 shrink-0 snap-center bg-industry-card text-text-heading rounded-none p-7 sm:p-8 2xl:p-9 flex flex-col justify-between border border-border shadow-lg group"
              >
                <div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-heading mb-3 leading-snug group-hover:text-brand-primary transition-colors duration-200">
                    {item.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-text-body leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {item.deliverables && item.deliverables.length > 0 && (
                    <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-text-body">
                      {item.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0 group-hover:scale-125 transition-transform duration-200"
                            aria-hidden="true"
                          />
                          <span className="leading-snug">{del}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-4 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="accent"
                      href={item.ctaHref || "/contact"}
                      className="rounded-full px-7 py-2.5 text-xs sm:text-sm font-semibold border-none shadow-sm"
                    >
                      {item.ctaText || "View More"}
                    </Button>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Centered Pagination Indicators - Proportional to number of scroll pages */}
          {pageCount > 0 && (
            <div
              className="mt-8 flex justify-center items-center gap-2.5"
              role="tablist"
              aria-label="Solutions carousel slides"
            >
              {Array.from({ length: pageCount }).map((_, idx) => (
                <motion.button
                  key={`solution-dot-${idx}`}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeDot}
                  aria-label={`Go to slide ${idx + 1} of ${pageCount}`}
                  onClick={() => scrollToPage(idx)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeDot
                      ? "w-8 bg-accent"
                      : "w-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                ></motion.button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}