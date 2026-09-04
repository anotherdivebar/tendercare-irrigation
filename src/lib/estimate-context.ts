export const estimateServices = [
  { id: "sprinkler-installation", label: "Sprinkler installation" },
  { id: "sprinkler-repair", label: "Sprinkler repair" },
  { id: "maintenance-plans", label: "Maintenance package" },
  { id: "yard-drainage", label: "Yard drainage" },
  { id: "french-drains", label: "French drain" },
  { id: "downspout-extensions", label: "Downspout extensions" },
  { id: "controller-upgrades", label: "Smart controller" },
  { id: "backflow-testing", label: "Backflow testing" },
  { id: "winterization", label: "Winterization" },
  { id: "not-sure", label: "Not sure yet" },
] as const;
export interface EstimateContext {
  service: string;
  packageName: string;
  waterSource: string;
}
export function getEstimateContext(location: string): EstimateContext {
  const query = new URLSearchParams(location.split("?")[1] || "");
  const service =
    estimateServices.find((item) => item.id === query.get("service"))?.label ||
    "";
  const plan = query.get("plan"),
    water = query.get("water");
  const packageName =
    service === "Maintenance package"
      ? plan === "gold"
        ? "Gold package"
        : plan === "silver"
          ? "Silver package"
          : ""
      : "";
  const waterSource = packageName
    ? water === "city"
      ? "City water"
      : water === "well"
        ? "Well water"
        : ""
    : "";
  return { service, packageName, waterSource };
}
export function estimateLink(
  service: string,
  plan?: "gold" | "silver",
  water?: "city" | "well",
) {
  const query = new URLSearchParams({ service });
  if (plan) query.set("plan", plan);
  if (water) query.set("water", water);
  return { href: `/estimate?${query}` };
}
