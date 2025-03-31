export interface VersionItem {
    name: string;
    file: string;
    download: string;
    changelog?: string;
    isUnsafe: boolean;
    published?: string;
    minecraft: string;
    loader: string;
    tags?: string[];
}

export const version = (
    file: string,
    name: string,
    unsafe = false,
    tags: string[] = [],
    minecraft = "1.20.1",
    loader = "forge",
): VersionItem => ({
    name,
    file,
    download: `/files/${file}`,
    isUnsafe: unsafe,
    minecraft,
    loader,
    tags,
});

export const zeroPointX: VersionItem[] = [
    version("0.x/The Broken Script V0.71.jar", "v0.7.1", true),
    version("0.x/The Broken Script V0.8.jar", "v0.8", true),
    version("0.x/The Broken Script V0.9.jar", "v0.9", true),
];

export const onePointX: VersionItem[] = [
    version("1.x/the broken script v1.0.jar", "v1.0", true),
    version("1.x/the broken script v1.1.jar", "v1.1", true),
    version("1.x/the broken script v1.2.jar", "v1.2", true),
    version("1.x/the broken script v1.3.jar", "v1.3", true),
    version("1.x/the broken script v1.3fix.jar", "v1.3-fix", true),
    version("1.x/the broken script v1.4.jar", "v1.4", true),
    version("1.x/the broken script v1.5.jar", "v1.5", true),
    version("1.x/the broken script v1.6.jar", "v1.6", true),
    version("1.x/the broken script v1.6fix.jar", "v1.6-fix", true),
    version("1.x/thebrokenscript-1.7-forge-1.20.1.jar", "v1.7", true),
    version("1.x/thebrokenscript-1.7.1-forge-1.20.1.jar", "v1.7.1", true),
    version("1.x/thebrokenscript-1.7.2-forge-1.20.1.jar", "v1.7.2", true),
    version("1.x/thebrokenscript-1.7.3-forge-1.20.1.jar", "v1.7.3", true),
    version("1.x/the broken script v1.8.jar", "v1.8", true),
];

export const spectrum11: VersionItem[] = [
    version("s11/spectrum_11.jar", "v0.1", true),
    version("s11/spectrum_11-0.2(WINDOWS11ONLY).jar", "v0.2", true),
];

export const communityPatch: VersionItem[] = [
    version(
        "community/community-patch/SAFE-TheBrokenScript-1.9.1+community.jar",
        "1.9.1-community-safe",
        false,
        ["Community Patch", "Safe"],
    ),

    version(
        "community/community-patch/UNSAFE-TheBrokenScript-1.9.1+community.jar",
        "1.9.1-community-unsafe",
        true,
        ["Community Patch", "Unsafe"],
    ),

    version(
        "community/community-patch/SAFE-TheBrokenScript-1.9.3+community.jar",
        "1.9.3-community-safe",
        false,
        ["Community Patch", "Safe"],
    ),
];

export const rdfPatch: VersionItem[] = [
    version(
        "community/rdf/The Broken Script v1.9.3-rdf.jar",
        "1.9.3-rdf",
        true,
        ["Render Distance Fix"],
    ),

    version(
        "community/rdf/The Broken Script v1.9.3-rdf+atkCDfix.jar",
        "1.9.3-rdf+atkCDfix",
        true,
        ["Render Distance Fix", "Attack Cooldown Fix"],
    ),

    version(
        "community/rdf/The Broken Script v1.9.3-rdf+modern.jar",
        "1.9.3-rdf+modern",
        true,
        ["Render Distance Fix", "Modernized"],
    ),

    version(
        "community/rdf/The Broken Script v1.9.3-rdf+modern+atkCDfix.jar",
        "1.9.3-rdf+modern+atkCDfix",
        true,
        ["Render Distance Fix", "Modernized", "Attack Cooldown Fix"],
    ),
];

export const modernizedVersions: VersionItem[] = [
    version(
        "community/modernized/The Broken Script V1.9.3-modernised.jar",
        "1.9.3-modernized",
        true,
        ["Modernized"],
    ),
];

export const addons: VersionItem[] = [
    version(
        "community/addons/TBS Moonfix v1.9.2 (plus deepslate fix).jar",
        "1.9.2-moonfix+deepslate",
        true,
        ["Addons", "Moon Fix", "Deepslate Fix"],
    ),

    version(
        "community/addons/TheBrokenScript-quietersounds.zip",
        "quieter-sounds",
        false,
        ["Addons", "Quieter Sounds"],
    ),

    version("community/addons/TheNormalMusic.zip", "normal-music", false, [
        "Addons",
        "Music Revertion",
    ]),
];

export const moonFixVersions: VersionItem[] = [
    version(
        "community/moonfix/even-safer-tbs-moonfix-1.9.2.jar",
        "1.9.2-moonfix-even-safer",
        false,
        ["Moon Fix", "Even Safer"],
    ),

    version(
        "community/moonfix/safe-tbs-moonfix-1.9.2.jar",
        "1.9.2-moonfix-safe",
        false,
        ["Moon Fix", "Safe"],
    ),

    version(
        "community/moonfix/unsafe-tbs-moonfix-1.9.2.jar",
        "1.9.2-moonfix-unsafe",
        true,
        ["Moon Fix", "Unsafe"],
    ),

    version(
        "community/moonfix/chunkeventchange/safe-tbs-moonfix-chunkeventchange.jar",
        "1.9.2-moonfix+cec-safe",
        false,
        ["Moon Fix", "Safe", "Chunk Event Change"],
    ),

    version(
        "community/moonfix/chunkeventchange/unsafe-tbs-moonfix-chunkeventchange.jar",
        "1.9.2-moonfix+cec-unsafe",
        true,
        ["Moon Fix", "Unsafe", "Chunk Event Change"],
    ),
];

export const rusPatch: VersionItem[] = [
    version(
        "community/patch-by-rus/tbs-patch-1.2-old-datapack.jar",
        "1.2-rus+old-datapack",
        true,
        ["Patch by RUS", "Old Datapack"],
    ),

    version(
        "community/patch-by-rus/tbs-patch-1.2-revert-despawning-old-datapack.jar",
        "1.2-rus+revert-despawning+old-datapack",
        true,
        ["Patch by RUS", "Revert Despawning", "Old Datapack"],
    ),

    version(
        "community/patch-by-rus/tbs-patch-1.2-revert-despawning.jar",
        "1.2-rus+revert-despawning",
        true,
        ["Patch by RUS", "Revert Despawning"],
    ),
    
    version("community/patch-by-rus/tbs-patch-1.2.jar", "1.2-rus", true, [
        "Patch by RUS",
    ]),
];
