import type { ReactNode } from "react";
import { Section, Eyebrow, Heading } from "../ui";
export interface ContactSectionProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  phone?: string;
  email?: string;
  address?: string;
  hours?: string;
  serviceArea?: string;
  children?: ReactNode;
}
export function ContactSection({
  eyebrow = "Let’s talk",
  heading = "How can we help?",
  body = "Tell us what is happening on your property, and the best way to reach you.",
  phone,
  email,
  address,
  hours,
  serviceArea = "Wichita & surrounding metro communities",
  children,
}: ContactSectionProps) {
  return (
    <Section className="tc-contact">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading>{heading}</Heading>
        <p className="tc-lead">{body}</p>
        <dl className="tc-contact-list">
          {phone && (
            <>
              <dt>Call TenderCare</dt>
              <dd>
                <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>
              </dd>
            </>
          )}
          {email && (
            <>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${email}`}>{email}</a>
              </dd>
            </>
          )}
          {hours && (
            <>
              <dt>Service hours</dt>
              <dd>{hours}</dd>
            </>
          )}
          {address && (
            <>
              <dt>Address</dt>
              <dd>{address}</dd>
            </>
          )}
          {serviceArea && (
            <>
              <dt>Service area</dt>
              <dd>{serviceArea}</dd>
            </>
          )}
        </dl>
      </div>
      <div>{children}</div>
    </Section>
  );
}
