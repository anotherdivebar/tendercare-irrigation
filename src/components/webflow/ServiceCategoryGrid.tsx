import type { ReactNode } from "react";
import { Section, SectionIntro, Button, type LinkValue } from "../ui";
export interface ServiceCategoryGridProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  ctaLabel?: string;
  ctaLink?: LinkValue;
  children?: ReactNode;
}
export function ServiceCategoryGrid({
  eyebrow = "What we do",
  heading = "The right water.\nIn the right places.",
  body,
  ctaLabel,
  ctaLink,
  children,
}: ServiceCategoryGridProps) {
  return (
    <Section className="tc-service-grid-section">
      <SectionIntro eyebrow={eyebrow} heading={heading} body={body}>
        <Button variant="text" link={ctaLink}>
          {ctaLabel}
        </Button>
      </SectionIntro>
      <div className="tc-service-grid">{children}</div>
    </Section>
  );
}
