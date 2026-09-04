import type { ReactNode } from "react";
import { Container, type ImageAsset } from "../ui";
export interface FooterProps {
  businessName?: string;
  description?: string;
  location?: string;
  phone?: string;
  email?: string;
  logo?: ImageAsset;
  links?: ReactNode;
  serviceLinks?: ReactNode;
  copyright?: string;
}
export function Footer({
  businessName = "TenderCare Irrigation",
  description = "Thoughtful irrigation. Practical drainage. A landscape that works beautifully.",
  location = "Serving Wichita & the surrounding metro.",
  phone,
  email,
  logo,
  links,
  serviceLinks,
  copyright = "© TenderCare Irrigation. All rights reserved.",
}: FooterProps) {
  return (
    <footer className="tc tc-footer">
      <Container>
        <div className="tc-footer-grid">
          <div className="tc-footer-brand">
            {logo?.src ? (
              <img src={logo.src} alt={businessName} width="208" height="74" />
            ) : (
              <strong>{businessName}</strong>
            )}
            <p>{description}</p>
            <span className="tc-small">{location}</span>
          </div>
          <nav aria-label="Services">
            <h2>Our expertise</h2>
            {serviceLinks}
          </nav>
          <nav aria-label="Footer">
            <h2>Explore</h2>
            {links}
          </nav>
          <div>
            <h2>Let’s talk</h2>
            <a className="tc-footer-cta" href="/estimate">
              Get free estimate ↗
            </a>
            {phone && (
              <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>
            )}
            {email && <a href={`mailto:${email}`}>{email}</a>}
            <a href="/contact">Contact TenderCare</a>
          </div>
        </div>
        <div className="tc-footer-bottom">
          <span>{copyright}</span>
          <span>Irrigation & water management · Wichita, Kansas</span>
        </div>
      </Container>
    </footer>
  );
}
