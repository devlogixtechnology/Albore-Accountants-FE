"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SectionDivider } from "./SectionDivider";
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
      className="w-full bg-white pb-14 pt-14 sm:pb-16 lg:pb-20 lg:pt-[128px]"
      aria-labelledby="services-heading"
    >
      <SectionDivider />

      <div className="mt-6 w-full px-4 sm:px-6">
        <div className="mx-auto w-full max-w-(--container-content)">
          <div className="relative flex items-center justify-center">
            <h2
              id="services-heading"
              className="text-center text-[26px] font-bold text-ink sm:text-[32px] lg:text-[40px]"
            >
              {heading}
            </h2>
          </div>

          <div className="mt-4 flex items-center justify-center gap-5 sm:justify-end">
            <p
              className="text-[17px] text-body tabular-nums sm:text-[20px]"
              aria-live="polite"
            >
              {pad(index + 1)}/{pad(services.length)}
            </p>
            <div className="flex items-center gap-4">
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

          <ul
            ref={trackRef}
            className="albore-no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
          >
            {services.map((service) => (
              <li
                key={service.title}
                className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.34px)]"
              >
                <ServiceCard {...service} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SectionDivider className="mt-10" />
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
      className={`flex h-[52px] w-[52px] items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
        disabled
          ? "cursor-not-allowed bg-cream text-gold ring-1 ring-gold ring-inset"
          : "bg-maroon text-white hover:bg-maroon-hover"
      }`}
    >
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        aria-hidden="true"
        className={isNext ? "" : "rotate-180"}
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
