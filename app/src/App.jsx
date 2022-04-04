import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

const App = () => {

  const [todoList, setTodoList] = useState([]);
  
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from('.create-todo h1', { x: -50, opacity: 0, duration: .6 })
      .from('.create-todo form', { x: -50, opacity: 0, duration: .6 }, '-=.42')
      .from('.current-todos h1', { x: -50, opacity: 0, duration: .6 }, '-=.1')
      .from('.todo-list .todo', { x: -30, opacity: 0, stagger: 0.2, duration: .5 }, '-=.3');
  }, [])

  return (
    <div className='min-h-screen bg-gray-50 px-20'>
      <CreateTodo todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  )
}

export default App;