import { photos } from "./media"

export type Service = {
  slug: string
  icon:
    | "Flame"
    | "Thermometer"
    | "Waves"
    | "Wrench"
    | "Droplets"
    | "Zap"
    | "Home"
    | "AlertTriangle"
  title: string
  shortTitle: string
  summary: string
  description: string[]
  bullets: string[]
  image: number
  gallery: number[]
}

export const services: Service[] = [
  {
    slug: "gas-safety",
    icon: "Flame",
    title: "Gas Installation, Servicing & Repairs",
    shortTitle: "Gas Safety",
    summary:
      "Safe, compliant gas work for cookers, hobs, fires and supply pipework — installed and serviced by qualified engineers.",
    description: [
      "Gas work is not something to leave to chance. Our engineers handle new gas installations, routine servicing and repairs for domestic and commercial properties, always working to current safety regulations.",
      "Whether you need a gas appliance connected, an annual safety check for a rental property, or a suspected leak investigated, we respond quickly and leave every job fully documented.",
    ],
    bullets: [
      "New gas appliance & pipework installation",
      "Landlord gas safety checks",
      "Gas cooker & hob installation",
      "Gas leak investigation & repair",
      "Gas fire servicing and repair",
      "Full safety documentation on completion",
    ],
    image: photos.gasStove,
    gallery: [photos.blueFlameBurner, photos.stoveFireCloseup, photos.gasStove],
  },
  {
    slug: "boiler-services",
    icon: "Thermometer",
    title: "Boiler Installation, Servicing & Repairs",
    shortTitle: "Boilers",
    summary:
      "Combi, system and heat-only boiler installation, annual servicing, breakdown diagnosis and repair.",
    description: [
      "A reliable boiler is the heart of a warm, safe home. We install, service and repair combi, system and regular boilers from all major manufacturers, and we're happy to advise on the right size and type for your property.",
      "Regular servicing keeps your boiler running efficiently, protects your warranty and catches small issues before they become expensive breakdowns.",
    ],
    bullets: [
      "New boiler installation & replacement",
      "Annual boiler servicing",
      "Breakdown diagnosis & repair",
      "Power flushing & system cleansing",
      "Boiler upgrades for efficiency",
      "Advice on the right boiler for your home",
    ],
    image: photos.engineerHelmet,
    gallery: [photos.hardhatClipboard, photos.clipboardConstruction, photos.workerHardhat1],
  },
  {
    slug: "central-heating",
    icon: "Waves",
    title: "Central Heating & Hot Water Systems",
    shortTitle: "Central Heating",
    summary:
      "Radiator installation and balancing, full central heating system design, and reliable hot water solutions.",
    description: [
      "From a single new radiator to a complete central heating redesign, we plan and install systems that heat your property evenly and keep running costs down.",
      "We also fit and maintain hot water cylinders and unvented systems, so you're never left waiting for hot water.",
    ],
    bullets: [
      "Central heating system design & installation",
      "Radiator supply, installation & replacement",
      "System balancing & power flushing",
      "Hot water cylinder installation & repair",
      "Thermostat & smart heating control setup",
      "Underfloor heating support",
    ],
    image: photos.familyKitchen1,
    gallery: [photos.familyKitchenCooking, photos.familyKitchenPrepping, photos.bathroomFreestandingTub],
  },
  {
    slug: "plumbing",
    icon: "Wrench",
    title: "Plumbing Installation & Repairs",
    shortTitle: "Plumbing",
    summary:
      "General plumbing for kitchens and bathrooms — taps, toilets, showers, sinks and full bathroom fit-outs.",
    description: [
      "Our plumbers handle everything from a dripping tap to a complete bathroom installation, working cleanly and tidily in occupied homes and commercial units alike.",
      "We use quality fittings and stand behind our workmanship, so repairs last and installations perform for years to come.",
    ],
    bullets: [
      "Bathroom & kitchen plumbing installation",
      "Tap, toilet & shower repair and replacement",
      "Sink, basin & waste installation",
      "Washing machine & dishwasher plumbing",
      "Water pressure diagnosis",
      "General plumbing repairs & maintenance",
    ],
    image: photos.bathroomModern1,
    gallery: [photos.bathroomModern2, photos.bathroomShowerCabin, photos.faucetSteelSink],
  },
  {
    slug: "pipework-drainage",
    icon: "Droplets",
    title: "Pipework, Leak Detection & Drainage",
    shortTitle: "Pipework & Drainage",
    summary:
      "Pipe installation and repair, non-invasive leak detection, and drainage clearance to keep water where it belongs.",
    description: [
      "Hidden leaks and blocked drains can cause real damage if left unresolved. We trace leaks accurately before any work begins, minimising disruption to walls and floors.",
      "From copper and plastic pipework installation to full drain clearance, we handle the job end to end.",
    ],
    bullets: [
      "Leak detection & tracing",
      "Pipe installation, repair & replacement",
      "Drain unblocking & clearance",
      "Water supply pipework upgrades",
      "Stopcock & isolation valve installation",
      "Outdoor tap & pipe installation",
    ],
    image: photos.copperPipes,
    gallery: [photos.steelPipesCloseup, photos.plumberPipeFittings, photos.wrenchWoodSurface],
  },
  {
    slug: "electrical-services",
    icon: "Zap",
    title: "Electrical Installation & Repair",
    shortTitle: "Electrical",
    summary:
      "Sockets, switches, lighting and general electrical repairs carried out safely to current wiring standards.",
    description: [
      "Alongside our gas and plumbing work, our team carries out general electrical installation and repairs — from new sockets and lighting circuits to fault finding and fixing faulty switchboards.",
      "All electrical work is completed with safety as the first priority and tested before we finish.",
    ],
    bullets: [
      "Socket & switch installation and repair",
      "Lighting installation & upgrades",
      "Consumer unit & switchboard repairs",
      "Electrical fault finding",
      "Appliance connection",
      "General electrical maintenance",
    ],
    image: photos.electricianSwitchboard,
    gallery: [photos.electricianSockets1, photos.electricianSockets2, photos.electricianSolar],
  },
  {
    slug: "property-maintenance",
    icon: "Home",
    title: "Property Maintenance Services",
    shortTitle: "Property Maintenance",
    summary:
      "Ongoing maintenance for landlords, letting agents and commercial premises — one trusted team for every job.",
    description: [
      "We support landlords, property managers and businesses with scheduled and reactive maintenance, so properties stay safe, compliant and well looked after between tenancies.",
      "One point of contact for gas, plumbing, heating and electrical work means less coordination for you and faster turnarounds for your tenants.",
    ],
    bullets: [
      "Scheduled maintenance contracts",
      "Void property turnaround works",
      "Landlord compliance checks",
      "Multi-trade repairs on one visit",
      "Commercial premises maintenance",
      "Priority response for managing agents",
    ],
    image: photos.londonTerraced1,
    gallery: [photos.londonStreetHouses, photos.londonTerraced2, photos.londonThinHouse],
  },
  {
    slug: "emergency-repairs",
    icon: "AlertTriangle",
    title: "Emergency Repairs & Call-Outs",
    shortTitle: "Emergency Call-Outs",
    summary:
      "Burst pipe, no heating, gas smell or total power loss — we're available 24/7 to make your property safe again.",
    description: [
      "Emergencies don't keep office hours, and neither do we. Our engineers are available around the clock for urgent gas, heating, plumbing and electrical issues.",
      "Call us directly and we'll talk you through immediate safety steps while we get an engineer on the way.",
    ],
    bullets: [
      "24/7 emergency call-out",
      "Burst pipe & flood response",
      "Suspected gas leak response",
      "No heat / no hot water emergencies",
      "Electrical fault emergencies",
      "Temporary make-safe & permanent fix",
    ],
    image: photos.workerOrangeHardhat,
    gallery: [photos.workerSafetyHelmet, photos.workerHelmetStanding, photos.workerPortrait1],
  },
]

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug)

export const stats = [
  { label: "Availability", value: "24/7", suffix: "" },
  { label: "Services covered", value: "8", suffix: "+" },
  { label: "Response focus", value: "Same-day", suffix: "" },
  { label: "Coverage", value: "Enfield & London", suffix: "" },
]

export const processSteps = [
  {
    title: "Get in touch",
    description: "Call, message or fill in our contact form with what's going on — day or night for emergencies.",
  },
  {
    title: "Free, no-obligation quote",
    description: "We talk through the job and give you a clear price before any work begins.",
  },
  {
    title: "Engineer visits your property",
    description: "A qualified, insured engineer arrives at the agreed time, ready with the right parts and tools.",
  },
  {
    title: "Work completed safely",
    description: "We carry out the job to current safety standards and leave your property clean and tidy.",
  },
  {
    title: "Certification & aftercare",
    description: "You receive any relevant paperwork, plus advice on keeping your system running well.",
  },
]

export const testimonials = [
  {
    name: "Karen T.",
    location: "Enfield",
    quote:
      "Called about a boiler that wouldn't fire up on a cold morning and had an engineer out the same day. Explained everything clearly and got the heating back on fast.",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "Edmonton",
    quote:
      "Used them for a full bathroom re-plumb. Tidy work, turned up when they said they would, and the price matched the quote exactly.",
    rating: 5,
  },
  {
    name: "Priya S.",
    location: "Southgate",
    quote:
      "Gas safety check for my rental property was booked in quickly and the certificate was sent over the same week. Straightforward and professional.",
    rating: 5,
  },
  {
    name: "David O.",
    location: "Ponders End",
    quote:
      "Had a burst pipe late in the evening — they picked up straight away and talked me through shutting off the water until the engineer arrived.",
    rating: 5,
  },
  {
    name: "Aisha B.",
    location: "Waltham Cross",
    quote:
      "New radiators fitted throughout the house. Good communication from quote to completion and the house is noticeably warmer.",
    rating: 5,
  },
  {
    name: "Tom H.",
    location: "Enfield Town",
    quote:
      "As a letting agent I need contractors who show up and communicate. This team has been reliable across several of our properties.",
    rating: 5,
  },
]

export type Project = {
  id: string
  title: string
  category: string
  location: string
  image: number
  video?: keyof typeof import("./media").videos
  description: string
}

export const projects: Project[] = [
  {
    id: "boiler-install-enfield",
    title: "Combi Boiler Replacement",
    category: "Boiler Services",
    location: "Enfield",
    image: photos.engineerHelmet,
    description: "Old back boiler removed and replaced with a modern, energy-efficient combi system.",
  },
  {
    id: "bathroom-replumb",
    title: "Full Bathroom Re-Plumb",
    category: "Plumbing",
    location: "Edmonton",
    image: photos.bathroomModern2,
    description: "Complete strip-out and re-plumb for a family bathroom, including new shower and vanity unit.",
  },
  {
    id: "central-heating-upgrade",
    title: "Whole-House Heating Upgrade",
    category: "Central Heating",
    location: "Southgate",
    image: photos.familyKitchenCooking,
    description: "New radiators, updated pipework and smart thermostat installed across a three-bedroom home.",
  },
  {
    id: "landlord-gas-check",
    title: "Landlord Gas Safety Programme",
    category: "Gas Safety",
    location: "Multiple sites, North London",
    image: photos.clipboardConstruction,
    description: "Ongoing annual gas safety checks across a portfolio of rental properties.",
  },
  {
    id: "emergency-leak",
    title: "Emergency Leak Detection & Repair",
    category: "Pipework & Drainage",
    location: "Ponders End",
    image: photos.copperPipes,
    description: "Hidden leak traced behind a kitchen wall and repaired same-day with minimal disruption.",
  },
  {
    id: "electrical-rewire",
    title: "Consumer Unit & Socket Upgrade",
    category: "Electrical",
    location: "Waltham Cross",
    image: photos.electricianSwitchboard,
    description: "Switchboard replacement and additional sockets fitted for a home office conversion.",
  },
  {
    id: "commercial-maintenance",
    title: "Commercial Premises Maintenance",
    category: "Property Maintenance",
    location: "Enfield Town",
    image: photos.londonStreetHouses,
    description: "Scheduled multi-trade maintenance visits keeping a retail unit compliant and running smoothly.",
  },
  {
    id: "kitchen-fit",
    title: "Kitchen Sink & Appliance Plumbing",
    category: "Plumbing",
    location: "Enfield",
    image: photos.kitchenSinkFaucet,
    description: "New sink, mixer tap and integrated appliance plumbing for a kitchen renovation.",
  },
]

export const faqs = [
  {
    question: "Do you offer 24/7 emergency call-outs?",
    answer:
      "Yes. We're available around the clock, every day of the year, for urgent gas, heating, plumbing and electrical issues. Call us directly on the number in the header and we'll advise on immediate next steps.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We're based in Enfield, London and cover Enfield and the surrounding North London areas for both domestic and commercial work. Get in touch with your postcode and we'll confirm we can help.",
  },
  {
    question: "How often should my boiler be serviced?",
    answer:
      "Most manufacturers and warranty terms recommend an annual boiler service. Regular servicing helps catch small issues early, keeps your boiler running efficiently and can protect your warranty.",
  },
  {
    question: "Do I need a gas safety certificate for my rental property?",
    answer:
      "Landlords in the UK are legally required to have gas appliances checked annually and hold a valid gas safety record for each rental property. We carry out these checks and provide the required documentation.",
  },
  {
    question: "How quickly can you provide a quote?",
    answer:
      "For most jobs we can give you a clear quote after a short conversation about the work needed, often the same day. Larger installations may need a quick site visit first.",
  },
  {
    question: "Are your engineers insured?",
    answer:
      "Yes, all work is carried out by qualified, insured engineers who follow current safety regulations for gas, electrical and plumbing work.",
  },
  {
    question: "Do you work on commercial properties as well as homes?",
    answer:
      "Yes, we support both domestic and commercial clients, including landlords, letting agents and business premises, with one-off repairs and ongoing maintenance contracts.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfer and card payment. Payment details and any applicable terms are confirmed with your quote before work begins.",
  },
]

export const whyChooseUs = [
  {
    title: "Qualified & insured",
    description: "Every job is carried out by experienced, insured engineers who take safety seriously.",
  },
  {
    title: "24/7 availability",
    description: "Emergencies don't wait for office hours — and neither do we.",
  },
  {
    title: "Clear, upfront pricing",
    description: "You'll always know the cost before work begins, with no hidden surprises.",
  },
  {
    title: "One team, every trade",
    description: "Gas, heating, plumbing, electrical and maintenance — one number to call for it all.",
  },
]
