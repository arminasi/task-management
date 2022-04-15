import React, { useState } from "react";

import { Link } from "react-router-dom";
function Boards() {

  const [board, setBoard] = useState([])

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "300px",
        margin: "6px"
      }}
    >
      <Link to="/login">Go to the tasks</Link>
      <button><Link to="/boards/JS">Create Board</Link></button>
    </div>
  );
}

export default Boards;
