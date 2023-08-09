import { NextRequest, NextResponse } from "next/server";
import { db, todosTable } from "@/src/lib/drizzle";
import { eq } from "drizzle-orm";

export const PUT = async (request: NextRequest, {
    params
}: {
    params: { id: number }
}) => {

    const req = await request.json();

    const id = params.id;

    await db.update(todosTable)
        .set({ isdone: req.isdone })
        .where(eq(todosTable.id, id))
        .returning({ id: todosTable.id });

    return NextResponse.json({ message: "Item Updated" });

};

export const DELETE = async (request: NextRequest, {
    params
}: {
    params: { id: number }
}) => {

    const id = params.id;

    await db.delete(todosTable)
        .where(eq(todosTable.id, id))
        .returning({ id: todosTable.id });

    return NextResponse.json({ message: "Data Deleted" });

};