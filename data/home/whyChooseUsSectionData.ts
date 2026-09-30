export interface WhyChooseUsItem {
  id: string;
  iconName: "earth" | "lock" | "badgeCheck" | "gauge" | "scale" | "matrix";
  title: string;
  description: string;
}

export const defaultDifferentiators: WhyChooseUsItem[] = [
  {
    id: "global-standards",
    iconName: "earth",
    title: "Global Standards, Local Acumen",
    description:
      "Methodologies aligned with International Auditing and Assurance Standards Board (IAASB) and International Financial Reporting Standards (IFRS), combined with tactical mastery of Pakistan's FBR and SECP regulatory terrains.",
  },
  {
    id: "iso-27001",
    iconName: "lock",
    title: "ISO 27001 Data Security",
    description:
      "Enterprise workpapers and financial forensics are strictly hosted within our encrypted, air-gapped Alborè Vault, protecting board-level sensitive data against exposure or industrial espionage.",
  },
  {
    id: "icap-qcr",
    iconName: "badgeCheck",
    title: "ICAP QCR Rated Practice",
    description:
      "Awarded highest Quality Control Review (QCR) rating by the Institute of Chartered Accountants of Pakistan, certifying unqualified compliance with international assurance benchmarks.",
  },
  {
    id: "executive-agility",
    iconName: "gauge",
    title: "Executive Agility & Responsiveness",
    description:
      "Unlike oversized international networks slowed by bureaucratic lag, our senior decision-makers respond rapidly to time-sensitive tax notices, deal deadlines, and board filings.",
  },
  {
    id: "fbr-appellate",
    iconName: "scale",
    title: "FBR Appellate Tribunal Record",
    description:
      "A commanding track record representing conglomerates before Commissioner Appeals, Appellate Tribunal Inland Revenue (ATIR), and coordinating with High Court counsels.",
  },
  {
    id: "cross-border-matrix",
    iconName: "matrix",
    title: "Multilateral Cross-Border Matrix",
    description:
      "Seamless coordination across UAE Corporate Tax, Saudi Zakat/CIT, UK HMRC, and European double tax treaties for Pakistani enterprises expanding into global jurisdictions.",
  },
];

export const whyChooseUsSectionData = {
  eyebrow: "FIDUCIARY DISTINCTION",
  headingPart1: "Why",
  headingPart2: "Institutional Enterprise",
  headingPart3: "Choose Alborè",
  description:
    "Building long-term board advisory partnerships through unmatched technical rigor, global methodology, and boardroom discretion.",
  differentiators: defaultDifferentiators,
};

export default whyChooseUsSectionData;
