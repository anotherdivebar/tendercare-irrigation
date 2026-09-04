import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { ContactSection } from "./ContactSection";

export default declareComponent(ContactSection, {
  name: "Contact Section",
  description:
    "Verified contact information beside a form slot. Blank contact fields are omitted.",
  group: "Conversion",
  props: {
    serviceArea: props.Text({
      name: "Service area",
      group: "Content",
      tooltip:
        "Enter verified communities served; do not imply an office location.",
      defaultValue: "Wichita & surrounding metro communities",
    }),
    eyebrow: props.Text({
      name: "Eyebrow",
      group: "Content",
      tooltip: "Edit the eyebrow for this component.",
      defaultValue: "Contact TenderCare",
    }),
    heading: props.Text({
      name: "Heading",
      group: "Content",
      tooltip: "Edit the heading for this component.",
      defaultValue: "Tell us what’s going on.",
    }),
    body: props.Text({
      name: "Body",
      group: "Content",
      tooltip:
        "Edit the body for this component. Use clear, concise plain text.",
      defaultValue:
        "Share the property location, the problem you are seeing and how you prefer to be reached.",
    }),
    phone: props.Text({
      name: "Phone",
      group: "Content",
      tooltip:
        "Leave blank until verified by the client. Never publish placeholder business details.",
      defaultValue: "",
    }),
    email: props.Text({
      name: "Email",
      group: "Content",
      tooltip:
        "Leave blank until verified by the client. Never publish placeholder business details.",
      defaultValue: "",
    }),
    address: props.Text({
      name: "Address",
      group: "Content",
      tooltip:
        "Leave blank until verified by the client. Never publish placeholder business details.",
      defaultValue: "",
    }),
    hours: props.Text({
      name: "Hours",
      group: "Content",
      tooltip:
        "Leave blank until verified by the client. Never publish placeholder business details.",
      defaultValue: "",
    }),
    children: props.Slot({
      name: "Form",
      group: "Composition",
      tooltip:
        "Insert native Webflow content or library components into form. Slots do not share React context.",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
