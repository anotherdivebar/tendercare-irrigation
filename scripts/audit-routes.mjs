import { JSDOM } from "jsdom";
import { writeFileSync, mkdirSync } from "node:fs";
const base = process.argv[2] || "http://127.0.0.1:3001";
const routes = [
  "/",
  "/about",
  "/services",
  "/services/irrigation-systems",
  "/services/drainage-solutions",
  "/faq",
  "/blog",
  "/contact",
  "/estimate",
];
const pages = new Map();
const results = [];
const failures = [];
for (const route of routes) {
  const response = await fetch(base + route);
  const html = await response.text();
  const document = new JSDOM(html).window.document;
  pages.set(route, document);
  const title = document.title,
    description = document.querySelector('meta[name="description"]')?.content;
  const schemas = Array.from(
    document.querySelectorAll('script[type="application/ld+json"]'),
  ).map((s) => JSON.parse(s.textContent));
  const ids = Array.from(document.querySelectorAll("[id]")).map((n) => n.id);
  const result = {
    route,
    status: response.status,
    h1Count: document.querySelectorAll("h1").length,
    title,
    description,
    canonical: document.querySelector('link[rel="canonical"]')?.href ?? null,
    robots: document.querySelector('meta[name="robots"]')?.content,
    ogTitle: document.querySelector('meta[property="og:title"]')?.content,
    schemaTypes: schemas.map((s) => s["@type"]),
    duplicateIds: ids.length - new Set(ids).size,
  };
  results.push(result);
  if (
    response.status !== 200 ||
    result.h1Count !== 1 ||
    !title ||
    !description ||
    !result.ogTitle ||
    result.duplicateIds
  )
    failures.push({ route, problem: "Page structure or metadata", result });
  if (
    /555-|TODO|Alex Monroe|Taylor Reed|Jordan Avery/.test(
      document.querySelector("main")?.textContent ?? "",
    )
  )
    failures.push({ route, problem: "Placeholder leaked to main content" });
  for (const schema of schemas) {
    if (JSON.stringify(schema).includes("AggregateRating"))
      failures.push({ route, problem: "Unverified rating schema" });
    if (schema["@type"] === "FAQPage") {
      const visible = Array.from(document.querySelectorAll(".tc-faq-item")).map(
        (d) => ({
          question: d.querySelector("summary span")?.textContent,
          answer: d.querySelector(".tc-faq-answer>p")?.textContent,
        }),
      );
      for (const question of schema.mainEntity) {
        if (
          !visible.some(
            (v) =>
              v.question === question.name &&
              v.answer === question.acceptedAnswer.text,
          )
        )
          failures.push({ route, problem: "FAQ schema mismatch" });
      }
    }
  }
}
const images = new Set();
for (const [route, document] of pages) {
  for (const anchor of document.querySelectorAll("a[href]")) {
    const raw = anchor.getAttribute("href");
    if (raw === "#") {
      failures.push({ route, problem: "Dead hash link" });
      continue;
    }
    const url = new URL(raw, base + route);
    if (url.origin !== base) continue;
    const target = pages.get(url.pathname);
    if (!target) {
      failures.push({
        route,
        problem: "Unknown internal destination",
        href: raw,
      });
      continue;
    }
    if (
      url.hash &&
      !target.getElementById(decodeURIComponent(url.hash.slice(1)))
    )
      failures.push({ route, problem: "Missing anchor", href: raw });
  }
  for (const img of document.images) {
    if (
      !img.hasAttribute("alt") ||
      !img.getAttribute("width") ||
      !img.getAttribute("height")
    )
      failures.push({
        route,
        problem: "Image missing alt or dimensions",
        src: img.src,
      });
    images.add(img.getAttribute("src"));
  }
}
for (const image of images) {
  const response = await fetch(new URL(image, base));
  if (!response.ok) failures.push({ problem: "Missing image", image });
}
if (new Set(results.map((r) => r.title)).size !== routes.length)
  failures.push({ problem: "Duplicate page titles" });
const missing = await fetch(base + "/blog/not-a-published-article");
if (missing.status !== 404)
  failures.push({
    problem: "Unpublished article must 404",
    status: missing.status,
  });
const retiredSmartServices = await fetch(base + "/services/smart-upgrades", {
  redirect: "manual",
});
if (
  retiredSmartServices.status !== 308 ||
  new URL(retiredSmartServices.headers.get("location"), base).pathname !==
    "/services/irrigation-systems"
)
  failures.push({
    problem: "Retired smart services route must redirect permanently",
    status: retiredSmartServices.status,
    location: retiredSmartServices.headers.get("location"),
  });
mkdirSync("docs/qa", { recursive: true });
writeFileSync(
  "docs/qa/route-audit.json",
  JSON.stringify(
    {
      checkedAt: new Date().toISOString(),
      base,
      results,
      imageCount: images.size,
      failures,
    },
    null,
    2,
  ),
);
console.log(
  JSON.stringify(
    { routes: results.length, images: images.size, failures },
    null,
    2,
  ),
);
process.exitCode = failures.length ? 1 : 0;
