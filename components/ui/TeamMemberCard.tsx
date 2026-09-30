"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Share2, Check } from "lucide-react";

export type TeamMember = {
  name: string;
  role?: string;
  title?: string;
  leadTitle?: string;
  regBadge?: string;
  initials?: string;
  bio: string;
  imageUrl?: string;
  contactHref?: string;
  href?: string;
};

export default function TeamMemberCard({
  name,
  role,
  title,
  leadTitle,
  regBadge,
  initials,
  bio,
  imageUrl,
  contactHref,
  href = "/contact",
}: TeamMember) {
  const [copied, setCopied] = useState(false);
  const linkHref = contactHref || href || "/contact";
  const displayRole = role || title;

  const handleShare = async () => {
    if (typeof window === "undefined") return;
    const shareUrl = window.location.origin + linkHref;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${name} | Albore Chartered Accountants`,
          text: `${name} - ${displayRole}${leadTitle ? ` (${leadTitle})` : ""}`,
          url: shareUrl,
        });
        return;
      } catch {
        // User cancelled or native share unavailable, fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard write failed
    }
  };

  return (
    <div className="group flex h-full w-full flex-col overflow-hidden rounded-[14px] sm:rounded-[16px] border border-border/80 bg-surface shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
      {/* Photo Frame with Statutory Badge */}
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-surface-muted">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            quality={95}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-brand-primary text-text-inverse">
            <span className="font-heading text-2xl font-bold tracking-wider">
              {initials || name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        {/* Statutory Accreditation Badge overlay */}
        {regBadge && (
          <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center rounded-[3px] border border-reg-badge-border bg-reg-badge px-2 py-0.5 shadow-xs backdrop-blur-xs">
            <span className="font-mono text-[9.5px] sm:text-[10px] font-semibold tracking-wider text-reg-badge-text">
              {regBadge}
            </span>
          </div>
        )}
      </div>

      {/* Card Content with Normal Executive Proportions */}
      <div className="flex flex-1 flex-col justify-between p-4.5 sm:p-5">
        <div>
          {/* Partner Name */}
          <h3 className="font-heading text-[17px] sm:text-[18px] lg:text-[19px] font-bold tracking-tight text-ink leading-snug">
            {name}
          </h3>

          {/* Partner Role / Status Tag */}
          {displayRole && (
            <p className="mt-1 font-body text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.08em] text-accent">
              {displayRole}
            </p>
          )}

          {/* Practice Lead Specialty */}
          {leadTitle && (
            <h4 className="mt-2 font-heading text-[12.5px] sm:text-[13.5px] font-semibold text-ink leading-snug">
              {leadTitle}
            </h4>
          )}

          {/* Concise Bio Copy with controlled line-clamp */}
          <p className="mt-2 line-clamp-3 font-body text-xs sm:text-[12.5px] leading-[1.6] text-body/80">
            {bio}
          </p>
        </div>

        {/* Card Footer: Contact Partner Link & Share Icon */}
        <div className="mt-4 pt-3.5 border-t border-border/50 flex items-center justify-between">
          <Link
            href={linkHref}
            className="group/link inline-flex items-center gap-1 font-body text-xs sm:text-[13px] font-semibold text-maroon hover:text-maroon-hover transition-colors"
          >
            <span>Contact Partner</span>
            <span className="transition-transform duration-200 group-hover/link:translate-x-1">
              →
            </span>
          </Link>

          <button
            type="button"
            onClick={handleShare}
            aria-label={copied ? "Link copied" : `Share ${name}'s profile`}
            title={copied ? "Link copied" : `Share ${name}'s profile`}
            className="rounded-md p-1 text-neutral-400 hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-maroon transition-colors cursor-pointer"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-600" />
            ) : (
              <Share2 className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}