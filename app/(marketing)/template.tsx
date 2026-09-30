"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Next.js App Router Marketing Template:
 * Automatically re-mounts on every route navigation, providing smooth,
 * dignified whole-page entrance transitions across the entire website
 * (Home -> Services -> Services Slugs -> Industries -> Industries Slugs -> Insights).
 */
export default function MarketingTemplate({
  children,
}: {
  children: ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 14,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }
      }
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
