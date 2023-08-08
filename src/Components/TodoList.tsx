import React from 'react';
import { Todos } from "@/lib/drizzle";

const getData = async () => {

    try {

        const res = await fetch("http://127.0.0.1:3000/api/todos", {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!res.ok) {
            throw new Error("Failed to Fetch the Data")
        };

        const result = await res.json();

        return result;

    }
    catch (error) {

        console.log(error);

    }

};

const TodoList = async () => {

    const data: { response: Todos[] } = await getData();

    return (
        <div className="max-h-[350px] overflow-y-auto mb-4 px-2 
        scrollbar-thumb-blue-900 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded">
            {
                data.response.map((item) => {
                    return (
                        <div key={item.id} className="bg-gray-100 px-4 py-3 my-3 flex items-center gap-x-8 shadow rounded-lg">
                            <div className="h-3 w-3 bg-[#030712] rounded-full" />
                            <p className="text-lg font-medium">
                                {item.task}
                            </p>
                        </div>
                    )
                })}
        </div>
    )
};

export default TodoList;