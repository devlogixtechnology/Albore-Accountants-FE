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
                    sizes={industriesHeroData.imageSizes}
                    className="object-cover"
                />

                <div className="relative px-6 py-20 sm:py-24 sm:px-40">
                    <h1 className="font-heading text-4xl font-bold text-text-inverse sm:text-5xl">
                        {industriesHeroData.heading}
                    </h1>
                    <p className="mt-4 max-w-xl text-text-inverse/85">{industriesHeroData.description}</p>
                </div>
            </section>

            {/* Industries zigzag list */}
            <section className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 min-[2560px]:max-w-[2000px] min-[3840px]:max-w-[2600px]">
                <div className="text-left">
                    <h2 className="font-heading text-3xl font-bold text-text-heading sm:text-4xl">
                        {industriesSectionData.heading}
                    </h2>
                    <p className="mt-4 max-w-2xl text-text-body">
                        {industriesSectionData.description}
                    </p>
                </div>

                <div className="relative mt-16 flex flex-col gap-10">
                    <ScrollFillLine />
                    {industryItems.map((item, i) => {
                        const isEven = i % 2 === 1;

                        return (
                            <div
                                key={item.number}
                                className={`relative z-10 w-full p-8 sm:p-10 md:w-[49%] ${isEven
                                    ? 'md:ml-auto md:mt-12 border border-brand-primary-dark border-l-4 border-l-accent bg-brand-primary-dark text-text-inverse shadow-lg'
                                    : 'md:mr-auto border border-industry-border border-l-4 border-l-brand-primary-dark bg-surface text-text-heading shadow-lg'
                                    }`}
                            >
                                <h3
                                    className={`font-heading text-2xl font-bold ${isEven ? 'text-text-inverse' : 'text-text-heading'
                                        }`}
                                >
                                    {item.number}. {item.title}
                                </h3>

                                <p
                                    className={`mt-5 text-base leading-relaxed ${isEven ? 'text-text-inverse/85' : 'text-text-body'
                                        }`}
                                >
                                    {item.description}
                                </p>

                                <div className="mt-6 flex justify-end">
                                    <Link
                                        href={item.readMoreHref}
                                        className={`inline-flex h-10 items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors ${isEven
                                            ? 'bg-accent text-text-inverse hover:bg-gold-light'
                                            : 'bg-brand-primary-dark text-text-inverse hover:bg-brand-primary'
                                            }`}
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
            {/* Strategic framework */}
            <section className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 min-[2560px]:max-w-[2000px] min-[3840px]:max-w-[2600px]">
                <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-stretch">
                    <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-2xl p-8 sm:p-10">
                        <Image
                            src={strategicFrameworkData.imageSrc}
                            alt={strategicFrameworkData.imageAlt}
                            sizes={strategicFrameworkData.imageSizes}
                            fill
                            className="object-cover"
                        />

                        {/* Lighter overlay so the photo shows through, darkened only toward the bottom for text legibility */}
                        <div className="absolute inset-0 bg-text-heading/50" />

                        <div className="relative mt-8">
                            <h3 className="font-heading text-3xl font-bold leading-tight text-text-inverse max-w-[320px]">
                                {strategicFrameworkData.heading}
                            </h3>
                            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-inverse/85">
                                {strategicFrameworkData.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h4 className="font-heading text-2xl font-bold text-text-heading sm:text-3xl">
                            {strategicFrameworkData.focusAreasHeading}
                        </h4>
                        <ul className="mt-6 flex list-disc flex-col gap-3 pl-5 marker:text-text-heading">
                            {strategicFrameworkData.focusAreas.map((area) => (
                                <li key={area} className="text-sm leading-relaxed text-text-body">
                                    {area}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-sm leading-relaxed text-text-body">
                            {strategicFrameworkData.summary}
                        </p>
                        <Link
                            href={strategicFrameworkData.cta.href}
                            className="mt-8 inline-flex h-12 w-fit items-center justify-center rounded-full bg-brand-primary-dark px-7 text-sm font-semibold text-text-inverse transition-colors hover:bg-brand-primary"
                        >
                            {strategicFrameworkData.cta.label}
                        </Link>
                    </div>
                </div>
            </section>




            {/* How else we drive growth */}
            <section className="bg-brand-primary px-6 py-16">
                <div className="mx-auto max-w-content text-center">
                    <h2 className="font-heading text-2xl font-bold text-text-inverse sm:text-3xl ">
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