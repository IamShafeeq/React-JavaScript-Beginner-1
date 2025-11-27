import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Home() {
  const theme = useContext(ThemeContext);

  return <h1>Theme is: {theme}</h1>;
}
