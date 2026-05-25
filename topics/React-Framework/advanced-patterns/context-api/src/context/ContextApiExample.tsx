import { createContext, useContext, useState } from "react";

/**
 * Theme type defines allowed theme values.
 */
type Theme = "light" | "dark";

/**
 * Context value type.
 * It contains current theme and function to change theme.
 */
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

/**
 * Create Context.
 * Initial value is undefined because Provider will give real value.
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Custom hook to safely use ThemeContext.
 * This avoids repeating useContext logic everywhere.
 */
function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}

/**
 * Provider component.
 * This component shares theme state with all child components.
 */
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  /**
   * Toggle theme between light and dark.
   */
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Child component.
 * This component directly gets theme data from Context.
 */
function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 16px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        cursor: "pointer",
      }}
    >
      Current Theme: {theme}
    </button>
  );
}

/**
 * Another child component.
 * This also reads the same shared theme value.
 */
function ThemeStatus() {
  const { theme } = useTheme();

  return <p>App is currently using {theme} mode.</p>;
}

/**
 * Main example component.
 * ThemeProvider wraps all components that need shared theme data.
 */
export default function ContextApiExample() {
  return (
    <ThemeProvider>
      <div
        style={{
          minHeight: "100vh",
          padding: "40px",
          backgroundColor: "#f5f5f5",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1>React Context API Example</h1>

        <ThemeStatus />

        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}
