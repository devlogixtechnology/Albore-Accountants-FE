// ------------------------------------------------------------------------------
// 1. HERO SECTION
// ------------------------------------------------------------------------------
export interface TestimonialsHeroData {
    eyebrow: string;
    headingLine1: string;
    subheadingAccent: string;
    subheadingInverse: string;
}

export const testimonialsHeroData: TestimonialsHeroData = {
    eyebrow: 'Clients testimonials',
    headingLine1: 'Our Result Are Our Proof , We Build Trust',
    subheadingAccent: 'See the Success Stories from',
    subheadingInverse: "those We've Partner With",
};

// ------------------------------------------------------------------------------
// 2. TESTIMONIALS GRID
// ------------------------------------------------------------------------------
export interface Testimonial {
    quote: string;
    name: string;
    role: string;
    initials: string;
    rating: number;
}

export interface TestimonialsSectionData {
    eyebrow: string;
    heading: string;
    subheading: string;
    description: string;
}

export const testimonialsSectionData: TestimonialsSectionData = {
    eyebrow: 'Our Clients',
    heading: 'What Our Client Says',
    subheading: 'Real Results, Real Relationships',
    description:
        'Every engagement is built on measurable outcomes and long-term trust — see who we work with and what they say.',
};

export const testimonials: Testimonial[] = [
    {
        quote:
            'Alboré transformed our legacy infrastructure into a sovereign, high-performance platform. Delivery was on time, on scope.',
        name: 'Ahmed Khan',
        role: 'CTO, FinTech Innovations Ltd.',
        initials: 'AK',
        rating: 5,
    },
    {
        quote:
            'The roadmap Alboré designed reduced our operational costs by 28% in under a year — transformative outcomes, not just advice.',
        name: 'Sarah Reynolds',
        role: 'VP Operations, MediCore',
        initials: 'SR',
        rating: 5,
    },
    {
        quote:
            "From scoping to deployment, Alboré's team delivered technical mastery and strategic clarity that set them apart from every vendor evaluated.",
        name: 'Omar Malik',
        role: 'Director of Finance, GovCloud PK',
        initials: 'OM',
        rating: 5,
    },
    {
        quote:
            'Their 3-tier quality review means our financials are always accurate and delivered on time, every single cycle.',
        name: 'Sarah J.',
        role: 'Chief Financial Officer',
        initials: 'SJ',
        rating: 5,
    },
    {
        quote:
            'Big Four-trained professionals handling our multi-jurisdiction tax structuring gave us absolute confidence in our growth strategy.',
        name: 'Michael T.',
        role: 'Managing Director',
        initials: 'MT',
        rating: 5,
    },
    {
        quote:
            'Knowing our data is secured under ISO 27001 through an encrypted portal gives our board immense peace of mind.',
        name: 'David R.',
        role: 'Finance Director',
        initials: 'DR',
        rating: 4,
    },
];

// ------------------------------------------------------------------------------
// 3. FOUNDER DESK
// ------------------------------------------------------------------------------
export interface FounderDeskData {
    sectionHeading: string;
    imageSrc: string;
    imageAlt: string;
    avatarInitials: string;
    name: string;
    role: string;
    quoteHeading: string;
    quoteBody: string;
}

export const founderDeskData: FounderDeskData = {
    sectionHeading: 'From The Founder Desk',
    imageSrc: '/images/testimonials/founder.png',
    imageAlt: 'Ahmed Khan, Chief Financial Officer',
    avatarInitials: 'SJ',
    name: 'Ahmed Khan',
    role: 'Chief Financial Officer',
    quoteHeading: 'A Firm Built to Be Trusted With What Matters Most',
    quoteBody:
        "We don't just manage numbers. We protect your future. Alboré partners with businesses who expect more than accuracy — they expect a firm that understands what's at stake. For over a decade, Alboré has been the quiet strength behind ambitious businesses. We bring institutional-grade expertise to every relationship, without losing the personal touch.",
};

// ------------------------------------------------------------------------------
// 4. UNWAVERING PROMISE
// ------------------------------------------------------------------------------
export interface PromiseSectionData {
    heading: string;
    subheading: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}

export const promiseSectionData: PromiseSectionData = {
    heading: 'Our Unwavering Promise to You',
    subheading: 'Build lasting partnerships with complete transparency.',
    description:
        'Every client partnership is a long-term commitment. We build it on rigorous standards, transparent practices, and a culture of mutual respect. Our results speak for themselves.',
    imageSrc: '/images/testimonials/handshake.png',
    imageAlt: 'Business handshake',
};

export const promises: string[] = [
    'Ensure data security with advanced protection protocols.',
    'Guarantee honest, data-driven advice at every step.',
    'Focus exclusively on delivering measurable client results.',
    'Maintain confidentiality as a sacred obligation.',
];

// ------------------------------------------------------------------------------
// 5. CTA
// ------------------------------------------------------------------------------
export interface TestimonialsCtaData {
    heading: string;
    description: string;
    primaryAction: { label: string; href: string };
    secondaryAction: { label: string; href: string };
}

export const testimonialsCtaData: TestimonialsCtaData = {
    heading: 'Ready to Talk?',
    description:
        'Get direct access to a senior partner someone who understands your business and can give you real, informed answers right away.',
    primaryAction: { label: 'Talk to Partner', href: '/contact' },
    secondaryAction: { label: 'Alboré Vault', href: '/vault' },
};

