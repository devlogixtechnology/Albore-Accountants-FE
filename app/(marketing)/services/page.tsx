import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ReadyToTalkCta } from "@/components/marketing/ContactCTA";
import SectionDivider from "@/components/ui/SectionDivider";

const serviceCards = [
  ["Bookkeeping", "Strategic roadmap aligning financial records with your operational framework.", "/images/ServicesPage/BookKeeping/BookKeeping.png"],
  ["Audit & Assurance", "Independent, thorough audit and assurance that gives stakeholders confidence.", "/images/ServicesPage/audit-assurance/Audit.png"],
  ["Financial Advisory", "In-depth corporate advisory built around informed, strategic decisions.", "/images/ServicesPage/financial-advisary/Advisary.png"],
  ["Tax Services", "Strategic roadmap for tax planning, compliance, and efficient structures.", "/images/ServicesPage/tax-service/tax-paper.png"],
] as const;

const workflow = [
  ["Discovery", "Understand Your Needs and Goals", "We start with the client’s current and future needs, then identify exactly how your records and financial decisions should work together.", "/images/ServicesPage/Service_Discovery.png"],
  ["Analysis", "Identify Opportunities and Risks", "We carefully analyze your financial situation, existing processes, and growth plans to surface opportunities and risks before they become problems.", "/images/ServicesPage/Service_Analysis.png"],
  ["Strategy", "Follow the Best path", "Based on our findings, we develop a tailored financial strategy for your business. Our approach focuses on reducing risk, improving efficiency, and creating sustainable growth.", "/images/ServicesPage/Service_Strategy.png"],
  ["Implementation", "Execute and Stay With You", "We put the strategy into practical action and remain engaged with your team to monitor progress, resolve issues, and keep your financial systems effective.", "/images/ServicesPage/Service_Implementation.png"],
] as const;

export const metadata = {
  title: "Services | Albore Chartered Accountants",
  description: "Strategic accounting, audit, tax, and financial advisory services from Alboré.",
};

export default function ServicesPage() {
  return (
    <div className="services-page w-full overflow-hidden bg-white text-[#161616]">
      <section className="relative flex min-h-[310px] items-center overflow-hidden md:min-h-[370px]">
        <Image src="/images/ServicesPage/Service1.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 mx-auto w-full max-w-[1160px] px-7 py-16 md:px-10 lg:px-12">
          <p className="font-heading text-sm font-bold text-white md:text-base">What We Offer</p>
          <h1 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl lg:text-[42px]">Alboré Services</h1>
          <p className="mt-10 max-w-[450px] font-body text-[12px] leading-5 text-white md:text-[14px]">
            Strategic solutions to help you minimize risk and tax exposure — from day-to-day bookkeeping to complex advisory.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-7 py-8 text-center md:px-10">
        <p className="mx-auto max-w-[690px] font-body text-[11px] leading-4 text-gray-700">
          We structure strategic, compliant, and scalable financial solutions that help businesses optimize tax efficiency, streamline operations, and drive sustainable growth.
        </p>
      </div>

      <section className="mx-auto max-w-[1080px] px-7 pb-8 md:px-10">
        <h2 className="max-w-[500px] font-heading text-2xl font-bold leading-[1.12] md:text-[27px]">Strategic Accounting &amp; Advisory<br />for Growing Enterprises</h2>
        <p className="mt-4 max-w-[900px] font-body text-[10px] leading-4 text-gray-700">At Alboré Accountants, we understand the financial and compliance pressures facing modern businesses. Regulatory shifts, complex tax frameworks, and cash-flow constraints can all limit your strategic potential.</p>
        <p className="mt-2 max-w-[900px] font-body text-[10px] leading-4 text-gray-700">Our tailored accounting and advisory solutions are designed to help you operate more efficiently, protect your margins, and maintain complete financial clarity.</p>

        <div className="mt-7 grid items-stretch gap-5 md:grid-cols-[390px_1fr]">
          <div className="relative min-h-[300px] overflow-hidden rounded-[38px] md:min-h-[330px]">
            <Image src="/images/ServicesPage/Service_Panel.png" alt="Strategic accounting" fill className="object-cover" />
          </div>
          <div className="border-l border-gray-300 pl-5">
            <h3 className="font-heading text-sm font-bold md:text-base">Detailed Feature Breakdown &amp; Bullet Points</h3>
            <ul className="mt-5 space-y-3">
              {[
                "Comprehensive Bookkeeping & Financial Reporting",
                "Strategic Tax Planning & Risk Mitigation",
                "Audit Preparation & Compliance Assurance",
                "Financial CFO & Treasury Advisory",
                "Payroll Processing & Operational Management",
                "Cross-Border Financial Structuring",
              ].map((item) => (
                <li key={item} className="rounded bg-[#f2f2f2] px-3 py-2 font-body text-[9px] text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mt-8 h-[235px] overflow-hidden md:h-[270px]">
          <Image src="/images/ServicesPage/Service_Features.png" alt="Financial growth" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          <div className="absolute inset-x-5 bottom-4 grid grid-cols-2 gap-2 sm:grid-cols-4 md:inset-x-7 md:bottom-5">
            {serviceCards.map(([title, text]) => (
              <article key={title} className="rounded-[6px] bg-[#f6efdf] p-3 shadow-sm">
                <span className="font-body text-[6px] font-bold uppercase tracking-wider text-[#9b7a42]">{title}</span>
                <h3 className="mt-1 font-heading text-[10px] font-bold leading-3">{title}</h3>
                <p className="mt-1 line-clamp-3 font-body text-[7px] leading-3 text-gray-600">{text}</p>
                <Link href="/contact" className="mt-2 inline-flex rounded-full bg-[#6b1e2b] px-2 py-1 font-body text-[5px] font-bold text-white">TALK TO PARTNER</Link>
              </article>
            ))}
          </div>
          <div className="absolute right-4 top-4 flex items-center gap-2 text-white">
            <span className="text-[8px]">01/05</span><button aria-label="Previous service" className="rounded-full bg-white/90 p-1 text-[#6b1e2b]"><ArrowLeft className="h-3 w-3" /></button><button aria-label="Next service" className="rounded-full bg-[#6b1e2b] p-1 text-white"><ArrowRight className="h-3 w-3" /></button>
          </div>
        </div>
      </section>

      <SectionDivider className="py-4" />
      <section className="mx-auto max-w-[1000px] px-7 pb-12 md:px-10">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold md:text-[27px]">How It Works?</h2>
        </div>
        <div className="relative mt-10 grid gap-10 md:grid-cols-2 md:gap-x-28">
          <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 border-l border-[#6b1e2b] md:block" />
          {workflow.map(([title, subtitle, text, image], index) => {
            const left = index % 2 === 0;
            return (
              <article key={title} className={`relative flex gap-4 ${left ? "md:flex-row" : "md:flex-row-reverse"} items-start`}>
                <div className={`w-full ${left ? "md:pr-4 md:text-left" : "md:pl-4 md:text-right"}`}>
                  <h3 className="font-heading text-[12px] font-bold md:text-sm">{title}</h3>
                  <h4 className="font-body text-[9px] font-bold text-[#b08d57] md:text-[10px]">{subtitle}</h4>
                  <p className="mt-1 font-body text-[8px] leading-3.5 text-gray-600">{text}</p>
                  <div className="relative mt-4 h-[78px] overflow-hidden rounded-[12px] md:h-[92px]">
                    <Image src={image} alt="" fill className="object-cover" />
                  </div>
                </div>
                <div className="absolute left-1/2 top-0 z-10 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/4 items-center justify-center rounded-full border border-[#c19a57] bg-[#6b1e2b] font-heading text-white md:flex">{index + 1}</div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 border-l-4 border-[#b08d57] pl-4">
          <h2 className="font-heading text-xl font-bold md:text-2xl">Reimagining the Albore Experience</h2>
          <p className="mt-2 max-w-[680px] font-body text-[9px] leading-4 text-gray-700 md:text-[10px]">Real-world strategies that help businesses improve tax efficiency, strengthen financial performance, and plan for sustainable growth. A complete overhaul of the digital experience, aligning visual design with strategic business goals to drive conversion and enhance brand value.</p>
        </div>
      </section>

      <section className="relative min-h-[310px] overflow-hidden md:min-h-[380px]">
        <Image src="/images/ServicesPage/Service2.png" alt="Manufacturing business case study" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto flex min-h-[310px] max-w-[1100px] items-center px-8 md:min-h-[380px]">
          <div className="max-w-[390px] text-white">
            <h2 className="font-heading text-xl font-bold leading-6 md:text-2xl">Manufacturing Business<br />“Tax Efficiency. Business<br />Growth. Financial<br />Efficiency”</h2>
            <Link href="/about" className="mt-10 inline-flex rounded-full bg-[#6b1e2b] px-5 py-2 font-body text-[8px] font-semibold text-white">View Case Study</Link>
          </div>
        </div>
      </section>

      <ReadyToTalkCta />
    </div>
  );
}
