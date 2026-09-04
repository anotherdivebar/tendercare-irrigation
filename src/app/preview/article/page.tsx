import { BlogArticle } from "../../../components/webflow/BlogArticle";
import { CTASection } from "../../../components/webflow/CTASection";
import { images } from "../../../content/assets";
export const metadata = {
  title: "Article template preview | TenderCare",
  robots: { index: false, follow: false },
};
export default function Preview() {
  return (
    <BlogArticle
      title="Article template preview"
      excerpt="This unpublished template demonstrates the resource layout. It is not a published article."
      category="Design preview"
      image={images.field}
      tableOfContents={
        <>
          <a href="#template-answer">Answer-first introduction</a>
          <a href="#template-details">Supporting details</a>
        </>
      }
      serviceCTA={
        <CTASection
          heading="A relevant next step."
          body="Connect the article to the service that can help."
          ctaLabel="Explore irrigation"
          ctaLink={{ href: "/services/irrigation-systems" }}
        />
      }
    >
      <section id="template-answer">
        <h2>Answer-first introduction</h2>
        <p>
          Place the direct answer in the first one or two sentences. Follow it
          with useful context that helps a homeowner understand the problem.
        </p>
      </section>
      <section id="template-details">
        <h2>Supporting details</h2>
        <p>
          Add approved guidance, descriptive subheadings, accessible lists and
          source links. The publishing model supports an author, publish date,
          update date, related articles and a contextual service link.
        </p>
        <h3>Publication fields</h3>
        <ul>
          <li>Use the real author and publication date.</li>
          <li>Choose a relevant, approved hero image.</li>
          <li>Connect the article to a related service.</li>
        </ul>
      </section>
    </BlogArticle>
  );
}
