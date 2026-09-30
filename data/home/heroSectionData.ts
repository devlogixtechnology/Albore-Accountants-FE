import { siteConfig } from "@/config/site";

export interface HeroStat {
  sequence: number[];
  label: string;
  pad?: number;
  suffix?: string;
}

const ramp = (from: number, to: number, step: number) => {
  const out: number[] = [];
  for (let v = from; v <= to; v += step) out.push(v);
  return out;
};

export const defaultHeroStats: HeroStat[] = [
  { sequence: ramp(20, 120, 20), label: "Client Worldwide" },
  { sequence: ramp(1, 10, 1), label: "Year of Practice", pad: 2 },
  { sequence: ramp(18, 98, 10), label: "Client Retention Rate" },
  { sequence: [10, 15, 18, 20], label: "Countries Served" },
];

export const heroSectionData = {
  titlePart1: "Building Stronger Businesses",
  titlePart2: "Through Financial Clarity",
  subtitle: "Helping businesses grow with financial clarity and confidence.",
  imageSrc: "/images/HomeHero.png",
  imageAlt: "Modern office buildings at sunset",
  primaryCta: {
    label: "Talk to Partner",
    href: siteConfig.cta.partnerHref,
  },
  secondaryCta: null,
  stats: defaultHeroStats,
};

export default heroSectionData;
