import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
// import icon from "astro-icon";
import starlight from "@astrojs/starlight";
import { ion } from "starlight-ion-theme";

export default defineConfig({
    prefetch: true,

    integrations: [
        UnoCSS({
            injectReset: true,
        }),
        // icon(),
        starlight({
            title: "The Broken Script Wiki",
            plugins: [ion({
                icons: {
                    include: {
                        tabler: ["*"],
                    },
                },
            })],

            customCss: [
                "./src/styles/docs.css",
            ],

            sidebar: [
                {
                    label: "Wiki",
                    items: [
                        { label: "[tabler:home-filled] Home", link: "/wiki/" },
                        { label: "[tabler:search] ARG", link: "/wiki/arg" },
                        { label: "[tabler:terminal] The Broken Script", link: "/wiki/tbs" },
                        { label: "[tabler:alert-hexagon-filled] Spectrum 11", link: "/wiki/spectrum-11" },
                        { label: "[tabler:sitemap-filled] Items", link: "/wiki/items" },
                    ],
                },

                {
                    label: "[tabler:info-circle-filled] Information",
                    autogenerate: { directory: "wiki/info" },
                },

                {
                    label: "[tabler:stack-3-filled] Dimensions",
                    autogenerate: { directory: "wiki/dimensions" },
                },

                {
                    label: "[tabler:ghost-3-filled] Entities",
                    autogenerate: { directory: "wiki/entities" },
                },

                {
                    label: "[tabler:book-filled] Lore",
                    autogenerate: { directory: "wiki/lore" },
                },

                {
                    label: "[tabler:settings-filled] Mechanics",
                    autogenerate: { directory: "wiki/mechanics" },
                },

                {
                    label: "[tabler:buildings] Structures",
                    autogenerate: { directory: "wiki/structures" },
                },
            ],

            social: {
                github: "https://github.com/RedstoneWizard08/TheBrokenSite",
                discord: "https://discord.gg/nullnullnullnull",
            },

            editLink: {
                baseUrl:
                    "https://github.com/RedstoneWizard08/TheBrokenSite/edit/main/",
            },
        }),
    ],
});
