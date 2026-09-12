export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`mx-auto flex w-full max-w-[600px] items-center gap-2 px-4 ${className}`}
    >
      <span className="h-px flex-1 bg-gold" />
      <svg
        width="22"
        height="36"
        viewBox="0 0 22 36"
        fill="none"
        className="shrink-0 text-gold"
      >
        <path
          d="M11 1 L21 18 L11 35 L1 18 Z"
          stroke="currentColor"
          strokeWidth="1"
        />

        <path
          d="M11 1 Q4.5 18 11 35 Q17.5 18 11 1 Z"
          stroke="currentColor"
          strokeWidth="1"
        />

        <path d="M1 18 H21" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="h-px flex-1 bg-gold" />
    </div>
  );
}
