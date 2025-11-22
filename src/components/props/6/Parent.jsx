
import Navbar from "./Child";

export default function App() {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "About", link: "/about" }
  ];

  return <Navbar items={menuItems} />;
}
