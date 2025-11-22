import React from "react";
import TodoItem from "./Child";

export default function App() {
  const handleDelete = (id) => {
    alert("Delete task with id:"+ id);
  };

  return (
    <div>
      <TodoItem id={1} text="Buy groceries" onDelete={handleDelete} />
      <TodoItem id={2} text="Finish project" onDelete={handleDelete} />
    </div>
  );
}
