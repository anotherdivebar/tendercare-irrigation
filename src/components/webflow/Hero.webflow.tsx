import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { Hero } from "./Hero";

export default declareComponent(Hero, {
  name: "Hero",
  description:
    "Page introduction with one H1, optional image and two calls to action. Use once per page.",
  group: "Content",
  props: {
    eyebrow: props.Text({
      name: "Eyebrow",
      group: "Content",
      tooltip: "Edit the eyebrow for this component.",
      defaultValue: "Wichita, Kansas · Irrigation & drainage",
    }),
    heading: props.Text({
      name: "Heading",
      group: "Content",
      tooltip: "Edit the heading for this component.",
      defaultValue: "Thoughtful water management.",
    }),
    accent: props.Text({
      name: "Accent",
      group: "Content",
      tooltip: "Edit the accent for this component.",
      defaultValue: "A better place to come home to.",
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
      defaultValue: "",
    }),
    secondaryLink: props.Link({
      name: "Secondary destination",
      group: "Links",
      tooltip: "Choose the destination page, section, URL or phone link.",
    }),
    caption: props.Text({
      name: "Caption",
      group: "Content",
      tooltip: "Edit the caption for this component.",
      defaultValue: "",
    }),
    variant: props.Variant({
      name: "Variant",
      group: "Appearance",
      tooltip: "Edit the variant for this component.",
      options: ["split", "compact"],
      defaultValue: "split",
    }),
    imagePosition: props.Text({
      name: "Image focal point",
      group: "Media",
      tooltip: "Edit the image focal point for this component.",
      defaultValue: "center",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
