import { modrinth } from "./rinth.ts";
import {
    addons,
    communityPatch,
    modernizedVersions,
    moonFixVersions,
    onePointX,
    rdfPatch,
    rusPatch,
    spectrum11,
    type VersionItem,
    zeroPointX,
} from "./versions.ts";

export const allVersions = {
    modrinth: (
        await modrinth.getProjectVersions("the-broken-script")
    ).map(
        (ver) =>
            ({
                name: ver.name,
                file: ver.files[0].filename,
                download: ver.files[0].url,
                changelog: ver.changelog ?? undefined, // It's null, not undefined (*angy noises*)
                isUnsafe: false,
                published: ver.date_published,
                minecraft: ver.game_versions[0],
                loader: ver.loaders[0],
            }) satisfies VersionItem,
    ),

    official: [...zeroPointX, ...onePointX, ...spectrum11],

    community: [
        ...communityPatch,
        ...rdfPatch,
        ...modernizedVersions,
        ...addons,
        ...moonFixVersions,
        ...rusPatch,
    ],
};

export const allVersionsList = Object.values(allVersions)
    .flat() as VersionItem[];
export const loaders = [...new Set(allVersionsList.map((v) => v.loader))];
export const minecraft = [...new Set(allVersionsList.map((v) => v.minecraft))];
export const tags = [...new Set(allVersionsList.flatMap((v) => v.tags ?? []))];
