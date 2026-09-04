import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { BlogArticle } from "./BlogArticle";

export default declareComponent(BlogArticle, {
  name: "Blog Article",
  description:
    "Article template with rich content, table of contents, related articles and service CTA slots.",
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
    author: props.Text({
      name: "Author",
      group: "Content",
      tooltip: "Edit the author for this component.",
      defaultValue: "",
    }),
    publishedDate: props.Text({
      name: "Published date",
      group: "Content",
      tooltip: "Edit the published date for this component.",
      defaultValue: "",
    }),
    updatedDate: props.Text({
      name: "Updated date",
      group: "Content",
      tooltip: "Edit the updated date for this component.",
      defaultValue: "",
    }),
    image: props.Image({
      name: "Image",
      group: "Media",
      tooltip:
        "Select an approved photo from Webflow Assets and set meaningful alt text.",
    }),
    children: props.Slot({
      name: "Article content",
      group: "Composition",
      tooltip:
        "Insert native Webflow content or library components into article content. Slots do not share React context.",
    }),
    tableOfContents: props.Slot({
      name: "Table of contents",
      group: "Composition",
      tooltip:
        "Insert native Webflow content or library components into table of contents. Slots do not share React context.",
    }),
    relatedArticles: props.Slot({
      name: "Related articles",
      group: "Composition",
      tooltip:
        "Insert native Webflow content or library components into related articles. Slots do not share React context.",
    }),
    serviceCTA: props.Slot({
      name: "Related service call to action",
      group: "Composition",
      tooltip:
        "Insert native Webflow content or library components into related service call to action. Slots do not share React context.",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
