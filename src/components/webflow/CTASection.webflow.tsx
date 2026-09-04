import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { CTASection } from "./CTASection";

export default declareComponent(CTASection, {
  name: "CTA Section",
  description: "Final call to action with primary and secondary links.",
  group: "Conversion",
  props: {
    eyebrow: props.Text({
      name: "Eyebrow",
      group: "Content",
      tooltip: "Edit the eyebrow for this component.",
      defaultValue: "Let’s take care of it",
    }),
    heading: props.Text({
      name: "Heading",
      group: "Content",
      tooltip: "Edit the heading for this component.",
      defaultValue: "A better yard starts here.",
    }),
    body: props.Text({
      name: "Body",
      group: "Content",
      tooltip:
        "Edit the body for this component. Use clear, concise plain text.",
      defaultValue:
        "Tell us about your property. We’ll help you find the right next step.",
    }),
    ctaLabel: props.Text({
      name: "Button label",
      group: "Links",
      tooltip: "Edit the button label for this component.",
      defaultValue: "Get free estimate",
    }),
    ctaLink: props.Link({
      name: "Button destination",
      group: "Links",
      tooltip: "Choose the destination page, section, URL or phone link.",
    }),
    secondaryLabel: props.Text({
      name: "Secondary button label",
      group: "Links",
      tooltip: "Edit the secondary button label for this component.",
      defaultValue: "Have a question?",
    }),
    secondaryLink: props.Link({
      name: "Secondary destination",
      group: "Links",
      tooltip: "Choose the destination page, section, URL or phone link.",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
