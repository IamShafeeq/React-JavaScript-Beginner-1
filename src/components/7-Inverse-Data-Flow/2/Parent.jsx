import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Parent Component</h2>
      <Child onNameChange={setName} />

      <p>Typed name: {name}</p>
    </div>
  );
}
