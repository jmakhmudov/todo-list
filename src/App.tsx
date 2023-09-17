import { useState } from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons';
import TodosList from './components/TodosList';
import { useDispatch } from "react-redux";
import { todoAdded } from './features/todos/todosSlice';

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();

  const addTodo = () => {
    if(todo) {
      dispatch(todoAdded(todo))
    }
  }

  return (
    <main className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='grid place-items-center space-y-4'>
        <h1 className='text-7xl font-thin text-[#E8D8D7]'>todos</h1>
        <section className='bg-white shadow-md w-96 h-52'>
          <div className='flex items-center'>
            <ChevronDownIcon className='opacity-20 w-5 h-5 m-2 mr-0' />
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder='What needs to be done?'
              className='italic font-thin text-lg w-full h-12 p-2 outline-none'
            />
            <button onClick={addTodo} className='p-2 px-4'>Add</button>
          </div>

          <TodosList />
        </section>
      </div>

    </main>
  )
}

export default App;
