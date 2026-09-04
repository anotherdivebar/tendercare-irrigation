"use client";
import { linkAttributes, type LinkValue } from "../ui";
import { useBrowserLocation } from "../../lib/browser-location";
export interface NavLinkProps {
  label?: string;
  link?: LinkValue;
  current?: boolean;
  autoCurrent?: boolean;
}
export function NavLink({
  label = "Services",
  link = { href: "/services" },
  current = false,
  autoCurrent = true,
}: NavLinkProps) {
  const location = useBrowserLocation();
  const path = location.split("?")[0].replace(/\/$/, "") || "/";
  const href = link?.href.replace(/\/$/, "") || "/";
  const exact =
    autoCurrent && Boolean(location) && href.startsWith("/") && path === href;
  const ancestor =
    autoCurrent &&
    href !== "/" &&
    href.startsWith("/") &&
    path.startsWith(`${href}/`);
  return link?.href ? (
    <a
      className="tc tc-nav-link"
      {...linkAttributes(link)}
      aria-current={
        current || exact ? "page" : ancestor ? "location" : undefined
      }
    >
      {label}
    </a>
  ) : null;
}
