import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { ProjectGallery } from "./ProjectGallery";

export default declareComponent(ProjectGallery, {
  name: "Project Gallery",
  description:
    "Editorial photo gallery. Insert Project Image components in the Images slot.",
  group: "Media",
  props: {
    eyebrow: props.Text({
      name: "Eyebrow",
      group: "Content",
      tooltip: "Edit the eyebrow for this component.",
      defaultValue: "Out in the field",
    }),
    heading: props.Text({
      name: "Heading",
      group: "Content",
      tooltip: "Edit the heading for this component.",
      defaultValue: "Real work.\nFrom the ground up.",
    }),
    body: props.Text({
      name: "Body",
      group: "Content",
      tooltip:
        "Edit the body for this component. Use clear, concise plain text.",
      defaultValue: "",
    }),
    children: props.Slot({
      name: "Images",
      group: "Composition",
      tooltip:
        "Insert native Webflow content or library components into images. Slots do not share React context.",
    }),
    theme: props.Variant({
      name: "Theme",
      group: "Appearance",
      tooltip: "Edit the theme for this component.",
      options: ["light", "cream", "dark"],
      defaultValue: "light",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
