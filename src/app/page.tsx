import AddTodo from "../Components/AddTodo";
import TodoList from "../Components/TodoList";

const page = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-blue-900 flex items-center justify-center h-screen">
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#D9D9D9]/50 to-[#D9D9D9]/60 backdrop-blur-xl w-full max-w-md">
                <TodoList />
                <AddTodo />
                <div className="w-1/2 h-1.5 bg-black/80 rounded mx-auto mt-4" />
            </div>
        </div>
    )
};

export default page;