# React useContext Hook

## What is useContext?

`useContext` is a React Hook used to read data from React Context.

Simple meaning:

```txt
useContext = access shared data without passing props manually
```

---

## Problem Without Context

Without context, we pass props from parent to child again and again.

This is called prop drilling.

```txt
App
 ↓ props
Layout
 ↓ props
Navbar
 ↓ props
ProfileMenu
```

If many components need the same data, prop drilling becomes messy.

---

## Solution with Context

Context allows us to share data globally inside a part of the component tree.

Example shared data:

- Theme
- Logged-in user
- Language
- Auth state
- App settings

---

## Basic Steps

### Step 1: Create Context

```tsx
const ThemeContext = createContext(null);
```

### Step 2: Provide Context

```tsx
<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
```

### Step 3: Read Context

```tsx
const context = useContext(ThemeContext);
```

---

## Example

```tsx
"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

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

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeButton must be used inside ThemeProvider");
  }

  return (
    <button onClick={context.toggleTheme}>
      Current Theme: {context.theme}
    </button>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
}
```

---

## Why use Custom Hook with Context?

Instead of writing this everywhere:

```tsx
const context = useContext(ThemeContext);

if (!context) {
  throw new Error("Component must be used inside Provider");
}
```

We can create a custom hook:

```tsx
function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
```

Then use it easily:

```tsx
const { theme, toggleTheme } = useTheme();
```

---

## Flow

```txt
ThemeProvider stores theme state
        ↓
Provider shares theme value
        ↓
Child component calls useContext
        ↓
Child gets theme data directly
```

---

## When to Use useContext?

Use `useContext` when multiple components need the same shared data.

Good use cases:

- Theme
- Auth user
- Language
- Sidebar state
- App settings

Avoid context for very frequently changing data in large apps because it can cause unnecessary re-renders.

---

## Important Rules

1. Create context using `createContext`.
2. Wrap components with Provider.
3. Read context using `useContext`.
4. Keep context value simple.
5. Use a custom hook for safer access.
6. Do not use context for every small state.

---

## One-Line Definition

`useContext` is used to access shared data from React Context without passing props manually through every component.
