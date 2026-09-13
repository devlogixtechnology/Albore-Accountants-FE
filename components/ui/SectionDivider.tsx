import Image from "next/image";

interface SectionDividerProps {
  className?: string;
}

/**
 * Reusable ornamental section divider (gold line — diamond gem — gold line).
 * Professional shared component rendering the vector asset (/images/Others/divider.svg).
 * Centered, responsive, and accessible.
 * Designed to be placed cleanly between sections in page.tsx.
 */
export default function SectionDivider({
  className = "py-8 sm:py-12",
}: SectionDividerProps) {
  return (
    <div
      className={`flex items-center justify-center w-full select-none ${className}`}
      aria-hidden="true"
    >
      <div className="relative w-full max-w-[601px] px-4 flex justify-center">
        <Image
          src="/images/Others/divider.svg"
          alt=""
          width={601}
          height={41}
          unoptimized
          priority={false}
          className="h-auto w-full max-w-[601px] object-contain pointer-events-none"
        />
      </div>
    </div>
  );
}

