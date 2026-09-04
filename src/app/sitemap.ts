import type { MetadataRoute } from "next";
import { siteOrigin } from "../lib/seo";
import { publishedArticles } from "../content/posts";
export const primaryRoutes = [
  "/",
  "/about",
  "/services",
  "/services/irrigation-systems",
  "/services/drainage-solutions",
  "/services/smart-upgrades",
  "/faq",
  "/blog",
  "/contact",
  "/estimate",
];
export default function sitemap(): MetadataRoute.Sitemap {
  return siteOrigin
    ? [
        ...primaryRoutes.map((path) => ({ url: `${siteOrigin}${path}` })),
        ...publishedArticles().map((p) => ({
          url: `${siteOrigin}/blog/${p.slug}`,
          lastModified: p.updatedAt || p.publishedAt,
        })),
      ]
    : [];
}
