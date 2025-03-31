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
    changelog?: string,
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
    changelog,
});

const trim = (content: string) =>
    content
        .split("\n")
        .map((v) => v.trim())
        .join("\n");

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
        "- removes the render distance changes from the Moon Glitch event",
    ),

    version(
        "community/rdf/The Broken Script v1.9.3-rdf+atkCDfix.jar",
        "1.9.3-rdf+atkCDfix",
        true,
        ["Render Distance Fix", "Attack Cooldown Fix"],
        trim(`
            - removes the render distance changes from the Moon Glitch event
            - restores the attack cooldowns for weapons (no more overpowered axes)
        `),
    ),

    version(
        "community/rdf/The Broken Script v1.9.3-rdf+modern.jar",
        "1.9.3-rdf+modern",
        true,
        ["Render Distance Fix", "Modernized"],
        trim(`
            - removes the render distance changes from the Moon Glitch event
            - restores modern Minecraft mobs (bees, etc.)
        `),
    ),

    version(
        "community/rdf/The Broken Script v1.9.3-rdf+modern+atkCDfix.jar",
        "1.9.3-rdf+modern+atkCDfix",
        true,
        ["Render Distance Fix", "Modernized", "Attack Cooldown Fix"],
        trim(`
            - removes the render distance changes from the Moon Glitch event
            - restores modern Minecraft mobs (bees, etc.)
            - restores the attack cooldowns for weapons (no more overpowered axes)
        `),
    ),
];

export const modernizedVersions: VersionItem[] = [
    version(
        "community/modernized/The Broken Script V1.9.3-modernised.jar",
        "1.9.3-modernized",
        true,
        ["Modernized"],
        "- restores modern Minecraft mobs (bees, etc.)",
    ),
];

export const addons: VersionItem[] = [
    version(
        "community/addons/TBS Moonfix v1.9.2 (plus deepslate fix).jar",
        "1.9.2-moonfix+deepslate",
        true,
        ["Addons", "Moon Fix", "Deepslate Fix"],
        "In the original mod this class checks every tick whether the player is at a height of less than -10 blocks, and whether there is a deep slate nearby to replace it with a stone. The deepslate replacer class has been removed in this mod.",
    ),

    version(
        "community/addons/TheBrokenScript-quietersounds.zip",
        "quieter-sounds",
        false,
        ["Addons", "Quieter Sounds"],
        trim(`
            Made the following sounds quieter:
            - moonglitch.ogg
            - revuxorchase.ogg
            - circuitjumpscare.ogg
            - integritydefeated.ogg
            - Thenothingiswatching.ogg
        `),
    ),

    version(
        "community/addons/TheNormalMusic.zip",
        "normal-music",
        false,
        ["Addons", "Music Revertion"],
        "Reverted all music back to the original soundtrack, instead of the corrupted soundtrack.",
    ),
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
        trim(`
            this patch introduces some improvements and fixes combined with other fan-made patches to enhance your gameplay experience:
            code updates:

            1. the moon event no longer makes the moon pink (credits to moonfix patch)
            2. moonglitch no longer makes your render distance low
            3. the moon event's phase is capped at a maximum of 2, preventing it from exceeding that limit. Previously, if it did that, it prevented the broken end from spawning.
            4. agressive mobs despawn event now only works when the moon event is active. Previously, they would disappear during moon phases 5 through 8 regardless, often resulting in event/entities overload
            5. questions in chat has been updated to be case-insensitive.
            6. error in the code where two events shared the same ID has been fixed, effectively adding a new event.
            7. the moon event now occurs more frequently. Earlier, triggering it required first encountering a rare random event (with odds of 1 in 55) and also having a specific moon phase. The latter condition has been removed.
            8. days no longer reset
            9. the broken end spawn conditions now only require the second phase of the moon event, making him more often. Previously, it also requires a specific texture of the moon from the atlas to be visible.
            10. sub anomalies now despawn more frequently
            11. random entity (missing texture dude) is now back. Previously in 1.9.3, if he tried to spawn in his true form, he just despawned instantly.
            12. flipped the broken moon's texture to hopefully make letters more readable
            13. fixed a bug that is left unpatched since 1.9 where glitchy/noisy siluet could not spawn because it tried to play a sound that is not present in the build
            14. null's username is now the same everywhere. Previously, in the chat it was written with a capital letter, but in tab menu it was written with a lowercase one for some reason
            15. err.themoon does not appear for no reason now
            16. nerfed a certain event that could basically //set 0 your entire buildings
            17. there were two structures that are fully complete but for some reason are left unused. There's also multiple copies of "carcas" structure in the code for whatever reason. This patch replaces these copies with the unused structures.
            18. probably something else. If you have any coding knowledge, you may compare the hashes with the original build to see the full list of changes I've made.
        `),
    ),

    version(
        "community/patch-by-rus/tbs-patch-1.2-revert-despawning-old-datapack.jar",
        "1.2-rus+revert-despawning+old-datapack",
        true,
        ["Patch by RUS", "Revert Despawning", "Old Datapack"],
        trim(`
            this patch introduces some improvements and fixes combined with other fan-made patches to enhance your gameplay experience:
            code updates:

            1. the moon event no longer makes the moon pink (credits to moonfix patch)
            2. moonglitch no longer makes your render distance low
            3. the moon event's phase is capped at a maximum of 2, preventing it from exceeding that limit. Previously, if it did that, it prevented the broken end from spawning.
            4. questions in chat has been updated to be case-insensitive.
            5. error in the code where two events shared the same ID has been fixed, effectively adding a new event.
            6. the moon event now occurs more frequently. Earlier, triggering it required first encountering a rare random event (with odds of 1 in 55) and also having a specific moon phase. The latter condition has been removed.
            7. days no longer reset
            8. the broken end spawn conditions now only require the second phase of the moon event, making him more often. Previously, it also requires a specific texture of the moon from the atlas to be visible.
            9. sub anomalies now despawn more frequently
            10. random entity (missing texture dude) is now back. Previously in 1.9.3, if he tried to spawn in his true form, he just despawned instantly.
            11. flipped the broken moon's texture to hopefully make letters more readable
            12. fixed a bug that is left unpatched since 1.9 where glitchy/noisy siluet could not spawn because it tried to play a sound that is not present in the build
            13. null's username is now the same everywhere. Previously, in the chat it was written with a capital letter, but in tab menu it was written with a lowercase one for some reason
            14. err.themoon does not appear for no reason now
            15. nerfed a certain event that could basically //set 0 your entire buildings
            16. there were two structures that are fully complete but for some reason are left unused. There's also multiple copies of "carcas" structure in the code for whatever reason. This patch replaces these copies with the unused structures.
            17. probably something else. If you have any coding knowledge, you may compare the hashes with the original build to see the full list of changes I've made.
        `),
    ),

    version(
        "community/patch-by-rus/tbs-patch-1.2-revert-despawning.jar",
        "1.2-rus+revert-despawning",
        true,
        ["Patch by RUS", "Revert Despawning"],
        trim(`
            this patch introduces some improvements and fixes combined with other fan-made patches to enhance your gameplay experience:
            code updates:

            1. the moon event no longer makes the moon pink (credits to moonfix patch)
            2. moonglitch no longer makes your render distance low
            3. the moon event's phase is capped at a maximum of 2, preventing it from exceeding that limit. Previously, if it did that, it prevented the broken end from spawning.
            4. questions in chat has been updated to be case-insensitive.
            5. error in the code where two events shared the same ID has been fixed, effectively adding a new event.
            6. the moon event now occurs more frequently. Earlier, triggering it required first encountering a rare random event (with odds of 1 in 55) and also having a specific moon phase. The latter condition has been removed.
            7. days no longer reset
            8. the broken end spawn conditions now only require the second phase of the moon event, making him more often. Previously, it also requires a specific texture of the moon from the atlas to be visible.
            9. sub anomalies now despawn more frequently
            10. random entity (missing texture dude) is now back. Previously in 1.9.3, if he tried to spawn in his true form, he just despawned instantly.
            11. flipped the broken moon's texture to hopefully make letters more readable
            12. fixed a bug that is left unpatched since 1.9 where glitchy/noisy siluet could not spawn because it tried to play a sound that is not present in the build
            13. null's username is now the same everywhere. Previously, in the chat it was written with a capital letter, but in tab menu it was written with a lowercase one for some reason
            14. err.themoon does not appear for no reason now
            15. nerfed a certain event that could basically //set 0 your entire buildings
            16. there were two structures that are fully complete but for some reason are left unused. There's also multiple copies of "carcas" structure in the code for whatever reason. This patch replaces these copies with the unused structures.
            17. probably something else. If you have any coding knowledge, you may compare the hashes with the original build to see the full list of changes I've made.

            datapack updates:

            1) ores now should drop their proper blocks instead of a weird 2d thing
            2) deepslate does not generate (but deepslate ores still do)
            3) entities should be able to break more blocks than they previously could
            4) now you shouldn't be able to edit signs in mod's structures
            5) villager's profession textures are changed according to their old versions
        `),
    ),

    version(
        "community/patch-by-rus/tbs-patch-1.2.jar",
        "1.2-rus",
        true,
        ["Patch by RUS"],
        trim(`
            this patch introduces some improvements and fixes combined with other fan-made patches to enhance your gameplay experience:
            code updates:

            1. the moon event no longer makes the moon pink (credits to moonfix patch)
            2. moonglitch no longer makes your render distance low
            3. the moon event's phase is capped at a maximum of 2, preventing it from exceeding that limit. Previously, if it did that, it prevented the broken end from spawning.
            4. agressive mobs despawn event now only works when the moon event is active. Previously, they would disappear during moon phases 5 through 8 regardless, often resulting in event/entities overload
            5. questions in chat has been updated to be case-insensitive.
            6. error in the code where two events shared the same ID has been fixed, effectively adding a new event.
            7. the moon event now occurs more frequently. Earlier, triggering it required first encountering a rare random event (with odds of 1 in 55) and also having a specific moon phase. The latter condition has been removed.
            8. days no longer reset
            9. the broken end spawn conditions now only require the second phase of the moon event, making him more often. Previously, it also requires a specific texture of the moon from the atlas to be visible.
            10. sub anomalies now despawn more frequently
            11. random entity (missing texture dude) is now back. Previously in 1.9.3, if he tried to spawn in his true form, he just despawned instantly.
            12. flipped the broken moon's texture to hopefully make letters more readable
            13. fixed a bug that is left unpatched since 1.9 where glitchy/noisy siluet could not spawn because it tried to play a sound that is not present in the build
            14. null's username is now the same everywhere. Previously, in the chat it was written with a capital letter, but in tab menu it was written with a lowercase one for some reason
            15. err.themoon does not appear for no reason now
            16. nerfed a certain event that could basically //set 0 your entire buildings
            17. there were two structures that are fully complete but for some reason are left unused. There's also multiple copies of "carcas" structure in the code for whatever reason. This patch replaces these copies with the unused structures.
            18. probably something else. If you have any coding knowledge, you may compare the hashes with the original build to see the full list of changes I've made.

            datapack updates:

            1) ores now should drop their proper blocks instead of a weird 2d thing
            2) deepslate does not generate (but deepslate ores still do)
            3) entities should be able to break more blocks than they previously could
            4) now you shouldn't be able to edit signs in mod's structures
            5) villager's profession textures are changed according to their old versions
        `),
    ),
];
