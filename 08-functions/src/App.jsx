import React from "react";
import "./index.css";
const App = () => {
  function handleClick() {
    console.log("button was clicked");
  }
  function mouseOver() {
    console.log("mouse is over the button");
  }
  return (
    <div>
      <button
        onMouseEnter={mouseOver}
        onClick={function () {
          console.log("button was clicked");
        }}
      >
        click here
      </button>
      <input
        className="in"
        type="text"
        onChange={function (event) {
          console.log(event.target.value);
        }}
      />
      <div
        onMouseMove={(event) => {
          console.log(event.clientX, event.clientY);
        }}
        className="box"
      ></div>
    </div>
  );
};
// bkchod hai
export default App;
