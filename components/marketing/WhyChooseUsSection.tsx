import { Award, Timer, FileText, Globe, ShieldCheck, Users } from 'lucide-react';


export interface WhyChooseUsSectionProps {
  className?: string;
}

interface Feature {
  icon: typeof Award;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: Award,
    title: 'Internationally Experienced',
    description:
      'Our experienced team provides trusted accounting support for businesses operating locally and internationally.',
  },
  {
    icon: Timer,
    title: 'Responsive Support',
    description:
      'Receive timely, reliable guidance from a dedicated team that understands your business needs.',
  },
  {
    icon: FileText,
    title: 'Digital & Paperless',
    description:
      'Access your accounting records and important financial documents securely, anytime and from anywhere.',
  },
  {
    icon: Globe,
    title: 'Growth-Oriented',
    description:
      'We provide practical financial insights that help you make confident decisions and grow.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Compliance',
    description:
      'Keep your accounts accurate and meet essential tax, accounting, and reporting requirements with confidence.',
  },
  {
    icon: Users,
    title: 'Secure & Confidential',
    description:
      'Your information is handled securely, professionally, and with the highest level of confidentiality.',
  },
];

export default function WhyChooseUsSection({ className = '' }: WhyChooseUsSectionProps) {
  return (
    <section
      className={`bg-surface px-6 py-14 sm:px-10 sm:py-16 ${className}`}
      aria-labelledby="why-choose-heading"
    >


      <div className="mx-auto max-w-3xl text-center">
        {/* h2 already inherits font-heading + text-text-heading from the base layer */}
        <h2 id="why-choose-heading" className="text-3xl font-bold sm:text-4xl">
          Why Enterprises Choose Albor&eacute;
        </h2>
        <p className="mt-3 text-text-body">
          Building partnerships through precision, discretion, and results that truly matter.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col items-start">
            <Icon className="h-9 w-9 text-accent" strokeWidth={1.25} aria-hidden="true" />
            {/* h3 already inherits font-heading + text-text-heading from the base layer */}
            <h3 className="mt-4 text-base font-bold">{title}</h3>
            <p className="mt-2 text-sm text-text-body">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
