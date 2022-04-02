import Footer from './Footer'
import { useState } from "react";
import columnsStyle from './columnStyles.module.css'
import SingleBoard from './SingleBoard';

function Column({toDeleteColumn, columns, title}) {

  const [todos, setTodos] = useState([
    {text: "asddas", id: 1, isCompleted: false}
  ])

  function toDelete(item) {
    setTodos(todos.filter((el) => el.id !== item.id))
    console.log(item.id)
  }

  function onAdd(text) {
    if(text.length < 3) {
      return;
    } else {

      setTodos([
        ...todos,
        {
          text: text,
          priority: "low",
          id: Math.round(Math.random() * 10000)
        }
      ])
    }
  }

  return (
    <div className={columnsStyle.column}>
      <button className={columnsStyle.btn} onClick={() => toDeleteColumn(columns)}>-</button> 
      <h1>{title}</h1>
      <SingleBoard toDelete={toDelete} todos={todos}/>
      <Footer onAdd={onAdd}/>
    </div>
  )
}

export default Column