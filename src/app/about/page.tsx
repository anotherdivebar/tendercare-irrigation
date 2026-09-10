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
  "Locally family-owned since 1982, TenderCare provides irrigation and water-extension services for Wichita-area properties.",
  "/about",
);
export default function Page() {
  return (
    <>
      <Breadcrumbs currentLabel="About" />
      <Hero
        variant="compact"
        eyebrow="About TenderCare"
        heading="Water management starts with the property."
        accent=""
        body="Locally family-owned since 1982, TenderCare installs, repairs and maintains irrigation systems and water extensions across the Wichita metro. Every recommendation begins with the system, the site and the problem you want solved."
        image={images.team}
      />
      <ContentSection
        layout="split"
        eyebrow="Start with the cause"
        heading="The visible problem is only part of the story."
        body="A dry lawn can come from a damaged head, low pressure, poor coverage or the schedule. Water collecting near the house can come from a short downspout or sump pump discharge route."
      >
        <p>
          Where the problem appears, when it happens and what changed recently
          are useful clues. Looking at those details first helps narrow the
          problem before equipment or repairs are recommended.
        </p>
        <p>
          Whether the job is one broken zone or a complete system, you should
          understand the proposed work, what it addresses and what the system
          will need afterward.
        </p>
      </ContentSection>
      <ServiceFeatureSection
        image={images.detail}
        eyebrow="A straightforward way to work"
        heading="Inspect first.\nExplain the work."
        body="You should know what is causing the problem, what the proposed work covers and what the system may need later."
        ctaLabel="Explore our services"
        ctaLink={{ href: "/services" }}
      >
        <h3>Diagnose before recommending.</h3>
        <p>
          Check the water source, system condition and site constraints before
          choosing equipment or a repair.
        </p>
        <h3>Define the scope.</h3>
        <p>
          Know what the work is meant to fix, what is included and what may need
          attention later.
        </p>
        <h3>Account for the full season.</h3>
        <p>
          Include startup, in-season adjustments and winter shutdown in the
          system’s long-term plan.
        </p>
      </ServiceFeatureSection>
      <ProcessSection />
      <ServiceAreaSection />
      <CTASection />
    </>
  );
}
