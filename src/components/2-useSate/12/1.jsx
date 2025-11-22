import { useState } from "react";

function CartItem() {
  const [qty, setQty] = useState(1);

  return (
    <div>
      <h3>Apple iPhone 15</h3>

      <button onClick={() => setQty(qty - 1)} disabled={qty === 1}>
        -
      </button>

      <span style={{ margin: "0 10px" }}>{qty}</span>

      <button onClick={() => setQty(qty + 1)}>+</button>
    </div>
  );
}

export default CartItem;
