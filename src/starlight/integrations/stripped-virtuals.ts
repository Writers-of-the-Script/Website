import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { AstroConfig, HookParameters, ViteUserConfig } from "astro";
import { getAllNewestCommitDate } from "../utils/git";
import { resolveCollectionPath } from "../utils/collection";
import { PluginTranslations } from "../utils/plugins.ts";
import { StarlightConfig } from "../utils/user-config.ts";

function resolveVirtualModuleId<T extends string>(id: T): `\0${T}` {
    return `\0${id}`;
}

export const starlightModules = (
    command: HookParameters<"astro:config:setup">["command"],
    opts: StarlightConfig,
    {
        build,
        legacy,
        root,
        srcDir,
        trailingSlash,
    }: Pick<AstroConfig, "root" | "srcDir" | "trailingSlash"> & {
        build: Pick<AstroConfig["build"], "format">;
        legacy: Pick<AstroConfig["legacy"], "collections">;
    },
    pluginTranslations: PluginTranslations,
): NonNullable<ViteUserConfig["plugins"]>[number] => {
    const resolveId = (id: string, base = root) =>
        JSON.stringify(
            id.startsWith(".") ? resolve(fileURLToPath(base), id) : id,
        );

    const resolveLocalPath = (path: string) =>
        JSON.stringify(fileURLToPath(new URL(path, import.meta.url)));

    const rootPath = fileURLToPath(root);
    const docsPath = resolveCollectionPath("docs", srcDir);

    const modules = {
        "virtual:starlight/user-config": `export default ${JSON.stringify(
            opts,
        )}`,
        "virtual:starlight/project-context": `export default ${JSON.stringify({
            build: { format: build.format },
            legacyCollections: legacy.collections,
            root,
            srcDir,
            trailingSlash,
        })}`,
        "virtual:starlight/git-info":
            (command !== "build"
                ? `import { makeAPI } from ${resolveLocalPath(
                      "../utils/git.ts",
                  )};` + `const api = makeAPI(${JSON.stringify(rootPath)});`
                : `import { makeAPI } from ${resolveLocalPath(
                      "../utils/gitInlined.ts",
                  )};` +
                  `const api = makeAPI(${JSON.stringify(
                      getAllNewestCommitDate(rootPath, docsPath),
                  )});`) +
            "export const getNewestCommitDate = api.getNewestCommitDate;",
        "virtual:starlight/user-images": opts.logo
            ? "src" in opts.logo
                ? `import src from ${resolveId(
                      opts.logo.src,
                  )}; export const logos = { dark: src, light: src };`
                : `import dark from ${resolveId(
                      opts.logo.dark,
                  )}; import light from ${resolveId(
                      opts.logo.light,
                  )}; export const logos = { dark, light };`
            : "export const logos = {};",
        "virtual:starlight/plugin-translations": `export default ${JSON.stringify(
            pluginTranslations,
        )}`,
    };

    const resolutionMap = Object.fromEntries(
        (Object.keys(modules) as (keyof typeof modules)[]).map((key) => [
            resolveVirtualModuleId(key),
            key,
        ]),
    );

    return {
        name: "vite-plugin-starlight-stripped-virtual-modules",
        resolveId(id): string | void {
            if (id in modules) return resolveVirtualModuleId(id);
        },
        load(id): string | void {
            const resolution = resolutionMap[id];
            if (resolution) return modules[resolution];
        },
    };
};
