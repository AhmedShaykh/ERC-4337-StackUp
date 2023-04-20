import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    return NextResponse.json({
        From: "Ahmed",
        Message: "Greetings from Pakistan",
        RequestType: "GET"
    });

};

export async function POST(request: NextRequest) {

    const req = await request.json();

    if (req.name) {
        return NextResponse.json({
            To: req.name,
            Message: "All Well Here",
            RequestType: "POST"
        });
    }
    else {
        return new NextResponse('Please Include Your Name in the POST Request');
    }

};

export async function PUT(request: NextRequest) {

    const req = await request.json();

    if (req.name) {
        return NextResponse.json({
            To: req.name,
            Message: "I Have Updated the Greetings",
            RequestType: "PUT"
        });
    }
    else {
        return new NextResponse('Please Include Your Name in the PUT Request');
    }

};

export async function DELETE(request: NextRequest) {

    const req = await request.json();

    if (req.name) {
        return NextResponse.json({
            To: "Ahmed",
            Message: "I Have Deleted the Greetings",
            RequestType: "DELETE"
        });
    }
    else {
        return new NextResponse('Please Include Your Name in the DELETE Request');
    }

};