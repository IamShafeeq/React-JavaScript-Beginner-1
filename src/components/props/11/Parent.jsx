import React from "react";
import Comment from "./Child";

export default function App() {
  return (
    <div>
      <Comment 
        author="Alice"
        avatar="https://via.placeholder.com/40"
        message="This article was super helpful, thanks!"
        time="2 hours ago"
      />

      <Comment 
        author="Bob"
        avatar="https://via.placeholder.com/40"
        message="Can you please explain the last example in more detail?"
        time="10 minutes ago"
      />
    </div>
  );
}
