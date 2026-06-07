import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPayloadClient } from "@/lib/payload";
import type { Dispatch } from "@/payload-types";

interface Props {
  params: Promise<{ slug: string }>;
}

const DEPTH_LABELS: Record<string, string> = {
  surface:       "Surface observation",
  subsurface:    "Subsurface analysis",
  organisational: "Organisational",
  bedrock:       "Bedrock insight",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "dispatches",
      where: { slug: { equals: slug }, status: { equals: "published" } },
      limit: 1,
    });
    const d = result.docs[0] as Dispatch | undefined;
    if (!d) return {};
    return { title: d.title, description: d.summary };
  } catch {
    return {};
  }
}

export default async function DispatchPage({ params }: Props) {
  const { slug } = await params;

  let dispatch: Dispatch | null = null;
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "dispatches",
      where: { slug: { equals: slug }, status: { equals: "published" } },
      limit: 1,
    });
    dispatch = (result.docs[0] as Dispatch) ?? null;
  } catch {
    // CMS unavailable
  }

  if (!dispatch) notFound();

  return (
    <>
      <article className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
          {/* Survey header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-3)",
              padding: "var(--space-4)",
              background: "var(--color-parchment-200)",
              border: "1px solid var(--color-parchment-300)",
              borderRadius: "var(--radius-md)",
              marginBottom: "var(--space-8)",
            }}
          >
            <div>
              <p className="depth-notation" style={{ marginBottom: "4px" }}>Terrain</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-sm)", color: "var(--color-navy-800)" }}>
                {dispatch.terrain}
              </p>
            </div>
            <div>
              <p className="depth-notation" style={{ marginBottom: "4px" }}>Depth</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-sm)", color: "var(--color-navy-800)" }}>
                {DEPTH_LABELS[dispatch.depth] ?? dispatch.depth}
              </p>
            </div>
            {dispatch.publishedAt && (
              <div>
                <p className="depth-notation" style={{ marginBottom: "4px" }}>Filed</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--type-xs)", color: "var(--color-navy-600)" }}>
                  {new Date(dispatch.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </p>
              </div>
            )}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--type-display)",
              fontWeight: 700,
              color: "var(--color-navy-900)",
              lineHeight: "var(--lh-tight)",
              letterSpacing: "var(--ls-heading)",
              marginBottom: "var(--space-4)",
            }}
          >
            {dispatch.title}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--type-subhead)",
              color: "var(--color-navy-700)",
              lineHeight: "var(--lh-body)",
              fontStyle: "italic",
              marginBottom: "var(--space-8)",
              borderBottom: "1px solid var(--color-parchment-300)",
              paddingBottom: "var(--space-6)",
            }}
          >
            {dispatch.summary}
          </p>

          {/* Rich text body — Payload Lexical renderer placeholder */}
          {dispatch.body && (
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--type-body)",
                color: "var(--color-navy-700)",
                lineHeight: "var(--lh-body)",
              }}
            >
              {/* TODO: swap for @payloadcms/richtext-lexical RichText component once Wren sets up the renderer */}
              <p style={{ color: "var(--color-navy-400)", fontStyle: "italic" }}>
                [ Dispatch body — rendered by Lexical rich text. Contact system admin if this appears in production. ]
              </p>
            </div>
          )}
        </div>
      </article>

      <nav
        className="section"
        style={{
          borderTop: "1px solid var(--color-parchment-300)",
          paddingTop: "var(--space-6)",
          paddingBottom: "var(--space-6)",
        }}
      >
        <div className="container">
          <Link href="/insights" style={{ fontFamily: "var(--font-display)", fontSize: "var(--type-sm)", color: "var(--color-navy-600)" }}>
            ← All field dispatches
          </Link>
        </div>
      </nav>
    </>
  );
}
