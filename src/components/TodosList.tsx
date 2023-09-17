import { useSelector, useDispatch } from "react-redux";
import { selectAllTodos, todoUpdate, clearCompleted } from "../features/todos/todosSlice";
import { useState } from "react";

const TodosList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(selectAllTodos);
    const [filter, setFilter] = useState("all");

    const handleUpdate = (event: any) => {
        dispatch(todoUpdate(event.target.id));
    }

    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") {
            return !todo.done;
        } else if (filter === "completed") {
            return todo.done;
        } else {
            return true;
        }
    });

    const handleClick = (btn: string) => {
        setFilter(btn);
    }

    const itemsLeft = () => {
        const items = todos.filter(todo => !todo.done);
        if (items) {
            return items.length;
        }

        return 0;
    }

    const clearCompTodos = () => {
        dispatch(clearCompleted());
    }

    const renderTodos = filteredTodos.map((todo) => (
        <div key={todo.id} className='flex items-center py-2'>
            <input
                onClick={(e) => handleUpdate(e)}
                type="checkbox"
                name={todo.title}
                id={todo.id}
                className='w-4 m-2'
            />
            <p className={`font-light text-lg ${todo.done ? "line-through opacity-50" : ""}`}>
                {todo.title}
            </p>
        </div>
    ));

    return (
        <section className='border-t-[1px]'>
            {renderTodos}
            <footer className="p-2 border-t-[1px] text-gray-500 font-light text-xs flex justify-between items-center">
                <p>{itemsLeft()} {itemsLeft() == 1 ? "item" : "items"} left</p>
                <div className="space-x-1">
                    <button className={`${filter === "all" ? "" : "border-opacity-0"} border-[1px] border-[#E8D8D7]  px-2 py-1 rounded-sm`} onClick={() => handleClick("all")}>All</button>
                    <button className={`${filter === "active" ? "" : "border-opacity-0"} border-[1px] border-[#E8D8D7]  px-2 py-1 rounded-sm`} onClick={() => handleClick("active")}>Active</button>
                    <button className={`${filter === "completed" ? "" : "border-opacity-0"} border-[1px] border-[#E8D8D7]  px-2 py-1 rounded-sm`} onClick={() => handleClick("completed")}>Completed</button>
                </div>
                <button onClick={clearCompTodos}>Clear completed</button>
            </footer>
        </section>
    );
}

export default TodosList;