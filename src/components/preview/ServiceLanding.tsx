import type { ServiceCategory } from "../../content/services";
import { faqs } from "../../content/faqs";
import { Hero } from "../webflow/Hero";
import { Breadcrumbs } from "../webflow/Breadcrumbs";
import { ServiceDetailBlock } from "../webflow/ServiceDetailBlock";
import { ContentSection } from "../webflow/ContentSection";
import { CTASection } from "../webflow/CTASection";
import { SectionNav } from "../webflow/SectionNav";
import { NavLink } from "../webflow/NavLink";
import { estimateLink } from "../../lib/estimate-context";
import { FaqPreview, Packages } from "./blocks";
import { JsonLd, serviceSchema, breadcrumbSchema } from "../../lib/seo";
export function ServiceLanding({ category }: { category: ServiceCategory }) {
  const path = `/services/${category.slug}`;
  const questions = faqs
    .filter((f) => f.link?.startsWith(path))
    .map((f) => f.id)
    .slice(0, 4);
  return (
    <>
      <Breadcrumbs
        parentLabel="Services"
        parentLink={{ href: "/services" }}
        currentLabel={category.name}
      />
      <Hero
        variant="compact"
        eyebrow={`${category.name} / Wichita metro`}
        heading={category.headline}
        accent=""
        body={category.intro}
        image={category.image}
        secondaryLabel="Ask a question"
        secondaryLink={{ href: "/contact" }}
      />
      <div className="tc-section-nav-host">
        <SectionNav
          label="Explore services"
          ctaLabel="Get free estimate"
          ctaLink={{ href: "/estimate" }}
        >
          {category.details.map((d) => (
            <NavLink key={d.id} label={d.name} link={{ href: `#${d.id}` }} />
          ))}
        </SectionNav>
      </div>
      {category.details.map((detail, index) => (
        <div key={detail.id} id={detail.id}>
          <ServiceDetailBlock
            number={`0${index + 1}`}
            serviceName={detail.name}
            heading={detail.heading}
            answer={detail.answer}
            body={detail.body}
            symptoms={detail.symptoms}
            approach={detail.approach}
            image={detail.image}
            theme={index % 2 === 0 ? "light" : "cream"}
            ctaLabel={`Ask about ${detail.name.toLowerCase()}`}
            ctaLink={estimateLink(detail.id)}
          >
            <h3>Why it matters</h3>
            <p>{detail.benefit}</p>
          </ServiceDetailBlock>
        </div>
      ))}
      {category.slug === "irrigation-systems" && (
        <div id="packages">
          <Packages />
        </div>
      )}
      {category.slug === "drainage-solutions" && (
        <ContentSection
          theme="dark"
          eyebrow="Start with the whole property"
          heading="A drain needs somewhere to go."
          body="Effective drainage considers both collection and discharge. Before choosing a solution, discuss the slope, neighboring properties, available outlets and any local requirements."
        />
      )}
      <FaqPreview ids={questions} />
      <CTASection
        heading={`Let’s talk about your ${category.slug === "drainage-solutions" ? "drainage" : "irrigation"}.`}
      />
      <JsonLd data={serviceSchema(category.name, category.intro, path)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: category.name, path },
        ])}
      />
    </>
  );
}
