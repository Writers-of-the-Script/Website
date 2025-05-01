import { XMLParser } from "fast-xml-parser";

const METADATA_URL =
    "https://maven.stardustmodding.org/public-snapshots/dev/wendigodrip/thebrokenscript/maven-metadata.xml";

export const getLatestVersion = async () => {
    const metaText = await (await fetch(METADATA_URL)).text();
    const parser = new XMLParser();
    const metaDoc = parser.parse(metaText);
    const latest = metaDoc.metadata.versioning.latest;

    return latest;
};
