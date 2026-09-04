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
  eyebrow = "Common questions",
  heading = "Know what to expect\nbefore you schedule.",
  body,
  ctaLabel = "See all questions",
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
