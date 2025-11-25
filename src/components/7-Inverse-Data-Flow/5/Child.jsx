import { useState } from "react";

export default function Child({ onSubmit }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function sendDataToParent() {
    onSubmit({ name, age });
  }

  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button onClick={sendDataToParent}>Submit</button>
    </div>
  );
}
