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
      className="group flex flex-col justify-between overflow-hidden bg-surface-muted transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      {/* Card Thumbnail Image */}
      <div className="relative w-full aspect-[302/200] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Card Text Content */}
      <div className="flex flex-col flex-1 justify-between p-5 sm:p-6 md:p-7">
        <div>
          <h3 className="font-heading text-lg sm:text-xl md:text-[22px] font-bold text-brand-primary tracking-tight mb-2.5 sm:mb-3 transition-colors duration-200 group-hover:text-brand-primary-dark">
            {title}
          </h3>
          <p className="font-body text-sm sm:text-[15px] leading-relaxed text-text-body">
            {description}
          </p>
        </div>

        {/* Gold "Read more →" Link */}
        <div className="mt-5 sm:mt-6 pt-1">
          <span className="inline-flex items-center gap-1.5 font-button text-sm sm:text-[15px] font-semibold text-text-accent transition-colors duration-200 group-hover:text-text-accent/80">
            Read more
            <span className="transition-transform duration-200 group-hover:translate-x-1.5">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
