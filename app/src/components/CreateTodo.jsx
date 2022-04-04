import Axios from 'axios';
import React, { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
const CreateTodo = ({ todoList, setTodoList }) => {

  const todoRef = useRef();

  const createTodo = e => {
    e.preventDefault();

    Axios.post('http://localhost:5000/create-todo', { name: todoRef.current.value }).then((res) => {
      todoRef.current.value = '';
    })
  };

  return (
    <div className='pt-20 create-todo'>
      <h1 className='text-3xl font-black'>Erstelle ein neues Todo</h1>
      <form className='flex gap-3 mt-3' onSubmit={createTodo}>
        <input ref={todoRef} type="text" placeholder='Deine Aufgabe...' className='bg-gray-200 px-3 py-2 w-1/6 rounded-lg outline-none' />
        <button className='bg-teal-500 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-teal-600 transition'><FaPlus />Todo hinzufügen</button>
      </form>
    </div>
  )
}

export default CreateTodo