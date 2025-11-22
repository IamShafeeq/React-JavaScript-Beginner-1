import React from "react";

export default function Modal({ children, onClose }) {
  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
        }}
        onClick={onClose} // clicking outside closes the modal
      ></div>

      {/* Modal Window */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          minWidth: "300px",
          zIndex: 1000,
        }}
      >
        {/* Close button */}
        <button
          style={{ float: "right", marginBottom: "10px" }}
          onClick={onClose}
        >
          X
        </button>

        {/* Content passed from parent */}
        {children}
      </div>
    </>
  );
}
