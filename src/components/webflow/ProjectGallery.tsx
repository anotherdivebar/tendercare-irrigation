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
  eyebrow = "Out in the field",
  heading = "Real work.\nFrom the ground up.",
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
