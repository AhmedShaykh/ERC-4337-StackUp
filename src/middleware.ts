import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {

    const { pathname, origin } = request.nextUrl;

    let jwt = request.cookies.get("token")?.value;

    try {

        if (pathname === "/form") {

            if (jwt) return NextResponse.redirect(new URL(`${origin}`, request.url));

            return NextResponse.next();
        }

        if (!jwt) {
            return NextResponse.redirect(new URL("/form", request.url));
        }

        const verifyToken = await jwtVerify(jwt,
            new TextEncoder().encode(process.env.JWT_SECRET)
        );

        console.log("Verify Auth", verifyToken);

        if (verifyToken) {
            return NextResponse.next();
        }

        return NextResponse.json(
            { error: { message: "Authentication Required" } },
            { status: 401 }
        );

    } catch (error) {

        console.log(error);

    }

};

export const config = {
    matcher: ["/", "/form"],
};