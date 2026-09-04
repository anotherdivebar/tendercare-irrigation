import { Hero } from "../../components/webflow/Hero";
import { Breadcrumbs } from "../../components/webflow/Breadcrumbs";
import { ContentSection } from "../../components/webflow/ContentSection";
import { ServiceFeatureSection } from "../../components/webflow/ServiceFeatureSection";
import { ProcessSection } from "../../components/webflow/ProcessSection";
import { ServiceAreaSection } from "../../components/webflow/ServiceAreaSection";
import { CTASection } from "../../components/webflow/CTASection";
import { images } from "../../content/assets";
import { pageMetadata } from "../../lib/seo";
export const metadata = pageMetadata(
  "About Our Wichita Irrigation Company",
  "Get to know TenderCare Irrigation’s practical approach to sprinkler systems, drainage and seasonal landscape care in the Wichita metro.",
  "/about",
);
export default function Page() {
  return (
    <>
      <Breadcrumbs currentLabel="About" />
      <Hero
        variant="compact"
        eyebrow="About TenderCare"
        heading="The care is in the details."
        accent=""
        body="TenderCare Irrigation helps Wichita-area properties manage water through sprinkler installation, repairs, drainage and seasonal service. Our focus is simple: understand the landscape and help it work better."
        image={images.team}
      />
      <ContentSection
        layout="split"
        eyebrow="Our approach"
        heading="See the whole landscape."
        body="An irrigation system does not work in isolation. Soil, slope, plants and weather all influence what happens to water once it reaches your yard."
      >
        <p>
          That is why the starting point is your property: where it is dry,
          where it stays wet, what has changed and what you want to improve.
          Understanding those conditions makes a service recommendation more
          useful.
        </p>
        <p>
          From a single repair to planning a new system, the conversation should
          be clear about the problem, the proposed scope and the care the
          landscape will need afterward.
        </p>
      </ContentSection>
      <ServiceFeatureSection
        image={images.detail}
        eyebrow="A practical standard of care"
        heading="Good questions.\nCareful work."
        body="A successful project begins with a shared understanding of what needs to happen."
        ctaLabel="Explore our services"
        ctaLink={{ href: "/services" }}
      >
        <h3>Look before recommending.</h3>
        <p>
          Understand the water source, system condition and site constraints
          before choosing equipment or a repair.
        </p>
        <h3>Make the next step clear.</h3>
        <p>
          Discuss the work, the scope and ongoing maintenance so you can make an
          informed decision.
        </p>
        <h3>Keep the seasons in view.</h3>
        <p>
          Plan for startup, in-season adjustments and shutdown as part of caring
          for the system.
        </p>
      </ServiceFeatureSection>
      <ProcessSection />
      <ServiceAreaSection />
      <CTASection />
    </>
  );
}
