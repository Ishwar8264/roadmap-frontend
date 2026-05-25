import { createContext, useContext, useState } from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

function ThemeButton() {
  const context = useContext(ThemeContext);

  if (!context) {
    return null;
  }

  const { theme, toggleTheme } = context;

  return <button onClick={toggleTheme}>Current Theme: {theme}</button>;
}

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <h1>Context API</h1>

      <p>Current theme is: {theme}</p>

      <ThemeButton />
    </ThemeContext.Provider>
  );
}

export default App;
