/*

useState + localStorage Example: Saving User’s Notes

This component lets the user type notes, and it automatically saves 
them to localStorage so the data is not lost when the page reloads.

*/

import { useState, useEffect } from "react";

function Notes() {
  // Load saved notes from localStorage on first render
  const [note, setNote] = useState(() => {
    return localStorage.getItem("myNote") || "";
  });

  // Save note to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("myNote", note);
  }, [note]); // runs every time 'note' changes

  return (
    <div>
      <h2>My Notes (Saved Automatically)</h2>

      <textarea
        rows="6"
        cols="40"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes..."
      />

      <p><strong>Saved!</strong> Refresh the page and your notes remain.</p>
    </div>
  );
}

export default Notes;
