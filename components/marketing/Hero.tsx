import type { ReactNode } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import { StatsBar, DEFAULT_STATS, type Stat } from "./StatsBar";

export type HeroProps = {
  title?: ReactNode;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  scrim?: boolean;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: Stat[] | null;
};

const DEFAULT_TITLE = (
  <>
    Clarity Behind Every Decision. <br className="hidden lg:inline" />
    Confidence Behind Every Number
  </>
);

const DEFAULT_SUBTITLE =
  "For over a decade, Alboré has partnered with growing businesses and private clients to deliver institutional-grade accounting with a personal touch — built on trust, discretion, and technical excellence.";

export function Hero({
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  imageSrc = "/images/hero-skyline.jpg",
  imageAlt = "",
  scrim = false,
  primaryCta = {
    label: siteConfig.cta.partnerLabel,
    href: siteConfig.cta.partnerHref,
  },
  secondaryCta = {
    label: siteConfig.cta.portalLabel,
    href: siteConfig.portal.loginHref,
  },
  stats = DEFAULT_STATS,
}: HeroProps) {
  return (
    <section className="relative w-full">
      <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden sm:min-h-[600px] lg:h-[718px] lg:min-h-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {scrim && (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[var(--albore-overlay)]"
          />
        )}

        <div className="relative flex w-full justify-center px-5 py-16 sm:px-6 lg:pb-[190px]">
          <div className="flex max-w-[700px] flex-col items-center text-center lg:max-w-[860px]">
            <h1 className="text-pretty text-[28px] font-bold leading-[1.18] text-white sm:text-[36px] lg:text-[48px]">
              {title}
            </h1>

            <p className="mt-5 max-w-[672px] text-pretty text-[15px] leading-[1.6] text-white/95 sm:mt-6 sm:text-[17px]">
              {subtitle}
            </p>

            <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-3 sm:mt-9 sm:w-auto sm:gap-4">
              <Button
                href={primaryCta.href}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto rounded-none font-bold shadow-md hover:shadow-lg"
              >
                {primaryCta.label}
              </Button>
              <Button
                href={secondaryCta.href}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-none font-bold border-accent text-accent hover:bg-accent hover:text-white bg-black/20 backdrop-blur-xs"
              >
                {secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {stats && (
        <div className="relative z-20 w-full max-w-9xl mx-auto px-4 sm:px-8 lg:px-14 xl:px-16 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-[106px]">
          <StatsBar stats={stats} />
        </div>
      )}
    </section>
  );
}
