import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { JsonLd, businessSchema, siteOrigin } from "../lib/seo";
import { Header } from "../components/webflow/Header";
import { Footer } from "../components/webflow/Footer";
import { NavLink } from "../components/webflow/NavLink";
import { business, navigation } from "../content/business";
export const metadata: Metadata = {
  title: "TenderCare Irrigation | Wichita, KS",
  description:
    "Irrigation, drainage and seasonal sprinkler care for Wichita and the surrounding metro.",
  robots: { index: false, follow: false },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16382d",
};
const logo = {
  src: "/media/tendercare-logo.webp",
  alt: "TenderCare Irrigation",
};
export default function Layout({ children }: { children: ReactNode }) {
  const headerLinks = navigation
    .filter((item) => item.href !== "/services")
    .map((n) => (
      <NavLink key={n.href} label={n.label} link={{ href: n.href }} />
    ));
  const footerLinks = navigation.map((n) => (
    <NavLink key={n.href} label={n.label} link={{ href: n.href }} />
  ));
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/manrope-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/dm-sans-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <JsonLd data={businessSchema()} />
        <JsonLd
          data={
            siteOrigin
              ? {
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  name: business.name,
                  url: siteOrigin,
                }
              : null
          }
        />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header
          logo={logo}
          phone={business.phone ?? undefined}
          links={headerLinks}
        />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer
          logo={logo}
          phone={business.phone ?? undefined}
          email={business.email ?? undefined}
          links={footerLinks}
          serviceLinks={
            <>
              <a href="/services/irrigation-systems">Irrigation systems</a>
              <a href="/services/drainage-solutions">Drainage solutions</a>
              <a href="/services/smart-upgrades">Smart & seasonal services</a>
            </>
          }
        />
      </body>
    </html>
  );
}
