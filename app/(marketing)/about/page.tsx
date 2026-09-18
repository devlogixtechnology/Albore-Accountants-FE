import type { Metadata } from "next";
import Image from "next/image";

import SectionDivider from "@/components/ui/SectionDivider";
import CtaBanner from "@/components/ui/CtaBanner";
import { StatsBar } from "@/components/marketing/StatsBar";
import { values, principles, strengths, storyImages } from "@/data/about";

export const metadata: Metadata = {
  title: "About Us | Albore Chartered Accountants",
  description:
    "Discover Albore Chartered Accountants — dedicated financial advisors, certified auditors, and tax specialists with over a decade of excellence.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Albore Chartered Accountants",
    description:
      "Discover Albore Chartered Accountants — dedicated financial advisors, certified auditors, and tax specialists with over a decade of excellence.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="about-page w-full overflow-hidden bg-white text-[#1a1a1a]">
      <section className="about-hero relative min-h-[300px] md:min-h-[360px] flex items-center overflow-hidden">
        <Image src="/images/AboutPage/About1.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        <div className="relative z-10 mx-auto w-full max-w-[1160px] px-7 py-16 md:px-10 lg:px-12">
          <div className="max-w-[460px] border-l border-white/25 pl-5 md:pl-6">
            <p className="font-heading text-sm md:text-base font-bold text-white">Who We Are</p>
            <h1 className="mt-3 font-heading text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.12] text-white">
              People Behind Every <span className="text-[#c52a3d]">Number</span><br />
              <span className="text-[#c52a3d]">You Trust</span>
            </h1>
            <p className="mt-6 max-w-[400px] font-body text-sm md:text-[15px] leading-6 text-white/95 font-medium">
              A decade of partnering with businesses who expect more than just accurate books — they expect a partner who understands their goals.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pt-8 md:pt-10">
        <div className="mx-auto max-w-[980px] text-center">
          <div className="text-[#b08d57] text-xl">◈</div>
          <h2 className="mt-2 font-heading text-2xl md:text-[27px] font-bold text-[#422d28]">Our Values</h2>
          <p className="font-body text-[11px] text-gray-500">The principles that guide every engagement</p>
        </div>
        <div className="mx-auto mt-5 max-w-[1440px] bg-[#5d101e] px-6 py-7 md:px-14">
          <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([title, text, icon]) => (
              <article key={title} className="min-h-[125px] rounded-[3px] bg-[#fbfaf7] p-4 shadow-sm">
                <Image src={icon} alt="" width={40} height={40} className="h-10 w-10" />
                <h3 className="mt-3 font-heading text-[11px] font-bold text-[#222]">{title}</h3>
                <p className="mt-1 font-body text-[9px] leading-4 text-gray-500">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1040px] px-7 py-8 md:px-10 md:py-10">
        <SectionDivider className="py-1" />
        <div className="grid items-center gap-10 md:grid-cols-[1fr_360px]">
          <div>
            <h2 className="font-heading text-2xl md:text-[27px] font-bold">Our mission</h2>
            <p className="mt-5 max-w-[560px] font-body text-[12px] leading-[1.55] text-gray-800">
              We empower businesses with clear, accurate financial insight and strategic guidance, helping them make confident decisions, manage complexity, and build a stronger financial foundation. Through precision, integrity, and long-term partnership, we aim to create lasting business success.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 justify-self-center">
            {principles.map(([label, icon]) => (
              <div
                key={label}
                className="flex h-[76px] w-[105px] flex-col items-center justify-center gap-1 rounded-[16px] bg-gradient-to-br from-[#6b1e2b] to-[#4a3a32] text-white shadow-sm transition-all duration-300 ease-out will-change-transform hover:scale-110 hover:shadow-xl hover:z-10"
              >
                <Image src={icon} alt="" width={28} height={28} className="h-7 w-7" />
                <span className="mt-1 text-[9px] font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider className="py-5" />
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1fr]">
          <div className="relative mx-auto h-[270px] w-full max-w-[420px]">
            <div className="absolute left-0 top-0 h-[125px] w-[150px] overflow-hidden rounded-[14px] border-2 border-white shadow-lg md:h-[140px] md:w-[170px]">
              <Image src={storyImages[0]} alt="Business meeting" fill className="object-cover" />
            </div>
            <div className="absolute left-[95px] top-[70px] h-[125px] w-[175px] overflow-hidden rounded-[14px] border-2 border-white shadow-lg md:left-[110px] md:h-[145px] md:w-[190px]">
              <Image src={storyImages[1]} alt="Accounting workspace" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-[7px] h-[100px] w-[115px] overflow-hidden rounded-[14px] border-2 border-white shadow-lg md:h-[110px] md:w-[125px]">
              <Image src={storyImages[2]} alt="Team collaboration" fill className="object-cover" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-heading text-2xl md:text-[27px] font-bold">Our Story</h2>
            <p className="mt-5 font-body text-[12px] leading-[1.55] text-gray-800">
              Alboré was founded around one belief: that financial expertise should give business owners confidence, not confusion. What began as a boutique advisory has grown into a full-service practice, without losing the partnership approach every client deserves.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1080px] px-7 pb-10 md:px-10">
        <SectionDivider className="py-3" />
        <div className="text-center">
          <h2 className="font-heading text-2xl md:text-[27px] font-bold">Why Choose Us?</h2>
          <p className="mt-1 font-body text-[11px] text-gray-500">A partnership built on precision, discretion, and results — not just numbers on a page.</p>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map(([title, text, icon]) => (
            <article key={title} className="flex gap-3">
              <Image src={icon} alt="" width={28} height={28} className="mt-0.5 h-7 w-7 shrink-0" />
              <div>
                <h3 className="font-heading text-[11px] font-bold">{title}</h3>
                <p className="mt-1 font-body text-[9px] leading-4 text-gray-600">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#5d101e] px-7 py-8 text-white md:px-12">
        <div className="mx-auto max-w-[1100px]">
          <p className="font-body text-[11px]">We are Custodians <span className="text-[#c09c63]">Of Your Financial Story.</span></p>
          {/* Reuses the exact same animated stats component and count-up
              behavior as the homepage (components/marketing/StatsBar),
              unmodified — per explicit request — rather than the
              page-specific 20+/01+/18+/10+ figures shown in the Figma
              static export. */}
          <div className="mt-5">
            <StatsBar />
          </div>
        </div>
      </section>

      <section className="relative mx-auto my-5 h-[250px] w-[calc(100%-2rem)] max-w-[1440px] overflow-hidden rounded-[7px] border shadow-sm md:h-[300px]">
        <Image src="/images/AboutPage/About2.png" alt="Client consultation" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/50" />
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <h2 className="max-w-[700px] font-heading text-2xl md:text-[29px] font-bold leading-[1.25]">
            Every engagement starts with a conversation — where your goals become our roadmap. Real relationships, not just transactions — that&apos;s how we work.
          </h2>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
