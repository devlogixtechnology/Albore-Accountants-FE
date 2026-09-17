"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import type { IndustryDetailData } from "@/data/Industries/industryDetails";

interface IndustryHeroProps {
  data: IndustryDetailData;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function IndustryHero({ data }: IndustryHeroProps) {
  return (
    <header className="relative w-full bg-industry-hero min-h-115 sm:min-h-130 2xl:min-h-145 flex items-center overflow-hidden group">
      {/* 1. Full-Bleed Photography Overlay with Subtle Zoom Animation */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.95 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <Image
          src={data.heroImage || "/industrypage/IndsutryStandaloneHeroBg.png"}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-industry-hero via-industry-hero/50 to-transparent md:via-transparent"
          aria-hidden="true"
        />
      </motion.div>

      {/* 2. Fluid Content Container matching Header alignment */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 py-16 sm:py-20 lg:py-24 2xl:py-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl 2xl:max-w-3xl text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold text-text-inverse tracking-tight leading-tight"
          >
            {data.title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-heading font-medium text-base sm:text-xl 2xl:text-2xl text-text-inverse/95 mt-3 sm:mt-4 leading-snug"
          >
            {data.subtitle}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="font-body text-sm sm:text-base 2xl:text-lg text-text-inverse/80 mt-4 sm:mt-5 leading-relaxed"
          >
            {data.heroDescription}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-7 sm:mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block"
            >
              <Button
                variant="accent"
                size="lg"
                href={data.heroCta?.href || "#solutions"}
                className="h-12 sm:h-14 px-8 sm:px-10 text-sm sm:text-base font-semibold rounded-full shadow-md border-none"
              >
                {data.heroCta?.label || "Get Started"}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
