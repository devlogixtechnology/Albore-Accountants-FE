import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReadyToTalkCta } from "@/components/marketing/ContactCTA";
import SectionDivider from "@/components/ui/SectionDivider";

const AVATARS: Record<string, string> = {
  "Devon Sterling": "/images/InsightSection/Devon_Sterling.png",
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
      <span className="relative inline-block h-6 w-6 shrink-0 overflow-hidden rounded-full">
        <Image src={src} alt={author} fill className="object-cover" />
      </span>
    );
  }
  // No headshot asset provided for this author yet — fall back to an
  // initials badge (same pattern used by TestimonialCard/TeamMemberCard)
  // instead of leaving a placeholder glyph.
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6b1e2b] font-heading text-[7px] font-bold text-white">
      {initials(author)}
    </span>
  );
}

const latest = [
  ["TAX", "MARCH 8, 2026", "5 Tax Planning Moves to Make Before Year-End", "Proactive planning now can meaningfully reduce your tax liability before the filing deadline arrives.", "/images/InsightSection/Insights_Latest1.png", "Devon Sterling"],
  ["AUDITS", "MARCH 5, 2026", "What Auditors Look for in Internal Controls", "Understanding common control gaps can help you prepare for a smoother, faster audit cycle.", "/images/InsightSection/Insights_Latest2.png", "Sarah Jenkins"],
  ["ADVISORY", "FEB 26, 2026", "Building a Financial Model Investors Trust", "A credible forecast rests on assumptions that can withstand scrutiny — here’s how to get there.", "/images/InsightSection/Insights_Latest3.png", "Devon Sterling"],
] as const;

const blogs = [
  ["TAX", "MARCH 2026", "Tax Planning Moves to Make Before Year-End", "Proactive planning now can meaningfully reduce your tax liability before the filing deadline arrives.", "/images/InsightSection/Insights_Blogs1.png"],
  ["AUDIT", "MARCH 2026", "What Auditors Look for in Internal Controls", "Understanding common control gaps can help you prepare for a smoother, faster audit cycle.", "/images/InsightSection/Insights_Blogs2.png"],
  ["ADVISORY", "MARCH 2026", "Building a Financial Model Investors Trust", "A credible forecast rests on assumptions that can withstand scrutiny — here’s how to get there.", "/images/InsightSection/Insights_Blogs3.png"],
  ["TECHNOLOGY", "MARCH 2026", "How AI Is Changing the Way We Do Bookkeeping", "Automation is handling the repetitive work, freeing teams to focus on accuracy and insight.", "/images/InsightSection/Insights_Blogs4.png"],
  ["COMPLIANCE", "MARCH 2026", "IFRS Updates Every Finance Team Should Know in 2026", "Key reporting changes and what they mean for your financial statements get prepared.", "/images/InsightSection/Insights_Blogs5.png"],
  ["BOOKKEEPING", "MARCH 2026", "The Hidden Cost of Manual Bookkeeping for Growing Teams", "Uncovering how outdated processes quietly drain hours and accuracy as a business scales.", "/images/InsightSection/Insights_Blogs6.png"],
] as const;

export const metadata = {
  title: "Insights | Albore Chartered Accountants",
  description: "Perspectives, updates, and practical guidance from Alboré accounting, tax, and advisory specialists.",
};

export default function InsightsPage() {
  return (
    <div className="insights-page w-full overflow-hidden bg-white text-[#151515]">
      <section className="relative min-h-[310px] md:min-h-[360px] overflow-hidden">
        <Image src="/images/InsightSection/Insights1.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8c0c17]/90 via-[#5c1724]/75 to-[#142c4d]/35" />
        <div className="relative z-10 mx-auto flex min-h-[310px] max-w-[1160px] items-center px-7 py-14 md:min-h-[360px] md:px-10 lg:px-12">
          <div className="max-w-[580px]">
            <p className="font-heading text-xl font-bold text-[#c5a15e] md:text-2xl">Insights</p>
            <h1 className="mt-2 font-heading text-3xl font-bold leading-[1.18] text-white md:text-4xl lg:text-[43px]">Insights That Keep You<br className="hidden md:block" /> Ahead</h1>
            <p className="mt-3 max-w-[560px] font-body text-[14px] leading-6 text-white/95 md:text-base">Perspectives, updates, and practical guidance from our audit, tax, and advisory specialists, helping you stay ahead of financial and regulatory change.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-6 py-8 md:px-10 md:py-10">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold md:text-[28px]">Research Insights &amp; Discoveries</h2>
          <p className="mx-auto mt-2 max-w-[500px] font-body text-[10px] leading-4 text-gray-700 md:text-[11px]">Perspectives, updates, and practical guidance from our audit, tax, and advisory specialists — helping you stay ahead of financial and regulatory change.</p>
        </div>
        <SectionDivider className="py-4" />

        <div className="flex items-stretch gap-3 pl-4">
          <span aria-hidden="true" className="w-1 shrink-0 rounded-full bg-gradient-to-b from-[#6b1e2b] to-[#b08d57]" />
          <h3 className="font-heading text-lg font-bold md:text-xl">Latest Insights</h3>
        </div>
        <p className="mt-4 ml-4 font-body text-[10px]">Browse Insights by Topic</p>
        <div className="ml-4 mt-3 flex flex-wrap gap-3">
          {["Tax", "Audits", "Advisory", "Compliance"].map((topic, index) => (
            <button key={topic} className={`rounded-full border px-5 py-1 font-body text-[10px] ${index === 0 ? "border-[#6b1e2b] bg-[#6b1e2b] text-white" : "border-[#b08d57] bg-[#f7f1e3] text-[#8b6a37]"}`}>{topic}</button>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {latest.map(([category, date, title, text, image, author]) => (
            <article key={title} className="overflow-hidden rounded-[8px] border border-gray-200 bg-white shadow-sm">
              <div className="relative h-[150px]"><Image src={image} alt="" fill className="object-cover" /></div>
              <div className="p-4">
                <div className="flex items-center justify-between font-body text-[6px] text-gray-400"><span className="rounded bg-[#d5c39f] px-2 py-0.5 text-[#5c4a28]">{category}</span><span>{date}</span></div>
                <h4 className="mt-3 font-heading text-[11px] font-bold leading-4">{title}</h4>
                <p className="mt-2 font-body text-[8px] leading-3.5 text-gray-600">{text}</p>
                <div className="mt-5 flex items-center gap-2 border-t border-gray-100 pt-3 font-body text-[7px] text-gray-600">
                  <Avatar author={author} />
                  {author}
                </div>
                <Link href="#" className="mt-3 inline-block font-body text-[7px] font-medium text-[#9b7a42]">Read Transmission&nbsp; →</Link>
              </div>
            </article>
          ))}
        </div>

        <SectionDivider className="py-4" />
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-stretch gap-3 pl-4">
            <span aria-hidden="true" className="w-1 shrink-0 rounded-full bg-gradient-to-b from-[#6b1e2b] to-[#b08d57]" />
            <div>
              <h3 className="font-heading text-lg font-bold md:text-xl">Thoughts &amp; Blogs</h3>
              <p className="mt-2 max-w-[580px] font-body text-[10px] leading-4">Thoughts, industry observations, and practical guides written to share learning with the design community.</p>
            </div>
          </div>
          <Link href="#" className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-[#f7f1e3] px-4 py-2 font-body text-[9px] font-semibold text-[#6b1e2b] md:self-center">
            More Blogs <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {blogs.map(([category, date, title, text, image]) => (
            <article key={title} className="overflow-hidden border border-gray-200 bg-white">
              <div className="relative h-[135px]"><Image src={image} alt="" fill className="object-cover" /></div>
              <div className="p-4">
                <div className="font-body text-[6px] text-gray-400"><span className="rounded bg-[#d5c39f] px-2 py-0.5 text-[#5c4a28]">{category}</span> &nbsp; {date}</div>
                <h4 className="mt-3 font-heading text-[10px] font-bold leading-4">{title}</h4>
                <p className="mt-2 font-body text-[8px] leading-3.5 text-gray-500">{text}</p>
                <Link href="#" className="mt-4 inline-flex items-center font-body text-[7px] font-bold">READ MORE&nbsp; →</Link>
              </div>
            </article>
          ))}
        </div>
        <SectionDivider className="py-4" />
      </section>

      <ReadyToTalkCta />
    </div>
  );
}
