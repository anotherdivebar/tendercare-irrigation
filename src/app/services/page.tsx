import { Hero } from "../../components/webflow/Hero";
import { Breadcrumbs } from "../../components/webflow/Breadcrumbs";
import { ServiceFeatureSection } from "../../components/webflow/ServiceFeatureSection";
import { CTASection } from "../../components/webflow/CTASection";
import { services } from "../../content/services";
import { pageMetadata, JsonLd, breadcrumbSchema } from "../../lib/seo";
export const metadata = pageMetadata(
  "Irrigation & Drainage Services in Wichita",
  "Compare sprinkler installation, repair, maintenance, drainage, smart controller, backflow testing and winterization services in the Wichita metro.",
  "/services",
);
export default function Page() {
  return (
    <>
      <Breadcrumbs currentLabel="Services" />
      <Hero
        variant="compact"
        eyebrow="Irrigation & drainage services / Wichita metro"
        heading="Find the service that fits the problem."
        accent=""
        body="Choose from irrigation installation and repair, yard drainage, controller upgrades, backflow testing and seasonal system care."
        secondaryLabel="Help me choose"
        secondaryLink={{ href: "/contact" }}
      />
      {services.map((s, i) => (
        <ServiceFeatureSection
          key={s.slug}
          theme={i % 2 ? "light" : "cream"}
          eyebrow={`0${i + 1} / ${s.name}`}
          heading={s.name}
          body={s.intro}
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
