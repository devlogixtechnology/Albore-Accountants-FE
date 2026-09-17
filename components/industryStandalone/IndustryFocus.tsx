"use client";

import type { ElementType } from "react";
import {
  ShoppingCart,
  ShoppingBag,
  TrendingUp,
  Shield,
  Users,
  Target,
  BarChart3,
  LineChart,
  Sparkles,
  Factory,
  Cpu,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import type { FocusItem } from "@/data/Industries/industryDetails";

const iconMap: Record<string, ElementType> = {
  ShoppingCart,
  ShoppingBag,
  TrendingUp,
  Shield,
  Users,
  Target,
  BarChart3,
  LineChart,
  Factory,
  Cpu,
  Zap,
};

interface IndustryFocusProps {
  heading?: string;
  items: FocusItem[];
}

export default function IndustryFocus({
  heading = "Industry Focus",
  items,
}: IndustryFocusProps) {
  return (
    <section
      className="w-full bg-surface py-16 sm:py-20 2xl:py-24"
      aria-labelledby="industry-focus-heading"
    >
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* Centered Heading with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2
            id="industry-focus-heading"
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-text-heading tracking-tight"
          >
            {heading}
          </h2>
        </motion.div>

        {/* 4 Sharp-Edged Cards Grid with Framer Motion Stagger & Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-8">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <motion.article
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className="bg-surface border border-border border-t-2 border-t-brand-primary rounded-none p-8 sm:p-10 flex flex-col items-center text-center shadow-sm group cursor-default"
              >
                {/* Tinted icon squircle badge matching Figma with hover micro-interaction */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6"
                  aria-hidden="true"
                >
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-brand-primary stroke-[1.75]" />
                </motion.div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-text-heading mb-3.5 leading-snug group-hover:text-brand-primary transition-colors duration-200">
                  {item.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-text-body/80 leading-relaxed max-w-[280px]">
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
