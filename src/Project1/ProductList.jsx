import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ items, onAddToCart }) {
  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {items.map(item => (
        <ProductCard 
          key={item.id}
          name={item.name}
          price={item.price}
          inStock={item.inStock}
          onAdd={() => onAddToCart(item.name)}
        />
      ))}
    </div>
  );
}
