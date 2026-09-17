/**
 * Site configuration and centralized navigation mapping.
 * Uses relative routes to prevent 308 redirect hops and explicit mailto/tel protocols to bypass Cloudflare scrape protection.
 */
export const siteConfig = {
  name: "Albore Chartered Accountants",
  shortName: "Albore Accountants",
  url: "https://www.alboreaccountants.com",
  description:
    "Specialized corporate accounting, FBR tax compliance, auditing, and financial advisory services.",
  tagline: "Tax, Accounting & FBR Compliance Made Simple",

  cta: {
    partnerLabel: "Book a Consultation",
    partnerHref: "/contact",
    portalLabel: "Client Portal",
  },

  // Relative internal navigation avoids non-www -> www redirect hops
  navLinks: [
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  /** Footer links */
  footer: {
    services: [
      { label: "Book Keeping", href: "/services/book-keeping" },
      { label: "Audits & Assurance", href: "/services/assurance-audits" },
      { label: "Financial Advisory", href: "/services/financial-advisory" },
      { label: "Tax Services", href: "/services/tax-services" },
    ],
    firm: [
      { label: "Services", href: "/services" },
      { label: "Insights", href: "/insights" },
      { label: "Client Stories", href: "/about" },
      { label: "Industries", href: "/industries" },
    ],
  },

  // Explicit protocols prevent broken /cdn-cgi/l/email-protection redirects
  contact: {
    addressLines: [
      "Main Boulevard, Bahria Town,",
      "Lahore, Punjab, Pakistan",
    ],
    phone: "+92 (335) 427 4079",
    phoneHref: "tel:+923354274079",
    email: "hello@alboreaccountants.com",
    emailHref: "mailto:hello@alboreaccountants.com",
  },

  /** Social media channels */
  socials: [
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: "/images/socials/LinkedInLogo.png",
      width: 34,
      height: 34,
    },
    {
      name: "Twitter / X",
      href: "https://twitter.com",
      icon: "/images/socials/TwitterLogo.png",
      width: 34,
      height: 34,
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: "/images/socials/facebookLogo.png",
      width: 34,
      height: 34,
    },
  ],

  /** Client portal routes */
  portal: {
    loginHref: "/portal/login",
    registerHref: "/portal/register",
  },
} as const;

export type SiteConfig = typeof siteConfig;
