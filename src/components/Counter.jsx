import React, { useReducer } from "react";
import "../App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "clear":
      return { count: (state.count = 0) };
    case "set100":
      return { count: (state.count = 100) };
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  const clear = () => {
    dispatch({ type: "clear" });
  };
  const set100 = () => {
    dispatch({ type: "set100" });
  };

  return (
    <div className="card">
      <div>
        <h3>Counter with useReducer</h3>
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <button onClick={clear}>CLEAR</button>
        <button onClick={set100}>SET TO 100</button>
      </div>
    </div>
  );
}

export default Counter;
