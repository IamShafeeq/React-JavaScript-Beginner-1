import { useState } from "react";

function DarkMode() {
  const [dark, setDark] = useState(false);

  const pageStyle = {
    backgroundColor: dark ? "#111" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "20px",
    height: "100vh"
  };

  return (
    <div style={pageStyle}>
      <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default DarkMode;
