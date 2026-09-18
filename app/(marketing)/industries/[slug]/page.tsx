import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industryItems } from "@/data/Industries/industries";
import { industriesData } from "@/data/contactData";
import {
  getIndustryDetails,
  industryDetailsMap,
  slugAliases,
} from "@/data/Industries/industryDetails";
import CtaBanner from "@/components/ui/CtaBanner";
import {
  IndustryHero,
  IndustryFocus,
  IndustrySolutions,
  IndustryWhyPartner,
} from "@/components/industryStandalone";

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const mapSlugs = Object.keys(industryDetailsMap);
  const aliasSlugs = Object.keys(slugAliases);
  const dataSlugs = industryItems.map((item) =>
    item.readMoreHref.replace(/^\/industries\//, "").replace(/^\/+|\/+$/g, "")
  );
  const contactSlugs = industriesData
    .map((item) =>
      (item.link || item.href || "")
        .replace(/^\/industries\//, "")
        .replace(/^\/+|\/+$/g, "")
    )
    .filter(Boolean);

  const uniqueSlugs = Array.from(
    new Set([...mapSlugs, ...aliasSlugs, ...dataSlugs, ...contactSlugs])
  );

  return uniqueSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryDetails(slug);

  if (!industry) return {};

  const title =
    industry.metaTitle || `${industry.title} | Albore Chartered Accountants`;
  const description = industry.metaDescription || industry.heroDescription;
  const canonicalUrl = `/industries/${industry.slug}`;

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
      images: industry.heroImage
        ? [
            {
              url: industry.heroImage,
              width: 1200,
              height: 630,
              alt: industry.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: industry.heroImage ? [industry.heroImage] : undefined,
    },
  };
}

export default async function IndustryStandalonePage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryDetails(slug);

  if (!industry) {
    notFound();
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
        name: "Industries",
        item: "https://www.alboreaccountants.com/industries",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: industry.title,
        item: `https://www.alboreaccountants.com/industries/${industry.slug}`,
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
      {/* 1. Hero Section */}
      <IndustryHero data={industry} />

      {/* 2. Industry Focus 4-Card Grid */}
      <IndustryFocus
        heading={industry.focusHeading}
        items={industry.focusItems}
      />

      {/* 3. Solutions Horizontal Track */}
      <IndustrySolutions
        heading={industry.solutionsHeading}
        solutions={industry.solutions}
      />

      {/* 4. Why Partner With Us 2x2 Grid */}
      <IndustryWhyPartner
        heading={industry.whyPartnerHeading}
        subtitle={industry.whyPartnerSubtitle}
        pillars={industry.partnerPillars}
      />

      {/* 5. Ready to Talk Banner */}
      <CtaBanner />
    </div>
  );
}
