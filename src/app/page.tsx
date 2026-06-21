import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { problems } from "@/lib/catalog";
import { PhoneIcon, CheckIcon } from "@/components/icons";
import Logo from "@/components/Logo";
import Wave from "@/components/Wave";
import ServiceCard from "@/components/ServiceCard";
import BrandsSection from "@/components/BrandsSection";
import RatesSection from "@/components/RatesSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import CTASection from "@/components/CTASection";

const heroBadges = [
  "Licensed & Insured",
  "All Major Brands",
  "60-Day Guarantee",
  "Same-Day Service",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-brand-50 px-6 pt-28 pb-24 md:pt-32 md:pb-28">
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-soft">
              <span className="h-2 w-2 rounded-full bg-success" />
              Same-Day Service Available
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.3rem]">
              Commercial{" "}
              <span className="text-brand-600">Ice Machine Repair</span> in
              Nashville, TN
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-600 lg:mx-0">
              When your ice machine goes down, every hour costs you sales. Our
              technicians repair every commercial brand — fast — and back the
              work with a 60-day guarantee.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2.5 lg:justify-start">
              {heroBadges.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-2 text-sm font-semibold text-ink-700"
                >
                  <CheckIcon className="h-5 w-5 text-success" />
                  {b}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={`tel:${site.phone.tel}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-600 px-8 py-4 text-lg font-bold text-white shadow-card transition-colors hover:bg-brand-700"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {site.phone.display}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brand-200 bg-white px-8 py-4 text-lg font-semibold text-ink-700 transition-colors hover:border-brand-600 hover:text-brand-600"
              >
                Get a Free Quote
              </Link>
            </div>

            <p className="mt-6 text-sm text-ink-500">
              Trusted by restaurants, bars &amp; hotels across Middle Tennessee
            </p>
          </div>

          {/* Brand + proof card */}
          <div className="flex justify-center">
            <div className="w-full max-w-[420px] rounded-2xl border border-brand-100 bg-white p-8 shadow-card sm:p-10">
              <div className="flex justify-center">
                <Logo priority className="h-40 w-auto sm:h-48" />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-ink-100 pt-8">
                {site.stats.map((s) => (
                  <div className="text-center" key={s.label}>
                    <div className="text-4xl font-extrabold leading-none tracking-tight text-brand-700">
                      {s.number}
                      {s.suffix && (
                        <span className="text-brand-400">{s.suffix}</span>
                      )}
                    </div>
                    <div className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-ink-500">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Wave fill="#ffffff" />
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Complete Ice Machine Services</h2>
            <p className="section-subtitle">
              From emergency repairs to preventive maintenance, we keep your ice
              machines running at peak performance.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <BrandsSection />

      {/* Common problems */}
      <section className="section section-ice">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Troubleshooting</span>
            <h2 className="section-title">Common Ice Machine Problems</h2>
            <p className="section-subtitle">
              Ice machine acting up? Find your symptom and learn what&apos;s
              likely wrong — then call us for a fast, accurate fix.
            </p>
          </div>
          <div className="tile-grid">
            {problems.slice(0, 6).map((p) => (
              <Link key={p.slug} href={`/problems/${p.slug}`} className="tile">
                <h3>{p.name}</h3>
                <p>{p.quickInfo}</p>
              </Link>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/problems" className="btn btn-secondary">
              See All Problems We Fix
            </Link>
          </p>
        </div>
      </section>

      <RatesSection />
      <GuaranteeSection />
      <CTASection />
    </>
  );
}
