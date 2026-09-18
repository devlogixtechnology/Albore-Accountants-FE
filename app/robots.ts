import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.alboreaccountants.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/portal/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

