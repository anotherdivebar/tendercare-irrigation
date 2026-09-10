import { Hero } from "../components/webflow/Hero";
import { TrustBar } from "../components/webflow/TrustBar";
import { ServiceCategoryGrid } from "../components/webflow/ServiceCategoryGrid";
import { ServiceCard } from "../components/webflow/ServiceCard";
import { ServiceFeatureSection } from "../components/webflow/ServiceFeatureSection";
import { ProcessSection } from "../components/webflow/ProcessSection";
import { CTASection } from "../components/webflow/CTASection";
import {
  FieldGallery,
  FaqPreview,
} from "../components/preview/blocks";
import { ServiceAreaSection } from "../components/webflow/ServiceAreaSection";
import { pageMetadata } from "../lib/seo";
import { images } from "../content/assets";
export const metadata = pageMetadata(
  "Wichita Irrigation, Sprinkler & Drainage Services",
  "Sprinkler installation, repair, controller upgrades, winterization, and downspout or sump pump extensions across the Wichita metro.",
  "/",
);
export default function Home() {
  return (
    <>
      <Hero
        heading="Wichita irrigation that works."
        accent="For every season."
        body="Dry spots, broken sprinklers, roof runoff or a new landscape to plan? TenderCare installs, repairs and maintains irrigation systems and water extensions across the Wichita metro."
        image={images.hero}
        caption="Reliable coverage starts with the property."
        secondaryLabel="Explore our services"
        secondaryLink={{ href: "/services" }}
      />
      <TrustBar />
      <ServiceCategoryGrid
        heading={"Start with what\nyour yard is telling you."}
        body="Uneven watering, hard-to-manage controls and water discharging too close to the house each call for a different solution. Choose the service that fits what you are seeing."
        ctaLabel="View all services"
        ctaLink={{ href: "/services" }}
      >
        <ServiceCard
          image={images.lawn}
          heading="Irrigation systems"
          body="Install a system, repair a problem zone, upgrade the controls or prepare existing equipment for the season."
          services="Installation · Repairs · Maintenance · Controllers · Backflow · Winterization"
          link={{ href: "/services/irrigation-systems" }}
          linkLabel="Explore irrigation"
        />
        <ServiceCard
          number="02"
          image={images.equipment}
          heading="Drainage solutions"
          body="Extend downspout or sump pump discharge away from the house along a route that fits the property."
          services="Downspout extensions · Sump pump extensions"
          link={{ href: "/services/drainage-solutions" }}
          linkLabel="Explore drainage"
        />
      </ServiceCategoryGrid>
      <ServiceFeatureSection
        eyebrow="How TenderCare approaches the work"
        heading="Look at the whole property.\nThen solve the right problem."
        body="A dry patch, leaking valve or discharge point beside the house is only the visible clue. Water supply, pressure, slope and existing equipment all shape the solution."
        image={images.install}
        caption="Irrigation work starts below the surface."
        ctaLabel="Get to know TenderCare"
        ctaLink={{ href: "/about" }}
      >
        <h3>The site shapes the solution.</h3>
        <p>
          Water supply, slope, sun exposure, planting areas and existing outlets
          determine where water is needed and where it can go.
        </p>
        <h3>Plan beyond the immediate repair.</h3>
        <p>
          Consider daily operation, seasonal adjustments and future maintenance
          while the system is being evaluated.
        </p>
      </ServiceFeatureSection>
      <ProcessSection />
      <FieldGallery />
      <ServiceAreaSection />
      <FaqPreview />
      <CTASection />
    </>
  );
}
