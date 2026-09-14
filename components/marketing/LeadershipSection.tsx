import TeamMemberCard, {
  type TeamMember,
} from "@/components/ui/TeamMemberCard";

const teamMembers: TeamMember[] = [
  {
    name: "Ameen Riaz",
    title: "Managing Partner",
    initials: "AR",
    imageUrl: "/images/teamMembers/teamPicture.png",
    bio: "Specializing in corporate tax structuring, FBR regulatory defense, and long-term financial advisory for scaling enterprises.",
    href: "/about",
  },
  {
    name: "Tariq Mahmood",
    title: "Head of Audit & Assurance",
    initials: "TM",
    imageUrl: "/images/teamMembers/teamPicture.png",
    bio: "Over 12 years of experience leading statutory audits, internal control reviews, and corporate governance for mid-market clients.",
    href: "/about",
  },
  {
    name: "Zainab Fatima",
    title: "Tax & Compliance Lead",
    initials: "ZF",
    imageUrl: "/images/teamMembers/teamPicture.png",
    bio: "Expert in sales tax, direct taxation, and cross-border transfer pricing compliance across Pakistan and regional markets.",
    href: "/about",
  },
  {
    name: "Bilal Ahmed",
    title: "Director of Advisory",
    initials: "BA",
    imageUrl: "/images/teamMembers/teamPicture.png",
    bio: "Advising enterprise leadership on mergers, financial due diligence, and capital management to drive sustainable growth.",
    href: "/about",
  },
];

export default function LeadershipSection() {
  return (
    <section
      aria-labelledby="leadership-heading"
      className="w-full px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 py-16 sm:py-20"
    >
      <h2
        id="leadership-heading"
        className="text-center font-heading text-3xl font-extrabold tracking-tight text-text-heading sm:text-4xl"
      >
        Meet the Leadership Team
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center font-body text-sm leading-relaxed text-text-body sm:text-base">
        Our leadership team combines deep regulatory expertise with strategic
        insight to help your business navigate growth, ensure compliance, and
        maximize value at every stage.
      </p>

      {/* Grid container scaled for wider cards */}
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
        {teamMembers.map((member, idx) => (
          <TeamMemberCard key={`${member.name}-${idx}`} {...member} />
        ))}
      </div>
    </section>
  );
}