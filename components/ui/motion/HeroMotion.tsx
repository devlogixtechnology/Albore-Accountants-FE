"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface HeroContentMotionProps {
  children: ReactNode;
  className?: string;
}

export interface HeroElementMotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}

export interface HeroStatsMotionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Editorial entrance choreography for the Hero headline, copy, and CTAs.
 */
export function HeroContentMotion({
  children,
  className = "",
}: HeroContentMotionProps) {
  return <div className={className}>{children}</div>;
}

export function HeroElementMotion({
  children,
  className = "",
  delay = 0.15,
  distance = 22,
}: HeroElementMotionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : distance,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.8,
              delay,
              ease: [0.16, 1, 0.3, 1],
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Glides the glassmorphism stats bar up into its anchored bottom position on initial page mount.
 */
export function HeroStatsMotion({
  children,
  className = "",
}: HeroStatsMotionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.85,
              delay: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
