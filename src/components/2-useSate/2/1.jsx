import React, { useState } from "react";

export default function ToggleButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide Details" : "Show Details"}
      </button>

      {isOpen && <p>This is some hidden content!</p>}
    </div>
  );
}
