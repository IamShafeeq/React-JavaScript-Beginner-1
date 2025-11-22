import React from "react";
import Table from "./Child";

export default function App() {
  const headers = ["Name", "Age", "Country"];
  const rows = [
    ["Alice", 28, "USA"],
    ["Bob", 32, "Germany"],
    ["David", 23, "India"]
  ];

  return <Table headers={headers} rows={rows} />;
}
