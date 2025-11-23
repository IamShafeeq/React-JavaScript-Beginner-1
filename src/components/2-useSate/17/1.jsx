import { useState } from "react";
import "./fade.css";

function FadeBox() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Fade Out" : "Fade In"}
      </button>

      <div className={visible ? "fade-in box" : "fade-out box"}>
        I am fading!
      </div>
    </div>
  );
}

export default FadeBox;
