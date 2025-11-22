/*

State Based on Previous State
When new state depends on the old one, use a function:

*/

import React, { useState } from "react";

export default function SafeCounter() {
  const [count, setCount] = useState(0);

  const increaseTwice = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1); // works correctly
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increaseTwice}>+2</button>
    </div>
  );
}
