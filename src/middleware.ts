import { sequence } from "astro:middleware";
import { onRequest as localsRequest } from "./starlight/locals.ts";

export const onRequest = sequence(localsRequest);
