import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export type Industry = {
  title?: string;
  category?: string;
  solution?: string;
  image: string;
  link?: string;
  label?: string;
  href?: string;
};

/**
 * Industry Card Component matching the Figma design:
 * - Rounded 8px corners with subtle gold/neutral border (Stroke #DCC29A 20%)
 * - Full-height background image with signature brand red/maroon hue overlay
 * - Category eyebrow, bold industry title, concise animated solution reveal, and "Explore More ->" CTA
 * - Smooth image scale (zoom), ambient burgundy elevation shadow, and forward CTA translation on hover
 */
export default function IndustryCard({
  title,
  category = "Advisory",
  solution,
  image,
  link,
  label,
  href,
}: Industry) {
  const displayTitle = title || label || "Industry Sector";
  const displayLink = link || href || "#";

  return (
    <Link
      href={displayLink}
      className="group relative flex h-[360px] sm:h-[384px] w-full flex-col justify-end overflow-hidden rounded-[8px] border border-border-champagne/25 bg-brand-contrast shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-border-champagne/70 hover:shadow-[0_22px_45px_rgba(42,8,14,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {/* 1. Background Image with smooth scale animation */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt={`${displayTitle} - industry sector financial advisory`}
          fill
          quality={80}
          sizes="(min-width: 1280px) 380px, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* 2. Signature Brand Red/Maroon Hue Overlays matching Figma */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-brand-primary-dark/45 mix-blend-multiply transition-colors duration-500 group-hover:bg-industry-hero/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-industry-hero/20 mix-blend-color"
        />

        {/* Multi-stop gradient from dark maroon/black at bottom to transparent at top */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/95 via-brand-contrast/65 via-50% to-industry-hero/15 transition-opacity duration-500 group-hover:from-black group-hover:via-brand-contrast/75"
        />

        {/* Subtle top edge border shimmer */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-border-champagne/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>

      {/* 3. Content overlay positioned at bottom with staggered entrance/reveal animations */}
      <div className="relative z-10 flex flex-col p-5 sm:p-6 text-left">
        {category && (
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-gold-champagne/90 mb-1.5 transition-transform duration-300 group-hover:-translate-y-1">
            {category}
          </span>
        )}

        <h3 className="font-heading text-[18px] sm:text-[19px] lg:text-[20px] font-bold text-white leading-snug tracking-tight transition-transform duration-300 group-hover:-translate-y-1">
          {displayTitle}
        </h3>

        {/* Animated Solution Reveal on hover */}
        {solution && (
          <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:mt-2 group-hover:max-h-24 group-hover:opacity-100">
            <p className="text-[12px] leading-relaxed text-white/85 line-clamp-2">
              {solution}
            </p>
          </div>
        )}

        {/* Explore More CTA with animated arrow translation */}
        <div className="mt-3.5 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-wide text-accent transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
          <span>Explore More</span>
          <MoveRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </div>
      </div>
    </Link>
  );
}