import { notFound } from "next/navigation";
import Link from "next/link";
import { getIndustry, industrySlugs, industries } from "@/lib/catalog";
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
import BrandsSection from "@/components/BrandsSection";
import JsonLd from "@/components/JsonLd";
import { PhoneIcon } from "@/components/icons";

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMetadata({
    title: `Ice Machine Repair for ${industry.name} | Nashville`,
    description: `Commercial ice machine repair, maintenance, and installation for ${industry.name.toLowerCase()} across the Nashville, TN metro. Fast response from a local team.`,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const path = `/industries/${industry.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: industry.name, path },
  ];

  const others = industries.filter((i) => i.slug !== industry.slug).slice(0, 6);
  const lower = industry.name.toLowerCase();

  const faqs = [
    {
      question: `Do you service ice machines for ${lower}?`,
      answer: `Yes. We provide commercial ice machine repair, preventive maintenance, and installation for ${lower} throughout the Nashville metro, on all major brands and machine types.`,
    },
    {
      question: "How quickly can you respond to an outage?",
      answer:
        "We prioritize commercial calls and dispatch to most Nashville-area locations the same day, with after-hours emergency service available when you can't wait.",
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `Ice Machine Repair for ${industry.name}`,
            description: industry.blurb,
            path,
          }),
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
        ]}
      />

      <section className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumbs crumbs={crumbs} />
          <h1>Ice Machine Repair for {industry.name}</h1>
          <p>{industry.blurb}</p>
        </div>
      </section>

      <article className="section section-light">
        <div className="prose">
          <p>
            For {lower}, a down ice machine isn&apos;t a minor inconvenience —
            it interrupts service, risks food safety, and costs money by the
            hour. {site.name} keeps {lower} across Greater Nashville running with
            fast repair, preventive maintenance, and clean, dependable ice.
          </p>
          <p>
            We service every major commercial brand and machine type, carry
            common parts for same-day repairs, and fix it right the first time.
            Whether you need an emergency fix or a
            recurring maintenance plan to stay ahead of breakdowns, we tailor
            the service to how your operation actually uses ice.
          </p>

          <h2>How we help {lower}</h2>
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

      <BrandsSection />

      <section className="section section-light">
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

      <section className="section section-ice">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Other Industries We Serve</h2>
          </div>
          <div className="chip-row">
            {others.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`} className="chip">
                {i.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={`Ice Machine Service for ${industry.name}`}
        subheading="Call now and keep your ice — and your business — running."
      />
    </>
  );
}
