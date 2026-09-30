import type { ReactNode } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { StatsBar, type Stat } from "./StatsBar";
import { heroSectionData } from "@/data/home/heroSectionData";
import { HeroElementMotion, HeroStatsMotion } from "@/components/ui/motion";

export type HeroProps = {
  title?: ReactNode;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  scrim?: boolean;
  primaryCta?: { label: string; href: string } | null;
  secondaryCta?: { label: string; href: string } | null;
  stats?: Stat[] | null;
};

const DEFAULT_TITLE = (
  <>
    {heroSectionData.titlePart1} <br className="hidden sm:inline" />
    {heroSectionData.titlePart2}
  </>
);

export function Hero({
  title = DEFAULT_TITLE,
  subtitle = heroSectionData.subtitle,
  imageSrc = heroSectionData.imageSrc,
  imageAlt = heroSectionData.imageAlt,
  scrim = false,
  primaryCta = heroSectionData.primaryCta,
  secondaryCta = heroSectionData.secondaryCta,
  stats = heroSectionData.stats,
}: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-burgundy-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Brand-tinted gradient overlay ensures strong contrast behind headline while leaving bottom stats area clear */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 bottom-[64px] sm:bottom-[70px] bg-gradient-to-r from-brand-contrast/75 via-brand-contrast/30 via-45% to-transparent pointer-events-none"
        />
        {scrim && (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[var(--albore-overlay)]"
          />
        )}
      </div>

      {/* Hero Content + Stats Bar container: simple, clean, +100px height for optimal proportion */}
      <div className="relative z-10 flex min-h-[580px] sm:min-h-[660px] lg:h-[720px] lg:min-h-0 flex-col justify-between">
        {/* Main Content Area: centered vertically within the upper hero space */}
        <div className="flex flex-1 items-center w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-10 pb-6 sm:pt-12 sm:pb-8 lg:py-0">
          <div className="max-w-[680px] text-left">
            <HeroElementMotion delay={0.15} distance={22}>
              <h1 className="text-pretty font-heading text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-bold leading-[1.14] tracking-[-0.015em] text-white">
                {title}
              </h1>
            </HeroElementMotion>

            <HeroElementMotion delay={0.3} distance={18}>
              <p className="mt-3.5 sm:mt-4 max-w-[540px] text-pretty font-body text-[14.5px] sm:text-[15.5px] md:text-[16px] leading-[1.6] text-white/90">
                {subtitle}
              </p>
            </HeroElementMotion>

            <HeroElementMotion delay={0.45} distance={16}>
              <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-4">
                {primaryCta && (
                  <Button
                    href={primaryCta.href}
                    variant="primary"
                    size="lg"
                    className="rounded-[4px] px-7 py-3 sm:px-8 sm:py-3.5 font-button text-sm sm:text-base font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    href={secondaryCta.href}
                    variant="outline"
                    size="lg"
                    className="rounded-[4px] px-7 py-3.5 font-button text-sm sm:text-base font-semibold tracking-wide border-accent text-accent hover:bg-accent hover:text-white bg-black/20 backdrop-blur-xs"
                  >
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            </HeroElementMotion>
          </div>
        </div>

        {/* Full-width transparent blurry stats bar pinned at bottom of hero */}
        {stats && (
          <HeroStatsMotion className="w-full">
            <StatsBar stats={stats} variant="blur" />
          </HeroStatsMotion>
        )}
      </div>
    </section>
  );
}

