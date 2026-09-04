import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { Breadcrumbs } from "./Breadcrumbs";

export default declareComponent(Breadcrumbs, {
  name: "Breadcrumbs",
  description:
    "Visible breadcrumb trail. Configure matching structured data in native page settings.",
  group: "Navigation",
  props: {
    currentLabel: props.Text({
      name: "Current label",
      group: "Links",
      tooltip: "Edit the current label for this component.",
      defaultValue: "",
    }),
    parentLabel: props.Text({
      name: "Parent label",
      group: "Links",
      tooltip: "Edit the parent label for this component.",
      defaultValue: "",
    }),
    parentLink: props.Link({
      name: "Parent link",
      group: "Links",
      tooltip: "Choose the destination page, section, URL or phone link.",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
