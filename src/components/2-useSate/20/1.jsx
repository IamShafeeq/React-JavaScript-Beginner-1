import { useState } from "react";
import "./toast.css";

function ToastDemo() {
  const [showToast, setShowToast] = useState(false);

  const show = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div>
      <button onClick={show}>Show Notification</button>

      <div className={showToast ? "toast slide-in" : "toast slide-out"}>
        ✔ Item added to cart!
      </div>
    </div>
  );
}

export default ToastDemo;
