import type { ReactNode } from "react";
import { Container, Eyebrow, Heading, Photo, type ImageAsset } from "../ui";
export interface BlogArticleProps {
  title?: string;
  excerpt?: string;
  category?: string;
  author?: string;
  publishedDate?: string;
  updatedDate?: string;
  image?: ImageAsset;
  children?: ReactNode;
  tableOfContents?: ReactNode;
  relatedArticles?: ReactNode;
  serviceCTA?: ReactNode;
}
export function BlogArticle({
  title = "Article title",
  excerpt,
  category,
  author,
  publishedDate,
  updatedDate,
  image,
  children,
  tableOfContents,
  relatedArticles,
  serviceCTA,
}: BlogArticleProps) {
  return (
    <article className="tc tc-article">
      <Container>
        <header>
          <Eyebrow>{category}</Eyebrow>
          <Heading as="h1">{title}</Heading>
          {excerpt && <p className="tc-lead">{excerpt}</p>}
          <div className="tc-article-meta">
            {author && <span>By {author}</span>}
            {publishedDate && (
              <span>
                Published <time dateTime={publishedDate}>{publishedDate}</time>
              </span>
            )}
            {updatedDate && (
              <span>
                Updated <time dateTime={updatedDate}>{updatedDate}</time>
              </span>
            )}
          </div>
        </header>
        {image?.src && (
          <figure className="tc-article-hero">
            <Photo
              image={image}
              priority
              sizes="(max-width: 1440px) 91vw, 1280px"
            />
          </figure>
        )}
        <div className="tc-article-layout">
          {tableOfContents && (
            <nav aria-label="On this page" className="tc-toc">
              <h2>On this page</h2>
              {tableOfContents}
            </nav>
          )}
          <div className="tc-prose">
            {children}
            {serviceCTA}
          </div>
        </div>
        {relatedArticles && (
          <aside aria-label="Related articles" className="tc-article-related">
            {relatedArticles}
          </aside>
        )}
      </Container>
    </article>
  );
}
