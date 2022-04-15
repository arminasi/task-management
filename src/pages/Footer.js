import React, { useState } from "react";

function Footer({ onAdd }) {
  const [text, setText] = useState("");

  return (
    <form
      style={{
        display: "flex",
        boxSizing: "border-box",
        padding: "6px",
        width: "220px",
        justifyContent: "space-between",
      }}
      className={null}
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
      }}
    >
      <input
        placeholder="Add todo..."
        value={text}
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default Footer;
