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
    headline: "Get even coverage and dependable control.",
    intro:
      "Whether you need a new system or one zone has stopped working, TenderCare handles sprinkler installation, repair and seasonal maintenance across the Wichita metro. Start with what the system is doing now and what you need it to do.",
    image: images.lawn,
    details: [
      {
        id: "sprinkler-installation",
        summary:
          "Plan zones, head placement and controls around your landscape and water supply.",
        name: "Sprinkler installation",
        heading: "What goes into a well-designed sprinkler system?",
        answer:
          "A sprinkler system should match your property’s water supply, planting areas, sun exposure and layout. The right design provides coverage where it is needed without treating every part of the yard the same.",
        body: "Automatic irrigation can make sense for a new landscape, a major renovation or a property that still relies on hoses. The design matters as much as the equipment: lawns and planting beds may need different delivery methods, and every zone has to work with the available pressure and flow.",
        symptoms:
          "A new lawn or landscape without irrigation\nTime spent moving hoses and sprinklers\nMajor landscape changes or new planting beds",
        approach:
          "Planning starts with the water supply, landscape and the way you use the property. The proposed scope can cover zone layout, pipe routing, head placement and controller options, along with utility locating, access, restoration and a system walkthrough.",
        benefit:
          "Good zoning makes everyday watering easier and lets lawn and planting areas run on schedules that fit them.",
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
        body: "One dry patch does not mean you need a new system. A damaged nozzle, blocked head, valve problem or controller setting can all cause similar symptoms. Finding the source first keeps the repair focused.",
        symptoms:
          "A zone stays off or will not shut off\nWater pooling around a head or valve box\nWeak spray, misting or water on the pavement\nDry patches despite regular watering",
        approach:
          "Tell us which zones are affected and when the problem shows up. An assessment can trace the issue from the controller and valves to the heads and supply lines. You can review the proposed fix before authorizing the work.",
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
        body: "Landscapes grow, sprinkler heads shift and watering needs change with the season. Even a system that ran well last year can develop coverage problems, leaks or outdated settings. The right package depends on the water source, zone count and equipment on the property.",
        symptoms:
          "A system coming back into use in spring\nCoverage changing as plants grow\nWatering schedules that never change\nA need to plan ahead for fall shutdown",
        approach:
          "Start with your water source, number of zones and backflow devices. Both seasonal packages include startup and winterization; Gold includes two mid-season evaluations and Silver includes one. City-water versions also include backflow certification. Ask TenderCare to confirm current scope, eligibility and pricing for your system.",
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
    headline: "Stop standing water from taking over your yard.",
    intro:
      "Pooling water can come from the grade, slow-draining soil, roof runoff or the irrigation system itself. TenderCare assesses the source and recommends yard drainage, French drains or downspout extensions when they fit the property.",
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
          "The assessment traces where the water starts, how it crosses the property and where it can safely go. The solution may involve surface collection, redirected runoff or an irrigation repair. Any route needs to account for structures and neighboring property.",
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
        body: "A French drain uses a gravel-filled trench and perforated pipe to collect water below the surface. It is not a cure for every puddle. Fast-moving surface runoff may need a different collection method, and every drain needs an appropriate outlet.",
        symptoms:
          "Recurring saturated strips beside a slope\nWet ground that drains slowly after rain\nSubsurface water collecting in a low area",
        approach:
          "Start with the wet area, changes in elevation and possible outlet locations. The proposed scope should show the collection points, trench route, materials, cleanout access and how disturbed landscaping will be restored. Applicable discharge requirements should be confirmed before installation.",
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
          "TenderCare can assess above-ground and buried extension options for the property. The route should account for slope, maintenance access, freezing conditions and an outlet that does not move the problem somewhere else.",
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
    headline: "Make your system easier to run—and ready for winter.",
    intro:
      "Controller upgrades simplify scheduling. Backflow testing checks a key safety device. Winterization prepares the system for freezing weather. TenderCare provides all three across the Wichita metro.",
    image: images.field,
    details: [
      {
        id: "controller-upgrades",
        summary:
          "Replace a difficult timer with compatible controls that are easier to schedule and adjust.",
        name: "Controller upgrades",
        heading: "Is a smart irrigation controller worth it?",
        answer:
          "A smart controller can make watering schedules easier to adjust. Weather-based models use local conditions to help determine watering needs, but they cannot fix leaking pipes or poor sprinkler coverage.",
        body: "A new controller works best when the rest of the system is sound. Before choosing one, check the number of zones, valve compatibility, sensor options, connection requirements and how you want to manage watering.",
        symptoms:
          "A timer that is difficult to program\nWatering that continues without seasonal adjustments\nA desire to manage compatible equipment remotely\nA working system ready for better scheduling",
        approach:
          "Start with the existing controller and how you use it. An upgrade should include compatibility checks, zone setup and a clear walkthrough. Weather-based settings still need to reflect the property and any watering restrictions.",
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
          "Have the utility notice and device details ready when you request service. Confirm the tester’s qualifications, whether repairs are included and who submits the result. TenderCare’s city-water packages include backflow certification; ask about the current scope when booking.",
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
        body: "Turning off the controller does not remove trapped water. Shutdown methods vary by system and component, so the procedure should follow the equipment manufacturer’s guidance and the layout of the system.",
        symptoms:
          "The irrigation season is ending\nFreezing temperatures are approaching\nExposed piping or a backflow device still contains water\nYou are unsure how the previous owner shut down the system",
        approach:
          "Start with the water source, controller and any known problems. The shutdown scope should address the supply, controls and components that hold water. If compressed air is appropriate, its pressure and use must match the system.",
        benefit:
          "A proper shutdown helps reduce the risk of freeze damage and gives you a clearer starting point for spring.",
      },
    ],
  },
];
