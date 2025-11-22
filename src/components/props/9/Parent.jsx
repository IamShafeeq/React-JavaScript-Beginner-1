import React, { useState } from "react";
import SearchBar from "./Child";

export default function App() {
  const [query, setQuery] = useState("");

  const handleSearch = (value) => {
    setQuery(value);
    console.log("Searching for:", value);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <p>Search Query: {query}</p>
    </div>
  );
}
