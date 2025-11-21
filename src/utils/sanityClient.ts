import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "afk7aj61",
  dataset: "production",
  apiVersion: "v2025-07-21",
  useCdn: false,
});