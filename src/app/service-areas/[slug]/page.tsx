import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getLocation,
  locationSlugs,
  nearbyLocations,
} from "@/lib/locations";
import { services } from "@/lib/services";
import { problems } from "@/lib/catalog";
import { site } from "@/lib/site";
import {
  pageMetadata,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
} from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import BrandsSection from "@/components/BrandsSection";
import JsonLd from "@/components/JsonLd";
import { PhoneIcon, PinIcon } from "@/components/icons";

export function generateStaticParams() {
  return locationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  return pageMetadata({
    title: `Ice Machine Repair in ${loc.name}, TN`,
    description: `Fast commercial ice machine repair, cleaning, and installation in ${loc.name}, ${loc.county}. Licensed, insured, all major brands.`,
    path: `/service-areas/${loc.slug}`,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const path = `/service-areas/${loc.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: loc.name, path },
  ];

  const nearby = nearbyLocations(loc.slug, 5);
  const topProblems = problems.slice(0, 6);
  const pop = loc.population.toLocaleString("en-US");

  const faqs = [
    {
      question: `Do you repair commercial ice machines in ${loc.name}?`,
      answer: `Yes. We provide commercial ice machine repair, cleaning, and installation throughout ${loc.name} and the rest of ${loc.county}, on all major brands. We dispatch to most ${loc.name} businesses the same day.`,
    },
    {
      question: `How fast can you get to my business in ${loc.name}?`,
      answer: `We prioritize commercial ice-machine calls and reach most ${loc.name} locations the same day, with after-hours emergency service available when you can't wait.`,
    },
    {
      question: `Why does my ${loc.name} ice machine keep scaling up?`,
      answer: `Much of the Middle Tennessee water supply is moderately hard, so mineral scale builds on the evaporator and water lines over time — the leading cause of low production and harvest faults. Regular descaling keeps ${loc.name} machines running at full capacity.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: `Ice Machine Repair in ${loc.name}, TN`,
            description: `Commercial ice machine repair, cleaning, and installation serving ${loc.name}, ${loc.county}.`,
            path,
          }),
          faqSchema(faqs),
        ]}
      />

      <section className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumbs crumbs={crumbs} />
          <h1>Ice Machine Repair in {loc.name}, TN</h1>
          <p>{loc.blurb}</p>
        </div>
      </section>

      <article className="section section-light">
        <div className="prose">
          <p>
            {site.name} provides fast, reliable commercial ice machine service
            throughout {loc.name} and the rest of {loc.county}. Home to roughly{" "}
            {pop} residents and a busy mix of restaurants, bars, hotels, and
            retail, {loc.name} runs on dependable ice — and when a machine goes
            down, every hour costs you sales. We prioritize getting a technician
            on-site quickly and fixing the problem right the first time.
          </p>
          <p>
            We service all major commercial brands, carry common parts on our
            trucks for same-day repairs, and fix it right the first time.
            Whether you run a restaurant, bar, hotel,
            convenience store, or healthcare facility in {loc.name}, we keep
            your ice production running.
          </p>

          {loc.neighborhoods.length > 0 && (
            <>
              <h2>Areas we serve in &amp; around {loc.name}</h2>
              <p>
                We regularly service businesses in these {loc.name} districts
                and commercial corridors:
              </p>
              <div className="chip-row">
                {loc.neighborhoods.map((n) => (
                  <span className="chip" key={n}>
                    {n}
                  </span>
                ))}
              </div>
            </>
          )}

          <h2>Hard water &amp; your {loc.name} ice machine</h2>
          <p>
            Like most of {loc.county} and the wider Nashville metro, {loc.name}{" "}
            sits on moderately hard water. Every freeze cycle leaves a little
            more mineral scale on the evaporator and water lines, which insulates
            the plate, lengthens harvest times, shrinks your cubes, and
            eventually triggers breakdowns. It&apos;s the single most common
            reason we get called out. Routine{" "}
            <Link href="/services/ice-machine-cleaning-and-descaling">
              cleaning and descaling
            </Link>{" "}
            keeps your machine producing clear, full-size, food-safe ice.
          </p>

          <h2>Our {loc.name} ice machine services</h2>
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
            <span className="section-label">Symptoms</span>
            <h2 className="section-title">
              Ice Machine Trouble in {loc.name}?
            </h2>
          </div>
          <div className="tile-grid">
            {topProblems.map((p) => (
              <Link key={p.slug} href={`/problems/${p.slug}`} className="tile">
                <h3>{p.name}</h3>
                <p>{p.quickInfo}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BrandsSection />

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">{loc.name} Ice Machine Questions</h2>
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

      {nearby.length > 0 && (
        <section className="section section-ice">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Nearby Service Areas</h2>
            </div>
            <div className="chip-row">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/service-areas/${n.slug}`}
                  className="chip"
                >
                  <PinIcon />
                  {n.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading={`Ice Machine Down in ${loc.name}?`}
        subheading="Call now for fast, professional commercial ice machine service."
      />
    </>
  );
}
