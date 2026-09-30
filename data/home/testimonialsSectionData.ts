import type { Testimonial } from "@/components/ui/TestimonialCard";

export const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Alboré transformed our legacy infrastructure into a sovereign, high-performance platform. Their engineering discipline is unmatched — delivery was on time, on scope, and moderated expertise",
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
      "From initial scoping to final deployment, DevLogix demonstrated a level of technical mastery and strategic clarity that set them apart from every other vendor we evaluated.",
    author: "Omar Maqsood",
    role: "Dr,Engineer MediCore Systems",
    initials: "OM",
  },
  {
    quote:
      "From initial scoping to final deployment, the team demonstrated a level of technical mastery and corporate system strategic clarity that set them apart from every other vendor",
    author: "Ayesha Khan",
    role: "Lead Engineering GV company ltd",
    initials: "Ak",
  },
];

export const testimonialsSectionData = {
  eyebrow: "OUR CLIENTS",
  heading: "What our client Says",
  testimonials: defaultTestimonials,
};

export default testimonialsSectionData;
