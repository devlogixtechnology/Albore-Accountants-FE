import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollFillLine } from './IndustriesScroll';

import {
    industriesHeroData,
    industriesSectionData,
    industryItems,
    strategicFrameworkData,
    growthLinksSectionData,
} from '@/data/Industries/industries';

export default function IndustriesMiddleSections() {
    return (
        <>
            {/* Hero */}
            <section className="relative isolate overflow-hidden min-h-[500px] flex items-center">
                <Image
                    src={industriesHeroData.imageSrc}
                    alt={industriesHeroData.imageAlt}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />

                <div className="relative px-6 py-20 sm:py-24 sm:px-40">
                    <h1 className="font-heading text-4xl font-bold text-text-inverse sm:text-5xl">
                        {industriesHeroData.heading}
                    </h1>
                    <p className="mt-4 max-w-xl text-text-inverse/85">{industriesHeroData.description}</p>

                    <Link
                        href={industriesHeroData.cta.href}
                        className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-text-inverse transition-colors hover:bg-gold-light"
                    >
                        {industriesHeroData.cta.label}
                    </Link>
                </div>
            </section>

            {/* Industries zigzag list — now with a connecting vertical line */}
            <section className="mx-auto max-w-content px-6 py-20">
                <div className="text-center">
                    <h2 className="font-heading text-3xl font-bold text-text-heading sm:text-4xl">
                        {industriesSectionData.heading}
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-text-body">
                        {industriesSectionData.description}
                    </p>
                </div>

                <div className="relative mt-16 flex flex-col gap-10">
                    {/* Vertical connector line running through the whole list */}
                    <ScrollFillLine />

                    {industryItems.map((item, i) => {
                        const isEven = i % 2 === 1;
                        return (
                            <div
                                key={item.number}
                                className={`relative z-10 w-full border-l-4 border-brand-primary-dark bg-surface-muted p-6 sm:p-8 md:w-[45%] ${isEven ? 'md:ml-auto md:mt-12' : 'md:mr-auto'
                                    }`}
                            >
                                <h3 className="font-heading text-lg font-bold text-text-heading">
                                    {item.number}. {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-text-body">
                                    {item.description}
                                </p>
                                <div className="mt-5 flex justify-end">
                                    <Link
                                        href={item.readMoreHref}
                                        className="inline-flex h-9 items-center justify-center rounded-lg bg-brand-primary-dark px-5 text-xs font-semibold text-text-inverse transition-colors hover:bg-brand-primary"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Strategic framework */}
            <section className="mx-auto max-w-content px-6 py-20">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch">
                    <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-2xl p-8 sm:p-10">
                        <Image
                            src={strategicFrameworkData.imageSrc}
                            alt={strategicFrameworkData.imageAlt}
                            fill
                            className="object-cover"
                        />

                        <p className="relative text-xs font-semibold uppercase tracking-wide text-accent">
                            {strategicFrameworkData.badge}
                        </p>

                        <div className="relative">
                            <h3 className="font-heading text-2xl font-bold text-text-inverse">
                                {strategicFrameworkData.heading}
                            </h3>
                            <p className="mt-4 text-sm leading-relaxed text-text-inverse/80">
                                {strategicFrameworkData.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h4 className="font-heading text-lg font-bold text-text-heading">
                            {strategicFrameworkData.focusAreasHeading}
                        </h4>
                        <ul className="mt-4 flex flex-col gap-2">
                            {strategicFrameworkData.focusAreas.map((area) => (
                                <li key={area} className="flex gap-2 text-sm text-text-body">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    {area}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-sm leading-relaxed text-text-body">
                            {strategicFrameworkData.summary}
                        </p>
                        <Link
                            href={strategicFrameworkData.cta.href}
                            className="mt-6 inline-flex h-11 w-fit items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-text-inverse transition-colors hover:bg-gold-light"
                        >
                            {strategicFrameworkData.cta.label}
                        </Link>
                    </div>
                </div>
            </section>

            {/* How else we drive growth */}
            <section className="bg-surface-muted px-6 py-16">
                <div className="mx-auto max-w-content text-center">
                    <h2 className="font-heading text-2xl font-bold text-text-heading sm:text-3xl">
                        {growthLinksSectionData.heading}
                    </h2>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        {growthLinksSectionData.links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="flex items-center justify-center gap-2 rounded-sm border border-brand-primary-dark/20 bg-surface px-8 py-4 text-sm font-semibold text-text-heading transition-colors hover:border-brand-primary-dark"
                            >
                                {link.label}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}