import { Hero } from "../components/webflow/Hero";
export default function NotFound() {
  return (
    <Hero
      variant="compact"
      eyebrow="Page not found"
      heading="That page isn’t here."
      accent=""
      body="Browse TenderCare services or return to the homepage."
      ctaLabel="Explore services"
      ctaLink={{ href: "/services" }}
      secondaryLabel="Go to the homepage"
      secondaryLink={{ href: "/" }}
    />
  );
}
