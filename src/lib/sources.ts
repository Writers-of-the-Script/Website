const sources = ["modrinth", "official", "community"];

// TODO: Make these dynamic like in ./data.ts
const loaders = ["forge", "neoforge"];
const minecraft = ["1.20.1", "1.21.1"];

const defaultEnabledSources = ["modrinth", "official", "community"];
const defaultEnabledLoaders = ["forge", "neoforge"];
const defaultEnabledVersions = ["1.21.1", "1.20.1"];

const setup = () => {
    const items = document.getElementById("items") as HTMLDivElement;
    const noResults = document.getElementById("no-results") as HTMLDivElement;
    const elements: Record<string, HTMLDivElement[]> = {};
    const sourceButtons: Record<string, HTMLDivElement> = {};
    const loaderButtons: Record<string, HTMLDivElement> = {};
    const versionButtons: Record<string, HTMLDivElement> = {};
    const tagButtons: Record<string, HTMLDivElement> = {};

    let tags: string[] = [];
    let enabledSources: string[] = [];
    let enabledLoaders: string[] = [];
    let enabledVersions: string[] = [];
    let enabledTags: string[] = [];

    for (const src of sources) {
        sourceButtons[src] = document.getElementById(
            "source-" + src,
        ) as HTMLDivElement;

        const found = [];
        const query = document.querySelectorAll(`div[data-source="${src}"]`);

        for (let i = 0; i < query.length; i++) {
            const el = query[i] as HTMLDivElement;

            found.push(el);
            tags.push(...el.dataset.tags!.split(";"));
        }

        elements[src] = found;
    }

    tags = [...new Set(tags)];

    for (const loader of loaders) {
        loaderButtons[loader] = document.getElementById(
            "loader-" + loader,
        ) as HTMLDivElement;
    }

    for (const version of minecraft) {
        versionButtons[version] = document.getElementById(
            "version-" + version,
        ) as HTMLDivElement;
    }

    for (const tag of tags) {
        tagButtons[tag] = document.getElementById(
            "tag-" + tag,
        ) as HTMLDivElement;
    }

    for (const src of defaultEnabledSources) {
        enabledSources.push(src);
        sourceButtons[src].classList.add("selected");
    }

    for (const loader of defaultEnabledLoaders) {
        enabledLoaders.push(loader);
        loaderButtons[loader].classList.add("selected");
    }

    for (const version of defaultEnabledVersions) {
        enabledVersions.push(version);
        versionButtons[version].classList.add("selected");
    }

    const updateElements = () => {
        for (const [src, els] of Object.entries(elements)) {
            const display = enabledSources.includes(src) ? "flex" : "none";

            els.forEach((el) => {
                const loader = el.dataset.loader!;
                const version = el.dataset.minecraft!;
                const elementTags = el.dataset.tags!.split(";");

                const tagsCheck =
                    enabledTags.length <= 0 ||
                    enabledTags.every((tag) => elementTags.includes(tag));

                el.style.display =
                    enabledLoaders.includes(loader) &&
                    enabledVersions.includes(version) &&
                    tagsCheck
                        ? display
                        : "none";
            });
        }

        if (
            enabledSources.length <= 0 ||
            enabledLoaders.length <= 0 ||
            enabledVersions.length <= 0
        ) {
            items.style.display = "none";
            noResults.style.display = "flex";
        } else {
            items.style.display = "grid";
            noResults.style.display = "none";
        }
    };

    for (const [src, button] of Object.entries(sourceButtons)) {
        button.addEventListener("click", () => {
            button.classList.toggle("selected");

            if (enabledSources.includes(src)) {
                enabledSources = [...enabledSources.filter((v) => v != src)];
            } else {
                enabledSources.push(src);
            }

            updateElements();
        });
    }

    for (const [loader, button] of Object.entries(loaderButtons)) {
        button.addEventListener("click", () => {
            button.classList.toggle("selected");

            if (enabledLoaders.includes(loader)) {
                enabledLoaders = [...enabledLoaders.filter((v) => v != loader)];
            } else {
                enabledLoaders.push(loader);
            }

            updateElements();
        });
    }

    for (const [version, button] of Object.entries(versionButtons)) {
        button.addEventListener("click", () => {
            button.classList.toggle("selected");

            if (enabledVersions.includes(version)) {
                enabledVersions = [
                    ...enabledVersions.filter((v) => v != version),
                ];
            } else {
                enabledVersions.push(version);
            }

            updateElements();
        });
    }

    for (const [tag, button] of Object.entries(tagButtons)) {
        if (!button) continue;

        button.addEventListener("click", () => {
            button.classList.toggle("selected");

            if (enabledTags.includes(tag)) {
                enabledTags = [...enabledTags.filter((v) => v != tag)];
            } else {
                enabledTags.push(tag);
            }

            updateElements();
        });
    }

    updateElements();
};

// deno-lint-ignore no-window-prefix no-window
window.addEventListener("load", setup);
document.addEventListener("astro:page-load", setup);
setup();
