"use client";
import { useId, useRef, useState, type ReactNode } from "react";
import {
  Arrow,
  Container,
  linkAttributes,
  type ImageAsset,
  type LinkValue,
} from "../ui";
import { useBrowserLocation } from "../../lib/browser-location";
export interface HeaderProps {
  businessName?: string;
  logo?: ImageAsset;
  homeLink?: LinkValue;
  ctaLabel?: string;
  ctaLink?: LinkValue;
  phone?: string;
  location?: string;
  tagline?: string;
  showServicesMenu?: boolean;
  servicesLabel?: string;
  allServicesLabel?: string;
  allServicesLink?: LinkValue;
  irrigationLabel?: string;
  irrigationLink?: LinkValue;
  drainageLabel?: string;
  drainageLink?: LinkValue;
  seasonalLabel?: string;
  seasonalLink?: LinkValue;
  links?: ReactNode;
}
export function Header({
  businessName = "TenderCare Irrigation",
  logo,
  homeLink = { href: "/" },
  ctaLabel = "Get a free estimate",
  ctaLink = { href: "/estimate" },
  phone,
  location = "Wichita & the surrounding metro",
  tagline = "Irrigation · Drainage · Water management",
  showServicesMenu = true,
  servicesLabel = "Services",
  allServicesLabel = "All services",
  allServicesLink = { href: "/services" },
  irrigationLabel = "Irrigation systems",
  irrigationLink = { href: "/services/irrigation-systems" },
  drainageLabel = "Drainage solutions",
  drainageLink = { href: "/services/drainage-solutions" },
  seasonalLabel = "Smart & seasonal services",
  seasonalLink = { href: "/services/smart-upgrades" },
  links,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const toggle = useRef<HTMLButtonElement>(null);
  const navigation = useRef<HTMLElement>(null);
  const services = useRef<HTMLDetailsElement>(null);
  const servicesToggle = useRef<HTMLElement>(null);
  const locationPath = useBrowserLocation();
  const currentPath = locationPath.split("?")[0].replace(/\/$/, "") || "/";
  const serviceItems = [
    { label: allServicesLabel, link: allServicesLink },
    { label: irrigationLabel, link: irrigationLink },
    { label: drainageLabel, link: drainageLink },
    { label: seasonalLabel, link: seasonalLink },
  ].filter((item) => item.label && item.link?.href);
  const closeSubmenus = () => {
    navigation.current
      ?.querySelectorAll<HTMLDetailsElement>("details[open]")
      .forEach((details) => details.removeAttribute("open"));
  };
  return (
    <header
      className="tc tc-header"
      onKeyDown={(e) => {
        if (e.key !== "Escape") return;
        if (services.current?.open) {
          services.current.removeAttribute("open");
          servicesToggle.current?.focus();
          e.preventDefault();
        } else if (open) {
          setOpen(false);
          toggle.current?.focus();
          e.preventDefault();
        }
      }}
    >
      <div className="tc-topline">
        <Container>
          <span>{location}</span>
          {tagline && <span>{tagline}</span>}
        </Container>
      </div>
      <Container className="tc-header-inner">
        <a
          className="tc-brand"
          {...linkAttributes(homeLink?.href ? homeLink : { href: "/" })}
          aria-label={`${businessName} home`}
        >
          {logo?.src ? (
            <img src={logo.src} alt={businessName} width="208" height="74" />
          ) : (
            <span>{businessName}</span>
          )}
        </a>
        <button
          ref={toggle}
          className="tc-menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => {
            if (open) closeSubmenus();
            setOpen(!open);
          }}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          ref={navigation}
          id={id}
          aria-label="Main navigation"
          className={`tc-nav ${open ? "tc-nav-open" : ""}`}
          onClick={(e) => {
            const activatedLink = e.nativeEvent
              .composedPath()
              .some((node) => node instanceof HTMLAnchorElement);
            if (activatedLink) {
              closeSubmenus();
              setOpen(false);
            }
          }}
        >
          {showServicesMenu && serviceItems.length > 0 && (
            <details
              ref={services}
              className="tc-nav-dropdown"
              data-current={
                currentPath === "/services" ||
                currentPath.startsWith("/services/")
                  ? "true"
                  : undefined
              }
              onBlur={(event) => {
                if (
                  !event.currentTarget.contains(event.relatedTarget as Node)
                )
                  event.currentTarget.removeAttribute("open");
              }}
            >
              <summary ref={servicesToggle}>
                {servicesLabel}
                <span aria-hidden="true">⌄</span>
              </summary>
              <div className="tc-nav-submenu">
                {serviceItems.map((item) => {
                  const href = item.link?.href.replace(/\/$/, "") || "/";
                  return (
                    <a
                      key={`${item.label}-${item.link?.href}`}
                      className="tc-nav-submenu-link"
                      {...linkAttributes(item.link)}
                      aria-current={
                        locationPath &&
                        href.startsWith("/") &&
                        href === currentPath
                          ? "page"
                          : undefined
                      }
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </details>
          )}
          {links}
          {phone && (
            <a
              href={`tel:${phone.replace(/[^+\d]/g, "")}`}
              className="tc-nav-phone"
            >
              {phone}
            </a>
          )}
          {ctaLink?.href && (
            <a
              className="tc-button tc-button-primary"
              {...linkAttributes(ctaLink)}
            >
              {ctaLabel}
              <Arrow />
            </a>
          )}
        </nav>
      </Container>
    </header>
  );
}
