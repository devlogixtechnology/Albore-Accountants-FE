import Link from "next/link";
import { PhoneCall } from "lucide-react";

interface ServiceCtaBannerProps {
  className?: string;
}

export default function ServiceCtaBanner({ className = "" }: ServiceCtaBannerProps) {
  return (
    <section
      aria-labelledby="service-cta-title"
      className={`w-full bg-[#b08d57] shadow-lg mb-12 sm:mb-16 lg:mb-20 ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        {/* Left: Phone Icon & Messaging */}
        <div className="flex items-start sm:items-center gap-4 sm:gap-6 flex-1">
          <PhoneCall
            className="w-10 h-10 sm:w-12 lg:w-14 sm:h-12 lg:h-14 text-brand-primary-dark shrink-0 stroke-[1.75] mt-1 sm:mt-0"
            aria-hidden="true"
          />

          <div className="flex flex-col">
            <h3
              id="service-cta-title"
              className="font-heading text-base sm:text-xl lg:text-2xl font-bold tracking-wider uppercase text-brand-primary-dark leading-tight"
            >
              READY TO TALK?
            </h3>
            <p className="font-body text-xs sm:text-sm md:text-base text-white/95 mt-1 sm:mt-1.5 leading-relaxed max-w-xl font-normal">
              Get direct access to a senior partner someone who understands your business and can give you real, informed answers right away
            </p>
          </div>
        </div>

        {/* Center Vertical Divider (Desktop) */}
        <div
          className="hidden lg:block h-16 w-px bg-brand-primary-dark/30 shrink-0"
          aria-hidden="true"
        />

        {/* Right: Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto shrink-0 justify-start sm:justify-end">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-brand-primary-dark text-white px-7 py-3 sm:py-3.5 rounded-lg hover:bg-brand-primary font-bold text-sm sm:text-base transition-all duration-300 shadow-md active:scale-95 text-center"
          >
            Talk to Partner
          </Link>

          <Link
            href="/portal/login"
            className="inline-flex items-center justify-center bg-[#fbf7ee] text-[#b08d57] border border-[#d2bc96] hover:bg-white px-7 py-3 sm:py-3.5 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 shadow-sm active:scale-95 text-center"
          >
            Alboré Vault
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}

export { ServiceCtaBanner };

