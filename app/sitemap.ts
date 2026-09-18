import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { industryItems } from "@/data/Industries/industries";
import { industriesData } from "@/data/contact";
import {
  industryDetailsMap,
  slugAliases,
} from "@/data/Industries/industryDetails";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.alboreaccountants.com";
  const currentDate = new Date();

  // 1. Static Core Marketing Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/client-testimonials`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // 2. Dynamic Service Pages
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // 3. Dynamic Industry Pages
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

  const uniqueIndustrySlugs = Array.from(
    new Set([...mapSlugs, ...aliasSlugs, ...dataSlugs, ...contactSlugs])
  );

  const industryRoutes: MetadataRoute.Sitemap = uniqueIndustrySlugs.map(
    (slug) => ({
      url: `${baseUrl}/industries/${slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes];
}

