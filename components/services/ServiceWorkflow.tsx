"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { WorkflowStep } from "@/data/services/types";

interface ServiceWorkflowProps {
  heading?: string;
  steps: WorkflowStep[];
}

export default function ServiceWorkflow({
  heading = "Bookkeeping Work-Flow",
  steps = [],
}: ServiceWorkflowProps) {
  const shouldReduceMotion = useReducedMotion();

  if (!steps || steps.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16, scale: shouldReduceMotion ? 1 : 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      aria-labelledby="workflow-heading"
      className="relative w-full bg-white py-14 sm:py-18 lg:py-20 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <motion.h2
          id="workflow-heading"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-2xl sm:text-3xl lg:text-[38px] font-bold text-center text-text-heading mb-12 sm:mb-16 tracking-tight"
        >
          {heading}
        </motion.h2>

        {/* Stepper Row: Full Width matching other sections */}
        <div className="relative w-full mx-auto">
          {/* Horizontal Connecting Line (Desktop) */}
          <motion.div
            initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="hidden md:block absolute top-8 sm:top-9 lg:top-10 xl:top-11 left-[10%] right-[10%] h-[2.5px] bg-border origin-left z-0"
            aria-hidden="true"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-4 w-full"
          >
            {steps.map((step) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="flex flex-col items-center text-center flex-1 w-full sm:w-auto cursor-default group"
              >
                {/* Step Circle with Solid Maroon Background - Well-Proportioned Size */}
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-brand-primary-dark text-white font-bold flex items-center justify-center text-xl sm:text-2xl lg:text-[26px] shadow-lg shadow-black/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:ring-4 group-hover:ring-accent/30 select-none">
                  {step.step}
                </div>

                {/* Step Label (Gold, Clean Sizing, matching Figma) */}
                <p className="font-heading text-sm sm:text-base lg:text-[16.5px] font-bold text-accent mt-4 sm:mt-5 tracking-wide transition-colors duration-200 group-hover:text-accent/80 max-w-[180px] lg:max-w-[220px] text-center">
                  {step.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { ServiceWorkflow };
