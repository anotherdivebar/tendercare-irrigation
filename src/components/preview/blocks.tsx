import { FAQAccordion } from "../webflow/FAQAccordion";
import { FAQItem } from "../webflow/FAQItem";
import { PricingPackages } from "../webflow/PricingPackages";
import { PackageCard } from "../webflow/PackageCard";
import { ProjectGallery } from "../webflow/ProjectGallery";
import { ProjectImage } from "../webflow/ProjectImage";
import { faqs, type FAQ } from "../../content/faqs";
import { images } from "../../content/assets";
import { JsonLd, faqSchema } from "../../lib/seo";
import { estimateLink } from "../../lib/estimate-context";
export function FaqItems({ items }: { items: FAQ[] }) {
  return items.map((f) => (
    <FAQItem
      key={f.id}
      question={f.question}
      answer={f.answer}
      linkLabel={f.linkLabel}
      link={f.link ? { href: f.link } : undefined}
      sourceLabel={f.sourceLabel}
      sourceLink={f.source ? { href: f.source } : undefined}
    />
  ));
}
export function FaqPreview({
  ids = ["repair-signs", "standing-water", "winterize-time", "estimate"],
}: {
  ids?: string[];
}) {
  const items = faqs.filter((f) => ids.includes(f.id));
  return (
    <>
      <FAQAccordion>
        <FaqItems items={items} />
      </FAQAccordion>
      <JsonLd data={faqSchema(items)} />
    </>
  );
}
export function Packages() {
  const cards = (city: boolean) => (
    <>
      <PackageCard
        name="Gold package"
        ctaLink={estimateLink(
          "maintenance-plans",
          "gold",
          city ? "city" : "well",
        )}
        featured
        description={
          city
            ? "Seasonal care for city-water systems."
            : "Seasonal care for well-water systems."
        }
        features={`Spring startup\n${city ? "Backflow certification\n" : ""}Two mid-season evaluations\nWinterization`}
      />
      <PackageCard
        name="Silver package"
        ctaLink={estimateLink(
          "maintenance-plans",
          "silver",
          city ? "city" : "well",
        )}
        description={
          city
            ? "The essentials for city-water systems."
            : "The essentials for well-water systems."
        }
        features={`Spring startup\n${city ? "Backflow certification\n" : ""}One mid-season evaluation\nWinterization`}
      />
    </>
  );
  return (
    <PricingPackages
      cityWater={cards(true)}
      wellWater={cards(false)}
      note="Discuss current inclusions, pricing and availability with TenderCare. Systems above 12 zones, additional backflow devices or multiple controllers may require a different scope."
    />
  );
}
export function FieldGallery() {
  return (
    <ProjectGallery body="Irrigation installation, pipe work and operating systems photographed on TenderCare job sites.">
      <ProjectImage
        image={images.field}
        caption="Coverage along a residential walk"
        category="Irrigation in operation"
      />
      <ProjectImage
        image={images.install}
        caption="Irrigation line on site"
        category="Irrigation installation"
      />
      <ProjectImage
        image={images.detail}
        caption="Exposed pipe during system work"
        category="System work"
      />
    </ProjectGallery>
  );
}
