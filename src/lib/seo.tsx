import type { Metadata } from "next";
import { business } from "../content/business";
import type { FAQ } from "../content/faqs";
export function normalizeOrigin(value?: string) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      url.pathname === "/" &&
      !url.search &&
      !url.hash
      ? url.origin
      : undefined;
  } catch {
    return undefined;
  }
}
export const siteOrigin = normalizeOrigin(process.env.NEXT_PUBLIC_SITE_URL);
export function absoluteImageUrl(src?: string, origin = siteOrigin) {
  if (!src || !origin) return undefined;
  try {
    const url = new URL(src, origin);
    return ["https:", "http:"].includes(url.protocol) ? url.href : undefined;
  } catch {
    return undefined;
  }
}
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = "/media/sprinkler-1600.webp",
): Metadata {
  const url = siteOrigin ? `${siteOrigin}${path}` : undefined;
  const imageUrl = absoluteImageUrl(image);
  return {
    title: `${title} | TenderCare Irrigation`,
    description,
    alternates: url ? { canonical: url } : undefined,
    robots: { index: Boolean(siteOrigin), follow: Boolean(siteOrigin) },
    openGraph: {
      title,
      description,
      type: "website",
      siteName: business.name,
      locale: "en_US",
      url,
      images: imageUrl
        ? [{ url: imageUrl, alt: "TenderCare irrigation field photography" }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}
export function businessSchema(origin = siteOrigin) {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    name: business.name,
    foundingDate: String(business.foundingYear),
    ...(origin ? { "@id": `${origin}/#business`, url: origin } : {}),
    ...(business.phone ? { telephone: business.phone } : {}),
    ...(business.email ? { email: business.email } : {}),
    ...(business.address ? { address: business.address } : {}),
    ...(business.socialProfiles.length
      ? { sameAs: business.socialProfiles }
      : {}),
    areaServed: business.serviceArea.map((name) => ({
      "@type": "City",
      name: `${name}, Kansas`,
    })),
  };
}
export function faqSchema(items: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: business.name,
      ...(siteOrigin ? { "@id": `${siteOrigin}/#business` } : {}),
    },
    areaServed: business.serviceArea.map((name) => ({
      "@type": "City",
      name: `${name}, Kansas`,
    })),
    ...(siteOrigin ? { url: `${siteOrigin}${path}` } : {}),
  };
}
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return siteOrigin
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${siteOrigin}${item.path}`,
        })),
      }
    : null;
}
export function JsonLd({ data }: { data: unknown }) {
  return data ? (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  ) : null;
}
