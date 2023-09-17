import { useSelector, useDispatch } from "react-redux";
import { selectAllTodos, todoUpdate } from "../features/todos/todosSlice";

const TodosList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(selectAllTodos);
    console.log(todos)

    const handleUpdate = (event: any) => {
        dispatch(todoUpdate(event.target.id))
    }

    const renderTodos = todos.map((todo) => (
        <div className='flex items-center py-2'>
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
        </section>
    );
}

export default TodosList;