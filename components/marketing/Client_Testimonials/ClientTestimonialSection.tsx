import Image from 'next/image';
import SectionDivider from '@/components/ui/SectionDivider';
import { StatsBar } from '@/components/marketing/StatsBar';
import { ReadyToTalkCta } from '../ContactCTA';
import {
    testimonialsHeroData,
    testimonialsSectionData,
    testimonials,
    founderDeskData,
    promiseSectionData,
    promises
} from '@/data/ClientTestimonial/clientTestimonial';


function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1 text-accent" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    viewBox="0 0 20 20"
                    className={`h-4 w-4 ${i < rating ? 'fill-accent' : 'fill-accent/20'}`}
                >
                    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6L1.3 7.7l6.1-.6L10 1.5z" />
                </svg>
            ))}
        </div>
    );
}

export default function ClientTestimonialsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative isolate overflow-hidden bg-maroon-900">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'radial-gradient(90% 130% at 85% 45%, var(--color-maroon-700) 0%, var(--color-maroon-900) 60%)',
                    }}
                />

                <svg
                    className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/2 opacity-30"
                    viewBox="0 0 600 500"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M 520 -20 C 380 120, 380 380, 520 520"
                        stroke="var(--color-gold-400)"
                        strokeWidth="1"
                    />
                    <path
                        d="M 560 -20 C 400 140, 420 360, 580 520"
                        stroke="var(--color-gold-400)"
                        strokeWidth="1"
                        opacity="0.6"
                    />
                    <path
                        d="M 480 -20 C 360 100, 380 400, 460 520"
                        stroke="var(--color-gold-400)"
                        strokeWidth="1"
                        opacity="0.4"
                    />
                </svg>

                <div className="relative mx-auto max-w-content px-6 py-20 sm:py-28">
                    <p className="font-heading text-sm font-semibold text-accent">
                        {testimonialsHeroData.eyebrow}
                    </p>

                    <h1 className="mt-3 max-w-2xl font-heading text-4xl font-bold leading-tight text-text-inverse sm:text-5xl">
                        {testimonialsHeroData.headingLine1}
                    </h1>

                    <p className="mt-3 max-w-xl font-heading text-3xl font-bold leading-snug">
                        <span className="text-accent">{testimonialsHeroData.subheadingAccent}</span>
                        <br />
                        <span className="text-text-inverse">{testimonialsHeroData.subheadingInverse}</span>
                    </p>
                </div>
            </section>

            <SectionDivider />

            {/* Testimonials grid */}
            <section className="mx-auto max-w-content px-6 py-20">
                <p className="font-heading text-sm font-semibold text-brand-primary">
                    {testimonialsSectionData.eyebrow}
                </p>
                <h2 className="mt-2 font-heading text-3xl font-bold text-text-heading sm:text-4xl">
                    {testimonialsSectionData.heading}
                </h2>
                <p className="mt-2 font-heading text-lg font-semibold text-accent">
                    {testimonialsSectionData.subheading}
                </p>
                <p className="mt-4 max-w-2xl text-text-body">{testimonialsSectionData.description}</p>

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="flex flex-col justify-between rounded-lg border border-brand-primary/15 bg-surface-muted p-6"
                        >
                            <div>
                                <StarRating rating={t.rating} />
                                <p className="mt-4 text-sm leading-relaxed text-text-body">{t.quote}</p>
                            </div>

                            <div className="mt-6 flex items-center gap-3 border-t border-brand-primary/10 pt-4">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-text-inverse">
                                    {t.initials}
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-text-heading">{t.name}</p>
                                    <p className="text-xs text-text-body/70">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <SectionDivider />
            <StatsBar />

            {/* Founder desk */}
            <section className="mx-auto max-w-content px-6 py-20">
                <h2 className="border-l-4 border-brand-primary-dark pl-4 font-heading text-2xl font-bold text-text-heading">
                    {founderDeskData.sectionHeading}
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:min-h-[520px]">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[520px]">
                        <Image
                            src={founderDeskData.imageSrc}
                            alt={founderDeskData.imageAlt}
                            fill
                            sizes="(min-width: full) 50vw, 100vw"
                            className="object-cover"
                        />
                        <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl bg-surface/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-text-inverse">
                                {founderDeskData.avatarInitials}
                            </span>
                            <div>
                                <p className="text-sm font-semibold text-text-heading">{founderDeskData.name}</p>
                                <p className="text-xs text-text-body/70">{founderDeskData.role}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-surface-muted p-8 sm:p-10">
                        <h3 className="font-heading text-xl font-bold text-text-heading">
                            {founderDeskData.quoteHeading}
                        </h3>
                        <p className="mt-6 leading-relaxed text-text-body">
                            &quot;{founderDeskData.quoteBody}&quot;
                        </p>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Promise */}
            <section className="mx-auto max-w-content px-6 py-20">
                <h2 className="font-heading text-3xl font-bold text-text-heading sm:text-4xl">
                    {promiseSectionData.heading}
                </h2>
                <p className="mt-4 font-heading text-lg font-semibold text-accent">
                    {promiseSectionData.subheading}
                </p>
                <p className="mt-4 max-w-2xl text-text-body">{promiseSectionData.description}</p>

                <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
                    <div className="flex flex-col gap-4">
                        {promises.map((item) => (
                            <p
                                key={item}
                                className="rounded-md border border-brand-primary/15 bg-surface-muted px-5 py-4 text-sm text-text-body"
                            >
                                {item}
                            </p>
                        ))}
                    </div>

                    <div className="hidden h-full w-px bg-brand-primary/15 lg:block" />

                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                        <Image
                            src={promiseSectionData.imageSrc}
                            alt={promiseSectionData.imageAlt}
                            fill
                            sizes="(min-width: full) 45vw, 100vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* CTA */}
            <ReadyToTalkCta />
            <div className="h-6 bg-white sm:h-8" aria-hidden="true" />
        </>
    );
}