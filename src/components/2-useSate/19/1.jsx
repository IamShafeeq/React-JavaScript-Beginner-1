import { useState } from "react";
import "./press.css";

function PressButton() {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(true);
    setTimeout(() => setPressed(false), 150);
  };

  return (
    <button
      className={pressed ? "press" : ""}
      onClick={handlePress}
    >
      Click Me
    </button>
  );
}

export default PressButton;
