import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); // number state

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
