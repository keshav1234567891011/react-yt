import React from "react";
import { useState } from "react";
const App = () => {
  const [title, settitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted by ", { title });
    settitle("");
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="enter your name"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
