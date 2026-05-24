# React Custom Hooks

## What is a Custom Hook?

A custom hook is a reusable function that contains React Hook logic.

Simple meaning:

```txt
Custom hook = reusable React logic
```

A custom hook starts with `use`.

Example:

```tsx
function useCounter() {
  // hook logic
}
```

---

## Why do we use Custom Hooks?

Custom hooks help us reuse logic between components.

Without custom hooks, we may repeat the same logic in many components.

With custom hooks, we write logic once and reuse it.

---

## Naming Rule

A custom hook name must start with `use`.

Correct:

```tsx
function useCounter() {}
function useUser() {}
function useToggle() {}
```

Wrong:

```tsx
function counter() {}
function userData() {}
```

React needs the `use` prefix to understand hook rules.

---

## Basic Custom Hook Example

```tsx
import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increase = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrease = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return {
    count,
    increase,
    decrease,
    reset,
  };
}
```

---

## Using the Custom Hook

```tsx
export default function Counter() {
  const { count, increase, decrease, reset } = useCounter(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

---

## Full Example

```tsx
"use client";

import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increase = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrease = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return {
    count,
    increase,
    decrease,
    reset,
  };
}

export default function CounterExample() {
  const counter = useCounter(0);

  return (
    <div>
      <h2>Count: {counter.count}</h2>

      <button onClick={counter.increase}>Increase</button>
      <button onClick={counter.decrease}>Decrease</button>
      <button onClick={counter.reset}>Reset</button>
    </div>
  );
}
```

---

## Flow

```txt
Component calls custom hook
        ↓
Custom hook manages logic
        ↓
Custom hook returns values and functions
        ↓
Component uses returned data
```

---

## When to Create a Custom Hook?

Create a custom hook when:

- Same logic is repeated in multiple components
- Component is getting too large
- Logic can be separated from UI
- You want clean and reusable code

Good examples:

- `useCounter`
- `useToggle`
- `useLocalStorage`
- `useDebounce`
- `useFetch`
- `useAuth`
- `useTheme`

---

## Important Rules

1. Custom hook name must start with `use`.
2. Custom hook can use built-in hooks like `useState`, `useEffect`, and `useContext`.
3. Custom hook should return useful values and functions.
4. Custom hook should contain logic, not UI.
5. Components should use custom hooks to keep code clean.

---

## Custom Hook vs Component

| Custom Hook            | Component                  |
| ---------------------- | -------------------------- |
| Reuses logic           | Reuses UI                  |
| Returns data/functions | Returns JSX                |
| Starts with `use`      | Starts with capital letter |
| Example: `useCounter`  | Example: `CounterCard`     |

---

## One-Line Definition

A custom hook is a reusable function that contains React Hook logic and helps keep components clean.
