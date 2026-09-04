import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { Header } from "./Header";

export default declareComponent(Header, {
  name: "Header",
  description:
    "Responsive header with a single navigation slot and inline mobile disclosure.",
  group: "Navigation",
  props: {
    tagline: props.Text({
      name: "Service summary",
      group: "Content",
      tooltip: "Short service description in the desktop utility bar.",
      defaultValue: "Irrigation · Drainage · Water management",
    }),
    businessName: props.Text({
      name: "Business name",
      group: "Content",
      tooltip: "Edit the business name for this component.",
      defaultValue: "TenderCare Irrigation",
    }),
    logo: props.Image({
      name: "Logo",
      group: "Media",
      tooltip:
        "Select an approved photo from Webflow Assets and set meaningful alt text.",
    }),
    homeLink: props.Link({
      name: "Homepage link",
      group: "Links",
      tooltip: "Choose the destination page, section, URL or phone link.",
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
    phone: props.Text({
      name: "Phone",
      group: "Content",
      tooltip:
        "Leave blank until verified by the client. Never publish placeholder business details.",
      defaultValue: "",
    }),
    location: props.Text({
      name: "Location",
      group: "Content",
      tooltip: "Edit the location for this component.",
      defaultValue: "Wichita & the surrounding metro",
    }),
    links: props.Slot({
      name: "Navigation links",
      group: "Composition",
      tooltip:
        "Insert native Webflow content or library components into navigation links. Slots do not share React context.",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
