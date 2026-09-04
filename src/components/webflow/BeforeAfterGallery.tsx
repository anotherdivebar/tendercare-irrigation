"use client";
import { useId, useState } from "react";
import { Photo, type ImageAsset } from "../ui";
export interface BeforeAfterGalleryProps {
  before?: ImageAsset;
  after?: ImageAsset;
  heading?: string;
  beforeLabel?: string;
  afterLabel?: string;
}
export function BeforeAfterGallery({
  before,
  after,
  heading = "See the difference",
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterGalleryProps) {
  const [position, setPosition] = useState(50);
  const id = useId();
  if (!before?.src || !after?.src) return null;
  return (
    <figure className="tc tc-comparison">
      <figcaption>{heading}</figcaption>
      <div className="tc-comparison-images">
        <Photo image={after} />
        <div style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Photo image={before} />
        </div>
        <span>{beforeLabel}</span>
        <span>{afterLabel}</span>
        <div className="tc-comparison-line" style={{ left: `${position}%` }} />
      </div>
      <label htmlFor={id}>
        Reveal {beforeLabel.toLowerCase()} or {afterLabel.toLowerCase()}
      </label>
      <input
        id={id}
        aria-valuetext={`${position}% ${beforeLabel}`}
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
      />
    </figure>
  );
}
