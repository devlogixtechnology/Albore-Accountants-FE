import { Quote } from "lucide-react";

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company?: string;
  initials: string;
};

/**
 * Testimonial Card Component.
 * Grounded strictly in tokens from globals.css:
 * - Card background: bg-surface
 * - Quote badge & avatar: bg-brand-primary with text-text-inverse
 * - Author name: text-brand-primary
 * - Quote body: text-text-heading
 * - Role & company: text-text-body/70
 */
export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  initials,
}: Testimonial) {
  return (
    <div className="flex h-full flex-col justify-between rounded-[20px] bg-surface p-6 sm:p-7 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div>
        {/* Maroon Quote Pill Icon */}
        <div className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-brand-primary text-text-inverse shadow-xs">
          <Quote className="h-4 w-4 fill-current rotate-180" />
        </div>

        {/* Testimonial Quote */}
        <p className="mt-5 font-body text-xs sm:text-[13.5px] leading-relaxed text-text-heading">
          {quote}
        </p>
      </div>

      {/* Author Details with Divider Line */}
      <div className="mt-6 pt-2">
        <div className="h-px w-full bg-border/40" />

        <div className="mt-5 flex items-center gap-3">
          {/* Circular Initials Badge */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary text-text-inverse">
            <span className="font-heading text-xs font-bold tracking-wider">
              {initials}
            </span>
          </div>

          <div className="text-left">
            <h4 className="font-heading text-sm font-bold text-brand-primary">
              {author}
            </h4>
            <p className="font-body text-xs text-text-body/70">
              {company ? `${role}, ${company}` : role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}