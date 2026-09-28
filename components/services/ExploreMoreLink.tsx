"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ExploreMoreLinkProps {
  href: string;
  label?: string;
}

/**
 * "EXPLORE MORE →" link for the service cards.
 * A thin maroon line draws left → right the first time the link is hovered
 * (or keyboard-focused) and then stays, even after the cursor leaves.
 */
export default function ExploreMoreLink({
  href,
  label = "Explore more",
}: ExploreMoreLinkProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setRevealed(true)}
      onFocus={() => setRevealed(true)}
      className="relative inline-flex items-center gap-2 pb-1 font-body text-[14px] font-medium uppercase tracking-[0.02em] text-brand-primary-dark"
    >
      {label}
      <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
      <span
        aria-hidden="true"
        className={`absolute bottom-0 left-0 h-px w-full origin-left bg-brand-primary transition-transform duration-500 ease-out motion-reduce:transition-none ${
          revealed ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </Link>
  );
}
