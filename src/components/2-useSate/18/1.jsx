import { useState } from "react";
import "./slide.css";

function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        {open ? "Hide Details" : "Show Details"}
      </button>

      <div className={open ? "slide-down panel" : "slide-up panel"}>
        <p>This is some extra information.</p>
      </div>
    </div>
  );
}

export default Accordion;
