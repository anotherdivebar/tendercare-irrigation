import type { ReactNode } from "react";
import { Section, SectionIntro } from "../ui";
export interface TestimonialSectionProps {
  eyebrow?: string;
  heading?: string;
  children?: ReactNode;
  visible?: boolean;
}
export function TestimonialSection({
  eyebrow = "Customer feedback",
  heading = "What customers say about the work.",
  children,
  visible = false,
}: TestimonialSectionProps) {
  if (!visible || !children) return null;
  return (
    <Section theme="cream">
      <SectionIntro eyebrow={eyebrow} heading={heading} />
      <div className="tc-reviews">{children}</div>
    </Section>
  );
}
