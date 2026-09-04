import { Button, type LinkValue } from "../ui";
export interface PackageCardProps {
  name?: string;
  description?: string;
  price?: string;
  features?: string;
  ctaLabel?: string;
  ctaLink?: LinkValue;
  featured?: boolean;
}
export function PackageCard({
  name = "Seasonal package",
  description,
  price,
  features,
  ctaLabel = "Request package pricing",
  ctaLink = { href: "/estimate" },
  featured = false,
}: PackageCardProps) {
  return (
    <article
      className={`tc tc-package-card ${featured ? "tc-package-featured" : ""}`}
    >
      <div className="tc-package-title">
        <h3>{name}</h3>
        {featured && <span>MORE SEASONAL CARE</span>}
      </div>
      {description && <p>{description}</p>}
      {price ? (
        <p className="tc-price">{price}</p>
      ) : (
        <p className="tc-price-note">Pricing for your system</p>
      )}
      <ul>
        {features
          ?.split("\n")
          .filter(Boolean)
          .map((feature, i) => (
            <li key={i}>
              <span aria-hidden="true">✓</span>
              {feature}
            </li>
          ))}
      </ul>
      <Button link={ctaLink} variant={featured ? "primary" : "outline"}>
        {ctaLabel}
      </Button>
    </article>
  );
}
