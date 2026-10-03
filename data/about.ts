/**
 * About page content — matches the approved Figma (About_page.png).
 * Tuples are [title, description, icon path].
 */

export const values = [
  ["3 Tier Quality", "Rigorous three-step validation and peer review process for every single asset.", "/images/AboutPage/About_icons/three_tier_quality.png"],
  ["ISO Certified", "Fully compliant with global security, privacy, and quality management standards.", "/images/AboutPage/About_icons/iso_certified.png"],
  ["Big 4 Professionals", "Vetted experts with extensive backgrounds in premier global advisory firms.", "/images/AboutPage/About_icons/big_4_prof.png"],
  ["Confidential Membership", "Strict NDA protocols, secure data sandboxes, privacy guaranteed.", "/images/AboutPage/About_icons/confidential_membership.png"],
] as const;

export const differences = [
  ["Dedicated Relationship Manager", "One senior contact who knows your file end to end, not a rotating service desk.", "/images/AboutPage/About_icons/relationship_manager.png"],
  ["Audit-Grade Compliance", "Every engagement is documented to a standard that holds up under external audit.", "/images/AboutPage/About_icons/audit_grade_compliance.png"],
  ["Transparent Fee Structure", "Fixed, published engagement fees, no retroactive surprises on the invoice.", "/images/AboutPage/About_icons/transparent_fee.png"],
  ["Hour Response SLA", "Premier-tier accounts hear back from their manager within two business hours.", "/images/AboutPage/About_icons/hour_response_sla.png"],
] as const;
