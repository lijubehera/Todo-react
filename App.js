// src/App.js
import React, { useState } from 'react'
// App.js

import TodoForm from './TodoForm'
import TodoList from './TodoList'

import './index.css'

function App() {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const addTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      id: Date.now(),
      title,
      desc,
      date: new Date().toLocaleString()
    }
    setTodos([newTodo, ...todos])
    setTitle("")
    setDesc("")
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <main>
      <TodoForm title={title} desc={desc} setTitle={setTitle} setDesc={setDesc} addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </main>
  )
}

export default App
