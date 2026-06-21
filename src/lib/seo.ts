import type { Metadata } from "next";
import { site, formattedAddress, sameAs } from "./site";
import { services } from "./services";
import { locations } from "./locations";

/**
 * Build a page Metadata object with sensible local-SEO defaults
 * (canonical URL, Open Graph, Twitter). Pass a path like "/services".
 */
export function pageMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = new URL(path, site.url).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** Stable @id for the business node so other schema can reference it. */
const businessId = `${site.url}/#business`;

/**
 * LocalBusiness (HVACBusiness) schema — the cornerstone of local SEO.
 * Rendered site-wide in the root layout.
 */
export function localBusinessSchema() {
  const a = site.address;
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness"],
    "@id": businessId,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.shortDescription,
    telephone: site.phone.tel,
    email: site.email,
    image: `${site.url}/opengraph-image`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      ...(a.street ? { streetAddress: a.street } : {}),
      addressLocality: a.city,
      addressRegion: a.region,
      ...(a.postalCode ? { postalCode: a.postalCode } : {}),
      addressCountry: a.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: locations.map((l) => ({
      "@type": "City",
      name: `${l.name}, ${site.address.region}`,
    })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
      },
      geoRadius: site.serviceRadiusMiles * 1609, // miles → meters
    },
    openingHoursSpecification: site.hours.spec.map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: s.days,
      opens: s.opens,
      closes: s.closes,
    })),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: `${site.url}/services/${s.slug}`,
      },
    })),
    ...(sameAs().length ? { sameAs: sameAs() } : {}),
  };
}

/** Service schema for a /services/[slug] page, linked to the business. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: new URL(opts.path, site.url).toString(),
    serviceType: opts.name,
    provider: { "@id": businessId },
    areaServed: locations.map((l) => ({
      "@type": "City",
      name: `${l.name}, ${site.address.region}`,
    })),
  };
}

/** FAQPage schema — eligible for rich results. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** BreadcrumbList schema from [{name, path}] crumbs. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: new URL(c.path, site.url).toString(),
    })),
  };
}

export { formattedAddress };
