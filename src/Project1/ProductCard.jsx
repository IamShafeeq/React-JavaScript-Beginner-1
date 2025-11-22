import React from "react";
import Tag from "./Tag";

export default function ProductCard({ name, price, inStock, onAdd }) {
  return (
    <div 
      style={{
        border: "1px solid #ddd",
        padding: 20,
        width: 180,
        borderRadius: 8
      }}
    >
      <h3>{name}</h3>
      <p>${price}</p>

      {inStock ? (
        <Tag text="In Stock" color="green" />
      ) : (
        <Tag text="Out of Stock" color="red" />
      )}

      <br /><br />

      <button 
        disabled={!inStock}
        onClick={onAdd}
        style={{
          padding: "8px 12px",
          background: inStock ? "blue" : "gray",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: inStock ? "pointer" : "not-allowed"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
