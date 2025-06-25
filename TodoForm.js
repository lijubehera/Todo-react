// src/components/TodoForm.js
import React from 'react'

function TodoForm({ title, desc, setTitle, setDesc, addTodo }) {
  return (
    <div className="container my-3">
      <h2>Add a Todo</h2>
      <form onSubmit={addTodo}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          <input type="text" className="form-control" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
      </form>
    </div>
  )
}

export default TodoForm
