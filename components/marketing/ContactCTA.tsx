import { PhoneCall } from 'lucide-react';
import { testimonialsCtaData } from '@/data/ClientTestimonial/clientTestimonial';

export function ReadyToTalkCta() {
    const { heading, description, primaryAction, secondaryAction } = testimonialsCtaData;

    return (
        <section className="bg-gold px-6 py-10">
            <div className="mx-auto flex max-w-content flex-col items-center gap-6 sm:flex-row sm:justify-between">
                <div className="flex items-start gap-4">
                    <PhoneCall className="h-12 w-12 shrink-0 text-brand-primary-dark" strokeWidth={1.5} />
                    <div>
                        <h2 className="font-heading text-xl font-bold uppercase text-text-heading">
                            {heading}
                        </h2>
                        <p className="mt-1 max-w-md text-sm text-text-heading/80">{description}</p>
                    </div>
                </div>

                <div className="hidden h-16 w-px bg-brand-primary-dark/30 sm:block" />

                <div className="flex shrink-0 gap-4">
                    <a
                        href={primaryAction.href}
                        className="inline-flex h-11 items-center justify-center rounded-sm bg-brand-primary-dark px-6 text-sm font-semibold text-text-inverse transition-colors hover:bg-brand-primary"
                    >
                        {primaryAction.label}
                    </a>
                    <a
                        href={secondaryAction.href}
                        className="inline-flex h-11 items-center justify-center rounded-sm border border-brand-primary-dark bg-surface px-6 text-sm font-semibold text-brand-primary-dark transition-colors hover:bg-cream-hover"
                    >
                        {secondaryAction.label}
                    </a>
                </div>
            </div>
        </section>
    );
}