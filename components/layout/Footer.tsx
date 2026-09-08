import Link from "next/link";
import { siteConfig } from "@/config/site";

/**
 * Universal footer component.
 * Displays Albore Accountants branding, essential navigation links,
 * client portal shortcut, and copyright notice.
 */
export default function PublicFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1.5rem",
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <strong style={{ color: "var(--color-text-primary)", fontSize: "1rem" }}>
            {siteConfig.name}
          </strong>
          <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
            Tax Preparation, FBR Filings &amp; Financial Advisory
          </p>
        </div>

        <nav
          style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap", fontSize: "0.875rem" }}
          aria-label="Footer navigation"
        >
          {siteConfig.navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className="site-header__link">
              {label}
            </Link>
          ))}
          <Link href={siteConfig.portal.loginHref} style={{ color: "var(--color-primary-strong)", fontWeight: 600 }}>
            Client Portal →
          </Link>
        </nav>
      </div>

      <div
        style={{
          maxWidth: "1120px",
          margin: "1.5rem auto 0",
          paddingTop: "1rem",
          borderTop: "1px solid var(--color-border)",
          fontSize: "0.8rem",
          color: "var(--color-text-secondary)",
          textAlign: "left",
        }}
      >
        © {currentYear} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}