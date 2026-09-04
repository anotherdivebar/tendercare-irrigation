import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { NavLink } from "./NavLink";

export default declareComponent(NavLink, {
  name: "Nav Link",
  description: "A navigation link for Header and Footer slots.",
  group: "Navigation",
  props: {
    autoCurrent: props.Visibility({
      name: "Identify current page automatically",
      group: "Behavior",
      tooltip:
        "Mark this link when its destination matches the current page or service category. Can be disabled for custom navigation.",
      defaultValue: true,
    }),
    label: props.Text({
      name: "Label",
      group: "Content",
      tooltip: "Edit the label for this component.",
      defaultValue: "Services",
    }),
    link: props.Link({
      name: "Link",
      group: "Links",
      tooltip: "Choose the destination page, section, URL or phone link.",
    }),
    current: props.Visibility({
      name: "Current page",
      group: "Appearance",
      tooltip: "Edit the current page for this component.",
      defaultValue: false,
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
