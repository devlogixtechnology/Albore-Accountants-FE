"use client";

import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export interface CtaAction {
  label: string;
  href: string;
}

export interface CtaBannerProps {
  heading?: string;
  description?: string;
  primaryAction?: CtaAction;
  secondaryAction?: CtaAction;
  className?: string;
}

export default function CtaBanner({
  heading = "READY TO TALK?",
  description = "Get direct access to a senior partner someone who understands your business and can give you real, informed answers right away.",
  primaryAction = { label: "Talk to Partner", href: "/contact" },
  secondaryAction = { label: "Alboré Vault", href: "/portal/login" },
  className = "",
}: CtaBannerProps) {
  return (
    <section
      aria-labelledby="cta-banner-title"
      className={`w-full bg-accent shadow-lg mb-12 sm:mb-16 lg:mb-20 overflow-hidden ${className}`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16 py-6 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 group"
        >
          {/* Left: Phone Icon & Messaging */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-7 flex-1">
            <motion.div
              whileHover={{ scale: 1.08, rotate: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="shrink-0 flex items-center justify-center"
            >
              <PhoneCall
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[68px] lg:h-[68px] text-brand-primary-dark shrink-0 stroke-[2]"
                aria-hidden="true"
              />
            </motion.div>

            <div className="flex flex-col">
              <h3
                id="cta-banner-title"
                className="font-heading text-base sm:text-xl lg:text-2xl font-bold tracking-wider uppercase text-brand-primary-dark leading-tight"
              >
                {heading}
              </h3>
              <p className="font-body text-xs sm:text-sm md:text-base text-white/95 mt-1 sm:mt-1.5 leading-relaxed max-w-xl font-normal">
                {description}
              </p>
            </div>
          </div>

          {/* Center Vertical Divider (Desktop) */}
          <div
            className="hidden lg:block h-16 w-px bg-brand-primary-dark/30 shrink-0"
            aria-hidden="true"
          />

          {/* Right: Dual CTA Buttons with Framer Motion hover & tap */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto shrink-0 justify-start sm:justify-end">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href={primaryAction.href}
                className="inline-flex items-center justify-center bg-brand-primary-dark text-text-inverse px-7 py-3 sm:py-3.5 rounded-lg hover:bg-brand-primary font-bold text-sm sm:text-base shadow-md hover:shadow-xl text-center transition-colors duration-200"
              >
                {primaryAction.label}
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href={secondaryAction.href}
                className="inline-flex items-center justify-center bg-surface-muted text-accent border border-accent/40 hover:bg-surface px-7 py-3 sm:py-3.5 rounded-lg font-bold text-sm sm:text-base shadow-sm hover:shadow-md text-center transition-colors duration-200"
              >
                {secondaryAction.label}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { CtaBanner, CtaBanner as ReadyToTalkCta, CtaBanner as ServiceCtaBanner };
