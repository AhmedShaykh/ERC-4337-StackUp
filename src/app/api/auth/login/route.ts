// import { NextRequest, NextResponse } from "next/server";
// import * as jose from 'jose';
// import { cookies } from "next/headers";

// export const POST = async (requset: NextRequest) => {

//     const body = await requset.json().catch(() => null);

//     if (body.email === "admin" && body.password === "admin") {

//         const secret = new TextEncoder().encode(
//             'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
//         );

//         const alg = 'HS256';

//         const jwt = await new jose.SignJWT({ email: body.email })
//             .setProtectedHeader({ alg })
//             .setIssuedAt()
//             .setIssuer('urn:example:issuer')
//             .setAudience('urn:example:audience')
//             .setExpirationTime('2h')
//             .sign(secret);

//         console.log(jwt);

//         cookies().set("token", jwt, {
//             httpOnly: true
//         });

//         return NextResponse.json({ message: "Login Success" });

//     }

//     return NextResponse.json({ message: body });

// };