import { useState } from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons';

const App = () => {

  return (
    <main className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='grid place-items-center space-y-4'>
        <h1 className='text-7xl font-thin text-[#E8D8D7]'>todos</h1>
        <section className='bg-white shadow-md w-96 h-52'>
          <div className='flex items-center'>
            <ChevronDownIcon className='opacity-20 w-5 h-5 m-2 mr-0' />
            <input type="text" placeholder='What needs to be done?' className='italic font-thin text-lg w-full h-12 p-2 outline-none' />
          </div>

          <section className='border-t-[1px]'>
            <div className='flex items-center py-2'>
              <input type="checkbox" name="" id="" className='w-4 m-2'/>
              <p className='font-light text-lg'>Тестовое задание</p>
            </div>
          </section>
        </section>
      </div>

    </main>
  )
}

export default App;
