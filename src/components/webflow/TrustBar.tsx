import { Container } from "../ui";
export interface TrustBarProps {
  first?: string;
  second?: string;
  third?: string;
  fourth?: string;
}
export function TrustBar({
  first = "New systems & targeted repairs",
  second = "Drainage planned around the site",
  third = "Smart controls & seasonal service",
  fourth = "Serving the Wichita metro",
}: TrustBarProps) {
  return (
    <div className="tc tc-trust">
      <Container>
        {[first, second, third, fourth].filter(Boolean).map((item, i) => (
          <span key={i}>
            <span className="tc-trust-mark" aria-hidden="true">
              +
            </span>
            {item}
          </span>
        ))}
      </Container>
    </div>
  );
}
