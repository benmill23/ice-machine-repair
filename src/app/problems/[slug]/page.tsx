import { notFound } from "next/navigation";
import Link from "next/link";
import { getProblem, problemSlugs, problems } from "@/lib/catalog";
import { getService } from "@/lib/services";
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
  return problemSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const problem = getProblem(slug);
  if (!problem) return {};
  return pageMetadata({
    title: `${problem.name}? Causes & Repair | Nashville`,
    description: `${problem.quickInfo} Fast commercial ice machine repair across the Nashville, TN metro by a trusted local team.`,
    path: `/problems/${problem.slug}`,
  });
}

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const problem = getProblem(slug);
  if (!problem) notFound();

  const path = `/problems/${problem.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Problems", path: "/problems" },
    { name: problem.name, path },
  ];

  const repair = getService("commercial-ice-machine-repair");
  const related = problems.filter((p) => p.slug !== problem.slug).slice(0, 6);

  const faqs = [
    {
      question: `Why is my ${problem.searchPhrase.replace(/^ice machine /, "ice machine ")}?`,
      answer: `${problem.quickInfo} Common causes include: ${problem.causes.join("; ")}.`,
    },
    {
      question: "Can I fix this myself or should I call a technician?",
      answer:
        "Basic checks like confirming power, water supply, and a clean condenser are fine to do yourself. Anything involving the refrigeration system, controls, or sensors should be diagnosed by a licensed technician — guessing usually means paying for parts you don't need.",
    },
    {
      question: "How fast can you come out?",
      answer:
        "We prioritize commercial ice-machine calls and dispatch to most Nashville-area locations the same day. Call us and we'll give you an honest ETA.",
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${problem.name} — Ice Machine Repair`,
            description: problem.quickInfo,
            path,
          }),
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
        ]}
      />

      <section className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumbs crumbs={crumbs} />
          <h1>{problem.name}</h1>
          <p>{problem.quickInfo}</p>
        </div>
      </section>

      <article className="section section-light">
        <div className="prose">
          <h2>Likely causes</h2>
          <p>
            When we get a call about a {problem.searchPhrase}, these are the
            things our technicians check first:
          </p>
          <ul>
            {problem.causes.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <h2>How we fix it</h2>
          <p>
            We start with a real diagnosis — testing the water system,
            refrigeration circuit, electrical components, and controls — rather
            than swapping parts and hoping. Once we&apos;ve confirmed the root
            cause, we give you a clear price before doing the work, and fix it
            right the first time.
          </p>
          <p>
            A {problem.searchPhrase} often gets worse if it&apos;s left alone —
            a small water or scale issue can turn into a failed component. The
            sooner we look at it, the cheaper and faster the fix usually is.
          </p>

          <p style={{ marginTop: 32 }}>
            <a href={`tel:${site.phone.tel}`} className="btn btn-dark">
              <PhoneIcon />
              Call {site.phone.display}
            </a>
            {repair && (
              <Link
                href={`/services/${repair.slug}`}
                className="btn btn-secondary"
                style={{ marginLeft: 12 }}
              >
                Our Repair Service
              </Link>
            )}
          </p>
        </div>
      </article>

      <section className="section section-ice">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Questions About This Problem</h2>
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
            <h2 className="section-title">Other Ice Machine Problems</h2>
          </div>
          <div className="tile-grid">
            {related.map((p) => (
              <Link key={p.slug} href={`/problems/${p.slug}`} className="tile">
                <h3>{p.name}</h3>
                <p>{p.quickInfo}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ice Machine Acting Up?"
        subheading="Don't let a small problem shut down your ice. Call now for a fast diagnosis."
      />
    </>
  );
}
