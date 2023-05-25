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

    } catch (error) {

        console.log(error);

    }

};

const TodoList = async () => {

    const data: { response: Todos[] } = await getData();
    console.log(data.response);

    return (
        <div className="max-h-[350px] overflow-auto mb-4">
            {
                data.response.map((item) => {
                    return (
                        <div key={item.id} className="bg-white p-4 my-8 my-4 flex items-center gap-x-8 shadow rounded-lg">
                            {/* <div className="h-8 w-8 px-4 bg-primary rounded-full z-10"></div> */}
                            <p className="text-lg font-medium text-gray-800">{item.task}</p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default TodoList;