import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: process.env.SANITY_NAME || "sanity-nextjs-site",
  title: process.env.SANITY_TITLE || "Sanity Next.js Site",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "m1bph78k",
  dataset: process.env.SANITY_DATASET || "production",
  basePath: process.env.SANITY_BASE_PATH || "/studio",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});