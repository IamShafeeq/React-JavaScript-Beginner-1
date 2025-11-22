import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

export default function App() {
  const [query, setQuery] = useState("");

  const products = [
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Keyboard", price: 80, inStock: false },
    { id: 3, name: "Monitor", price: 300, inStock: true },
    { id: 4, name: "Mouse", price: 40, inStock: true }
  ];

  const handleAddToCart = (productName) => {
    console.log("Added to cart:", productName);
  };

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <Header title="Product Store" />

      <SearchBar query={query} onSearch={setQuery} />

      <ProductList 
        items={filtered} 
        onAddToCart={handleAddToCart} 
      />
    </div>
  );
}
