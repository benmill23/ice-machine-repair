import { notFound } from "next/navigation";
import Link from "next/link";
import { getEquipment, equipmentSlugs, equipment } from "@/lib/catalog";
import { services } from "@/lib/services";
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
  return equipmentSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const eq = getEquipment(slug);
  if (!eq) return {};
  return pageMetadata({
    title: `${eq.name} Repair & Service | Nashville`,
    description: `${eq.blurb} Expert commercial repair and maintenance across the Nashville, TN metro by a trusted local team.`,
    path: `/equipment/${eq.slug}`,
  });
}

export default async function EquipmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const eq = getEquipment(slug);
  if (!eq) notFound();

  const path = `/equipment/${eq.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Equipment", path: "/equipment" },
    { name: eq.name, path },
  ];

  const others = equipment.filter((e) => e.slug !== eq.slug).slice(0, 6);
  const lower = eq.name.toLowerCase();

  const faqs = [
    {
      question: `Do you repair ${lower}?`,
      answer: `Yes. We service ${lower} from every major commercial brand — diagnosing water, refrigeration, control, and harvest issues and completing most repairs the same day.`,
    },
    {
      question: `How often should ${lower} be cleaned?`,
      answer:
        "Most manufacturers recommend a full cleaning and sanitizing at least twice a year, and quarterly in hard-water areas like much of the Nashville metro. Regular service prevents the scale and slime that cause most failures.",
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${eq.name} Repair`,
            description: eq.blurb,
            path,
          }),
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
        ]}
      />

      <section className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumbs crumbs={crumbs} />
          <h1>{eq.name} Repair &amp; Service</h1>
          <p>{eq.blurb}</p>
        </div>
      </section>

      <article className="section section-light">
        <div className="prose">
          <p>
            {site.name} repairs and maintains {lower} for commercial kitchens
            and businesses across the Nashville metro. We know how this style of
            machine is built and how it tends to fail, so we diagnose accurately
            and get you back to full ice production fast.
          </p>
          <p>
            We service every major brand of {lower}, carry common parts for
            same-day repairs, and fix it right the first time. Beyond repair,
            scheduled cleaning and descaling keeps
            this equipment producing clean, food-safe ice and prevents the scale
            buildup that causes most breakdowns.
          </p>

          <h2>Services for {lower}</h2>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>

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
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
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

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Other Equipment We Service</h2>
          </div>
          <div className="chip-row">
            {others.map((e) => (
              <Link key={e.slug} href={`/equipment/${e.slug}`} className="chip">
                {e.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
