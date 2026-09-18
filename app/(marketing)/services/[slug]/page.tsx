import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import SectionDivider from "@/components/ui/SectionDivider";
import CtaBanner from "@/components/ui/CtaBanner";
import {
  ServiceHero,
  ComprehensiveSolutions,
  ServiceWorkflow,
  ServiceCapabilities,
  ServiceWhatWeDo,
} from "@/components/services";

function getServiceBySlug(slug: string) {
  const normalized = slug.toLowerCase().trim();
  return (
    services.find((s) => s.slug === normalized) ||
    services.find(
      (s) =>
        s.slug === normalized.replace("bookkeeping", "book-keeping") ||
        (normalized === "bookkeeping" && s.slug === "book-keeping") ||
        (normalized === "audit-assurance" && s.slug === "assurance-audits") ||
        (normalized === "tax-service" && s.slug === "tax-services")
    )
  );
}

export const dynamicParams = false;

export function generateStaticParams() {
  const primarySlugs = services.map((service) => ({ slug: service.slug }));
  const aliasSlugs = [
    { slug: "bookkeeping" },
    { slug: "audit-assurance" },
    { slug: "tax-service" },
  ];
  return [...primarySlugs, ...aliasSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const title = `${service.title} | Albore Chartered Accountants`;
  const description = service.summary || service.heroDescription;
  const canonicalUrl = `/services/${service.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      images: service.heroImage
        ? [
            {
              url: service.heroImage,
              width: 1200,
              height: 630,
              alt: service.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: service.heroImage ? [service.heroImage] : undefined,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.alboreaccountants.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.alboreaccountants.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://www.alboreaccountants.com/services/${service.slug}`,
      },
    ],
  };

  return (
    <div className="w-full flex flex-col items-center font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {/* 1. Hero Section (Full Width on Both Sides) */}
      <ServiceHero service={service} />

      {/* Geometric Ornament Divider */}
      <SectionDivider variant="services" className="py-4 sm:py-6" />

      {/* 2. Comprehensive 6-Card Solutions Grid (Full Width on Both Sides) */}
      {service.solutions && service.solutions.length > 0 && (
        <ComprehensiveSolutions
          heading={service.solutionsHeading}
          subtitle={service.solutionsSubtitle}
          solutions={service.solutions}
        />
      )}

      {/* 3. 5-Step Workflow Stepper (Full Width on Both Sides) */}
      {service.workflowSteps && service.workflowSteps.length > 0 && (
        <ServiceWorkflow
          heading={service.workflowHeading || `${service.title} Work-Flow`}
          steps={service.workflowSteps}
        />
      )}

      {/* 4. Capabilities, What We Do, and Dividers (Constrained Container) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col gap-8 sm:gap-12">
        <ServiceCapabilities
          cardTitle={service.capabilitiesCardTitle}
          cardDescription={service.capabilitiesCardDescription}
          heading={service.capabilitiesHeading}
          capabilities={service.capabilities}
          bottomText={service.capabilitiesBottomText}
          image={service.capabilitiesImage}
        />

        <SectionDivider variant="services" className="py-2" />

        {/* 5. What We Do (Staggered Connected Timeline) */}
        {service.whatWeDo && service.whatWeDo.length > 0 && (
          <ServiceWhatWeDo
            heading={service.whatWeDoHeading}
            subtitle={service.whatWeDoSubtitle}
            intro={service.whatWeDoIntro}
            items={service.whatWeDo}
          />
        )}

        <SectionDivider variant="services" className="py-2" />
      </div>

      {/* 6. Ready to Talk Gold CTA Banner (Full Width on Both Sides) */}
      <CtaBanner />
    </div>
  );
}

