import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { BeforeAfterGallery } from "./BeforeAfterGallery";

export default declareComponent(BeforeAfterGallery, {
  name: "Before After Gallery",
  description:
    "Accessible image comparison. Remains hidden until both matched images are provided.",
  group: "Media",
  props: {
    before: props.Image({
      name: "Before",
      group: "Media",
      tooltip:
        "Select an approved photo from Webflow Assets and set meaningful alt text.",
    }),
    after: props.Image({
      name: "After",
      group: "Media",
      tooltip:
        "Select an approved photo from Webflow Assets and set meaningful alt text.",
    }),
    heading: props.Text({
      name: "Heading",
      group: "Content",
      tooltip: "Edit the heading for this component.",
      defaultValue: "See the difference",
    }),
    beforeLabel: props.Text({
      name: "Before label",
      group: "Links",
      tooltip: "Edit the before label for this component.",
      defaultValue: "Before",
    }),
    afterLabel: props.Text({
      name: "After label",
      group: "Links",
      tooltip: "Edit the after label for this component.",
      defaultValue: "After",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
