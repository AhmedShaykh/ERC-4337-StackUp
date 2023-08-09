import { NextRequest, NextResponse } from "next/server";

export const PUT = async (request: NextRequest, {
    params
}: {
    params: { id: number }
}) => {

    const id = params.id;

    return NextResponse.json({ message: "PUT request successful " + id });

};

export const DELETE = async (request: NextRequest, {
    params
}: {
    params: { id: number }
}) => {

    const id = params.id;

    return NextResponse.json({ message: "DELETE request successful " + id });

};