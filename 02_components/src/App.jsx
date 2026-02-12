import React from "react";
import Navbar from "./components/navbar.jsx";
import Rona from "./components/card.jsx";
const App = () => {
  const user = "harsh";
  return (
    <div className="heading">
      <Navbar />
      <div className="card">
        <div>hello guys I am {user}</div>

        <Rona />
      </div>
    </div>
  );
};

export default App;
