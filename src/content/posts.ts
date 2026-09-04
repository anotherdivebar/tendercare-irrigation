import type { ImageAsset } from "../components/ui";
export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: string[];
}
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  status: "draft" | "published";
  image?: ImageAsset;
  sections: ArticleSection[];
  relatedSlugs: string[];
  serviceSlug: string;
}
/** CMS adapter boundary. No fabricated publications: only approved records may be published. */
export const articles: Article[] = [];
export const publishedArticles = () =>
  articles.filter((a) => a.status === "published");
export const getArticle = (slug: string) =>
  publishedArticles().find((a) => a.slug === slug);
