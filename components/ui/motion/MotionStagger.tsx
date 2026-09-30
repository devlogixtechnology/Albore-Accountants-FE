"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface MotionStaggerGroupProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  once?: boolean;
  margin?: string;
  as?: "div" | "ul" | "ol" | "section";
}

export interface MotionStaggerItemProps {
  children: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
  as?: "div" | "li" | "article";
}

/**
 * Orchestrated parent container for staggered grid and list items.
 * Triggers children sequentially once the group scrolls into view.
 */
export function MotionStaggerGroup({
  children,
  className = "",
  staggerDelay = 0.08,
  initialDelay = 0.1,
  once = true,
  margin = "-60px",
  as = "div",
}: MotionStaggerGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            staggerChildren: staggerDelay,
            delayChildren: initialDelay,
          },
    },
  };

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        margin,
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * Child item inside a MotionStaggerGroup.
 * Glides smoothly into place with the firm's editorial easing curve.
 */
export function MotionStaggerItem({
  children,
  className = "",
  distance = 20,
  duration = 0.65,
  as = "div",
}: MotionStaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            duration,
            ease: [0.16, 1, 0.3, 1],
          },
    },
  };

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent variants={itemVariants} className={className}>
      {children}
    </MotionComponent>
  );
}
