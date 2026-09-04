import { Hero } from "../../components/webflow/Hero";
import { Breadcrumbs } from "../../components/webflow/Breadcrumbs";
import { ServiceFeatureSection } from "../../components/webflow/ServiceFeatureSection";
import { CTASection } from "../../components/webflow/CTASection";
import { services } from "../../content/services";
import { pageMetadata, JsonLd, breadcrumbSchema } from "../../lib/seo";
export const metadata = pageMetadata(
  "Irrigation & Drainage Services in Wichita",
  "Explore TenderCare’s sprinkler installation, repairs, maintenance, drainage solutions, smart controllers, backflow testing and winterization in Wichita.",
  "/services",
);
export default function Page() {
  return (
    <>
      <Breadcrumbs currentLabel="Services" />
      <Hero
        variant="compact"
        eyebrow="Our expertise / Wichita metro"
        heading="Better water management."
        accent="From the ground up."
        body="One property. Many moving parts. Explore irrigation, drainage and seasonal services that work together to care for your landscape."
        secondaryLabel="Not sure what you need?"
        secondaryLink={{ href: "/contact" }}
      />
      {services.map((s, i) => (
        <ServiceFeatureSection
          key={s.slug}
          theme={i % 2 ? "light" : "cream"}
          alignment={i % 2 ? "image-right" : "image-left"}
          eyebrow={`0${i + 1} / ${s.name}`}
          heading={s.name}
          body={s.intro}
          image={s.image}
          ctaLabel={`Explore ${s.name.toLowerCase()}`}
          ctaLink={{ href: `/services/${s.slug}` }}
        >
          <div className="tc-directory">
            {s.details.map((d) => (
              <a key={d.id} href={`/services/${s.slug}#${d.id}`}>
                <h3>
                  {d.name}
                  <span aria-hidden="true">↗</span>
                </h3>
                <p>{d.summary}</p>
              </a>
            ))}
          </div>
        </ServiceFeatureSection>
      ))}
      <CTASection />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
    </>
  );
}
