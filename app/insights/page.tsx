import type { Metadata } from "next";
import Link from "next/link";
import { getPayloadClient } from "@/lib/payload";
import type { Dispatch } from "@/payload-types";

export const metadata: Metadata = {
  title: "Dispatches from the Field",
  description: "Field notes from active survey engagements.",
};

const DEPTH_LABELS: Record<string, string> = {
  surface:       "Surface observation",
  subsurface:    "Subsurface analysis",
  organisational: "Organisational",
  bedrock:       "Bedrock insight",
};

export default async function InsightsPage() {
  let dispatches: Dispatch[] = [];
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "dispatches",
      where: { status: { equals: "published" } },
      sort: "-publishedAt",
      limit: 20,
    });
    dispatches = result.docs as Dispatch[];
  } catch {
    // CMS unavailable
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="depth-notation" style={{ marginBottom: "var(--space-3)" }}>
            Survey Depth: Active Engagements
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--type-display)",
              fontWeight: 700,
              color: "var(--color-navy-900)",
              lineHeight: "var(--lh-tight)",
              letterSpacing: "var(--ls-heading)",
              marginBottom: "var(--space-6)",
            }}
          >
            Dispatches from the Field
          </h1>

          {dispatches.length === 0 ? (
            <div
              className="field-note"
              style={{ padding: "var(--space-4)", maxWidth: "560px" }}
            >
              <p className="depth-notation" style={{ marginBottom: "var(--space-1)" }}>
                Field Note
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-navy-700)", lineHeight: "var(--lh-body)" }}>
                No dispatches published yet. Field notes from active surveys will appear here
                as they are cleared for publication.
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              {dispatches.map((d) => (
                <Link key={d.id} href={`/insights/${d.slug}`} style={{ textDecoration: "none" }}>
                  <article
                    style={{
                      display: "grid",
                      gridTemplateColumns: "200px 1fr",
                      gap: "var(--space-6)",
                      padding: "var(--space-4)",
                      border: "1px solid var(--color-parchment-300)",
                      borderRadius: "var(--radius-md)",
                      background: "var(--color-parchment-100)",
                      alignItems: "start",
                      transition: "border-color var(--dur-fast)",
                    }}
                  >
                    <div>
                      <p className="depth-notation" style={{ marginBottom: "4px" }}>Terrain</p>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-sm)", color: "var(--color-navy-700)", marginBottom: "var(--space-2)" }}>
                        {d.terrain}
                      </p>
                      <p className="depth-notation" style={{ marginBottom: "4px", color: "var(--color-navy-400)" }}>
                        {DEPTH_LABELS[d.depth] ?? d.depth}
                      </p>
                      {d.publishedAt && (
                        <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--type-xs)", color: "var(--color-navy-400)" }}>
                          {new Date(d.publishedAt).toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
                        </p>
                      )}
                    </div>
                    <div>
                      <h2
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "var(--type-heading)",
                          fontWeight: 600,
                          color: "var(--color-navy-900)",
                          lineHeight: "var(--lh-heading)",
                          marginBottom: "var(--space-2)",
                        }}
                      >
                        {d.title}
                      </h2>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-navy-700)", lineHeight: "var(--lh-body)", marginBottom: "var(--space-2)" }}>
                        {d.summary}
                      </p>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--type-xs)", color: "var(--color-navy-400)" }}>
                        Read dispatch →
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
