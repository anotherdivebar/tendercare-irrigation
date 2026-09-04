"use client";
import { useId, useState, type ReactNode } from "react";
import { Section, SectionIntro } from "../ui";
export interface PricingPackagesProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  cityWater?: ReactNode;
  wellWater?: ReactNode;
  note?: string;
  cityLabel?: string;
  wellLabel?: string;
}
export function PricingPackages({
  eyebrow = "Seasonal maintenance",
  heading = "Choose the care your\nsystem needs this year.",
  body = "Compare seasonal care for city- and well-water systems. Current pricing depends on your system.",
  cityWater,
  wellWater,
  note,
  cityLabel = "City water",
  wellLabel = "Well water",
}: PricingPackagesProps) {
  const [source, setSource] = useState("city");
  const id = useId();
  return (
    <Section theme="cream" className="tc-packages">
      <SectionIntro eyebrow={eyebrow} heading={heading} body={body} />
      <div
        className="tc-segmented"
        role="group"
        aria-label="Choose your water source"
      >
        <button
          type="button"
          aria-pressed={source === "city"}
          aria-controls={id}
          onClick={() => setSource("city")}
        >
          {cityLabel}
        </button>
        <button
          type="button"
          aria-pressed={source === "well"}
          aria-controls={id}
          onClick={() => setSource("well")}
        >
          {wellLabel}
        </button>
      </div>
      <div id={id} className="tc-package-grid">
        {source === "city" ? cityWater : wellWater}
      </div>
      {note && <p className="tc-package-note">{note}</p>}
    </Section>
  );
}
