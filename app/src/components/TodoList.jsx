import React from 'react';
import Axios from 'axios';
import Todo from './Todo';

const TodoList = ({ todoList, setTodoList }) => {

  Axios.get('http://localhost:5000/get-todos').then(info => {
    setTodoList(info.data);
  });

  return (
    <div className='mt-10 current-todos'>
      <h1 className='text-3xl font-black'>Deine aktuellen Todos:</h1>
      
      <div className='todo-list mt-5 flex flex-col gap-3'>
        {todoList.length === 0 ? <p className='text-teal-500 font-medium'>Du hast keine Aufgaben!</p> : todoList.map(todo => {
          return <Todo key={todo._id} data={todo} />
        })}
      </div>
    </div>
  )
}

export default TodoList