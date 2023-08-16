import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import * as jose from "jose";

export async function middleware(request: NextRequest) {

    let jwt = request.cookies.get("token")?.value;

    console.log("token: ", jwt);

    const secret = new TextEncoder().encode(
        process.env.JWT_SECRET
    );

    const url = request.nextUrl.clone();

    url.pathname = "/";

    // if (!jwt) {

    //     return NextResponse.redirect(url);

    // } else {

    //     const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret);

    //     const headers = new Headers(request.headers);

    //     headers.set("user", JSON.stringify(payload.email));

    //     console.log(protectedHeader);

    //     console.log(payload);

    //     return NextResponse.next({
    //         request: {
    //             headers: headers
    //         }
    //     });
    // }
};