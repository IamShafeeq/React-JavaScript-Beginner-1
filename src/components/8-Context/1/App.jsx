import { ThemeContext } from "./ThemeContext";
import Home from "./Home";

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Home />
    </ThemeContext.Provider>
  );
}
