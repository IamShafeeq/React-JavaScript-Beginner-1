import React, { useState } from "react";
import Modal from "./Modal";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h2>Hello</h2>
          <p>This is a modal!</p>
        </Modal>
      )}
    </>
  );
}
