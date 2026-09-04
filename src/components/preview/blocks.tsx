import { FAQAccordion } from "../webflow/FAQAccordion";
import { FAQItem } from "../webflow/FAQItem";
import { ProjectGallery } from "../webflow/ProjectGallery";
import { ProjectImage } from "../webflow/ProjectImage";
import { faqs, type FAQ } from "../../content/faqs";
import { images } from "../../content/assets";
import { JsonLd, faqSchema } from "../../lib/seo";
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
