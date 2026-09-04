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
      defaultValue: "New systems & targeted repairs",
    }),
    second: props.Text({
      name: "Second",
      group: "Content",
      tooltip: "Edit the second for this component.",
      defaultValue: "Drainage planned around the site",
    }),
    third: props.Text({
      name: "Third",
      group: "Content",
      tooltip: "Edit the third for this component.",
      defaultValue: "Smart controls & seasonal service",
    }),
    fourth: props.Text({
      name: "Fourth",
      group: "Content",
      tooltip: "Edit the fourth for this component.",
      defaultValue: "Serving the Wichita metro",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
