import React from 'react';
import TodoList from '@/Component/TodoList';
import AddTodo from '@/Component/AddTodo';

const page = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="px-6 py-8 rounded-xl bg-gradient-to-br from-[#D9D9D9]/50 to-[#D9D9D9]/60  backdrop-blur-xl w-full max-w-md">
                <TodoList />
                <AddTodo />

                <div className="w-1/2 h-1.5 bg-black/80 rounded mx-auto mt-6" />
            </div>
        </div>
    )
};

export default page;