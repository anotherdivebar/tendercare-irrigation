import { linkAttributes, type LinkValue } from "../ui";
export interface ReviewCardProps {
  quote?: string;
  customer?: string;
  location?: string;
  sourceLabel?: string;
  sourceLink?: LinkValue;
  verified?: boolean;
}
export function ReviewCard({
  quote,
  customer,
  location,
  sourceLabel,
  sourceLink,
  verified = false,
}: ReviewCardProps) {
  if (!verified || !quote || !customer) return null;
  return (
    <figure className="tc tc-review">
      <blockquote>“{quote}”</blockquote>
      <figcaption>
        <strong>{customer}</strong>
        {location && <span>{location}</span>}
        {sourceLink?.href && (
          <a {...linkAttributes(sourceLink)}>
            {sourceLabel || "Read original review"} ↗
          </a>
        )}
      </figcaption>
    </figure>
  );
}
