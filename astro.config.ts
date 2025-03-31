import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import icon from "astro-icon";
import starlight from "@astrojs/starlight";

export default defineConfig({
    prefetch: true,

    integrations: [
        UnoCSS({
            injectReset: true,
        }),
        icon(),
        starlight({
            title: "The Broken Script Wiki",
            
            sidebar: [
                {
                    label: "Wiki",
                    items: [
                        { label: "Home", link: "/wiki/" },
                        { label: "ARG", link: "/wiki/arg" },
                        { label: "The Broken Script", link: "/wiki/tbs" },
                        { label: "Spectrum 11", link: "/wiki/spectrum-11" },
                        { label: "Items", link: "/wiki/items" },

                        {
                            label: "Information",
                            autogenerate: { directory: "wiki/info" },
                        },

                        {
                            label: "Dimensions",
                            autogenerate: { directory: "wiki/dimensions" },
                        },

                        {
                            label: "Entities",
                            autogenerate: { directory: "wiki/entities" },
                        },

                        {
                            label: "Lore",
                            autogenerate: { directory: "wiki/lore" },
                        },

                        {
                            label: "Mechanics",
                            autogenerate: { directory: "wiki/mechanics" },
                        },

                        {
                            label: "Structures",
                            autogenerate: { directory: "wiki/structures" },
                        },
                    ],
                },
            ],
        }),
    ],
});
