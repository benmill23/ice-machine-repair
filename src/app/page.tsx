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
} from "@/components/icons";
import ServiceCard from "@/components/ServiceCard";
import BrandsSection from "@/components/BrandsSection";
import RatesSection from "@/components/RatesSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import CTASection from "@/components/CTASection";

const heroBadges = [
  "Licensed & Insured",
  "Same-Day Service",
  "60-Day Guarantee",
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

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white px-6 pt-28 pb-16 md:pt-32 md:pb-20">
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
              Same-Day · Licensed &amp; Insured · Quote-Only
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-[1.06] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.3rem]">
              Commercial Ice Machine Repair in Nashville —{" "}
              <span className="text-brand-600">back up today.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-600 lg:mx-0">
              Fast, reliable commercial ice machine repair across Greater
              Nashville. Every major brand, licensed &amp; insured technicians,
              and honest quote-only pricing — backed by a 60-day guarantee.
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

          {/* Photo */}
          <div className="reveal-2 relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink-200 bg-ink-100 shadow-lift">
              <Image
                src="/photos/hero.jpg"
                alt="1st Choice technician repairing a commercial ice machine in Nashville, TN"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 hidden items-center gap-3 rounded-xl border border-ink-200 bg-white p-3.5 pr-5 shadow-card sm:flex">
              <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-brand-600 leading-none text-white">
                <span className="text-lg font-extrabold">60</span>
                <span className="text-[8px] font-bold uppercase tracking-wide">Day</span>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold text-ink-900">Workmanship Guarantee</div>
                <div className="text-xs text-ink-500">No charge on misdiagnosis</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <div className="trust-strip">
        <div className="trust-item">
          <Stars />
          <span>
            {rating.value}/5 on {rating.source}
          </span>
        </div>
        <div className="trust-item">
          <ShieldCheckIcon />
          Licensed &amp; Insured
        </div>
        <div className="trust-item">
          <BoltIcon />
          Same-Day Emergency Service
        </div>
        <div className="trust-item">
          <SnowflakeIcon />
          All Major Brands Serviced
        </div>
        <div className="trust-item">
          <CheckIcon />
          Quote-Only · No Hidden Fees
        </div>
      </div>

      {/* ===== SERVICES ===== */}
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

      {/* ===== PROOF / PHOTOS ===== */}
      <section className="section section-ice">
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

      {/* ===== REVIEWS ===== */}
      <section className="section section-light" id="reviews">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Reviews</span>
            <h2 className="section-title">What Nashville Businesses Say</h2>
            <p className="section-subtitle">
              <span className="inline-flex items-center gap-2 align-middle">
                <Stars />
              </span>{" "}
              {rating.value} average from {rating.count}+ verified {rating.source}{" "}
              reviews.
            </p>
          </div>
          <div className="reviews-grid">
            {reviews.map((r) => (
              <div className="review-card" key={r.name}>
                <Stars n={r.stars} />
                <p className="quote">“{r.quote}”</p>
                <div className="who">
                  <div className="avatar">{r.name.charAt(0)}</div>
                  <div>
                    <div className="name">{r.name}</div>
                    <div className="meta">
                      {r.org} · {r.city}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREA + MAP ===== */}
      <section className="section section-ice">
        <div className="area-grid">
          <div>
            <span className="section-label">Service Area</span>
            <h2 className="section-title">Serving Greater Nashville</h2>
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
      <GuaranteeSection />
      <CTASection />
    </>
  );
}
