import type { ReactNode } from "react";
import { Section, Eyebrow, Heading, type Theme } from "../ui";
export interface ContentSectionProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  children?: ReactNode;
  theme?: Theme;
  layout?: "narrow" | "split";
}
export function ContentSection({
  eyebrow,
  heading,
  body,
  children,
  theme = "light",
  layout = "narrow",
}: ContentSectionProps) {
  return (
    <Section theme={theme} className={`tc-content tc-content-${layout}`}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading>{heading}</Heading>
      </div>
      <div className="tc-prose">
        {body && <p className="tc-lead">{body}</p>}
        {children}
      </div>
    </Section>
  );
}
