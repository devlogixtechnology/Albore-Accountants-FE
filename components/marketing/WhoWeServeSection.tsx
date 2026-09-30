import Image from "next/image";
import Link from "next/link";
import {
  type Pillar,
  defaultPillars as pillars,
  whoWeServeSectionData,
} from "@/data/home/whoWeServeSectionData";
import {
  MotionReveal,
  MotionStaggerGroup,
  MotionStaggerItem,
} from "@/components/ui/motion";

export type { Pillar };

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
      className="w-full pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20"
    >
      <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left: Heading + Paragraph + Rectangular Button */}
          <MotionReveal className="flex flex-col items-start justify-between lg:col-span-5 lg:py-2">
            <div>
              <h2
                id="who-we-serve-heading"
                className="font-heading text-4xl font-extrabold tracking-tight text-text-heading sm:text-5xl"
              >
                {whoWeServeSectionData.heading}
              </h2>

              <p className="mt-6 sm:mt-8 max-w-lg font-body text-base leading-[1.8] text-text-body sm:text-lg">
                {whoWeServeSectionData.description}
              </p>
            </div>

            {/* Sharp "Talk to Partner" CTA */}
            <div className="mt-8 lg:mt-10">
              <Link
                href={whoWeServeSectionData.cta.href}
                className="inline-flex items-center justify-center rounded-none bg-brand-primary px-7 py-3 font-button text-sm font-semibold text-text-inverse shadow-sm transition-all duration-200 hover:bg-brand-primary-dark active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
              >
                {whoWeServeSectionData.cta.label}
              </Link>
            </div>
          </MotionReveal>

          {/* Center Vertical Separator Line */}
          <div
            className="hidden w-px self-stretch bg-accent/30 lg:col-span-1 lg:flex lg:justify-center"
            aria-hidden="true"
          />

          {/* Right: 4 Warm Outline Pillar Cards */}
          <MotionStaggerGroup
            className="flex flex-col gap-5 lg:col-span-6"
            staggerDelay={0.1}
          >
            {pillars.map(({ number, title, description, iconSrc }) => (
              <MotionStaggerItem key={number}>
                <div className="rounded-[16px] sm:rounded-[18px] border border-accent/40 bg-surface px-6 py-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:px-8 sm:py-6">
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
              </MotionStaggerItem>
            ))}
          </MotionStaggerGroup>
        </div>
      </div>
    </section>
  );
}