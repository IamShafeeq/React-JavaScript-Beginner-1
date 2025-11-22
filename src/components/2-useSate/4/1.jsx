import React, { useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  const updateName = (e) => {
    setUser({ 
      ...user, 
      name: e.target.value 
    });
  };

  return (
    <div>
      <input 
        placeholder="Name"
        value={user.name}
        onChange={updateName}
      />

      <input 
        placeholder="Age"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />

      <p>{user.name} — {user.age}</p>
    </div>
  );
}
