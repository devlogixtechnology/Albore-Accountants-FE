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
    <section aria-labelledby="solutions-heading" className="w-full my-6 sm:my-10">
      {/* Heading & Subtitle */}
      <div className="text-center max-w-4xl mx-auto px-4 mb-8 sm:mb-12">
        <h2
          id="solutions-heading"
          className="font-heading text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight"
        >
          {heading}
        </h2>

        {subtitle && (
          <p className="font-body text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* 6-Card Maroon Container (Full Width on Both Sides) */}
      <div className="w-full bg-brand-primary-dark py-12 sm:py-16 shadow-2xl">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {solutions.map((item, idx) => {
              const isImagePath =
                item.icon && (item.icon.startsWith("/") || item.icon.startsWith("http"));
              const isAI = item.icon === "AI";
              const IconComponent = (item.icon && iconMap[item.icon]) || ShieldCheck;

              return (
                <div
                  key={item.title || idx}
                  className="bg-[#f7f4ee] rounded-md p-6 sm:p-7 flex flex-col justify-start shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  {/* Top Icon */}
                  <div className="h-10 w-10 mb-4 flex items-center justify-start">
                    {isImagePath ? (
                      <Image
                        src={item.icon!}
                        alt={item.title}
                        width={36}
                        height={36}
                        className="h-9 w-9 object-contain"
                      />
                    ) : isAI ? (
                      <div className="w-9 h-9 rounded border-2 border-brand-primary flex items-center justify-center text-xs font-bold text-brand-primary select-none">
                        AI
                      </div>
                    ) : (
                      <IconComponent className="w-8 h-8 text-brand-primary stroke-[1.75]" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-xs sm:text-[13.5px] text-slate-700 leading-relaxed mt-2.5">
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

