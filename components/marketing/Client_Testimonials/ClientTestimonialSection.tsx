import Image from 'next/image';
import { StatsBar } from '@/components/marketing/StatsBar';
import CtaBanner from '@/components/ui/CtaBanner';
import {
    testimonialsHeroData,
    testimonialsSectionData,
    testimonials,
    founderDeskData,
    promiseSectionData,
    promises
} from '@/data/testimonials';


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

            <section className="relative isolate overflow-hidden min-h-[500px] flex items-center">
                <Image
                    src={testimonialsHeroData.imageSrc}
                    alt={testimonialsHeroData.imageAlt}
                    fill
                    priority
                    className="object-cover"
                    aria-hidden="true"
                />

                <div className="relative px-6 py-20 sm:py-24 sm:px-40">
                    <h1 className="font-heading text-4xl font-bold text-text-inverse sm:text-5xl">
                        {testimonialsHeroData.eyebrow}
                    </h1>

                    <p className="mt-4 max-w-2xl font-heading text-2xl leading-tight text-text-inverse">
                        {testimonialsHeroData.headingLine1}
                    </p>
                </div>
            </section>

            {/* Testimonials grid */}
            <section className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 min-[2560px]:max-w-[2000px] min-[3840px]:max-w-[2600px]">
                <p className="font-heading text-sm font-semibold text-brand-primary">
                    {testimonialsSectionData.eyebrow}
                </p>
                <h2 className="mt-2 font-heading text-3xl font-bold text-text-heading sm:text-4xl">
                    {testimonialsSectionData.heading}
                </h2>
                <p className="mt-4 max-w-2xl text-text-body">{testimonialsSectionData.description}</p>

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="flex min-h-[270px] flex-col justify-between bg-surface shadow-[0_3px_10px_rgba(0,0,0,0.18)]"
                        >
                            {/* Quote */}
                            <div className="p-5">
                                <StarRating rating={t.rating} />

                                <p className="mt-7 text-[13px] font-medium leading-[1.45] text-text-heading">
                                    {t.quote}
                                </p>
                            </div>

                            {/* Client */}
                            <div className="flex items-center gap-3 border-t border-brand-primary px-5 py-4">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-[11px] font-bold text-text-inverse">
                                    {t.initials}
                                </span>

                                <div className="min-w-0">
                                    <p className="text-[12px] font-bold leading-tight text-brand-primary">
                                        {t.name}
                                    </p>

                                    <p className="mt-0.5 text-[10px] leading-tight text-text-body">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            <StatsBar />

            {/* Founder desk */}
            <section className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 min-[2560px]:max-w-[2000px] min-[3840px]:max-w-[2600px]">
                <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:min-h-[520px]">

                    {/* Founder Image */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[520px]">
                        <Image
                            src={founderDeskData.imageSrc}
                            alt={founderDeskData.imageAlt}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                        />

                        {/* Client Badge */}
                        <div className="absolute bottom-3 left-1/2 flex w-[215px] -translate-x-1/2 items-center gap-2 rounded-xl bg-surface px-3 py-2 shadow-lg">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-text-inverse">
                                {founderDeskData.avatarInitials}
                            </span>

                            <div className="min-w-0">
                                <p className="text-xs font-bold leading-tight text-brand-primary">
                                    {founderDeskData.name}
                                </p>

                                <p className="mt-0.5 text-[10px] leading-tight text-text-body">
                                    {founderDeskData.role}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Text Box */}
                    <div className="flex flex-col justify-center rounded-2xl border border-brand-primary/20 bg-surface px-8 py-8 sm:px-10 sm:py-10">
                        <p className="font-heading text-sm font-semibold text-brand-primary">
                            {founderDeskData.quoteHeading}
                        </p>

                        <h3 className="mt-5 font-heading text-3xl font-bold leading-tight text-text-heading">
                            {founderDeskData.quoteHeading2}
                        </h3>

                        <p className="mt-5 max-w-xl text-sm leading-[1.55] text-text-body">
                            &quot;{founderDeskData.quoteBody}
                            <br />
                            <br />
                            {founderDeskData.quoteBody2}&quot;
                        </p>
                    </div>

                </div>
            </section>


            {/* Promise */}
            <section className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 min-[2560px]:max-w-[2000px] min-[3840px]:max-w-[2600px]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
                    {promiseSectionData.heading}
                </p>

                <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold text-text-heading sm:text-4xl">
                    {promiseSectionData.subheading}
                </h2>

                <p className="mt-4 max-w-2xl text-text-body">
                    {promiseSectionData.description}
                </p>

                <div className="mt-10 flex flex-col gap-4">
                    {promises.map((item) => (
                        <div
                            key={item}
                            className="relative overflow-hidden rounded-lg border border-brand-primary/15 bg-surface"
                        >
                            <span
                                aria-hidden
                                className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-brand-primary to-brand-primary-dark"
                            />
                            <p className="px-6 py-5 text-center text-sm font-medium text-text-body">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            {/* CTA */}
            <CtaBanner />
            <div className="h-6 bg-white sm:h-8" aria-hidden="true" />
        </>
    );
}