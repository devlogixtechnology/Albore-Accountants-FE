import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

/**
 * Public marketing footer.
 * Uses relative routes via siteConfig to eliminate 308 redirect hops and direct mailto anchors to bypass Cloudflare scrape protection.
 */
export default function PublicFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-primary text-text-inverse font-body">
      {/* Upper Main Footer Grid */}
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-start justify-start pb-10 lg:pb-12">
          
          {/* Left Badge Card (Enlarged Logo & Accreditation Text, flush at top) */}
          <div className="w-full sm:max-w-[509px] lg:w-[480px] xl:w-[509px] shrink-0 bg-accent rounded-t-none rounded-b-[40px] px-8 sm:px-12 pt-12 sm:pt-14 pb-10 sm:pb-11 flex flex-col items-center justify-between text-center shadow-lg self-start h-auto min-h-[440px] lg:h-[460px] xl:h-[480px]">
            <div>
              <Link href="/" className="inline-block transition-opacity hover:opacity-90">
                <Image
                  src="/images/branding/albore_logo_white_transparent.png"
                  alt={siteConfig.name}
                  width={280}
                  height={85}
                  priority
                  className="h-18 sm:h-20 lg:h-22 w-auto object-contain mx-auto"
                />
              </Link>

              <p className="mt-7 sm:mt-8 text-lg sm:text-xl lg:text-[22px] font-bold text-text-heading leading-snug tracking-tight font-body">
                Internationally Accredited Practice
                <br />
                ISO 27001 Certified for Data Security
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex items-center justify-center gap-6">
              {siteConfig.socials.map(({ name, href, icon, width, height }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg transition-transform duration-200 hover:scale-110 active:scale-95"
                >
                  <Image
                    src={icon}
                    alt={name}
                    width={width || 32}
                    height={height || 32}
                    className="h-8 w-auto object-contain drop-shadow-sm"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Navigation & Info Section: Added top spacing, slightly larger text, thinner & tighter styling */}
          <div className="w-full flex-1 flex justify-center items-start pt-16 sm:pt-20 lg:pt-24 xl:pt-28 pb-10 lg:pb-14 px-4 lg:px-6">
            <div className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-12 xl:gap-16 text-center sm:text-left">
              
              {/* Column: Services */}
              <div>
                <h3 className="text-2xl sm:text-[28px] lg:text-[30px] font-bold tracking-tight text-white font-heading mb-6 sm:mb-7">
                  Services
                </h3>
                <ul className="space-y-3.5 sm:space-y-4">
                  {siteConfig.footer.services.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="inline-block py-0.5 text-lg sm:text-[19px] font-body font-light tracking-tight text-white/90 transition-colors duration-150 hover:text-accent"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column: Firm */}
              <div>
                <h3 className="text-2xl sm:text-[28px] lg:text-[30px] font-bold tracking-tight text-white font-heading mb-6 sm:mb-7">
                  Firm
                </h3>
                <ul className="space-y-3.5 sm:space-y-4">
                  {siteConfig.footer.firm.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="inline-block py-0.5 text-lg sm:text-[19px] font-body font-light tracking-tight text-white/90 transition-colors duration-150 hover:text-accent"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column: Contact Details */}
              <div>
                <h3 className="text-2xl sm:text-[28px] lg:text-[30px] font-bold tracking-tight text-white font-heading mb-6 sm:mb-7">
                  Contact
                </h3>
                <ul className="space-y-4 sm:space-y-4.5 text-lg sm:text-[19px] font-body font-light tracking-tight text-white/90">
                  <li className="flex items-start justify-center sm:justify-start gap-3.5">
                    <MapPin className="h-6 w-6 shrink-0 text-white mt-1" />
                    <span className="leading-snug">
                      {siteConfig.contact.addressLines.map((line, idx) => (
                        <span key={idx}>
                          {line}
                          {idx < siteConfig.contact.addressLines.length - 1 && <br />}
                        </span>
                      ))}
                    </span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start gap-3.5">
                    <Phone className="h-6 w-6 shrink-0 text-white" />
                    <a
                      href={siteConfig.contact.phoneHref}
                      className="transition-colors hover:text-accent whitespace-nowrap py-0.5"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start gap-3.5">
                    <Mail className="h-6 w-6 shrink-0 text-white" />
                    <a
                      href={siteConfig.contact.emailHref}
                      className="transition-colors hover:text-accent whitespace-nowrap py-0.5"
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

      {/* Full-width Copyright Divider Line (Figma Line 139 & Exact Copy) */}
      <div className="w-full border-t border-white/20 py-6 sm:py-7 text-center text-xs sm:text-sm text-white/80 font-body px-6">
        ©{currentYear} Alboré Chartered Accountants. All rights reserved.
      </div>
    </footer>
  );
}