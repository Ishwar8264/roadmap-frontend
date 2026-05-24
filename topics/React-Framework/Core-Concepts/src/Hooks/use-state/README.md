# React useState Hook

## What is useState?

`useState` is a React Hook used to store and update data inside a component.

Simple meaning:

```txt
useState = component's own changeable data
```

Example:

```tsx
const [count, setCount] = useState(0);
```

Here:

- `count` is the current state value
- `setCount` is the function used to update the state
- `0` is the initial value

---

## Basic Syntax

```tsx
const [stateValue, setStateValue] = useState(initialValue);
```

Example:

```tsx
const [name, setName] = useState("");
```

---

## Why do we use useState?

We use `useState` when UI needs to change based on user action or data change.

Common examples:

- Counter
- Form input
- Modal open or close
- Toggle button
- Loading state
- Show or hide content
- Selected tab
- Like button

---

## Example

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

---

## Better State Update

When the new value depends on the previous value, use callback style.

```tsx
setCount((previousCount) => previousCount + 1);
```

This is better than:

```tsx
setCount(count + 1);
```

because React can batch state updates.

---

## Important Rules

1. `useState` must be called inside a React component.
2. Do not update state directly.
3. Always use the setter function.
4. State update causes component re-render.
5. Use callback update when new state depends on previous state.

---

## Wrong vs Correct

Wrong:

```tsx
count = count + 1;
```

Correct:

```tsx
setCount(count + 1);
```

Best:

```tsx
setCount((previousCount) => previousCount + 1);
```

---

## One-Line Definition

`useState` is used to store and update changeable data inside a React component.
