import Link from "next/link";
import { industries } from "@/lib/catalog";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "Industries We Serve — Commercial Ice Machine Repair",
  description:
    "Commercial ice machine repair for restaurants, bars, hotels, hospitals, convenience stores, breweries, and more across the Nashville, TN metro.",
  path: "/industries",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
];

export default function IndustriesIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumbs crumbs={crumbs} />
          <h1>Industries We Serve</h1>
          <p>
            From busy restaurants to healthcare facilities, we keep the ice
            flowing for every kind of business that can&apos;t afford to run
            out. Find your industry below.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="tile-grid">
            {industries.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`} className="tile">
                <h3>{i.name}</h3>
                <p>{i.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
