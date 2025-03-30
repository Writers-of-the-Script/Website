export interface VersionItem {
    name: string;
    file: string;
    download: string;
    changelog?: string;
    isUnsafe: boolean;
    published?: string;
}

export const version = (file: string, name: string, unsafe = false): VersionItem => ({
    name,
    file,
    download: `/files/${file}`,
    isUnsafe: unsafe,
});

export const zeroPointX: VersionItem[] = [
    version("The Broken Script V0.71.jar", "v0.71", true),
    version("The Broken Script V0.8.jar", "v0.8", true),
    version("The Broken Script V0.9.jar", "v0.9", true),
];
