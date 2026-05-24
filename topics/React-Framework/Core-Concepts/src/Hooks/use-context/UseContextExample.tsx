"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}

function ThemePanel() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section
      className={`space-y-4 rounded-xl border p-6 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-xl font-semibold">useContext Example</h1>

      <p>Current theme: {theme}</p>

      <button
        onClick={toggleTheme}
        className={`rounded px-4 py-2 ${
          isDark ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        Toggle Theme
      </button>
    </section>
  );
}

export default function UseContextExample() {
  return (
    <main className="mx-auto max-w-md p-6">
      <ThemeProvider>
        <ThemePanel />
      </ThemeProvider>
    </main>
  );
}
