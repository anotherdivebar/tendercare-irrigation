"use client";
import { useId, useRef, useState, type ReactNode } from "react";
import {
  Arrow,
  Container,
  linkAttributes,
  type ImageAsset,
  type LinkValue,
} from "../ui";
export interface HeaderProps {
  businessName?: string;
  logo?: ImageAsset;
  homeLink?: LinkValue;
  ctaLabel?: string;
  ctaLink?: LinkValue;
  phone?: string;
  location?: string;
  tagline?: string;
  links?: ReactNode;
}
export function Header({
  businessName = "TenderCare Irrigation",
  logo,
  homeLink = { href: "/" },
  ctaLabel = "Get free estimate",
  ctaLink = { href: "/estimate" },
  phone,
  location = "Wichita & the surrounding metro",
  tagline = "Irrigation · Drainage · Water management",
  links,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="tc tc-header"
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
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
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          id={id}
          aria-label="Main navigation"
          className={`tc-nav ${open ? "tc-nav-open" : ""}`}
          onClick={(e) => {
            if (
              e.nativeEvent
                .composedPath()
                .some((node) => node instanceof HTMLAnchorElement)
            )
              setOpen(false);
          }}
        >
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
