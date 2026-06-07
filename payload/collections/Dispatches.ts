import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Dispatches: CollectionConfig = {
  slug: "dispatches",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "terrain", "depth", "status", "publishedAt"],
  },
  access: {
    read: () => true, // public read for the Insights page
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
      required: true,
      unique: true,
      admin: { position: "sidebar" },
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
      admin: { position: "sidebar", date: { pickerAppearance: "dayAndTime" } },
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
