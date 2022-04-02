import Column from "./Columns";
import { useState } from "react"
import Footer from "./Footer";

function SingleBoard() {

  const [columns, setColumns] = useState([])
  const [text, setText] = useState("")
  
  function addColumn(text) {
    setColumns([
      ...columns,
      {
        title: text,
        id: Math.round(Math.random() * 1000),
      }
    ])
  }

  function toDeleteColumn(item) {
    setColumns(columns.filter((col) => col.id !== item.id))
  }

  return (
    <div>
      <Footer onAdd={addColumn}/>
      <div className="App" style={{display: "flex", flexWrap:"wrap", justifyContent:"space-around", marginTop: "100px"}}>
      {columns.map((item) => {
        return <Column title={text} columns={item} toDeleteColumn={toDeleteColumn} key={Math.round(Math.random() * 1000)}/>;
      })}
      </div>
    </div>
  );
}

export default SingleBoard;