export const estimateServices = [
  { id: "sprinkler-installation", label: "Sprinkler installation" },
  { id: "sprinkler-repair", label: "Sprinkler repair" },
  { id: "maintenance-plans", label: "Irrigation maintenance" },
  { id: "downspout-extensions", label: "Downspout extensions" },
  { id: "sump-pump-extensions", label: "Sump pump extensions" },
  { id: "controller-upgrades", label: "Smart controller" },
  { id: "backflow-testing", label: "Backflow testing" },
  { id: "winterization", label: "Winterization" },
  { id: "not-sure", label: "Not sure yet" },
] as const;
export interface EstimateContext {
  service: string;
}
export function getEstimateContext(location: string): EstimateContext {
  const query = new URLSearchParams(location.split("?")[1] || "");
  const service =
    estimateServices.find((item) => item.id === query.get("service"))?.label ||
    "";
  return { service };
}
export function estimateLink(service: string) {
  const query = new URLSearchParams({ service });
  return { href: `/estimate?${query}` };
}
