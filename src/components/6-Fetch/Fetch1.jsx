import { useState } from "react";

export default function App() {
  const [data, setData] = useState(null);

  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1") // sample API
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error:", error));
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}
