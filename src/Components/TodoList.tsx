import React from 'react';
import Todo from './Todo';

const getData = async () => {

    try {

        const url = "http://127.0.0.1:3000" || "http://localhost:3000/" || "https://localhost:3000/";

        const res = await fetch(`${url}/api/todos`, {
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

    const getdata: any = await getData();

    if (getdata?.data === 0) {
        return (
            <div className="wrapper flex justify-center items-center">
                <h1 className="text-2xl font-extrabold my-4">
                    No Todo's Found!
                </h1>
            </div>
        );
    }

    return (
        <div
            className="max-h-[350px] overflow-y-auto mb-4 px-2scrollbar-thumb-blue-900 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded"
        >
            {getdata.data?.map((item: any) => (
                <Todo todo={item} />
            ))}
        </div>
    )
};

export default TodoList;