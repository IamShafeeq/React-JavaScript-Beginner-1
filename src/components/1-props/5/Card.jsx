import React from "react";

export default function Card({ title, children }) {
  return (
    <div style={{border: "1px solid black", padding: 20}}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
