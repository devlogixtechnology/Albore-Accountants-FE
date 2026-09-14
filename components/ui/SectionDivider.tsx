import Image from "next/image";

interface SectionDividerProps {
  className?: string;
}

/**
 * Ornamental SVG separator matching Albore section breaks.
 */
export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div
      className={`flex justify-center py-6 sm:py-8 md:py-12 ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/images/Others/divider.svg"
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