import { StarlightUserConfigWithPlugins } from "../utils/plugins.ts";

export const userConfig: StarlightUserConfigWithPlugins = {
    title: "The Broken Script",
    favicon: "/logo.png",
    description: "Here I am.",
    tagline: "The World They Built. The World They Hate.",
    // routeMiddleware: "./src/routeData.ts",

    logo: {
        src: "./src/assets/logo.png",
    },

    customCss: ["./src/styles/docs.css"],

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
            label: "[tabler:book-filled] Lore",
            autogenerate: { directory: "wiki/lore" },
        },

        {
            label: "[tabler:settings-filled] Mechanics",
            autogenerate: { directory: "wiki/mechanics" },
        },

        {
            label: "[tabler:stack-3-filled] Dimensions",
            autogenerate: { directory: "wiki/dimensions" },
        },

        {
            label: "[tabler:buildings] Structures",
            autogenerate: { directory: "wiki/structures" },
        },

        {
            label: "[tabler:ghost-3-filled] Entities",
            autogenerate: { directory: "wiki/entities" },
        },

        {
            label: "[tabler:code] Documentation",
            autogenerate: { directory: "docs" },
        },
    ],

    social: [
        {
            icon: "github",
            label: "GitHub",
            href: "https://github.com/RedstoneWizard08/TheBrokenSite",
        },
        {
            icon: "discord",
            label: "Discord",
            href: "https://discord.gg/nullnullnullnull",
        },
    ],

    editLink: {
        baseUrl: "https://github.com/RedstoneWizard08/TheBrokenSite/edit/main/",
    },

    tableOfContents: {
        maxHeadingLevel: 4,
    },
};

export default userConfig;
