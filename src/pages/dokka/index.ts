import { APIRoute } from "astro";

export const GET: APIRoute = () => {
    return new Response("Found: /dokka/index.html", {
        status: 302,
        headers: {
            "Content-Type": "text/plain",
            "Location": "/dokka/index.html",
        },
    });
};
