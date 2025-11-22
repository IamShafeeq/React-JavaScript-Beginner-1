import React from "react";
import UserCard from "./UserCard";

export default function App() {
  return (
    <div>
      <UserCard 
        name="John Doe"
        role="Software Engineer"
        avatarUrl="https://picsum.photos/100/100"
      />
    </div>
  );
}
