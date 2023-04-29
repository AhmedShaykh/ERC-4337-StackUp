import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const req = await request.json();

    if (req.email && req.password) {

        return NextResponse.json({ message: "User Logged In" });
    }

    else {
        return NextResponse.json({ message: "Invalid Email or Password" });
    }
};