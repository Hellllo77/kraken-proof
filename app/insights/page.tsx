import type { Metadata } from "next";
import Link from "next/link";
import { getPayloadClient } from "@/lib/payload";
import type { Dispatch } from "@/payload-types";
import PageHeader from "@/components/PageHeader";
import CommissionCTA from "@/components/CommissionCTA";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Dispatches from the Field",
  description: "Field notes from survey engagements. Published when findings are worth sharing.",
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
      <PageHeader title="Dispatches from the Field" depthMark="—120m DISPATCHES" />

      {/* ── Dispatch grid or empty state ── */}
      <section className="section" style={{ background: "var(--parchment-100)" }}>
        <div className="container">
          {dispatches.length === 0 ? (
            <RevealOnScroll>
              <div
                style={{
                  borderLeft: "3px solid var(--amber-500)",
                  paddingLeft: "var(--space-8)",
                  maxWidth: "560px",
                  marginBottom: "var(--space-16)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--type-base)",
                    color: "var(--navy-700)",
                    lineHeight: "var(--lh-body)",
                    marginBottom: "var(--space-6)",
                  }}
                >
                  Dispatches from the field are published when the survey work produces findings worth
                  sharing. The first dispatch is in preparation.
                </p>
                <p
                  className="depth-notation"
                  style={{ color: "var(--depth-blue-500)" }}
                >
                  Survey dispatches coming soon.
                </p>
              </div>
            </RevealOnScroll>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "var(--space-6)",
                marginBottom: "var(--space-16)",
              }}
            >
              {dispatches.map((d, i) => (
                <RevealOnScroll key={d.id} delay={i * 60}>
                  <Link href={`/insights/${d.slug}`} style={{ textDecoration: "none", display: "block" }}>
                    <article
                      style={{
                        background: "var(--parchment-300)",
                        border: "1px solid rgba(58,110,165,0.3)",
                        padding: "var(--space-8)",
                        transition: "background var(--dur-fast)",
                      }}
                    >
                      {/* Amber top rule */}
                      <div style={{ height: "1px", background: "var(--amber-500)", marginBottom: "var(--space-6)" }} />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "var(--space-4)",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "var(--type-2xs)",
                            fontWeight: 600,
                            letterSpacing: "var(--ls-label)",
                            textTransform: "uppercase",
                            color: "var(--depth-blue-500)",
                          }}
                        >
                          Survey Dispatch {String(i + 1).padStart(3, "0")}
                        </p>
                        {d.publishedAt && (
                          <p
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "var(--type-2xs)",
                              color: "var(--depth-blue-400)",
                              opacity: 0.7,
                            }}
                          >
                            {new Date(d.publishedAt).toLocaleDateString("en-GB", {
                              month: "long",
                              year: "numeric",
                            })}
                          </p>
                        )}
                      </div>

                      {d.terrain && (
                        <p
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "var(--type-2xs)",
                            letterSpacing: "var(--ls-label)",
                            textTransform: "uppercase",
                            color: "var(--amber-500)",
                            marginBottom: "var(--space-3)",
                          }}
                        >
                          {d.terrain}
                        </p>
                      )}

                      <h2
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "var(--type-lg)",
                          fontWeight: 600,
                          color: "var(--navy-900)",
                          lineHeight: "var(--lh-heading)",
                          marginBottom: "var(--space-4)",
                        }}
                      >
                        {d.title}
                      </h2>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "var(--type-sm)",
                          color: "var(--navy-700)",
                          lineHeight: "var(--lh-body)",
                          marginBottom: "var(--space-6)",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {d.summary}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "var(--type-xs)",
                          fontWeight: 500,
                          letterSpacing: "var(--ls-caps)",
                          textTransform: "uppercase",
                          color: "var(--amber-500)",
                        }}
                      >
                        Read dispatch →
                      </p>
                    </article>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          )}

          {/* Email subscribe */}
          <RevealOnScroll>
            <div
              style={{
                borderTop: "1px solid rgba(58,110,165,0.25)",
                paddingTop: "var(--space-10)",
                maxWidth: "480px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--type-xs)",
                  fontWeight: 600,
                  letterSpacing: "var(--ls-label)",
                  textTransform: "uppercase",
                  color: "var(--depth-blue-500)",
                  marginBottom: "var(--space-4)",
                }}
              >
                Receive field dispatches
              </p>
              <form
                action="/api/leads"
                method="POST"
                style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  aria-label="Email address for dispatch updates"
                  style={{
                    flex: "1 1 240px",
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--type-sm)",
                    color: "var(--navy-900)",
                    background: "var(--parchment-300)",
                    border: "1px solid rgba(58,110,165,0.4)",
                    padding: "var(--space-3) var(--space-4)",
                    outline: "none",
                    minHeight: "44px",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--type-xs)",
                    fontWeight: 600,
                    letterSpacing: "var(--ls-caps)",
                    textTransform: "uppercase",
                    color: "var(--navy-900)",
                    background: "var(--amber-500)",
                    border: "none",
                    padding: "var(--space-3) var(--space-6)",
                    cursor: "pointer",
                    minHeight: "44px",
                    minWidth: "44px",
                    transition: "background var(--dur-fast)",
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CommissionCTA />
    </>
  );
}
