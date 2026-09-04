export interface EstimateValues {
  name: string;
  phone: string;
  email: string;
  property: string;
  service: string;
  description: string;
  contactMethod: string;
}
export type EstimateErrors = Partial<Record<keyof EstimateValues, string>>;
export const initialEstimate: EstimateValues = {
  name: "",
  phone: "",
  email: "",
  property: "",
  service: "",
  description: "",
  contactMethod: "email",
};
export function validateEstimate(values: EstimateValues): EstimateErrors {
  const errors: EstimateErrors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.property.trim())
    errors.property = "Enter your property address or ZIP code.";
  if (!values.service)
    errors.service = "Choose a service, or select “Not sure yet”.";
  if (values.contactMethod === "email" && !values.email.trim())
    errors.email = "Enter an email address so we can reply.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Enter a valid email address.";
  if (values.contactMethod === "phone" && !values.phone.trim())
    errors.phone = "Enter a phone number so we can call you.";
  if (values.phone && values.phone.replace(/\D/g, "").length < 10)
    errors.phone = "Enter a phone number with area code.";
  return errors;
}
/** Configure a reviewed endpoint. No endpoint means no transmission and no false success. */
export async function submitEstimate(
  endpoint: string,
  values: EstimateValues,
  files: File[],
  signal?: AbortSignal,
) {
  const data = new FormData();
  Object.entries(values).forEach(([k, v]) => data.append(k, v));
  files.forEach((file) => data.append("photos", file));
  const response = await fetch(endpoint, {
    method: "POST",
    body: data,
    signal,
    headers: { Accept: "application/json" },
  });
  if (!response.ok)
    throw new Error(
      "We couldn’t send your request. Your details are still here; please try again.",
    );
  const result = await response.json();
  if (result.success !== true)
    throw new Error("Delivery could not be confirmed. Please try again.");
}
