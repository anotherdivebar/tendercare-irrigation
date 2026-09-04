import {
  Button,
  Container,
  Eyebrow,
  Heading,
  Photo,
  type ImageAsset,
  type LinkValue,
} from "../ui";
export interface HeroProps {
  eyebrow?: string;
  heading?: string;
  accent?: string;
  body?: string;
  image?: ImageAsset;
  imageAlt?: string;
  ctaLabel?: string;
  ctaLink?: LinkValue;
  secondaryLabel?: string;
  secondaryLink?: LinkValue;
  caption?: string;
  variant?: "split" | "compact";
  imagePosition?: string;
}
export function Hero({
  eyebrow = "Wichita, Kansas · Irrigation & drainage",
  heading = "Thoughtful water management.",
  accent = "A better place to come home to.",
  body,
  image,
  imageAlt,
  ctaLabel = "Get free estimate",
  ctaLink = { href: "/estimate" },
  secondaryLabel,
  secondaryLink,
  caption,
  variant = "split",
  imagePosition = "center",
}: HeroProps) {
  return (
    <section
      className={`tc tc-hero tc-hero-${variant}${image?.src ? "" : " tc-without-image"}`}
    >
      <Container>
        <div className="tc-hero-copy">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading as="h1">
            {heading}
            {accent && <span className="tc-hero-accent">{accent}</span>}
          </Heading>
          {body && <p className="tc-lead">{body}</p>}
          <div className="tc-actions">
            <Button link={ctaLink}>{ctaLabel}</Button>
            <Button link={secondaryLink} variant="text">
              {secondaryLabel}
            </Button>
          </div>
        </div>
        {image?.src && (
          <figure className="tc-hero-figure">
            <Photo
              image={image}
              alt={imageAlt}
              priority
              position={imagePosition}
            />
            {caption && <figcaption>{caption}</figcaption>}
            <span className="tc-photo-index" aria-hidden="true">
              TENDERCARE / IN THE FIELD
            </span>
          </figure>
        )}
      </Container>
    </section>
  );
}
