import React from "react";

export default function TodoItem({ id, text, onDelete }) {
  return (
    <div style={{marginBottom: 10}}>
      <span>{text}</span>
      <button 
        style={{marginLeft: 10}} 
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
