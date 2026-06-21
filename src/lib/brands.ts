/**
 * Commercial ice machine brands we service. Each entry powers a brand landing
 * page at /brands/[slug] targeting "{brand} ice machine repair" searches —
 * high commercial intent. Content is differentiated per brand by real model
 * lines, machine types, and brand-specific failure modes.
 */

export type Brand = {
  slug: string;
  name: string;
  /** One-sentence description of the brand. */
  blurb: string;
  /** Real model lines / series for on-page relevance (do not invent). */
  commonModels: string[];
  /** Ice machine styles this brand makes. */
  machineTypes: string[];
  /** Problems common to this brand's machines. */
  commonIssues: string[];
};

export const brands: Brand[] = [
  {
    slug: "manitowoc",
    name: "Manitowoc",
    blurb:
      "One of the most widely installed commercial ice machine brands in North America, known for modular cubers paired with separate storage bins, EasyTouch controls, and the optional iAuCS automatic cleaning system.",
    commonModels: [
      "Indigo NXT Series",
      "iT / iYT Series Cubers",
      "QuietQube (remote)",
      "NEO Undercounter",
    ],
    machineTypes: ["Modular", "Undercounter", "Remote condenser"],
    commonIssues: [
      "Scale buildup on the evaporator reducing ice production and triggering long harvest cycles",
      "Water/curtain switch and harvest sensor faults causing the machine to stop or freeze up",
      "Dirty air-cooled condensers leading to high head pressure and shutdowns",
    ],
  },
  {
    slug: "scotsman",
    name: "Scotsman",
    blurb:
      "A major commercial brand offering cube, flake, and nugget ice on its Prodigy Plus platform, plus the Brilliance gourmet line — widely used in restaurants, bars, and healthcare.",
    commonModels: [
      "Prodigy Plus (cube)",
      "Prodigy Plus Nugget (N-series)",
      "Prodigy Plus Flake (F-series)",
      "Brilliance",
    ],
    machineTypes: ["Modular", "Undercounter", "Nugget", "Flake", "Gourmet cube"],
    commonIssues: [
      "Nugget and flake auger or gearbox wear and seizing on continuous-type machines",
      "Scale and mineral buildup causing low or no ice and harvest faults",
      "Water level/float and purge valve problems affecting ice quality",
    ],
  },
  {
    slug: "hoshizaki",
    name: "Hoshizaki",
    blurb:
      "A premium commercial brand famous for durable stainless-steel cubers using a double-sided crescent (KMEdge) evaporator, along with flake and nugget machines prized for reliability.",
    commonModels: [
      "KM Crescent Cuber Series",
      "KML Low-Profile Series",
      "F-Series Flaker",
      "DCM Cubelet Dispenser",
    ],
    machineTypes: [
      "Modular",
      "Undercounter",
      "Crescent cube",
      "Flake",
      "Nugget",
      "Dispenser",
    ],
    commonIssues: [
      "Scale buildup on the evaporator and water system requiring descaling",
      "Float switch and water-supply problems causing low ice output",
      "Control board and thermistor faults triggering error codes and shutdowns",
    ],
  },
  {
    slug: "ice-o-matic",
    name: "Ice-O-Matic",
    blurb:
      "A high-volume commercial manufacturer known for value-oriented cube machines on its Elevation Series and the chewable Pearl Ice (nugget) GEM Series, plus flakers.",
    commonModels: [
      "Elevation Series (CIM)",
      "ICE Series Cubers",
      "GEM Series Pearl Ice",
      "Flake (GIF / GIM)",
    ],
    machineTypes: ["Modular", "Undercounter", "Nugget", "Flake", "Remote condenser"],
    commonIssues: [
      "Scale accumulation on the evaporator causing thin or incomplete ice",
      "Water inlet valve and float issues affecting fill and harvest",
      "Dirty condenser / high head pressure shutdowns on air-cooled units",
    ],
  },
  {
    slug: "follett",
    name: "Follett",
    blurb:
      "The originator of Chewblet compressed-nugget ice, specializing in nugget and flake machines plus ice-and-water and ice/beverage dispensers for healthcare and foodservice.",
    commonModels: [
      "Horizon Elite Chewblet Series",
      "Maestro Plus Series",
      "Symphony Plus Dispensers",
      "15 Series Countertop Dispensers",
    ],
    machineTypes: ["Nugget", "Flake", "Dispenser", "Countertop"],
    commonIssues: [
      "Chewblet auger, bearing, and gearmotor wear or seizing",
      "Ice transport and dispenser valve clogs from scale or buildup",
      "Water system scale reducing nugget production and consistency",
    ],
  },
  {
    slug: "kold-draft",
    name: "Kold-Draft",
    blurb:
      "A premium brand known for its large, perfectly square, slow-melting 'gourmet' cube produced by grid-style cubers favored by upscale bars and cocktail programs.",
    commonModels: [
      "GT Series (GT561 / GT564)",
      "GTX Series",
      "GB Series",
      "SC Undercounter Series",
    ],
    machineTypes: ["Modular", "Undercounter", "Gourmet cube"],
    commonIssues: [
      "Scale and hard-water deposits on the grid evaporator causing misshapen or fused cubes",
      "Water distribution and pump issues affecting cube clarity and release",
      "Long harvest cycles and low production from mineral buildup",
    ],
  },
  {
    slug: "brema",
    name: "Brema",
    blurb:
      "An Italian manufacturer offering a wide range of ice styles — cube, dice, pebble, nugget, flake — with many self-contained cubers featuring an Automatic Washing System.",
    commonModels: [
      "CB Series Cube Makers",
      "GB Series Flake/Scale",
      "TB Series Pebble",
      "Muster Modular Series",
    ],
    machineTypes: ["Self-contained", "Modular", "Cube", "Nugget", "Flake"],
    commonIssues: [
      "Water pump and spray system clogging from scale",
      "Float / level sensor faults and washing-cycle problems",
      "Inlet valve and drain issues affecting ice formation",
    ],
  },
  {
    slug: "cornelius",
    name: "Cornelius",
    blurb:
      "A beverage-equipment manufacturer whose ice line centers on high-capacity modular nugget ('Chunklet') ice machines and integrated ice/beverage dispensers for QSR and convenience.",
    commonModels: [
      "Chunklet WCC700",
      "Chunklet WCC1400",
      "Nordic Ice Dispensers",
      "IDC Ice/Drink Combo",
    ],
    machineTypes: ["Modular", "Nugget", "Dispenser"],
    commonIssues: [
      "Auger and bearing wear on continuous nugget machines",
      "Dispenser valve and ice-chute clogging or jamming",
      "Water system scale reducing capacity",
    ],
  },
  {
    slug: "true",
    name: "True",
    blurb:
      "A major commercial refrigeration manufacturer that produces self-contained cube ice machines (True Ice / TCIM series) in full, half, and large-cube formats for foodservice.",
    commonModels: [
      "True Ice TCIM Series",
      "TCIM-430 (half cube)",
      "TCIM-630 (full cube)",
      "TUI-15 Undercounter",
    ],
    machineTypes: ["Modular", "Undercounter", "Cube"],
    commonIssues: [
      "Scale buildup reducing production and causing incomplete harvests",
      "Water inlet valve and float problems affecting fill",
      "Condenser fouling and high head pressure on air-cooled units",
    ],
  },
  {
    slug: "u-line",
    name: "U-Line",
    blurb:
      "A premium undercounter specialist offering compact crescent and nugget ice machines — including ADA-height, outdoor, and corrosion-resistant Marine models — for light-commercial and hospitality use.",
    commonModels: [
      "Crescent Ice Series",
      "Nugget Ice Series (UHNP)",
      "ADA Series (ACR)",
      "Marine Series (MCR)",
    ],
    machineTypes: ["Undercounter", "Crescent cube", "Nugget", "Outdoor"],
    commonIssues: [
      "Drain pump and water-line issues on compact undercounter units",
      "Scale buildup affecting ice quality and production",
      "Condenser airflow restriction from tight built-in installs causing overheating",
    ],
  },
  {
    slug: "itv",
    name: "ITV",
    blurb:
      "A Spanish manufacturer (ITV Ice Makers) offering modular and self-contained cubers plus gourmet, scale, and nugget ice machines for bars, restaurants, and hotels.",
    commonModels: [
      "Spika Modular Cubers",
      "Delta Self-Contained Series",
      "Ice Queen Series",
      "Gala / Orion",
    ],
    machineTypes: ["Modular", "Self-contained", "Cube", "Gourmet cube", "Scale"],
    commonIssues: [
      "Water pump and spray-bar clogging from scale",
      "Inlet valve and level-probe faults affecting fill cycles",
      "Condenser cleaning and refrigerant-side issues reducing output",
    ],
  },
  {
    slug: "migali",
    name: "Migali",
    blurb:
      "A commercial refrigeration brand that also manufactures value-priced ice machines, including modular and undercounter cube units plus gourmet and flake styles for restaurants.",
    commonModels: [
      "Modular Cube Ice Machines",
      "Undercounter Ice Machines",
      "Gourmet Cube Series",
      "Flake Ice Series",
    ],
    machineTypes: ["Modular", "Undercounter", "Cube", "Gourmet cube", "Flake"],
    commonIssues: [
      "Scale buildup reducing ice production",
      "Water inlet valve and float switch failures",
      "Air-cooled condenser fouling causing high head pressure",
    ],
  },
  {
    slug: "vogt",
    name: "Vogt",
    blurb:
      "An industrial manufacturer of large-capacity Tube-Ice machines producing cylindrical tube ice (and crushed ice) for ice-packaging plants and high-volume industrial use.",
    commonModels: [
      "HES Series Tube Ice",
      "HFO Series (HFO10)",
      "P34AXL Ammonia Series",
      "Saw-Cut Tube Ice",
    ],
    machineTypes: ["Industrial", "Tube ice", "Crushed ice"],
    commonIssues: [
      "Cutter, gearbox, and harvest-mechanism wear on high-output tube machines",
      "Water-distribution and freeze-cycle scale problems affecting tube formation",
      "Refrigeration, compressor, and condenser maintenance on large systems",
    ],
  },
  {
    slug: "howe",
    name: "Howe",
    blurb:
      "A long-established manufacturer specializing in Rapid Freeze flake ice machines and ice-storage/handling systems for industrial, food-processing, and concrete-cooling applications.",
    commonModels: [
      "Rapid Freeze Flake Ice Machines",
      "RDT (Rotating Disc) Series",
      "Industrial Flake Series",
    ],
    machineTypes: ["Industrial", "Flake"],
    commonIssues: [
      "Flake auger / cutter and bearing wear",
      "Evaporator scale and water-quality fouling reducing capacity",
      "Refrigeration system and condenser maintenance on large units",
    ],
  },
];

export function getBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export const brandSlugs = brands.map((b) => b.slug);

/** The headline brands shown in the home/brands strip. */
export const featuredBrands = brands.slice(0, 6);
