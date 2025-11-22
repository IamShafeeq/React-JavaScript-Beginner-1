import React from "react";
import Rating from "./Child";

export default function App() {
  return (
    <div>
      <Rating stars={4} />
      <Rating stars={2} />
    </div>
  );
}
