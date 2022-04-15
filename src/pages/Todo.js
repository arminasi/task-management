import React from 'react'
import todoStyle from "./todo.module.css"


function Todo({todo, onDelete}) {
  return (
    <div className={todoStyle.todo}>
      <div>{todo.text}</div>
      <div><button onClick={() => onDelete(todo)}>X</button></div>
    </div>
  )
}

export default Todo