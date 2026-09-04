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
export interface ServiceDetailBlockProps {
  number?: string;
  serviceName?: string;
  heading?: string;
  answer?: string;
  body?: string;
  symptoms?: string;
  approach?: string;
  image?: ImageAsset;
  imageAlt?: string;
  children?: ReactNode;
  ctaLabel?: string;
  ctaLink?: LinkValue;
  theme?: Theme;
}
export function ServiceDetailBlock({
  number = "01",
  serviceName,
  heading,
  answer,
  body,
  symptoms,
  approach,
  image,
  imageAlt,
  children,
  ctaLabel = "Request an estimate",
  ctaLink = { href: "/estimate" },
  theme = "light",
}: ServiceDetailBlockProps) {
  return (
    <Section theme={theme} className="tc-service-detail">
      <div className="tc-detail-title">
        <Eyebrow>
          {number} / {serviceName}
        </Eyebrow>
        <Heading>{heading}</Heading>
        {answer && <p className="tc-lead">{answer}</p>}
      </div>
      <div className="tc-detail-columns">
        <div>
          {image?.src && (
            <figure>
              <Photo image={image} alt={imageAlt} />
            </figure>
          )}
          {body && <p>{body}</p>}
        </div>
        <div>
          {symptoms && (
            <>
              <h3>When it’s worth a closer look</h3>
              <ul>
                {symptoms
                  .split("\n")
                  .filter(Boolean)
                  .map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
              </ul>
            </>
          )}
          {approach && (
            <>
              <h3>What the work involves</h3>
              <p>{approach}</p>
            </>
          )}
          {children}
          <Button variant="text" link={ctaLink}>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </Section>
  );
}
