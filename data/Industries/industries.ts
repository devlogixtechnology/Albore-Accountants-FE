// ------------------------------------------------------------------------------
// 1. HERO SECTION
// ------------------------------------------------------------------------------
export interface IndustriesHeroData {
    heading: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    cta: { label: string; href: string };
}

export const industriesHeroData: IndustriesHeroData = {
    heading: 'Industries',
    description:
        'At Albore, we simplify complex regulations with expert accounting advice to help your business grow. Explore our tailored industry solutions.',
    imageSrc: '/images/Industriespage/industry-hero.png',
    imageAlt: '',
    cta: { label: 'Talk to Partner', href: '/contact' },
};

// ------------------------------------------------------------------------------
// 2. INDUSTRIES LIST
// ------------------------------------------------------------------------------
export interface IndustriesSectionData {
    heading: string;
    description: string;
}

export const industriesSectionData: IndustriesSectionData = {
    heading: 'Explore the Industries we serve',
    description:
        'To provide the most impactful financial and strategic services to our clients, we divide our deep subject matter expertise into six key industries and tailored sub-sectors.',
};

export interface IndustryItem {
    number: string;
    title: string;
    description: string;
    readMoreHref: string;
}

export const industryItems: IndustryItem[] = [
    {
        number: '1',
        title: 'Retail and Trade',
        description:
            'Discover our specialized knowledge across automotive, consumer products, retail, transportation, and hospitality sectors to help you navigate changing consumer landscapes, inventory valuation, and point-of-sale integrations.',
        readMoreHref: '/industries/retail-and-trade',
    },
    {
        number: '2',
        title: 'Manufacturing',
        description:
            'Guiding manufacturing plants and real estate developers through complex cost allocation, capital asset depreciation, supply chain accounting, and project yield optimization, while improving efficiency, control, and long-term business performance.',
        readMoreHref: '/industries/manufacturing',
    },
    {
        number: '3',
        title: 'Real Estate',
        description:
            'Providing specialized project accounting, capital asset depreciation, lease management, and tax restructuring to optimize yield across property portfolios and large-scale developments, while strengthening financial performance.',
        readMoreHref: '/industries/real-estate',
    },
    {
        number: '4',
        title: 'Financial Services',
        description:
            'Connecting insight and experience to build stronger, more resilient financial operations across banking, insurance, investment management, and private equity, while strengthening controls, improving performance, and supporting sustainable growth.',
        readMoreHref: '/industries/financial-services',
    },
    {
        number: '5',
        title: 'Energy & Resources',
        description:
            'Partnering with companies across chemicals, utilities, renewables, and mining to illuminate opportunities, manage environmental compliance costs, and streamline operations, while improving visibility, strengthening compliance, and supporting growth.',
        readMoreHref: '/industries/energy-and-resources',
    },
];

// ------------------------------------------------------------------------------
// 3. STRATEGIC FRAMEWORK
// ------------------------------------------------------------------------------
export interface StrategicFrameworkData {
    badge: string;
    heading: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    focusAreasHeading: string;
    focusAreas: string[];
    summary: string;
    cta: { label: string; href: string };
}

export const strategicFrameworkData: StrategicFrameworkData = {
    badge: 'Our Strategic Framework',
    heading: 'Flexible Banking and Payment Solutions',
    description:
        'Our end-to-end advisory framework helps mid-market businesses and growing enterprises navigate complex regulatory shifts, modernize accounting workflows, and position themselves for long-term capital growth.',
    imageSrc: '/images/Industriespage/strategic-framework.png',
    imageAlt: '',
    focusAreasHeading: 'Key framework focus areas include:',
    focusAreas: [
        'Strategic regulatory compliance & risk navigation',
        'End-to-end accounting workflow modernization',
        'Capital growth & financial position optimization',
        'Mid-market advisory and enterprise scaling',
        'Long-term financial resilience planning',
    ],
    summary:
        'We evaluate your current financial infrastructure and pinpoint operational bottlenecks. Then we tailor a growth advisory strategy to strengthen your accounting systems and position your business for sustainable capital growth.',
    cta: { label: 'Explore Our Growth Framework', href: '/contact' },
};

// ------------------------------------------------------------------------------
// 4. HOW ELSE WE DRIVE GROWTH
// ------------------------------------------------------------------------------
export interface GrowthLink {
    label: string;
    href: string;
}

export interface GrowthLinksSectionData {
    heading: string;
    links: GrowthLink[];
}

export const growthLinksSectionData: GrowthLinksSectionData = {
    heading: 'How else we drive growth',
    links: [
        { label: 'Specialized Services', href: '/services' },
        { label: 'Strategic Alliances', href: '/alliances' },
    ],
};