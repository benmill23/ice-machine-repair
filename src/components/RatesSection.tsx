import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

const points = [
  {
    title: "Free, No-Obligation Quotes",
    body: "We diagnose the problem and give you a clear, upfront quote before any work begins. No service-call surprises.",
  },
  {
    title: "You Approve Before We Start",
    body: "Nothing gets fixed until you say yes to the price. No hidden fees, no padded hours, no upselling.",
  },
  {
    title: "Honest, Flat-Rate Pricing",
    body: "Every quote is tailored to your machine and the actual repair — not a one-size-fits-all hourly meter running against you.",
  },
];

/** Quote-only pricing section. */
export default function RatesSection() {
  return (
    <section className="section section-ice" id="rates">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Pricing</span>
          <h2 className="section-title">Quote-Based Pricing You Can Trust</h2>
          <p className="section-subtitle">
            Every job is different, so we quote every job. Call us, tell us
            what&apos;s happening, and we&apos;ll give you a straight answer on cost.
          </p>
        </div>

        <div className="tile-grid">
          {points.map((p) => (
            <div className="tile" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: 40 }}>
          <a href={`tel:${site.phone.tel}`} className="btn btn-primary">
            <PhoneIcon />
            Call {site.phone.display} for a Free Quote
          </a>
        </p>
      </div>
    </section>
  );
}
