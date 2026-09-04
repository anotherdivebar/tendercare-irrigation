import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { BlogGrid } from "./BlogGrid";

export default declareComponent(BlogGrid, {
  name: "Blog Grid",
  description:
    "Resource listing with an honest empty state until articles are published.",
  group: "Content",
  props: {
    eyebrow: props.Text({
      name: "Eyebrow",
      group: "Content",
      tooltip: "Edit the eyebrow for this component.",
      defaultValue: "Irrigation resources",
    }),
    heading: props.Text({
      name: "Heading",
      group: "Content",
      tooltip: "Edit the heading for this component.",
      defaultValue: "Useful answers for\na better-working yard.",
    }),
    children: props.Slot({
      name: "Article cards",
      group: "Composition",
      tooltip:
        "Insert native Webflow content or library components into article cards. Slots do not share React context.",
    }),
    hasArticles: props.Visibility({
      name: "Show published articles",
      group: "Appearance",
      tooltip: "Edit the show published articles for this component.",
      defaultValue: false,
    }),
    emptyHeading: props.Text({
      name: "Empty heading",
      group: "Content",
      tooltip: "Edit the empty heading for this component.",
      defaultValue: "We’re working on the first articles.",
    }),
    emptyBody: props.Text({
      name: "Empty body",
      group: "Content",
      tooltip: "Edit the empty body for this component.",
      defaultValue:
        "For now, the FAQ covers common questions about repairs, drainage, seasonal care and irrigation controls.",
    }),
    ctaLabel: props.Text({
      name: "Button label",
      group: "Links",
      tooltip: "Edit the button label for this component.",
      defaultValue: "Browse common questions",
    }),
    ctaLink: props.Link({
      name: "Button destination",
      group: "Links",
      tooltip: "Choose the destination page, section, URL or phone link.",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
