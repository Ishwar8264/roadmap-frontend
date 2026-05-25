# React Performance Optimization Demo

This project explains important React performance optimization techniques with simple examples.

Covered topics:

- `React.memo`
- `useCallback`
- `useMemo`
- Virtualization

These concepts help reduce unnecessary re-renders, avoid expensive recalculations, and improve performance for large lists.

---

## Table of Contents

1. What is React Performance Optimization?
2. Why Performance Optimization is Needed?
3. React Re-render Problem
4. React.memo
5. useCallback
6. useMemo
7. Virtualization
8. Project Demo Structure
9. How This Demo Works
10. When to Use Each Technique
11. Common Mistakes
12. Summary

---

# 1. What is React Performance Optimization?

React performance optimization means improving how efficiently a React app renders and updates the UI.

A React app can become slow when:

- Components re-render unnecessarily
- Expensive calculations run again and again
- Large lists render thousands of DOM nodes
- Function and object references change on every render
- Parent state updates cause child components to re-render

React gives us tools to reduce these problems.

---

# 2. Why Performance Optimization is Needed?

Small React apps usually work fine without optimization.

But in real-world apps, performance issues can appear when we have:

- Large product lists
- Search and filter functionality
- Dashboard tables
- Chat messages
- Infinite scroll feeds
- Complex forms
- Heavy child components
- Reusable components with many props

Example:

```txt
User clicks one button
        |
        v
Parent component re-renders
        |
        v
All child components re-render
        |
        v
App feels slow
```

Optimization helps avoid unnecessary work.

---

# 3. React Re-render Problem

In React, when state changes, the component re-renders.

Example:

```tsx
const [count, setCount] = useState(0);
```

When `setCount` runs, the component re-renders.

This is normal.

But sometimes child components also re-render even when their props did not actually change.

Example:

```tsx
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>

      <Child />
    </>
  );
}
```

Here, when parent re-renders, `Child` also re-renders.

If `Child` is heavy, this can reduce performance.

---

# 4. React.memo

`React.memo` is used to memoize a component.

It prevents a component from re-rendering if its props are the same.

---

## Without React.memo

```tsx
function Child({ title }: { title: string }) {
  console.log("Child rendered");

  return <h2>{title}</h2>;
}
```

This child component may re-render whenever the parent re-renders.

---

## With React.memo

```tsx
import { memo } from "react";

const Child = memo(function Child({ title }: { title: string }) {
  console.log("Child rendered");

  return <h2>{title}</h2>;
});
```

Now `Child` will only re-render when `title` changes.

---

## React.memo Mental Model

```txt
Parent re-renders
        |
        v
React checks Child props
        |
        v
Props same? Skip child render
Props changed? Re-render child
```

---

## When to Use React.memo

Use `React.memo` when:

- Child component is heavy
- Child receives props
- Parent re-renders often
- Child props usually stay same

Good examples:

- Product card
- User card
- Table row
- Comment item
- Chat message
- Sidebar item

---

## When Not to Use React.memo

Do not use `React.memo` everywhere.

Avoid it when:

- Component is very small
- Props change every time
- Component render is cheap
- Optimization adds unnecessary complexity

---

# 5. useCallback

`useCallback` is used to memoize a function.

It keeps the same function reference between renders.

This is useful when passing functions as props to memoized child components.

---

## Problem Without useCallback

```tsx
function Parent() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return <Child onClick={handleClick} />;
}
```

Every time `Parent` re-renders, a new `handleClick` function is created.

So even if `Child` is wrapped with `React.memo`, it may still re-render because function reference changed.

---

## Solution With useCallback

```tsx
import { useCallback } from "react";

function Parent() {
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return <Child onClick={handleClick} />;
}
```

Now `handleClick` keeps the same reference.

---

## useCallback Mental Model

```txt
Parent re-renders
        |
        v
Without useCallback: new function created
With useCallback: old function reused
```

---

## useCallback Syntax

```tsx
const memoizedFunction = useCallback(() => {
  // function logic
}, [dependencies]);
```

Dependency array controls when function should be recreated.

---

## Example

```tsx
const handleAddToCart = useCallback((productId: number) => {
  console.log("Add product:", productId);
}, []);
```

This function will not be recreated on every render.

---

## When to Use useCallback

Use `useCallback` when:

- You pass function to `React.memo` child
- Function is used in dependency array
- Function reference stability is important
- Component re-renders often

Good examples:

- `onClick` passed to memoized child
- `onChange` passed to heavy input component
- Callback used inside `useEffect`
- Callback used inside custom hooks

---

## When Not to Use useCallback

Do not use `useCallback` for every function.

Avoid it when:

- Function is not passed as prop
- Component is simple
- There is no performance issue
- It makes code harder to read

---

# 6. useMemo

`useMemo` is used to memoize calculated values.

It prevents expensive calculations from running on every render.

---

## Problem Without useMemo

```tsx
const filteredProducts = products.filter((product) =>
  product.name.includes(searchText),
);
```

This filtering runs every time the component re-renders.

Even if only unrelated state changes, filtering runs again.

---

## Solution With useMemo

```tsx
import { useMemo } from "react";

const filteredProducts = useMemo(() => {
  return products.filter((product) => product.name.includes(searchText));
}, [products, searchText]);
```

Now filtering runs only when `products` or `searchText` changes.

---

## useMemo Mental Model

```txt
Component re-renders
        |
        v
Dependencies changed?
        |
        ├── Yes: run calculation again
        |
        └── No: reuse previous result
```

---

## useMemo Syntax

```tsx
const memoizedValue = useMemo(() => {
  return expensiveCalculation();
}, [dependencies]);
```

---

## Example

```tsx
const totalAmount = useMemo(() => {
  return cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}, [cartItems]);
```

Here, total amount will only recalculate when `cartItems` changes.

---

## When to Use useMemo

Use `useMemo` when:

- Calculation is expensive
- Filtering large data
- Sorting large data
- Mapping large data
- Derived value is used in render
- You want stable object or array reference

Good examples:

- Product filtering
- Search results
- Cart total
- Dashboard stats
- Table sorting
- Chart data formatting

---

## When Not to Use useMemo

Do not use `useMemo` for very small calculations.

Avoid this:

```tsx
const fullName = useMemo(() => {
  return firstName + " " + lastName;
}, [firstName, lastName]);
```

This is too simple.

Better:

```tsx
const fullName = firstName + " " + lastName;
```

---

# 7. Virtualization

Virtualization is used to render only visible list items.

It is useful when we have a very large list.

Example:

```txt
Total items: 10,000
Visible items: 20
Rendered items: only 20-30
```

Without virtualization, React may render all 10,000 items in the DOM.

That can make the page slow.

---

## Problem Without Virtualization

```tsx
{
  users.map((user) => <UserCard key={user.id} user={user} />);
}
```

If `users` has 10,000 items, React creates 10,000 DOM nodes.

This can cause:

- Slow initial render
- Slow scrolling
- High memory usage
- Browser lag

---

## Solution With Virtualization

Virtualization renders only visible rows.

Example libraries:

- `@tanstack/react-virtual`
- `react-window`
- `react-virtualized`

---

## Virtualization Mental Model

```txt
Large list: 10,000 items
        |
        v
Scroll container shows 20 items
        |
        v
Only visible items are rendered
        |
        v
As user scrolls, visible items change
```

---

## When to Use Virtualization

Use virtualization when:

- List has hundreds or thousands of rows
- Table has many records
- Chat has many messages
- Feed has many posts
- Dashboard has large data
- Browser scrolling becomes slow

Good examples:

- User list
- Product list
- Chat messages
- Notification list
- Admin table
- Search results
- Logs viewer

---

## When Not to Use Virtualization

Do not use virtualization when:

- List is small
- SEO needs all content rendered
- Layout height is dynamic and complex
- It adds unnecessary complexity

For small lists, normal `.map()` is better.

---

# 8. Project Demo Structure

```txt
src/
├── App.tsx
└── components/
    ├── MemoCallbackDemo.tsx
    ├── UseMemoDemo.tsx
    └── VirtualizedListDemo.tsx
```

---

# 9. How This Demo Works

This demo has three main sections.

---

## 9.1 React.memo + useCallback Demo

File:

```txt
MemoCallbackDemo.tsx
```

This demo shows:

- Parent component re-render
- Normal child render count
- Memo child render count
- Function prop optimization using `useCallback`

Flow:

```txt
Click parent button
        |
        v
Parent state updates
        |
        v
Normal child re-renders
        |
        v
Memo child skips re-render
```

Important idea:

```txt
React.memo avoids unnecessary child render.
useCallback keeps function prop stable.
```

---

## 9.2 useMemo Demo

File:

```txt
UseMemoDemo.tsx
```

This demo shows:

- Large product list
- Search filter
- Expensive calculation
- Counter update

Flow:

```txt
Search text changes
        |
        v
Expensive filter runs

Counter changes
        |
        v
Expensive filter does not run again
```

Important idea:

```txt
useMemo caches expensive calculation result.
```

---

## 9.3 Virtualized List Demo

File:

```txt
VirtualizedListDemo.tsx
```

This demo shows:

- 10,000 users
- Scrollable container
- Only visible rows rendered

Flow:

```txt
Large data array
        |
        v
Virtualizer calculates visible rows
        |
        v
Only visible rows render in DOM
```

Important idea:

```txt
Virtualization improves large list performance.
```

---

# 10. When to Use Each Technique

| Technique      | Use Case                                    |
| -------------- | ------------------------------------------- |
| `React.memo`   | Prevent child re-render when props are same |
| `useCallback`  | Keep function reference stable              |
| `useMemo`      | Cache expensive calculation result          |
| Virtualization | Render huge lists efficiently               |

---

# 11. Real-World Examples

## React.memo Example

Use for product cards:

```tsx
const ProductCard = memo(function ProductCard({ product }) {
  return <div>{product.name}</div>;
});
```

Good when parent updates often but product card props stay same.

---

## useCallback Example

Use for stable event handlers:

```tsx
const handleAddToCart = useCallback(
  (productId: number) => {
    addToCart(productId);
  },
  [addToCart],
);
```

Good when passing handler to memoized child.

---

## useMemo Example

Use for cart total:

```tsx
const totalAmount = useMemo(() => {
  return cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}, [cartItems]);
```

Good when derived value is expensive.

---

## Virtualization Example

Use for large user lists:

```tsx
const users = Array.from({ length: 10000 });
```

Instead of rendering all users, render only visible users.

---

# 12. Common Mistakes

---

## Mistake 1: Using React.memo everywhere

Wrong idea:

```txt
Every component should use React.memo.
```

Correct idea:

```txt
Use React.memo only when component re-renders unnecessarily and render cost matters.
```

---

## Mistake 2: Using useCallback for every function

Wrong:

```tsx
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
```

If this function is not passed to child or dependency array, it may not be needed.

---

## Mistake 3: Using useMemo for simple values

Wrong:

```tsx
const ageText = useMemo(() => {
  return age + " years old";
}, [age]);
```

Better:

```tsx
const ageText = age + " years old";
```

---

## Mistake 4: Forgetting dependencies

Wrong:

```tsx
const filteredProducts = useMemo(() => {
  return products.filter((product) => product.name.includes(searchText));
}, []);
```

Correct:

```tsx
const filteredProducts = useMemo(() => {
  return products.filter((product) => product.name.includes(searchText));
}, [products, searchText]);
```

---

## Mistake 5: Rendering huge lists with normal map

Wrong:

```tsx
{
  users.map((user) => <UserCard key={user.id} user={user} />);
}
```

If users list is very large, use virtualization.

---

# 13. Simple Comparison

| Problem                                 | Solution       |
| --------------------------------------- | -------------- |
| Child re-renders unnecessarily          | `React.memo`   |
| Function prop changes every render      | `useCallback`  |
| Expensive calculation runs every render | `useMemo`      |
| Large list slows browser                | Virtualization |

---

# 14. Learning Order

Best learning order:

```txt
1. Understand re-rendering
2. Learn React.memo
3. Learn useCallback
4. Learn useMemo
5. Learn virtualization
```

Reason:

```txt
React.memo and useCallback are connected.
useMemo is for calculation.
Virtualization is for large lists.
```

---

# 15. Final Summary

React performance optimization helps make apps faster and smoother.

In this demo:

- `React.memo` prevents unnecessary child re-renders
- `useCallback` keeps function references stable
- `useMemo` caches expensive calculation results
- Virtualization renders only visible list items

Do not use these tools blindly.

First identify the performance problem.

Then apply the correct optimization.

Simple rule:

```txt
Small local component = no optimization needed

Heavy child component = React.memo

Function passed to memo child = useCallback

Expensive calculation = useMemo

Very large list = virtualization
```
