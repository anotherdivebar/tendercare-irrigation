import type { ImageAsset } from "../components/ui";
export function asset(
  name: string,
  alt: string,
  width = 1600,
  height = 1067,
): ImageAsset {
  return {
    src: `/media/${name}-1600.avif`,
    srcSet: `/media/${name}-480.avif 480w, /media/${name}-800.avif 800w, /media/${name}-1280.avif 1280w, /media/${name}-1600.avif 1600w`,
    alt,
    width,
    height,
  };
}
export const images = {
  hero: asset(
    "sprinkler",
    "Sprinkler watering a sunlit lawn beside a curved garden edge",
  ),
  lawn: asset(
    "sprinkler-4",
    "Operating sprinkler system on a green residential lawn",
  ),
  install: asset(
    "irrigation-line-2",
    "Field technician carrying a coil of irrigation pipe through a yard",
  ),
  detail: asset(
    "irrigation-line",
    "Irrigation crew working on exposed underground piping",
    1600,
    1200,
  ),
  field: asset(
    "sprinkler-3",
    "Sprinkler watering a lawn along a residential sidewalk",
  ),
  equipment: asset(
    "mini-skid",
    "Crew operating compact equipment at a landscape worksite",
  ),
  team: asset(
    "irrigation-line-3",
    "TenderCare technician carrying irrigation line on a property",
  ),
};
