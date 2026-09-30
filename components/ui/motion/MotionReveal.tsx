"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";

export interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
  margin?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
}

/**
 * Editorial motion reveal for section headers, copy blocks, and standalone containers.
 * Grounded in the /frontend-design philosophy:
 * - Dignified, restrained travel distance (default 20px).
 * - Luxury editorial easing curve ([0.16, 1, 0.3, 1]).
 * - Immediate accessibility fallback when `prefers-reduced-motion: reduce` is enabled.
 */
export function MotionReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.65,
  distance = 20,
  direction = "up",
  once = true,
  margin = "-60px",
  as = "div",
}: MotionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion || direction === "none") return { x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: distance };
    }
  };

  const initialPos = getInitialPosition();

  const transition: Transition = shouldReduceMotion
    ? { duration: 0 }
    : {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      };

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      initial={{
        opacity: 0,
        x: initialPos.x,
        y: initialPos.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once,
        margin,
      }}
      transition={transition}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

export default MotionReveal;
