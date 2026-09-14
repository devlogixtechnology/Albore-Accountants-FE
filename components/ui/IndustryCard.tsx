import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export type Industry = {
  title?: string;
  category?: string;
  solution?: string;
  image: string;
  link?: string;
  // Backward compatibility:
  label?: string;
  href?: string;
};

/**
 * Revamped Industry Card Component.
 * Features:
 * - Default State: Grayscale backdrop + clean title with gold accent rule
 * - Hover State ("The Reveal"): Image transitions to full color, smooth maroon
 *   overlay slides up displaying sector category, title, solution overview,
 *   and an accessible "Explore Industry" navigation link.
 * Grounded 100% in Albore design tokens:
 * - bg-brand-primary-dark (--color-maroon-900: #51121d)
 * - text-text-accent & bg-accent (--color-gold-500: #b08d57)
 * - text-text-inverse (--color-white: #ffffff)
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
  const displaySolution =
    solution ||
    "Strategic financial consulting, statutory compliance, and customized risk management.";

  return (
    <div className="relative flex-shrink-0 bg-brand-primary-dark rounded-xl overflow-hidden group border border-accent/50 hover:border-accent w-[85vw] sm:w-[350px] md:w-[380px] lg:w-[400px] h-[85vw] sm:h-[350px] md:h-[380px] lg:h-[400px] aspect-square transition-all duration-300 hover:shadow-2xl">
      {/* 1. BACKGROUND IMAGE with grayscale to full-color on hover */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={`${displayTitle} industry financial solutions and advisory`}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 350px, 85vw"
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-all duration-500" />
      </div>

      {/* 2. DEFAULT STATE (Title & Accent Line at bottom) */}
      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10 pointer-events-none">
        <h3 className="font-heading text-2xl font-bold text-text-inverse tracking-tight mb-2 group-hover:opacity-0 transition-opacity duration-300 transform translate-y-0 group-hover:-translate-y-4">
          {displayTitle}
        </h3>
        <div className="h-[2px] w-8 bg-accent group-hover:opacity-0 transition-opacity duration-300" />
      </div>

      {/* 3. THE REVEAL (Hover State Overlay) */}
      <div className="absolute inset-0 bg-brand-primary-dark/95 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-center px-6 sm:px-8 z-20">
        <span className="font-body text-text-accent text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          {category}
        </span>

        {/* Prevent heading duplication in accessibility tree */}
        <div
          aria-hidden="true"
          className="font-heading text-2xl font-bold text-text-inverse mb-3 sm:mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100"
        >
          {displayTitle}
        </div>

        <p className="font-body text-text-inverse/85 text-sm leading-relaxed mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150 line-clamp-3">
          {displaySolution}
        </p>

        <Link
          href={displayLink}
          aria-label={`Explore our advisory solutions for the ${displayTitle} sector`}
          className="group/btn flex items-center gap-2 text-text-inverse text-xs font-bold uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 cursor-pointer pointer-events-auto w-fit"
        >
          <span className="border-b border-accent pb-0.5 transition-colors group-hover/btn:text-text-accent">
            Explore Industry
          </span>
          <MoveRight className="w-4 h-4 text-text-accent transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}