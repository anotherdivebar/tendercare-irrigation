import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { Footer } from "./Footer";

export default declareComponent(Footer, {
  name: "Footer",
  description:
    "Business identity with navigation and service link slots. Unverified contact fields stay blank.",
  group: "Navigation",
  props: {
    businessName: props.Text({
      name: "Business name",
      group: "Content",
      tooltip: "Edit the business name for this component.",
      defaultValue: "TenderCare Irrigation",
    }),
    description: props.Text({
      name: "Description",
      group: "Content",
      tooltip:
        "Edit the description for this component. Use clear, concise plain text.",
      defaultValue:
        "Irrigation systems, seasonal service and water extensions for Wichita-area properties.",
    }),
    location: props.Text({
      name: "Location",
      group: "Content",
      tooltip: "Edit the location for this component.",
      defaultValue: "Serving Wichita & the surrounding metro.",
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
    logo: props.Image({
      name: "Logo",
      group: "Media",
      tooltip:
        "Select an approved photo from Webflow Assets and set meaningful alt text.",
    }),
    links: props.Slot({
      name: "Navigation links",
      group: "Composition",
      tooltip:
        "Insert native Webflow content or library components into navigation links. Slots do not share React context.",
    }),
    serviceLinks: props.Slot({
      name: "Service links",
      group: "Composition",
      tooltip:
        "Insert native Webflow content or library components into service links. Slots do not share React context.",
    }),
    copyright: props.Text({
      name: "Copyright",
      group: "Content",
      tooltip: "Edit the copyright for this component.",
      defaultValue: "© TenderCare Irrigation. All rights reserved.",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
