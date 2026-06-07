/**
 * Build-gate: validates required env vars.
 *
 * validateBuildEnv()  — called from next.config.ts at BUILD time.
 *   Covers NEXT_PUBLIC_* only: these are baked into the client bundle.
 *   Build fails immediately if any are unset. NO localhost fallbacks.
 *
 * validateServerEnv() — called in server-side route handlers at RUNTIME.
 *   Covers server-only secrets (RESEND, PAYLOAD). Throws 500 if misconfigured.
 *   Never set these in .env.production (use platform secrets or .env.local).
 */

const REQUIRED_PUBLIC: Record<string, string> = {
  NEXT_PUBLIC_CENTRAL_FEEDBACK_URL:
    "URL of the central-feedback-service (e.g. https://ccc-central-feedback.example.com)",
  NEXT_PUBLIC_FEEDBACK_PROJECT_ID:
    "Project ID registered in central-feedback-service (e.g. kraken-interactive)",
  NEXT_PUBLIC_SITE_URL:
    "Canonical site URL without trailing slash (e.g. https://kraken.com.my)",
};

// Optional public vars — build succeeds without these; features degrade gracefully.
// NEXT_PUBLIC_CAL_LINK: Cal.com booking slug — when unset, contact page shows form-only fallback.

const REQUIRED_SERVER: Record<string, string> = {
  PAYLOAD_SECRET: "Payload CMS secret key (min 32 chars)",
  DATABASE_URI:   "SQLite file path or Postgres connection string for Payload",
  RESEND_API_KEY: "Resend API key (re_xxx…)",
  RESEND_FROM:    "Verified sender address (e.g. hello@krakeninteractive.com)",
  RESEND_TO:      "Recipient address for contact form submissions",
};

/** Run at build time via next.config.ts — enforces NEXT_PUBLIC_* vars only. */
export function validateBuildEnv(): void {
  const missing: string[] = [];
  for (const [key, hint] of Object.entries(REQUIRED_PUBLIC)) {
    if (!process.env[key]) missing.push(`  ${key}  — ${hint}`);
  }
  if (missing.length > 0) {
    throw new Error(
      `\n\n🚫 BUILD GATE FAIL — missing required NEXT_PUBLIC environment variables:\n\n` +
      missing.join("\n") +
      `\n\nSet these in .env.production (safe to commit — public vars only).\n` +
      `NO localhost/127.0.0.1 fallbacks are permitted in source.\n`
    );
  }
}

/** Run at runtime in server-side handlers — enforces server secrets. */
export function validateServerEnv(): void {
  const missing: string[] = [];
  for (const [key, hint] of Object.entries(REQUIRED_SERVER)) {
    if (!process.env[key]) missing.push(`  ${key}  — ${hint}`);
  }
  if (missing.length > 0) {
    throw new Error(
      `Server misconfiguration — missing required environment variables:\n` +
      missing.join("\n") +
      `\nSet these as platform secrets or in .env.local (never commit to git).\n`
    );
  }
}

// Typed accessors — use these instead of process.env directly
export const env = {
  // NEXT_PUBLIC (available client-side after build)
  centralFeedbackUrl:  process.env.NEXT_PUBLIC_CENTRAL_FEEDBACK_URL!,
  feedbackProjectId:   process.env.NEXT_PUBLIC_FEEDBACK_PROJECT_ID!,
  calLink:             process.env.NEXT_PUBLIC_CAL_LINK ?? "",
  siteUrl:             process.env.NEXT_PUBLIC_SITE_URL!,
  // Server-only
  payloadSecret:       process.env.PAYLOAD_SECRET!,
  databaseUri:         process.env.DATABASE_URI!,
  resendApiKey:        process.env.RESEND_API_KEY!,
  resendFrom:          process.env.RESEND_FROM!,
  resendTo:            process.env.RESEND_TO!,
} as const;
