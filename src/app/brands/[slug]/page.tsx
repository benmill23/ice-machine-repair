import { notFound } from "next/navigation";
import Link from "next/link";
import { getBrand, brandSlugs, brands } from "@/lib/brands";
import { problems } from "@/lib/catalog";
import { site } from "@/lib/site";
import {
  pageMetadata,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { PhoneIcon } from "@/components/icons";

export function generateStaticParams() {
  return brandSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  return pageMetadata({
    title: `${brand.name} Ice Machine Repair in Nashville, TN`,
    description: `Expert ${brand.name} commercial ice machine repair across the Nashville metro. We service ${brand.commonModels.slice(0, 2).join(" and ")} and more — fast, with a 60-day guarantee.`,
    path: `/brands/${brand.slug}`,
  });
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const path = `/brands/${brand.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Brands", path: "/brands" },
    { name: brand.name, path },
  ];

  // Link brand-specific issues to the matching problem pages where possible.
  const relatedProblems = problems.slice(0, 5);
  const otherBrands = brands.filter((b) => b.slug !== brand.slug).slice(0, 6);

  const faqs = [
    {
      question: `Do you repair ${brand.name} ice machines?`,
      answer: `Yes. We regularly service ${brand.name} commercial ice machines — including ${brand.commonModels.join(", ")} — throughout the Nashville metro, using OEM-grade parts and following the manufacturer's procedures.`,
    },
    {
      question: `What are common problems with ${brand.name} ice machines?`,
      answer: `${brand.commonIssues.join(" ")} We diagnose the root cause rather than swapping parts and hoping.`,
    },
    {
      question: `Can you get ${brand.name} parts quickly?`,
      answer: `Our trucks carry the parts that fail most often, and we source ${brand.name} OEM components for anything we don't stock so most repairs are completed quickly.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${brand.name} Ice Machine Repair`,
            description: `Commercial ${brand.name} ice machine repair, maintenance, and parts across the Nashville, TN metro.`,
            path,
          }),
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
        ]}
      />

      <section className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumbs crumbs={crumbs} />
          <h1>{brand.name} Ice Machine Repair</h1>
          <p>{brand.blurb}</p>
        </div>
      </section>

      <article className="section section-light">
        <div className="prose">
          <p>
            {site.name} provides expert {brand.name} commercial ice machine
            repair across Nashville and the surrounding Middle Tennessee metro.
            Our technicians know the {brand.name} platform — how its harvest
            cycle, controls, and water system behave — so we diagnose faults
            accurately and get your machine back into production fast.
          </p>

          <h2>{brand.name} models we service</h2>
          <p>
            We work on current and older {brand.name} commercial equipment,
            including these popular lines:
          </p>
          <div className="chip-row">
            {brand.commonModels.map((m) => (
              <span className="chip" key={m}>
                {m}
              </span>
            ))}
          </div>
          <p>
            {brand.name} builds {brand.machineTypes.join(", ").toLowerCase()}{" "}
            machines, and we service all of them — from undercounter units up to
            high-output modular heads.
          </p>

          <h2>Common {brand.name} ice machine problems we fix</h2>
          <ul>
            {brand.commonIssues.map((issue) => (
              <li key={issue}>{issue}</li>
            ))}
          </ul>
          <p>
            Most {brand.name} failures trace back to scale, water quality, or a
            worn component — not a machine that needs replacing. We find the
            real cause, quote it up front, and back the repair with our 60-day
            workmanship guarantee.
          </p>

          <p style={{ marginTop: 32 }}>
            <a href={`tel:${site.phone.tel}`} className="btn btn-dark">
              <PhoneIcon />
              Call {site.phone.display}
            </a>
          </p>
        </div>
      </article>

      <section className="section section-ice">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Symptoms</span>
            <h2 className="section-title">
              {brand.name} Acting Up? Start Here
            </h2>
          </div>
          <div className="tile-grid">
            {relatedProblems.map((p) => (
              <Link key={p.slug} href={`/problems/${p.slug}`} className="tile">
                <h3>{p.name}</h3>
                <p>{p.quickInfo}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">{brand.name} Repair Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f) => (
              <div className="faq-item" key={f.question}>
                <h3>{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ice">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Other Brands We Repair</h2>
          </div>
          <div className="chip-row">
            {otherBrands.map((b) => (
              <Link key={b.slug} href={`/brands/${b.slug}`} className="chip">
                {b.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={`${brand.name} Ice Machine Down?`}
        subheading="Call now for fast, brand-experienced commercial ice machine repair."
      />
    </>
  );
}
