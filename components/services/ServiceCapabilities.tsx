import Image from "next/image";
import Link from "next/link";

interface ServiceCapabilitiesProps {
  cardTitle?: string;
  cardDescription?: string;
  heading?: string;
  capabilities?: string[];
  bottomText?: string;
  image: string;
}

export default function ServiceCapabilities({
  cardTitle = "Precise, Scalable Systems",
  cardDescription,
  heading = "Key capabilities include:",
  capabilities = [],
  bottomText,
  image,
}: ServiceCapabilitiesProps) {
  return (
    <section aria-labelledby="capabilities-heading" className="w-full my-10 sm:my-14 lg:my-16">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-10 lg:gap-14 xl:gap-20">
        {/* Left Column: Image Card with Warm Vignette & Centered Typography */}
        <div className="w-full lg:w-[48%] flex justify-center lg:justify-end shrink-0">
          <div className="relative w-full max-w-[480px] lg:max-w-[520px] min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl flex items-center justify-center p-8 sm:p-10 md:p-12">
            {/* Background Image */}
            <Image
              src={image}
              alt={cardTitle}
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
            />

            {/* Light Reddish Maroon Overlay allowing background picture to shine through */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-brand-primary-dark/40 via-brand-contrast/25 to-brand-primary-dark/45"
              aria-hidden="true"
            />

            {/* Center Content */}
            <div className="relative z-10 text-center px-4 max-w-[360px] mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              <h3 className="font-heading text-2xl sm:text-[28px] lg:text-[34px] font-bold text-white leading-tight tracking-tight">
                {cardTitle}
              </h3>

              {cardDescription && (
                <p className="font-body text-white/95 text-xs sm:text-sm lg:text-[15px] leading-relaxed mt-4 sm:mt-5 font-medium">
                  {cardDescription}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Capabilities List & CTA */}
        <div className="w-full lg:flex-1 flex flex-col justify-center lg:pl-4 xl:pl-8">
          <h2
            id="capabilities-heading"
            className="font-heading text-xl sm:text-2xl lg:text-[26px] font-bold text-text-heading tracking-tight mb-5 sm:mb-6"
          >
            {heading}
          </h2>

          {/* Bulleted Capabilities with standard dot bullets */}
          {capabilities.length > 0 && (
            <ul className="space-y-3.5 sm:space-y-4">
              {capabilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span
                    className="text-brand-primary font-bold text-base sm:text-lg leading-tight select-none shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    •
                  </span>
                  <span className="font-body text-sm sm:text-[15.5px] text-text-body font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Bottom Descriptive Text */}
          {bottomText && (
            <p className="font-body text-text-body text-sm sm:text-[15.5px] leading-relaxed mt-6 sm:mt-7 font-normal">
              {bottomText}
            </p>
          )}

          {/* Action Button */}
          <div className="mt-6 sm:mt-7">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-primary text-white px-6 py-2.5 sm:px-7 sm:py-3 rounded-[3px] hover:bg-brand-primary-dark transition-colors font-bold text-sm shadow-sm active:scale-95 text-center"
            >
              Talk to Partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
