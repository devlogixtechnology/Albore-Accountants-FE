import Image from "next/image";
import Link from "next/link";

interface Pillar {
  number: string;
  title: string;
  description: string;
  iconSrc: string;
}

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Institutional Expertise",
    description:
      "Deep financial expertise and refined knowledge to handle complex business and financial needs with precision.",
    iconSrc: "/Icons/flowbite_scale-balanced-solid.svg",
  },
  {
    number: "02",
    title: "Strategic Guidance",
    description:
      "Clear, practical financial guidance that helps you navigate complexity and make confident business decisions.",
    iconSrc: "/Icons/fluent_compass-true-north-24-regular.svg",
  },
  {
    number: "03",
    title: "Trusted Partnership",
    description:
      "A long-term relationship built on trust, transparency, and a clear understanding of your business goals.",
    iconSrc: "/Icons/material-symbols_partner-exchange-outline-rounded.svg",
  },
  {
    number: "04",
    title: "Refined Execution",
    description:
      "Accurate, dependable execution across your financial needs, with attention to detail at every step.",
    iconSrc: "/Icons/carbon_radar-enhanced.svg",
  },
];

/**
 * "Who We Serve" Section.
 * Strictly uses design tokens and typography from globals.css:
 * - Rectangular "Talk to Partner" button (rounded-[4px])
 * - Single-line number and title grouping (01 — Institutional Expertise)
 * - Warm gold card border (border-accent/40) on white surface
 * - Seamless spacing into the ornamental divider below
 */
export default function WhoWeServeSection() {
  return (
    <section
      aria-labelledby="who-we-serve-heading"
      className="w-full px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 pt-14 sm:pt-18 md:pt-20 pb-8 sm:pb-12"
    >
      <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left: Heading + Paragraph + Rectangular Button */}
        <div className="flex flex-col items-start justify-between lg:col-span-5 lg:py-2">
          <div>
            <h2
              id="who-we-serve-heading"
              className="font-heading text-4xl font-extrabold tracking-tight text-text-heading sm:text-5xl"
            >
              Who We Serve
            </h2>

            <p className="mt-6 sm:mt-8 max-w-lg font-body text-base leading-[1.8] text-text-body sm:text-lg">
              No two clients are the same — and neither are our solutions.
              Whether you&apos;re scaling fast or managing complexity across
              borders, we tailor our approach to exactly where your business
              stands today.
            </p>
          </div>

          {/* Rectangular "Talk to Partner" CTA matching Figma screenshot */}
          <div className="mt-8 lg:mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[4px] bg-brand-primary px-7 py-3 font-button text-sm font-semibold text-text-inverse shadow-sm transition-all duration-200 hover:bg-brand-primary-dark active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
            >
              Talk to Partner
            </Link>
          </div>
        </div>

        {/* Center Vertical Separator Line */}
        <div
          className="hidden w-px self-stretch bg-accent/30 lg:col-span-1 lg:flex lg:justify-center"
          aria-hidden="true"
        />

        {/* Right: 4 Warm Outline Pillar Cards */}
        <div className="flex flex-col gap-5 lg:col-span-6">
          {pillars.map(({ number, title, description, iconSrc }) => (
            <div
              key={number}
              className="rounded-[16px] sm:rounded-[18px] border border-accent/40 bg-surface px-6 py-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:px-8 sm:py-6"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Brand Maroon Vector Icon */}
                <div className="flex shrink-0 items-center justify-center pt-0.5 text-brand-primary">
                  <Image
                    src={iconSrc}
                    alt=""
                    width={44}
                    height={44}
                    unoptimized
                    className="h-10 w-10 sm:h-11 sm:w-11 shrink-0"
                  />
                </div>

                {/* Content Block with Single-Line Title */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 sm:gap-2.5">
                    <span className="font-heading text-xl font-bold tracking-tight text-text-heading sm:text-2xl">
                      {number}
                    </span>
                    <span className="text-lg font-normal text-text-body/40 sm:text-xl">
                      —
                    </span>
                    <h3 className="font-heading text-xl font-bold tracking-tight text-text-heading sm:text-2xl">
                      {title}
                    </h3>
                  </div>

                  {/* Compact indented description */}
                  <p className="mt-1.5 text-left font-body text-xs leading-relaxed text-text-body sm:text-[13.5px]">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}