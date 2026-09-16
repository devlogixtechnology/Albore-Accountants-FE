import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services/types";

interface ServiceHeroProps {
  service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section
      aria-labelledby="service-hero-title"
      className="relative w-full bg-[#3a0d15] text-white shadow-2xl overflow-hidden"
    >
      {/* Subtle geometric line art background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-15"
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M600 -100 L1300 250 L950 700"
          stroke="#b08d57"
          strokeWidth="1.5"
        />
        <path
          d="M800 -200 L1400 150 L1100 650"
          stroke="#b08d57"
          strokeWidth="1"
        />
        <path
          d="M-100 400 L400 700"
          stroke="#b08d57"
          strokeWidth="1"
        />
      </svg>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <h1
            id="service-hero-title"
            className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight"
          >
            {service.title}
          </h1>

          {service.heroTagline && (
            <p className="font-heading text-base sm:text-xl text-[#b08d57] font-semibold mt-2 sm:mt-2.5 tracking-wide">
              {service.heroTagline}
            </p>
          )}

          <p className="font-body text-white/95 text-xs sm:text-base font-medium leading-relaxed mt-3 sm:mt-4 max-w-xl">
            {service.heroDescription}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#51121d] text-white border border-white/40 px-6 py-3 sm:py-2.5 rounded-md hover:bg-[#6b1e2b] font-bold text-sm transition-all duration-200 shadow-sm active:scale-95 text-center"
            >
              Talk to Partner
            </Link>

            <Link
              href="/portal/login"
              className="inline-flex items-center justify-center bg-[#fbf7ee] text-[#b08d57] px-6 py-3 sm:py-2.5 rounded-md hover:bg-white font-bold text-sm transition-all duration-200 shadow-sm active:scale-95 text-center"
            >
              Alboré Vault
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Image with Tailored Double-Curve Arch Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-[480px] h-[220px] sm:h-[320px] lg:h-[360px] rounded-tl-[70px] sm:rounded-tl-[120px] lg:rounded-tl-[150px] rounded-bl-[70px] sm:rounded-bl-[120px] lg:rounded-bl-[150px] rounded-tr-xl sm:rounded-tr-2xl rounded-br-xl sm:rounded-br-2xl overflow-hidden shadow-2xl">
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export { ServiceHero };

