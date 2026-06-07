import type { CollectionConfig } from "payload";

export const Contacts: CollectionConfig = {
  slug: "contacts",
  admin: {
    useAsTitle: "email",
    defaultColumns: ["name", "email", "organisation", "brief", "createdAt"],
  },
  access: {
    read: ({ req }) => Boolean(req.user), // admin only
    create: () => true,                   // form submissions are public
  },
  fields: [
    { name: "name",         type: "text",     required: true },
    { name: "email",        type: "email",    required: true },
    { name: "organisation", type: "text",     label: "Organisation" },
    {
      name: "brief",
      type: "textarea",
      label: "Brief description of the terrain / problem",
      required: true,
    },
    {
      name: "source",
      type: "select",
      options: ["contact-form", "commission-survey"],
      defaultValue: "contact-form",
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
