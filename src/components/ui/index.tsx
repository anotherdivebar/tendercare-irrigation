import type { CSSProperties, ReactNode } from "react";

export interface ImageAsset {
  src: string;
  alt?: string;
  srcSet?: string;
  width?: number;
  height?: number;
}
export interface LinkValue {
  href: string;
  target?: string;
}
export type Theme = "light" | "cream" | "dark";
export function linkAttributes(link: LinkValue) {
  return {
    href: link.href,
    target: link.target,
    rel: link.target === "_blank" ? "noopener noreferrer" : undefined,
  };
}
export interface SectionProps {
  children?: ReactNode;
  theme?: Theme;
  className?: string;
  id?: string;
}
export function Container({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return <div className={`tc-container ${className}`}>{children}</div>;
}
export function Section({
  children,
  theme = "light",
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`tc tc-section tc-${theme} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
export function Eyebrow({ children }: { children?: ReactNode }) {
  return children ? <p className="tc-eyebrow">{children}</p> : null;
}
export function Heading({
  children,
  as: Tag = "h2",
}: {
  children?: ReactNode;
  as?: "h1" | "h2" | "h3";
}) {
  return children ? (
    <Tag className={`tc-heading tc-${Tag}`}>
      {typeof children === "string" ? children.replace(/\\n/g, "\n") : children}
    </Tag>
  ) : null;
}
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}
export function Button({
  children,
  link = { href: "/estimate" },
  variant = "primary",
}: {
  children?: ReactNode;
  link?: LinkValue;
  variant?: "primary" | "outline" | "light" | "text";
}) {
  if (!children || !link?.href) return null;
  return (
    <a
      className={`tc-button tc-button-${variant}`}
      href={link.href}
      target={link.target}
      rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
      <Arrow />
    </a>
  );
}
export function Photo({
  image,
  alt,
  priority = false,
  className = "",
  position = "center",
  sizes = "(max-width: 640px) calc(100vw - 40px), (max-width: 1440px) 45vw, 640px",
}: {
  image?: ImageAsset;
  alt?: string;
  priority?: boolean;
  className?: string;
  position?: string;
  sizes?: string;
}) {
  if (!image?.src) return null;
  return (
    <img
      className={`tc-photo ${className}`}
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      alt={alt ?? image.alt ?? ""}
      width={image.width ?? 1600}
      height={image.height ?? 1067}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      style={{ objectPosition: position } as CSSProperties}
    />
  );
}
export function SectionIntro({
  eyebrow,
  heading,
  body,
  children,
}: {
  eyebrow?: string;
  heading?: string;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <div className="tc-section-intro">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading>{heading}</Heading>
      </div>
      <div className="tc-intro-aside">
        {body && <p>{body}</p>}
        {children}
      </div>
    </div>
  );
}
