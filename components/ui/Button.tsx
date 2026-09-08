import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/**
 * Base button interface defining styling variants and content.
 */
interface BaseButtonProps {
  /** Visual theme: primary (solid brand) or secondary (outlined) */
  variant?: "primary" | "secondary";
  /** Optional size preset */
  size?: "sm" | "md" | "lg";
  /** Child elements or text label */
  children: ReactNode;
  /** Additional CSS class names */
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

/**
 * Clean, type-safe button component for Albore Accountants.
 * Renders an accessible HTML button or Next.js Link with polished, restrained styling.
 */
export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  style,
  ...props
}: ButtonProps) {
  const isPrimary = variant === "primary";
  const sizeClass =
    size === "sm" ? "px-3 py-1.5 text-xs" : size === "lg" ? "px-6 py-3 text-base" : "px-4 py-2.5 text-sm";

  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontWeight: 600,
    borderRadius: "8px",
    textDecoration: "none",
    transition: "background-color 0.15s ease, border-color 0.15s ease",
    cursor: "pointer",
    ...(isPrimary
      ? {
          background: "var(--color-primary-strong, #0c7565)",
          color: "#ffffff",
          border: "1px solid transparent",
        }
      : {
          background: "var(--color-surface-elevated, #ffffff)",
          color: "var(--color-text-primary, #1f2937)",
          border: "1px solid var(--color-border, #e5e7eb)",
        }),
    ...style,
  };

  const combinedClass = [isPrimary ? "button" : "button button--secondary", sizeClass, className]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && typeof props.href === "string") {
    return (
      <Link
        className={combinedClass}
        style={baseStyle}
        {...(props as ComponentPropsWithoutRef<typeof Link>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClass}
      style={baseStyle}
      {...(props as ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </button>
  );
}
