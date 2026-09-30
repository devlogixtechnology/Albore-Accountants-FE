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
      className="relative w-full bg-service-hero text-white py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden"
    >
      {/* Subtle geometric polygon wireframe background matching Figma */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        viewBox="0 0 1200 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M480 40 L160 280 L540 460 L1080 180 Z"
          stroke="var(--color-gold)"
          strokeWidth="1.5"
        />
        <path d="M480 40 L540 460" stroke="var(--color-gold)" strokeWidth="1" />
        <path d="M160 280 L1080 180" stroke="var(--color-gold)" strokeWidth="1" />
      </svg>

      <div className="relative z-10 w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Typography & Single CTA */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left">
            <h1
              id="service-hero-title"
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] font-bold text-white tracking-tight leading-[1.12]"
            >
              {service.title}
            </h1>

            {service.heroTagline && (
              <p className="font-heading text-base sm:text-xl lg:text-2xl text-white/95 font-medium mt-3 sm:mt-4 leading-relaxed">
                {service.heroTagline}
              </p>
            )}

            <div className="mt-8 sm:mt-10 flex items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-brand-primary-dark hover:bg-brand-primary text-white border border-white/30 font-semibold text-sm sm:text-base px-8 py-3.5 rounded-md transition-all duration-200 shadow-sm active:scale-95 text-center min-h-[44px]"
              >
                Talk to Partner
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Image with Tailored Double-Curve Arch Frame matching Figma */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[620px] xl:max-w-[680px] h-[260px] sm:h-[340px] lg:h-[400px] xl:h-[460px] rounded-tl-[80px] sm:rounded-tl-[130px] lg:rounded-tl-[160px] rounded-bl-[80px] sm:rounded-bl-[130px] lg:rounded-bl-[160px] rounded-tr-xl sm:rounded-tr-2xl rounded-br-xl sm:rounded-br-2xl overflow-hidden shadow-2xl">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 680px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ServiceHero };
