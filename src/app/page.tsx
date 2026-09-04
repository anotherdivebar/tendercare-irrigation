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
  "Thoughtful irrigation, sprinkler repair, yard drainage and seasonal care for Wichita and the surrounding metro. Request a free estimate from TenderCare.",
  "/",
);
export default function Home() {
  return (
    <>
      <Hero
        heading="A thriving landscape."
        accent="Watered with care."
        body="Irrigation, drainage and seasonal care designed around your property. Helping Wichita landscapes grow beautifully, from the ground up."
        image={images.hero}
        caption="A little care. A lasting difference."
        secondaryLabel="Explore our services"
        secondaryLink={{ href: "/services" }}
      />
      <TrustBar />
      <ServiceCategoryGrid
        heading={"Good for your landscape.\nRight for your property."}
        body="From a sprinkler that won’t start to a complete irrigation system, thoughtful water management makes all the difference."
        ctaLabel="View all services"
        ctaLink={{ href: "/services" }}
      >
        <ServiceCard
          image={images.lawn}
          heading="Irrigation systems"
          body="Purposeful coverage for a healthier landscape, with care that keeps your system working."
          services="Installation · Repairs · Maintenance"
          link={{ href: "/services/irrigation-systems" }}
          linkLabel="Explore irrigation"
        />
        <ServiceCard
          number="02"
          image={images.equipment}
          heading="Drainage solutions"
          body="Understand where water collects. Give it a better way to move away from your property."
          services="Yard drainage · French drains · Downspouts"
          link={{ href: "/services/drainage-solutions" }}
          linkLabel="Explore drainage"
        />
        <ServiceCard
          number="03"
          image={images.field}
          heading="Smart & seasonal care"
          body="Adapt to changing conditions. Keep your irrigation system ready for what’s next."
          services="Controllers · Backflow · Winterization"
          link={{ href: "/services/smart-upgrades" }}
          linkLabel="Explore smart upgrades"
        />
      </ServiceCategoryGrid>
      <ServiceFeatureSection
        eyebrow="The TenderCare approach"
        heading="Care you can see.\nWork that goes deeper."
        body="A healthy landscape starts below the surface. TenderCare brings irrigation, drainage and ongoing care together, with a practical understanding of how water moves through your property."
        image={images.install}
        caption="On the ground. Paying attention to the details."
        ctaLabel="Get to know TenderCare"
        ctaLink={{ href: "/about" }}
      >
        <h3>Your property comes first.</h3>
        <p>
          Different soils, slopes and landscapes call for different solutions.
          Start with the conditions on your property.
        </p>
        <h3>Think beyond a single season.</h3>
        <p>
          Plan for the installation, the everyday operation and the maintenance
          that comes after.
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
