import React, { useState } from "react";

function Footer({ onAdd }) {
  const [text, setText] = useState("");

  return (
    <form className={null}
      onSubmit={(e) => {
        e.preventDefault()
        onAdd(text)
        setText("")
      }}
    >
      <input
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
