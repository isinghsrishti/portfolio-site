import { createClient, ClientConfig } from "@sanity/client";
import { getAllJSDocTagsOfKind } from "typescript";

const config: ClientConfig = {
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET,
  apiVersion: "2023-07-16",
  useCdn: false,
};

const client = createClient(config);

export default client;
