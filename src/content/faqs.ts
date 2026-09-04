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
      "Use the estimate request page to share your contact details, property location and service needs. A brief description helps identify the right next step; an estimate request does not confirm an appointment.",
    link: "/estimate",
    linkLabel: "Request a free estimate",
  },
  {
    id: "schedule",
    category: "Estimates & scheduling",
    question: "How soon can service be scheduled?",
    answer:
      "Availability depends on the service, location, season and current workload. Ask about the available appointments when you contact TenderCare; a specific response or repair time is not promised on this site.",
    link: "/contact",
    linkLabel: "Ask about scheduling",
  },
  {
    id: "install-time",
    category: "Installation",
    question: "How long does sprinkler installation take?",
    answer:
      "Installation time depends on the property size, zone layout, soil, access and restoration needs. Ask for a project-specific schedule after the site has been assessed rather than relying on a general number of days.",
    link: "/services/irrigation-systems#sprinkler-installation",
    linkLabel: "Understand sprinkler installation",
  },
  {
    id: "install-lawn",
    category: "Installation",
    question: "Will sprinkler installation disturb my lawn?",
    answer:
      "Installing underground piping usually involves some disturbance. The extent depends on the installation method, access and soil conditions. Discuss trenching, existing landscaping and the restoration included in the scope before work begins.",
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
      "Sprinkler repair pricing depends on the cause, required parts, access and labor. A damaged head and an underground line repair can involve very different work. Request an assessment and confirm the proposed scope and price before repairs begin.",
    link: "/estimate",
    linkLabel: "Request sprinkler repair pricing",
  },
  {
    id: "repair-replace",
    category: "Repairs",
    question: "Should I repair or replace my sprinkler system?",
    answer:
      "A localized problem in an otherwise sound system may be repairable. Repeated failures, widespread deterioration or a layout that no longer suits the landscape may justify a larger upgrade. Compare options after checking the system’s condition.",
    link: "/services/irrigation-systems",
    linkLabel: "Review your irrigation options",
  },
  {
    id: "startup",
    category: "Maintenance",
    question: "What should a spring sprinkler startup check?",
    answer:
      "A startup should assess how the system operates after winter, including visible leaks, zone activation, head coverage and controller settings. The exact checks depend on the equipment and the agreed service scope.",
    link: "/services/irrigation-systems#maintenance-plans",
    linkLabel: "Explore seasonal maintenance",
  },
  {
    id: "watering",
    category: "Maintenance",
    question: "How much water should my Wichita lawn receive?",
    answer:
      "Watering needs depend on the grass, soil, weather and recent rainfall. Avoid using the same timer setting all season. Check actual soil moisture and adjust to current conditions and local watering rules.",
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
      "Testing frequency is set by the water supplier and applicable requirements. Wichita’s published code specifies testing intervals of no more than one year for covered backflow devices. Check your current utility notice, device requirements and local rules before arranging service.",
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
      "Plan to winterize before freezing weather can damage components that still contain water. Timing varies with weather and the system. Arrange service ahead of the cold-weather rush and ask what shutdown procedure your equipment requires.",
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
      "Gold includes two mid-season evaluations and Silver includes one. Both include startup and winterization. City-water versions also include backflow certification. Confirm the current inclusions, eligibility and pricing for your system.",
    link: "/services/irrigation-systems#packages",
    linkLabel: "Compare seasonal care packages",
  },
  {
    id: "package-size",
    category: "Pricing & packages",
    question: "Does the size of my system affect package pricing?",
    answer:
      "It can. Standard package scope covers systems with up to 12 zones and one PVB backflow device, and notes possible additional charges for larger or more complex systems. Current prices and terms need to be confirmed with TenderCare.",
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
      "Yes. Include the property type, approximate size and irrigation or drainage needs in your inquiry. The suitable scope, access requirements and scheduling should be confirmed for the individual property.",
    link: "/estimate",
    linkLabel: "Discuss your property",
  },
];
export const faqCategories = [...new Set(faqs.map((f) => f.category))];
export const categoryId = (label: string) =>
  label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
