import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { Dispatches } from "./payload/collections/Dispatches";
import { Contacts } from "./payload/collections/Contacts";
import { Leads } from "./payload/collections/Leads";

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET ?? "",

  collections: [Dispatches, Contacts, Leads],

  editor: lexicalEditor({}),

  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI ?? `file:${path.join(process.cwd(), "data", "kraken.db")}`,
    },
  }),

  admin: {
    meta: {
      titleSuffix: " — Kraken Interactive CMS",
    },
  },

  typescript: {
    outputFile: path.resolve(process.cwd(), "payload-types.ts"),
  },
});
