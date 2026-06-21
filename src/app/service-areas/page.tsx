import Link from "next/link";
import { locations } from "@/lib/locations";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { PinIcon } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Service Areas Across the Nashville Metro",
  description:
    "We provide commercial ice machine repair, maintenance, and installation across Nashville, Franklin, Brentwood, Murfreesboro, Hendersonville, and surrounding Middle Tennessee communities.",
  path: "/service-areas",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Service Areas", path: "/service-areas" },
];

export default function ServiceAreasIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumbs crumbs={crumbs} />
          <h1>Service Areas Across Middle Tennessee</h1>
          <p>
            Based in Nashville, we serve commercial kitchens and businesses
            throughout the metro and surrounding counties. Find your city below.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="tile-grid">
            {locations.map((l) => (
              <Link
                key={l.slug}
                href={`/service-areas/${l.slug}`}
                className="tile"
              >
                <h3>
                  <PinIcon />
                  {l.name}
                </h3>
                <p>{l.blurb}</p>
                <div className="county">{l.county}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
