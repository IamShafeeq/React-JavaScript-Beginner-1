import React from "react";
import Product from "./Product";

export default function App() {
  const products = [
    { id: 1, title: "Laptop", price: 1200, inStock: true },
    { id: 2, title: "Keyboard", price: 80, inStock: false }
  ];

  return (
    <div>
      {products.map(item => (
        <Product 
          key={item.id}
          title={item.title}
          price={item.price}
          inStock={item.inStock}
        />
      ))}
    </div>
  );
}
