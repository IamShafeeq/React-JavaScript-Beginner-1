import React, { useState } from "react";
import InputField from "./Child";

export default function App() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <InputField 
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={setEmail}
      />

      <p>Typed: {email}</p>
    </div>
  );
}
