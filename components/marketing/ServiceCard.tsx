"use client";

import Image from "next/image";
import Link from "next/link";
import type { HomeService } from "@/data/home/servicesSectionData";

export type Service = HomeService;

export interface ServiceCardProps {
  service: HomeService;
  isActive?: boolean;
  distanceFromActive?: number; // 0 = active/center, 1 = adjacent, 2 = outer
  onClick?: () => void;
  className?: string;
}

const PENNANT_CLIP_PATH =
  "polygon(0 0, 100% 0, 100% calc(100% - 30px), 50% 100%, 0 calc(100% - 30px))";

/**
 * Dedicated bottom icon rendering matching Figma (media_1790762201686.png):
 * - Center card (Audit & Assurance): Large bespoke maroon Shield with Checkmark
 * - Adjacent cards: Calculator, Tax Document, Globe, or Trending Graph
 */
function ServiceBottomIcon({
  iconType,
  isActive,
}: {
  iconType?: string;
  isActive: boolean;
}) {
  switch (iconType) {
    case "shield-check":
      return (
        <svg
          viewBox="0 0 44 48"
          fill="none"
          aria-hidden="true"
          className={`transition-all duration-300 ${
            isActive
              ? "w-11 h-11 sm:w-12 sm:h-12 text-brand-primary-dark"
              : "w-8 h-8 text-neutral-400 opacity-70"
          }`}
        >
          <path
            d="M22 2L4 9v14c0 12 18 23 18 23s18-11 18-23V9L22 2z"
            stroke="currentColor"
            strokeWidth={isActive ? "2.2" : "1.8"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 23l6 6 12-12"
            stroke="currentColor"
            strokeWidth={isActive ? "2.2" : "1.8"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "tax":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`transition-all duration-300 ${
            isActive ? "w-8 h-8 text-brand-primary-dark" : "w-6 h-6 text-maroon-stage-adjacent/80"
          }`}
        >
          <rect
            x="4"
            y="3"
            width="16"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8 8h8M8 12h8M8 16h5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M15 15l2 2-2 2"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "calculator":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`transition-all duration-300 ${
            isActive ? "w-8 h-8 text-brand-primary-dark" : "w-6 h-6 text-maroon-stage-adjacent/80"
          }`}
        >
          <rect
            x="4"
            y="2"
            width="16"
            height="20"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <rect
            x="7"
            y="5"
            width="10"
            height="3"
            rx="0.5"
            fill="currentColor"
            fillOpacity="0.2"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="8" cy="12" r="1.1" fill="currentColor" />
          <circle cx="12" cy="12" r="1.1" fill="currentColor" />
          <circle cx="16" cy="12" r="1.1" fill="currentColor" />
          <circle cx="8" cy="16" r="1.1" fill="currentColor" />
          <circle cx="12" cy="16" r="1.1" fill="currentColor" />
          <circle cx="16" cy="16" r="1.1" fill="currentColor" />
        </svg>
      );

    case "trending-up":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`transition-all duration-300 ${
            isActive ? "w-7 h-7 text-brand-primary-dark" : "w-5 h-5 text-maroon-stage-outer"
          }`}
        >
          <polyline
            points="23 6 13.5 15.5 8.5 10.5 1 18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="17 6 23 6 23 12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "globe":
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`transition-all duration-300 ${
            isActive ? "w-7 h-7 text-brand-primary-dark" : "w-5 h-5 text-maroon-stage-outer"
          }`}
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
          <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.4" />
          <path
            d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      );
  }
}

/**
 * Editorial Pennant-Shaped Service Card Component.
 * Faithfully matches Figma design (media_1790762201686.png):
 * - Top header band color matches stage (Active = deep maroon, adjacent = dusty rose, outer = faded rose)
 * - V-pointed bottom pennant shape with responsive drop-shadow
 * - High-resolution photography with rounded corners
 * - Bold title + concise description + centered bottom icon
 */
export function ServiceCard({
  service,
  isActive = false,
  distanceFromActive = 0,
  onClick,
  className = "",
}: ServiceCardProps) {
  // Resolve header background color based on distance
  const headerBgClass =
    distanceFromActive === 0
      ? "bg-brand-primary-dark text-white"
      : distanceFromActive === 1
      ? "bg-maroon-stage-adjacent text-white"
      : "bg-maroon-stage-outer text-white";

  // Drop-shadow filtering for the pennant polygon shape
  const dropShadowStyle =
    distanceFromActive === 0
      ? "drop-shadow(0 20px 30px rgba(81, 18, 29, 0.24)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.08))"
      : distanceFromActive === 1
      ? "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.06))"
      : "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.04))";

  return (
    <article
      onClick={onClick}
      onKeyDown={(e) => {
        if (!isActive && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick?.();
        }
      }}
      role={isActive ? undefined : "button"}
      tabIndex={isActive ? -1 : 0}
      aria-label={isActive ? undefined : `Select ${service.title}`}
      style={{ filter: dropShadowStyle }}
      className={`group relative flex flex-col w-full h-[440px] sm:h-[465px] lg:h-[490px] xl:h-[505px] transition-all duration-300 ease-out cursor-pointer select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-dark ${className}`}
    >
      <div
        style={{ clipPath: PENNANT_CLIP_PATH }}
        className="flex h-full w-full flex-col bg-white overflow-hidden rounded-t-[10px] transition-colors duration-300"
      >
        {/* 1. Header Band: Shows category title centered */}
        <div
          className={`flex items-center justify-center py-3.5 sm:py-4 px-3 text-center transition-colors duration-300 shrink-0 ${headerBgClass}`}
        >
          <span className="font-heading text-xs sm:text-[13.5px] lg:text-[15px] font-bold tracking-wide line-clamp-1">
            {service.category || service.title}
          </span>
        </div>

        {/* 2. White Card Body */}
        <div className="flex flex-1 flex-col px-3.5 pt-3.5 pb-7 sm:px-4.5 sm:pt-4 sm:pb-8">
          {/* Contextual Photo Frame with Rounded Corners */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[8px] sm:rounded-[10px] bg-neutral-100 shadow-2xs shrink-0">
            <Image
              src={service.imageSrc}
              alt={service.imageAlt || service.title}
              fill
              quality={80}
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 33vw, 280px"
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          {/* Feature Title */}
          <h3
            className={`font-heading text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] font-bold text-center leading-snug mt-3 sm:mt-3.5 transition-colors duration-200 ${
              distanceFromActive === 0
                ? "text-text-heading group-hover:text-brand-primary-dark"
                : "text-text-heading/90"
            }`}
          >
            {service.featureTitle || service.title}
          </h3>

          {/* Feature Description */}
          <p
            className={`font-body text-[11px] sm:text-[11.5px] lg:text-[12px] leading-[1.55] text-center mt-1.5 sm:mt-2 px-1 line-clamp-3 sm:line-clamp-4 font-normal transition-colors duration-200 ${
              distanceFromActive === 0 ? "text-text-body" : "text-text-body/80"
            }`}
          >
            {service.description}
          </p>

          {/* Bottom Icon placed within the V-taper */}
          <div className="mt-auto pt-3 flex items-center justify-center">
            <ServiceBottomIcon
              iconType={service.iconType}
              isActive={distanceFromActive === 0}
            />
          </div>
        </div>
      </div>

      {/* Accessible Click to view link overlay on active card */}
      {isActive && (
        <Link
          href={service.href}
          aria-label={`View ${service.title} details`}
          className="absolute inset-0 z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary-dark rounded-t-xl"
        >
          <span className="sr-only">View {service.title}</span>
        </Link>
      )}
    </article>
  );
}

export default ServiceCard;
