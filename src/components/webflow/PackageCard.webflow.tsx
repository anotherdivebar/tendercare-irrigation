import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { PackageCard } from "./PackageCard";

export default declareComponent(PackageCard, {
  name: "Package Card",
  description:
    "Service package with optional verified price; leave price blank until confirmed.",
  group: "Services",
  props: {
    name: props.Text({
      name: "Name",
      group: "Content",
      tooltip: "Edit the name for this component.",
      defaultValue: "Seasonal package",
    }),
    description: props.Text({
      name: "Description",
      group: "Content",
      tooltip:
        "Edit the description for this component. Use clear, concise plain text.",
      defaultValue: "",
    }),
    price: props.Text({
      name: "Price",
      group: "Content",
      tooltip:
        "Leave blank for quote-based pricing. Enter a price only after client approval.",
      defaultValue: "",
    }),
    features: props.Text({
      name: "Features",
      group: "Content",
      tooltip: "Edit the features for this component. Enter one item per line.",
      defaultValue: "",
    }),
    ctaLabel: props.Text({
      name: "Button label",
      group: "Links",
      tooltip: "Edit the button label for this component.",
      defaultValue: "Request package pricing",
    }),
    ctaLink: props.Link({
      name: "Button destination",
      group: "Links",
      tooltip: "Choose the destination page, section, URL or phone link.",
    }),
    featured: props.Visibility({
      name: "Featured",
      group: "Appearance",
      tooltip: "Edit the featured for this component.",
      defaultValue: false,
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
