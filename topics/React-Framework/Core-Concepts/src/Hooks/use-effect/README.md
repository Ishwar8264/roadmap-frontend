# React useEffect Hook

## What is useEffect?

`useEffect` is a React Hook used to run side effects in a component.

Simple meaning:

```txt
useEffect = run code after render
```

A side effect means work that happens outside normal UI rendering.

Examples:

- Fetch API data
- Update document title
- Set timer
- Add event listener
- Subscribe to data
- Clean up timer or listener

---

## Basic Syntax

```tsx
useEffect(() => {
  // effect code
}, [dependency]);
```

Example:

```tsx
useEffect(() => {
  document.title = "Hello React";
}, []);
```

---

## useEffect with No Dependency Array

```tsx
useEffect(() => {
  console.log("Runs after every render");
});
```

This runs after every render.

Use carefully.

---

## useEffect with Empty Dependency Array

```tsx
useEffect(() => {
  console.log("Runs only once");
}, []);
```

This runs only once when the component mounts.

Useful for:

- Initial API call
- Start timer
- Add event listener

---

## useEffect with Dependency

```tsx
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

This runs whenever `count` changes.

---

## Cleanup Function

Cleanup is used to stop or remove side effects.

Example:

```tsx
useEffect(() => {
  const intervalId = setInterval(() => {
    console.log("Timer running");
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
}, []);
```

Cleanup is useful for:

- Clearing timers
- Removing event listeners
- Canceling subscriptions

---

## Example

```tsx
"use client";

import { useEffect, useState } from "react";

export default function CounterTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  );
}
```

---

## Flow

```txt
Component renders
       ↓
useEffect runs
       ↓
Side effect happens
       ↓
Dependency changes
       ↓
useEffect runs again
```

---

## Important Rules

1. `useEffect` runs after render.
2. Use dependency array carefully.
3. Empty array means run only once.
4. Dependency array means run when dependency changes.
5. Cleanup function prevents memory leaks.
6. Do not put unnecessary logic inside `useEffect`.

---

## Common Mistake

Wrong:

```tsx
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

This can create an infinite loop because:

```txt
count changes
useEffect runs
setCount updates count
count changes again
useEffect runs again
```

---

## One-Line Definition

`useEffect` is used to run side effects after a component renders.
