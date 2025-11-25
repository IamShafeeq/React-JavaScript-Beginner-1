import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // prevents page refresh
    alert("Form submitted: " + name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
