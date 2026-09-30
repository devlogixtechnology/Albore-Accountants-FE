export interface Pillar {
  number: string;
  title: string;
  description: string;
  iconSrc: string;
}

export const defaultPillars: Pillar[] = [
  {
    number: "01",
    title: "Institutional Expertise",
    description:
      "Deep financial expertise and refined knowledge to handle complex business and financial needs with precision.",
    iconSrc: "/Icons/flowbite_scale-balanced-solid.svg",
  },
  {
    number: "02",
    title: "Strategic Guidance",
    description:
      "Clear, practical financial guidance that helps you navigate complexity and make confident business decisions.",
    iconSrc: "/Icons/fluent_compass-true-north-24-regular.svg",
  },
  {
    number: "03",
    title: "Trusted Partnership",
    description:
      "A long-term relationship built on trust, transparency, and a clear understanding of your business goals.",
    iconSrc: "/Icons/material-symbols_partner-exchange-outline-rounded.svg",
  },
  {
    number: "04",
    title: "Refined Execution",
    description:
      "Accurate, dependable execution across your financial needs, with attention to detail at every step.",
    iconSrc: "/Icons/carbon_radar-enhanced.svg",
  },
];

export const whoWeServeSectionData = {
  heading: "Who We Serve",
  description:
    "No two clients are the same — and neither are our solutions. Whether you're scaling fast or managing complexity across borders, we tailor our approach to exactly where your business stands today.",
  cta: {
    label: "Talk to Partner",
    href: "/contact",
  },
  pillars: defaultPillars,
};

export default whoWeServeSectionData;
