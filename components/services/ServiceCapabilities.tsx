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
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-10 xl:gap-14">
        {/* Left Column: Image Card with Warm Vignette & Centered Typography */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end shrink-0">
          <div className="relative w-full max-w-[430px] min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl flex items-center justify-center p-6 sm:p-8 md:p-10">
            {/* Background Image */}
            <Image
              src={image}
              alt={cardTitle}
              fill
              sizes="(max-width: 1024px) 100vw, 430px"
              className="object-cover"
            />

            {/* Light Reddish Maroon Overlay allowing background picture to shine through */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#5c1622]/40 via-[#420f18]/25 to-[#5c1622]/45"
              aria-hidden="true"
            />

            {/* Center Content */}
            <div className="relative z-10 text-center px-4 max-w-[340px] mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              <h3 className="font-heading text-2xl sm:text-[28px] lg:text-[32px] font-bold text-white leading-tight tracking-tight">
                {cardTitle}
              </h3>

              {cardDescription && (
                <p className="font-body text-white/95 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed mt-4 sm:mt-5 font-medium">
                  {cardDescription}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Center Vertical Separator (Desktop) */}
        <div
          className="hidden lg:block w-[1px] bg-[#d5cdc3] self-stretch my-2 shrink-0"
          aria-hidden="true"
        />

        {/* Right Column: Capabilities List & CTA */}
        <div className="w-full lg:flex-1 flex flex-col justify-center">
          <h2
            id="capabilities-heading"
            className="font-heading text-xl sm:text-2xl lg:text-[26px] font-bold text-slate-950 tracking-tight mb-5 sm:mb-6"
          >
            {heading}
          </h2>

          {/* Bulleted Capabilities with standard dot bullets */}
          {capabilities.length > 0 && (
            <ul className="space-y-3.5 sm:space-y-4">
              {capabilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span
                    className="text-slate-950 font-bold text-base sm:text-lg leading-tight select-none shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    •
                  </span>
                  <span className="font-body text-sm sm:text-[15.5px] text-slate-900 font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Bottom Descriptive Text */}
          {bottomText && (
            <p className="font-body text-slate-900 text-sm sm:text-[15.5px] leading-relaxed mt-6 sm:mt-7 font-normal">
              {bottomText}
            </p>
          )}

          {/* Action Button */}
          <div className="mt-6 sm:mt-7">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#6B1E2B] text-white px-6 py-2.5 sm:px-7 sm:py-3 rounded-[3px] hover:bg-[#521520] transition-colors font-bold text-sm shadow-sm active:scale-95 text-center"
            >
              Talk to Partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
