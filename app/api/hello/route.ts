import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {

    const url = request.nextUrl;

    if (url.searchParams.has("name")) {

        const name = url.searchParams.get("name");

        return NextResponse.json({ message: "Hello From: " + name });

    }
    else {
        return new NextResponse(`Please Send Your Name In Search Parameter`);
    }

};