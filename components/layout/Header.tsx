import Link from "next/link";
import { siteConfig } from "@/config/site";

/**
 * Universal navigation header for Albore Accountants.
 * Deliberate, clean typographic hierarchy with authentic brand wordmark
 * and direct client portal access.
 */
export default function PublicHeader() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "1.25rem 2rem",
        background: "var(--color-surface-elevated, #ffffff)",
        borderBottom: "1px solid var(--color-border, #e5e7eb)",
      }}
    >
      {/* Brand Wordmark */}
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.625rem",
          textDecoration: "none",
          color: "var(--color-text-primary, #111827)",
          fontSize: "1.1rem",
          letterSpacing: "-0.01em",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "26px",
            height: "26px",
            borderRadius: "6px",
            background: "var(--color-primary-strong, #0c7565)",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "0.85rem",
            letterSpacing: "0",
          }}
          aria-hidden="true"
        >
          A
        </span>
        <span style={{ fontWeight: 700 }}>Albore</span>
        <span style={{ fontWeight: 400, color: "var(--color-text-secondary, #6b7280)" }}>
          Accountants
        </span>
      </Link>

      {/* Navigation & Portal Action */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.75rem",
        }}
        aria-label="Primary navigation"
      >
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {siteConfig.navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                textDecoration: "none",
                fontSize: "0.925rem",
                color: "var(--color-text-secondary, #4b5563)",
                fontWeight: 500,
                transition: "color 0.15s ease",
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          href={siteConfig.portal.loginHref}
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.55rem 1.1rem",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "#ffffff",
            background: "var(--color-primary-strong, #0c7565)",
            borderRadius: "6px",
            textDecoration: "none",
            transition: "background-color 0.15s ease",
          }}
        >
          Client portal
        </Link>
      </nav>
    </header>
  );
}