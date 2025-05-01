import { APIRoute } from "astro";
import { XMLParser } from "fast-xml-parser";
import ZipFile from "adm-zip";
import { Buffer } from "node:buffer";

const MAVEN_BASE =
    "https://maven.stardustmodding.org/public-snapshots/dev/wendigodrip/thebrokenscript";

const METADATA_URL =
    "https://maven.stardustmodding.org/public-snapshots/dev/wendigodrip/thebrokenscript/maven-metadata.xml";

let jar: ZipFile;

const fetchJar = async () => {
    if (jar) return jar;

    const metaText = await (await fetch(METADATA_URL)).text();
    const parser = new XMLParser();
    const metaDoc = parser.parse(metaText);
    const latest = metaDoc.metadata.versioning.latest;
    const url = `${MAVEN_BASE}/${latest}/thebrokenscript-${latest}-javadoc.jar`;
    const jarContent = await (await fetch(url)).arrayBuffer();
    jar = new ZipFile(Buffer.from(jarContent));

    return jar;
};

export const getStaticPaths = async () => {
    const jar = await fetchJar();
    const paths = [];

    for (const entry of jar.getEntries()) {
        paths.push({ params: { path: entry.entryName } });
    }

    return paths;
};

export const GET: APIRoute = async ({ params }) => {
    const jar = await fetchJar();

    try {
        const file = jar.readFile(params.path!);

        if (!file) throw new Error();

        return new Response(file);
    } catch (_err: unknown) {
        return new Response("404 Not Found", {
            status: 404,
            headers: {
                "Content-Type": "text/plain",
            },
        });
    }
};
