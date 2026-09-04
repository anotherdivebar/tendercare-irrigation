import { Breadcrumbs } from "../../components/webflow/Breadcrumbs";
import { EstimateForm } from "../../components/webflow/EstimateForm";
import { Container, Eyebrow, Heading } from "../../components/ui";
import { pageMetadata } from "../../lib/seo";
export const metadata = pageMetadata(
  "Request a Free Irrigation Estimate in Wichita",
  "Request a free estimate for sprinkler installation, irrigation repair, yard drainage, controller upgrades or seasonal service in the Wichita metro.",
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
            <Heading as="h1">What can we help you plan or fix?</Heading>
            <p className="tc-lead">
              Tell us where the property is and what you need. A few details
              are enough to start.
            </p>
          </div>
          <EstimateForm
            heading="Tell us about the property"
            endpoint={process.env.NEXT_PUBLIC_ESTIMATE_ENDPOINT}
          />
          <aside className="tc-estimate-steps">
            <h2>What happens next</h2>
            <ol>
              <li>
                <span>01</span>Send the property details.
              </li>
              <li>
                <span>02</span>Discuss the problem and service options.
              </li>
              <li>
                <span>03</span>Review the proposed scope.
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
