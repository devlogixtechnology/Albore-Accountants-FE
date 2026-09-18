"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SectionDivider from "@/components/ui/SectionDivider";
import { ServiceCard, type Service } from "./ServiceCard";

export const DEFAULT_SERVICES: Service[] = [
  {
    title: "Assurance & Audits",
    description:
      "Precise daily transaction tracking, ledger reconciliation, and real-time financial reporting to keep your business fully organized.",
    href: "/services/assurance-audits",
  },
  {
    title: "Financial Advisory",
    description:
      "Guidance on estimating post-career needs and building steady income streams.",
    href: "/services/financial-advisory",
  },
  {
    title: "Tax Services",
    description:
      "Comprehensive tax planning and cross-border advisory services ensuring full compliance, minimizing liabilities, and supporting financial stability.",
    href: "/services/tax-services",
  },
  {
    title: "Bookkeeping",
    description:
      "Accurate day-to-day record keeping and month-end closes, so your accounts are always ready for review, lending, or filing.",
    href: "/services/book-keeping",
  },
  {
    title: "Payroll Management",
    description:
      "End-to-end payroll processing, statutory deductions, and filings handled on schedule and in line with current regulation.",
    href: "/services/payroll-management",
  },
  {
    title: "Corporate Compliance",
    description:
      "Company secretarial support, statutory registers, and regulatory filings kept current across every jurisdiction you operate in.",
    href: "/services/corporate-compliance",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export type ServicesSectionProps = {
  heading?: string;
  services?: Service[];
};

export function ServicesSection({
  heading = "Our Services",
  services = DEFAULT_SERVICES,
}: ServicesSectionProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const step = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const first = track.firstElementChild as HTMLElement | null;
    if (!first) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    return first.getBoundingClientRect().width + gap;
  }, []);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const s = step();
    setIndex(s ? Math.round(track.scrollLeft / s) : 0);
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft >= track.scrollWidth - track.clientWidth - 1);
  }, [step]);

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
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    trackRef.current?.scrollBy({
      left: dir * step(),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      className="w-full bg-white pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-14 lg:pb-14"
      aria-labelledby="services-heading"
    >
      <SectionDivider />

      <div className="mt-6 w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="relative flex items-center justify-center">
          <h2
            id="services-heading"
            className="text-center text-[26px] font-bold text-ink sm:text-[32px] lg:text-[40px]"
          >
            {heading}
          </h2>
        </div>

        <div className="mt-3 sm:mt-4 flex items-center justify-between sm:justify-end gap-3 sm:gap-5">
          <p
            className="text-sm sm:text-[17px] lg:text-[20px] text-body tabular-nums font-semibold"
            aria-live="polite"
          >
            {pad(index + 1)}/{pad(services.length)}
          </p>
          <div className="flex items-center gap-2.5 sm:gap-4">
            <CarouselButton
              direction="prev"
              disabled={atStart}
              onClick={() => scrollByCards(-1)}
            />
            <CarouselButton
              direction="next"
              disabled={atEnd}
              onClick={() => scrollByCards(1)}
            />
          </div>
        </div>

        {/* Dynamic Track displaying 5 cards on desktop */}
        <ul
          ref={trackRef}
          className="albore-no-scrollbar mt-6 sm:mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {services.map((service) => (
            <li
              key={service.title}
              className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-10px)] md:w-[calc(33.333%-13.34px)] lg:w-[calc(20%-16px)]"
            >
              <ServiceCard {...service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CarouselButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const isNext = direction === "next";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isNext ? "Next services" : "Previous services"}
      className={`flex h-9 w-9 sm:h-11 sm:w-11 lg:h-[50px] lg:w-[50px] items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
        disabled
          ? "cursor-not-allowed bg-cream text-gold ring-1 ring-gold ring-inset"
          : "bg-maroon text-white hover:bg-maroon-hover"
      }`}
    >
      <svg
        viewBox="0 0 20 14"
        fill="none"
        aria-hidden="true"
        className={`h-3 w-4 sm:h-3.5 sm:w-5 ${isNext ? "" : "rotate-180"}`}
      >
        <path
          d="M1 7h17M12 1l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
