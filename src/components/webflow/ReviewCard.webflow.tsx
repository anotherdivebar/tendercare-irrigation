import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { ReviewCard } from "./ReviewCard";

export default declareComponent(ReviewCard, {
  name: "Review Card",
  description:
    "A sourced customer quote. Hidden until the Verified checkbox is enabled.",
  group: "Social Proof",
  props: {
    quote: props.Text({
      name: "Quote",
      group: "Content",
      tooltip:
        "Edit the quote for this component. Use clear, concise plain text.",
      defaultValue: "",
    }),
    customer: props.Text({
      name: "Customer",
      group: "Content",
      tooltip: "Edit the customer for this component.",
      defaultValue: "",
    }),
    location: props.Text({
      name: "Location",
      group: "Content",
      tooltip: "Edit the location for this component.",
      defaultValue: "",
    }),
    sourceLabel: props.Text({
      name: "Source label",
      group: "Links",
      tooltip: "Edit the source label for this component.",
      defaultValue: "",
    }),
    sourceLink: props.Link({
      name: "Original source link",
      group: "Links",
      tooltip: "Choose the destination page, section, URL or phone link.",
    }),
    verified: props.Visibility({
      name: "Review verified by client",
      group: "Content",
      tooltip:
        "Enable only after verifying the quote, identity, source and permission to publish.",
      defaultValue: false,
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
