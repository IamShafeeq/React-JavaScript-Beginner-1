import React from "react";

export default function UserCard({ name, role, avatarUrl }) {
  return (
    <div style={{border: "1px solid #ccc", padding: 20, width: 250}}>
      <img src={avatarUrl} width={80} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}