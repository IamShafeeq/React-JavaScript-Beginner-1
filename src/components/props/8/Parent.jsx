import React from "react";
import StatCard from "./Child";

export default function App() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <StatCard label="Users" value={1580} />
      <StatCard label="Revenue" value="$32,400" />
      <StatCard label="Orders" value={98} />
    </div>
  );
}
