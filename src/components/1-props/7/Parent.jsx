import React, { useState } from "react";
import Modal from "./Child";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Terms and Conditions</h2>
        <p>Please accept the terms to continue.</p>
      </Modal>
    </>
  );
}
