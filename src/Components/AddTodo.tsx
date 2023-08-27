"use client";
import React, { ChangeEvent, useState } from "react";
import { NewTodos } from "../lib/drizzle";
import { useRouter } from "next/navigation";
import Image from "next/image";

const AddTodo = () => {

    const [task, setTask] = useState<NewTodos | any>("");

    const { refresh } = useRouter();

    const handleSubmit = async () => {

        try {

            if (task) {

                await fetch("/api/todos", {
                    method: "POST",
                    body: JSON.stringify({
                        task: task.task
                    })
                });

                refresh();

            }

        }
        catch (error) {
            console.log("error");
        }

    };

    return (
        <form className='w-full flex gap-x-3'>
            <input
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTask({ task: e.target.value })}
                className="text-[1rem] font-medium rounded-full w-full py-3 px-5 border focus:outline-blue-900"
                type="text"
            />

            <button
                className="p-4 shrink-0 rounded-full bg-gradient-to-b from-gray-900 to-blue-900"
                onClick={handleSubmit}
            >
                <Image
                    src={"/vector.png"}
                    width={20}
                    height={20}
                    alt='vector'
                />
            </button>
        </form>
    )
};

export default AddTodo;