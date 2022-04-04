import React from 'react';
import { FaTrash } from 'react-icons/fa';
import Axios from 'axios';

const Todo = ({ data }) => {

  const deleteTodo = () => {
    Axios.post('http://localhost:5000/delete-todo', {id: data._id}).then(() => {
      console.log('Deleted todo item');
    })
  }

  return (
    <div className='todo bg-gray-200 w-1/3 flex items-center justify-between px-5 py-3 rounded-lg shadow-sm'>
      <h1 className='font-medium'>{data.name}</h1>
      <button onClick={deleteTodo}><FaTrash color='#f13f5e' size={20} /></button>
    </div>
  )
}

export default Todo