import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { FAQAccordion } from "./FAQAccordion";

export default declareComponent(FAQAccordion, {
  name: "FAQ Accordion",
  description:
    "Question group. Insert FAQ Item components in the Questions slot.",
  group: "Content",
  props: {
    eyebrow: props.Text({
      name: "Eyebrow",
      group: "Content",
      tooltip: "Edit the eyebrow for this component.",
      defaultValue: "A little clarity",
    }),
    heading: props.Text({
      name: "Heading",
      group: "Content",
      tooltip: "Edit the heading for this component.",
      defaultValue: "Good questions.\nStraight answers.",
    }),
    body: props.Text({
      name: "Body",
      group: "Content",
      tooltip:
        "Edit the body for this component. Use clear, concise plain text.",
      defaultValue: "",
    }),
    ctaLabel: props.Text({
      name: "Button label",
      group: "Links",
      tooltip: "Edit the button label for this component.",
      defaultValue: "Visit our FAQ",
    }),
    ctaLink: props.Link({
      name: "Button destination",
      group: "Links",
      tooltip: "Choose the destination page, section, URL or phone link.",
    }),
    children: props.Slot({
      name: "Questions",
      group: "Composition",
      tooltip:
        "Insert native Webflow content or library components into questions. Slots do not share React context.",
    }),
    variant: props.Variant({
      name: "Variant",
      group: "Appearance",
      tooltip: "Edit the variant for this component.",
      options: ["split", "full"],
      defaultValue: "split",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
