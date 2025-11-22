import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    setTodos([...todos, task]);  // add new item
    setTask("");
  };

  return (
    <div>
      <input 
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {todos.map((t, index) => (
          <li key={index}>
            {t}
            <button 
              onClick={() =>
                setTodos(todos.filter((_, i) => i !== index))
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
