import type { ReactNode } from "react";
import { Section, Eyebrow, Heading, Button, type LinkValue } from "../ui";
export interface FAQAccordionProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  ctaLabel?: string;
  ctaLink?: LinkValue;
  children?: ReactNode;
  variant?: "split" | "full";
}
export function FAQAccordion({
  eyebrow = "A little clarity",
  heading = "Good questions.\nStraight answers.",
  body,
  ctaLabel = "Visit our FAQ",
  ctaLink = { href: "/faq" },
  children,
  variant = "split",
}: FAQAccordionProps) {
  return (
    <Section className={`tc-faq tc-faq-${variant}`}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading>{heading}</Heading>
        {body && <p className="tc-faq-intro">{body}</p>}
        <Button variant="text" link={ctaLink}>
          {ctaLabel}
        </Button>
      </div>
      <div className="tc-faq-items">{children}</div>
    </Section>
  );
}
