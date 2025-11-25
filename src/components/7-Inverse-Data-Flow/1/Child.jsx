export default function Child({ onSendMessage }) {
  return (
    <button onClick={() => onSendMessage("Hello from Child!")}>
      Send Message
    </button>
  );
}
