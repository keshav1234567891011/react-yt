import React from "react";
import Card from "./components/card";
const App = () => {
  return (
    <div className="parent">
      <Card
        user="Aman"
        age={18}
        img="https://images.unsplash.com/photo-1767961932888-6bd98b732200?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
      />
      <Card
        user="Sarthank"
        age={36}
        img="https://images.unsplash.com/photo-1769666102080-5bc06b6da93d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
      />
    </div>
  );
};

export default App;
