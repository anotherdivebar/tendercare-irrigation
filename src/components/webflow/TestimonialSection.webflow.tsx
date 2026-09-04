import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { TestimonialSection } from "./TestimonialSection";

export default declareComponent(TestimonialSection, {
  name: "Testimonial Section",
  description:
    "Review collection. Hidden until approved reviews are supplied and visibility is enabled.",
  group: "Social Proof",
  props: {
    eyebrow: props.Text({
      name: "Eyebrow",
      group: "Content",
      tooltip: "Edit the eyebrow for this component.",
      defaultValue: "From our customers",
    }),
    heading: props.Text({
      name: "Heading",
      group: "Content",
      tooltip: "Edit the heading for this component.",
      defaultValue: "Care that makes a difference.",
    }),
    children: props.Slot({
      name: "Verified reviews",
      group: "Composition",
      tooltip:
        "Insert native Webflow content or library components into verified reviews. Slots do not share React context.",
    }),
    visible: props.Visibility({
      name: "Visible",
      group: "Appearance",
      tooltip: "Edit the visible for this component.",
      defaultValue: false,
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
