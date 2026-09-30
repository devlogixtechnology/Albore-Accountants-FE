"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { WhatWeDoItem } from "@/data/services/types";

interface ServiceWhatWeDoProps {
  heading?: string;
  subtitle?: string;
  intro?: string;
  items: WhatWeDoItem[];
}

type CardVariant = "maroon" | "gold";
type CardDirection = "left" | "right" | "up";

interface ServiceCardProps {
  item: WhatWeDoItem;
  variant: CardVariant;
  direction: CardDirection;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Single card used by both the desktop zigzag and the mobile stack.
 * maroon -> solid brand-primary-dark, white text
 * gold   -> white card with thin champagne border, near-black text
 */
function ServiceCard({
  item,
  variant,
  direction,
  delay = 0,
  className = "",
  style,
}: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isMaroon = variant === "maroon";

  const offset = shouldReduceMotion ? 0 : direction === "up" ? 16 : 20;
  const initial =
    direction === "up"
      ? { opacity: 0, y: offset }
      : { opacity: 0, x: direction === "left" ? -offset : offset };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      style={style}
      className={`w-full rounded-[8px] p-6 sm:p-7 lg:p-8 xl:p-8.5 transition-shadow duration-300 ${
        isMaroon
          ? "bg-brand-primary-dark text-white shadow-md shadow-brand-primary-dark/12"
          : "bg-white border-[1.5px] border-border-champagne-dark text-text-heading shadow-sm shadow-black/5"
      } ${className}`}
    >
      <h3
        className={`font-heading text-base sm:text-[18px] lg:text-[19.5px] xl:text-[20.5px] font-bold leading-snug mb-2.5 sm:mb-3 ${
          isMaroon ? "text-white" : "text-text-heading"
        }`}
      >
        {item.title}
      </h3>

      <p
        className={`font-body text-xs sm:text-[13.5px] lg:text-[14px] leading-[1.68] font-normal ${
          isMaroon ? "text-white/90" : "text-text-body"
        }`}
      >
        {item.description}
      </p>
    </motion.div>
  );
}

/**
 * Service "What We Do" section (Figma: faiza-project, node 4210-1276).
 * Grounded 100% in Figma reference (media_1790766957833.png):
 * - Left-aligned editorial header with maroon "What we do" eyebrow
 * - Central brown/maroon vertical border line running down the middle
 * - Alternating 2-column card stair-step stagger:
 *   * Card 1 (Left, Solid Maroon #51121d, white text)
 *   * Card 2 (Right, White with warm champagne border, dark text) starts vertically right where Card 1 ends
 *   * Card 3 (Left, Solid Maroon) starts vertically right where Card 2 ends
 *   * Card 4 (Right, White with border) starts vertically right where Card 3 ends
 * - Clean width alignment so cards fill their respective columns up to the center spine
 * - Responsive mobile stack with alternating card styles
 */
export default function ServiceWhatWeDo({
  heading = "What we do",
  subtitle = "Everything your books need, handled",
  intro = "Every audit engagement runs on tested procedures — nothing is left to assumption.",
  items = [],
}: ServiceWhatWeDoProps) {
  const shouldReduceMotion = useReducedMotion();

  if (!items || items.length === 0) return null;

  return (
    <section
      aria-labelledby="what-we-do-heading"
      className="w-full bg-white py-14 sm:py-18 lg:py-24 overflow-hidden"
    >
      <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-left">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-3xl mb-10 sm:mb-14 lg:mb-16"
        >
          {heading && (
            <p className="font-heading text-xs sm:text-[13px] font-bold uppercase tracking-[0.12em] text-maroon-hover mb-2">
              {heading}
            </p>
          )}

          <h2
            id="what-we-do-heading"
            className="font-heading text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-extrabold text-text-heading tracking-tight leading-[1.15]"
          >
            {subtitle || "Everything your books need, handled"}
          </h2>

          {intro && (
            <p className="font-body text-xs sm:text-sm md:text-[15px] text-text-body leading-relaxed mt-3 font-normal max-w-2xl">
              {intro}
            </p>
          )}
        </motion.div>

        {/* Desktop Staggered Zigzag (>= md) with Center Brown Line */}
        <div className="hidden md:grid grid-cols-2 gap-x-8 lg:gap-x-12 xl:gap-x-16 gap-y-3.5 sm:gap-y-4 relative items-start">
          {/* Center bold brown/maroon border line with crisp square ends */}
          <motion.div
            initial={{ scaleY: shouldReduceMotion ? 1 : 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: EASE }}
            style={{ originY: 0 }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[5px] lg:w-[6px] bg-brand-primary-dark pointer-events-none z-10"
            aria-hidden="true"
          />

          {items.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <ServiceCard
                key={item.title || i}
                item={item}
                variant={isLeft ? "maroon" : "gold"}
                direction={isLeft ? "left" : "right"}
                delay={0.08 + i * 0.1}
                // Dynamic row placement ensures each card starts at the bottom level of the previous card
                style={{ gridRow: i + 1 }}
                className={isLeft ? "col-start-1 w-full" : "col-start-2 w-full"}
              />
            );
          })}
        </div>

        {/* Mobile stack (< md) */}
        <div className="md:hidden flex flex-col gap-4 sm:gap-5 mt-6">
          {items.map((item, i) => (
            <ServiceCard
              key={item.title || i}
              item={item}
              variant={i % 2 === 0 ? "maroon" : "gold"}
              direction="up"
              delay={i * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { ServiceWhatWeDo };