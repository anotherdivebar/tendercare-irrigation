import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { TrustBar } from "./TrustBar";

export default declareComponent(TrustBar, {
  name: "Trust Bar",
  description:
    "Four concise service principles. Enter only supportable business claims.",
  group: "Content",
  props: {
    first: props.Text({
      name: "First",
      group: "Content",
      tooltip: "Edit the first for this component.",
      defaultValue: "Built around your property",
    }),
    second: props.Text({
      name: "Second",
      group: "Content",
      tooltip: "Edit the second for this component.",
      defaultValue: "From installation to seasonal care",
    }),
    third: props.Text({
      name: "Third",
      group: "Content",
      tooltip: "Edit the third for this component.",
      defaultValue: "Water used with purpose",
    }),
    fourth: props.Text({
      name: "Fourth",
      group: "Content",
      tooltip: "Edit the fourth for this component.",
      defaultValue: "Wichita metro service",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
