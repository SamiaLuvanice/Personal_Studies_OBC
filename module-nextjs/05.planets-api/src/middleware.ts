import { MiddlewareConfig, NextRequest } from "next/server";

export const config: MiddlewareConfig = {
    matcher: ['/', '/planets', '/admin'],
};

export default function middleware(req: NextRequest) {
    console.log("Middleware executado.");

    if (req.nextUrl.pathname.startsWith('/planets')) {
        console.log("Autenticar usuario!");
    }

    if (req.nextUrl.pathname.startsWith('/admin')) {
        console.log("Área de administração");
    }
}