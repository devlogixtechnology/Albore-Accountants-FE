import TeamMemberCard from "@/components/ui/TeamMemberCard";
import {
  defaultTeamMembers as teamMembers,
  leadershipSectionData,
} from "@/data/home/leadershipSectionData";
import {
  MotionReveal,
  MotionStaggerGroup,
  MotionStaggerItem,
} from "@/components/ui/motion";

export { teamMembers };

export default function LeadershipSection() {
  return (
    <section
      aria-labelledby="leadership-heading"
      className="w-full pt-12 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10"
    >
      <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* Left-Aligned Executive Header with grand scale */}
        <MotionReveal>
          <div className="max-w-3xl">
            <p className="font-heading text-xs sm:text-[13.5px] font-bold uppercase tracking-[0.16em] text-maroon-hover">
              {leadershipSectionData.eyebrow}
            </p>
            <h2
              id="leadership-heading"
              className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[48px] font-bold tracking-tight text-ink leading-[1.12]"
            >
              {leadershipSectionData.headingPart1}{" "}
              <span className="text-accent">{leadershipSectionData.headingPart2}</span>
            </h2>
            <p className="mt-4 font-body text-base sm:text-[17px] leading-relaxed text-body/80">
              {leadershipSectionData.description}
            </p>
          </div>
        </MotionReveal>

        {/* 4-column Leadership Cards Grid */}
        <MotionStaggerGroup
          className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6"
          staggerDelay={0.09}
        >
          {teamMembers.map((member, idx) => (
            <MotionStaggerItem key={`${member.name}-${idx}`} className="h-full">
              <TeamMemberCard {...member} />
            </MotionStaggerItem>
          ))}
        </MotionStaggerGroup>
      </div>
    </section>
  );
}