
import Breadcrumb from "./Child";

export default function App() {
  const path = [
    { label: "Home", url: "/" },
    { label: "Products", url: "/products" },
    { label: "Laptops", url: "/products/laptops" },
  ];

  return <Breadcrumb items={path} />;
}
