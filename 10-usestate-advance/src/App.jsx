import React from "react";
import { useState } from "react";
const App = () => {
  const [num, setnum] = useState({ user: "Sarthak", age: 22 });
  const [arr, setarr] = useState([1, 2, 3]);
  function arrClicked() {
    const newNum = [...arr];
    newNum.push(1);
    setarr(newNum);
  }
  const [first, setfirst] = useState(10);
  function batch() {
    setfirst((prev) => prev + 1);
    setfirst((prev) => prev + 1);
    setfirst((prev) => prev + 1);
  }
  function btnClicked() {
    const newNum = { ...num };
    newNum.age += 1;
    newNum.user = "Honey";
    setnum(newNum);
  }
  return (
    <div>
      <h1>
        age kya hai {num.user} hello {num.age}
      </h1>
      <h1>array ki val {arr.join(",")} hello</h1>
      <button onClick={btnClicked}>click me</button>
      <button onClick={arrClicked}>click me</button>
      <h1> value od num {first}</h1>
      <button onClick={batch}>click me</button>
    </div>
  );
};

export default App;
