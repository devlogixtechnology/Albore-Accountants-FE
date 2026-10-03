/**
 * Services overview page content — matches the approved Figma
 * (Services_page.png). Card slugs map to the standalone pages in
 * data/services (served at /services/[slug]).
 */

export const serviceCards = [
  {
    title: "Book Keeping",
    slug: "book-keeping",
    text: "Clean, current books maintained all year, not just before filing season, so you always know where the business stands.",
    bullets: [
      "Daily transaction recording",
      "Bank and account reconciliation",
      "Monthly financial statement preparation",
    ],
  },
  {
    title: "Audits & Assurance",
    slug: "assurance-audits",
    text: "Independent, thorough reviews that hold up under scrutiny and give stakeholders confidence in your numbers.",
    bullets: [
      "Statutory and external audits",
      "Internal controls testing",
      "Compliance & Regulatory reporting",
      "Statutory audit delivered to international standards.",
    ],
  },
  {
    title: "Financial Advisory",
    slug: "financial-advisory",
    text: "Strategic guidance that turns your financial data into decisions, from budgeting to long-term planning.",
    bullets: [
      "Financial forecasting and modelling",
      "Budget planning and variance analysis",
      "Business advisory and growth strategy",
    ],
  },
  {
    title: "Tax Services",
    slug: "tax-services",
    text: "Proactive tax planning that reduces surprises, paired with accurate, on-time filing across every obligation.",
    bullets: [
      "Corporate and individual tax filing",
      "Year-round tax planning and advisory",
      "Regulatory and deadline tracking",
    ],
  },
] as const;

export const features = [
  "Comprehensive Bookkeeping & Financial Reporting",
  "Audit Preparation & Compliance Assurance",
  "Fractional CFO & Treasury Advisory",
  "Cross-Border Financial Structuring",
] as const;

/**
 * `center` is the vertical centre of the numbered circle inside the timeline
 * (px, measured from the design at 1440 wide). Text/image offsets are relative to it.
 */
export const steps = [
  {
    title: "Discovery",
    subtitle: "Understand Your Needs and Goals",
    text: "We take the time to understand your business, financial position, and long-term goals. By listening closely to your needs, we build a clear foundation for the right financial approach.",
    image: "/images/ServicesPage/Service_Discovery.png",
    center: 41,
  },
  {
    title: "Analysis",
    subtitle: "Identify Opportunities and Risks",
    text: "We carefully analyze your financial situation, existing processes, and potential risks. This helps us uncover opportunities and areas where smarter financial decisions can make a meaningful difference.",
    image: "/images/ServicesPage/Service_Analysis.png",
    center: 304,
  },
  {
    title: "Strategy",
    subtitle: "Follow the Best path",
    text: "Based on our findings, we develop a tailored tax and financial strategy for your business. Our approach focuses on reducing risk, improving efficiency, and creating sustainable opportunities for growth.",
    image: "/images/ServicesPage/Service_Strategy.png",
    center: 570,
  },
  {
    title: "Implementation",
    subtitle: "Execute and Stay With You",
    text: "We turn the strategy into practical action and guide you through every step of implementation. Our support continues as your business evolves, ensuring your financial strategy stays effective and aligned with your goals.",
    image: "/images/ServicesPage/Service_Implementation.png",
    center: 832,
  },
] as const;
