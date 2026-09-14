import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TestimonialCard, {
  type Testimonial,
} from "@/components/ui/TestimonialCard";

interface TestimonialsSectionProps {
  id?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Alboré transformed our legacy infrastructure into a sovereign, high-performance platform. Their engineering discipline is unmatched — delivery was on time, on scope, and moderated expertise.",
    author: "Ahmed Khan",
    role: "CTO, FinTech Innovations Ltd.",
    initials: "AK",
  },
  {
    quote:
      "The integration roadmap Alboré designed for us reduced our operational costs by 28% in under a year. They don't just deliver advisory — they deliver transformative outcomes.",
    author: "Sarah Reynolds",
    role: "VP Operations, MediCore Systems",
    initials: "SR",
  },
  {
    quote:
      "From initial scoping to final deployment, Alboré demonstrated a level of technical mastery and strategic clarity that set them apart from every other firm we evaluated.",
    author: "Omar Malik",
    role: "Director of Engineering, GovCloud Pakistan",
    initials: "OM",
  },
];

/**
 * Testimonials Section.
 * Grounded 100% in design tokens from globals.css:
 * - bg-brand-primary-dark (--color-maroon-900: #51121d)
 * - text-text-accent (--color-gold-500: #b08d57)
 * - text-text-inverse (--color-white: #ffffff)
 * - Pill "Learn more →" action button (bg-surface text-brand-primary)
 */
export default function TestimonialsSection({
  id = "testimonials",
}: TestimonialsSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby="testimonials-heading"
      className="w-full bg-brand-primary-dark py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16"
    >
      <div className="w-full">
        {/* Header Bar */}
        <div className="relative flex flex-col items-center justify-center text-center">
          {/* Eyebrow */}
          <span className="font-body text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-text-accent">
            OUR CLIENTS
          </span>

          {/* Section Heading matching Figma copy */}
          <h2
            id="testimonials-heading"
            className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-inverse sm:text-4xl"
          >
            What our client Says
          </h2>

          {/* Learn More Pill Action Button */}
          <div className="mt-6 sm:mt-0 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-surface px-6 py-2.5 font-button text-xs sm:text-sm font-semibold text-brand-primary shadow-sm transition-all duration-200 hover:bg-surface-muted hover:gap-3 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
            >
              <span>Learn more</span>
              <ArrowRight className="h-4 w-4 text-brand-primary" />
            </Link>
          </div>
        </div>

        {/* 3-Column Testimonial Cards Grid */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {testimonials.map((item, idx) => (
            <TestimonialCard key={`${item.author}-${idx}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}