"use client";
import { useId, useRef, useState, type ReactNode } from "react";
import { Container, Button, type LinkValue } from "../ui";
export interface SectionNavProps {
  label?: string;
  children?: ReactNode;
  ctaLabel?: string;
  ctaLink?: LinkValue;
}
export function SectionNav({
  label = "On this page",
  children,
  ctaLabel,
  ctaLink,
}: SectionNavProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <nav
      className="tc tc-light tc-section-nav"
      aria-label={label}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <Container>
        <span className="tc-section-nav-label">{label}</span>
        <button
          className="tc-section-nav-toggle"
          type="button"
          ref={toggle}
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((value) => !value)}
        >
          {label}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <div
          id={id}
          className={`tc-section-nav-links ${open ? "is-open" : ""}`}
          onClick={(event) => {
            // A slot may cross a Shadow DOM boundary; the composed path preserves its link.
            const anchor = event.nativeEvent
              .composedPath()
              .find((node) => node instanceof HTMLAnchorElement) as
              HTMLAnchorElement | undefined;
            if (anchor) {
              setOpen(false);
              toggle.current?.focus();
            }
          }}
        >
          {children}
        </div>
        <Button link={ctaLink} variant="text">
          {ctaLabel}
        </Button>
      </Container>
    </nav>
  );
}
