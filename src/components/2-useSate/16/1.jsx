import { useState } from "react";

function Tabs() {
  const [active, setActive] = useState("home");

  return (
    <div>
      <button onClick={() => setActive("home")}>Home</button>
      <button onClick={() => setActive("profile")}>Profile</button>
      <button onClick={() => setActive("settings")}>Settings</button>

      <div style={{ marginTop: 20 }}>
        {active === "home" && <p>Welcome to the home page!</p>}
        {active === "profile" && <p>This is your profile.</p>}
        {active === "settings" && <p>Update your settings here.</p>}
      </div>
    </div>
  );
}

export default Tabs;
