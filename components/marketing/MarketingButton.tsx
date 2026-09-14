import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "secondaryOutline";
type Size = "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-maroon text-white hover:bg-maroon-hover",
  secondary: "bg-cream text-gold hover:bg-cream-hover",
  secondaryOutline:
    "bg-cream text-gold ring-1 ring-gold ring-inset hover:bg-cream-hover",
};

const SIZES: Record<Size, string> = {
  md: "h-[50px] px-6 text-[15px]",
  lg: "h-[52px] px-8 text-base",
};

const BASE =
  "inline-flex items-center justify-center rounded-[4px] font-bold leading-none " +
  "transition-colors duration-200 whitespace-nowrap " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export type MarketingButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href">;

export function MarketingButton({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: MarketingButtonProps) {
  return (
    <Link
      href={href}
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
