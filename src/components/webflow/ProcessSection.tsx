import { Section, SectionIntro } from "../ui";
export interface ProcessSectionProps {
  eyebrow?: string;
  heading?: string;
  firstTitle?: string;
  firstBody?: string;
  secondTitle?: string;
  secondBody?: string;
  thirdTitle?: string;
  thirdBody?: string;
}
export function ProcessSection({
  eyebrow = "A clear path forward",
  heading = "Good work starts with\na good understanding.",
  firstTitle = "Tell us what’s happening",
  firstBody = "Share your property details and what you would like to improve.",
  secondTitle = "Understand the property",
  secondBody = "Discuss the system, the landscape and the right approach for your needs.",
  thirdTitle = "Make a plan for the work",
  thirdBody = "Review the proposed scope and confirm the next steps before work begins.",
}: ProcessSectionProps) {
  return (
    <Section>
      <SectionIntro eyebrow={eyebrow} heading={heading} />
      <ol className="tc-process">
        {[
          [firstTitle, firstBody],
          [secondTitle, secondBody],
          [thirdTitle, thirdBody],
        ].map(([title, body], i) => (
          <li key={i}>
            <span className="tc-process-number">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
