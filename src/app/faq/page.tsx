import { Hero } from "../../components/webflow/Hero";
import { Breadcrumbs } from "../../components/webflow/Breadcrumbs";
import { FAQAccordion } from "../../components/webflow/FAQAccordion";
import { CTASection } from "../../components/webflow/CTASection";
import { FaqItems } from "../../components/preview/blocks";
import { faqs, faqCategories, categoryId } from "../../content/faqs";
import { pageMetadata, JsonLd, faqSchema } from "../../lib/seo";
export const metadata = pageMetadata(
  "Wichita Irrigation & Drainage FAQs",
  "Clear answers about sprinkler repairs, installation, drainage, maintenance plans, smart controllers, backflow testing and winterization in Wichita.",
  "/faq",
);
export default function Page() {
  return (
    <>
      <Breadcrumbs currentLabel="Frequently asked questions" />
      <Hero
        variant="compact"
        eyebrow="The irrigation knowledge guide"
        heading="A little clarity goes a long way."
        accent=""
        body="Straight answers to common questions about your sprinkler system, drainage and seasonal care. Start with the topic that is on your mind."
        ctaLabel="Ask us a question"
        ctaLink={{ href: "/contact" }}
      />
      <nav className="tc tc-faq-category-nav" aria-label="FAQ categories">
        <div className="tc-container">
          {faqCategories.map((c) => (
            <a key={c} href={`#${categoryId(c)}`}>
              {c}
              <span aria-hidden="true">↓</span>
            </a>
          ))}
        </div>
      </nav>
      {faqCategories.map((category, i) => (
        <div id={categoryId(category)} key={category}>
          <FAQAccordion
            heading={category}
            eyebrow={`${String(i + 1).padStart(2, "0")} / Your questions`}
            ctaLabel=""
            ctaLink={undefined}
          >
            <FaqItems items={faqs.filter((f) => f.category === category)} />
          </FAQAccordion>
        </div>
      ))}
      <CTASection
        heading="Still have a question?"
        ctaLabel="Contact TenderCare"
        ctaLink={{ href: "/contact" }}
        secondaryLabel="Request an estimate"
        secondaryLink={{ href: "/estimate" }}
      />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
