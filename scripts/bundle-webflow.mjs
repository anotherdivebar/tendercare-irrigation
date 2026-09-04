import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";
// CLI 2.7.1 requires an ID in noninteractive mode, even for a local-only bundle.
// Never write a made-up ID into the production manifest or use this file to import.
const config = JSON.parse(readFileSync("webflow.json", "utf8"));
const localManifest = ".webflow.local.json";
writeFileSync(
  localManifest,
  JSON.stringify(
    {
      ...config,
      library: { ...config.library, id: "tendercare-local-validation-only" },
    },
    null,
    2,
  ),
);
const result = spawnSync(
  process.execPath,
  [
    resolve("node_modules/@webflow/webflow-cli/dist/index.js"),
    "devlink",
    "bundle",
    "--manifest",
    localManifest,
    "--skip-update-check",
    "--public-path",
    "http://localhost:4000/",
  ],
  { stdio: "inherit" },
);
process.exit(result.status ?? 1);
