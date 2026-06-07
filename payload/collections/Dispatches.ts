import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

export const Dispatches: CollectionConfig = {
  slug: "dispatches",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "terrain", "depth", "status", "publishedAt"],
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Auto-generate slug from title if not provided
        if (!data.slug && data.title) {
          data.slug = slugify(data.title as string);
        }
        // Set publishedAt when status flips to published
        if (data.status === "published" && !data.publishedAt) {
          data.publishedAt = new Date().toISOString();
        }
        return data;
      },
    ],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      admin: {
        position: "sidebar",
        description: "Auto-generated from title. Override if needed.",
      },
    },
    {
      name: "terrain",
      type: "text",
      label: "Terrain (e.g. Consumer retail, mid-market)",
      required: true,
    },
    {
      name: "depth",
      type: "select",
      label: "Survey depth",
      required: true,
      options: [
        { label: "Surface observation", value: "surface" },
        { label: "Subsurface analysis", value: "subsurface" },
        { label: "Organisational", value: "organisational" },
        { label: "Bedrock insight", value: "bedrock" },
      ],
    },
    {
      name: "summary",
      type: "textarea",
      label: "Dispatch summary (1–2 sentences for card preview)",
      required: true,
    },
    {
      name: "body",
      type: "richText",
      label: "Dispatch body",
      editor: lexicalEditor({}),
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
        date: { pickerAppearance: "dayAndTime" },
        description: "Auto-set when status → published.",
      },
    },
    {
      name: "status",
      type: "select",
      options: ["draft", "published"],
      defaultValue: "draft",
      admin: { position: "sidebar" },
    },
  ],
};
