import React from "react";

export default function SearchBar({ query, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={(e) => onSearch(e.target.value)}
      style={{ padding: 8, width: "100%", marginBottom: 20 }}
    />
  );
}
