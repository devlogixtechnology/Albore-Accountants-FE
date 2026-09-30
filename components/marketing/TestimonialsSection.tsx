import TestimonialCard from "@/components/ui/TestimonialCard";
import {
  defaultTestimonials as testimonials,
  testimonialsSectionData,
} from "@/data/home/testimonialsSectionData";
import {
  MotionReveal,
  MotionStaggerGroup,
  MotionStaggerItem,
} from "@/components/ui/motion";

export { testimonials };

interface TestimonialsSectionProps {
  id?: string;
}

/**
 * Testimonials Section.
 * Grounded 100% in design tokens from globals.css:
 * - bg-[#51121d] (--color-maroon-900 / brand-primary-dark)
 * - text-[#B08D57] (--color-gold-500 / text-accent)
 * - text-white
 * - 4-column grid matching Figma
 */
export default function TestimonialsSection({
  id = "testimonials",
}: TestimonialsSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby="testimonials-heading"
      className="w-full bg-brand-primary-dark py-12 sm:py-16 lg:py-20 text-white"
    >
      <div className="w-full max-w-9xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* Header Bar (Centered) */}
        <MotionReveal>
          <div className="flex flex-col items-center justify-center text-center">
            {/* Eyebrow */}
            <span className="font-body text-2xl sm:text-2xl font-bold uppercase tracking-[0.2em] text-white">
              {testimonialsSectionData.eyebrow}
            </span>

            {/* Section Heading matching Figma copy */}
            <h2
              id="testimonials-heading"
              className="mt-2 font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight"
            >
              {testimonialsSectionData.heading}
            </h2>
          </div>
        </MotionReveal>

        {/* 4-Column Testimonial Cards Grid */}
        <MotionStaggerGroup
          className="mt-12 sm:mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-7 items-stretch"
          staggerDelay={0.09}
        >
          {testimonials.map((item, idx) => (
            <MotionStaggerItem key={`${item.author}-${idx}`} className="h-full">
              <TestimonialCard {...item} />
            </MotionStaggerItem>
          ))}
        </MotionStaggerGroup>
      </div>
    </section>
  );
}