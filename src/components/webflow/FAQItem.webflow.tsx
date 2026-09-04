import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { FAQItem } from "./FAQItem";

export default declareComponent(FAQItem, {
  name: "FAQ Item",
  description:
    "Native disclosure for a question, answer and optional supporting source.",
  group: "Content",
  props: {
    question: props.Text({
      name: "Question",
      group: "Content",
      tooltip: "Edit the question for this component.",
      defaultValue: "How can we help?",
    }),
    answer: props.Text({
      name: "Answer",
      group: "Content",
      tooltip:
        "Edit the answer for this component. Use clear, concise plain text.",
      defaultValue: "",
    }),
    linkLabel: props.Text({
      name: "Link label",
      group: "Links",
      tooltip: "Edit the link label for this component.",
      defaultValue: "",
    }),
    link: props.Link({
      name: "Link",
      group: "Links",
      tooltip: "Choose the destination page, section, URL or phone link.",
    }),
    sourceLabel: props.Text({
      name: "Source label",
      group: "Links",
      tooltip: "Edit the source label for this component.",
      defaultValue: "",
    }),
    sourceLink: props.Link({
      name: "Original source link",
      group: "Links",
      tooltip: "Choose the destination page, section, URL or phone link.",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
