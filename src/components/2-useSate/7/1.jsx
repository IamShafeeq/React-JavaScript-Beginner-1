import React, { useState } from "react";
/*

Multiple States in One Component

*/

export default function MultiState() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [likes, setLikes] = useState(0);
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <p>Logged in: {isLoggedIn ? "Yes" : "No"}</p>
      <p>Likes: {likes}</p>
      <p>Theme: {theme}</p>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}
