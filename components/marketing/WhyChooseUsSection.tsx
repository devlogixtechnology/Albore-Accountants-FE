import type { ElementType } from "react";
import { Earth, Lock, BadgeCheck, Gauge, Scale } from "lucide-react";
import {
  defaultDifferentiators,
  whyChooseUsSectionData,
  type WhyChooseUsItem,
} from "@/data/home/whyChooseUsSectionData";
import {
  MotionReveal,
  MotionStaggerGroup,
  MotionStaggerItem,
} from "@/components/ui/motion";

export { defaultDifferentiators };
export type { WhyChooseUsItem };

export interface WhyChooseUsSectionProps {
  className?: string;
}

/**
 * Pixel-faithful Multilateral Cross-Border Matrix node network icon
 * matching the Figma prototype's 5-node hub-and-spoke topology.
 */
function MultilateralMatrixIcon({
  className = "h-5 w-5 sm:h-5.5 sm:w-5.5",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="2.2" />
      <circle cx="12" cy="4" r="1.8" />
      <circle cx="19.5" cy="8.5" r="1.8" />
      <circle cx="18" cy="18" r="1.8" />
      <circle cx="6" cy="18" r="1.8" />
      <circle cx="4.5" cy="8.5" r="1.8" />
      <line x1="12" y1="9.8" x2="12" y2="5.8" />
      <line x1="13.8" y1="10.8" x2="17.8" y2="9.2" />
      <line x1="13.5" y1="13.5" x2="16.5" y2="16.5" />
      <line x1="10.5" y1="13.5" x2="7.5" y2="16.5" />
      <line x1="10.2" y1="10.8" x2="6.2" y2="9.2" />
    </svg>
  );
}

const ICON_MAP: Record<string, ElementType> = {
  earth: Earth,
  lock: Lock,
  badgeCheck: BadgeCheck,
  gauge: Gauge,
  scale: Scale,
  matrix: MultilateralMatrixIcon,
};

export default function WhyChooseUsSection({
  className = "",
}: WhyChooseUsSectionProps) {
  return (
    <section
      aria-labelledby="fiduciary-distinction-heading"
      className={`w-full bg-surface pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-10 ${className}`}
    >
      {/* 1. Executive Header on white canvas */}
      <MotionReveal>
        <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="max-w-3xl">
            <p className="font-heading text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-maroon-hover">
              {whyChooseUsSectionData.eyebrow}
            </p>
            <h2
              id="fiduciary-distinction-heading"
              className="mt-2.5 font-heading text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold tracking-tight text-ink leading-[1.14]"
            >
              {whyChooseUsSectionData.headingPart1}{" "}
              <span className="text-accent">
                {whyChooseUsSectionData.headingPart2}
              </span>{" "}
              {whyChooseUsSectionData.headingPart3}
            </h2>
            <p className="mt-3.5 font-body text-sm sm:text-base text-body/80 leading-relaxed max-w-3xl">
              {whyChooseUsSectionData.description}
            </p>
          </div>
        </div>
      </MotionReveal>

      {/* 2. Deep Maroon Banner with 6 White Cards Grid */}
      <div className="w-full bg-brand-primary-dark mt-10 sm:mt-12 py-12 sm:py-14 lg:py-16">
        <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <MotionStaggerGroup
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7"
            staggerDelay={0.08}
          >
            {whyChooseUsSectionData.differentiators.map(
              ({ id, iconName, title, description }) => {
                const Icon = ICON_MAP[iconName] || Earth;
                return (
                  <MotionStaggerItem key={id || title}>
                    <div className="group flex flex-col justify-start rounded-[16px] sm:rounded-[18px] bg-surface p-6 sm:p-7 lg:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-border/40 h-full">
                      {/* Outlined Icon Box in Brand Maroon */}
                      <div className="mb-4 sm:mb-5 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-[10px] border border-border/80 bg-surface text-maroon shadow-2xs transition-colors duration-200 group-hover:border-maroon/30 group-hover:bg-cream-100/60">
                        <Icon
                          className="h-5 w-5 sm:h-5.5 sm:w-5.5"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Feature Title */}
                      <h3 className="font-heading text-base sm:text-lg lg:text-[19px] font-bold text-ink tracking-tight leading-snug">
                        {title}
                      </h3>

                      {/* Feature Description */}
                      <p className="mt-2.5 font-body text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed text-neutral-600">
                        {description}
                      </p>
                    </div>
                  </MotionStaggerItem>
                );
              }
            )}
          </MotionStaggerGroup>
        </div>
      </div>
    </section>
  );
}
