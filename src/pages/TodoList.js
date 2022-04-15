import React from 'react'
import Todo from './Todo'
import todoStyle from "./todo.module.css"

function List({todos, onDelete}) {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      {todos.map(todo => {
        return <Todo onDelete={onDelete} key={todo.id} todo={todo}/>
      })}
    </div>
  )
}

export default List