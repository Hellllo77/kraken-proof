"use client";

import { useState } from "react";
import CalEmbed from "@/components/CalEmbed";

interface Props {
  calLink: string;
}

export default function ContactForm({ calLink }: Props) {
  const [form, setForm] = useState({ name: "", email: "", organisation: "", brief: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Request failed");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.");
    }
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--space-12)",
        alignItems: "start",
      }}
    >
      {/* Contact form */}
      <div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--type-heading)",
            fontWeight: 600,
            color: "var(--color-navy-900)",
            marginBottom: "var(--space-6)",
          }}
        >
          Submit a Brief
        </h2>

        {status === "sent" ? (
          <div className="field-note" style={{ padding: "var(--space-4)" }}>
            <p className="depth-notation" style={{ marginBottom: "var(--space-1)" }}>Received</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-navy-700)", lineHeight: "var(--lh-body)" }}>
              Your brief has been logged. We will be in touch within two business days.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}
          >
            {[
              { id: "name", label: "Name", type: "text", required: true },
              { id: "email", label: "Email", type: "email", required: true },
              { id: "organisation", label: "Organisation", type: "text", required: false },
            ].map(({ id, label, type, required }) => (
              <div key={id} style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                <label htmlFor={id} className="depth-notation" style={{ cursor: "pointer" }}>
                  {label}{required && <span aria-hidden="true"> *</span>}
                </label>
                <input
                  id={id}
                  type={type}
                  required={required}
                  value={form[id as keyof typeof form]}
                  onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--type-body)",
                    color: "var(--color-navy-900)",
                    background: "var(--color-parchment-100)",
                    border: "1px solid var(--color-parchment-300)",
                    borderRadius: "var(--radius-md)",
                    padding: "var(--space-2) var(--space-3)",
                    outline: "none",
                    width: "100%",
                  }}
                />
              </div>
            ))}

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
              <label htmlFor="brief" className="depth-notation" style={{ cursor: "pointer" }}>
                The terrain you are operating in <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="brief"
                required
                rows={6}
                value={form.brief}
                onChange={(e) => setForm((f) => ({ ...f, brief: e.target.value }))}
                placeholder="Describe the strategic situation, the questions you are trying to answer, and the constraints we should understand before the first conversation."
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--type-body)",
                  color: "var(--color-navy-900)",
                  background: "var(--color-parchment-100)",
                  border: "1px solid var(--color-parchment-300)",
                  borderRadius: "var(--radius-md)",
                  padding: "var(--space-2) var(--space-3)",
                  outline: "none",
                  resize: "vertical",
                  width: "100%",
                  lineHeight: "var(--lh-body)",
                }}
              />
            </div>

            {status === "error" && (
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-sm)", color: "#991b1b" }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--type-sm)",
                fontWeight: 600,
                letterSpacing: "var(--ls-heading)",
                color: "var(--color-parchment-100)",
                background: "var(--color-navy-900)",
                border: "none",
                borderRadius: "var(--radius-md)",
                padding: "var(--space-3) var(--space-6)",
                cursor: status === "sending" ? "wait" : "pointer",
                opacity: status === "sending" ? 0.6 : 1,
                alignSelf: "flex-start",
                transition: "opacity var(--dur-fast)",
              }}
            >
              {status === "sending" ? "Sending…" : "Submit Brief"}
            </button>
          </form>
        )}
      </div>

      {/* Cal.com booking */}
      <div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--type-heading)",
            fontWeight: 600,
            color: "var(--color-navy-900)",
            marginBottom: "var(--space-6)",
          }}
        >
          Book an Initial Consultation
        </h2>

        <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-navy-700)", lineHeight: "var(--lh-body)", marginBottom: "var(--space-4)" }}>
          Prefer to speak first? Book a 30-minute orientation call — no prior brief required.
          We use this conversation to understand the terrain before any engagement is proposed.
        </p>

        {calLink ? (
          <CalEmbed calLink={calLink} />
        ) : (
          <div className="field-note" style={{ padding: "var(--space-4)" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-navy-400)", fontStyle: "italic" }}>
              [ Cal.com booking — NEXT_PUBLIC_CAL_LINK not set. Configure and rebuild. ]
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
