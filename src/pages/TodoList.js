import React from 'react'
import Todo from './Todo'

function TodoList({todos, toDelete}) {
  return (
    <div>
      {todos.map((item) => {
       return <Todo key={item.id} toDelete={toDelete} todo={item}/>
      })}
    </div>
  )
}

export default TodoList