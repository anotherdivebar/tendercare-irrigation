import { Hero } from "../../components/webflow/Hero";
import { Breadcrumbs } from "../../components/webflow/Breadcrumbs";
import { ContactSection } from "../../components/webflow/ContactSection";
import { EstimateForm } from "../../components/webflow/EstimateForm";
import { ServiceAreaSection } from "../../components/webflow/ServiceAreaSection";
import { FaqPreview } from "../../components/preview/blocks";
import { business } from "../../content/business";
import { pageMetadata } from "../../lib/seo";
export const metadata = pageMetadata(
  "Contact TenderCare Irrigation in Wichita",
  "Contact TenderCare about sprinkler installation, irrigation repair, yard drainage or seasonal service in the Wichita metro.",
  "/contact",
);
export default function Page() {
  return (
    <>
      <Breadcrumbs currentLabel="Contact" />
      <Hero
        variant="compact"
        eyebrow="Contact TenderCare"
        heading="Tell us what’s happening on your property."
        accent=""
        body="Need a repair, planning a new system or dealing with standing water? Send the basics and the best way to reach you."
        ctaLabel="Get a free estimate"
      />
      <ContactSection
        heading="What should you include?"
        body="Share the property location, what you are seeing and the service you have in mind. TenderCare can then discuss current availability and the service options."
        phone={business.phone ?? undefined}
        email={business.email ?? undefined}
        address={business.address ?? undefined}
        hours={business.hours ?? undefined}
      >
        <EstimateForm
          heading="Contact TenderCare"
          submitLabel="Send inquiry"
          endpoint={process.env.NEXT_PUBLIC_ESTIMATE_ENDPOINT}
        />
      </ContactSection>
      <ServiceAreaSection />
      <FaqPreview ids={["schedule", "area", "estimate"]} />
    </>
  );
}
