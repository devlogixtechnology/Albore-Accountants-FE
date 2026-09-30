"use client";

import {
  Target,
  FileSpreadsheet,
  Sliders,
  Percent,
  Building2,
  Workflow,
  Sparkles,
  Users,
  Cpu,
  FileCheck2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import type { PartnerPillar } from "@/data/Industries/industryDetails";

const iconMap: Record<string, LucideIcon> = {
  reconciliation: Target,
  tracking: FileSpreadsheet,
  solutions: Sliders,
  compliance: Percent,
  institution: Building2,
  execution: Workflow,
  goal: Target,
  users: Users,
  cpu: Cpu,
  filecheck2: FileCheck2,
  filecheck: FileCheck2,
  shieldcheck: ShieldCheck,
  shield: ShieldCheck,
};

function getIcon(name?: string): LucideIcon {
  if (!name) return Sparkles;
  const key = name.toLowerCase().replace(/[-_ ]/g, "");
  return iconMap[key] || Sparkles;
}

interface IndustryWhyPartnerProps {
  heading?: string;
  eyebrow?: string;
  subtitle?: string;
  pillars: PartnerPillar[];
}

export default function IndustryWhyPartner({
  heading = "Why Partner With Us",
  eyebrow = "WHAT SETS US APART",
  subtitle = "Built around the way modern businesses operate",
  pillars,
}: IndustryWhyPartnerProps) {
  return (
    <section
      className="w-full bg-surface py-16 sm:py-20 lg:py-24"
      aria-labelledby="why-partner-heading"
    >
      <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-left">
        {/* Left-Aligned Header Area matching Figma */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-left max-w-3xl mb-12 sm:mb-16"
        >
          {eyebrow && (
            <p className="font-heading text-xs sm:text-sm font-bold text-brand-primary tracking-wider uppercase mb-2.5">
              {eyebrow}
            </p>
          )}

          <h2
            id="why-partner-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-text-heading tracking-tight leading-[1.15]"
          >
            {heading}
          </h2>

          {subtitle && (
            <p className="font-body text-sm sm:text-base text-text-body mt-2.5 font-normal">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* 2x2 Grid of Pillars with Outlined Circular Icons matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 sm:gap-x-16 lg:gap-x-20 gap-y-10 sm:gap-y-14 w-full">
          {pillars.map((pillar, index) => {
            const IconComponent = getIcon(pillar.icon);

            return (
              <motion.div
                key={`${pillar.title}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="flex items-start gap-5 sm:gap-6 group cursor-default"
              >
                {/* Outlined Circular Icon in Maroon matching Figma */}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-[1.5px] border-brand-primary/40 flex items-center justify-center shrink-0 text-brand-primary bg-brand-primary/5 group-hover:border-brand-primary group-hover:bg-brand-primary/10 transition-all duration-300"
                  aria-hidden="true"
                >
                  <IconComponent className="w-6 h-6 stroke-[1.75]" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-lg sm:text-[21px] text-text-heading leading-snug mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-xs sm:text-[14px] text-text-body leading-relaxed font-normal max-w-xl">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { IndustryWhyPartner };
