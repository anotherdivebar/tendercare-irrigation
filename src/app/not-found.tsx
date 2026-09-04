import { Hero } from "../components/webflow/Hero";
export default function NotFound() {
  return (
    <Hero
      variant="compact"
      eyebrow="Page not found"
      heading="Let’s get you back on familiar ground."
      accent=""
      body="This page isn’t available. Explore our services or get in touch about your property."
      ctaLabel="Explore services"
      ctaLink={{ href: "/services" }}
      secondaryLabel="Go to the homepage"
      secondaryLink={{ href: "/" }}
    />
  );
}
