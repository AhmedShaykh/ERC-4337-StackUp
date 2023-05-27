import { NextRequest, NextResponse } from "next/server";
import { db } from '@vercel/postgres';

export async function GET(request: NextRequest) {

    const client = await db.connect();

    try {

        await client.sql`CREATE TABLE IF NOT EXISTS Pets ( Name varchar(255), Owner varchar(255) );`;

    } catch (error) {

        return NextResponse.json(
            { message: (error as { message: string }).message }
        );

    }

    const pets = await client.sql`SELECT * FROM Pets;`;

    return NextResponse.json({ response: pets.rows });

};

export async function POST(request: NextRequest) {

    const client = await db.connect();

    const reqData = await request.json();

    try {

        if (reqData.Name && reqData.Owner) {

            const res = await client.sql`INSERT INTO Pets (Name, Owner) VALUES(${reqData.Name}, ${reqData.Owner})`;

            return NextResponse.json({ message: "Data Added SuccessFully" });

        }
        else {

            throw new Error("Pets Field is Required!");

        }

    } catch (error) {

        return NextResponse.json(
            { message: (error as { message: string }).message }
        );

    }
};