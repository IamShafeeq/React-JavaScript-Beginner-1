import React from "react";

export default function StatCard({ label, value }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: 20,
      width: 120,
      textAlign: "center"
    }}>
      <h3>{value}</h3>
      <small>{label}</small>
    </div>
  );
}
