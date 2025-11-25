import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [selectedFruit, setSelectedFruit] = useState("");

  return (
    <div>
      <h2>Select a Fruit</h2>
      <Child onFruitSelect={setSelectedFruit} />

      <p>You selected: {selectedFruit}</p>
    </div>
  );
}
