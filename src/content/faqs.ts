export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
  link?: string;
  linkLabel?: string;
  source?: string;
  sourceLabel?: string;
}
export const faqs: FAQ[] = [
  {
    id: "estimate",
    category: "Estimates & scheduling",
    question: "How do I request a free estimate?",
    answer:
      "Start with the estimate form. Add your property location, the service you need and a short description of the problem. This begins the conversation; it does not reserve an appointment.",
    link: "/estimate",
    linkLabel: "Request a free estimate",
  },
  {
    id: "schedule",
    category: "Estimates & scheduling",
    question: "How soon can service be scheduled?",
    answer:
      "Scheduling changes with the service, location, season and current workload. Send the property details and service needed so TenderCare can confirm current availability.",
    link: "/contact",
    linkLabel: "Ask about scheduling",
  },
  {
    id: "install-time",
    category: "Installation",
    question: "How long does sprinkler installation take?",
    answer:
      "Installation time depends on the property size, number of zones, soil, access and restoration work. After the site assessment, ask for a schedule based on the actual scope.",
    link: "/services/irrigation-systems#sprinkler-installation",
    linkLabel: "Understand sprinkler installation",
  },
  {
    id: "install-lawn",
    category: "Installation",
    question: "Will sprinkler installation disturb my lawn?",
    answer:
      "Yes, installing underground pipe usually disturbs part of the lawn. How much depends on the installation method, access and soil. Before work begins, review the trenching route and what restoration is included.",
    link: "/services/irrigation-systems#sprinkler-installation",
    linkLabel: "Explore installation planning",
  },
  {
    id: "repair-signs",
    category: "Repairs",
    question: "How do I know if my sprinkler system needs repair?",
    answer:
      "Common signs include uneven watering, leaking heads, unusually high water use, low pressure or zones that fail to activate. An assessment can distinguish a damaged component from a scheduling or coverage issue.",
    link: "/services/irrigation-systems#sprinkler-repair",
    linkLabel: "Explore sprinkler repair",
  },
  {
    id: "repair-cost",
    category: "Repairs",
    question: "How much does sprinkler repair cost?",
    answer:
      "Sprinkler repair cost depends on the cause, parts, access and labor. Replacing a damaged head is very different from repairing an underground line, so the system needs to be checked before the price can be confirmed.",
    link: "/estimate",
    linkLabel: "Request sprinkler repair pricing",
  },
  {
    id: "repair-replace",
    category: "Repairs",
    question: "Should I repair or replace my sprinkler system?",
    answer:
      "A localized problem in an otherwise sound system is often a repair. Repeated failures, widespread deterioration or a layout that no longer fits the landscape may point to a larger upgrade. The system’s condition should guide the decision.",
    link: "/services/irrigation-systems",
    linkLabel: "Review your irrigation options",
  },
  {
    id: "startup",
    category: "Maintenance",
    question: "What should a spring sprinkler startup check?",
    answer:
      "A spring startup should check for visible leaks, confirm that each zone runs, review head coverage and update controller settings. The exact checks depend on the equipment and the service scope.",
    link: "/services/irrigation-systems#maintenance-plans",
    linkLabel: "Explore seasonal maintenance",
  },
  {
    id: "watering",
    category: "Maintenance",
    question: "How much water should my Wichita lawn receive?",
    answer:
      "There is no single schedule that fits every Wichita lawn. Grass type, soil, weather and recent rainfall all matter, so check the soil and adjust the controller as conditions change.",
    source: "https://www.epa.gov/watersense/watering-tips",
    sourceLabel: "EPA WaterSense watering tips",
    link: "/services/smart-upgrades#controller-upgrades",
    linkLabel: "Explore smarter scheduling",
  },
  {
    id: "standing-water",
    category: "Drainage",
    question: "What causes standing water in a yard?",
    answer:
      "Low areas, compacted or slowly draining soil, roof runoff, blocked outlets and overwatering can all cause pooling. Where the water appears and how long it remains help determine whether surface drainage, subsurface collection or an irrigation correction is appropriate.",
    link: "/services/drainage-solutions#yard-drainage",
    linkLabel: "Understand yard drainage",
  },
  {
    id: "french-drain",
    category: "Drainage",
    question: "When is a French drain appropriate?",
    answer:
      "A French drain can help collect water in saturated ground and direct it toward a suitable outlet. It needs a planned route and discharge point; it may not be the right approach for every surface-water problem.",
    link: "/services/drainage-solutions#french-drains",
    linkLabel: "Explore French drains",
  },
  {
    id: "downspout",
    category: "Drainage",
    question: "Can a downspout extension help a wet yard?",
    answer:
      "It can help when concentrated roof runoff is the cause and there is a suitable route for the water. The outlet must be planned so it does not create a new problem for the property or its neighbors.",
    link: "/services/drainage-solutions#downspout-extensions",
    linkLabel: "Explore downspout extensions",
  },
  {
    id: "backflow-frequency",
    category: "Backflow",
    question: "How often does a backflow preventer need testing?",
    answer:
      "The water supplier sets the testing schedule. Wichita’s published code specifies testing at intervals of no more than one year for covered backflow devices. Check the current utility notice and requirements for your device before scheduling service.",
    source:
      "https://library.municode.com/ks/wichita/codes/code_of_ordinances?nodeId=TIT17WA_CH17.10BACRCOCO",
    sourceLabel: "Wichita Code, Chapter 17.10",
    link: "/services/smart-upgrades#backflow-testing",
    linkLabel: "Understand backflow testing",
  },
  {
    id: "backflow-need",
    category: "Backflow",
    question: "Does a city-water sprinkler system need backflow protection?",
    answer:
      "The City of Wichita states that irrigation systems connected to its water system must have a working backflow device. Other communities and water suppliers may have their own requirements; confirm what applies to your property.",
    source: "https://www.wichita.gov/716/Backflow-Cross-Connection-Control",
    sourceLabel: "City of Wichita backflow guidance",
    link: "/services/smart-upgrades#backflow-testing",
    linkLabel: "Explore backflow service",
  },
  {
    id: "winterize-time",
    category: "Winterization",
    question: "When should sprinklers be winterized in Wichita?",
    answer:
      "Winterize before freezing weather can damage components that still hold water. The exact timing changes with the forecast and the system, so arrange service before the cold-weather rush.",
    link: "/services/smart-upgrades#winterization",
    linkLabel: "Plan sprinkler winterization",
  },
  {
    id: "timer-off",
    category: "Winterization",
    question: "Is turning off the sprinkler timer enough for winter?",
    answer:
      "No. Turning off the timer stops scheduled watering but does not remove water from pipes, valves or exposed assemblies. The system needs a shutdown procedure suited to its equipment and water source.",
    link: "/services/smart-upgrades#winterization",
    linkLabel: "Understand seasonal shutdown",
  },
  {
    id: "smart-worth",
    category: "Smart controllers",
    question: "Is a smart irrigation controller worth it?",
    answer:
      "A compatible smart controller can make seasonal watering adjustments easier. Weather-based controllers use local weather and landscape conditions to tailor schedules. They still need correct setup and cannot compensate for leaks or poor coverage.",
    source:
      "https://www.epa.gov/watersense/weather-based-irrigation-controllers",
    sourceLabel: "EPA WaterSense controller guidance",
    link: "/services/smart-upgrades#controller-upgrades",
    linkLabel: "Explore controller upgrades",
  },
  {
    id: "smart-wifi",
    category: "Smart controllers",
    question: "Does a smart controller need Wi-Fi?",
    answer:
      "Connection requirements vary by model and feature. Some connected controls rely on internet access for weather data or remote operation. Check the manufacturer’s requirements and the signal at the installation location before selecting equipment.",
    link: "/services/smart-upgrades#controller-upgrades",
    linkLabel: "Discuss controller compatibility",
  },
  {
    id: "gold-silver",
    category: "Pricing & packages",
    question: "What is the difference between Gold and Silver packages?",
    answer:
      "Gold includes two mid-season evaluations; Silver includes one. Both include startup and winterization, and city-water versions also include backflow certification. Ask TenderCare to confirm current pricing and whether the standard scope fits your system.",
    link: "/services/irrigation-systems#packages",
    linkLabel: "Compare seasonal care packages",
  },
  {
    id: "package-size",
    category: "Pricing & packages",
    question: "Does the size of my system affect package pricing?",
    answer:
      "Yes, larger or more complex systems may cost more to service. The standard package scope covers up to 12 zones and one PVB backflow device. Ask TenderCare for current pricing for your system.",
    link: "/estimate",
    linkLabel: "Request pricing for your system",
  },
  {
    id: "area",
    category: "Wichita service area",
    question: "Which communities does TenderCare serve?",
    answer:
      "TenderCare serves Wichita and nearby metro communities including Derby, Andover, Maize, Haysville and Goddard. Share the property address or ZIP so service availability can be confirmed for the work you need.",
    link: "/contact",
    linkLabel: "Check service availability",
  },
  {
    id: "property-type",
    category: "Wichita service area",
    question: "Can I ask about a commercial or larger property?",
    answer:
      "Yes. Include the property type, approximate size and irrigation or drainage needs in the estimate request. TenderCare can then review the scope, access and scheduling for that property.",
    link: "/estimate",
    linkLabel: "Discuss your property",
  },
];
export const faqCategories = [...new Set(faqs.map((f) => f.category))];
export const categoryId = (label: string) =>
  label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
