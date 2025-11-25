export default function Child({ onFruitSelect }) {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <select onChange={(e) => onFruitSelect(e.target.value)}>
      <option value="">Choose...</option>
      {fruits.map((fruit) => (
        <option key={fruit} value={fruit}>
          {fruit}
        </option>
      ))}
    </select>
  );
}
