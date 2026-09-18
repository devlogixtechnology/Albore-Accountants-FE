import type { Metadata } from "next";
import IndustriesMiddleSections from "@/components/marketing/Industries/Industries";
import TestimonialsSection from "@/components/marketing/TestimonialsSection";
import CtaBanner from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Industries We Serve | Albore Chartered Accountants",
  description:
    "Tailored financial, tax, and audit services across retail, healthcare, manufacturing, tech startups, and hospitality.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries We Serve | Albore Chartered Accountants",
    description:
      "Tailored financial, tax, and audit services across retail, healthcare, manufacturing, tech startups, and hospitality.",
    url: "/industries",
    type: "website",
  },
};

export default function IndustriesPage() {
  return (
    <div>
      <IndustriesMiddleSections />
      <div className="h-6 bg-white sm:h-8" aria-hidden="true" />
      <TestimonialsSection />
      <div className="h-6 bg-white sm:h-8" aria-hidden="true" />
      <CtaBanner />
      <div className="h-6 bg-white sm:h-8" aria-hidden="true" />
    </div>
  );
}