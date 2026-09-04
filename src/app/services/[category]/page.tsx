import { notFound } from "next/navigation";
import { services } from "../../../content/services";
import { ServiceLanding } from "../../../components/preview/ServiceLanding";
import { pageMetadata } from "../../../lib/seo";
export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ category: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const service = services.find((s) => s.slug === category);
  return service
    ? pageMetadata(
        service.title,
        service.description,
        `/services/${service.slug}`,
      )
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const service = services.find((s) => s.slug === category);
  if (!service) notFound();
  return <ServiceLanding category={service} />;
}
