import { useState } from "react";
import ListCreator from "./ListCreator";

function SingleBoard() {
  const data = [
    { list: <ListCreator />, title: "Todo" },
    { list: <ListCreator />, title: "Doing" },
    { list: <ListCreator />, title: "Done" },
  ];

  const [state, setState] = useState(data);
  const [title, setTitle] = useState("");

  function addList() {
    if(title === "") {
      return state
    }
    return setState([...state, { list: <ListCreator />, title: title }]);
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", boxSizing: "border-box" }}>
      <form
        style={{ position: "absolute", boxSizing:"border-box", padding:"6px"}}
        onSubmit={(e) => {
          e.preventDefault();
          addList();
          setTitle("");
        }}
      >
        <input
          placeholder="Add column..."
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <button>+</button>
      </form>
      {state.map((item) => {
        return (
          <div
            style={{
              alignItems: "center",
              marginTop: "50px",
              justifyContent: "space-around",
              textAlign: "center",
            }}
            key={Math.random()}
          >
            <h2>{item.title}</h2>
            {item.list}
          </div>
        );
      })}
    </div>
  );
}

export default SingleBoard;
