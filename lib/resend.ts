import { Resend } from "resend";

// Instantiated lazily — only runs server-side in API routes
let client: Resend | null = null;

export function getResend(): Resend {
  if (!client) client = new Resend(process.env.RESEND_API_KEY!);
  return client;
}

export interface ContactPayload {
  name: string;
  email: string;
  organisation?: string;
  brief: string;
  source?: "contact-form" | "commission-survey";
}

export async function sendContactNotification(data: ContactPayload): Promise<void> {
  const resend = getResend();
  const from = process.env.RESEND_FROM!;
  const to   = process.env.RESEND_TO!;

  await resend.emails.send({
    from,
    to,
    subject: `New enquiry — ${data.name}${data.organisation ? ` (${data.organisation})` : ""}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Organisation: ${data.organisation ?? "—"}`,
      `Source: ${data.source ?? "contact-form"}`,
      ``,
      `Brief:`,
      data.brief,
    ].join("\n"),
  });
}
