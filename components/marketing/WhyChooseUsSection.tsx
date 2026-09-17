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
      className={`w-full bg-surface px-6 sm:px-10 lg:px-14 xl:px-16 py-10 sm:py-12 lg:py-14 ${className}`}
      aria-labelledby="why-choose-heading"
    >
      <div className="w-full max-w-9xl mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="why-choose-heading" className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-text-heading tracking-tight leading-tight">
            Why Enterprises Choose Albor&eacute;
          </h2>
          <p className="mt-4 font-body text-base sm:text-lg md:text-xl text-text-body leading-relaxed max-w-3xl mx-auto">
            Building partnerships through precision, discretion, and results that truly matter.
          </p>
        </div>

        <div className="mt-14 sm:mt-18 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-14 sm:gap-y-14 lg:gap-x-16 lg:gap-y-16">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-start">
              <Icon className="h-12 w-12 sm:h-14 sm:w-14 text-accent" strokeWidth={1.25} aria-hidden="true" />
              <h3 className="mt-5 font-heading text-lg sm:text-xl md:text-2xl font-bold text-text-heading">{title}</h3>
              <p className="mt-3 font-body text-sm sm:text-base leading-relaxed text-text-body">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
