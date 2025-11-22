import React from "react";
import Toolbar from "./Child";

export default function App() {
  const actions = {
    onAdd: () => alert("Add clicked"),
    onEdit: () => alert("Edit clicked"),
    onDelete: () => alert("Delete clicked"),
  };

  return <Toolbar {...actions} />;
}
