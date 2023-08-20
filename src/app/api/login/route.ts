import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import * as jose from 'jose';

export const POST = async (requset: NextRequest) => {

    const body = await requset.json();

    if (body.username === "admin" && body.password === "admin") {

        const secret = new TextEncoder().encode(
            process.env.JWT_SECRET
        );

        console.log("secret: ", secret);

        const alg = "HS256";

        const jwt = await new jose.SignJWT({
            username: body.username,
            role: "admin"
        })
            .setProtectedHeader({ alg })
            .setIssuedAt()
            .setExpirationTime("2h")
            .sign(secret);

        cookies().set("token", jwt, {
            httpOnly: true,
        });

        return NextResponse.json({
            accessToken: jwt,
            message: "Login Successfully!"
        });

    }

    return NextResponse.json(
        { message: "Invalid Username or Password" },
        { status: 400 }
    );

};