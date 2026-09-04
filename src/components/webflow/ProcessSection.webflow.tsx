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
      defaultValue: "A clear path forward",
    }),
    heading: props.Text({
      name: "Heading",
      group: "Content",
      tooltip: "Edit the heading for this component.",
      defaultValue: "Good work starts with\na good understanding.",
    }),
    firstTitle: props.Text({
      name: "First title",
      group: "Content",
      tooltip: "Edit the first title for this component.",
      defaultValue: "Tell us what’s happening",
    }),
    firstBody: props.Text({
      name: "First body",
      group: "Content",
      tooltip: "Edit the first body for this component.",
      defaultValue:
        "Share your property details and what you would like to improve.",
    }),
    secondTitle: props.Text({
      name: "Second title",
      group: "Content",
      tooltip: "Edit the second title for this component.",
      defaultValue: "Understand the property",
    }),
    secondBody: props.Text({
      name: "Second body",
      group: "Content",
      tooltip: "Edit the second body for this component.",
      defaultValue:
        "Discuss the system, the landscape and the right approach for your needs.",
    }),
    thirdTitle: props.Text({
      name: "Third title",
      group: "Content",
      tooltip: "Edit the third title for this component.",
      defaultValue: "Make a plan for the work",
    }),
    thirdBody: props.Text({
      name: "Third body",
      group: "Content",
      tooltip: "Edit the third body for this component.",
      defaultValue:
        "Review the proposed scope and confirm the next steps before work begins.",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
