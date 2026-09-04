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
  "Contact TenderCare about irrigation, sprinkler repair, drainage or seasonal service in Wichita. Share your property details and ask about availability.",
  "/contact",
);
export default function Page() {
  return (
    <>
      <Breadcrumbs currentLabel="Contact" />
      <Hero
        variant="compact"
        eyebrow="Contact TenderCare"
        heading="Let’s talk about your landscape."
        accent=""
        body="A repair, a new project or a question about your system. Start the conversation here."
        ctaLabel="Request a free estimate"
      />
      <ContactSection
        heading="A useful conversation starts here."
        body="Include your location, the service you have in mind and the best way to reach you. Scheduling and the proposed scope are confirmed after your inquiry."
        phone={business.phone ?? undefined}
        email={business.email ?? undefined}
        address={business.address ?? undefined}
        hours={business.hours ?? undefined}
      >
        <EstimateForm
          heading="Send an inquiry"
          submitLabel="Send inquiry"
          endpoint={process.env.NEXT_PUBLIC_ESTIMATE_ENDPOINT}
        />
      </ContactSection>
      <ServiceAreaSection />
      <FaqPreview ids={["schedule", "area", "estimate"]} />
    </>
  );
}
