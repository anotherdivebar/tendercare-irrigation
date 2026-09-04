import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { ServiceFeatureSection } from "./ServiceFeatureSection";

export default declareComponent(ServiceFeatureSection, {
  name: "Service Feature Section",
  description: "Image and text composition with an editable content slot.",
  group: "Services",
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
    image: props.Image({
      name: "Image",
      group: "Media",
      tooltip:
        "Select an approved photo from Webflow Assets and set meaningful alt text.",
    }),
    imageAlt: props.Text({
      name: "Image description",
      group: "Media",
      tooltip: "Edit the image description for this component.",
      defaultValue: "",
    }),
    caption: props.Text({
      name: "Caption",
      group: "Content",
      tooltip: "Edit the caption for this component.",
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
    alignment: props.Variant({
      name: "Alignment",
      group: "Appearance",
      tooltip: "Edit the alignment for this component.",
      options: ["image-left", "image-right"],
      defaultValue: "image-left",
    }),
    theme: props.Variant({
      name: "Theme",
      group: "Appearance",
      tooltip: "Edit the theme for this component.",
      options: ["light", "cream", "dark"],
      defaultValue: "cream",
    }),
    children: props.Slot({
      name: "Content",
      group: "Composition",
      tooltip:
        "Insert native Webflow content or library components into content. Slots do not share React context.",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
