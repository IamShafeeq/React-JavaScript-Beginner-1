import React from "react";

export default function PricingPlan({ name, price, features }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 20, width: 200 }}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <ul>
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
