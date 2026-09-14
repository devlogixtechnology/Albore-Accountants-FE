import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type Industry = {
  label: string;
  image: string;
  href: string;
};

/**
 * Fully responsive industry card matching Figma prototype.
 * Uses exact semantic design tokens:
 * - Card bg & gradient: bg-brand-primary-dark (--color-maroon-900: #51121d)
 * - Text: font-heading text-text-inverse (--color-white: #ffffff)
 * - Proportional scaling from mobile (w-[270px], h-[420px]) to desktop (w-[338px], h-[517px])
 */
export default function IndustryCard({ label, image, href }: Industry) {
  return (
    <Link
      href={href}
      className="group relative block h-[420px] sm:h-[470px] md:h-[517px] w-[270px] sm:w-[300px] md:w-[325px] lg:w-[338px] shrink-0 overflow-hidden rounded-[20px] sm:rounded-[22px] bg-brand-primary-dark transition-all duration-300 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <Image
        src={image}
        alt={label}
        fill
        sizes="(min-width: 1024px) 338px, (min-width: 640px) 300px, 270px"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Deep maroon vignette gradient using brand-primary-dark semantic token */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-dark/95 via-brand-primary-dark/35 to-transparent" />

      {/* Bottom Content Bar */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 sm:p-6 md:p-7">
        <span className="font-heading text-lg sm:text-xl md:text-[22px] font-bold text-text-inverse tracking-tight leading-snug">
          {label}
        </span>
        <span
          className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-full border border-text-inverse/80 text-text-inverse transition-all duration-300 group-hover:bg-text-inverse group-hover:text-brand-primary group-hover:border-text-inverse shadow-sm ml-3"
          aria-hidden="true"
        >
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2]" />
        </span>
      </div>
    </Link>
  );
}