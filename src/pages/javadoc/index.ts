import { APIRoute } from "astro";

export const GET: APIRoute = () => {
    return new Response("Found: /javadoc/index.html", {
        status: 302,
        headers: {
            "Content-Type": "text/plain",
            "Location": "/javadoc/index.html",
        },
    });
};
