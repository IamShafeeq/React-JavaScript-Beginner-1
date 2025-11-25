import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [formData, setFormData] = useState({ name: "", age: "" });

  function handleChildData(data) {
    setFormData(data);
  }

  return (
    <div>
      <h2>User Info</h2>
      <Child onSubmit={handleChildData} />

      <p>Name: {formData.name}</p>
      <p>Age: {formData.age}</p>
    </div>
  );
}
