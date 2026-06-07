/**
 * This file was manually generated to match the Payload CMS collection schemas.
 * Run `npx payload generate:types` to regenerate when collections change.
 */

export interface Config {
  collections: {
    dispatches: Dispatch;
    contacts:   Contact;
  };
}

export interface Dispatch {
  id:          number;
  title:       string;
  slug:        string;
  terrain:     string;
  depth:       "surface" | "subsurface" | "organisational" | "bedrock";
  summary:     string;
  body?:       Record<string, unknown> | null;
  publishedAt?: string | null;
  status:      "draft" | "published";
  updatedAt:   string;
  createdAt:   string;
}

export interface Contact {
  id:            number;
  name:          string;
  email:         string;
  organisation?: string | null;
  brief:         string;
  source?:       "contact-form" | "commission-survey" | null;
  notified?:     boolean | null;
  updatedAt:     string;
  createdAt:     string;
}
