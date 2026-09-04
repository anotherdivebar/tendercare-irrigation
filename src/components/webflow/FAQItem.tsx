import { linkAttributes, type LinkValue } from "../ui";
export interface FAQItemProps {
  question?: string;
  answer?: string;
  linkLabel?: string;
  link?: LinkValue;
  sourceLabel?: string;
  sourceLink?: LinkValue;
}
export function FAQItem({
  question = "How can we help?",
  answer,
  linkLabel,
  link,
  sourceLabel,
  sourceLink,
}: FAQItemProps) {
  if (!answer) return null;
  return (
    <details className="tc tc-faq-item">
      <summary>
        <span>{question}</span>
        <span className="tc-faq-plus" aria-hidden="true">
          +
        </span>
      </summary>
      <div className="tc-faq-answer">
        <p>{answer}</p>
        {link?.href && linkLabel && (
          <a {...linkAttributes(link)}>{linkLabel} ↗</a>
        )}
        {sourceLink?.href && sourceLabel && (
          <p className="tc-faq-source">
            Source: <a {...linkAttributes(sourceLink)}>{sourceLabel}</a>
          </p>
        )}
      </div>
    </details>
  );
}
