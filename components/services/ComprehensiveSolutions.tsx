import Image from "next/image";
import {
  BookOpen,
  Calendar,
  FileText,
  Award,
  TrendingUp,
  Receipt,
  FileSpreadsheet,
  ShieldCheck,
  Cpu,
  CheckCheck,
  BarChart3,
  PieChart,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import type { SolutionCard } from "@/data/services/types";

interface ComprehensiveSolutionsProps {
  heading?: string;
  subtitle?: string;
  solutions?: SolutionCard[];
}

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Calendar,
  FileText,
  Award,
  TrendingUp,
  Receipt,
  FileSpreadsheet,
  ShieldCheck,
  Cpu,
  CheckCheck,
  BarChart3,
  PieChart,
  Briefcase,
};

export default function ComprehensiveSolutions({
  heading = "Comprehensive BookKeeping Solution",
  subtitle,
  solutions = [],
}: ComprehensiveSolutionsProps) {
  if (!solutions || solutions.length === 0) return null;

  return (
    <section aria-labelledby="solutions-heading" className="w-full">
      {/* 1. Header on Clean White Background (Left-Aligned matching Hero width) */}
      <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-10 sm:pt-12 lg:pt-14 pb-6 sm:pb-8 text-left">
        <h2
          id="solutions-heading"
          className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-bold text-text-heading tracking-tight leading-snug"
        >
          {heading}
        </h2>

        {subtitle && (
          <p className="font-body text-text-body text-xs sm:text-sm md:text-[15px] leading-relaxed mt-2.5 sm:mt-3 max-w-3xl font-normal">
            {subtitle}
          </p>
        )}
      </div>

      {/* 2. Full-Bleed Deep Maroon Container with 6 White Cards matching Hero width */}
      <div className="w-full bg-brand-primary-dark py-10 sm:py-12 lg:py-16 shadow-xl">
        <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {solutions.map((item, idx) => {
              const isImagePath =
                item.icon && (item.icon.startsWith("/") || item.icon.startsWith("http"));
              const isAI = item.icon === "AI";
              const IconComponent = (item.icon && iconMap[item.icon]) || ShieldCheck;

              return (
                <div
                  key={item.title || idx}
                  className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col justify-start shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  {/* Top Icon */}
                  <div className="h-10 w-10 mb-3.5 flex items-center justify-start">
                    {isImagePath ? (
                      <Image
                        src={item.icon!}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="h-8 w-8 sm:h-9 sm:w-9 object-contain object-left"
                      />
                    ) : isAI ? (
                      <div className="w-9 h-9 rounded-md border-2 border-brand-primary flex items-center justify-center text-xs font-bold text-brand-primary select-none">
                        AI
                      </div>
                    ) : (
                      <IconComponent className="w-8 h-8 text-brand-primary stroke-[1.6]" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-base sm:text-[17px] font-bold text-text-heading leading-snug mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-xs sm:text-[13px] text-text-body leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export { ComprehensiveSolutions };
