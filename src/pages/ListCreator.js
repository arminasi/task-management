import React, { useState } from "react";
import Footer from "./Footer";
import List from "./TodoList";

function  ListCreator() {
  const [state, setState] = useState([
    {
      text: "Some Text",
      id: Math.random(),
      isCompleted: false,
    },
    {
      text: "Some Text",
      id: Math.random(),
      isCompleted: false,
    },
    {
      text: "Some Text",
      id: Math.random(),
      isCompleted: false,
    },
  ]);

  function onAdd(text) {
    if(text === "") {
      return state
    }
    return setState([
      ...state,
      {
        text: text,
        id: Math.random(),
        isCompleted: false,
      },
    ]);
  }

  function onDelete(todo) {
    return setState(state.filter((item) => item.id != todo.id))
  }

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <List onDelete={onDelete} todos={state} />
      <Footer onAdd={onAdd} />
    </div>
  );
}

export default ListCreator;
