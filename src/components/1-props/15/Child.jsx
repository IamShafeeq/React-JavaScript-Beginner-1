import React from "react";

export default function Toolbar({ onAdd, onEdit, onDelete }) {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <button onClick={onAdd}>Add</button>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
