import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { ServiceCard } from "./ServiceCard";

export default declareComponent(ServiceCard, {
  name: "Service Card",
  description:
    "Service category image, description and descriptive destination link.",
  group: "Services",
  props: {
    number: props.Text({
      name: "Number",
      group: "Content",
      tooltip: "Edit the number for this component.",
      defaultValue: "01",
    }),
    heading: props.Text({
      name: "Heading",
      group: "Content",
      tooltip: "Edit the heading for this component.",
      defaultValue: "Irrigation systems",
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
    link: props.Link({
      name: "Link",
      group: "Links",
      tooltip: "Choose the destination page, section, URL or phone link.",
    }),
    linkLabel: props.Text({
      name: "Link label",
      group: "Links",
      tooltip: "Edit the link label for this component.",
      defaultValue: "Explore service",
    }),
    services: props.Text({
      name: "Services",
      group: "Content",
      tooltip: "Edit the services for this component.",
      defaultValue: "",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
