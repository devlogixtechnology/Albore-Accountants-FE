/**
 * About Page Data and Content Definitions
 */

export interface AboutValue {
  title: string;
  description: string;
  icon: string;
}

export interface AboutPrinciple {
  label: string;
  icon: string;
}

export interface AboutStrength {
  title: string;
  description: string;
  icon: string;
}

export const values = [
  ["3 Tier Quality", "Rigorous 3-level review and peer review process for every major engagement.", "/images/AboutPage/About_icons/three_tier_quality.png"],
  ["ISO Certified", "Fully compliant with global security, privacy, and quality management standards.", "/images/AboutPage/About_icons/iso_certified.png"],
  ["Big 4 Professionals", "Veteran experts with proven backgrounds in global firms.", "/images/AboutPage/About_icons/big_4_prof.png"],
  ["Confidential Membership", "Strict NDA protocols, secure data handling, privacy safeguards.", "/images/AboutPage/About_icons/confidential_membership.png"],
] as const;

export const principles = [
  ["Integrity", "/images/AboutPage/About_icons/integrity.png"],
  ["Client Focus", "/images/AboutPage/About_icons/client_focus.png"],
  ["Excellence", "/images/AboutPage/About_icons/excellence.png"],
  ["Partnership", "/images/AboutPage/About_icons/partnership.png"],
] as const;

export const strengths = [
  ["Internationally Accredited", "Our principals hold globally recognised chartered accountancy qualifications and decades of cross-border experience.", "/images/AboutPage/About_icons/int_accredited.png"],
  ["Always Responsive", "Dedicated client managers provide ongoing support with a guaranteed response within 4 working hours.", "/images/AboutPage/About_icons/responsive.png"],
  ["Paperless Workflows", "Secure cloud-based document management, access your accounts anywhere, anytime.", "/images/AboutPage/About_icons/paperless.png"],
  ["Growth-Oriented", "We don't just report history. We help you build a better financial future.", "/images/AboutPage/About_icons/growth.png"],
  ["International Standards", "All accounting and reporting work is performed in strict accordance with IFRS and GAAP standards.", "/images/AboutPage/About_icons/iso.png"],
  ["Secure Client Portal", "Dedicated client managers provide ongoing support with a guaranteed response within 4 working hours.", "/images/AboutPage/About_icons/secure_client_portal.png"],
] as const;

export const storyImages = [
  "/images/AboutPage/About_OurStory1.png",
  "/images/AboutPage/About_OurStory2.png",
  "/images/AboutPage/About_OurStory3.png",
] as const;
