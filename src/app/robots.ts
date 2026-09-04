import type { MetadataRoute } from "next";
import { siteOrigin } from "../lib/seo";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: siteOrigin ? "/" : undefined,
      disallow: siteOrigin ? ["/preview/"] : "/",
    },
    ...(siteOrigin ? { sitemap: `${siteOrigin}/sitemap.xml` } : {}),
  };
}
