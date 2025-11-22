import React from "react";

export default function InputField({ label, placeholder, value, onChange }) {
  return (
    <div style={{ marginBottom: 15 }}>
      <label>{label}</label>
      <br />
      <input 
        type="text" 
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
