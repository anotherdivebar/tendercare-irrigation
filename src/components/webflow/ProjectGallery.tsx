import type { ReactNode } from "react";
import { Section, SectionIntro, type Theme } from "../ui";
export interface ProjectGalleryProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  children?: ReactNode;
  theme?: Theme;
}
export function ProjectGallery({
  eyebrow = "Recent field work",
  heading = "Irrigation work,\nfrom trench to coverage.",
  body,
  children,
  theme = "light",
}: ProjectGalleryProps) {
  return (
    <Section theme={theme} className="tc-gallery-section">
      <SectionIntro eyebrow={eyebrow} heading={heading} body={body} />
      <div className="tc-gallery">{children}</div>
    </Section>
  );
}
