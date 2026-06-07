import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";
import { validateBuildEnv } from "./lib/env";

// Build gate — fails if any NEXT_PUBLIC_* var is missing at build time.
// Server-only secrets (RESEND_*, PAYLOAD_SECRET, DATABASE_URI) are validated
// at runtime in route handlers — they are never required at build time.
validateBuildEnv();

const nextConfig: NextConfig = {};

export default withPayload(nextConfig);
