import { Hero } from "../../components/webflow/Hero";
import { Breadcrumbs } from "../../components/webflow/Breadcrumbs";
import { BlogGrid } from "../../components/webflow/BlogGrid";
import { BlogCard } from "../../components/webflow/BlogCard";
import { ContentSection } from "../../components/webflow/ContentSection";
import { CTASection } from "../../components/webflow/CTASection";
import { images } from "../../content/assets";
import { publishedArticles } from "../../content/posts";
import { pageMetadata } from "../../lib/seo";
export const metadata = pageMetadata(
  "Irrigation Resources for Wichita Homeowners",
  "TenderCare’s resource center for irrigation and drainage. Find useful FAQs now and future guides on sprinkler care, winterization and smart watering.",
  "/blog",
);
export default function Page() {
  const posts = publishedArticles();
  return (
    <>
      <Breadcrumbs currentLabel="Resources" />
      <Hero
        variant="compact"
        eyebrow="The TenderCare resource center"
        heading="Know your landscape."
        accent="Care for it confidently."
        body="A place for practical irrigation and drainage knowledge, with the Wichita seasons in mind."
        image={images.lawn}
        ctaLabel="Explore common questions"
        ctaLink={{ href: "/faq" }}
      />
      <BlogGrid hasArticles={posts.length > 0}>
        {posts.map((p) => (
          <BlogCard
            key={p.slug}
            title={p.title}
            excerpt={p.excerpt}
            image={p.image}
            category={p.category}
            publishedLabel={p.publishedAt}
            link={{ href: `/blog/${p.slug}` }}
          />
        ))}
      </BlogGrid>
      <ContentSection
        theme="cream"
        layout="split"
        eyebrow="Find an answer today"
        heading="Start with what’s happening in your yard."
      >
        <div className="tc-resource-links">
          <a href="/faq#repairs">
            My sprinklers are not working as expected{" "}
            <span>Repair questions ↗</span>
          </a>
          <a href="/faq#drainage">
            Water keeps collecting in my yard <span>Drainage questions ↗</span>
          </a>
          <a href="/faq#winterization">
            I’m getting ready for colder weather{" "}
            <span>Winterization questions ↗</span>
          </a>
          <a href="/faq#smart-controllers">
            I want more control over watering{" "}
            <span>Smart controller questions ↗</span>
          </a>
        </div>
      </ContentSection>
      <CTASection />
    </>
  );
}
