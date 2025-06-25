// src/components/TodoList.js
import React from 'react'

function TodoList({ todos, deleteTodo }) {
  return (
    <div className="container my-3">
      <h2>Your Todos</h2>
      {todos.length === 0 ? (
        <div className="alert alert-dark" role="alert">
          No Todos found. Add your first todo now!
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>SNo</th>
              <th>Title</th>
              <th>Description</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={todo.id}>
                <th>{index + 1}</th>
                <td>{todo.title}</td>
                <td>{todo.desc}</td>
                <td>{todo.date}</td>
                <td>
                  <button className="btn btn-outline-dark btn-sm mx-1" onClick={() => deleteTodo(todo.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default TodoList
