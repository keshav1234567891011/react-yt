import React from "react";
import { useState } from "react";
const App = () => {
  // let a = 20;
  // function changeA() {
  //   a = 30;
  //   console.log(a);
  // }
  const [first, setfirst] = useState(30);
  const [username, setusername] = useState("Sarthak");
  const [count, setcount] = useState(0);
  function changeFirst() {
    setfirst(40);
    console.log(first);
    setusername("Sarthak Kumar");
    console.log(username);
  }
  function increase() {
    setcount(count + 1);
  }
  function decrease() {
    setcount(count - 1);
  }
  return (
    <div>
      <h1>
        value of a is {first},{username}
        value of count is {count}
      </h1>
      <button onClick={changeFirst}>click me</button>

      <button onClick={increase}>increaSE</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
};

export default App;
