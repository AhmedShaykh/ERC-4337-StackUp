import { NextRequest, NextResponse } from "next/server";
// import * as jose from "jose";

// export async function middleware(request: NextRequest) {

//     let jwt = request.cookies.get("token")?.value;

//     console.log("token: ", jwt);

//     const secret = new TextEncoder().encode(
//         'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2'
//     );

//     if (!jwt) {

//         // return NextResponse.redirect("/");

//     } else {

//         const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret);

//         const headers = new Headers(request.headers);

//         headers.set("user", JSON.stringify(payload.email));

//         console.log(protectedHeader);

//         console.log(payload);

//         return NextResponse.next({
//             request: {
//                 headers: headers
//             }
//         });
//     }
// };

// export const config = {
//   matcher: ["/api*"],
// };