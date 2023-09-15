"use client";
import { ChangeEvent, FC, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

const Todo: FC<any> = ({ todo }) => {

    const router = useRouter();

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {

        const res = await fetch(`/api/todos/${todo.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...todo, isdone: !todo.isdone
            })
        });

        await res.json();

        toast.success("Todo Successfully Update!");

        router.refresh();

    };

    const handleDelete = async (e: MouseEvent<HTMLButtonElement>) => {

        const res = await fetch(`/api/todos/${todo.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: todo.id
            })
        })

        await res.json();

        toast.success("Todo Successfully Delete!");

        router.refresh();

    };

    return (
        <div key={todo.id} className="bg-gray-100 px-4 py-3 my-3 flex items-center justify-between gap-x-6 shadow rounded-lg">
            <div className="flex items-center gap-4">
                <input
                    type="checkbox"
                    checked={todo.isdone}
                    onChange={handleChange}
                    id="completed"
                    name="completed"
                    className="min-w-[1rem] min-h-[1rem]"
                />

                <p className="text-lg font-medium">
                    {todo.isdone ? todo.task : <del>{todo.task}</del>}
                </p>

            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={handleDelete}
                    className="p-2 text-xl rounded-2xl text-black border-2 max-w-xs">
                    <FaTrash />
                </button>
            </div>
        </div>
    )
};

export default Todo;