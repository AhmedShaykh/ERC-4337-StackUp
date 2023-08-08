import { NextRequest, NextResponse } from "next/server";

export const PUT = async (request: NextRequest, {
    params
}: {
    params: { id: number }
}) => {

    const id = params.id;

    return NextResponse.json({ message: "PUT request successful" });

};

export const DELETE = async (request: NextRequest, {
    params
}: {
    params: { id: number }
}) => {

    const id = params.id;

    return NextResponse.json({ message: "DELETE request successful" });

};