export default function Child({ sendMessage }) {
  return (
    <button onClick={() => sendMessage("Hi Parent! I am Child!")}>
      Send Message
    </button>
  );
}
