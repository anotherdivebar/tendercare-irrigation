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
    title: "Irrigation, Sprinkler Repair & Winterization in Wichita",
    description:
      "Sprinkler installation, repair, maintenance, controller upgrades, backflow testing and winterization across the Wichita metro.",
    headline: "Get even coverage and dependable control.",
    intro:
      "TenderCare handles complete sprinkler systems, targeted repairs, maintenance, controller upgrades, backflow testing and winterization across the Wichita metro. Start with what the system is doing now and what you need it to do.",
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
      },
      {
        id: "maintenance-plans",
        summary:
          "Connect spring startup and in-season system checks around the property and water source.",
        name: "Maintenance plans",
        heading: "What does a sprinkler maintenance plan cover?",
        answer:
          "Seasonal irrigation maintenance can connect spring startup and in-season system checks. The appropriate service plan depends on the water source, zone count, backflow equipment and condition of the system.",
        body: "Landscapes grow, sprinkler heads shift and watering needs change with the season. Even a system that ran well last year can develop coverage problems, leaks or outdated settings. A maintenance schedule should reflect the equipment and conditions on the property.",
        symptoms:
          "A system coming back into use in spring\nCoverage changing as plants grow\nWatering schedules that never change\nSmall issues returning during the season",
        approach:
          "Start with your water source, number of zones, controller and backflow equipment. Discuss which startup and in-season services fit the system, then confirm the current scope and availability with TenderCare.",
        benefit:
          "A seasonal plan gives the system regular attention as conditions change.",
      },
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
          "Have the utility notice and device details ready when you request service. Confirm the tester’s qualifications, whether repairs are included and who submits the result. Ask TenderCare about the current testing scope when booking.",
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
  {
    slug: "drainage-solutions",
    name: "Drainage solutions",
    title: "Downspout & Sump Pump Extensions in Wichita, KS",
    description:
      "Downspout and sump pump discharge extensions for Wichita-area properties. Plan a practical route away from the house and problem areas.",
    headline: "Carry roof and sump water farther from the house.",
    intro:
      "TenderCare installs downspout and sump pump discharge extensions across the Wichita metro. Each job starts with where the water exits now, the property slope and a suitable place for it to go.",
    image: images.equipment,
    details: [
      {
        id: "downspout-extensions",
        summary:
          "Route concentrated roof runoff farther from the house and nearby landscape beds.",
        name: "Downspout extensions",
        heading: "Can roof runoff be the source of water near the house?",
        answer:
          "Yes. Downspouts that empty close to the house can concentrate roof runoff beside the foundation or in nearby landscape beds. A longer discharge route can help when there is a suitable outlet.",
        body: "Look at the area directly below your downspouts after a rain. Washed-out mulch, repeated puddles and channels in the soil can indicate that roof water is overwhelming a small area. Gutters and outlets should also be checked for blockages.",
        symptoms:
          "Puddles at the base of a downspout\nMulch washing out during storms\nWater flowing across a walkway\nRoof runoff collecting beside the house",
        approach:
          "TenderCare can assess above-ground and buried extension options for the property. The route should account for slope, maintenance access, freezing conditions and an outlet that does not move the problem somewhere else.",
        benefit:
          "Routing concentrated roof runoff farther away can help protect planting beds and reduce water accumulation beside the home.",
      },
      {
        id: "sump-pump-extensions",
        summary:
          "Extend sump pump discharge away from the foundation along a practical outlet route.",
        name: "Sump pump extensions",
        heading: "What does a sump pump discharge extension do?",
        answer:
          "A sump pump discharge extension carries pumped water farther from the foundation to a suitable outlet. The route needs to work with the property slope, equipment and freezing conditions.",
        body: "A short discharge line can release water where it collects near the house or cycles back toward the foundation. Extending the line may improve the discharge location, but the route and outlet still need to fit the property.",
        symptoms:
          "Sump water releasing close to the foundation\nRepeated saturation near the discharge point\nA temporary hose crossing a walkway or lawn\nDischarge that flows back toward the house",
        approach:
          "TenderCare reviews the existing outlet, the proposed route and where the water can finish safely. The scope should account for slope, access, freeze exposure and a discharge point that does not create a problem elsewhere.",
        benefit:
          "A properly routed extension moves sump discharge farther from the house and makes the outlet more intentional.",
      },
    ],
  },
];
