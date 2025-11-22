import React from "react";
import CustomButton from "./CustomButton";

export default function App() {
  return (
    <div>
      <CustomButton text="Login" type="primary" />
      <CustomButton text="Cancel" type="secondary" />
    </div>
  );
}
