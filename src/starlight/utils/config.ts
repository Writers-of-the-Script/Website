import type { AstroIntegration } from "astro";
import { parseWithFriendlyErrors } from "../utils/error-map";
import {
    StarlightConfigSchema,
    type StarlightUserConfig,
} from "../utils/user-config";
import { createTranslationSystemFromFs } from "./translations-fs";
import { absolutePathToLang as getAbsolutePathFromLang } from "../integrations/shared/absolutePathToLang";
import { PluginTranslations, StarlightPluginContext } from "./plugins.ts";

export function resolveConfig(
    userConfig: StarlightUserConfig,
    context: StarlightPluginContext,
) {
    const starlightConfig = parseWithFriendlyErrors(
        StarlightConfigSchema,
        userConfig,
        "Invalid config passed to starlight integration",
    );

    const pluginTranslations: PluginTranslations = {};

    const useTranslations = createTranslationSystemFromFs(
        starlightConfig,
        context.config,
        pluginTranslations,
    );

    function absolutePathToLang(path: string) {
        return getAbsolutePathFromLang(path, {
            astroConfig: context.config,
            starlightConfig,
        });
    }

    return {
        integrations: [] as AstroIntegration[],
        starlightConfig,
        pluginTranslations,
        useTranslations,
        absolutePathToLang,
    };
}
