import {
  Arrow,
  Photo,
  linkAttributes,
  type ImageAsset,
  type LinkValue,
} from "../ui";
export interface ServiceCardProps {
  number?: string;
  heading?: string;
  body?: string;
  image?: ImageAsset;
  imageAlt?: string;
  link?: LinkValue;
  linkLabel?: string;
  services?: string;
}
export function ServiceCard({
  number = "01",
  heading = "Irrigation systems",
  body,
  image,
  imageAlt,
  link = { href: "/services" },
  linkLabel = "Explore service",
  services,
}: ServiceCardProps) {
  return (
    <article className="tc tc-service-card">
      {image?.src ? (
        <div className="tc-service-card-image">
          <Photo
            image={image}
            alt={imageAlt}
            sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1440px) 30vw, 408px"
          />
          <span>{number}</span>
        </div>
      ) : (
        <span className="tc-card-number">{number}</span>
      )}
      <div className="tc-service-card-heading">
        <h3>{heading}</h3>
      </div>
      {body && <p>{body}</p>}
      {services && <p className="tc-small tc-service-list">{services}</p>}
      {link?.href && (
        <a className="tc-card-link" {...linkAttributes(link)}>
          {linkLabel}
          <Arrow />
        </a>
      )}
    </article>
  );
}
