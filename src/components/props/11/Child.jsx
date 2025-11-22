import React from "react";

export default function Comment({ author, avatar, message, time }) {
  return (
    <div style={{ display: "flex", marginBottom: 15 }}>
      <img 
        src={avatar} 
        alt={author} 
        style={{ borderRadius: "50%", marginRight: 10 }} 
      />

      <div>
        <strong>{author}</strong>
        <p>{message}</p>
        <small style={{ color: "gray" }}>{time}</small>
      </div>
    </div>
  );
}
