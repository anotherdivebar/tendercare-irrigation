import { afterEach, describe, expect, it, vi } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EstimateForm } from "../src/components/webflow/EstimateForm";
import { getEstimateContext, estimateLink } from "../src/lib/estimate-context";
import {
  initialEstimate,
  validateEstimate,
  submitEstimate,
} from "../src/lib/estimate";
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  window.history.replaceState({}, "", "/");
});
const valid = {
  ...initialEstimate,
  name: "Test Homeowner",
  email: "test@example.com",
  property: "67202",
  service: "Sprinkler repair",
};
describe("Estimate request", () => {
  it("carries package context into the submitted request and lets the visitor change it", async () => {
    window.history.replaceState(
      {},
      "",
      estimateLink("maintenance-plans", "gold", "well").href,
    );
    const fetchMock = vi
      .fn()
      .mockResolvedValue({ ok: true, json: async () => ({ success: true }) });
    vi.stubGlobal("fetch", fetchMock);
    render(<EstimateForm endpoint="/test-only" />);
    expect(
      (screen.getByLabelText("What can we help with? *") as HTMLSelectElement)
        .value,
    ).toBe("Maintenance package");
    expect(screen.getByText("Gold package · Well water")).toBeTruthy();
    for (const [label, value] of [
      ["Your name *", valid.name],
      ["Email *", valid.email],
      ["Property address or ZIP *", valid.property],
    ])
      fireEvent.change(screen.getByLabelText(label), { target: { value } });
    await userEvent.click(
      screen.getByRole("button", { name: "Request free estimate" }),
    );
    await screen.findByRole("status");
    const sent = fetchMock.mock.calls[0][1].body as FormData;
    expect(sent.get("service")).toBe("Maintenance package");
    expect(sent.get("packageName")).toBe("Gold package");
    expect(sent.get("waterSource")).toBe("Well water");
    await userEvent.click(
      screen.getByRole("button", { name: "Start another request" }),
    );
    expect(screen.queryByText("Gold package · Well water")).toBeNull();
    expect(
      (screen.getByLabelText("What can we help with? *") as HTMLSelectElement)
        .value,
    ).toBe("");
  });
  it("discards package context when the selected service changes", async () => {
    window.history.replaceState(
      {},
      "",
      estimateLink("maintenance-plans", "silver", "city").href,
    );
    render(<EstimateForm />);
    await userEvent.selectOptions(
      screen.getByLabelText("What can we help with? *"),
      "Sprinkler repair",
    );
    expect(screen.queryByText("Silver package · City water")).toBeNull();
  });
  it("accepts only known request context and never copies personal fields from URLs", () => {
    expect(
      getEstimateContext("/estimate?service=sprinkler-repair&name=ignored"),
    ).toEqual({
      service: "Sprinkler repair",
      packageName: "",
      waterSource: "",
    });
    expect(
      getEstimateContext("/estimate?service=unknown&plan=gold&water=city"),
    ).toEqual({ service: "", packageName: "", waterSource: "" });
    expect(
      getEstimateContext(
        "/estimate?service=maintenance-plans&plan=__proto__&water=constructor",
      ),
    ).toEqual({
      service: "Maintenance package",
      packageName: "",
      waterSource: "",
    });
  });
  it("supports an editable default and disabling URL preselection", () => {
    window.history.replaceState({}, "", estimateLink("winterization").href);
    render(
      <EstimateForm defaultService="Yard drainage" useQueryContext={false} />,
    );
    expect(
      (screen.getByLabelText("What can we help with? *") as HTMLSelectElement)
        .value,
    ).toBe("Yard drainage");
  });
  it("requires only the chosen contact method", () => {
    expect(validateEstimate(valid)).toEqual({});
    expect(
      validateEstimate({
        ...valid,
        contactMethod: "phone",
        email: "",
        phone: "3160000000",
      }),
    ).toEqual({});
    expect(
      validateEstimate({ ...valid, contactMethod: "phone" }),
    ).toHaveProperty("phone");
  });
  it("rejects missing and malformed data", () => {
    expect(Object.keys(validateEstimate(initialEstimate))).toEqual([
      "name",
      "property",
      "service",
      "email",
    ]);
    expect(
      validateEstimate({ ...valid, email: "broken", phone: "123" }),
    ).toEqual({
      email: "Enter a valid email address.",
      phone: "Enter a phone number with area code.",
    });
  });
  it("keeps IDs unique for two independent form instances", () => {
    const { container } = render(
      <>
        <EstimateForm />
        <EstimateForm />
      </>,
    );
    const ids = Array.from(container.querySelectorAll("[id]")).map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
  it("shows accessible validation errors without attempting delivery", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    render(<EstimateForm />);
    await userEvent.click(
      screen.getByRole("button", { name: "Request free estimate" }),
    );
    expect(screen.getByRole("alert").textContent).toContain("Enter your name.");
    expect(fetchMock).not.toHaveBeenCalled();
  });
  it("never reports success or transmits with no configured endpoint", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    render(<EstimateForm />);
    fireEvent.change(screen.getByLabelText("Your name *"), {
      target: { value: valid.name },
    });
    fireEvent.change(screen.getByLabelText("Email *"), {
      target: { value: valid.email },
    });
    fireEvent.change(screen.getByLabelText("Property address or ZIP *"), {
      target: { value: valid.property },
    });
    fireEvent.change(screen.getByLabelText("What can we help with? *"), {
      target: { value: valid.service },
    });
    await userEvent.click(
      screen.getByRole("button", { name: "Request free estimate" }),
    );
    expect(screen.getByRole("alert").textContent).toContain("does not send");
    expect(fetchMock).not.toHaveBeenCalled();
  });
  it("shows success only after a confirmed response", async () => {
    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValue({ ok: true, json: async () => ({ success: true }) }),
    );
    render(<EstimateForm endpoint="/test-only" />);
    fireEvent.change(screen.getByLabelText("Your name *"), {
      target: { value: valid.name },
    });
    fireEvent.change(screen.getByLabelText("Email *"), {
      target: { value: valid.email },
    });
    fireEvent.change(screen.getByLabelText("Property address or ZIP *"), {
      target: { value: valid.property },
    });
    fireEvent.change(screen.getByLabelText("What can we help with? *"), {
      target: { value: valid.service },
    });
    await userEvent.click(
      screen.getByRole("button", { name: "Request free estimate" }),
    );
    await waitFor(() =>
      expect(screen.getByRole("status").textContent).toContain(
        "Your request is on its way.",
      ),
    );
  });
  it("does not interpret HTTP 200 without explicit confirmation as success", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: true, json: async () => ({}) }),
    );
    await expect(submitEstimate("/test-only", valid, [])).rejects.toThrow(
      "Delivery could not be confirmed",
    );
  });
  it("preserves values on delivery failure", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("Network unavailable")),
    );
    render(<EstimateForm endpoint="/test-only" />);
    for (const [label, value] of [
      ["Your name *", valid.name],
      ["Email *", valid.email],
      ["Property address or ZIP *", valid.property],
    ])
      fireEvent.change(screen.getByLabelText(label), { target: { value } });
    fireEvent.change(screen.getByLabelText("What can we help with? *"), {
      target: { value: valid.service },
    });
    await userEvent.click(
      screen.getByRole("button", { name: "Request free estimate" }),
    );
    await waitFor(() =>
      expect(screen.getByRole("alert").textContent).toContain(
        "Network unavailable",
      ),
    );
    expect(
      (screen.getByLabelText("Your name *") as HTMLInputElement).value,
    ).toBe(valid.name);
  });
  it("rejects oversized images before sending", async () => {
    render(<EstimateForm enablePhotos />);
    const file = new File(["x"], "large.jpg", { type: "image/jpeg" });
    Object.defineProperty(file, "size", { value: 6 * 1024 * 1024 });
    fireEvent.change(screen.getByLabelText("Property photos (optional)"), {
      target: { files: [file] },
    });
    expect(
      screen.getByText(
        "Choose up to 3 supported images, no larger than 5 MB each.",
      ),
    ).toBeTruthy();
  });
});
