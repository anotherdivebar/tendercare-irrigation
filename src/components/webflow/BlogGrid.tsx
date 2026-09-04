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
  eyebrow = "The resource library",
  heading = "Practical advice.\nGrounded in good care.",
  children,
  hasArticles = false,
  emptyHeading = "Good guidance is growing here.",
  emptyBody = "Our resource library is being prepared. In the meantime, explore clear answers to common irrigation and drainage questions.",
  ctaLabel = "Explore the irrigation FAQ",
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
