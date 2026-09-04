import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { ServiceAreaSection } from "./ServiceAreaSection";

export default declareComponent(ServiceAreaSection, {
  name: "Service Area Section",
  description: "Wichita service-area section with an editable community list.",
  group: "Conversion",
  props: {
    eyebrow: props.Text({
      name: "Eyebrow",
      group: "Content",
      tooltip: "Edit the eyebrow for this component.",
      defaultValue: "Wichita-area service",
    }),
    heading: props.Text({
      name: "Heading",
      group: "Content",
      tooltip: "Edit the heading for this component.",
      defaultValue: "Service across Wichita\nand nearby communities.",
    }),
    body: props.Text({
      name: "Body",
      group: "Content",
      tooltip:
        "Edit the body for this component. Use clear, concise plain text.",
      defaultValue:
        "TenderCare serves Wichita and the surrounding metro. Enter your address or ZIP to check availability for your property.",
    }),
    communities: props.Text({
      name: "Communities",
      group: "Content",
      tooltip:
        "Edit the communities for this component. Enter one item per line.",
      defaultValue: "Wichita\nDerby\nAndover\nMaize\nHaysville\nGoddard",
    }),
    ctaLabel: props.Text({
      name: "Button label",
      group: "Links",
      tooltip: "Edit the button label for this component.",
      defaultValue: "Check your ZIP",
    }),
    ctaLink: props.Link({
      name: "Button destination",
      group: "Links",
      tooltip: "Choose the destination page, section, URL or phone link.",
    }),
    note: props.Text({
      name: "Note",
      group: "Content",
      tooltip:
        "Edit the note for this component. Use clear, concise plain text.",
      defaultValue: "Outside these cities? Ask about your property.",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
