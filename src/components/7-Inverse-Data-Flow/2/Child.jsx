export default function Child({ onNameChange }) {
  return (
    <input
      type="text"
      placeholder="Type your name..."
      onChange={(e) => onNameChange(e.target.value)}
    />
  );
}
