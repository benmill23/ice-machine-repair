import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { problems } from "@/lib/catalog";
import { PhoneIcon, CheckIcon, StarIcon } from "@/components/icons";
import Logo from "@/components/Logo";
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
      {/* Hero — dark, dramatic, industrial */}
      <section className="relative isolate overflow-hidden bg-ink-950 px-6 pt-32 text-white">
        {/* atmosphere: cold glow + crystal lattice + grain */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[12%] top-[-18%] h-[560px] w-[560px] rounded-full bg-ice-500/20 blur-[130px]" />
          <div className="absolute right-[-8%] top-[12%] h-[500px] w-[500px] rounded-full bg-brand-600/25 blur-[140px]" />
        </div>
        <div aria-hidden="true" className="frost-lattice opacity-70" />
        <div aria-hidden="true" className="grain" />

        <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left: message */}
          <div className="text-center lg:text-left">
            <span className="reveal eyebrow on-dark">
              Commercial Refrigeration · Nashville, TN
            </span>

            <h1 className="reveal-1 mt-6 text-[2.7rem] font-extrabold leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-[4.3rem]">
              Commercial <span className="text-ice">Ice Machine Repair</span>{" "}
              <span className="text-ink-300">that&apos;s back online today.</span>
            </h1>

            <p className="reveal-2 mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink-300 lg:mx-0">
              When your ice machine goes down, every hour costs you sales. We
              repair every commercial brand across Greater Nashville — fast — and
              back the work with a 60-day guarantee.
            </p>

            <div className="reveal-3 mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a href={`tel:${site.phone.tel}`} className="btn btn-primary text-base">
                <PhoneIcon />
                Call {site.phone.display}
              </a>
              <Link href="/contact" className="btn btn-ghost-light text-base">
                Get a Free Quote
              </Link>
            </div>

            <div className="reveal-4 mt-9 flex flex-wrap justify-center gap-x-6 gap-y-2.5 lg:justify-start">
              {heroBadges.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-2 text-sm font-medium text-ink-300"
                >
                  <CheckIcon className="h-[18px] w-[18px] text-ice-400" />
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right: industrial spec panel */}
          <div className="reveal-2 mx-auto w-full max-w-[440px] lg:ml-auto lg:mr-0">
            <div className="frost-card rounded-2xl p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <Logo priority className="h-16 w-auto" />
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2 font-tech text-[11px] uppercase tracking-[2px] text-ice-300">
                    <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_0_4px_rgba(45,212,191,0.25)]" />
                    Available now
                  </div>
                  <div className="mt-1.5 font-tech text-[11px] uppercase tracking-[2px] text-ink-400">
                    Same-day dispatch
                  </div>
                </div>
              </div>

              <dl className="divide-y divide-white/10">
                {site.stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-baseline justify-between gap-4 py-3.5"
                  >
                    <dt className="font-tech text-[11px] uppercase tracking-[2px] text-ink-400">
                      {s.label}
                    </dt>
                    <dd className="font-display text-2xl font-extrabold leading-none tracking-tight text-white">
                      {s.number}
                      {s.suffix && <span className="text-ice-400">{s.suffix}</span>}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                <div className="flex gap-1 text-ice-400">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <span className="font-tech text-[10.5px] uppercase tracking-[1.5px] text-ink-400">
                  Trusted across Middle&nbsp;TN
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand marquee */}
        <div className="relative z-10 border-t border-white/10 py-6">
          <div className="marquee">
            <div className="marquee-track">
              {[...site.brands, ...site.brands].map((b, i) => (
                <span
                  key={i}
                  className="font-tech text-sm uppercase tracking-[3px] text-ink-500"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
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
