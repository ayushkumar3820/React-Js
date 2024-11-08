// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

export default function About() {
  const [todosList, setTodosList] = useState([])
  return (
    <>
      <h1 className="text-xl">We are dev </h1>
      <button
        onClick={() => {
          import('../data').then((module) => setTodosList(module.todos))
        }}
      >
        Load Data
      </button>
      <ul>
        {todosList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}