import { notFound } from "next/navigation";
import { BlogArticle } from "../../../components/webflow/BlogArticle";
import { BlogCard } from "../../../components/webflow/BlogCard";
import { CTASection } from "../../../components/webflow/CTASection";
import { getArticle, publishedArticles } from "../../../content/posts";
import {
  pageMetadata,
  JsonLd,
  siteOrigin,
  absoluteImageUrl,
} from "../../../lib/seo";
export function generateStaticParams() {
  return publishedArticles().map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = getArticle((await params).slug);
  if (!post)
    return {
      title: "Article not found",
      robots: { index: false, follow: false },
    };
  const meta = pageMetadata(
    post.title,
    post.excerpt,
    `/blog/${post.slug}`,
    post.image?.src,
  );
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images:
        post.image && siteOrigin ? [absoluteImageUrl(post.image.src)!] : [],
    },
    twitter: {
      ...meta.twitter,
      images:
        post.image && siteOrigin ? [absoluteImageUrl(post.image.src)!] : [],
    },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = getArticle((await params).slug);
  if (!post) notFound();
  const related = post.relatedSlugs.map(getArticle).filter((p) => !!p);
  return (
    <>
      <BlogArticle
        title={post.title}
        excerpt={post.excerpt}
        category={post.category}
        author={post.author}
        publishedDate={post.publishedAt}
        updatedDate={post.updatedAt}
        image={post.image}
        tableOfContents={post.sections.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            {s.heading}
          </a>
        ))}
        relatedArticles={
          related.length > 0 ? (
            <div className="tc-blog-grid">
              {related.map((p) => (
                <BlogCard
                  key={p.slug}
                  title={p.title}
                  excerpt={p.excerpt}
                  image={p.image}
                  link={{ href: `/blog/${p.slug}` }}
                />
              ))}
            </div>
          ) : undefined
        }
        serviceCTA={
          <CTASection
            heading="Need a hand with your landscape?"
            ctaLabel="Explore this service"
            ctaLink={{ href: `/services/${post.serviceSlug}` }}
          />
        }
      >
        {post.sections.map((s) => (
          <section key={s.id} id={s.id}>
            <h2>{s.heading}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}
      </BlogArticle>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          author: { "@type": "Person", name: post.author },
          datePublished: post.publishedAt,
          ...(post.updatedAt ? { dateModified: post.updatedAt } : {}),
          ...(siteOrigin
            ? { mainEntityOfPage: `${siteOrigin}/blog/${post.slug}` }
            : {}),
        }}
      />
    </>
  );
}
