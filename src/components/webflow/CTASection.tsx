import { Section, Eyebrow, Heading, Button, type LinkValue } from "../ui";
export interface CTASectionProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  ctaLabel?: string;
  ctaLink?: LinkValue;
  secondaryLabel?: string;
  secondaryLink?: LinkValue;
}
export function CTASection({
  eyebrow = "Let’s take care of it",
  heading = "A better yard starts here.",
  body = "Tell us about your property. We’ll help you find the right next step.",
  ctaLabel = "Get free estimate",
  ctaLink = { href: "/estimate" },
  secondaryLabel = "Have a question?",
  secondaryLink = { href: "/contact" },
}: CTASectionProps) {
  return (
    <Section theme="dark" className="tc-cta">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading>{heading}</Heading>
        {body && <p>{body}</p>}
      </div>
      <div className="tc-actions">
        <Button variant="light" link={ctaLink}>
          {ctaLabel}
        </Button>
        <Button variant="text" link={secondaryLink}>
          {secondaryLabel}
        </Button>
      </div>
    </Section>
  );
}
