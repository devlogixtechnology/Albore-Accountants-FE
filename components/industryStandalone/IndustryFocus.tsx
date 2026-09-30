"use client";

import {
  ShoppingCart,
  ShoppingBag,
  TrendingUp,
  Shield,
  ShieldCheck,
  Users,
  Target,
  BarChart3,
  LineChart,
  Sparkles,
  Factory,
  Cpu,
  Zap,
  Sliders,
  FileCheck2,
  Building2,
  Landmark,
  Laptop,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import type { FocusItem } from "@/data/Industries/industryDetails";

const iconMap: Record<string, LucideIcon> = {
  // Retail & Trade
  shoppingcart: ShoppingCart,
  shoppingbag: ShoppingBag,
  trendingup: TrendingUp,
  shield: Shield,
  shieldcheck: ShieldCheck,
  users: Users,
  // Manufacturing
  factory: Factory,
  barchart3: BarChart3,
  barchart: BarChart3,
  // Real Estate
  building2: Building2,
  building: Building2,
  filecheck2: FileCheck2,
  filecheck: FileCheck2,
  // Financial Services
  landmark: Landmark,
  linechart: LineChart,
  // Energy & Resources
  zap: Zap,
  // Technology & Media
  laptop: Laptop,
  cpu: Cpu,
  sliders: Sliders,
  // General / Fallbacks
  target: Target,
  sparkles: Sparkles,
};

function getIcon(name?: string): LucideIcon {
  if (!name) return Sparkles;
  const key = name.toLowerCase().replace(/[-_ ]/g, "");
  return iconMap[key] || Sparkles;
}

interface IndustryFocusProps {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  items: FocusItem[];
}

export default function IndustryFocus({
  eyebrow = "WHERE WE SPECIALISE",
  heading = "Industry Focus",
  subtitle = "Practical, sector-specific expertise built around the industries where our clients actually operate.",
  items,
}: IndustryFocusProps) {
  return (
    <section
      className="w-full bg-surface py-16 sm:py-20 lg:py-24"
      aria-labelledby="industry-focus-heading"
    >
      <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-left">
        {/* Left-Aligned Header Area matching Reference Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-left max-w-3xl mb-12 sm:mb-14"
        >
          {eyebrow && (
            <p className="font-heading text-xs sm:text-sm font-bold text-brand-primary tracking-wider uppercase mb-2.5">
              {eyebrow}
            </p>
          )}

          <h2
            id="industry-focus-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-text-heading tracking-tight leading-[1.15]"
          >
            {heading}
          </h2>

          {subtitle && (
            <p className="font-body text-sm sm:text-base text-text-body mt-2.5 font-normal max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* 4 Crisp Elevated Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 w-full">
          {items.map((item, index) => {
            const IconComponent = getIcon(item.icon);
            return (
              <motion.article
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.09,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className="bg-surface border border-border border-t border-t-brand-primary/35 rounded pt-9 pb-10 px-6 sm:px-7 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.06),0_2px_8px_rgb(0,0,0,0.03)] hover:shadow-[0_16px_36px_-4px_rgba(0,0,0,0.1),0_4px_12px_-2px_rgba(0,0,0,0.05)] hover:border-t-brand-primary transition-all duration-300 group cursor-default"
              >
                {/* Deep Maroon Squircle Badge with Warm Gold Icon */}
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-primary flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 group-hover:bg-brand-primary-dark transition-all duration-300"
                  aria-hidden="true"
                >
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-gold-champagne stroke-[1.75]" />
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-[19px] text-text-heading mb-2.5 leading-snug group-hover:text-brand-primary transition-colors duration-200">
                  {item.title}
                </h3>

                <p className="font-body text-xs sm:text-[13.5px] text-text-body leading-relaxed max-w-[250px] mx-auto">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
