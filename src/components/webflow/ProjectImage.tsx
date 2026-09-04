"use client";
import { useRef } from "react";
import { Photo, type ImageAsset } from "../ui";
export interface ProjectImageProps {
  image?: ImageAsset;
  imageAlt?: string;
  caption?: string;
  category?: string;
}
export function ProjectImage({
  image,
  imageAlt,
  caption,
  category,
}: ProjectImageProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  if (!image?.src) return null;
  return (
    <figure className="tc tc-project-image">
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        aria-label={`Enlarge photo: ${imageAlt || image.alt || caption || "project"}`}
      >
        <Photo
          image={image}
          alt={imageAlt}
          sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1000px) 50vw, (max-width: 1440px) 38vw, 520px"
        />
        <span aria-hidden="true">↗</span>
      </button>
      <figcaption>
        <span>{caption}</span>
        {category && <small>{category}</small>}
      </figcaption>
      <dialog
        aria-label={caption || "Project photograph"}
        ref={dialog}
        className="tc tc-lightbox"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <button
          type="button"
          className="tc-lightbox-close"
          onClick={() => dialog.current?.close()}
          autoFocus
        >
          Close <span aria-hidden="true">×</span>
        </button>
        <Photo
          image={image}
          alt={imageAlt}
          sizes="(max-width: 1064px) 94vw, 1000px"
        />
        {caption && <p>{caption}</p>}
      </dialog>
    </figure>
  );
}
