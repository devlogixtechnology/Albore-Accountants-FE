import type { Metadata } from "next";
import ClientTestimonialSection from "@/components/marketing/Client_Testimonials/ClientTestimonialSection";

export const metadata: Metadata = {
  title: "Client Testimonials | Albore Chartered Accountants",
  description:
    "Discover how Albore Chartered Accountants empowers industry leaders and high-growth businesses with trusted advisory and financial clarity.",
  alternates: {
    canonical: "/client-testimonials",
  },
  openGraph: {
    title: "Client Testimonials | Albore Chartered Accountants",
    description:
      "Discover how Albore Chartered Accountants empowers industry leaders and high-growth businesses with trusted advisory and financial clarity.",
    url: "/client-testimonials",
    type: "website",
  },
};

export default function ClientTestimonialsPage() {
  return (
    <div>
      <ClientTestimonialSection />
    </div>
  );
}