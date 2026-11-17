import { access, readFile } from "node:fs/promises";

const required = [
  "docs/product/discovery.md",
  "docs/product/brief.md",
  "docs/product/kpis.md",
  "docs/product/screen-flow.md",
  "docs/project-plan.md",
  "docs/architecture.md",
  "docs/api/contract.md",
  "docs/data/model.md",
  "docs/qa/acceptance.md",
  "knowledge/onboarding.md",
  "knowledge/equipment.md",
  "knowledge/time-off.md",
  "knowledge/support.md",
  "packages/contracts/src/index.ts",
];

let failed = false;
for (const file of required) {
  try {
    await access(new URL(`../${file}`, import.meta.url));
  } catch {
    console.error(`Missing: ${file}`);
    failed = true;
  }
}
for (const file of ["package.json", "apps/web/package.json", "apps/api/package.json", "packages/contracts/package.json"]) {
  try {
    JSON.parse(await readFile(new URL(`../${file}`, import.meta.url), "utf8"));
  } catch {
    console.error(`Missing or invalid JSON: ${file}`);
    failed = true;
  }
}
if (failed) {
  process.exitCode = 1;
} else {
  console.log("Week 1 documents, example files, and workspace manifests are present.");
  console.log("The application and its build are not checked by this command.");
}
