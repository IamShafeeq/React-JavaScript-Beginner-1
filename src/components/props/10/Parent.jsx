import React from "react";
import PricingPlan from "./Child";

export default function App() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <PricingPlan name="Basic" price="$9/mo" features={["1 User", "Email Support"]} />
      <PricingPlan name="Pro" price="$29/mo" features={["5 Users", "Priority Support"]} />
      <PricingPlan name="Enterprise" price="Contact Us" features={["Unlimited Users", "Dedicated Manager"]} />
    </div>
  );
}
