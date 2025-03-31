import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import icon from "astro-icon";

export default defineConfig({
    prefetch: true,

    integrations: [
        UnoCSS({
            injectReset: true,
        }),
        icon(),
    ],
});
