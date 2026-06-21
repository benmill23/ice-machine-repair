/**
 * Central business configuration — the single source of truth for NAP
 * (Name, Address, Phone), SEO metadata, and contact details.
 *
 * ⚠️  PLACEHOLDERS: Replace the values marked `TODO` with the real business
 * details before going live. Keeping these consistent everywhere (here, Google
 * Business Profile, directories) is critical for local SEO ranking.
 */

export const site = {
  // TODO: confirm registered business name
  name: "1st Choice Ice Machine Repair",
  legalName: "1st Choice Ice Machine Repair LLC",
  shortName: "1st Choice",
  tagline: "Ice Machine Repair",
  shortDescription:
    "Fast, reliable commercial ice machine repair, maintenance, and installation for Nashville-area businesses.",
  description:
    "1st Choice Ice Machine Repair provides fast, reliable commercial ice machine repair, preventive maintenance, and installation across the Nashville, TN metro area. Licensed, insured, and backed by a 60-day workmanship guarantee.",

  // Sister brand (shared ownership / cross-referral).
  parent: {
    name: "1st Choice Appliance Repair",
    url: "https://appliancerepairgeek.com/",
  },

  // Canonical production URL (no trailing slash).
  url: "https://www.fixmyicemaker.com",

  // TODO: real phone number. Keep `tel` E.164-ish (digits only) and `display`
  // human-readable — both must match your Google Business Profile exactly.
  phone: {
    display: "(615) 555-0123",
    tel: "+16155550123",
  },

  // TODO: real email
  email: "info@musiccityicemachinerepair.com",

  // TODO: real street address. A real address (even a registered business
  // address) strongly helps local rankings. If service-area only, you can hide
  // the street but keep city/region/geo.
  address: {
    street: "", // e.g. "123 Broadway"
    city: "Nashville",
    region: "TN",
    regionName: "Tennessee",
    postalCode: "37201",
    country: "US",
  },

  // Approx. geo center of the Nashville service area (downtown Nashville).
  geo: {
    latitude: 36.1627,
    longitude: -86.7816,
  },

  // Primary service radius in miles (used in copy + schema areaServed).
  serviceRadiusMiles: 40,

  hours: {
    // Standard dispatch hours shown in copy.
    standard: "Monday – Friday, 8:00 AM – 5:00 PM",
    emergency: "24/7 emergency service available",
    // For LocalBusiness openingHoursSpecification (JSON-LD).
    spec: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
  },

  rates: {
    standard: {
      price: 140,
      label: "Standard Service",
      hours: "Monday – Friday, 8:00 AM – 5:00 PM",
      featured: true,
    },
    overtime: {
      price: 210,
      label: "Overtime Service",
      hours: "After hours, weekends & holidays (2 hour minimum)",
      featured: false,
    },
  },

  stats: [
    { number: "20", suffix: "+", label: "Years Experience" },
    { number: "5K", suffix: "+", label: "Repairs Completed" },
    { number: "60", suffix: "", label: "Day Guarantee" },
    { number: "24", suffix: "hr", label: "Response Time" },
  ],

  // Authorized/serviced brands.
  brands: [
    "Manitowoc",
    "Scotsman",
    "Hoshizaki",
    "Ice-O-Matic",
    "Koldraft",
    "Follett",
  ],

  social: {
    // TODO: add real profile URLs (used in JSON-LD sameAs + footer).
    google: "", // Google Business Profile URL
    facebook: "",
    yelp: "",
  },
} as const;

export type Site = typeof site;

/** Profile URLs that exist, for schema `sameAs`. */
export function sameAs(): string[] {
  return Object.values(site.social).filter(Boolean) as string[];
}

/** Full single-line address string, skipping empty parts. */
export function formattedAddress(): string {
  const a = site.address;
  return [a.street, a.city, a.region, a.postalCode]
    .filter(Boolean)
    .join(", ");
}
