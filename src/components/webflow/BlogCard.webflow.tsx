import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { BlogCard } from "./BlogCard";

export default declareComponent(BlogCard, {
  name: "Blog Card",
  description:
    "CMS-ready article summary. Supply an approved article destination.",
  group: "Content",
  props: {
    title: props.Text({
      name: "Title",
      group: "Content",
      tooltip: "Edit the title for this component.",
      defaultValue: "Article title",
    }),
    excerpt: props.Text({
      name: "Excerpt",
      group: "Content",
      tooltip:
        "Edit the excerpt for this component. Use clear, concise plain text.",
      defaultValue: "",
    }),
    category: props.Text({
      name: "Category",
      group: "Content",
      tooltip: "Edit the category for this component.",
      defaultValue: "",
    }),
    publishedLabel: props.Text({
      name: "Published label",
      group: "Links",
      tooltip: "Edit the published label for this component.",
      defaultValue: "",
    }),
    image: props.Image({
      name: "Image",
      group: "Media",
      tooltip:
        "Select an approved photo from Webflow Assets and set meaningful alt text.",
    }),
    link: props.Link({
      name: "Link",
      group: "Links",
      tooltip: "Choose the destination page, section, URL or phone link.",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
