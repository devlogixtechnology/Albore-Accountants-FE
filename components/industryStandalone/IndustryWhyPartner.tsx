"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { PartnerPillar } from "@/data/Industries/industryDetails";

const defaultSvgs = [
  "/Icons/industryStandalone/institution.svg",
  "/Icons/industryStandalone/execution.svg",
  "/Icons/industryStandalone/solutions.svg",
  "/Icons/industryStandalone/goal.svg",
];

const svgMap: Record<string, string> = {
  institution: "/Icons/industryStandalone/institution.svg",
  execution: "/Icons/industryStandalone/execution.svg",
  solutions: "/Icons/industryStandalone/solutions.svg",
  goal: "/Icons/industryStandalone/goal.svg",
};

interface IndustryWhyPartnerProps {
  heading?: string;
  subtitle?: string;
  pillars: PartnerPillar[];
}

export default function IndustryWhyPartner({
  heading = "Why Partner With Us",
  subtitle = "Built around the way modern businesses operate.",
  pillars,
}: IndustryWhyPartnerProps) {
  return (
    <section
      className="w-full bg-surface py-16 sm:py-20 2xl:py-24"
      aria-labelledby="why-partner-heading"
    >
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* Centered Header with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          <h2
            id="why-partner-heading"
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-text-heading tracking-tight"
          >
            {heading}
          </h2>

          {subtitle && (
            <p className="font-body text-base sm:text-lg md:text-xl text-text-body/80 mt-3 sm:mt-4 leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* 2x2 Grid with Framer Motion Stagger and Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 sm:gap-x-16 lg:gap-x-20 gap-y-10 sm:gap-y-14 w-full">
          {pillars.map((pillar, index) => {
            const svgSrc =
              pillar.svgIcon ||
              (pillar.icon && svgMap[pillar.icon]) ||
              defaultSvgs[index % defaultSvgs.length];

            return (
              <motion.div
                key={`${pillar.title}-${index}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="flex items-start gap-5 sm:gap-6 group cursor-default p-3 -m-3 rounded-2xl transition-colors duration-200 hover:bg-surface-muted/50"
              >
                {/* SVG Icon with warm tan/brown background badge matching Figma */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-industry-pillar-badge shrink-0 flex items-center justify-center shadow-xs"
                  aria-hidden="true"
                >
                  <Image
                    src={svgSrc}
                    alt=""
                    width={48}
                    height={48}
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                  />
                </motion.div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-heading leading-tight group-hover:text-brand-primary transition-colors duration-200">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-text-body/85 leading-relaxed mt-2.5 max-w-xl">
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
