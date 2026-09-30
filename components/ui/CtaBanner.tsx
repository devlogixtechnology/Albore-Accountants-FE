"use client";

import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export interface CtaAction {
  label: string;
  href: string;
}

export interface CtaBannerProps {
  heading?: string;
  description?: string;
  primaryAction?: CtaAction;
  secondaryAction?: CtaAction | null;
  className?: string;
}

/**
 * Editorial Full-Width Call-to-Action Banner.
 * Grounded 100% in Figma prototype (media_1790617149767.png):
 * - Full-width edge-to-edge warm gold/tan canvas (bg-[#c5a880])
 * - Aligned to max-w-9xl grid matching Hero and Footer (do not reduce width)
 * - Deep maroon phone icon + typography (text-brand-primary-dark)
 * - Single bold primary CTA button: "Talk to Partner"
 * - Fully responsive from 360px phones up to 4K displays
 */
export default function CtaBanner({
  heading = "READY TO TALK?",
  description = "Get direct access to a senior partner someone who understands your business and can give you real, informed answers right away.",
  primaryAction = { label: "Talk to Partner", href: "/contact" },
  secondaryAction = null,
  className = "",
}: CtaBannerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="cta-banner-title"
      className={`w-full bg-banner-gold text-brand-primary-dark shadow-sm overflow-hidden ${className}`}
    >
      <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-8 sm:py-10 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 lg:gap-12"
        >
          {/* Left: Phone Icon + Text Content */}
          <div className="flex items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 flex-1 min-w-0">
            <div className="shrink-0 flex items-center justify-center p-2 rounded-full bg-brand-primary-dark/10 text-brand-primary-dark">
              <PhoneCall
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-brand-primary-dark stroke-[2.2]"
                aria-hidden="true"
              />
            </div>

            <div className="flex flex-col text-left">
              <h2
                id="cta-banner-title"
                className="font-heading text-lg sm:text-2xl lg:text-[28px] font-extrabold tracking-wide uppercase text-brand-primary-dark leading-tight"
              >
                {heading}
              </h2>
              <p className="font-body text-xs sm:text-sm md:text-base lg:text-[16px] text-brand-primary-dark/90 mt-1 sm:mt-1.5 leading-relaxed max-w-3xl font-medium">
                {description}
              </p>
            </div>
          </div>

          {/* Right: CTA Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              href={primaryAction.href}
              className="inline-flex items-center justify-center bg-brand-primary-dark hover:bg-brand-primary text-text-inverse px-8 sm:px-10 py-3.5 sm:py-4 rounded-[4px] font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200 text-center whitespace-nowrap min-h-[44px] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-dark"
            >
              {primaryAction.label}
            </Link>

            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="inline-flex items-center justify-center bg-white/90 hover:bg-white text-brand-primary-dark border border-brand-primary-dark/30 px-8 sm:px-10 py-3.5 sm:py-4 rounded-[4px] font-semibold text-sm sm:text-base shadow-xs hover:shadow-sm transition-all duration-200 text-center whitespace-nowrap min-h-[44px] active:scale-95"
              >
                {secondaryAction.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { CtaBanner, CtaBanner as ReadyToTalkCta, CtaBanner as ServiceCtaBanner };
