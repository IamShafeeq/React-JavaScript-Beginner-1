export default function App() {
  function handleKeyDown(e) {
    console.log(e.key)
    console.log(e.code)
    
    if (e.key === "Enter") {
      alert("You pressed Enter!");
    }
  }

  return (
    <div>
      <input onKeyDown={handleKeyDown} placeholder="Press Enter" />
    </div>
  );
}
