import { NextRequest, NextResponse } from "next/server";
import { Todos, db, todosTable } from "@/src/lib/drizzle";

export const GET = async (request: NextRequest) => {

    const data = await db.select().from(todosTable);

    return NextResponse.json({ data });

};

export const POST = async (request: NextRequest) => {

    const req = await request.json();

    if (!req.task) {

        return NextResponse.json({ message: "Invalid Fields" })

    }

    try {

        const res: Todos[] = await db.insert(todosTable).values(
            {
                task: req.task,
                isdone: req.isdone || true
            }
        ).returning();

        return NextResponse.json({ message: "Data Successfully Added!", res });


    } catch (error) {

        return NextResponse.json(
            { message: (error as { message: string }).message }
        );

    }

};