import sharp from "sharp";
import { resolve } from "node:path";
import { mkdirSync } from "node:fs";
const source = process.argv[2] || "F:/TenderCare Irrigation";
const photos = [
  "sprinkler",
  "sprinkler 4",
  "sprinkler 3",
  "irrigation line 2",
  "irrigation line 3",
  "irrigation line",
  "mini skid",
];
mkdirSync("public/media", { recursive: true });
for (const name of photos) {
  for (const width of [480, 800, 1280, 1600]) {
    await sharp(resolve(source, `${name}.jpg`))
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .avif({ quality: 50, effort: 5 })
      .toFile(`public/media/${name.replaceAll(" ", "-")}-${width}.avif`);
  }
}
await sharp("public/media/tendercare-logo.png")
  .webp({ lossless: true })
  .toFile("public/media/tendercare-logo.webp");
console.log("Optimized seven approved field images and the source logo.");
