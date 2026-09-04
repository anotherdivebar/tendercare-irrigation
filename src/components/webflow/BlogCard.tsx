import {
  Photo,
  Arrow,
  Eyebrow,
  linkAttributes,
  type ImageAsset,
  type LinkValue,
} from "../ui";
export interface BlogCardProps {
  title?: string;
  excerpt?: string;
  category?: string;
  publishedLabel?: string;
  image?: ImageAsset;
  link?: LinkValue;
}
export function BlogCard({
  title = "Article title",
  excerpt,
  category,
  publishedLabel,
  image,
  link,
}: BlogCardProps) {
  if (!link?.href) return null;
  return (
    <article className="tc tc-blog-card">
      {image?.src && (
        <div className="tc-blog-card-image">
          <Photo image={image} />
        </div>
      )}
      <Eyebrow>{category}</Eyebrow>
      <h3>
        <a {...linkAttributes(link)}>
          {title}
          <Arrow diagonal />
        </a>
      </h3>
      {excerpt && <p>{excerpt}</p>}
      {publishedLabel && <small>{publishedLabel}</small>}
    </article>
  );
}
