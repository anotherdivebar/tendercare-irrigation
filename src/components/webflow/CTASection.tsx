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
  eyebrow = "Request an estimate",
  heading = "Ready to solve the problem?",
  body = "Share the property location and a short description. That is all you need to start.",
  ctaLabel = "Get a free estimate",
  ctaLink = { href: "/estimate" },
  secondaryLabel = "Ask a question",
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
