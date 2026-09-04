import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { Header } from "./Header";

export default declareComponent(Header, {
  name: "Header",
  description:
    "Responsive header with an editable Services submenu and inline mobile disclosure.",
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
      defaultValue: "Get a free estimate",
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
    showServicesMenu: props.Visibility({
      name: "Show services menu",
      group: "Services menu",
      tooltip:
        "Show the built-in Services disclosure on desktop and mobile navigation.",
      defaultValue: true,
    }),
    servicesLabel: props.Text({
      name: "Menu label",
      group: "Services menu",
      tooltip: "Label for the button that opens the service links.",
      defaultValue: "Services",
    }),
    allServicesLabel: props.Text({
      name: "All services label",
      group: "Services menu",
      tooltip: "Edit the label for the services overview link.",
      defaultValue: "All services",
    }),
    allServicesLink: props.Link({
      name: "All services destination",
      group: "Services menu",
      tooltip: "Choose the services overview page.",
    }),
    irrigationLabel: props.Text({
      name: "Irrigation label",
      group: "Services menu",
      tooltip: "Edit the irrigation category label.",
      defaultValue: "Irrigation systems",
    }),
    irrigationLink: props.Link({
      name: "Irrigation destination",
      group: "Services menu",
      tooltip: "Choose the irrigation systems page.",
    }),
    drainageLabel: props.Text({
      name: "Drainage label",
      group: "Services menu",
      tooltip: "Edit the drainage category label.",
      defaultValue: "Drainage solutions",
    }),
    drainageLink: props.Link({
      name: "Drainage destination",
      group: "Services menu",
      tooltip: "Choose the drainage solutions page.",
    }),
    seasonalLabel: props.Text({
      name: "Smart and seasonal label",
      group: "Services menu",
      tooltip: "Edit the smart and seasonal category label.",
      defaultValue: "Smart & seasonal services",
    }),
    seasonalLink: props.Link({
      name: "Smart and seasonal destination",
      group: "Services menu",
      tooltip: "Choose the smart upgrades and seasonal services page.",
    }),
    links: props.Slot({
      name: "Other navigation links",
      group: "Composition",
      tooltip:
        "Insert About, Resources, FAQ and Contact links. Services are configured above. Slots do not share React context.",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
