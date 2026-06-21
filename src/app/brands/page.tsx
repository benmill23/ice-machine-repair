import Link from "next/link";
import { brands } from "@/lib/brands";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "Ice Machine Brands We Repair",
  description:
    "Factory-trained commercial ice machine repair for Manitowoc, Scotsman, Hoshizaki, Ice-O-Matic, Follett, Kold-Draft, and every major brand across the Nashville metro.",
  path: "/brands",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Brands", path: "/brands" },
];

export default function BrandsIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumbs crumbs={crumbs} />
          <h1>Ice Machine Brands We Repair</h1>
          <p>
            We service every major commercial ice machine brand — and we know
            the failure modes specific to each platform. Find your brand below
            for repair details, common models, and the issues we fix.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="tile-grid">
            {brands.map((b) => (
              <Link key={b.slug} href={`/brands/${b.slug}`} className="tile">
                <h3>{b.name}</h3>
                <p>{b.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
