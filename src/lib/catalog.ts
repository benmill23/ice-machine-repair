/**
 * Three SEO entity catalogs, each powering its own set of landing pages:
 *
 *  - problems   → /problems/[slug]   ("ice machine not making ice")  diagnostic intent
 *  - industries → /industries/[slug] (restaurants, hotels, healthcare) audience intent
 *  - equipment  → /equipment/[slug]  (modular, nugget, flake)         equipment intent
 *
 * All content is hand-grounded in real refrigeration/ice-machine behavior so
 * each page is genuinely unique (not a templated keyword swap).
 */

export type Problem = {
  slug: string;
  /** The symptom as a searcher phrases it (H1). */
  name: string;
  /** The common search query (meta seed). */
  searchPhrase: string;
  /** Likely causes a technician checks. */
  causes: string[];
  /** 1-2 sentence explanation. */
  quickInfo: string;
};

export const problems: Problem[] = [
  {
    slug: "ice-machine-not-making-ice",
    name: "Ice Machine Not Making Ice",
    searchPhrase: "ice machine not making ice",
    causes: [
      "No incoming water supply or a closed / clogged water inlet valve",
      "Failed contactor, control board, or thermostat preventing the harvest cycle",
      "Low refrigerant charge from a leak in the sealed system",
      "Dirty condenser coil causing the unit to overheat and shut down on a safety limit",
      "Scale buildup on the evaporator or a faulty water-level / float sensor",
    ],
    quickInfo:
      "When a commercial ice machine produces no ice at all, the cause can range from a simple water-supply issue to a sealed-system refrigerant fault. Pinpointing it reliably requires professional diagnosis with proper gauges and electrical testing.",
  },
  {
    slug: "ice-machine-not-harvesting-ice",
    name: "Ice Machine Not Releasing or Harvesting Ice",
    searchPhrase: "ice machine not dropping ice",
    causes: [
      "Faulty hot-gas harvest valve that won't warm the evaporator to release the ice sheet",
      "Defective harvest / curtain switch or water-level probe stuck in the freeze cycle",
      "Scale or mineral buildup making ice cling to the evaporator plate",
      "Failed control board timing the harvest cycle incorrectly",
      "Weak water pump unable to flush the evaporator during harvest",
    ],
    quickInfo:
      "If ice forms but never drops into the bin, the machine is usually stuck between the freeze and harvest cycles. Diagnosing whether it's the hot-gas valve, a sensor, or a control fault should be done by a technician.",
  },
  {
    slug: "ice-machine-leaking-water",
    name: "Ice Machine Leaking Water",
    searchPhrase: "ice machine leaking water",
    causes: [
      "Clogged or misaligned drain line causing water to back up and overflow",
      "Cracked or worn water trough, distribution tube, or inlet tubing",
      "Failed water inlet valve that won't fully close",
      "Damaged or improperly seated bin / door gasket or splash curtain",
      "Overfilling caused by a faulty float or water-level control",
    ],
    quickInfo:
      "Water pooling around or under an ice machine usually points to a drain, seal, or water-valve problem rather than the sealed refrigeration system. A technician can locate the source and prevent water damage and slip hazards.",
  },
  {
    slug: "ice-machine-making-small-ice",
    name: "Ice Machine Making Small or Incomplete Cubes",
    searchPhrase: "ice machine making small ice cubes",
    causes: [
      "Low water-supply pressure or a partially clogged water inlet valve",
      "Scale buildup on the evaporator restricting water flow over the plate",
      "Harvest cycle terminating too early from a miscalibrated control or thermistor",
      "Low refrigerant charge reducing freezing capacity",
      "Dirty water-distribution tube creating uneven water coverage",
    ],
    quickInfo:
      "Thin, small, or partially formed cubes usually indicate the freeze cycle is being cut short or water isn't flowing evenly across the evaporator. Proper diagnosis involves checking water flow, scale, and the sealed system.",
  },
  {
    slug: "ice-machine-cloudy-ice",
    name: "Cloudy, Soft, or Hollow Ice",
    searchPhrase: "ice machine making cloudy ice",
    causes: [
      "Heavy mineral or scale buildup from hard water on the evaporator",
      "Missing or exhausted water filtration allowing high dissolved solids",
      "Insufficient water flow over the evaporator plate during freeze",
      "Incomplete freeze cycle producing soft or wet ice",
      "Dirty water trough or sump needing cleaning and sanitizing",
    ],
    quickInfo:
      "Cloudy, soft, or fast-melting ice typically results from poor water quality, inadequate filtration, or scale interfering with clear-ice formation. A technician can clean the system and correct filtration to restore clear, hard cubes.",
  },
  {
    slug: "ice-machine-stuck-on-freeze-cycle",
    name: "Ice Machine Stuck in One Cycle / Won't Cycle",
    searchPhrase: "ice machine stuck on freeze cycle",
    causes: [
      "Faulty control board or timer not advancing the cycle",
      "Stuck water-level or harvest sensor giving a false reading",
      "Defective bin / curtain switch interrupting normal operation",
      "Failed contactor or relay for the compressor or hot-gas valve",
      "Thermistor / temperature sensor out of calibration",
    ],
    quickInfo:
      "A machine that hangs in the freeze or harvest cycle is almost always a control, sensor, or relay fault. Reliable repair requires electrical diagnosis of the control circuit and components.",
  },
  {
    slug: "ice-machine-bin-overflowing",
    name: "Bin Overfilling / Ice Won't Shut Off",
    searchPhrase: "ice machine bin keeps overflowing",
    causes: [
      "Failed bin thermostat or ice-level sensor not signaling the machine to stop",
      "Misadjusted or obstructed bin-control sensing arm",
      "Faulty control board ignoring the bin-full signal",
      "Stuck curtain or splash switch reading as 'not full'",
      "Wiring fault in the bin-control circuit",
    ],
    quickInfo:
      "When the machine keeps producing ice past a full bin, the bin-full sensing control has usually failed or is obstructed. A technician can test and recalibrate the bin control to stop overproduction and jamming.",
  },
  {
    slug: "ice-machine-making-loud-noise",
    name: "Ice Machine Making Loud or Unusual Noises",
    searchPhrase: "ice machine making loud noise",
    causes: [
      "Worn condenser or evaporator fan-motor bearings",
      "Failing water pump or pump cavitation from low water",
      "Compressor wear or internal mechanical fault",
      "Loose panels, mounting hardware, or fan blades",
      "Scale-restricted water flow causing knocking or gurgling",
    ],
    quickInfo:
      "Grinding, rattling, or buzzing noises commonly come from a failing fan motor, water pump, or compressor. Because noises can signal an imminent failure, professional inspection is recommended.",
  },
  {
    slug: "ice-machine-ice-tastes-bad",
    name: "Ice Smells or Tastes Bad",
    searchPhrase: "ice machine ice tastes bad",
    causes: [
      "Mold, slime, or bacterial biofilm in the bin, trough, or water lines",
      "Missing or expired water filtration",
      "Absorption of odors from nearby stored food or chemicals",
      "Scale buildup harboring contaminants",
      "Lack of regular cleaning and sanitizing per the manufacturer schedule",
    ],
    quickInfo:
      "Off-tasting or smelly ice is usually a sanitation or water-quality issue, often from biofilm or inadequate filtration. A professional deep clean, sanitizing, and filter service typically resolves it and protects food safety.",
  },
  {
    slug: "ice-machine-freezing-up",
    name: "Ice Machine Freezing Up / Iced Over",
    searchPhrase: "ice machine freezing up",
    causes: [
      "Harvest cycle failing so ice never releases and builds up on the evaporator",
      "Faulty hot-gas valve unable to warm the plate for harvest",
      "Defective thermistor or control extending the freeze cycle",
      "Low airflow or low ambient / water temperatures",
      "Scale or sensor fault disrupting normal freeze / harvest timing",
    ],
    quickInfo:
      "A solid sheet of ice locking up the evaporator means the harvest cycle isn't completing, often due to a hot-gas valve or control fault. A technician should diagnose it before the buildup damages components.",
  },
  {
    slug: "ice-machine-wont-turn-on",
    name: "Ice Machine Won't Turn On / No Power",
    searchPhrase: "ice machine won't turn on",
    causes: [
      "Tripped breaker, blown fuse, or disconnected power supply",
      "Failed on/off or master switch",
      "Faulty control board or transformer",
      "Open high-pressure or safety limit switch shutting the unit down",
      "Loose or damaged wiring connections",
    ],
    quickInfo:
      "A completely dead machine can stem from a power-supply problem, a tripped safety switch, or a failed control component. An electrical diagnosis is needed to safely isolate the cause.",
  },
  {
    slug: "ice-machine-not-cooling",
    name: "Ice Machine Not Cooling / Running Warm",
    searchPhrase: "ice machine not getting cold",
    causes: [
      "Dirty condenser coil restricting heat rejection",
      "Low refrigerant charge from a sealed-system leak",
      "Failing compressor not pumping properly",
      "Faulty condenser fan motor on air-cooled units",
      "Inadequate water flow or high condenser-water temperature on water-cooled units",
    ],
    quickInfo:
      "If the machine runs but won't get cold enough to freeze ice, the issue is usually in the refrigeration system or condenser cooling. Diagnosing refrigerant and compressor faults requires a licensed technician with gauges.",
  },
  {
    slug: "ice-machine-shuts-off-mid-cycle",
    name: "Ice Machine Overheating / Shutting Off Mid-Cycle",
    searchPhrase: "ice machine shuts off then restarts",
    causes: [
      "Clogged condenser coil or air filter causing high head pressure",
      "Failed condenser fan motor on air-cooled units",
      "High ambient temperature or poor ventilation clearance around the machine",
      "High-pressure safety switch tripping to protect the compressor",
      "Scale-fouled condenser on water-cooled units",
    ],
    quickInfo:
      "A machine that runs then shuts off on a safety limit is usually overheating because it can't reject heat — often from a dirty condenser or failed fan. Cleaning and fan / condenser service restores proper operation.",
  },
  {
    slug: "ice-machine-low-production",
    name: "Low Ice Production / Slow to Make Ice",
    searchPhrase: "ice machine not making enough ice",
    causes: [
      "Dirty condenser coil reducing efficiency",
      "Scale buildup on the evaporator slowing freeze times",
      "Low refrigerant charge",
      "High ambient or incoming water temperature increasing cycle times",
      "Worn compressor or restricted water flow",
    ],
    quickInfo:
      "When output drops below the machine's rated capacity, efficiency losses from scale, a dirty condenser, or a weak sealed system are common culprits. A technician can measure cycle times and restore rated production.",
  },
];

export function getProblem(slug: string): Problem | undefined {
  return problems.find((p) => p.slug === slug);
}
export const problemSlugs = problems.map((p) => p.slug);

export type Industry = {
  slug: string;
  /** Plural label (H1 / card). */
  name: string;
  blurb: string;
};

export const industries: Industry[] = [
  {
    slug: "restaurants",
    name: "Restaurants",
    blurb:
      "Restaurants depend on a steady ice supply for beverages and food safety, and our fast repair and preventive maintenance keep service running without health-code or downtime risk.",
  },
  {
    slug: "bars-and-nightclubs",
    name: "Bars & Nightclubs",
    blurb:
      "Bars need high-volume, clean ice for cocktails and chilling, and we keep machines producing reliably through busy nights with rapid-response repairs.",
  },
  {
    slug: "hotels-and-hospitality",
    name: "Hotels & Hospitality",
    blurb:
      "Hotels rely on guest-floor and kitchen ice machines for guest satisfaction, and we service multiple units to prevent outages that lead to complaints.",
  },
  {
    slug: "hospitals-and-healthcare",
    name: "Hospitals & Healthcare",
    blurb:
      "Healthcare facilities require sanitary, dependable ice for patient care and food service, and our maintenance helps meet strict cleaning and reliability standards.",
  },
  {
    slug: "nursing-homes-and-assisted-living",
    name: "Nursing Homes & Assisted Living",
    blurb:
      "Care facilities need clean, always-available ice for resident hydration and dining, and we keep machines sanitized and running to protect vulnerable residents.",
  },
  {
    slug: "convenience-stores-and-gas-stations",
    name: "Convenience Stores & Gas Stations",
    blurb:
      "C-stores and gas stations sell bagged ice and stock fountain drinks, so we keep ice machines and dispensers producing to protect a steady revenue stream.",
  },
  {
    slug: "coffee-shops-and-cafes",
    name: "Coffee Shops & Cafés",
    blurb:
      "Cafés rely on consistent nugget or cube ice for iced and blended drinks, and we minimize downtime so peak-hour service is never interrupted.",
  },
  {
    slug: "breweries-and-beverage-producers",
    name: "Breweries & Beverage Producers",
    blurb:
      "Breweries and beverage makers use ice for cooling and production processes, and we maintain high-capacity machines to keep operations on schedule.",
  },
  {
    slug: "schools-and-universities",
    name: "Schools & Universities",
    blurb:
      "Campus cafeterias and athletic programs need reliable, sanitary ice in volume, and our scheduled maintenance keeps machines compliant and ready.",
  },
  {
    slug: "grocery-and-supermarkets",
    name: "Grocery Stores & Supermarkets",
    blurb:
      "Supermarkets use ice for seafood displays, packaged-ice sales, and delis, and we keep machines running to protect product freshness and sales.",
  },
  {
    slug: "country-clubs-and-banquet-venues",
    name: "Country Clubs & Banquet Venues",
    blurb:
      "Clubs and event venues need large ice volumes for dining and events, and we provide responsive service so functions are never short on ice.",
  },
  {
    slug: "catering-and-event-companies",
    name: "Catering & Event Companies",
    blurb:
      "Caterers and event companies depend on on-site ice for off-premise service, and we keep their machines reliable for every booking.",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
export const industrySlugs = industries.map((i) => i.slug);

export type Equipment = {
  slug: string;
  name: string;
  blurb: string;
};

export const equipment: Equipment[] = [
  {
    slug: "modular-ice-machines",
    name: "Modular Ice Machines",
    blurb:
      "A high-capacity ice-making head that mounts on top of a separate storage bin or dispenser, used where large daily volumes are needed.",
  },
  {
    slug: "undercounter-ice-machines",
    name: "Undercounter Ice Machines",
    blurb:
      "Compact, self-contained units with a built-in bin that fit beneath a counter — ideal for bars, cafés, and small kitchens with moderate ice needs.",
  },
  {
    slug: "countertop-ice-dispensers",
    name: "Countertop Ice & Water Dispensers",
    blurb:
      "Sanitary push-button units that dispense ice and often water directly into cups, common in healthcare, break rooms, and self-serve areas.",
  },
  {
    slug: "cube-ice-machines",
    name: "Cube / Cuber Ice Machines",
    blurb:
      "Machines that produce hard, slow-melting cube or dice ice on a grid evaporator — the standard for beverages in restaurants and bars.",
  },
  {
    slug: "nugget-ice-machines",
    name: "Nugget Ice Machines",
    blurb:
      "Units that produce soft, chewable nugget (pellet) ice, popular in healthcare, cafés, and convenience stores for its texture and cooling speed.",
  },
  {
    slug: "flake-ice-machines",
    name: "Flake Ice Machines",
    blurb:
      "Machines that make soft, moldable flake ice used for seafood and produce displays, food prep, and therapeutic cooling in healthcare.",
  },
  {
    slug: "air-cooled-ice-machines",
    name: "Air-Cooled Ice Machines",
    blurb:
      "Units that reject heat through an air-cooled condenser — the most common type — requiring adequate ventilation and clearance around the machine.",
  },
  {
    slug: "water-cooled-ice-machines",
    name: "Water-Cooled Ice Machines",
    blurb:
      "Machines that use a water-cooled condenser for heat rejection, suited to hot or poorly ventilated locations but requiring more water and scale management.",
  },
  {
    slug: "remote-condenser-ice-machines",
    name: "Remote-Condenser Ice Machines",
    blurb:
      "Systems with the condenser mounted outside or on the roof to move heat and noise away from the work area, common in large kitchens.",
  },
  {
    slug: "ice-and-beverage-dispensers",
    name: "Ice & Beverage Dispensers",
    blurb:
      "Combination units that store and dispense ice (and sometimes beverages) hygienically without scooping, used in cafeterias, hospitals, and self-serve lines.",
  },
];

export function getEquipment(slug: string): Equipment | undefined {
  return equipment.find((e) => e.slug === slug);
}
export const equipmentSlugs = equipment.map((e) => e.slug);
