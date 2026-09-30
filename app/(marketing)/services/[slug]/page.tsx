import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { services } from "@/data/services";
import CtaBanner from "@/components/ui/CtaBanner";
import {
  ServiceHero,
  ComprehensiveSolutions,
  ServiceWorkflow,
  ServiceWhatWeDo,
} from "@/components/services";
import { MotionReveal } from "@/components/ui/motion";

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
      type: "website",
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

  // Redirect alias slugs to canonical slug
  if (slug !== service.slug) {
    redirect(`/services/${service.slug}`);
  }

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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary || service.heroDescription,
    provider: {
      "@type": "AccountingService",
      name: "Albore Chartered Accountants",
      url: "https://www.alboreaccountants.com",
    },
    url: `https://www.alboreaccountants.com/services/${service.slug}`,
    ...(service.heroImage ? { image: service.heroImage } : {}),
  };

  return (
    <div className="w-full flex flex-col items-center font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      {/* 1. Hero Section (Full Width on Both Sides) */}
      <MotionReveal className="w-full">
        <ServiceHero service={service} />
      </MotionReveal>

      {/* 2. Comprehensive 6-Card Solutions Grid (Full Width on Both Sides) */}
      {service.solutions && service.solutions.length > 0 && (
        <MotionReveal className="w-full">
          <ComprehensiveSolutions
            heading={service.solutionsHeading}
            subtitle={service.solutionsSubtitle}
            solutions={service.solutions}
          />
        </MotionReveal>
      )}

      {/* 3. 5-Step Workflow Stepper (Full Width on Both Sides) */}
      {service.workflowSteps && service.workflowSteps.length > 0 && (
        <ServiceWorkflow
          heading={service.workflowHeading || `${service.title} Work-Flow`}
          steps={service.workflowSteps}
        />
      )}

      {/* 4. What We Do (2-Column Cards matching Figma) */}
      {service.whatWeDo && service.whatWeDo.length > 0 && (
        <ServiceWhatWeDo
          heading={service.whatWeDoHeading}
          subtitle={service.whatWeDoSubtitle}
          intro={service.whatWeDoIntro}
          items={service.whatWeDo}
        />
      )}

      {/* 5. Ready to Talk Gold CTA Banner (Full Width on Both Sides) */}
      <CtaBanner />
    </div>
  );
}

