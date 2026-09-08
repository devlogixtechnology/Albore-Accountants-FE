/**
 * Central site configuration for Albore Accountants.
 * Manages brand details, navigation links, and client portal endpoints.
 */
export const siteConfig = {
  name: "Albore Accountants",
  shortName: "Albore Accountants",
  description:
    "Professional accounting, FBR tax filing, and dedicated client portal services for businesses and individuals.",
  tagline: "Tax, Accounting & FBR Compliance Made Simple",

  /** Universal navigation links */
  navLinks: [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  /** Client portal routes */
  portal: {
    loginHref: "/portal/login",
    registerHref: "/portal/register",
  },
} as const;

export type SiteConfig = typeof siteConfig;
