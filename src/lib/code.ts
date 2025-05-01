import { getLatestVersion } from "./tbs-version.ts";

export const kotlinSetupBlock = async () => {
    return `repositories {
    // All your repositories are here, then add:
    maven("https://dl.cloudsmith.io/public/geckolib3/geckolib/maven/")
    maven("https://maven.fzzyhmstrs.me/")
    maven("https://thedarkcolour.github.io/KotlinForForge/")
    maven("https://api.modrinth.com/maven")
    maven("https://maven.blamejared.com")
    maven("https://maven.stardustmodding.org/public-snapshots/")
}

dependencies {
    implementation("dev.wendigodrip:thebrokenscript:${await getLatestVersion()}")
}`;
};

export const groovySetupBlock = async () => {
    return `repositories {
    // All your repositories are here, then add:
    maven { url "https://dl.cloudsmith.io/public/geckolib3/geckolib/maven/" }
    maven { url "https://maven.fzzyhmstrs.me/" }
    maven { url "https://thedarkcolour.github.io/KotlinForForge/" }
    maven { url "https://api.modrinth.com/maven" }
    maven { url "https://maven.blamejared.com" }
    maven { url "https://maven.stardustmodding.org/public-snapshots/" }
}

dependencies {
    implementation("dev.wendigodrip:thebrokenscript:${await getLatestVersion()}")
}`;
};
