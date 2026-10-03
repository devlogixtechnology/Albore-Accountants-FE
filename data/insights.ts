/**
 * Insights page data and content definitions — matches the approved Figma
 * (Insights_page.png).
 */

export const AVATARS: Record<string, string> = {
  "Devon Sterling": "/images/InsightSection/Devon_Sterling.png",
  // Placeholder: no separate headshot supplied yet, reuse Devon's.
  "Sarah Jenkins": "/images/InsightSection/Devon_Sterling.png",
};

export const latest = [
  ["Tax", "MARCH 8, 2026", "5 Tax Planning Moves to Make Before Year-End", "Proactive planning now can meaningfully reduce your tax liability before the filing deadline arrives.", "/images/InsightSection/Insights_Latest1.png", "Devon Sterling"],
  ["Audits", "MARCH 5, 2026", "What Auditors Look for in Internal Controls", "Understanding common control gaps can help you prepare for a smoother, faster audit cycle...", "/images/InsightSection/Insights_Latest2.png", "Sarah Jenkins"],
  ["Advisory", "FEB 28, 2026", "Building a Financial Model Investors Trust", "A credible forecast rests on assumptions that can withstand scrutiny — here’s how to get there.", "/images/InsightSection/Insights_Latest3.png", "Devon Sterling"],
] as const;

export const blogs = [
  ["Tax", "MARCH 2026", "Tax Planning Moves to Make Before Year-End", "Proactive planning now can meaningfully reduce your tax liability before the filing deadline arrives.", "/images/InsightSection/Insights_Blogs1.png"],
  ["Audit", "MARCH 2026", "What Auditors Look for in Internal Controls", "Understanding common control gaps can help you prepare for a smoother, faster audit cycle.", "/images/InsightSection/Insights_Blogs2.png"],
  ["Advisory", "MARCH 2026", "Building a Financial Model Investors Trust", "A credible forecast rests on assumptions that can withstand scrutiny — here’s how to get there.", "/images/InsightSection/Insights_Blogs3.png"],
  ["Technology", "MARCH 2026", "How AI Is Changing the Way We Do Bookkeeping", "Automation is handling the repetitive work, freeing teams to focus on accuracy and insight.", "/images/InsightSection/Insights_Blogs4.png"],
  ["Compliance", "MARCH 2026", "IFRS Updates Every Finance Team Should Know in 2026", "Key reporting changes and what they mean for how your financial statements get prepared.", "/images/InsightSection/Insights_Blogs5.png"],
  ["Bookkeeping", "MARCH 2026", "The Hidden Cost of Manual Bookkeeping for Growing Teams", "Uncovering how outdated processes quietly drain hours and accuracy as a business scales.", "/images/InsightSection/Insights_Blogs6.png"],
] as const;

export const topics = ["Tax", "Audits", "Advisory", "Tax"] as const;
