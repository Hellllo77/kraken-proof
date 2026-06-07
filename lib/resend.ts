import { Resend } from "resend";

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

export interface LeadPayload {
  name?: string;
  email: string;
  source?: string;
}

export async function sendLeadNotification(data: LeadPayload): Promise<void> {
  const resend = getResend();
  const from = process.env.RESEND_FROM!;
  const to   = process.env.RESEND_TO!;

  await resend.emails.send({
    from,
    to,
    subject: `New lead — ${data.email}`,
    text: [
      `Email: ${data.email}`,
      `Name: ${data.name ?? "—"}`,
      `Source: ${data.source ?? "homepage-cta"}`,
    ].join("\n"),
  });
}
