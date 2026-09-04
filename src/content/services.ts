import { images } from "./assets";
import type { ImageAsset } from "../components/ui";
export interface ServiceDetail {
  summary: string;
  id: string;
  name: string;
  heading: string;
  answer: string;
  body: string;
  symptoms: string;
  approach: string;
  benefit: string;
  image?: ImageAsset;
}
export interface ServiceCategory {
  slug: string;
  name: string;
  title: string;
  description: string;
  headline: string;
  intro: string;
  image: ImageAsset;
  details: ServiceDetail[];
}
export const services: ServiceCategory[] = [
  {
    slug: "irrigation-systems",
    name: "Irrigation systems",
    title: "Irrigation & Sprinkler Systems in Wichita, KS",
    description:
      "Sprinkler installation, repair and maintenance in Wichita. Explore practical irrigation solutions and seasonal care from TenderCare Irrigation.",
    headline: "A healthy landscape starts with the right system.",
    intro:
      "From a new installation to a zone that has stopped working, good irrigation puts water where your landscape needs it. TenderCare provides sprinkler installation, repairs and maintenance across the Wichita metro.",
    image: images.lawn,
    details: [
      {
        id: "sprinkler-installation",
        summary:
          "A thoughtfully planned sprinkler system, designed around your landscape and water supply.",
        name: "Sprinkler installation",
        heading: "What goes into a well-designed sprinkler system?",
        answer:
          "A sprinkler system should match your property’s water supply, planting areas, sun exposure and layout. The right design provides coverage where it is needed without treating every part of the yard the same.",
        body: "New landscapes, extensive renovations and properties relying on hoses are good places to start a conversation about automatic irrigation. Planning matters as much as the equipment: lawn areas and planting beds may need different delivery methods, and zones must work with the available pressure and flow.",
        symptoms:
          "A new lawn or landscape without irrigation\nTime spent moving hoses and sprinklers\nMajor landscape changes or new planting beds",
        approach:
          "TenderCare starts with the property and your priorities. A proposed installation can address zone layout, pipe routing, head placement and controller options. Confirm utility locating, access, restoration and a system walkthrough as part of the agreed scope.",
        benefit:
          "Thoughtful zoning makes day-to-day watering more manageable and gives the system room to work with your landscape.",
        image: images.install,
      },
      {
        id: "sprinkler-repair",
        summary:
          "Find the cause of leaks, weak coverage or zones that will not run.",
        name: "Sprinkler repair",
        heading: "How do I know if my sprinkler system needs repair?",
        answer:
          "Uneven watering, leaking heads, low pressure, unusually high water use or zones that fail to activate are common signs that a sprinkler system needs attention.",
        body: "A dry area does not always mean the entire system needs replacing. A damaged nozzle, blocked head, valve problem or controller setting can produce similar symptoms. Finding the cause helps avoid replacing parts that are still working.",
        symptoms:
          "A zone stays off or will not shut off\nWater pooling around a head or valve box\nWeak spray, misting or water on the pavement\nDry patches despite regular watering",
        approach:
          "Describe which areas are affected and when the problem occurs. The assessment can follow the system from its controller and valves to the heads and supply lines. Repair scope depends on what the inspection finds; ask for the proposed work before authorizing repairs.",
        benefit:
          "A targeted repair can restore coverage and help reduce unnecessary water loss.",
        image: images.detail,
      },
      {
        id: "maintenance-plans",
        summary:
          "Startup, seasonal evaluations and winterization, with packages for city and well water.",
        name: "Maintenance plans",
        heading: "What does a sprinkler maintenance plan cover?",
        answer:
          "Seasonal maintenance connects spring startup, mid-season checks and winterization. TenderCare’s seasonal packages distinguish city-water systems from well-water systems, with Gold and Silver care options.",
        body: "Landscapes change, sprinkler heads can shift and watering needs vary through the season. A system that ran well last year still benefits from checks for coverage, leaks and settings. Package selection should reflect the water source, zone count and actual equipment on the property.",
        symptoms:
          "A system coming back into use in spring\nCoverage changing as plants grow\nWatering schedules that never change\nA need to plan ahead for fall shutdown",
        approach:
          "Discuss your water source, number of zones and backflow devices. The seasonal packages include startup and winterization; Gold includes two mid-season evaluations and Silver includes one. City-water versions also include backflow certification. Confirm current scope, eligibility and pricing when requesting service.",
        benefit:
          "A seasonal plan gives the system regular attention as conditions change.",
        image: images.field,
      },
    ],
  },
  {
    slug: "drainage-solutions",
    name: "Drainage solutions",
    title: "Yard Drainage & French Drains in Wichita, KS",
    description:
      "Explore yard drainage, French drains and downspout extensions in Wichita. Understand standing water and request a property assessment from TenderCare.",
    headline: "Give water a better way to go.",
    intro:
      "A soggy yard is a symptom. The right solution starts with understanding its source, the land’s slope and where water can safely go. TenderCare offers yard drainage, French drains and downspout extensions.",
    image: images.equipment,
    details: [
      {
        id: "yard-drainage",
        summary:
          "Assess low spots, runoff and persistent pooling to find an appropriate drainage solution.",
        name: "Yard drainage",
        heading: "What causes standing water in a yard?",
        answer:
          "Standing water can result from low spots, compacted or slowly draining soil, roof runoff, blocked outlets or overwatering. The pattern and timing of the pooling help identify the cause.",
        body: "Water that appears only during a storm may need a different solution from a wet area that persists during dry weather. Taking photos after rain, noting how long water remains and checking whether the irrigation was running can help explain the problem.",
        symptoms:
          "Persistent puddles or soft, muddy lawn areas\nWater moving toward the house or a patio\nErosion along a slope or planting bed\nWet areas that return after every rainfall",
        approach:
          "The assessment considers where water starts, how it crosses the property and whether there is a suitable outlet. A solution may involve surface collection, redirecting runoff or correcting an irrigation problem. Routing must account for nearby structures and adjacent properties.",
        benefit:
          "Managing excess water can reduce erosion and prolonged saturation around lawns, hardscapes and foundations.",
      },
      {
        id: "french-drains",
        summary:
          "Collect water in saturated ground and direct it toward a suitable discharge point.",
        name: "French drains",
        heading: "When is a French drain the right solution?",
        answer:
          "A French drain can help intercept water moving through saturated soil and carry it toward a suitable outlet. It works best when the problem, pipe depth and discharge route have been assessed together.",
        body: "A typical French drain uses a gravel-filled trench and perforated pipe to collect water below the surface. It is not automatically the answer to every puddle: fast-moving surface runoff may need a different collection method, and any drain needs an appropriate destination.",
        symptoms:
          "Recurring saturated strips beside a slope\nWet ground that drains slowly after rain\nSubsurface water collecting in a low area",
        approach:
          "Discuss the wet area, site elevations and possible discharge locations. The proposed scope should explain collection points, the trench route, materials, cleanout access and how disturbed landscaping will be restored. Confirm any applicable discharge requirements before installation.",
        benefit:
          "A properly planned drain can make persistently wet ground more usable and direct intercepted water away from problem areas.",
      },
      {
        id: "downspout-extensions",
        summary:
          "Route concentrated roof runoff away from problem areas around the property.",
        name: "Downspout extensions",
        heading: "Can roof runoff be the source of a drainage problem?",
        answer:
          "Yes. Downspouts that empty near the house can concentrate roof runoff at the foundation or in nearby landscape beds. Extending the discharge route may help when a suitable outlet is available.",
        body: "Look at the area directly below your downspouts after a rain. Washed-out mulch, repeated puddles and channels in the soil can indicate that roof water is overwhelming a small area. Gutters and outlets should also be checked for blockages.",
        symptoms:
          "Puddles at the base of a downspout\nMulch washing out during storms\nWater flowing across a walkway\nRunoff collecting beside the foundation",
        approach:
          "TenderCare can discuss above-ground or buried extension options based on the property. The route should consider slope, maintenance access, freeze conditions and a discharge point that does not simply move the problem to another area.",
        benefit:
          "Spreading or routing concentrated roof runoff can help protect planting beds and reduce water accumulation near the home.",
      },
    ],
  },
  {
    slug: "smart-upgrades",
    name: "Smart & seasonal services",
    title: "Smart Controllers & Sprinkler Winterization in Wichita",
    description:
      "Smart irrigation controller upgrades, backflow testing and sprinkler winterization for the Wichita metro. Explore seasonal system care with TenderCare.",
    headline: "Ready for the season. Responsive to the weather.",
    intro:
      "Your landscape’s needs change throughout the year. Controller upgrades, backflow testing and winterization help address different parts of keeping an irrigation system in working order.",
    image: images.field,
    details: [
      {
        id: "controller-upgrades",
        summary:
          "Make irrigation scheduling easier with controls that fit your system and your needs.",
        name: "Controller upgrades",
        heading: "Is a smart irrigation controller worth it?",
        answer:
          "A smart controller can make watering schedules easier to adjust. Weather-based models use local conditions to help determine watering needs, but they cannot fix leaking pipes or poor sprinkler coverage.",
        body: "A controller upgrade is most useful when it fits an otherwise sound system. Before choosing equipment, consider the number of zones, valve compatibility, sensor options, connection requirements and how you prefer to manage watering.",
        symptoms:
          "A timer that is difficult to program\nWatering that continues without seasonal adjustments\nA desire to manage compatible equipment remotely\nA working system ready for better scheduling",
        approach:
          "Discuss the existing controller and your day-to-day needs. An upgrade should include compatibility checks, zone setup and an explanation of operation. Weather-based settings still need to account for the property and applicable watering restrictions.",
        benefit:
          "Better scheduling can reduce unnecessary watering and make ongoing adjustments more convenient.",
        image: images.lawn,
      },
      {
        id: "backflow-testing",
        summary:
          "Understand your device, testing requirements and the next step for your water supply.",
        name: "Backflow testing",
        heading: "Why does an irrigation backflow device need testing?",
        answer:
          "A backflow device helps keep irrigation water from flowing back into the drinking-water supply. Testing checks whether the device performs as intended; requirements depend on the water supplier and device.",
        body: "The City of Wichita states that irrigation systems connected to its water system need a working backflow device. Check your current utility notice for the required test or rebuild and use a properly qualified, registered tester. Requirements in other communities should be confirmed with their water supplier.",
        symptoms:
          "A backflow testing notice from the utility\nA device due for a scheduled test\nA new or repaired backflow assembly",
        approach:
          "Have your utility notice and device details available when discussing service. Confirm tester qualifications, whether repairs are needed and who submits the results. TenderCare’s city-water packages include backflow certification; verify the current service scope when booking.",
        benefit:
          "Keeping testing records current helps you track the device’s condition and respond to your water supplier’s requirements.",
      },
      {
        id: "winterization",
        summary:
          "Prepare your irrigation system for freezing conditions with an appropriate seasonal shutdown.",
        name: "Winterization",
        heading: "When should sprinklers be winterized in Wichita?",
        answer:
          "Plan winterization before freezing weather can damage water-filled irrigation components. The right timing depends on local conditions and the system, so avoid waiting for the first hard freeze.",
        body: "Turning off the timer alone does not remove trapped water. Different systems and components require different shutdown methods. Follow the equipment manufacturer’s guidance and have a qualified irrigation professional evaluate the appropriate procedure.",
        symptoms:
          "The irrigation season is ending\nFreezing temperatures are approaching\nExposed piping or a backflow device still contains water\nYou are unsure how the previous owner shut down the system",
        approach:
          "Describe the water source, controller and any known problems. The shutdown scope should address the supply, controller and components that retain water. If compressed air is appropriate, pressure and technique must follow the system’s requirements; this is not a one-setting-fits-all procedure.",
        benefit:
          "A proper shutdown helps reduce the risk of freeze damage and gives you a clearer starting point for spring.",
      },
    ],
  },
];
