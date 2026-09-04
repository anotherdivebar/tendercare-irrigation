import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { EstimateForm } from "./EstimateForm";
import type { EstimateFormProps } from "./EstimateForm";
import { webflowIntegration } from "../../webflow/integration";
const WebflowEstimateForm = (
  properties: Omit<EstimateFormProps, "endpoint">,
) => (
  <EstimateForm
    {...properties}
    endpoint={webflowIntegration.estimateEndpoint}
  />
);

export default declareComponent(WebflowEstimateForm, {
  name: "Estimate Form",
  description:
    "Accessible inquiry form with validation. Transport is configured in Git; no endpoint means no transmission.",
  group: "Forms",
  props: {
    defaultService: props.Variant({
      name: "Default service",
      group: "Form behavior",
      tooltip:
        "Preselect a service for a dedicated landing page. Visitors can change it.",
      options: [
        "No preselection",
        "Sprinkler installation",
        "Sprinkler repair",
        "Maintenance package",
        "Yard drainage",
        "French drain",
        "Downspout extensions",
        "Smart controller",
        "Backflow testing",
        "Winterization",
        "Not sure yet",
      ],
      defaultValue: "No preselection",
    }),
    useQueryContext: props.Visibility({
      name: "Remember service link selection",
      group: "Form behavior",
      tooltip:
        "Read supported service, plan and water query parameters from estimate links. Unknown values are ignored; personal data is never read from URLs.",
      defaultValue: true,
    }),
    heading: props.Text({
      name: "Heading",
      group: "Content",
      tooltip: "Edit the heading for this component.",
      defaultValue: "Tell us about your property",
    }),
    intro: props.Text({
      name: "Intro",
      group: "Content",
      tooltip:
        "Edit the intro for this component. Use clear, concise plain text.",
      defaultValue: "Required fields are marked *.",
    }),
    submitLabel: props.Text({
      name: "Submit label",
      group: "Links",
      tooltip: "Edit the submit label for this component.",
      defaultValue: "Request my free estimate",
    }),
    enablePhotos: props.Visibility({
      name: "Allow photo uploads",
      group: "Content",
      tooltip: "Edit the allow photo uploads for this component.",
      defaultValue: false,
    }),
    successHeading: props.Text({
      name: "Success heading",
      group: "Content",
      tooltip: "Edit the success heading for this component.",
      defaultValue: "We received your request.",
    }),
    successMessage: props.Text({
      name: "Success message",
      group: "Content",
      tooltip:
        "Edit the success message for this component. Use clear, concise plain text.",
      defaultValue:
        "Thanks. TenderCare will use your preferred contact method to discuss the property and service options.",
    }),
    unavailableMessage: props.Text({
      name: "Unavailable message",
      group: "Content",
      tooltip:
        "Edit the unavailable message for this component. Use clear, concise plain text.",
      defaultValue:
        "Online request delivery is not connected yet. This preview does not send your details.",
    }),
    privacyNote: props.Text({
      name: "Privacy note",
      group: "Content",
      tooltip:
        "Edit the privacy note for this component. Use clear, concise plain text.",
      defaultValue: "TenderCare will use these details only to respond to this request.",
    }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
