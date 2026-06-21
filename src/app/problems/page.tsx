import Link from "next/link";
import { problems } from "@/lib/catalog";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "Common Ice Machine Problems & Symptoms",
  description:
    "Ice machine not making ice? Leaking water? Making cloudy or small cubes? See common commercial ice machine problems, likely causes, and how we fix them in Nashville.",
  path: "/problems",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Problems", path: "/problems" },
];

export default function ProblemsIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumbs crumbs={crumbs} />
          <h1>Common Ice Machine Problems</h1>
          <p>
            Not sure what&apos;s wrong with your ice machine? Find your symptom
            below to understand the likely causes — then call us for a fast,
            accurate diagnosis and repair across the Nashville metro.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="tile-grid">
            {problems.map((p) => (
              <Link key={p.slug} href={`/problems/${p.slug}`} className="tile">
                <h3>{p.name}</h3>
                <p>{p.quickInfo}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
