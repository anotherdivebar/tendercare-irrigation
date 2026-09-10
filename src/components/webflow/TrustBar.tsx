import { Container } from "../ui";
export interface TrustBarProps {
  first?: string;
  second?: string;
  third?: string;
  fourth?: string;
}
export function TrustBar({
  first = "Locally family-owned since 1982",
  second = "Downspout & sump pump extensions",
  third = "Controllers, backflow & winterization",
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
