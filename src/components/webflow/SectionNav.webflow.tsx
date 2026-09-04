import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { SectionNav } from "./SectionNav";
export default declareComponent(SectionNav, {
  name: "Section Navigation",
  description:
    "Compact navigation for long service pages. Collapses into an accessible topic menu on mobile.",
  group: "Navigation",
  props: {
    label: props.Text({
      name: "Menu label",
      group: "Content",
      tooltip: "A short description such as Explore irrigation services.",
      defaultValue: "On this page",
    }),
    children: props.Slot({
      name: "Topic links",
      group: "Composition",
      tooltip:
        "Add Nav Link components pointing to native Webflow section wrapper IDs. Use short labels.",
    }),
    ctaLabel: props.Text({
      name: "Estimate link label",
      group: "Links",
      tooltip: "Optional action shown beside the topics on larger screens.",
      defaultValue: "Get free estimate",
    }),
    ctaLink: props.Link({
      name: "Estimate destination",
      group: "Links",
      tooltip:
        "Choose the estimate page. You may include a supported service query parameter.",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
