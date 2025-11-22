import React from "react";

export default function Product({ title, price, inStock }) {
  return (
    <div style={{marginBottom: 15}}>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      {inStock ? (
        <span style={{color: "green"}}>In Stock</span>
      ) : (
        <span style={{color: "red"}}>Out of Stock</span>
      )}
    </div>
  );
}
