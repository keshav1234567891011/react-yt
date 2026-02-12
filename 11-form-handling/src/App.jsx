import React from "react";

const App = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input type="text" placeholder="enter tyou name" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
