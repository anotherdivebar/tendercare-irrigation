import { Container, linkAttributes, type LinkValue } from "../ui";
export interface BreadcrumbsProps {
  currentLabel?: string;
  parentLabel?: string;
  parentLink?: LinkValue;
}
export function Breadcrumbs({
  currentLabel,
  parentLabel,
  parentLink,
}: BreadcrumbsProps) {
  return (
    <nav className="tc tc-breadcrumbs" aria-label="Breadcrumb">
      <Container>
        <ol>
          <li>
            <a href="/">Home</a>
          </li>
          {parentLabel && parentLink?.href && (
            <li>
              <a {...linkAttributes(parentLink)}>{parentLabel}</a>
            </li>
          )}
          {currentLabel && <li aria-current="page">{currentLabel}</li>}
        </ol>
      </Container>
    </nav>
  );
}
