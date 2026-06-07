import type { CollectionConfig } from "payload";

export const Leads: CollectionConfig = {
  slug: "leads",
  admin: {
    useAsTitle: "email",
    defaultColumns: ["name", "email", "source", "createdAt"],
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name (optional)",
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "source",
      type: "select",
      options: ["homepage-cta", "insights-page", "capabilities-page", "other"],
      defaultValue: "homepage-cta",
      admin: { position: "sidebar" },
    },
    {
      name: "notified",
      type: "checkbox",
      defaultValue: false,
      admin: { position: "sidebar", description: "Resend notification sent" },
    },
  ],
};
