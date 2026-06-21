import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getService, serviceSlugs } from "@/lib/services";
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
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.title} in Nashville, TN`,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path },
  ];

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.title,
            description: service.shortDescription,
            path,
          }),
          breadcrumbSchema(crumbs),
          ...(service.faqs.length ? [faqSchema(service.faqs)] : []),
        ]}
      />

      <section className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumbs crumbs={crumbs} />
          <h1>{service.title} in Nashville, TN</h1>
          <p>{service.intro}</p>
        </div>
      </section>

      <article className="section section-light">
        <div className="prose">
          {service.highlights.length > 0 && (
            <ul>
              {service.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}

          {service.sections.map((sec) => (
            <section key={sec.heading}>
              <h2>{sec.heading}</h2>
              {sec.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}

          <p style={{ marginTop: 32 }}>
            <a href={`tel:${site.phone.tel}`} className="btn btn-dark">
              <PhoneIcon />
              Call {site.phone.display}
            </a>
          </p>
        </div>
      </article>

      {service.faqs.length > 0 && (
        <section className="section section-ice">
          <div className="container">
            <div className="section-header">
              <span className="section-label">FAQ</span>
              <h2 className="section-title">Common Questions</h2>
            </div>
            <div className="faq-list">
              {service.faqs.map((f) => (
                <div className="faq-item" key={f.question}>
                  <h3>{f.question}</h3>
                  <p>{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Other Services</h2>
          </div>
          <div className="tile-grid">
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="tile">
                <h3>{r.name}</h3>
                <p>{r.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={`Need ${service.name}?`}
        subheading="Call now and talk to a real ice machine technician about your equipment."
      />
    </>
  );
}
