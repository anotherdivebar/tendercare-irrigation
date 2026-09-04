"use client";
import { useId, useRef, useState, type FormEvent } from "react";
import { Arrow } from "../ui";
import { useBrowserLocation } from "../../lib/browser-location";
import {
  estimateServices,
  getEstimateContext,
} from "../../lib/estimate-context";
import {
  initialEstimate,
  validateEstimate,
  submitEstimate,
  type EstimateValues,
  type EstimateErrors,
} from "../../lib/estimate";
export interface EstimateFormProps {
  heading?: string;
  intro?: string;
  submitLabel?: string;
  endpoint?: string;
  enablePhotos?: boolean;
  successHeading?: string;
  successMessage?: string;
  unavailableMessage?: string;
  privacyNote?: string;
  defaultService?: string;
  useQueryContext?: boolean;
}
export function EstimateForm({
  heading = "Tell us about your property",
  intro = "Required fields are marked *.",
  submitLabel = "Request my free estimate",
  endpoint,
  enablePhotos = false,
  successHeading = "We received your request.",
  successMessage = "Thanks. TenderCare will use your preferred contact method to discuss the property and service options.",
  unavailableMessage = "Online request delivery is not connected yet. This preview does not send your details.",
  privacyNote = "TenderCare will use these details only to respond to this request.",
  defaultService = "",
  useQueryContext = true,
}: EstimateFormProps) {
  const id = useId();
  const form = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<EstimateValues>(initialEstimate);
  const location = useBrowserLocation();
  const context = getEstimateContext(useQueryContext ? location : "");
  const [serviceOverride, setServiceOverride] = useState<string>();
  const service =
    serviceOverride ??
    (context.service ||
      estimateServices.find((item) => item.label === defaultService)?.label ||
      "");
  const packageName = serviceOverride === undefined ? context.packageName : "";
  const waterSource = packageName ? context.waterSource : "";
  const requestValues = {
    ...values,
    service,
    ...(packageName ? { packageName, waterSource } : {}),
  };
  const [errors, setErrors] = useState<EstimateErrors>({});
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const summary = useRef<HTMLDivElement>(null);
  const change = (key: keyof EstimateValues, value: string) =>
    setValues((v) => ({ ...v, [key]: value }));
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const issues = validateEstimate(requestValues);
    setErrors(issues);
    if (Object.keys(issues).length || fileError) {
      setStatus("error");
      setMessage("Please fix the fields listed below.");
      requestAnimationFrame(() => summary.current?.focus());
      return;
    }
    if (!endpoint) {
      setStatus("error");
      setMessage(unavailableMessage);
      requestAnimationFrame(() => summary.current?.focus());
      return;
    }
    setStatus("sending");
    setMessage("");
    try {
      await submitEstimate(
        endpoint,
        requestValues,
        files,
        AbortSignal.timeout(20000),
      );
      setStatus("success");
      requestAnimationFrame(() => summary.current?.focus());
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error && error.name === "TimeoutError"
          ? "The request timed out. Your details are still here; please try again."
          : error instanceof Error
            ? error.message
            : "We couldn’t send your request. Please try again.",
      );
      requestAnimationFrame(() => summary.current?.focus());
    }
  }
  const field = (
    key: "name" | "email" | "phone" | "property",
    label: string,
    type = "text",
    autoComplete?: string,
  ) => (
    <div className="tc-field">
      <label htmlFor={`${id}-${key}`}>
        {label}
        {(key === "name" ||
          key === "property" ||
          key === values.contactMethod) &&
          " *"}
      </label>
      <input
        id={`${id}-${key}`}
        name={key}
        type={type}
        autoComplete={autoComplete}
        value={values[key]}
        maxLength={key === "property" ? 240 : 120}
        required={
          key === "name" || key === "property" || key === values.contactMethod
        }
        aria-invalid={Boolean(errors[key])}
        aria-describedby={errors[key] ? `${id}-${key}-error` : undefined}
        onChange={(e) => change(key, e.target.value)}
      />
      {errors[key] && (
        <span className="tc-field-error" id={`${id}-${key}-error`}>
          {errors[key]}
        </span>
      )}
    </div>
  );
  if (status === "success")
    return (
      <div
        className="tc tc-form tc-form-success"
        ref={summary}
        tabIndex={-1}
        role="status"
      >
        <span aria-hidden="true">✓</span>
        <h2>{successHeading}</h2>
        <p>{successMessage}</p>
        <button
          type="button"
          className="tc-button tc-button-outline"
          onClick={() => {
            setStatus("idle");
            setValues(initialEstimate);
            setFiles([]);
            setServiceOverride("");
            setErrors({});
            setFileError("");
            setMessage("");
          }}
        >
          Start another request
        </button>
      </div>
    );
  return (
    <form ref={form} className="tc tc-form" onSubmit={submit} noValidate>
      <h2>{heading}</h2>
      <p className="tc-form-intro">{intro}</p>
      {!endpoint && <p className="tc-form-preview">{unavailableMessage}</p>}
      <div
        ref={summary}
        tabIndex={-1}
        role={status === "error" ? "alert" : undefined}
      >
        {message && (
          <div className="tc-error-summary">
            <p>{message}</p>
            {Object.entries(errors).map(([key, error]) => (
              <a
                key={key}
                href={`#${id}-${key}`}
                onClick={(e) => {
                  e.preventDefault();
                  form.current
                    ?.querySelector<HTMLInputElement>(`[name="${key}"]`)
                    ?.focus();
                }}
              >
                {error}
              </a>
            ))}
          </div>
        )}
      </div>
      <fieldset disabled={status === "sending"}>
        <legend className="tc-sr-only">Your estimate request</legend>
        {field("name", "Your name", "text", "name")}
        <div className="tc-form-row">
          {field("email", "Email", "email", "email")}
          {field("phone", "Phone", "tel", "tel")}
        </div>
        <fieldset className="tc-contact-method">
          <legend>How should we contact you?</legend>
          {["email", "phone"].map((method) => (
            <label key={method}>
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={values.contactMethod === method}
                onChange={() => change("contactMethod", method)}
              />
              {method === "email" ? "Email me" : "Call me"}
            </label>
          ))}
        </fieldset>
        {field("property", "Property address or ZIP", "text", "street-address")}
        <div className="tc-field">
          <label htmlFor={`${id}-service`}>What can we help with? *</label>
          <select
            id={`${id}-service`}
            name="service"
            value={service}
            required
            aria-invalid={Boolean(errors.service)}
            aria-describedby={
              errors.service ? `${id}-service-error` : undefined
            }
            onChange={(e) => setServiceOverride(e.target.value)}
          >
            <option value="">Select a service</option>
            {estimateServices.map((item) => (
              <option key={item.id}>{item.label}</option>
            ))}
          </select>
          {packageName && (
            <p className="tc-request-context">
              {packageName}
              {waterSource && ` · ${waterSource}`}
              <small>
                Selected from seasonal care. Choose another service above to
                change your request.
              </small>
            </p>
          )}
          {errors.service && (
            <span className="tc-field-error" id={`${id}-service-error`}>
              {errors.service}
            </span>
          )}
        </div>
        <div className="tc-field">
          <label htmlFor={`${id}-description`}>
            What are you seeing? <span>(optional)</span>
          </label>
          <textarea
            id={`${id}-description`}
            name="description"
            rows={3}
            maxLength={3000}
            value={values.description}
            onChange={(e) => change("description", e.target.value)}
          />
        </div>
        {enablePhotos && (
          <div className="tc-field">
            <label htmlFor={`${id}-photos`}>
              Property photos <span>(optional)</span>
            </label>
            <p className="tc-small" id={`${id}-photo-help`}>
              Up to 3 JPG, PNG or WebP images, 5 MB each.
            </p>
            <input
              id={`${id}-photos`}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              aria-describedby={`${id}-photo-help ${id}-photo-error`}
              aria-invalid={Boolean(fileError)}
              onChange={(e) => {
                const selected = Array.from(e.target.files ?? []);
                const invalid =
                  selected.length > 3 ||
                  selected.some(
                    (f) =>
                      f.size > 5 * 1024 * 1024 ||
                      !["image/jpeg", "image/png", "image/webp"].includes(
                        f.type,
                      ),
                  );
                setFileError(
                  invalid
                    ? "Choose up to 3 supported images, no larger than 5 MB each."
                    : "",
                );
                setFiles(invalid ? [] : selected);
              }}
            />
            <span className="tc-field-error" id={`${id}-photo-error`}>
              {fileError}
            </span>
          </div>
        )}
        <p className="tc-form-privacy">{privacyNote}</p>
        <button
          className="tc-button tc-button-primary tc-form-submit"
          type="submit"
        >
          {status === "sending" ? "Sending your request…" : submitLabel}
          <Arrow />
        </button>
      </fieldset>
      <noscript>
        <p>
          JavaScript is required to submit this form. Use the contact details on
          the Contact page instead.
        </p>
      </noscript>
    </form>
  );
}
