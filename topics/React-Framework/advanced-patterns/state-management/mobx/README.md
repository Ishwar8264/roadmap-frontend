# MobX State Management Example

This project explains MobX state management with a real-world cart example.

MobX is a state management library for JavaScript and React apps.

It helps us create reactive state. When state changes, UI updates automatically.

In this example, we are building a simple shopping cart system.

---

## Table of Contents

1. What is MobX?
2. Why do we need MobX?
3. MobX Core Concepts
4. Project Setup
5. Folder Structure
6. How MobX Works in This Project
7. Important Files Explanation
8. Full MobX Flow
9. MobX vs Redux
10. MobX vs useState
11. MobX vs Context API
12. When to Use MobX
13. When Not to Use MobX
14. Common Mistakes
15. Summary

---

# 1. What is MobX?

MobX is a state management library.

It helps manage application state in a simple and reactive way.

In MobX, we create a store.

The store contains:

- State
- Actions
- Computed values

When state changes, components using that state update automatically.

---

# 2. Why do we need MobX?

In React, we normally manage state using `useState`.

Example:

```tsx
const [count, setCount] = useState(0);
```

This is good for small local state.

But when many components need the same state, passing data using props becomes difficult.

This problem is called prop drilling.

---

## Prop Drilling Example

```tsx
<App cart={cart}>
  <Layout cart={cart}>
    <Navbar cart={cart}>
      <CartIcon cart={cart} />
    </Navbar>
  </Layout>
</App>
```

Here, `cart` is passed again and again.

MobX solves this by keeping shared state in a store.

Any component can use the store directly.

---

# 3. MobX Core Concepts

MobX has these main concepts:

1. Store
2. Observable State
3. Action
4. Computed Value
5. Observer

---

# 3.1 Store

Store is a class or object where we keep application state and logic.

Example:

```tsx
class CartStore {
  items = [];
}
```

In this project, `CartStore` stores all cart data.

---

# 3.2 Observable State

Observable state means MobX can track this state.

When observable state changes, MobX knows that UI should update.

Example:

```tsx
items = [];
```

When we use `makeAutoObservable(this)`, MobX makes `items` observable.

---

# 3.3 Action

Action is a method that changes state.

Example:

```tsx
addToCart(product) {
  this.items.push(product);
}
```

Actions are used to update the store.

Examples:

- addToCart
- increaseQuantity
- decreaseQuantity
- removeFromCart
- clearCart

---

# 3.4 Computed Value

Computed value is derived from existing state.

Example:

```tsx
get totalAmount() {
  return this.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}
```

Here, `totalAmount` depends on `items`.

When `items` changes, `totalAmount` updates automatically.

---

# 3.5 Observer

`observer` connects React component with MobX state.

Example:

```tsx
export const Cart = observer(function Cart() {
  return <p>{cartStore.items.length}</p>;
});
```

When `cartStore.items` changes, this component re-renders automatically.

---

# 4. Project Setup

Install MobX and MobX React integration:

```bash
pnpm add mobx mobx-react-lite
```

Or using npm:

```bash
npm install mobx mobx-react-lite
```

Or using yarn:

```bash
yarn add mobx mobx-react-lite
```

---

# 5. Folder Structure

```txt
src/
├── App.tsx
├── store/
│   └── cartStore.ts
└── components/
    ├── ProductList.tsx
    └── Cart.tsx
```

---

# 6. How MobX Works in This Project

This project has two main UI parts:

1. Product List
2. Cart

Product List shows products.

Cart shows selected products.

When user clicks Add to Cart, MobX updates the cart store.

Because Cart component is wrapped with `observer`, it updates automatically.

---

# 7. Important Files Explanation

---

## 7.1 `cartStore.ts`

This file contains the main MobX store.

```tsx
class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }
}
```

`makeAutoObservable(this)` tells MobX to automatically track state, actions, and computed values.

---

## 7.2 `items`

```tsx
items: CartItem[] = [];
```

This is the cart state.

It stores all selected products.

Example state:

```tsx
[
  {
    id: 1,
    name: "Wireless Mouse",
    price: 799,
    quantity: 1,
  },
];
```

---

## 7.3 `addToCart`

```tsx
addToCart(product: Product) {
  const existingItem = this.items.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
    return;
  }

  this.items.push({
    ...product,
    quantity: 1,
  });
}
```

This method adds product to cart.

If the product already exists, it increases quantity.

---

## 7.4 `increaseQuantity`

```tsx
increaseQuantity(productId: number) {
  const item = this.items.find((item) => item.id === productId);

  if (item) {
    item.quantity += 1;
  }
}
```

This method increases item quantity.

---

## 7.5 `decreaseQuantity`

```tsx
decreaseQuantity(productId: number) {
  const item = this.items.find((item) => item.id === productId);

  if (!item) return;

  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    this.removeFromCart(productId);
  }
}
```

This method decreases item quantity.

If quantity becomes 0, it removes the item from cart.

---

## 7.6 `removeFromCart`

```tsx
removeFromCart(productId: number) {
  this.items = this.items.filter((item) => item.id !== productId);
}
```

This method removes one item from cart.

---

## 7.7 `clearCart`

```tsx
clearCart() {
  this.items = [];
}
```

This method clears the full cart.

---

## 7.8 `totalQuantity`

```tsx
get totalQuantity() {
  return this.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
}
```

This computed value returns total cart quantity.

Example:

```txt
Mouse quantity: 2
Cable quantity: 1

Total quantity = 3
```

---

## 7.9 `totalAmount`

```tsx
get totalAmount() {
  return this.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}
```

This computed value returns total cart price.

Example:

```txt
Wireless Mouse: ₹799 × 2 = ₹1598
USB-C Cable: ₹399 × 1 = ₹399

Total Amount = ₹1997
```

---

# 8. `ProductList.tsx`

This component shows products.

```tsx
cartStore.addToCart(product);
```

When user clicks Add to Cart, this method updates MobX store.

---

# 9. `Cart.tsx`

This component reads cart data from MobX store.

```tsx
cartStore.items;
```

Because this component is wrapped with `observer`, it updates automatically when cart data changes.

```tsx
export const Cart = observer(function Cart() {
  return <div>{cartStore.items.length}</div>;
});
```

---

# 10. Full MobX Flow

```txt
User clicks Add to Cart
        |
        v
cartStore.addToCart(product)
        |
        v
MobX store updates items
        |
        v
observer detects used observable changed
        |
        v
Cart component re-renders
        |
        v
Updated cart appears on screen
```

---

# 11. Real Example Flow

Suppose user clicks:

```txt
Add to Cart: Wireless Mouse
```

Product data:

```tsx
{
  id: 1,
  name: "Wireless Mouse",
  price: 799
}
```

MobX method call:

```tsx
cartStore.addToCart(product);
```

MobX store becomes:

```tsx
items = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 799,
    quantity: 1,
  },
];
```

If user clicks again, quantity becomes 2:

```tsx
items = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 799,
    quantity: 2,
  },
];
```

---

# 12. MobX vs Redux

| MobX                      | Redux                                   |
| ------------------------- | --------------------------------------- |
| Less boilerplate          | More structured                         |
| Uses observable state     | Uses immutable state updates            |
| State updates feel direct | State updates happen through dispatch   |
| Components use `observer` | Components use `useSelector`            |
| Good for reactive state   | Good for predictable large architecture |
| Easier to start           | More strict flow                        |

---

# 13. MobX vs useState

| useState                  | MobX                               |
| ------------------------- | ---------------------------------- |
| Local component state     | Global/shared state                |
| Used inside one component | Used across many components        |
| Simple state only         | Better for shared app state        |
| No setup needed           | Store setup needed                 |
| Good for modals/forms     | Good for cart/auth/dashboard state |

---

# 14. MobX vs Context API

| Context API                        | MobX                               |
| ---------------------------------- | ---------------------------------- |
| Built into React                   | External state library             |
| Good for simple shared values      | Good for reactive global state     |
| Manual updates with state          | Auto reactive updates              |
| Can become messy for complex state | Store keeps logic organized        |
| Good for theme/auth basics         | Good for cart, filters, dashboards |

---

# 15. When Should We Use MobX?

Use MobX when:

- Many components need same state
- State changes frequently
- You want less boilerplate than Redux
- You want class-based stores
- You want computed values
- You want automatic UI updates

Good examples:

- Cart system
- Auth user
- Dashboard filters
- Form builder state
- Notification system
- Theme settings
- Admin panel state
- Real-time UI state

---

# 16. When Should We Not Use MobX?

Do not use MobX for every small state.

For simple local state, use `useState`.

Example:

```tsx
const [isOpen, setIsOpen] = useState(false);
```

If only one component needs this state, MobX is not needed.

---

# 17. Common Mistakes

---

## Mistake 1: Forgetting observer

Wrong:

```tsx
function Cart() {
  return <p>{cartStore.items.length}</p>;
}
```

Correct:

```tsx
export const Cart = observer(function Cart() {
  return <p>{cartStore.items.length}</p>;
});
```

Without `observer`, component may not re-render when MobX state changes.

---

## Mistake 2: Using MobX for very small local state

Wrong:

```tsx
// Creating MobX store only for one button toggle
```

Better:

```tsx
const [isOpen, setIsOpen] = useState(false);
```

---

## Mistake 3: Not using computed values

Wrong:

```tsx
const total = cartStore.items.reduce(...);
```

Better:

```tsx
get totalAmount() {
  return this.items.reduce(...);
}
```

Computed values keep derived logic inside the store.

---

## Mistake 4: Putting too much UI logic inside store

Store should contain business state and business logic.

UI styling should stay inside components.

Good store logic:

- addToCart
- removeFromCart
- totalAmount
- totalQuantity

Bad store logic:

- button color
- card margin
- CSS class name decisions

---

# 18. Important MobX Terms

| Term               | Meaning                                 |
| ------------------ | --------------------------------------- |
| Store              | Place where state and actions are kept  |
| Observable         | State that MobX tracks                  |
| Action             | Method that updates state               |
| Computed           | Derived value from state                |
| Observer           | React wrapper that re-renders component |
| makeAutoObservable | Automatically makes state reactive      |

---

# 19. Simple Mental Model

Think of MobX like this:

```txt
Store = Data box
Observable = Trackable data
Action = Function that changes data
Computed = Auto calculated value
Observer = Component watching data
```

When observable data changes, observer components update automatically.

---

# 20. Final Summary

MobX is a simple and reactive state management library.

In this cart example:

- `cartStore.ts` contains cart state and actions
- `ProductList.tsx` adds products to cart
- `Cart.tsx` reads and updates cart items
- `observer` makes components reactive
- `makeAutoObservable` makes store state observable
- `totalAmount` and `totalQuantity` are computed values

Use MobX when you want simple reactive state management with less boilerplate than Redux.

Use `useState` for local state.

Use Redux Toolkit when your app needs strict and predictable architecture.
