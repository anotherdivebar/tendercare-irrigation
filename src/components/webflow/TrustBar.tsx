import { Container } from "../ui";
export interface TrustBarProps {
  first?: string;
  second?: string;
  third?: string;
  fourth?: string;
}
export function TrustBar({
  first = "Built around your property",
  second = "From installation to seasonal care",
  third = "Water used with purpose",
  fourth = "Wichita metro service",
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
