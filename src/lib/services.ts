/**
 * Service catalog. Each entry powers a card on the home page AND a dedicated
 * SEO landing page at /services/[slug] with its own metadata, body copy, and
 * FAQ schema. `icon` is a key into the icon map in components/icons.tsx.
 */

export type FAQ = { question: string; answer: string };

export type Service = {
  slug: string;
  /** Card / nav label. */
  name: string;
  /** H1 on the detail page. */
  title: string;
  icon: string;
  /** One-line card description + meta description seed. */
  shortDescription: string;
  /** Lead paragraph on the detail page. */
  intro: string;
  /** Body sections (h2 + paragraphs). */
  sections: { heading: string; body: string[] }[];
  /** Bulleted highlights shown in a sidebar / list. */
  highlights: string[];
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    slug: "commercial-ice-machine-repair",
    name: "Commercial Repair",
    title: "Commercial Ice Machine Repair",
    icon: "wrench",
    shortDescription:
      "Expert repair for every type of commercial ice machine — cubers, nugget, and flake — from all major brands, backed by a 60-day guarantee.",
    intro:
      "Commercial ice machines are workhorses, but heavy duty cycles, hard water, and round-the-clock demand take their toll. We diagnose and repair every class of commercial ice machine — modular cubers, undercounter units, nugget and flake makers — across all major brands, and back the work with a 60-day workmanship guarantee.",
    sections: [
      {
        heading: "Repairs for every machine and brand",
        body: [
          "Whether you run a single undercounter unit behind the bar or a bank of high-output modular heads in a hotel kitchen, our technicians know the platforms. We service Manitowoc, Scotsman, Hoshizaki, Ice-O-Matic, Follett, Kold-Draft, and the rest of the major commercial brands, and we stock the parts that fail most often.",
          "From water and refrigeration systems to controls, sensors, and harvest mechanisms, we repair the whole machine — not just the symptom you noticed.",
        ],
      },
      {
        heading: "Accurate diagnosis, honest pricing",
        body: [
          "We test the water system, refrigeration circuit, electrical components, and controls to find the real root cause, then give you a clear price before any work begins. On older machines we'll give you a straight repair-versus-replace recommendation so you can make the call with full information.",
          "Most repairs are completed the same day because our trucks carry common OEM parts — water inlet valves, contactors, control boards, pumps, fan motors, and sensors.",
        ],
      },
    ],
    highlights: [
      "All commercial brands and machine types serviced",
      "Trucks stocked with common OEM parts",
      "Root-cause diagnosis with up-front pricing",
      "60-day workmanship guarantee on every repair",
    ],
    faqs: [
      {
        question: "What types of commercial ice machines do you repair?",
        answer:
          "All of them — modular cube machines, undercounter units, nugget and flake ice makers, ice-and-water dispensers, and air-, water-, and remote-cooled systems from every major commercial brand.",
      },
      {
        question: "How much does a commercial ice machine repair cost?",
        answer:
          "It depends on the failure, but we always diagnose first and give you a clear price before doing the work. Our standard service rate applies during business hours, with an overtime rate for after-hours and weekend emergency calls.",
      },
      {
        question: "Do you guarantee your repairs?",
        answer:
          "Yes. Every repair is backed by a 60-day workmanship guarantee. If the same issue returns within that window, we make it right.",
      },
    ],
  },
  {
    slug: "emergency-ice-machine-repair",
    name: "Emergency Repair",
    title: "Emergency Ice Machine Repair",
    icon: "wrench",
    shortDescription:
      "Fast response when your ice machine breaks down. We diagnose and fix issues quickly to minimize business disruption.",
    intro:
      "When your commercial ice machine fails, every hour costs you sales and scrambling. Our Nashville technicians respond fast, diagnose accurately, and carry common parts to get most machines producing ice the same day.",
    sections: [
      {
        heading: "Same-day diagnosis and repair",
        body: [
          "A down ice machine is an emergency for restaurants, bars, hotels, healthcare facilities, and convenience stores. We prioritize emergency calls and aim to be on-site fast across the Nashville metro.",
          "Our trucks are stocked with the parts that fail most often — water inlet valves, contactors, control boards, pumps, and sensors — so a large share of repairs are completed in a single visit.",
        ],
      },
      {
        heading: "Common problems we fix",
        body: [
          "No ice or low production, ice that's cloudy or undersized, machines that won't harvest, water leaks, frozen evaporators, noisy compressors, and recurring shut-offs.",
          "We don't just clear the symptom — we identify the root cause (scale buildup, refrigeration leak, failing component, or water quality) so the same failure doesn't return next week.",
        ],
      },
    ],
    highlights: [
      "Fast emergency response across Greater Nashville",
      "Trucks stocked with common OEM parts",
      "Most repairs completed same day",
      "60-day workmanship guarantee on the repair",
    ],
    faqs: [
      {
        question: "How fast can you get to my business?",
        answer:
          "We prioritize emergency calls and dispatch to most Nashville-area locations the same day. Call us and we'll give you an honest ETA before we head out.",
      },
      {
        question: "Do you charge extra for after-hours emergency service?",
        answer:
          "After-hours, weekend, and holiday calls are billed at our overtime rate with a 2-hour minimum. We'll always confirm the rate before dispatching.",
      },
      {
        question: "Can you repair my brand of ice machine?",
        answer:
          "Yes. We service all major commercial brands including Manitowoc, Scotsman, Hoshizaki, Ice-O-Matic, Koldraft, and Follett.",
      },
    ],
  },
  {
    slug: "preventive-maintenance",
    name: "Preventive Maintenance",
    title: "Ice Machine Preventive Maintenance",
    icon: "shield",
    shortDescription:
      "Regular maintenance plans to prevent breakdowns, extend equipment life, and ensure optimal ice production.",
    intro:
      "Most ice machine breakdowns are preventable. Scheduled cleaning and inspection keeps production high, energy costs down, and your health inspector happy — while avoiding the emergency call entirely.",
    sections: [
      {
        heading: "What a maintenance visit includes",
        body: [
          "Full descale and sanitize of the water system, inspection of water filters, cleaning of the condenser, checking refrigerant charge and electrical connections, and verifying harvest cycles and production rates against spec.",
          "We document everything and flag wear items before they fail, so you can budget repairs instead of being surprised by them.",
        ],
      },
      {
        heading: "Why it pays for itself",
        body: [
          "A scaled, dirty machine works harder, makes less ice, uses more energy, and dies younger. Routine maintenance protects your equipment investment and keeps ice safe to serve.",
          "We offer recurring plans (typically two to four visits per year depending on water hardness and usage) so you never have to remember to schedule it.",
        ],
      },
    ],
    highlights: [
      "Scheduled descale, sanitize, and inspection",
      "Catches small issues before they become failures",
      "Improves ice output and lowers energy use",
      "Helps meet health-code cleanliness standards",
    ],
    faqs: [
      {
        question: "How often should a commercial ice machine be cleaned?",
        answer:
          "Most manufacturers recommend a full cleaning and sanitizing at least twice a year. High-volume operations or areas with hard water — common around Nashville — often benefit from quarterly service.",
      },
      {
        question: "Do you offer recurring maintenance plans?",
        answer:
          "Yes. We set up a recurring schedule based on your machine, water quality, and usage so it's handled automatically and you stay ahead of breakdowns.",
      },
    ],
  },
  {
    slug: "ice-machine-installation",
    name: "Installation",
    title: "Commercial Ice Machine Installation",
    icon: "box",
    shortDescription:
      "Professional installation of new ice machines with proper setup, testing, and documentation for warranty coverage.",
    intro:
      "A correct installation is the difference between a machine that runs trouble-free for a decade and one that fights you from day one. We handle water, drain, electrical, and startup to manufacturer spec.",
    sections: [
      {
        heading: "Done right the first time",
        body: [
          "We confirm the location has adequate clearance and airflow, connect water and drain lines correctly, verify electrical requirements, install filtration, and complete the manufacturer's startup procedure.",
          "Proper installation is also what protects your manufacturer warranty — we document the setup so your coverage stays intact.",
        ],
      },
      {
        heading: "Sizing and equipment advice",
        body: [
          "Not sure which machine you need? We help you match production capacity and bin size to your real demand so you're not constantly running out of ice or paying to make more than you use.",
        ],
      },
    ],
    highlights: [
      "Water, drain, electrical, and filtration setup",
      "Manufacturer startup procedure followed",
      "Installation documented for warranty",
      "90-day guarantee on new installations",
    ],
    faqs: [
      {
        question: "Can you help me choose the right ice machine?",
        answer:
          "Absolutely. We'll assess your volume, available space, ice type, and budget, then recommend the right capacity so you're not under- or over-buying.",
      },
      {
        question: "Is the installation guaranteed?",
        answer:
          "Yes. We guarantee our installations are free from refrigeration leaks or installation errors for 90 days.",
      },
    ],
  },
  {
    slug: "ice-machine-diagnostics",
    name: "Diagnostics",
    title: "Ice Machine Diagnostics",
    icon: "clipboard",
    shortDescription:
      "Comprehensive diagnostic services to identify issues accurately before recommending the most cost-effective solution.",
    intro:
      "Guessing at ice machine problems wastes money on parts you don't need. We diagnose accurately first, then give you a clear, honest recommendation — repair or replace — with the costs up front.",
    sections: [
      {
        heading: "Accurate diagnosis, honest advice",
        body: [
          "We test the water system, refrigeration circuit, electrical components, and controls to pinpoint the real cause rather than swapping parts and hoping.",
          "If a repair isn't worth it on an aging machine, we'll tell you — and help you weigh repair against replacement so you make the call with full information.",
        ],
      },
    ],
    highlights: [
      "Full water, refrigeration, and electrical testing",
      "Root-cause diagnosis, not parts-swapping",
      "Clear repair-vs-replace recommendation",
      "Cost provided before any work begins",
    ],
    faqs: [
      {
        question: "Will you tell me if it's not worth repairing?",
        answer:
          "Yes. If a machine is old enough or the repair is costly enough that replacement makes more sense, we'll give you a straight answer and help you decide.",
      },
    ],
  },
  {
    slug: "warranty-service",
    name: "Warranty Service",
    title: "Authorized Warranty Service",
    icon: "doc",
    shortDescription:
      "Authorized warranty repair for major brands. We handle manufacturer claims so you can focus on your business.",
    intro:
      "If your ice machine is still under manufacturer warranty, we can perform authorized repairs and handle the claim paperwork — so a covered repair stays covered and you don't pay for what you shouldn't.",
    sections: [
      {
        heading: "We handle the claim",
        body: [
          "Warranty repairs come with their own paperwork and authorization steps. We manage that process with the manufacturer so the covered portion is handled correctly and you stay focused on running your business.",
          "We service warranty work for major commercial brands and use OEM parts to keep your coverage valid.",
        ],
      },
    ],
    highlights: [
      "Authorized warranty repair for major brands",
      "OEM parts to preserve coverage",
      "Manufacturer claim paperwork handled for you",
    ],
    faqs: [
      {
        question: "Which brands can you do warranty work for?",
        answer:
          "We service major commercial ice machine brands. Have your model and serial number ready and we'll confirm your warranty status and what's covered.",
      },
    ],
  },
  {
    slug: "ice-machine-cleaning-and-descaling",
    name: "Cleaning & Descaling",
    title: "Ice Machine Cleaning & Descaling",
    icon: "shield",
    shortDescription:
      "Professional deep cleaning, descaling, and sanitizing to remove scale and biofilm, restore ice output, and keep ice safe to serve.",
    intro:
      "Scale and slime are the two things that quietly kill commercial ice machines — and contaminate the ice you serve. Our professional cleaning and descaling service strips mineral buildup off the evaporator, sanitizes the entire water path, and restores your machine to full, food-safe production.",
    sections: [
      {
        heading: "Why descaling matters in Middle Tennessee",
        body: [
          "Much of the Nashville area runs moderately hard water, and minerals bake onto the evaporator and water lines every freeze cycle. That scale insulates the plate, lengthens harvest times, shrinks your cubes, and eventually causes harvest faults and breakdowns.",
          "A proper descale dissolves that buildup with the manufacturer-approved nickel-safe cleaner, then we flush, sanitize, and verify the machine is making clear, full-size ice again.",
        ],
      },
      {
        heading: "Clean ice is food-safe ice",
        body: [
          "Ice is a food product, and health inspectors treat it that way. Mold, slime, and biofilm in the bin and water system are among the most common ice-machine violations. We sanitize the bin, trough, distribution tubes, and curtain so what comes out is safe to serve.",
          "We also check and replace water filters, which protect your machine between cleanings and keep ice tasting clean.",
        ],
      },
    ],
    highlights: [
      "Full descale of evaporator and water system",
      "Sanitize bin, trough, and distribution components",
      "Removes mold, slime, and biofilm",
      "Restores ice output and protects food safety",
    ],
    faqs: [
      {
        question: "How often should a commercial ice machine be cleaned?",
        answer:
          "Most manufacturers recommend a full cleaning and sanitizing at least twice a year. High-volume operations or hard-water areas — common around Nashville — often benefit from quarterly service.",
      },
      {
        question: "What's the difference between cleaning and descaling?",
        answer:
          "Descaling dissolves mineral scale off the evaporator and water path; sanitizing kills mold, slime, and bacteria in the bin and components. A complete service does both — they solve different problems.",
      },
    ],
  },
  {
    slug: "consultation",
    name: "Consultation",
    title: "Ice Machine Consultation",
    icon: "help",
    shortDescription:
      "Expert advice on equipment selection, capacity planning, and energy efficiency upgrades for your operation.",
    intro:
      "Opening, expanding, or just tired of running out of ice? We provide expert consultation on equipment selection, capacity planning, water treatment, and energy-efficiency upgrades tailored to your operation.",
    sections: [
      {
        heading: "Plan for the ice you actually need",
        body: [
          "We help you forecast demand, choose the right ice type and machine class, plan for peak periods, and account for Nashville's water conditions so your equipment performs reliably and economically.",
        ],
      },
    ],
    highlights: [
      "Equipment selection and capacity planning",
      "Water treatment recommendations",
      "Energy-efficiency upgrade guidance",
    ],
    faqs: [
      {
        question: "Do you charge for a consultation?",
        answer:
          "Reach out and tell us what you're planning — we'll let you know how we can help and what, if anything, a site assessment involves.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
