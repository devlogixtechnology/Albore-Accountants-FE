import type { TeamMember } from "@/components/ui/TeamMemberCard";

export const defaultTeamMembers: TeamMember[] = [
  {
    name: "Ameen Riaz",
    role: "SENIOR MANAGING PARTNER",
    leadTitle: "Head of Audit & Financial Assurance",
    regBadge: "FCA • ICAP Reg: 4192",
    imageUrl: "/images/teamMembers/AmeenRiaz.png",
    bio: "Over 22 years directing statutory audit mandates for multinational conglomerates, banking institutions, and publicly traded entities across the region.",
    contactHref: "/contact",
  },
  {
    name: "Zainab Malik",
    role: "PARTNER, CORPORATE TAXATION",
    leadTitle: "Cross-Border & Transfer Pricing Lead",
    regBadge: "FCA • LLM Tax • ICAP Reg: 6214",
    imageUrl: "/images/teamMembers/ZainabMalik.png",
    bio: "Specializes in complex FBR litigation, high-value corporate restructuring, and GCC double taxation treaties for family conglomerates and holding groups.",
    contactHref: "/contact",
  },
  {
    name: "Tariq Hashmi",
    role: "PARTNER, DEALS & VALUATIONS",
    leadTitle: "Mergers & Acquisitions Leader",
    regBadge: "CFA • ACA • ICAP Reg: 7301",
    imageUrl: "/images/teamMembers/TariqHashmi.png",
    bio: "Conducted over $1.8B in transaction advisory, Quality of Earnings assessments, and solvency opinions for cross-border private equity and sovereign funds.",
    contactHref: "/contact",
  },
  {
    name: "Kamran Rizvi",
    role: "PARTNER, RISK & GOVERNANCE",
    leadTitle: "SECP Compliance & Forensic Auditing",
    regBadge: "FCA • CISA • ICAP Reg: 3955",
    imageUrl: "/images/teamMembers/KamranRizvi.png",
    bio: "Former member of statutory accounting inspection boards, leads forensic inquiries, listed entity governance audits, and internal control reviews.",
    contactHref: "/contact",
  },
];

export const leadershipSectionData = {
  eyebrow: "EXECUTIVE GOVERNANCE",
  headingPart1: "Managing Partners &",
  headingPart2: "Practice Leaders",
  description:
    "Decades of senior leadership experience across Big 4 alumni networks, regulatory committees, and institutional assurance practices.",
  teamMembers: defaultTeamMembers,
};

export default leadershipSectionData;
