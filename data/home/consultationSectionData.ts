export interface ConsultationTrustCard {
  iconName: "ShieldCheck" | "Lock" | "Clock";
  title: string;
  description: string;
}

export const consultationTrustCards: ConsultationTrustCard[] = [
  {
    iconName: "ShieldCheck",
    title: "Direct Senior Partner Oversight",
    description:
      "Every enterprise consultation is personally handled by an FCA / ICAP licensed senior partner.",
  },
  {
    iconName: "Lock",
    title: "Strict Non-Disclosure & Discretion",
    description:
      "All pre-engagement communications are safeguarded under legally binding professional confidentiality.",
  },
  {
    iconName: "Clock",
    title: "4-Hour Executive SLA Guarantee",
    description:
      "Our executive partner dispatch desk confirms conflict checks and meeting schedules within 4 business hours.",
  },
];

export const consultationPracticeAreas: string[] = [
  "Statutory Audit & IFRS Assurance Mandate",
  "Corporate Tax Strategy & International Compliance",
  "Cross-Border Advisory & Transaction Support",
  "Enterprise Bookkeeping & Fractional CFO",
  "Corporate Secretarial & Regulatory Filings",
];

export const consultationMeetingModes: string[] = [
  "Executive Office (Bahria Town HQ, Lahore)",
  "Virtual Video Conference (Zoom / Teams)",
  "Client Corporate Headquarters",
];

export const consultationSectionData = {
  eyebrow: "CONFIDENTIAL INTAKE",
  headingPart1: "Initiate Your Institutional",
  headingPart2: "Advisory Engagement",
  subheading:
    "Direct access to our senior partner council. We prioritize corporate mandates requiring statutory fidelity, aggressive tax efficiency, or cross-border transactional support.",
  trustCards: consultationTrustCards,
  executiveDesk: {
    label: "IMMEDIATE EXECUTIVE DESK",
    phone: "+92 (42) 3591-0020 / Ext. 402",
    phoneHref: "tel:+924235910020",
  },
  form: {
    title: "Confidential Engagement Request",
    subtitle: "Please provide statutory entity details to accelerate conflicts clearance.",
    practiceAreas: consultationPracticeAreas,
    meetingModes: consultationMeetingModes,
    submitLabel: "Submit Confidential Consultation Request",
    submittingLabel: "Submitting Confidential Request...",
    disclaimer:
      "Under strict professional ethics of the Institute of Chartered Accountants of Pakistan (ICAP)",
  },
};

export default consultationSectionData;
