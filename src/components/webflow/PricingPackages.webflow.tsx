import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { PricingPackages } from "./PricingPackages";

export default declareComponent(PricingPackages, {
  name: "Pricing Packages",
  description:
    "City/well water comparison. Add Package Cards to each water-source slot.",
  group: "Services",
  props: {
    eyebrow: props.Text({
      name: "Eyebrow",
      group: "Content",
      tooltip: "Edit the eyebrow for this component.",
      defaultValue: "Care through the seasons",
    }),
    heading: props.Text({
      name: "Heading",
      group: "Content",
      tooltip: "Edit the heading for this component.",
      defaultValue: "A little planning.\nA healthier year ahead.",
    }),
    body: props.Text({
      name: "Body",
      group: "Content",
      tooltip:
        "Edit the body for this component. Use clear, concise plain text.",
      defaultValue:
        "Explore seasonal care for your water source. Request current package pricing for your system.",
    }),
    cityWater: props.Slot({
      name: "City-water packages",
      group: "Composition",
      tooltip:
        "Insert native Webflow content or library components into city-water packages. Slots do not share React context.",
    }),
    wellWater: props.Slot({
      name: "Well-water packages",
      group: "Composition",
      tooltip:
        "Insert native Webflow content or library components into well-water packages. Slots do not share React context.",
    }),
    note: props.Text({
      name: "Note",
      group: "Content",
      tooltip:
        "Edit the note for this component. Use clear, concise plain text.",
      defaultValue: "",
    }),
    cityLabel: props.Text({
      name: "City label",
      group: "Links",
      tooltip: "Edit the city label for this component.",
      defaultValue: "City water",
    }),
    wellLabel: props.Text({
      name: "Well label",
      group: "Links",
      tooltip: "Edit the well label for this component.",
      defaultValue: "Well water",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
