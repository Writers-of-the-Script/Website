import { defineCollection } from "astro:content";
import { docsLoader } from "./starlight/loaders";
import { docsSchema } from "./starlight/schema";

export const collections = {
    docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
