import React, { useState } from "react";

export default function ProductSearch() {
  const [query, setQuery] = useState("");

  const products = ["Laptop", "Keyboard", "Mouse", "Monitor"];

  const filtered = products.filter(p =>
    p.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <input 
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {filtered.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </>
  );
}
