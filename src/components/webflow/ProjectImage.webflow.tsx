import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { ProjectImage } from "./ProjectImage";

export default declareComponent(ProjectImage, {
  name: "Project Image",
  description: "Project photo with keyboard-accessible native lightbox.",
  group: "Media",
  props: {
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
    caption: props.Text({
      name: "Caption",
      group: "Content",
      tooltip: "Edit the caption for this component.",
      defaultValue: "",
    }),
    category: props.Text({
      name: "Category",
      group: "Content",
      tooltip: "Edit the category for this component.",
      defaultValue: "",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
