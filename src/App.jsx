import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="card">
      <Counter />
      <Todos />
    </div>
  );
}

export default App;
