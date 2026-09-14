import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

interface BaseButtonProps {
  /** Visual variant: primary (brand solid) or outline (bordered) */
  variant?: "primary" | "outline" | "secondary";
  /** Sizing presets */
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

type LinkButtonProps = BaseButtonProps &
  ComponentPropsWithoutRef<typeof Link> & {
    href: string;
  };

type NativeButtonProps = BaseButtonProps &
  ComponentPropsWithoutRef<"button"> & {
    href?: undefined;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  // Base classes applied to both <Link> and <button>
  const baseClasses =
    "inline-flex items-center justify-center font-button font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50";

  // Size variations
  const sizeClasses = {
    sm: "h-9 px-3 text-xs",
    md: "h-10 px-5 text-sm",
    lg: "h-12 px-7 text-base",
  }[size];

  // Visual variants matching your header and marketing sections
  const variantClasses = {
    primary:
      "bg-brand-primary text-text-inverse hover:bg-brand-primary-dark active:scale-[0.99]",
    outline:
      "border border-accent text-accent hover:bg-accent hover:text-surface",
    secondary:
      "bg-surface border border-brand-primary/20 text-text-heading hover:bg-surface-muted",
  }[variant];

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if ("href" in props && typeof props.href === "string") {
    return (
      <Link
        className={combinedClasses}
        {...(props as ComponentPropsWithoutRef<typeof Link>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...(props as ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </button>
  );
}
