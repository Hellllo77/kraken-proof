import { NextRequest, NextResponse } from "next/server";
import { getPayloadClient } from "@/lib/payload";
import { sendContactNotification } from "@/lib/resend";

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

  const { name, email, organisation, brief, source } = body as Record<string, unknown>;

  if (!name || typeof name !== "string" || !name.trim())
    return NextResponse.json({ error: "name_required" }, { status: 400 });
  if (!email || typeof email !== "string" || !email.includes("@"))
    return NextResponse.json({ error: "valid_email_required" }, { status: 400 });
  if (!brief || typeof brief !== "string" || !brief.trim())
    return NextResponse.json({ error: "brief_required" }, { status: 400 });

  const payload = await getPayloadClient();

  const doc = await payload.create({
    collection: "contacts",
    data: {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      organisation: organisation ? String(organisation).trim() : undefined,
      brief: String(brief).trim(),
      source: (source as "contact-form" | "commission-survey") ?? "contact-form",
    },
  });

  // Fire-and-forget Resend notification — failure doesn't block the 201 response
  sendContactNotification({
    name: doc.name,
    email: doc.email,
    organisation: doc.organisation ?? undefined,
    brief: doc.brief,
    source: doc.source as "contact-form" | "commission-survey",
  })
    .then(async () => {
      await payload.update({
        collection: "contacts",
        id: doc.id,
        data: { notified: true },
      });
    })
    .catch((err) => {
      console.error("[contact] Resend notification failed:", err);
    });

  return NextResponse.json({ ok: true, id: doc.id }, { status: 201 });
}
