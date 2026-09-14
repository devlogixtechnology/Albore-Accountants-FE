import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * Public marketing footer.
 * Fully responsive across all devices:
 * - Mobile: Fluid stacked layout, touch-friendly tap targets, balanced typography.
 * - Tablet: Compact horizontal badge and 3-column navigation.
 * - Desktop: Full-bleed flush layout aligned with page gutters.
 * Uses semantic tokens from globals.css.
 */
export default function PublicFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-primary text-text-inverse font-body">
      {/* Upper Main Footer Container */}
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-start pb-10 lg:pb-12">
          {/* Left Badge Card (Enlarged Logo & Accreditation Text, flush at top) */}
          <div className="w-full sm:max-w-[480px] lg:w-[440px] xl:w-[509px] shrink-0 bg-accent rounded-t-none rounded-b-[32px] sm:rounded-b-[40px] px-6 sm:px-10 md:px-12 pt-10 sm:pt-12 md:pt-14 pb-8 sm:pb-10 md:pb-11 flex flex-col items-center justify-between text-center shadow-lg self-center lg:self-start h-auto min-h-[380px] sm:min-h-[420px] lg:h-[460px] xl:h-[480px]">
            <div>
              <Link
                href="/"
                className="inline-block transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
              >
                <Image
                  src="/images/branding/albore_logo_white_transparent.png"
                  alt={siteConfig.name}
                  width={280}
                  height={85}
                  priority
                  className="h-14 sm:h-16 md:h-20 lg:h-22 w-auto object-contain mx-auto"
                />
              </Link>

              <p className="mt-5 sm:mt-7 md:mt-8 text-base sm:text-lg md:text-xl lg:text-[22px] font-bold text-text-heading leading-snug tracking-tight font-body">
                Internationally Accredited Practice
                <br />
                ISO 27001 Certified for Data Security
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4 sm:gap-6">
              {siteConfig.socials.map(
                ({ name, href, icon, width, height }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg transition-transform duration-200 hover:scale-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-heading"
                  >
                    <Image
                      src={icon}
                      alt={name}
                      width={width || 32}
                      height={height || 32}
                      className="h-7 sm:h-8 w-auto object-contain drop-shadow-sm"
                    />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Right Navigation & Info Section */}
          <div className="w-full flex-1 flex justify-center items-start pt-10 sm:pt-14 md:pt-18 lg:pt-24 xl:pt-28 pb-8 sm:pb-10 lg:pb-14 px-2 sm:px-4 lg:px-6">
            <div className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 text-center sm:text-left">
              {/* Column: Services */}
              <div>
                <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] xl:text-[30px] font-bold tracking-tight text-text-inverse font-heading mb-4 sm:mb-6">
                  Services
                </h3>
                <ul className="space-y-2.5 sm:space-y-3 md:space-y-3.5">
                  {siteConfig.footer.services.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="inline-block py-1 text-base sm:text-[17px] lg:text-[18px] xl:text-[19px] font-body font-light tracking-tight text-text-inverse/90 transition-colors duration-150 hover:text-text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-accent"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column: Firm */}
              <div>
                <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] xl:text-[30px] font-bold tracking-tight text-text-inverse font-heading mb-4 sm:mb-6">
                  Firm
                </h3>
                <ul className="space-y-2.5 sm:space-y-3 md:space-y-3.5">
                  {siteConfig.footer.firm.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="inline-block py-1 text-base sm:text-[17px] lg:text-[18px] xl:text-[19px] font-body font-light tracking-tight text-text-inverse/90 transition-colors duration-150 hover:text-text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-accent"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column: Contact Details */}
              <div>
                <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] xl:text-[30px] font-bold tracking-tight text-text-inverse font-heading mb-4 sm:mb-6">
                  Contact
                </h3>
                <ul className="space-y-3 sm:space-y-3.5 md:space-y-4 text-base sm:text-[17px] lg:text-[18px] xl:text-[19px] font-body font-light tracking-tight text-text-inverse/90">
                  <li className="flex items-start justify-center sm:justify-start gap-3">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-text-inverse mt-1" />
                    <span className="leading-snug">
                      {siteConfig.contact.addressLines.map((line, idx) => (
                        <span key={idx}>
                          {line}
                          {idx <
                            siteConfig.contact.addressLines.length - 1 && (
                            <br />
                          )}
                        </span>
                      ))}
                    </span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start gap-3">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-text-inverse" />
                    <a
                      href={siteConfig.contact.phoneHref}
                      className="transition-colors hover:text-text-accent whitespace-nowrap py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-accent"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start gap-3">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-text-inverse" />
                    <a
                      href={siteConfig.contact.emailHref}
                      className="transition-colors hover:text-text-accent whitespace-nowrap py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-accent"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Copyright Divider Line */}
      <div className="w-full border-t border-text-inverse/20 py-5 sm:py-6 md:py-7 text-center text-xs sm:text-sm text-text-inverse/80 font-body px-5 sm:px-6">
        ©{currentYear} Alboré Chartered Accountants. All rights reserved.
      </div>
    </footer>
  );
}