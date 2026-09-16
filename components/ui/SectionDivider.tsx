import Image from "next/image";

interface SectionDividerProps {
  variant?: "home" | "services";
  className?: string;
}

/**
 * Ornamental SVG separator matching Albore section breaks.
 * - "home": diamond divider (/images/Others/divider.svg)
 * - "services": square-around-the-diamond divider (/images/Others/SquareDivider.svg)
 */
export default function SectionDivider({
  variant = "home",
  className = "",
}: SectionDividerProps) {
  const src =
    variant === "services"
      ? "/images/Others/SquareDivider.svg"
      : "/images/Others/divider.svg";

  return (
    <div
      className={`flex justify-center py-6 sm:py-8 md:py-12 ${className}`}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt=""
        width={601}
        height={41}
        unoptimized
        priority={false}
        className="h-auto w-full max-w-[601px] px-4 sm:px-6"
      />
    </div>
  );
}