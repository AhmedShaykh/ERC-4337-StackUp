import { NextRequest, NextResponse } from "next/server";

interface Params {
    params: {
        name: string;
    }
};

export async function GET(request: NextRequest, { params }: Params) {

    return NextResponse.json({
        From: params.name.toUpperCase(),
        Message: "Greetings from Pakistan",
        RequestType: "GET"
    });

};