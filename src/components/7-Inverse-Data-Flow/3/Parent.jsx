import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [message, setMessage] = useState("");

  function receiveMessage(value) {
    setMessage(value);
  }

  return (
    <div>
      <h2>Parent Component</h2>

      <Child sendMessage={receiveMessage} />

      <p>Message from child: {message}</p>
    </div>
  );
}
