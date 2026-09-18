import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import SectionDivider from "@/components/ui/SectionDivider";
import CtaBanner from "@/components/ui/CtaBanner";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Albore Chartered Accountants",
  description:
    "Explore our complete suite of institutional-grade accounting, independent audit, strategic tax planning, and corporate financial advisory practices.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | Albore Chartered Accountants",
    description:
      "Explore our complete suite of institutional-grade accounting, independent audit, strategic tax planning, and corporate financial advisory practices.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col items-center font-body">
      {/* Hero Header */}
      <section className="relative w-full bg-[#3a0d15] text-white py-16 sm:py-20 lg:py-24 shadow-2xl overflow-hidden">
        {/* Geometric Background Accent */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
          viewBox="0 0 1200 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M-100 200 L1300 100" stroke="#b08d57" strokeWidth="1.5" />
          <path d="M200 500 L1000 -100" stroke="#b08d57" strokeWidth="1" />
        </svg>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading text-sm sm:text-base font-semibold tracking-widest text-[#b08d57] uppercase mb-3">
            Core Practice Areas
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Institutional Rigor. Personal Clarity.
          </h1>
          <p className="font-body text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
            From statutory assurance to multi-entity bookkeeping and strategic tax planning, our senior partners ensure every number reflects reality.
          </p>
        </div>
      </section>

      {/* Services Divider */}
      <SectionDivider variant="services" className="py-8 sm:py-12" />

      {/* 6 Core Practices Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group flex flex-col bg-[#fdfbf7] border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Service Card Thumbnail */}
              <div className="relative w-full h-52 overflow-hidden bg-[#2a080e]">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <span className="absolute bottom-3 left-4 font-heading text-xs font-semibold uppercase tracking-wider text-[#b08d57]">
                  {service.heroTagline || "Practice Area"}
                </span>
              </div>

              {/* Service Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h2 className="font-heading text-xl font-bold text-slate-900 leading-snug">
                  {service.title}
                </h2>
                <p className="font-body text-slate-600 text-sm leading-relaxed mt-3 flex-1">
                  {service.summary || service.teaser}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 font-heading font-bold text-sm text-[#6B1E2B] group-hover:text-[#b08d57] transition-colors"
                  >
                    <span>Explore Practice</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#6B1E2B] text-white px-4 py-2 rounded-none hover:bg-[#521520] font-bold text-xs transition-colors"
                  >
                    Consult
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pre-CTA Divider */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <SectionDivider variant="services" className="py-2" />
      </div>

      {/* Ready to Talk Banner */}
      <CtaBanner />
    </div>
  );
}