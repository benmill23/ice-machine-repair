import { site } from "@/lib/site";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import GuaranteeSection from "@/components/GuaranteeSection";
import BrandsSection from "@/components/BrandsSection";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "About Us",
  description: `${site.name} is a family-owned, licensed and insured commercial ice machine repair company serving the Nashville, TN metro with fast service and guaranteed workmanship.`,
  path: "/about",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumbs crumbs={crumbs} />
          <h1>About {site.name}</h1>
          <p>
            A family-owned commercial refrigeration team keeping Nashville-area
            businesses stocked with ice.
          </p>
        </div>
      </section>

      <article className="section section-light">
        <div className="prose">
          <p>
            {site.name} is a family-owned, licensed and insured commercial ice
            machine repair company based in Nashville, Tennessee. We focus on
            one thing and do it well: keeping commercial ice machines running
            for the restaurants, bars, hotels, convenience stores, and
            healthcare facilities that depend on them.
          </p>

          <h2>Why businesses call us</h2>
          <p>
            A down ice machine isn&apos;t an inconvenience — it&apos;s lost
            revenue and unhappy customers. Our technicians respond fast,
            diagnose accurately, and carry common parts so most repairs are done
            in a single visit. We service all major brands and stand behind
            every job.
          </p>

          <h2>Honest, transparent service</h2>
          <p>
            We quote before we work, explain what&apos;s actually wrong, and
            tell you the truth about repair versus replacement. No surprise
            invoices, no parts you didn&apos;t need.
          </p>

          <ul>
            <li>Licensed &amp; insured refrigeration technicians</li>
            <li>20+ years of commercial ice machine experience</li>
            <li>Authorized service for all major brands</li>
            <li>60-day workmanship guarantee on repairs</li>
            <li>Transparent, up-front pricing</li>
          </ul>
        </div>
      </article>

      <GuaranteeSection />
      <BrandsSection />
      <CTASection />
    </>
  );
}
