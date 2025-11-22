

export default function Breadcrumb({ items }) {
  return (
    <nav>
      {items.map((item, i) => (
        <span key={i}>
          <a href={item.url}>{item.label}</a>
          {i < items.length - 1 ? " > " : ""}
        </span>
      ))}
    </nav>
  );
}
