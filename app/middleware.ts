import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import * as jose from 'jose';

export async function middleware(request: NextRequest) {

    console.log("middle");

    const jwt = cookies().get("token")?.value;

    const secret = new TextEncoder().encode(
        'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
    );

    if (!jwt) {

        return NextResponse.redirect("/login");

    }
    else {

        const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret);

        console.log(payload);

        console.log(protectedHeader);

        return NextResponse.json({ email: "ahmed" });

    }

};

// export const config = {

//     matcher: ['/api*']

// };