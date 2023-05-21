import { NextRequest, NextResponse } from "next/server";
import { NewTodos, Todos, db, todosTable } from "@/lib/drizzle";
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {

    try {

        await sql`CREATE TABLE IF NOT EXISTS TODOS(ID serial, TASK varchar(255))`;

        const res: Todos[] = await db.select().from(todosTable);

        return NextResponse.json({ response: res });

    } catch (err) {

        console.log((err as { message: string }).message);

        return NextResponse.json({ message: "Something Went Wrong" });

    }

};

export async function POST(request: NextRequest) {

    const reqData = await request.json();

    try {

        if (reqData.TASK) {

            const res: NewTodos[] = await db.insert(todosTable).values({
                task: reqData.TASK
            }).returning();

            console.log(res);

            return NextResponse.json({ message: "Data Added SuccessFully" });

        }
        else {

            throw new Error("Task Field is Required!");

        }

    } catch (error) {

        return NextResponse.json(
            { message: (error as { message: string }).message }
        );

    }
};