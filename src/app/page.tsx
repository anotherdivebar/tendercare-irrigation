import { Hero } from "../components/webflow/Hero";
import { TrustBar } from "../components/webflow/TrustBar";
import { ServiceCategoryGrid } from "../components/webflow/ServiceCategoryGrid";
import { ServiceCard } from "../components/webflow/ServiceCard";
import { ServiceFeatureSection } from "../components/webflow/ServiceFeatureSection";
import { ProcessSection } from "../components/webflow/ProcessSection";
import { CTASection } from "../components/webflow/CTASection";
import {
  Packages,
  FieldGallery,
  FaqPreview,
} from "../components/preview/blocks";
import { ServiceAreaSection } from "../components/webflow/ServiceAreaSection";
import { pageMetadata } from "../lib/seo";
import { images } from "../content/assets";
export const metadata = pageMetadata(
  "Wichita Irrigation, Sprinkler & Drainage Services",
  "Sprinkler installation and repair, yard drainage, smart controller upgrades and seasonal irrigation service across the Wichita metro. Request a free estimate.",
  "/",
);
export default function Home() {
  return (
    <>
      <Hero
        heading="Wichita irrigation that works."
        accent="For every season."
        body="Dry spots, broken sprinklers, standing water or a new landscape to plan? TenderCare installs, repairs and maintains irrigation and drainage systems across the Wichita metro."
        image={images.hero}
        caption="Reliable coverage starts with the property."
        secondaryLabel="Explore our services"
        secondaryLink={{ href: "/services" }}
      />
      <TrustBar />
      <ServiceCategoryGrid
        heading={"Start with what\nyour yard is telling you."}
        body="Uneven watering, soggy ground and hard-to-manage controls each point to a different problem. Choose the service that fits what you are seeing."
        ctaLabel="View all services"
        ctaLink={{ href: "/services" }}
      >
        <ServiceCard
          image={images.lawn}
          heading="Irrigation systems"
          body="Install a new system, repair a problem zone or keep an existing system ready for the season."
          services="Installation · Repairs · Maintenance"
          link={{ href: "/services/irrigation-systems" }}
          linkLabel="Explore irrigation"
        />
        <ServiceCard
          number="02"
          image={images.equipment}
          heading="Drainage solutions"
          body="Find the source of standing water and plan a route that moves runoff away from problem areas."
          services="Yard drainage · French drains · Downspouts"
          link={{ href: "/services/drainage-solutions" }}
          linkLabel="Explore drainage"
        />
        <ServiceCard
          number="03"
          image={images.field}
          heading="Smart & seasonal care"
          body="Simplify watering schedules, handle backflow testing and prepare the system for freezing weather."
          services="Controllers · Backflow · Winterization"
          link={{ href: "/services/smart-upgrades" }}
          linkLabel="Explore smart upgrades"
        />
      </ServiceCategoryGrid>
      <ServiceFeatureSection
        eyebrow="How TenderCare approaches the work"
        heading="Look at the whole property.\nThen solve the right problem."
        body="The dry patch, leaking valve or soggy corner is only the visible clue. Water supply, pressure, grade, soil and existing equipment all shape the solution."
        image={images.install}
        caption="Irrigation work starts below the surface."
        ctaLabel="Get to know TenderCare"
        ctaLink={{ href: "/about" }}
      >
        <h3>The site shapes the solution.</h3>
        <p>
          Soil, slope, sun exposure and planting areas determine where water is
          needed and how it should move.
        </p>
        <h3>Plan beyond the immediate repair.</h3>
        <p>
          Consider daily operation, seasonal adjustments and future maintenance
          while the system is being evaluated.
        </p>
      </ServiceFeatureSection>
      <ProcessSection />
      <Packages />
      <FieldGallery />
      <ServiceAreaSection />
      <FaqPreview />
      <CTASection />
    </>
  );
}
