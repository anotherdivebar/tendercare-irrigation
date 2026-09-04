import type { ReactNode } from "react";
import { Section, SectionIntro, Button, type LinkValue } from "../ui";
export interface BlogGridProps {
  eyebrow?: string;
  heading?: string;
  children?: ReactNode;
  hasArticles?: boolean;
  emptyHeading?: string;
  emptyBody?: string;
  ctaLabel?: string;
  ctaLink?: LinkValue;
}
export function BlogGrid({
  eyebrow = "Irrigation resources",
  heading = "Useful answers for\na better-working yard.",
  children,
  hasArticles = false,
  emptyHeading = "We’re working on the first articles.",
  emptyBody = "For now, the FAQ covers common questions about repairs, drainage, seasonal care and irrigation controls.",
  ctaLabel = "Browse common questions",
  ctaLink = { href: "/faq" },
}: BlogGridProps) {
  return (
    <Section>
      <SectionIntro eyebrow={eyebrow} heading={heading} />
      {hasArticles && children ? (
        <div className="tc-blog-grid">{children}</div>
      ) : (
        <div className="tc-blog-empty">
          <span aria-hidden="true">↗</span>
          <div>
            <h3>{emptyHeading}</h3>
            <p>{emptyBody}</p>
            <Button variant="text" link={ctaLink}>
              {ctaLabel}
            </Button>
          </div>
        </div>
      )}
    </Section>
  );
}
