import { Section, Eyebrow, Heading, Button, type LinkValue } from "../ui";
export interface ServiceAreaSectionProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  communities?: string;
  ctaLabel?: string;
  ctaLink?: LinkValue;
  note?: string;
}
export function ServiceAreaSection({
  eyebrow = "Wichita-area service",
  heading = "Service across Wichita\nand nearby communities.",
  body = "TenderCare serves Wichita and the surrounding metro. Enter your address or ZIP to check availability for your property.",
  communities = "Wichita\nDerby\nAndover\nMaize\nHaysville\nGoddard",
  ctaLabel = "Check your ZIP",
  ctaLink = { href: "/contact" },
  note = "Outside these cities? Ask about your property.",
}: ServiceAreaSectionProps) {
  return (
    <Section theme="cream" className="tc-service-area">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading>{heading}</Heading>
        <p>{body}</p>
        <Button variant="text" link={ctaLink}>
          {ctaLabel}
        </Button>
      </div>
      <div className="tc-area-panel">
        <span className="tc-area-label">
          WICHITA, KANSAS / SURROUNDING METRO
        </span>
        <ul>
          {communities
            .split("\n")
            .filter(Boolean)
            .map((c) => (
              <li key={c}>
                <span aria-hidden="true">↗</span>
                {c}
              </li>
            ))}
        </ul>
        {note && <small>{note}</small>}
      </div>
    </Section>
  );
}
