import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { ReadyToTalkCta } from "@/components/marketing/ContactCTA";

export const metadata = {
  title: "Insights | Albore Chartered Accountants",
  description:
    "Perspectives, updates, and practical guidance from Alboré accounting, tax, and advisory specialists.",
};

const AVATARS: Record<string, string> = {
  "Devon Sterling": "/images/InsightSection/Devon_Sterling.png",
  // Placeholder: no separate headshot supplied yet, reuse Devon's.
  "Sarah Jenkins": "/images/InsightSection/Devon_Sterling.png",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

function Avatar({ author }: { author: string }) {
  const src = AVATARS[author];
  if (src) {
    return (
      <span className="relative inline-block h-8 w-8 shrink-0 overflow-hidden rounded-full">
        <Image src={src} alt="" fill sizes="32px" className="object-cover" />
      </span>
    );
  }
  // No headshot asset for this author yet — initials badge as a fallback.
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary font-heading text-[13px] font-bold text-white">
      {initials(author)}
    </span>
  );
}

function CategoryChip({ children }: { children: string }) {
  return (
    <span className="inline-block rounded-[4px] bg-accent px-[9px] py-[3px] font-heading text-[12px] font-bold uppercase leading-none tracking-[0.02em] text-white">
      {children}
    </span>
  );
}

const topics = ["Tax", "Audits", "Advisory", "Tax"] as const;

const latest = [
  ["Tax", "MARCH 8, 2026", "5 Tax Planning Moves to Make Before Year-End", "Proactive planning now can meaningfully reduce your tax liability before the filing deadline arrives.", "/images/InsightSection/Insights_Latest1.png", "Devon Sterling"],
  ["Audits", "MARCH 5, 2026", "What Auditors Look for in Internal Controls", "Understanding common control gaps can help you prepare for a smoother, faster audit cycle...", "/images/InsightSection/Insights_Latest2.png", "Sarah Jenkins"],
  ["Advisory", "FEB 28, 2026", "Building a Financial Model Investors Trust", "A credible forecast rests on assumptions that can withstand scrutiny — here’s how to get there.", "/images/InsightSection/Insights_Latest3.png", "Devon Sterling"],
] as const;

const blogs = [
  ["Tax", "MARCH 2026", "Tax Planning Moves to Make Before Year-End", "Proactive planning now can meaningfully reduce your tax liability before the filing deadline arrives.", "/images/InsightSection/Insights_Blogs1.png"],
  ["Audit", "MARCH 2026", "What Auditors Look for in Internal Controls", "Understanding common control gaps can help you prepare for a smoother, faster audit cycle.", "/images/InsightSection/Insights_Blogs2.png"],
  ["Advisory", "MARCH 2026", "Building a Financial Model Investors Trust", "A credible forecast rests on assumptions that can withstand scrutiny — here’s how to get there.", "/images/InsightSection/Insights_Blogs3.png"],
  ["Technology", "MARCH 2026", "How AI Is Changing the Way We Do Bookkeeping", "Automation is handling the repetitive work, freeing teams to focus on accuracy and insight.", "/images/InsightSection/Insights_Blogs4.png"],
  ["Compliance", "MARCH 2026", "IFRS Updates Every Finance Team Should Know in 2026", "Key reporting changes and what they mean for how your financial statements get prepared.", "/images/InsightSection/Insights_Blogs5.png"],
  ["Bookkeeping", "MARCH 2026", "The Hidden Cost of Manual Bookkeeping for Growing Teams", "Uncovering how outdated processes quietly drain hours and accuracy as a business scales.", "/images/InsightSection/Insights_Blogs6.png"],
] as const;

export default function InsightsPage() {
  return (
    <div className="insights-page w-full overflow-hidden bg-white">
      {/* Hero — 1440 x 612 */}
      <section className="relative flex min-h-[380px] items-center md:min-h-[612px]">
        <Image
          src="/images/InsightSection/Insights.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-full px-6 md:pb-[70px] md:pl-[113px] md:pr-10">
          <h1 className="font-heading text-[34px] font-bold leading-tight text-white md:text-[52px]">
            Insights That Keep You Ahead
          </h1>
          <p className="mt-8 max-w-[600px] font-heading text-[22px] font-medium leading-[1.4] text-white md:text-[28px]">
            Practical perspectives from our audit, tax and advisory team, so change never catches
            you off guard.
          </p>
        </div>
      </section>

      {/* Latest insights heading */}
      <section className="px-6 pb-[60px] pt-[80px] md:px-[37px]">
        <p className="font-heading text-[16px] font-bold uppercase tracking-[0.06em] text-brand-primary">
          From our desk
        </p>
        <h2 className="font-heading text-[32px] font-bold leading-tight text-black md:text-[40px]">
          Latest Insights
        </h2>
        <p className="mt-2 max-w-[520px] font-heading text-[18px] font-medium leading-[1.35] text-black md:text-[20px]">
          Fresh perspectives, market updates and practical guidance from our advisory team.
        </p>
      </section>

      {/* Topic filter band */}
      <section className="bg-brand-primary-dark">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-[48px] gap-y-3 px-6 py-[54px] md:h-[154px] md:py-0 xl:px-0">
          {topics.map((topic, i) => (
            <button
              key={`${topic}-${i}`}
              type="button"
              aria-pressed={i === 0}
              className={`h-[46px] min-w-[128px] rounded-full px-6 font-heading text-[22px] font-semibold ${
                i === 0 ? "bg-accent text-white" : "bg-white text-black"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </section>

      {/* Latest cards */}
      <section className="mx-auto max-w-[1200px] px-6 pb-[87px] pt-[68px] xl:px-0">
        <div className="grid items-stretch gap-[26px] md:grid-cols-3">
          {latest.map(([category, date, title, text, image, author]) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden rounded-[10px] border border-black/10 bg-white shadow-[0_3px_12px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-[218px] w-full">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 383px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col px-[28px] pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <CategoryChip>{category}</CategoryChip>
                  <span className="font-heading text-[14px] text-[#555]">{date}</span>
                </div>
                <h3 className="mt-5 font-heading text-[20px] font-bold leading-[1.3] text-black md:text-[22px]">
                  {title}
                </h3>
                <p className="mt-3 font-heading text-[15.5px] leading-[1.45] text-[#777]">{text}</p>
                <div className="mt-auto pt-6">
                  <div className="flex items-center gap-2 border-t border-black/15 pt-5 font-heading text-[15px] font-semibold text-black">
                    <Avatar author={author} />
                    {author}
                  </div>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 font-heading text-[15.5px] font-semibold text-accent"
                  >
                    Read Transmission
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Thoughts & Blogs */}
      <section className="mx-auto max-w-[1280px] px-6 pb-[100px] xl:px-0">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="xl:pl-[44px]">
            <p className="font-heading text-[16px] font-bold uppercase tracking-[0.06em] text-brand-primary">
              Ideas worth sharing
            </p>
            <h2 className="font-heading text-[30px] font-bold leading-tight text-black md:text-[34px]">
              Thoughts &amp; Blogs
            </h2>
            <p className="mt-3 max-w-[480px] font-heading text-[18px] font-medium leading-[1.4] text-black md:text-[20px]">
              Thoughts, industry observations, and practical guides written to share learning with
              the design community.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex h-[49px] shrink-0 items-center gap-2 self-start rounded-[12px] bg-brand-primary-dark px-5 font-heading text-[20px] font-semibold text-white transition-colors hover:bg-brand-primary md:self-auto"
          >
            More Blogs
            <ArrowRight className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-6 grid gap-[24px] md:grid-cols-3 md:gap-x-[24px] md:gap-y-[32px]">
          {blogs.map(([category, date, title, text, image]) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden border border-black/10 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
            >
              <div className="relative h-[198px] w-full">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 411px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                <div className="flex items-center gap-2">
                  <CategoryChip>{category}</CategoryChip>
                  <span className="font-heading text-[13px] text-[#555]">{date}</span>
                </div>
                <h3 className="mt-3 font-heading text-[19px] font-bold leading-[1.3] text-black md:text-[20px]">
                  {title}
                </h3>
                <p className="mt-2 font-heading text-[15px] leading-[1.4] text-[#777]">{text}</p>
                <Link
                  href="#"
                  className="mt-auto inline-flex items-center gap-1 pt-4 font-heading text-[13px] font-bold uppercase text-brand-primary-dark"
                >
                  Read more
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ReadyToTalkCta singleAction />
    </div>
  );
}
