import { useState } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  function toggle() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={toggle}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <p>This is visible text!</p>}
    </div>
  );
}
