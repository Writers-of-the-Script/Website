import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import starlight from "./src/starlight/index.ts";

const env = "Deno" in globalThis ? Deno.env.toObject() : process.env;

export default defineConfig({
    site: "https://tbssite.stardustmodding.org",
    prefetch: true,

    server: env.REDSTONE_IS_DUMB
        ? {
              port: 4000,
          }
        : {},

    vite: {
        server: env.REDSTONE_IS_DUMB
            ? {
                  port: 4000,
                  strictPort: true,
                  hmr: {
                      port: 4000,
                      clientPort: 443,
                      protocol: "wss",
                  },
              }
            : {},
    },

    integrations: [
        UnoCSS({
            injectReset: true,
        }),
        starlight(),
        (await import("@playform/compress")).default({
            Image: false,
            Exclude: ["/javadoc"],
        }),
    ],
});
