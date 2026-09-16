import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import SectionDivider from "@/components/ui/SectionDivider";
import {
  ServiceHero,
  ComprehensiveSolutions,
  ServiceWorkflow,
  ServiceCapabilities,
  ServiceWhatWeDo,
  ServiceCtaBanner,
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
  return service
    ? {
        title: `${service.title} | Albore Chartered Accountants`,
        description: service.summary || service.heroDescription,
      }
    : {};
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <div className="w-full flex flex-col items-center font-body">
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
      <ServiceCtaBanner />
    </div>
  );
}

