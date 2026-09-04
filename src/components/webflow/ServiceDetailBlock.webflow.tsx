import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { ServiceDetailBlock } from "./ServiceDetailBlock";

export default declareComponent(ServiceDetailBlock, {
  name: "Service Detail Block",
  description:
    "Answer-first service section with symptoms, approach and supporting content.",
  group: "Services",
  props: {
    number: props.Text({
      name: "Number",
      group: "Content",
      tooltip: "Edit the number for this component.",
      defaultValue: "01",
    }),
    serviceName: props.Text({
      name: "Service name",
      group: "Content",
      tooltip: "Edit the service name for this component.",
      defaultValue: "",
    }),
    heading: props.Text({
      name: "Heading",
      group: "Content",
      tooltip: "Edit the heading for this component.",
      defaultValue: "",
    }),
    answer: props.Text({
      name: "Answer",
      group: "Content",
      tooltip:
        "Edit the answer for this component. Use clear, concise plain text.",
      defaultValue: "",
    }),
    body: props.Text({
      name: "Body",
      group: "Content",
      tooltip:
        "Edit the body for this component. Use clear, concise plain text.",
      defaultValue: "",
    }),
    symptoms: props.Text({
      name: "Symptoms",
      group: "Content",
      tooltip: "Edit the symptoms for this component. Enter one item per line.",
      defaultValue: "",
    }),
    approach: props.Text({
      name: "Approach",
      group: "Content",
      tooltip:
        "Edit the approach for this component. Use clear, concise plain text.",
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
    children: props.Slot({
      name: "Content",
      group: "Composition",
      tooltip:
        "Insert native Webflow content or library components into content. Slots do not share React context.",
    }),
    ctaLabel: props.Text({
      name: "Button label",
      group: "Links",
      tooltip: "Edit the button label for this component.",
      defaultValue: "Request an estimate",
    }),
    ctaLink: props.Link({
      name: "Button destination",
      group: "Links",
      tooltip: "Choose the destination page, section, URL or phone link.",
    }),
    theme: props.Variant({
      name: "Theme",
      group: "Appearance",
      tooltip: "Edit the theme for this component.",
      options: ["light", "cream", "dark"],
      defaultValue: "light",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
