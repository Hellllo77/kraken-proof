import { NextRequest, NextResponse } from "next/server";
import { getPayloadClient } from "@/lib/payload";
import { sendLeadNotification } from "@/lib/resend";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const { email, name, source } = body as Record<string, unknown>;

  if (!email || typeof email !== "string" || !email.includes("@"))
    return NextResponse.json({ error: "valid_email_required" }, { status: 400 });

  const payload = await getPayloadClient();

  const doc = await payload.create({
    collection: "leads",
    data: {
      email: String(email).trim().toLowerCase(),
      name:  name  ? String(name).trim()  : undefined,
      source: (source as string) ?? "homepage-cta",
    },
  });

  sendLeadNotification({
    email: doc.email,
    name:  doc.name ?? undefined,
    source: doc.source ?? "homepage-cta",
  })
    .then(async () => {
      await payload.update({
        collection: "leads",
        id: doc.id,
        data: { notified: true },
      });
    })
    .catch((err) => {
      console.error("[leads] Resend notification failed:", err);
    });

  return NextResponse.json({ ok: true, id: doc.id }, { status: 201 });
}
