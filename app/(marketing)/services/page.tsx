import type { Metadata } from "next";
import Image from "next/image";

import CtaBanner from "@/components/ui/CtaBanner";
import { CaseStudyShowcase, ExploreMoreLink } from "@/components/services";
import { serviceCards, features, steps } from "@/data/servicesOverview";

const description =
  "Strategic accounting, audit, tax, and financial advisory services from Alboré.";

export const metadata: Metadata = {
  title: "Our Services | Albore Chartered Accountants",
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services | Albore Chartered Accountants",
    description,
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="services-page w-full overflow-hidden bg-white">
      {/* Hero — 1440 x 657 */}
      <section className="relative flex min-h-[420px] items-center md:min-h-[657px]">
        <Image
          src="/images/ServicesPage/Services.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 w-full px-6 md:pl-[132px] md:pr-10">
          <h1 className="font-heading text-[40px] font-bold uppercase leading-none text-white md:text-[52px]">
            Services
          </h1>
          <p className="mt-9 max-w-[620px] font-heading text-[24px] font-medium leading-[1.4] text-white md:text-[32px]">
            Strategic solutions to help you minimize risk and tax exposure from day-to-day
            bookkeeping to complex advisory.
          </p>
        </div>
      </section>

      {/* All services */}
      <section className="mx-auto max-w-[1306px] px-6 pb-[72px] pt-[72px] xl:px-0">
        <div className="xl:pl-3">
          <p className="font-heading text-[15px] font-bold uppercase tracking-[0.06em] text-brand-primary">
            What we offer
          </p>
          <h2 className="font-heading text-[32px] font-bold leading-tight text-black md:text-[40px]">
            All services, one accounting partner
          </h2>
          <p className="mt-2 max-w-[700px] font-heading text-[17px] font-medium leading-[1.4] text-black">
            Pick a single service or bring us in end to end — each engagement is built around how
            your business actually runs.
          </p>
        </div>

        <div className="mt-[62px] grid gap-[17px] sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-[12px] bg-white px-[30px] pb-[30px] pt-[36px] shadow-[0_4px_16px_rgba(0,0,0,0.18)]"
            >
              <h3 className="font-heading text-[22px] font-semibold uppercase leading-tight text-black xl:text-[22px]">
                {card.title}
              </h3>
              <div className="mt-4 border-t border-black/30 pb-8 pt-5">
                <p className="font-heading text-[15px] font-medium leading-[1.5] text-black">
                  {card.text}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 font-heading text-[14.5px] leading-[1.45] text-black">
                  {card.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto border-t border-black/30 pt-7">
                <ExploreMoreLink href={`/services/${card.slug}`} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Detailed feature breakdown */}
      <section className="bg-brand-primary-dark">
        <div className="mx-auto max-w-[1306px] px-6 pb-[70px] pt-[64px] md:pb-[110px] xl:px-0">
          <div className="xl:pl-[2px]">
            <p className="font-heading text-[14px] font-bold uppercase tracking-[0.06em] text-[#b49969]">
              Features we provide
            </p>
            <h2 className="font-heading text-[32px] font-bold leading-tight text-white md:text-[40px]">
              Detailed Feature Breakdown
            </h2>
            <p className="mt-2 max-w-[720px] font-heading text-[17px] font-medium leading-[1.4] text-white">
              Our tailored accounting and advisory solutions are designed to help you operate more
              efficiently, protect your margins, and maintain complete financial clarity
            </p>
          </div>
          <div className="mt-8 grid gap-x-[220px] gap-y-[34px] md:grid-cols-2 xl:pl-[2px]">
            {features.map((f) => (
              <div
                key={f}
                className="flex min-h-[86px] items-center justify-center rounded-[6px] bg-white px-6 text-center font-heading text-[17px] font-semibold text-black"
              >
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-[1306px] px-6 pb-[95px] pt-[56px] xl:px-0">
        <div className="max-w-[457px] border-t-2 border-brand-primary-dark bg-white px-[30px] pb-6 pt-5 shadow-[0_4px_16px_rgba(0,0,0,0.2)] xl:ml-[17px]">
          <p className="font-heading text-[13px] font-bold uppercase tracking-[0.06em] text-brand-primary">
            Services process
          </p>
          <h2 className="font-heading text-[32px] font-bold leading-tight text-black md:text-[40px]">
            How It Works
          </h2>
          <p className="mt-3 font-heading text-[16px] font-medium text-black">
            From first conversation to ongoing support
          </p>
        </div>

        {/* Desktop timeline — absolutely positioned to match the design */}
        <div className="relative mx-auto mt-[62px] hidden h-[1000px] w-[1306px] xl:block">
          <Image
            src="/images/ServicesPage/Service_1234.png"
            alt=""
            aria-hidden="true"
            width={103}
            height={896}
            className="absolute left-[588px] top-[-8px] h-[896px] w-[103px] max-w-none"
          />
          {steps.map((step, i) => {
            const textLeft = i % 2 === 0;
            return (
              <div key={step.title}>
                {/* connector line between text and circle */}
                <span
                  aria-hidden="true"
                  className="absolute h-px bg-black/30"
                  style={{
                    top: step.center,
                    ...(textLeft
                      ? { left: 459, width: 154 }
                      : { left: 665, width: 173 }),
                  }}
                />
                <div
                  className="absolute w-[420px]"
                  style={{
                    top: step.center - 18,
                    ...(textLeft ? { left: 38 } : { left: 843 }),
                  }}
                >
                  <h3 className="font-heading text-[28px] font-bold leading-tight text-brand-primary-dark">
                    {step.title}
                  </h3>
                  <h4 className="font-heading text-[21px] font-bold leading-tight text-black">
                    {step.subtitle}
                  </h4>
                  <p className="mt-2 max-w-[400px] font-heading text-[16px] leading-[1.45] text-black">
                    {step.text}
                  </p>
                </div>
                <Image
                  src={step.image}
                  alt=""
                  width={403}
                  height={217}
                  className="absolute h-auto w-[403px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
                  style={{
                    top: step.center - 54,
                    ...(textLeft ? { left: 832 } : { left: 36 }),
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Mobile / tablet: simple stacked steps */}
        <div className="mt-10 space-y-10 xl:hidden">
          {steps.map((step, i) => (
            <article key={step.title} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c19a57] bg-brand-primary-dark font-heading text-lg text-white">
                  {i + 1}
                </span>
                <h3 className="font-heading text-[24px] font-bold text-brand-primary-dark">
                  {step.title}
                </h3>
              </div>
              <h4 className="font-heading text-[20px] font-bold text-black">{step.subtitle}</h4>
              <p className="font-heading text-[16px] leading-[1.5] text-black">{step.text}</p>
              <Image
                src={step.image}
                alt=""
                width={403}
                height={217}
                className="h-auto w-full max-w-[403px]"
              />
            </article>
          ))}
        </div>
      </section>

      {/* Reimagining band */}
      <section className="bg-brand-primary-dark">
        <div className="mx-auto max-w-[1306px] px-6 py-10 md:py-[52px] xl:px-0 xl:pl-[22px]">
          <h2 className="font-heading text-[30px] font-bold leading-tight text-white md:text-[40px]">
            Reimagining the Albore Experience
          </h2>
          <p className="mt-3 max-w-[760px] font-heading text-[17px] font-medium leading-[1.4] text-white">
            Real-world strategies that helped businesses improve tax efficiency, strengthen
            financial performance, and plan for sustainable growth. A complete overhaul of the
            digital experience, aligning visual design with strategic business goals to drive
            conversion and enhance brand value.
          </p>
        </div>
      </section>

      {/* Case study (animated) */}
      <section className="px-4 pb-10 pt-9 md:px-8">
        <CaseStudyShowcase />
      </section>

      <CtaBanner />
    </div>
  );
}
