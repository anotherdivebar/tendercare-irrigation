import { Breadcrumbs } from "../../components/webflow/Breadcrumbs";
import { EstimateForm } from "../../components/webflow/EstimateForm";
import { Container, Eyebrow, Heading } from "../../components/ui";
import { pageMetadata } from "../../lib/seo";
export const metadata = pageMetadata(
  "Request a Free Irrigation Estimate in Wichita",
  "Tell TenderCare about your Wichita-area irrigation or drainage project. Request a free estimate for sprinkler installation, repair or seasonal care.",
  "/estimate",
);
export default function Page() {
  return (
    <>
      <Breadcrumbs currentLabel="Free estimate" />
      <section className="tc tc-estimate-page">
        <Container>
          <div className="tc-estimate-intro">
            <Eyebrow>Wichita & the surrounding metro</Eyebrow>
            <Heading as="h1">Request your free estimate.</Heading>
            <p className="tc-lead">
              A few details about your property. A clear next step for your
              landscape.
            </p>
          </div>
          <EstimateForm
            heading="Let’s start with the basics."
            endpoint={process.env.NEXT_PUBLIC_ESTIMATE_ENDPOINT}
          />
          <aside className="tc-estimate-steps">
            <h2>What happens next</h2>
            <ol>
              <li>
                <span>01</span>Share your project details.
              </li>
              <li>
                <span>02</span>Discuss your property and service needs.
              </li>
              <li>
                <span>03</span>Review the scope and next steps.
              </li>
            </ol>
            <p>
              Submitting a request does not book an appointment or authorize
              work.
            </p>
            <a className="tc-estimate-question" href="/faq">
              Questions before you start? Read our FAQ ↗
            </a>
          </aside>
        </Container>
      </section>
    </>
  );
}
