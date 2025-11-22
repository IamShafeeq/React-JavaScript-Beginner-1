import React, { useState } from "react";

export default function InputExample() {
  const [name, setName] = useState("");

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>You typed: {name}</p>
    </div>
  );
}
