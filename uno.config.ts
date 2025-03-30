import { defineConfig, presetWebFonts, presetWind3 } from "unocss";
import { createLocalFontProcessor } from "@unocss/preset-web-fonts/local";

export default defineConfig({
    presets: [
        presetWind3(),
        presetWebFonts({
            provider: "fontsource",
            fonts: {
                jbm: "JetBrains Mono",
            },
            processors: createLocalFontProcessor({
                cacheDir: "node_modules/.cache/unocss/fonts",
                fontAssetsDir: "public/assets/fonts",
                fontServeBaseUrl: "/assets/fonts",
            }),
        }),
    ],

    theme: {
        colors: {
            modrinth: "#1bd96a",
        },
    },
});
