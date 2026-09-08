import Link from "next/link";
import { siteConfig } from "@/config/site";

/**
 * Minimalist, focused Hero section for Albore Accountants.
 * Features a background image, single-line description, and clear CTA actions
 * without side cards or clutter.
 */
export default function Hero() {
  return (
    <section
      aria-label="Albore Accountants Hero"
      style={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        minHeight: "480px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "4.5rem 2rem",
        color: "#ffffff",
        background:
          "linear-gradient(rgba(15, 23, 42, 0.75), rgba(12, 117, 101, 0.65)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat #0f172a",
        boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.15)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div style={{ maxWidth: "680px" }}>
        <p
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#a7f3d0",
            marginBottom: "1rem",
          }}
        >
          {siteConfig.name} · Client Portal
        </p>

        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            margin: "0 0 1.25rem",
            color: "#ffffff",
          }}
        >
          FBR Tax Filings &amp; Client Document Management
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.6,
            color: "rgba(255, 255, 255, 0.9)",
            margin: "0 0 2.25rem",
          }}
        >
          A secure, streamlined portal for clients to submit tax documents and collaborate with certified accountants.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href={siteConfig.portal.loginHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.85rem 1.75rem",
              fontSize: "0.95rem",
              fontWeight: 700,
              borderRadius: "8px",
              background: "#0c7565",
              color: "#ffffff",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)",
              transition: "background-color 0.15s ease",
            }}
          >
            Access Client Portal
          </Link>

          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.85rem 1.75rem",
              fontSize: "0.95rem",
              fontWeight: 600,
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.12)",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              textDecoration: "none",
              backdropFilter: "blur(4px)",
              transition: "background-color 0.15s ease",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
