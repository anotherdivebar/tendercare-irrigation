import { afterEach, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderToStaticMarkup } from "react-dom/server";
import { FAQItem } from "../src/components/webflow/FAQItem";
import { Header } from "../src/components/webflow/Header";
import { ReviewCard } from "../src/components/webflow/ReviewCard";
import { BeforeAfterGallery } from "../src/components/webflow/BeforeAfterGallery";
import { Hero } from "../src/components/webflow/Hero";
import { SectionNav } from "../src/components/webflow/SectionNav";
import { NavLink } from "../src/components/webflow/NavLink";
import { ServiceCard } from "../src/components/webflow/ServiceCard";
import { ServiceFeatureSection } from "../src/components/webflow/ServiceFeatureSection";
import { ServiceDetailBlock } from "../src/components/webflow/ServiceDetailBlock";
import { publishedArticles } from "../src/content/posts";
import { faqs } from "../src/content/faqs";
import {
  businessSchema,
  absoluteImageUrl,
  faqSchema,
  normalizeOrigin,
  JsonLd,
} from "../src/lib/seo";
afterEach(() => {
  cleanup();
  window.history.replaceState({}, "", "/");
});
it("keeps the active service category visible in navigation", () => {
  window.history.replaceState({}, "", "/services/irrigation-systems");
  render(
    <>
      <NavLink label="Services" link={{ href: "/services" }} />
      <NavLink label="About" link={{ href: "/about" }} />
    </>,
  );
  expect(
    screen.getByRole("link", { name: "Services" }).getAttribute("aria-current"),
  ).toBe("location");
  expect(
    screen.getByRole("link", { name: "About" }).hasAttribute("aria-current"),
  ).toBe(false);
});
it("opens the Services submenu and keeps every category link accurate", async () => {
  window.history.replaceState({}, "", "/services/irrigation-systems");
  render(<Header links={<a href="/about">About</a>} />);
  const summary = screen.getByText("Services").closest("summary");
  const disclosure = summary?.closest("details") as HTMLDetailsElement | null;
  expect(summary).toBeTruthy();
  expect(disclosure?.dataset.current).toBe("true");
  expect(
    [
      "All services",
      "Irrigation systems",
      "Drainage solutions",
      "Smart & seasonal services",
    ].map((label) =>
      screen.getByRole("link", { name: label }).getAttribute("href"),
    ),
  ).toEqual([
    "/services",
    "/services/irrigation-systems",
    "/services/drainage-solutions",
    "/services/smart-upgrades",
  ]);
  expect(
    screen
      .getByRole("link", { name: "Irrigation systems" })
      .getAttribute("aria-current"),
  ).toBe("page");
  await userEvent.click(summary!);
  expect(disclosure?.open).toBe(true);
  await userEvent.keyboard("{Escape}");
  expect(disclosure?.open).toBe(false);
  expect(document.activeElement).toBe(summary);
});
it("closes the mobile topic menu after link activation and Escape", async () => {
  render(
    <SectionNav>
      <NavLink label="Installation" link={{ href: "#installation" }} />
    </SectionNav>,
  );
  const toggle = screen.getByRole("button", { name: "On this page" });
  await userEvent.click(toggle);
  await userEvent.click(screen.getByRole("link", { name: "Installation" }));
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  await userEvent.click(toggle);
  await userEvent.keyboard("{Escape}");
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  expect(document.activeElement).toBe(toggle);
});
it("removes empty photo frames and preserves designer link targets", () => {
  const card = renderToStaticMarkup(
    <ServiceCard link={{ href: "https://example.com", target: "_blank" }} />,
  );
  const feature = renderToStaticMarkup(
    <ServiceFeatureSection heading="Text only" />,
  );
  expect(card).not.toContain("tc-service-card-image");
  expect(card).toContain('target="_blank"');
  expect(card).toContain('rel="noopener noreferrer"');
  expect(feature).not.toContain("<figure");
  expect(feature).toContain("tc-without-image");
});
it("keeps service detail content complete without an optional image", () => {
  const { container } = render(
    <ServiceDetailBlock
      serviceName="Backflow testing"
      heading="Why does a backflow device need testing?"
      answer="Testing checks whether the device performs as intended."
      body="Requirements depend on the water supplier and device."
      symptoms={"A utility notice\nA device due for testing"}
      approach="Review the notice and device before scheduling."
    >
      <h3>Why it matters</h3>
      <p>Current records help document the device condition.</p>
    </ServiceDetailBlock>,
  );
  expect(container.querySelector("figure")).toBeNull();
  expect(container.querySelectorAll(".tc-detail-panel")).toHaveLength(4);
  expect(screen.getByRole("heading", { name: "What to know" })).toBeTruthy();
  expect(screen.getByText("Why it matters")).toBeTruthy();
});
it("renders FAQ answers into initial HTML", () => {
  const html = renderToStaticMarkup(
    <FAQItem question="Test question" answer="Useful direct answer" />,
  );
  expect(html).toContain("<details");
  expect(html).toContain("Useful direct answer");
});
it("closes mobile navigation with Escape and restores toggle focus", async () => {
  render(<Header links={<a href="/services">Services</a>} />);
  const button = screen.getByRole("button", { name: /Menu/ });
  await userEvent.click(button);
  expect(button.getAttribute("aria-expanded")).toBe("true");
  await userEvent.keyboard("{Escape}");
  expect(button.getAttribute("aria-expanded")).toBe("false");
  expect(document.activeElement).toBe(button);
});
it("omits unverified reviews and incomplete image comparisons", () => {
  expect(
    renderToStaticMarkup(
      <ReviewCard quote="Unverified quote" customer="Unknown" />,
    ),
  ).toBe("");
  expect(renderToStaticMarkup(<BeforeAfterGallery />)).toBe("");
});
it("allows a hero without photography or optional CTAs", () => {
  const html = renderToStaticMarkup(
    <Hero heading="Example" accent="" ctaLabel="" />,
  );
  expect(html).toContain("<h1");
  expect(html).not.toContain("<img");
});
it("does not expose unpublished articles", () => {
  expect(publishedArticles()).toEqual([]);
});
it("omits unverified business attributes from schema", () => {
  const schema = businessSchema();
  expect(schema).not.toHaveProperty("telephone");
  expect(schema).not.toHaveProperty("address");
  expect(schema).not.toHaveProperty("aggregateRating");
  expect(JSON.stringify(schema)).not.toContain("555");
});
it("keeps structured questions identical to visible content", () => {
  const schema = faqSchema(faqs);
  expect(schema.mainEntity.map((q) => q.acceptedAnswer.text)).toEqual(
    faqs.map((q) => q.answer),
  );
});
it("rejects unsafe and non-origin canonical settings", () => {
  expect(normalizeOrigin("https://example.com")).toBe("https://example.com");
  for (const origin of [
    "http://example.com",
    "javascript:alert(1)",
    "https://example.com/path",
    "https://user:password@example.com",
  ])
    expect(normalizeOrigin(origin)).toBeUndefined();
});
it("escapes script-closing sequences in JSON-LD", () => {
  const html = renderToStaticMarkup(
    <JsonLd data={{ text: "</script><script>alert(1)</script>" }} />,
  );
  expect(html.match(/<script/g)?.length).toBe(1);
  expect(html).toContain("\\u003c");
});

it("resolves local and CMS-hosted social images", () => {
  expect(absoluteImageUrl("/photo.webp", "https://example.com")).toBe(
    "https://example.com/photo.webp",
  );
  expect(
    absoluteImageUrl(
      "https://cdn.example.com/photo.webp",
      "https://example.com",
    ),
  ).toBe("https://cdn.example.com/photo.webp");
});
