import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { ProcessSection } from "./ProcessSection";

export default declareComponent(ProcessSection, {
  name: "Process Section",
  description: "Three editable steps explaining the service process.",
  group: "Services",
  props: {
    eyebrow: props.Text({
      name: "Eyebrow",
      group: "Content",
      tooltip: "Edit the eyebrow for this component.",
      defaultValue: "How service starts",
    }),
    heading: props.Text({
      name: "Heading",
      group: "Content",
      tooltip: "Edit the heading for this component.",
      defaultValue: "What happens after\nyou get in touch.",
    }),
    firstTitle: props.Text({
      name: "First title",
      group: "Content",
      tooltip: "Edit the first title for this component.",
      defaultValue: "Show us the problem",
    }),
    firstBody: props.Text({
      name: "First body",
      group: "Content",
      tooltip: "Edit the first body for this component.",
      defaultValue:
        "Tell us what you are seeing, where it is happening and what you want to change.",
    }),
    secondTitle: props.Text({
      name: "Second title",
      group: "Content",
      tooltip: "Edit the second title for this component.",
      defaultValue: "Look at the whole system",
    }),
    secondBody: props.Text({
      name: "Second body",
      group: "Content",
      tooltip: "Edit the second body for this component.",
      defaultValue:
        "The water source, equipment, grade and landscape all shape the recommendation.",
    }),
    thirdTitle: props.Text({
      name: "Third title",
      group: "Content",
      tooltip: "Edit the third title for this component.",
      defaultValue: "Review the scope",
    }),
    thirdBody: props.Text({
      name: "Third body",
      group: "Content",
      tooltip: "Edit the third body for this component.",
      defaultValue:
        "Review the recommended work and decide how you want to move forward.",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
