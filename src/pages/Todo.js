import React from 'react'
import todoStyle from './todo.module.css'

function Todo({todo, toDelete}) {

  return (
    <div className={todoStyle.todo}>
      <span>{todo.text}</span>
      <span>{todo.priority}</span>
      <button className={todoStyle.btn} onClick={() => toDelete(todo)}>X</button>
    </div>
  )
}

export default Todo