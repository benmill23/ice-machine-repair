import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { problems } from "@/lib/catalog";
import { locations } from "@/lib/locations";
import {
  PhoneIcon,
  CheckIcon,
  StarIcon,
  ShieldCheckIcon,
  PinIcon,
  BoltIcon,
  SnowflakeIcon,
  GoogleG,
  serviceIcons,
} from "@/components/icons";
import BrandsSection from "@/components/BrandsSection";
import RatesSection from "@/components/RatesSection";
import CTASection from "@/components/CTASection";

const heroBadges = [
  "Licensed & Insured",
  "Same-Day Service",
  "Free Estimates",
  "All Major Brands",
];

const proofPhotos = [
  { src: "/photos/proof-1.jpg", alt: "Technician repairing an open commercial ice machine" },
  { src: "/photos/proof-2.jpg", alt: "Commercial ice machine in a Nashville restaurant kitchen" },
  { src: "/photos/proof-3.jpg", alt: "Freshly serviced and cleaned commercial ice machine" },
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="stars" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </span>
  );
}

export default function Home() {
  const { rating, reviews } = site;
  const trust = [
    { ic: <ShieldCheckIcon />, big: "Licensed & Insured", sub: "Certified refrigeration techs" },
    { ic: <BoltIcon />, big: "Same-Day Service", sub: "Emergency dispatch, 7 days" },
    { ic: <SnowflakeIcon />, big: "All Major Brands", sub: "Manitowoc, Scotsman, Hoshizaki…" },
    { ic: <StarIcon />, big: `${rating.value}★ on Google`, sub: `${rating.count}+ verified reviews` },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white px-6 pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          {/* Copy */}
          <div className="reveal text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-ink-200 bg-white px-3.5 py-1.5 shadow-soft">
              <Stars />
              <span className="text-sm font-semibold text-ink-700">
                {rating.value} · {rating.count}+ {rating.source} reviews
              </span>
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[1.5px] text-brand-700">
              Family-Owned · Licensed &amp; Insured · Quote-Only
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.3rem]">
              Commercial Ice Machine Repair in Nashville —{" "}
              <span className="u-accent">up &amp; running today.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-600 lg:mx-0">
              Fast, reliable repair for every commercial brand across Greater
              Nashville — from a local team you can trust. Honest quotes, clean
              work, and the job done right the first time.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a href={`tel:${site.phone.tel}`} className="btn btn-primary text-base">
                <PhoneIcon />
                Call {site.phone.display}
              </a>
              <Link href="/contact" className="btn btn-secondary text-base">
                Request Service
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
              {heroBadges.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-2 text-sm font-semibold text-ink-700"
                >
                  <CheckIcon className="h-[18px] w-[18px] text-success" />
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Photo — real van */}
          <div className="reveal-2 relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink-200 bg-ink-100 shadow-lift">
              <Image
                src="/1st-choice-appliance-truck.webp"
                alt="1st Choice service van — commercial ice machine repair in Nashville, TN"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 hidden items-center gap-3 rounded-xl border border-ink-200 bg-white p-3.5 pr-5 shadow-card sm:flex">
              <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-brand-600 leading-none text-white">
                <span className="text-lg font-extrabold">{rating.value}</span>
                <span className="text-[8px] font-bold uppercase tracking-wide">Google</span>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold text-ink-900">Rated {rating.value} on Google</div>
                <div className="text-xs text-ink-500">{rating.count}+ verified reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLUE SPLASH: trust + services ===== */}
      <section className="blueband" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why 1st Choice</span>
            <h2 className="section-title">Ice Machine Problems? We&apos;ve Got You Covered.</h2>
            <p className="section-subtitle">
              One local team for every commercial ice machine repair, cleaning,
              and maintenance job in Middle Tennessee.
            </p>
          </div>

          <div className="trust-cols">
            {trust.map((t) => (
              <div className="trust-col" key={t.big}>
                <div className="ic">{t.ic}</div>
                <div className="big">{t.big}</div>
                <div className="sub">{t.sub}</div>
              </div>
            ))}
          </div>

          <div className="bb-grid">
            {services.slice(0, 6).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="bb-card">
                <div className="bb-ic">{serviceIcons[s.icon]}</div>
                <h3>{s.name}</h3>
                <p>{s.shortDescription}</p>
                <span className="bb-more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROOF / PHOTOS ===== */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Real Work</span>
            <h2 className="section-title">On the Job Across Middle Tennessee</h2>
            <p className="section-subtitle">
              Real technicians, real repairs — keeping Nashville restaurants,
              bars, and hotels stocked with ice.
            </p>
          </div>
          <div className="proof-grid">
            {proofPhotos.map((p) => (
              <div className="proof-photo" key={p.src}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandsSection />

      {/* ===== REVIEWS (Google style) ===== */}
      <section className="section section-light" id="reviews">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Reviews</span>
            <h2 className="section-title">What Nashville Businesses Say</h2>
            <p className="section-subtitle inline-flex flex-wrap items-center justify-center gap-2">
              <Stars /> {rating.value} average from {rating.count}+ verified{" "}
              {rating.source} reviews
            </p>
          </div>
          <div className="reviews-grid">
            {reviews.map((r) => (
              <div className="review-card" key={r.name}>
                <GoogleG className="gmark" />
                <div className="head">
                  <div className="avatar" style={{ background: r.color }}>
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="name">
                      {r.name} <Stars n={r.stars} />
                    </div>
                    <div className="when">
                      {r.org} · {r.when}
                    </div>
                  </div>
                </div>
                <p className="quote">{r.quote}</p>
                <a
                  className="more"
                  href={site.social.google || "#"}
                  target={site.social.google ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  Read Full Review on Google
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COUNTIES WE PROUDLY SERVE ===== */}
      <section className="section section-ice">
        <div className="area-grid">
          <div>
            <span className="section-label">Service Area</span>
            <h2 className="section-title">
              Counties We <span className="u-accent">Proudly Serve</span>
            </h2>
            <p style={{ fontSize: 17, color: "var(--ink-600)", lineHeight: 1.75, maxWidth: 480 }}>
              Family-owned and based in Nashville, we dispatch across roughly a{" "}
              {site.serviceRadiusMiles}-mile radius of the metro — including these
              communities and everywhere between.
            </p>
            <div className="area-list">
              {locations.slice(0, 10).map((l) => (
                <Link key={l.slug} href={`/service-areas/${l.slug}`}>
                  <PinIcon />
                  {l.name}
                </Link>
              ))}
            </div>
            <p style={{ marginTop: 22 }}>
              <Link href="/service-areas" className="read-more">
                See all service areas →
              </Link>
            </p>
          </div>
          <div className="map-frame">
            <iframe
              title="1st Choice Ice Machine Repair service area — Greater Nashville, TN"
              src="https://www.google.com/maps?q=Nashville,Tennessee&z=9&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ===== COMMON PROBLEMS ===== */}
      <section className="section section-light">
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
          <p style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/problems" className="btn btn-secondary">
              See All Problems We Fix
            </Link>
          </p>
        </div>
      </section>

      <RatesSection />
      <CTASection />
    </>
  );
}
