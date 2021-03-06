import React, { useState } from "react";

function Examples() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>this is counter app</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button id="decrement-btn" onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Examples;
