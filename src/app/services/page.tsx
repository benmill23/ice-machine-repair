import { services } from "@/lib/services";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import ServiceCard from "@/components/ServiceCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import BrandsSection from "@/components/BrandsSection";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "Commercial Ice Machine Services in Nashville",
  description:
    "Emergency repair, preventive maintenance, installation, diagnostics, warranty service, and consultation for commercial ice machines across the Nashville, TN metro.",
  path: "/services",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumbs crumbs={crumbs} />
          <h1>Commercial Ice Machine Services</h1>
          <p>
            Whatever your ice machine needs, we cover it — from same-day
            emergency repair to preventive maintenance plans that keep you
            running. Serving restaurants, bars, hotels, and healthcare
            facilities across Greater Nashville.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="services-grid">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <BrandsSection />
      <CTASection />
    </>
  );
}
