import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { ContentSection } from "./ContentSection";

export default declareComponent(ContentSection, {
  name: "Content Section",
  description:
    "Editorial content with a narrow or split layout and a content slot.",
  group: "Content",
  props: {
    eyebrow: props.Text({
      name: "Eyebrow",
      group: "Content",
      tooltip: "Edit the eyebrow for this component.",
      defaultValue: "",
    }),
    heading: props.Text({
      name: "Heading",
      group: "Content",
      tooltip: "Edit the heading for this component.",
      defaultValue: "",
    }),
    body: props.Text({
      name: "Body",
      group: "Content",
      tooltip:
        "Edit the body for this component. Use clear, concise plain text.",
      defaultValue: "",
    }),
    children: props.Slot({
      name: "Content",
      group: "Composition",
      tooltip:
        "Insert native Webflow content or library components into content. Slots do not share React context.",
    }),
    theme: props.Variant({
      name: "Theme",
      group: "Appearance",
      tooltip: "Edit the theme for this component.",
      options: ["light", "cream", "dark"],
      defaultValue: "light",
    }),
    layout: props.Variant({
      name: "Layout",
      group: "Appearance",
      tooltip: "Edit the layout for this component.",
      options: ["narrow", "split"],
      defaultValue: "narrow",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
