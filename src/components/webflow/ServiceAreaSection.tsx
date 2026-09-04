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
  eyebrow = "Rooted in the Wichita metro",
  heading = "Local care.\nA little closer to home.",
  body = "Irrigation and drainage services for Wichita and the surrounding communities. Share your property location so we can confirm service availability.",
  communities = "Wichita\nDerby\nAndover\nMaize\nHaysville\nGoddard",
  ctaLabel = "Ask about your area",
  ctaLink = { href: "/contact" },
  note = "Nearby? Let’s talk about your property.",
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
