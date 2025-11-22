import React from "react";
import Tag from "./Child";

export default function App() {
  return (
    <div>
      <Tag text="New" color="green" />
      <Tag text="In Review" color="orange" />
      <Tag text="Closed" color="red" />
    </div>
  );
}
