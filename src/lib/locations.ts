/**
 * Service-area locations. Each entry powers a local-SEO landing page at
 * /service-areas/[slug] targeting "ice machine repair in {city}" searches.
 *
 * These are real cities/suburbs in the Greater Nashville metro. Each page is
 * differentiated by county, population, named business districts, and a
 * generated city-specific FAQ — NOT a city-name swap (see SEO strategy notes).
 */

export type Location = {
  slug: string;
  /** City name. */
  name: string;
  county: string;
  /** Short blurb used in the area grid + meta description seed. */
  blurb: string;
  /** Notable neighborhoods / business districts for on-page relevance. */
  neighborhoods: string[];
  /** Approximate population, used in on-page copy for differentiation. */
  population: number;
  geo: { latitude: number; longitude: number };
  /** Is this the primary HQ city? */
  primary?: boolean;
};

export const locations: Location[] = [
  {
    slug: "nashville",
    name: "Nashville",
    county: "Davidson County",
    blurb:
      "Commercial ice machine repair for restaurants, bars, hotels, and healthcare facilities across Nashville and Davidson County.",
    neighborhoods: [
      "Downtown / Broadway",
      "The Gulch",
      "Midtown",
      "Germantown",
      "East Nashville",
      "Music Row",
      "Berry Hill",
    ],
    population: 689447,
    geo: { latitude: 36.1627, longitude: -86.7816 },
    primary: true,
  },
  {
    slug: "murfreesboro",
    name: "Murfreesboro",
    county: "Rutherford County",
    blurb:
      "Ice machine repair, installation, and maintenance for Murfreesboro restaurants and the wider Rutherford County area.",
    neighborhoods: [
      "The Avenue",
      "Downtown Square",
      "Gateway District",
      "Medical Center Parkway",
      "Old Fort Parkway",
    ],
    population: 162900,
    geo: { latitude: 35.8456, longitude: -86.3903 },
  },
  {
    slug: "clarksville",
    name: "Clarksville",
    county: "Montgomery County",
    blurb:
      "Commercial ice machine service for Clarksville's restaurants, hotels, and convenience stores in Montgomery County.",
    neighborhoods: [
      "Downtown Clarksville",
      "Sango",
      "Governors Square",
      "Madison Street Corridor",
      "Wilma Rudolph Blvd",
    ],
    population: 178400,
    geo: { latitude: 36.5298, longitude: -87.3595 },
  },
  {
    slug: "franklin",
    name: "Franklin",
    county: "Williamson County",
    blurb:
      "Fast ice machine service for Franklin's restaurants, breweries, and offices in Williamson County.",
    neighborhoods: [
      "Historic Downtown Franklin",
      "Cool Springs",
      "Berry Farms",
      "McEwen",
      "Westhaven",
    ],
    population: 87000,
    geo: { latitude: 35.9251, longitude: -86.8689 },
  },
  {
    slug: "hendersonville",
    name: "Hendersonville",
    county: "Sumner County",
    blurb:
      "Commercial ice machine service for Hendersonville businesses along the Sumner County lakefront.",
    neighborhoods: [
      "Indian Lake",
      "Streets of Indian Lake",
      "Glenbrook",
      "Sanders Ferry",
      "Walton Ferry",
    ],
    population: 62100,
    geo: { latitude: 36.3048, longitude: -86.62 },
  },
  {
    slug: "spring-hill",
    name: "Spring Hill",
    county: "Maury County",
    blurb:
      "Reliable ice machine repair and maintenance for Spring Hill restaurants and retail across the Maury and Williamson county line.",
    neighborhoods: [
      "The Crossings of Spring Hill",
      "Wades Grove",
      "Port Royal",
      "Campbell Station",
      "Main Street Corridor",
    ],
    population: 59400,
    geo: { latitude: 35.7512, longitude: -86.93 },
  },
  {
    slug: "smyrna",
    name: "Smyrna",
    county: "Rutherford County",
    blurb:
      "Commercial ice machine repair and preventive maintenance for Smyrna businesses in Rutherford County.",
    neighborhoods: [
      "Downtown Smyrna",
      "Sam Ridley Parkway",
      "Almaville",
      "Nissan Drive Corridor",
    ],
    population: 56600,
    geo: { latitude: 35.9828, longitude: -86.5186 },
  },
  {
    slug: "antioch",
    name: "Antioch",
    county: "Davidson County",
    blurb:
      "Dependable commercial ice machine repair for Antioch restaurants, markets, and convenience stores in southeast Davidson County.",
    neighborhoods: [
      "Hickory Hollow",
      "Cane Ridge",
      "Bell Road Corridor",
      "Priest Lake",
    ],
    population: 49800,
    geo: { latitude: 36.0595, longitude: -86.6722 },
  },
  {
    slug: "gallatin",
    name: "Gallatin",
    county: "Sumner County",
    blurb:
      "Ice machine service for restaurants and businesses across Gallatin and northern Sumner County.",
    neighborhoods: [
      "Downtown Square",
      "Nashville Pike Corridor",
      "Station Camp",
      "Foxland Harbor",
    ],
    population: 47800,
    geo: { latitude: 36.3884, longitude: -86.4467 },
  },
  {
    slug: "brentwood",
    name: "Brentwood",
    county: "Williamson County",
    blurb:
      "Reliable commercial ice machine repair and maintenance throughout Brentwood and Maryland Farms.",
    neighborhoods: [
      "Maryland Farms",
      "Cool Springs (North)",
      "Brentwood Place",
      "Town Center",
    ],
    population: 45800,
    geo: { latitude: 36.0331, longitude: -86.7828 },
  },
  {
    slug: "columbia",
    name: "Columbia",
    county: "Maury County",
    blurb:
      "Commercial ice machine repair for Columbia restaurants and businesses across Maury County.",
    neighborhoods: [
      "Downtown Square",
      "James Campbell Boulevard",
      "Northway",
      "Bear Creek Pike",
    ],
    population: 45100,
    geo: { latitude: 35.6151, longitude: -87.0353 },
  },
  {
    slug: "lebanon",
    name: "Lebanon",
    county: "Wilson County",
    blurb:
      "Ice machine repair, maintenance, and installation for Lebanon businesses in Wilson County.",
    neighborhoods: [
      "Downtown Square",
      "South Hartmann Drive",
      "Providence",
      "West Main Corridor",
    ],
    population: 43200,
    geo: { latitude: 36.2081, longitude: -86.2911 },
  },
  {
    slug: "mount-juliet",
    name: "Mount Juliet",
    county: "Wilson County",
    blurb:
      "Dependable ice machine repair for Mount Juliet restaurants, convenience stores, and offices near Providence.",
    neighborhoods: [
      "Providence Marketplace",
      "Paddocks",
      "Del Webb Lake Providence",
      "Old Town",
    ],
    population: 41500,
    geo: { latitude: 36.2009, longitude: -86.5186 },
  },
  {
    slug: "madison",
    name: "Madison",
    county: "Davidson County",
    blurb:
      "Commercial ice machine service for Madison businesses along the Gallatin Pike corridor in north Davidson County.",
    neighborhoods: [
      "Gallatin Pike Corridor",
      "Neelys Bend",
      "Amqui",
      "Old Hickory Boulevard",
    ],
    population: 39600,
    geo: { latitude: 36.257, longitude: -86.7139 },
  },
  {
    slug: "la-vergne",
    name: "La Vergne",
    county: "Rutherford County",
    blurb:
      "Ice machine repair for La Vergne restaurants, warehouses, and convenience stores in northern Rutherford County.",
    neighborhoods: [
      "Murfreesboro Road Corridor",
      "Waldron Road",
      "Lake Forest",
      "Old Nashville Highway",
    ],
    population: 39500,
    geo: { latitude: 36.0156, longitude: -86.5819 },
  },
  {
    slug: "hermitage",
    name: "Hermitage",
    county: "Davidson County",
    blurb:
      "Commercial ice machine repair and maintenance for Hermitage businesses in eastern Davidson County.",
    neighborhoods: [
      "Old Hickory Boulevard",
      "Lebanon Pike Corridor",
      "Central Pike",
      "Summit area",
    ],
    population: 39500,
    geo: { latitude: 36.1867, longitude: -86.6033 },
  },
  {
    slug: "donelson",
    name: "Donelson",
    county: "Davidson County",
    blurb:
      "Fast ice machine service for Donelson restaurants and the businesses around Nashville International Airport.",
    neighborhoods: [
      "Lebanon Pike Corridor",
      "Donelson Pike",
      "Airport / BNA area",
      "McGavock Pike",
    ],
    population: 36500,
    geo: { latitude: 36.1745, longitude: -86.6722 },
  },
  {
    slug: "bellevue",
    name: "Bellevue",
    county: "Davidson County",
    blurb:
      "Commercial ice machine repair for Bellevue restaurants and retail in southwest Davidson County.",
    neighborhoods: [
      "One Bellevue Place",
      "Highway 70 Corridor",
      "Newsom Station",
      "Old Hickory Boulevard",
    ],
    population: 33800,
    geo: { latitude: 36.0728, longitude: -86.9486 },
  },
  {
    slug: "springfield",
    name: "Springfield",
    county: "Robertson County",
    blurb:
      "Ice machine repair and maintenance for Springfield businesses across Robertson County.",
    neighborhoods: [
      "Downtown Square",
      "Memorial Boulevard",
      "Highway 431 Corridor",
      "Tom Austin Highway",
    ],
    population: 18900,
    geo: { latitude: 36.5092, longitude: -86.8839 },
  },
  {
    slug: "nolensville",
    name: "Nolensville",
    county: "Williamson County",
    blurb:
      "Commercial ice machine service for Nolensville restaurants and shops in northern Williamson County.",
    neighborhoods: [
      "Historic Downtown Nolensville",
      "Nolensville Road Corridor",
      "Burkitt Place",
      "Bent Creek",
    ],
    population: 16500,
    geo: { latitude: 35.9523, longitude: -86.67 },
  },
  {
    slug: "dickson",
    name: "Dickson",
    county: "Dickson County",
    blurb:
      "Ice machine repair for Dickson restaurants, hotels, and businesses along the I-40 corridor.",
    neighborhoods: [
      "Downtown Dickson",
      "Highway 46 Corridor",
      "Beasley Drive",
      "Henslee Drive",
    ],
    population: 16400,
    geo: { latitude: 36.077, longitude: -87.3878 },
  },
  {
    slug: "white-house",
    name: "White House",
    county: "Robertson County",
    blurb:
      "Commercial ice machine service for White House businesses along the Highway 76 corridor.",
    neighborhoods: [
      "Highway 76 Corridor",
      "Tyree Springs Road",
      "Downtown White House",
      "Industrial Park",
    ],
    population: 13400,
    geo: { latitude: 36.4711, longitude: -86.6517 },
  },
  {
    slug: "portland",
    name: "Portland",
    county: "Sumner County",
    blurb:
      "Ice machine repair and maintenance for Portland businesses in northern Sumner County.",
    neighborhoods: [
      "Downtown Portland",
      "Highway 109 Corridor",
      "Highway 52 Corridor",
      "College Street",
    ],
    population: 13800,
    geo: { latitude: 36.5814, longitude: -86.5167 },
  },
  {
    slug: "old-hickory",
    name: "Old Hickory",
    county: "Davidson County",
    blurb:
      "Commercial ice machine repair for Old Hickory restaurants and businesses near the Cumberland River.",
    neighborhoods: [
      "Old Hickory Village",
      "Robinson Road",
      "Hadley Bend",
      "Rayon City",
    ],
    population: 12000,
    geo: { latitude: 36.2553, longitude: -86.6189 },
  },
  {
    slug: "thompsons-station",
    name: "Thompson's Station",
    county: "Williamson County",
    blurb:
      "Ice machine service for Thompson's Station restaurants and shops in southern Williamson County.",
    neighborhoods: [
      "Tollgate Village",
      "Bridgemore Village",
      "Columbia Pike Corridor",
      "Canterbury",
    ],
    population: 9800,
    geo: { latitude: 35.7986, longitude: -86.9072 },
  },
  {
    slug: "fairview",
    name: "Fairview",
    county: "Williamson County",
    blurb:
      "Commercial ice machine repair for Fairview businesses along the Highway 100 corridor.",
    neighborhoods: [
      "Downtown Fairview",
      "Highway 100 Corridor",
      "Fairview Boulevard",
      "Cumberland Drive",
    ],
    population: 9700,
    geo: { latitude: 35.9837, longitude: -87.1281 },
  },
  {
    slug: "pleasant-view",
    name: "Pleasant View",
    county: "Cheatham County",
    blurb:
      "Ice machine service for Pleasant View businesses in Cheatham County.",
    neighborhoods: [
      "Highway 41 Corridor",
      "Highway 49 Corridor",
      "Downtown Pleasant View",
      "Pleasant View Village",
    ],
    population: 5400,
    geo: { latitude: 36.3839, longitude: -87.0381 },
  },
  {
    slug: "ashland-city",
    name: "Ashland City",
    county: "Cheatham County",
    blurb:
      "Commercial ice machine repair for Ashland City restaurants and businesses along the Cumberland River.",
    neighborhoods: [
      "Downtown Ashland City",
      "Highway 12 Corridor",
      "Frey Street",
      "Riverbluff",
    ],
    population: 5200,
    geo: { latitude: 36.2742, longitude: -87.0644 },
  },
  {
    slug: "kingston-springs",
    name: "Kingston Springs",
    county: "Cheatham County",
    blurb:
      "Ice machine service for Kingston Springs businesses along the Highway 70 corridor west of Nashville.",
    neighborhoods: [
      "Downtown Kingston Springs",
      "Highway 70 Corridor",
      "Sweeney Hollow",
      "Burns Road area",
    ],
    population: 2900,
    geo: { latitude: 36.1009, longitude: -87.1142 },
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export const locationSlugs = locations.map((l) => l.slug);

/** Up to `n` other cities in the same county (or nearest by list order) for
 *  internal linking — keeps city pages from cross-linking the whole set. */
export function nearbyLocations(slug: string, n = 4): Location[] {
  const current = getLocation(slug);
  if (!current) return [];
  const sameCounty = locations.filter(
    (l) => l.slug !== slug && l.county === current.county,
  );
  const others = locations.filter(
    (l) => l.slug !== slug && l.county !== current.county,
  );
  return [...sameCounty, ...others].slice(0, n);
}
