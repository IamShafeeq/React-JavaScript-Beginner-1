import React from "react";

export default function Tag({ text, color }) {
  return (
    <span 
      style={{
        background: color,
        color: "white",
        padding: "5px 10px",
        borderRadius: 12,
        marginRight: 10
      }}
    >
      {text}
    </span>
  );
}
