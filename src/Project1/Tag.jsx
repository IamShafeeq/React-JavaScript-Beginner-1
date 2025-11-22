import React from "react";

export default function Tag({ text, color }) {
  return (
    <span 
      style={{
        background: color,
        padding: "5px 8px",
        borderRadius: "6px",
        color: "white",
        fontSize: 12
      }}
    >
      {text}
    </span>
  );
}
