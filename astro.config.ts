import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import starlight from "@astrojs/starlight";
import { ion } from "starlight-ion-theme";
import imageZoom from "starlight-image-zoom";
import kbd from "starlight-kbd";
import mdBlocks from "starlight-markdown-blocks";

export default defineConfig({
    site: "https://tbssite.stardustmodding.org",
    prefetch: true,

    integrations: [
        UnoCSS({
            injectReset: true,
        }),
        starlight({
            title: "The Broken Script",
            favicon: "/logo.png",
            // routeMiddleware: "./src/routeData.ts",

            logo: {
                src: "./src/assets/logo.png",
            },

            customCss: [
                "./src/styles/docs.css",
            ],

            sidebar: [
                {
                    label: "Wiki",
                    items: [
                        { label: "[tabler:home-filled] Home", link: "/wiki/" },
                        { label: "[tabler:search] ARG", link: "/wiki/arg" },
                        {
                            label: "[tabler:terminal] The Broken Script",
                            link: "/wiki/tbs",
                        },
                        {
                            label: "[tabler:alert-hexagon-filled] Spectrum 11",
                            link: "/wiki/spectrum-11",
                        },
                        {
                            label: "[tabler:sitemap-filled] Items",
                            link: "/wiki/items",
                        },
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

            tableOfContents: {
                maxHeadingLevel: 4,
            },

            plugins: [
                imageZoom(),
                kbd({
                    types: [
                        { id: "mac", label: "MacOS" },
                        { id: "windows", label: "Windows", default: true },
                    ],
                }),
                mdBlocks({
                    blocks: {
                        // Config
                    },
                }),
                ion({
                    icons: {
                        include: {
                            tabler: ["*"],
                        },
                    },

                    overrides: {
                        Head: false,
                    },
                }),
                {
                    name: "ion-overrides-fixer",
                    hooks: {
                        setup: ({ config, updateConfig }) => {
                            updateConfig({
                                components: {
                                    ...config.components,
                                    Head: "./src/components/WikiHead.astro",
                                    Sidebar: "./src/components/WikiSidebar.astro",
                                    SiteTitle: "./src/components/WikiSiteTitle.astro",
                                    EditLink: "./src/components/WikiEditButton.astro",
                                    Pagination: "./src/components/WikiPagination.astro",
                                    Header: "./src/components/WikiHeader.astro",
                                },
                            });
                        },
                    },
                }
            ],
        }),
    ],
});
