

export default function Navbar({ items }) {
  return (
    <nav style={{ display: "flex", gap: 20, padding: 10 }}>
      {items.map((item, index) => (
        <a key={index} href={item.link}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
