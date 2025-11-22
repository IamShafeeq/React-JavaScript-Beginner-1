import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.5)"
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: "white", 
          padding: 20, 
          width: 300,
          margin: "100px auto"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button style={{ marginTop: 10 }} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
