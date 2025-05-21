/**
 * These triple-slash directives defines dependencies to various declaration files that will be
 * loaded when a user imports the Starlight integration in their Astro configuration file. These
 * directives must be first at the top of the file and can only be preceded by this comment.
 */
/// <reference path="./locals.d.ts" />
/// <reference path="./i18n.d.ts" />
/// <reference path="./virtual.d.ts" />
/// <reference path="./ion.d.ts" />

import mdx from "@astrojs/mdx";
import type { AstroIntegration, AstroIntegrationLogger } from "astro";
import { spawn } from "node:child_process";
import { dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import {
    starlightAsides,
    starlightDirectivesRestorationIntegration,
} from "./integrations/asides.ts";
import {
    starlightExpressiveCode,
    StarlightExpressiveCodeOptions,
} from "./integrations/expressive-code/index.ts";
import { starlightSitemap } from "./integrations/sitemap.ts";
import { vitePluginStarlightUserConfig } from "./integrations/virtual-user-config.ts";
import { rehypeRtlCodeSupport } from "./integrations/code-rtl-support.ts";
import {
    injectPluginTranslationsTypes,
    type PluginTranslations,
    runPlugins,
} from "./utils/plugins.ts";
import { processI18nConfig } from "./utils/i18n.ts";
import type { StarlightConfig } from "./types.ts";
import userOpts from "./config/user.ts";
import { viteVirtualModulePluginBuilder } from "./utils/vite-virtuals.ts";
import icon from "astro-icon";
import {
    ionDark,
    ionLight,
} from "./integrations/expressive-code/ion-ec-theme.ts";

const ionConfig: Ion.IonConfig = {
    icons: {
        include: {
            tabler: ["*"],
        },
    },

    overrides: {
        Head: false,
    },
};

export default function NulledLightIntegration(): AstroIntegration {
    const { plugins, ...opts } = userOpts;

    let userConfig: StarlightConfig;
    let pluginTranslations: PluginTranslations = {};

    const customCss = [
        "src/starlight/style/ion.css",
        ...(opts.customCss ?? []),
        "src/starlight/style/ion-ec-theme.css",
    ];

    let ecConfig:
        | boolean
        | StarlightExpressiveCodeOptions = opts.expressiveCode || {};

    if (ecConfig) {
        if (typeof ecConfig === "boolean") {
            ecConfig = {};
        }

        ecConfig.themes = [ionDark, ionLight];
    }

    opts.customCss = customCss;
    opts.expressiveCode = ecConfig;

    return {
        name: "nulledlight",
        hooks: {
            "astro:config:setup": async ({
                // addMiddleware,
                command,
                config,
                injectRoute,
                isRestart,
                logger,
                updateConfig,
            }) => {
                // Run plugins to get the updated configuration and any extra Astro integrations to load.
                const pluginResult = await runPlugins(opts, [
                    ...(plugins ?? []),
                    {
                        name: "ion-virtual",
                        hooks: {
                            setup: (
                                { addIntegration },
                            ) => {
                                addIntegration(
                                    icon(
                                        ionConfig ? ionConfig.icons : undefined,
                                    ),
                                );
                            },
                        },
                    },
                ], {
                    command,
                    config,
                    isRestart,
                    logger,
                });

                // Process the Astro and Starlight configurations for i18n and translations.
                const { astroI18nConfig, starlightConfig } = processI18nConfig(
                    pluginResult.starlightConfig,
                    config.i18n,
                );

                const { integrations, useTranslations, absolutePathToLang } =
                    pluginResult;

                pluginTranslations = pluginResult.pluginTranslations;
                userConfig = starlightConfig;

                // addMiddleware({
                //     entrypoint: "src/starlight/locals.ts",
                //     order: "pre",
                // });

                if (!starlightConfig.disable404Route) {
                    injectRoute({
                        pattern: "404",
                        entrypoint: starlightConfig.prerender
                            ? "src/starlight/routes/static/404.astro"
                            : "src/starlight/routes/ssr/404.astro",
                        prerender: starlightConfig.prerender,
                    });
                }

                injectRoute({
                    pattern: "[...slug]",
                    entrypoint: starlightConfig.prerender
                        ? "src/starlight/routes/static/index.astro"
                        : "src/starlight/routes/ssr/index.astro",
                    prerender: starlightConfig.prerender,
                });

                // Add built-in integrations only if they are not already added by the user through the
                // config or by a plugin.
                const allIntegrations = [
                    ...config.integrations,
                    ...integrations,
                ];

                if (
                    !allIntegrations.find(
                        ({ name }) => name === "astro-expressive-code",
                    )
                ) {
                    integrations.push(
                        ...starlightExpressiveCode({
                            starlightConfig,
                            useTranslations,
                        }),
                    );
                }

                if (
                    !allIntegrations.find(
                        ({ name }) => name === "@astrojs/sitemap",
                    )
                ) {
                    integrations.push(starlightSitemap(starlightConfig));
                }

                if (
                    !allIntegrations.find(({ name }) => name === "@astrojs/mdx")
                ) {
                    integrations.push(mdx({ optimize: true }));
                }

                // Add Starlight directives restoration integration at the end of the list so that remark
                // plugins injected by Starlight plugins through Astro integrations can handle text and
                // leaf directives before they are transformed back to their original form.
                integrations.push(starlightDirectivesRestorationIntegration());

                // Add integrations immediately after Starlight in the config array.
                // e.g. if a user has `integrations: [starlight(), tailwind()]`, then the order will be
                // `[starlight(), expressiveCode(), sitemap(), mdx(), tailwind()]`.
                // This ensures users can add integrations before/after Starlight and we respect that order.
                const selfIndex = config.integrations.findIndex(
                    (i) => i.name === "nulledlight",
                );

                config.integrations.splice(selfIndex + 1, 0, ...integrations);

                const globals = viteVirtualModulePluginBuilder(
                    "ion:globals",
                    "ion-theme-globals",
                    `export const icons = ${
                        JSON.stringify(ionConfig ? !!ionConfig.icons : false)
                    };
export const footer = ${JSON.stringify(ionConfig?.footer || { text: "" })};`,
                );

                updateConfig({
                    vite: {
                        plugins: [
                            globals(),
                            vitePluginStarlightUserConfig(
                                command,
                                starlightConfig,
                                config,
                                pluginTranslations,
                            ),
                        ],
                    },
                    markdown: {
                        remarkPlugins: [
                            ...starlightAsides({
                                starlightConfig,
                                astroConfig: config,
                                useTranslations,
                                absolutePathToLang,
                            }),
                        ],
                        rehypePlugins: [
                            rehypeRtlCodeSupport(),
                        ],
                        shikiConfig:
                            // Configure Shiki theme if the user is using the default github-dark theme.
                            config.markdown.shikiConfig.theme !== "github-dark"
                                ? {}
                                : { theme: "css-variables" },
                    },
                    scopedStyleStrategy: "where",
                    // If not already configured, default to prefetching all links on hover.
                    prefetch: config.prefetch ?? { prefetchAll: true },
                    i18n: astroI18nConfig,
                });
            },

            "astro:config:done": ({ injectTypes }) => {
                injectPluginTranslationsTypes(pluginTranslations, injectTypes);
            },

            "astro:build:done": ({ dir, logger }) => {
                if (!userConfig.pagefind) return;
                const loglevelFlag = getPagefindLoggingFlags(
                    logger.options.level,
                );
                const targetDir = fileURLToPath(dir);
                const cwd = dirname(fileURLToPath(import.meta.url));
                const relativeDir = relative(cwd, targetDir);
                return new Promise<void>((resolve) => {
                    spawn(
                        "npx",
                        [
                            "-y",
                            "pagefind",
                            ...loglevelFlag,
                            "--site",
                            relativeDir,
                        ],
                        {
                            stdio: "inherit",
                            shell: true,
                            cwd,
                        },
                    ).on("close", () => resolve());
                });
            },
        },
    };
}

/** Map the logging level of Astro’s logger to one of Pagefind’s logging level flags. */
function getPagefindLoggingFlags(
    level: AstroIntegrationLogger["options"]["level"],
) {
    switch (level) {
        case "silent":
        case "error":
            return ["--silent"];
        case "warn":
            return ["--quiet"];
        case "debug":
            return ["--verbose"];
        case "info":
        default:
            return [];
    }
}
