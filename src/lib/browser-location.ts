"use client";
import { useSyncExternalStore } from "react";

// Plain href navigation works in Webflow and Next. No router dependency or PII storage.
function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener("hashchange", callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("hashchange", callback);
  };
}
const serverSnapshot = () => "";
const locationSnapshot = () =>
  typeof window === "undefined"
    ? ""
    : window.location.pathname + window.location.search;
export function useBrowserLocation() {
  return useSyncExternalStore(subscribe, locationSnapshot, serverSnapshot);
}
