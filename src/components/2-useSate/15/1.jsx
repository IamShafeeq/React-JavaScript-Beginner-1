import { useState } from "react";

function ProfileEditor() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    city: ""
  });

  const updateField = (field, value) => {
    setProfile({
      ...profile,
      [field]: value
    });
  };

  return (
    <div>
      <h2>Edit Profile</h2>

      <input
        placeholder="Name"
        value={profile.name}
        onChange={(e) => updateField("name", e.target.value)}
      />

      <input
        placeholder="Email"
        value={profile.email}
        onChange={(e) => updateField("email", e.target.value)}
      />

      <input
        placeholder="City"
        value={profile.city}
        onChange={(e) => updateField("city", e.target.value)}
      />

      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}

export default ProfileEditor;
