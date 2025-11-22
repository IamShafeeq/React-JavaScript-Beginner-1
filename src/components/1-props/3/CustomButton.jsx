import React from "react";

export default function CustomButton({ text, type }) {
  const styles = {
    primary: { background: "blue", color: "white", padding: "10px" },
    secondary: { background: "gray", color: "white", padding: "10px" }
  };

  return (
    <button style={styles[type]}>
      {text}
    </button>
  );
}
