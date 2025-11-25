

import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [message, setMessage] = useState("");

  function handleMessageFromChild(data) {
    setMessage(data);
  }

  return (
    <div>
      <Child onSendMessage={handleMessageFromChild} />
      <p>Message from Child: {message}</p>
    </div>
  );
}
