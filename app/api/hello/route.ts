import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const url = request.nextUrl;

    if (url.searchParams.has("name")) {

        const name = url.searchParams.get("name");

        return new NextResponse('Hello From: ' + name);
    }
    else {

        return new NextResponse(`Please Send Your Name In Search Parameter "name"`);

    }

};