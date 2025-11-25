import { useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("");

  return (
    <div>
      <div 
        onMouseEnter={() => setMsg("Mouse is inside")}
        onMouseLeave={() => setMsg("Mouse left")}
        style={{ padding: "20px", background: "lightblue" }}
      >
        Hover over this box
      </div>

      <p>{msg}</p>
    </div>
  );
}
