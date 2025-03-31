export interface VersionItem {
    name: string;
    file: string;
    download: string;
    changelog?: string;
    isUnsafe: boolean;
    published?: string;
}

export const version = (
    file: string,
    name: string,
    unsafe = false,
): VersionItem => ({
    name,
    file,
    download: `/files/${file}`,
    isUnsafe: unsafe,
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
