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
  eyebrow = "How service starts",
  heading = "What happens after\nyou get in touch.",
  firstTitle = "Show us the problem",
  firstBody = "Tell us what you are seeing, where it is happening and what you want to change.",
  secondTitle = "Look at the whole system",
  secondBody = "The water source, equipment, grade and landscape all shape the recommendation.",
  thirdTitle = "Review the scope",
  thirdBody = "Review the recommended work and decide how you want to move forward.",
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
