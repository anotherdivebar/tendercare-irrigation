import type { Metadata } from "next";
import { Hero } from "../../../components/webflow/Hero";
import { ContentSection } from "../../../components/webflow/ContentSection";
import { ServiceFeatureSection } from "../../../components/webflow/ServiceFeatureSection";
import { FAQItem } from "../../../components/webflow/FAQItem";
import { ServiceCard } from "../../../components/webflow/ServiceCard";
import { faqs } from "../../../content/faqs";
export const metadata: Metadata = {
  title: "Component checks | TenderCare",
  robots: { index: false, follow: false },
};
export default function ComponentChecks() {
  return (
    <>
      <Hero
        eyebrow="Private design preview"
        heading="Component composition checks"
        accent=""
        body="An isolated check of optional imagery, nested components and theme inheritance. This page is excluded from search."
        ctaLabel="Back to home"
        ctaLink={{ href: "/" }}
      />
      <ContentSection
        theme="dark"
        heading="Dark theme with nested content"
        body="Text, borders and links inherit the surrounding section’s palette."
      >
        <FAQItem question={faqs[0].question} answer={faqs[0].answer} />
        <ServiceCard
          heading="Irrigation systems"
          body="Sprinkler installation, repair and maintenance."
          linkLabel="Explore irrigation"
          link={{ href: "/services/irrigation-systems" }}
        />
      </ContentSection>
      <ServiceFeatureSection
        heading="A section without an image"
        body="Optional photography can be removed without leaving an empty frame or a vacant column."
        ctaLabel="Back to services"
        ctaLink={{ href: "/services" }}
      />
    </>
  );
}
