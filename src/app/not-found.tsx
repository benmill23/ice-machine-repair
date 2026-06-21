import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div className="page-hero-inner" style={{ textAlign: "center", margin: "0 auto" }}>
        <h1>Page Not Found</h1>
        <p style={{ margin: "0 auto 32px" }}>
          The page you&apos;re looking for has melted away. Let&apos;s get you
          back on track.
        </p>
        <div className="hero-buttons" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <a href={`tel:${site.phone.tel}`} className="btn btn-secondary">
            <PhoneIcon />
            {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
