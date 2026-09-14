import Image from "next/image";
import Link from "next/link";

export type Service = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  hoverText?: string | null;
  href?: string;
  moreLabel?: string;
  marquee?: "left" | "right";
};

const MARQUEE_COPIES = [0, 1, 2, 3];

export function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  hoverText,
  href,
  moreLabel = "More",
  marquee = "left",
}: Service) {
  const overlay = hoverText === undefined ? title : hoverText;

  return (
    <article className="group flex h-full flex-col bg-cream lg:min-h-[537px]">
      <div className="relative h-[120px] shrink-0 overflow-hidden bg-maroon-deep sm:h-[143px]">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 360px"
            className="object-cover"
          />
        )}

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-panel-hover opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none"
        />

        {overlay && (
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none"
          >
            <div
              className={`albore-marquee flex w-max shrink-0 ${
                marquee === "right" ? "albore-marquee-right" : ""
              }`}
            >
              {MARQUEE_COPIES.map((i) => (
                <span
                  key={i}
                  className="pr-10 text-[38px] font-bold leading-none whitespace-nowrap text-gold-light sm:text-[46px] lg:text-[56px]"
                >
                  {overlay}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 pb-8 pt-5 sm:px-7 sm:pb-10 sm:pt-6">
        <h3 className="text-[20px] font-bold leading-tight text-maroon sm:text-[24px]">
          {title}
        </h3>
        <p className="mt-3 text-[15px] leading-[1.62] text-body sm:mt-4 sm:text-[17px]">
          {description}
        </p>

        {href && (
          <div className="mt-auto flex justify-end pt-6">
            <Link
              href={href}
              className="inline-flex h-10 translate-y-1 items-center justify-center rounded-full bg-maroon px-6 text-[15px] font-bold leading-none text-white opacity-0 transition-all duration-300 ease-out hover:bg-maroon-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100"
            >
              {moreLabel}
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
