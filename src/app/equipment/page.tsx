import Link from "next/link";
import { equipment } from "@/lib/catalog";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "Ice Machine Types We Repair",
  description:
    "We repair every type of commercial ice machine — modular, undercounter, nugget, flake, cube, air-cooled, water-cooled, and remote-condenser units across the Nashville metro.",
  path: "/equipment",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Equipment", path: "/equipment" },
];

export default function EquipmentIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumbs crumbs={crumbs} />
          <h1>Ice Machine Types We Repair</h1>
          <p>
            Every style of commercial ice machine fails a little differently. We
            service them all — find your equipment type below for repair and
            maintenance details.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="tile-grid">
            {equipment.map((e) => (
              <Link key={e.slug} href={`/equipment/${e.slug}`} className="tile">
                <h3>{e.name}</h3>
                <p>{e.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
