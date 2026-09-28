import Image from "next/image";

import { ReadyToTalkCta } from "@/components/marketing/ContactCTA";
import { StatsBar } from "@/components/marketing/StatsBar";

export const metadata = {
  title: "About | Albore Chartered Accountants",
  description:
    "Meet the people behind every number: our values, mission, story and the partnership approach behind Alboré.",
};

const values = [
  ["3 Tier Quality", "Rigorous three-step validation and peer review process for every single asset.", "/images/AboutPage/About_icons/three_tier_quality.png"],
  ["ISO Certified", "Fully compliant with global security, privacy, and quality management standards.", "/images/AboutPage/About_icons/iso_certified.png"],
  ["Big 4 Professionals", "Vetted experts with extensive backgrounds in premier global advisory firms.", "/images/AboutPage/About_icons/big_4_prof.png"],
  ["Confidential Membership", "Strict NDA protocols, secure data sandboxes, privacy guaranteed.", "/images/AboutPage/About_icons/confidential_membership.png"],
] as const;

const differences = [
  ["Dedicated Relationship Manager", "One senior contact who knows your file end to end, not a rotating service desk.", "/images/AboutPage/About_icons/relationship_manager.png"],
  ["Audit-Grade Compliance", "Every engagement is documented to a standard that holds up under external audit.", "/images/AboutPage/About_icons/audit_grade_compliance.png"],
  ["Transparent Fee Structure", "Fixed, published engagement fees, no retroactive surprises on the invoice.", "/images/AboutPage/About_icons/transparent_fee.png"],
  ["Hour Response SLA", "Premier-tier accounts hear back from their manager within two business hours.", "/images/AboutPage/About_icons/hour_response_sla.png"],
] as const;

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="font-heading text-[18px] font-semibold uppercase tracking-[0.06em] text-brand-primary">
        {eyebrow}
      </p>
      <h2 className="font-heading text-[34px] font-bold leading-tight text-black md:text-[44px]">
        {title}
      </h2>
      <p className="mt-3 max-w-[720px] font-heading text-[18px] font-semibold leading-[1.5] text-black md:text-[20px]">
        {description}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="about-page w-full overflow-hidden bg-white">
      {/* Hero — 1440 x 657 in the design */}
      <section className="relative flex min-h-[420px] items-center md:min-h-[657px]">
        <Image
          src="/images/AboutPage/AboutUs.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative z-10 w-full px-6 md:pl-[127px] md:pr-10">
          <h1 className="font-heading text-[40px] font-bold uppercase leading-none text-white md:text-[52px]">
            About Us
          </h1>
          <p className="mt-9 max-w-[520px] font-heading text-[26px] font-semibold leading-[1.35] text-white md:ml-[2px] md:text-[36px]">
            People Behind Every Number You Trust
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="mx-auto max-w-[1242px] px-6 pb-[88px] pt-[88px] xl:px-0">
        <SectionHeading
          eyebrow="What we stand for"
          title="Our Values"
          description="Four principles shape how every Alboré engagement is run, from the first consultation to the final sign-off"
        />
        <div className="mt-[52px] grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([title, text, icon]) => (
            <article
              key={title}
              className="min-h-[250px] rounded-[10px] bg-white px-[30px] pb-6 pt-[26px] shadow-[0_4px_14px_rgba(0,0,0,0.18)]"
            >
              <Image src={icon} alt="" width={48} height={48} className="h-12 w-12" />
              <h3 className="mt-6 font-heading text-[22px] font-bold leading-tight text-black">
                {title}
              </h3>
              <p className="mt-2 font-body text-[17px] leading-[1.45] text-[#333]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-[#51121d]">
        <div className="mx-auto grid max-w-[1242px] items-center gap-10 px-6 py-10 md:grid-cols-[548px_1fr] md:gap-[156px] md:py-[39px] xl:px-0">
          <div className="relative mx-auto aspect-[548/419] w-full max-w-[548px] overflow-hidden rounded-[50px] shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/AboutPage/About_OurMission.png"
              alt="Team joining hands over a table"
              fill
              sizes="(min-width: 768px) 548px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="text-white">
            <p className="flex items-center gap-3 font-heading text-[16px] font-bold uppercase tracking-[0.08em] text-[#b49969]">
              <span aria-hidden="true" className="h-[22px] w-[3px] bg-white" />
              Why we exist
            </p>
            <h2 className="mt-1 font-heading text-[34px] font-bold leading-tight text-white md:text-[44px]">
              Our Mission
            </h2>
            <p className="mt-5 max-w-[470px] font-heading text-[18px] font-semibold leading-[1.5] md:text-[20px]">
              To give mid-sized and enterprise clients the depth of a Big Four practice with the
              responsiveness of a boutique firm — so financial decisions are made on evidence, not
              guesswork.
            </p>
            <p className="mt-9 max-w-[470px] font-heading text-[18px] font-semibold leading-[1.5] md:text-[20px]">
              We measure success the same way our clients do: audits that close on schedule, filings
              with zero surprises, and advisory calls that end in a clear next step.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto grid max-w-[1290px] items-center gap-10 px-6 py-12 md:grid-cols-[1fr_600px] md:gap-16 md:py-[76px] xl:px-0">
        <div className="md:pl-[6px] xl:pl-[0px]">
          <div className="mx-auto max-w-[480px] xl:ml-[111px] xl:mr-0">
            <p className="font-heading text-[16px] font-bold uppercase tracking-[0.08em] text-brand-primary md:ml-[6px]">
              Since our founding
            </p>
            <h2 className="font-heading text-[34px] font-bold leading-tight text-black md:text-[44px]">
              Our Story
            </h2>
            <p className="mt-2 max-w-[470px] font-heading text-[18px] font-semibold leading-[1.5] text-black md:ml-[4px] md:text-[20px]">
              Alboré began as a two-partner tax practice serving family-owned manufacturers. As
              those clients scaled into multi-entity structures, our advisory work scaled with them
              — into audit, payroll, cross-border compliance and CFO-level advisory.
            </p>
          </div>
        </div>
        <div className="relative mx-auto aspect-[600/505] w-full max-w-[600px] overflow-hidden rounded-[50px] shadow-[0_6px_18px_rgba(0,0,0,0.25)]">
          <Image
            src="/images/AboutPage/About_OurStory.png"
            alt="Colleagues celebrating with a high five"
            fill
            sizes="(min-width: 768px) 600px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Stats band — same animated count-up component as the homepage */}
      <section className="bg-[#51121d] px-6 py-6">
        <StatsBar />
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-[1242px] px-6 pb-[88px] pt-[72px] xl:px-0">
        <div className="xl:pl-[8px]">
          <SectionHeading
            eyebrow="The Alboré difference"
            title="Why Choose Us"
            description="A comparison our clients make once, before their first engagement — and rarely again after."
          />
        </div>
        <div className="mt-[52px] grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differences.map(([title, text, icon]) => (
            <article
              key={title}
              className="min-h-[222px] rounded-[10px] bg-white px-[24px] pb-6 pt-[26px] shadow-[0_4px_14px_rgba(0,0,0,0.18)]"
            >
              <Image src={icon} alt="" width={22} height={22} className="h-[22px] w-[22px]" />
              <h3 className="mt-3 font-heading text-[18px] font-bold leading-tight text-black">
                {title}
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.45] text-[#333]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Partnership */}
      <section className="bg-[#51121d]">
        <div className="mx-auto grid max-w-[1290px] items-center gap-10 px-6 py-10 md:grid-cols-[1fr_572px] md:gap-14 md:py-[40px] xl:px-0">
          <div className="text-white xl:pl-[120px]">
            <h2 className="max-w-[420px] font-heading text-[34px] font-bold leading-[1.15] text-white md:text-[44px]">
              Partnership Built on Trust
            </h2>
            <p className="mt-4 max-w-[400px] font-heading text-[17px] font-semibold leading-[1.4] md:text-[18px]">
              Today the firm serves corporate, institutional and private clients across a dozen
              industries, while keeping the same partner-led model it started with.
            </p>
            <p className="mt-4 max-w-[400px] font-heading text-[17px] font-semibold leading-[1.4] md:text-[18px]">
              Our managing partners sit in on every onboarding, so the people who sign off on your
              engagement are the same people you&apos;ll speak with a year from now.
            </p>
          </div>
          <div className="relative mx-auto aspect-[572/365] w-full max-w-[572px] overflow-hidden rounded-[20px] shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/AboutPage/About_Partnership.png"
              alt="Partners shaking hands during a client meeting"
              fill
              sizes="(min-width: 768px) 572px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <ReadyToTalkCta singleAction />
    </div>
  );
}
