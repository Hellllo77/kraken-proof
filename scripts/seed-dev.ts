/**
 * Development-only seed script.
 * Creates 1 SAMPLE dispatch clearly labeled as a proof-build example.
 * Real dispatches must be created via the Payload admin (/admin).
 *
 * Run: DATABASE_URI=file:./data/kraken.db PAYLOAD_SECRET=dev-secret npx tsx scripts/seed-dev.ts
 */

import { getPayload } from "payload";
import config from "../payload.config";

async function seed() {
  const payload = await getPayload({ config });

  const existing = await payload.find({
    collection: "dispatches",
    where: { slug: { equals: "sample-dispatch" } },
    limit: 1,
  });

  if (existing.docs.length > 0) {
    console.log("[seed] Sample dispatch already exists — skipping.");
    process.exit(0);
  }

  await payload.create({
    collection: "dispatches",
    data: {
      title: "SAMPLE — The form and register of a Kraken dispatch",
      slug: "sample-dispatch",
      terrain: "Professional services, mid-market",
      depth: "subsurface",
      summary:
        "This is a SAMPLE dispatch illustrating the form and register of field notes published by Kraken Interactive. Real dispatches replace this content when published.",
      status: "published",
      publishedAt: new Date().toISOString(),
    },
  });

  console.log("[seed] Sample dispatch created. Remove before go-live.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("[seed] Failed:", err);
  process.exit(1);
});
