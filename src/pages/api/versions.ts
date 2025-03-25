import { APIRoute } from "astro";
import { Modrinth } from "typerinth";

export const modrinth = new Modrinth();

export const GET: APIRoute = async () => {
    const versions = await modrinth.getProjectVersions("the-broken-script");

    return new Response(JSON.stringify(versions), {
        headers: {
            "Content-Type": "application/json",
        },
    });
};
