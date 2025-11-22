import React from "react";

export default function Rating({ stars }) {
  const starIcons = "★".repeat(stars) + "☆".repeat(5 - stars);

  return <div style={{ fontSize: 24 }}>{starIcons}</div>;
}
