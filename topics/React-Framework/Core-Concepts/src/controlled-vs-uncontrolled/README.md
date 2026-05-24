# Controlled vs Uncontrolled Components in React

## 1. Introduction

In React, form inputs can be handled in two main ways:

1. **Controlled Components**
2. **Uncontrolled Components**

Both are used to collect user input, but the way they manage input data is different.

---

## 2. What is a Controlled Component?

A **Controlled Component** is a component where React state controls the input value.

Simple meaning:

```txt
Input value is stored in React state.
```

Example:

```tsx
const [name, setName] = useState("");
```

The input value comes from state:

```tsx
value = { name };
```

The input value is updated using `onChange`:

```tsx
onChange={(event) => setName(event.target.value)}
```

---

## 3. Controlled Component Example

```tsx
"use client";

import { useState } from "react";

export default function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert(`Controlled Input Value: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="controlled-name">Name</label>

      <input
        id="controlled-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />

      <p>Live Value: {name}</p>

      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 4. How Controlled Component Works

Flow:

```txt
User types in input
        ↓
onChange runs
        ↓
State updates
        ↓
Component re-renders
        ↓
Input shows updated value
```

Example:

```tsx
<input value={name} onChange={(event) => setName(event.target.value)} />
```

Here, React fully controls the input value.

---

## 5. Benefits of Controlled Components

Controlled components are useful when you need:

- Live validation
- Instant UI update
- Form value tracking
- Conditional button disable
- Dynamic error messages
- Controlled form submission
- Input formatting

Example:

```tsx
<button disabled={!name}>Submit</button>
```

This is easy because the input value is already available in state.

---

## 6. What is an Uncontrolled Component?

An **Uncontrolled Component** is a component where the input value is handled by the DOM, not React state.

Simple meaning:

```txt
Input value is stored inside the DOM.
```

React does not update state on every keystroke.

Instead, we use `ref` to read the input value when needed.

Example:

```tsx
const nameInputRef = useRef<HTMLInputElement>(null);
```

Read value:

```tsx
const name = nameInputRef.current?.value;
```

---

## 7. Uncontrolled Component Example

```tsx
"use client";

import { useRef } from "react";

export default function UncontrolledForm() {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = nameInputRef.current?.value || "";

    alert(`Uncontrolled Input Value: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="uncontrolled-name">Name</label>

      <input
        id="uncontrolled-name"
        ref={nameInputRef}
        type="text"
        defaultValue=""
        placeholder="Enter your name"
      />

      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 8. How Uncontrolled Component Works

Flow:

```txt
User types in input
        ↓
DOM stores the input value
        ↓
React does not track every change
        ↓
On submit, value is read using ref
```

Example:

```tsx
<input ref={nameInputRef} />
```

Read value:

```tsx
const name = nameInputRef.current?.value;
```

---

## 9. Controlled vs Uncontrolled Difference

| Topic                | Controlled Component       | Uncontrolled Component           |
| -------------------- | -------------------------- | -------------------------------- |
| Data stored in       | React state                | DOM                              |
| Value read from      | State variable             | Ref                              |
| Uses `value`         | Yes                        | No                               |
| Uses `defaultValue`  | Usually no                 | Yes                              |
| Uses `onChange`      | Yes                        | Not always                       |
| React controls input | Yes                        | No                               |
| Live validation      | Easy                       | Hard                             |
| Performance          | Re-renders on every change | Less re-rendering                |
| Best for             | Most React forms           | Simple forms or quick DOM access |

---

## 10. Controlled Input Key Points

Controlled input uses:

```tsx
value = { state };
onChange = { updateState };
```

Example:

```tsx
<input value={name} onChange={(event) => setName(event.target.value)} />
```

React state is the single source of truth.

---

## 11. Uncontrolled Input Key Points

Uncontrolled input uses:

```tsx
ref = { inputRef };
defaultValue = "initial value";
```

Example:

```tsx
<input ref={nameInputRef} defaultValue="" />
```

The DOM is the source of truth.

---

## 12. `value` vs `defaultValue`

### `value`

`value` is used in controlled components.

```tsx
<input value={name} onChange={(event) => setName(event.target.value)} />
```

React controls the input.

---

### `defaultValue`

`defaultValue` is used in uncontrolled components.

```tsx
<input defaultValue="Ishwar" />
```

React only sets the initial value. After that, the DOM controls the input.

---

## 13. When to Use Controlled Components

Use controlled components when you need:

- Live validation
- Error messages
- Disable submit button based on input
- Input formatting
- Conditional UI
- Multi-step forms
- Search input
- Login/register forms
- Complex forms

Example:

```tsx
const isDisabled = name.length === 0;

<button disabled={isDisabled}>Submit</button>;
```

---

## 14. When to Use Uncontrolled Components

Use uncontrolled components when:

- The form is very simple
- You only need the value on submit
- You do not need live validation
- You want fewer re-renders
- You are working with third-party DOM libraries
- You are handling file inputs

Example:

```tsx
<input type="file" ref={fileInputRef} />
```

File inputs are usually handled as uncontrolled components.

---

## 15. Common Mistake

Do not mix `value` and `defaultValue` together.

Wrong:

```tsx
<input value={name} defaultValue="Ishwar" />
```

Correct controlled input:

```tsx
<input value={name} onChange={(event) => setName(event.target.value)} />
```

Correct uncontrolled input:

```tsx
<input defaultValue="Ishwar" />
```

---

## 16. Common Controlled Component Error

### Error

```txt
You provided a value prop to a form field without an onChange handler.
```

### Reason

You used `value`, but forgot `onChange`.

Wrong:

```tsx
<input value={name} />
```

Correct:

```tsx
<input value={name} onChange={(event) => setName(event.target.value)} />
```

---

## 17. Real-Life Example

Think of a notebook.

### Controlled Component

React is writing every letter in the notebook.

```txt
User types
React saves every change in state
React updates the input
```

### Uncontrolled Component

The notebook keeps its own writing.

```txt
User types
DOM stores the value
React reads the value only when needed
```

---

## 18. Best Practice

In most React applications, prefer **controlled components** because they are easier to validate, debug, and manage.

Use **uncontrolled components** only when the form is simple or when direct DOM access is needed.

---

## 19. Quick Revision

Controlled component:

```tsx
const [name, setName] = useState("");

<input value={name} onChange={(event) => setName(event.target.value)} />;
```

Uncontrolled component:

```tsx
const nameInputRef = useRef<HTMLInputElement>(null);

<input ref={nameInputRef} defaultValue="" />;
```

---

## 20. One-Line Definition

**Controlled components store input value in React state, while uncontrolled components store input value in the DOM and read it using refs.**
