import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { ServiceCategoryGrid } from "./ServiceCategoryGrid";

export default declareComponent(ServiceCategoryGrid, {
  name: "Service Category Grid",
  description:
    "Services overview. Place Service Card components in the Cards slot.",
  group: "Services",
  props: {
    eyebrow: props.Text({
      name: "Eyebrow",
      group: "Content",
      tooltip: "Edit the eyebrow for this component.",
      defaultValue: "What we do",
    }),
    heading: props.Text({
      name: "Heading",
      group: "Content",
      tooltip: "Edit the heading for this component.",
      defaultValue: "The right water.\nIn the right places.",
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
      defaultValue: "",
    }),
    ctaLink: props.Link({
      name: "Button destination",
      group: "Links",
      tooltip: "Choose the destination page, section, URL or phone link.",
    }),
    children: props.Slot({
      name: "Service cards",
      group: "Composition",
      tooltip:
        "Insert native Webflow content or library components into service cards. Slots do not share React context.",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
