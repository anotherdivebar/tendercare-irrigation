import type { ReactNode } from "react";
import {
  Section,
  Eyebrow,
  Heading,
  Photo,
  Button,
  type ImageAsset,
  type LinkValue,
  type Theme,
} from "../ui";
export interface ServiceFeatureSectionProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  image?: ImageAsset;
  imageAlt?: string;
  caption?: string;
  ctaLabel?: string;
  ctaLink?: LinkValue;
  alignment?: "image-left" | "image-right";
  theme?: Theme;
  children?: ReactNode;
}
export function ServiceFeatureSection({
  eyebrow,
  heading,
  body,
  image,
  imageAlt,
  caption,
  ctaLabel,
  ctaLink,
  alignment = "image-left",
  theme = "cream",
  children,
}: ServiceFeatureSectionProps) {
  return (
    <Section
      theme={theme}
      className={`tc-feature tc-${alignment}${image?.src ? "" : " tc-without-image"}`}
    >
      {image?.src && (
        <figure>
          <Photo image={image} alt={imageAlt} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      )}
      <div className="tc-feature-copy">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading>{heading}</Heading>
        {body && <p className="tc-lead">{body}</p>}
        <div className="tc-feature-slot">{children}</div>
        <Button link={ctaLink} variant={theme === "dark" ? "light" : "text"}>
          {ctaLabel}
        </Button>
      </div>
    </Section>
  );
}
