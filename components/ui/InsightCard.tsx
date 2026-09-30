import Image from "next/image";
import Link from "next/link";

export type Insight = {
  title: string;
  description: string;
  image: string;
  href: string;
};

/**
 * Single insight card matching Figma prototype.
 * Server Component.
 * Responsive padding, proportional typography, and touch target sizing.
 */
export default function InsightCard({
  title,
  description,
  image,
  href,
}: Insight) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-[20px] sm:rounded-[24px] overflow-hidden bg-surface shadow-md hover:shadow-xl border border-border/40 transition-all duration-300 hover:-translate-y-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      {/* Card Thumbnail Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-cream-100">
        <Image
          src={image}
          alt={title}
          fill
          quality={95}
          sizes="(min-width: 1280px) 380px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Card Text Content */}
      <div className="flex flex-col flex-1 justify-between p-6 sm:p-7">
        <div>
          <h3 className="font-heading text-lg sm:text-[19px] lg:text-[20px] font-bold text-ink tracking-tight transition-colors duration-200 group-hover:text-maroon">
            {title}
          </h3>
          <p className="mt-2.5 sm:mt-3 font-body text-xs sm:text-[13.5px] lg:text-[14px] leading-[1.65] text-neutral-600">
            {description}
          </p>
        </div>

        {/* Maroon "Read more →" Link */}
        <div className="mt-5 sm:mt-6 pt-1">
          <span className="inline-flex items-center gap-1.5 font-body text-xs sm:text-[13.5px] font-bold text-maroon transition-colors duration-200 group-hover:text-maroon-hover">
            Read more
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
