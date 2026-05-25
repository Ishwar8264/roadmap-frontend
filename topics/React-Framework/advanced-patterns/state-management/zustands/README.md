# Zustand State Management Example

This project explains Zustand state management with a real-world cart example.

Zustand is a lightweight state management library for React.

It uses a simple hook-based store.

In this example, we are building a simple shopping cart system.

---

## Table of Contents

1. What is Zustand?
2. Why do we need Zustand?
3. Zustand Core Concepts
4. Project Setup
5. Folder Structure
6. How Zustand Works in This Project
7. Important Files Explanation
8. Full Zustand Flow
9. Zustand vs Redux
10. Zustand vs MobX
11. Zustand vs Context API
12. Zustand vs useState
13. When to Use Zustand
14. When Not to Use Zustand
15. Common Mistakes
16. Summary

---

# 1. What is Zustand?

Zustand is a small and simple state management library.

It helps us manage global state in React apps.

Zustand creates a store.

Components can read and update that store using a custom hook.

Example:

```tsx
const items = useCartStore((state) => state.items);
```

This reads `items` from the Zustand store.

---

# 2. Why do we need Zustand?

In React, we normally use `useState`.

Example:

```tsx
const [count, setCount] = useState(0);
```

This is good for local state.

But when many components need the same state, passing props again and again becomes difficult.

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

Here, `cart` is passed through many components.

Zustand solves this by keeping shared data in one global store.

Any component can directly use the store.

---

# 3. Zustand Core Concepts

Zustand has these main concepts:

1. Store
2. State
3. Actions
4. set
5. get
6. Selector

---

# 3.1 Store

Store is the place where global state and actions are stored.

Example:

```tsx
export const useCartStore = create<CartStore>()((set, get) => ({
  items: [],
}));
```

Here, `useCartStore` is the Zustand store hook.

---

# 3.2 State

State is the actual data.

Example:

```tsx
items: [];
```

In this project, `items` contains cart products.

Example state:

```tsx
items: [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 799,
    quantity: 1,
  },
];
```

---

# 3.3 Actions

Actions are functions that update the state.

Example:

```tsx
addToCart: (product) => {
  set((state) => ({
    items: [...state.items, product],
  }));
};
```

In this project, actions are:

- `addToCart`
- `increaseQuantity`
- `decreaseQuantity`
- `removeFromCart`
- `clearCart`

---

# 3.4 set

`set` is used to update Zustand state.

Example:

```tsx
set({
  items: [],
});
```

Or using previous state:

```tsx
set((state) => ({
  items: [...state.items, newItem],
}));
```

Use `set` whenever you want to update store data.

---

# 3.5 get

`get` is used to read current Zustand state inside the store.

Example:

```tsx
const existingItem = get().items.find((item) => item.id === product.id);
```

Use `get` when one action needs current state or another action.

---

# 3.6 Selector

Selector means selecting only required data from the store.

Example:

```tsx
const items = useCartStore((state) => state.items);
```

This component only subscribes to `items`.

Another example:

```tsx
const addToCart = useCartStore((state) => state.addToCart);
```

This reads only the `addToCart` action.

Selectors help keep components clean and efficient.

---

# 4. Project Setup

Install Zustand:

```bash
pnpm add zustand
```

Using npm:

```bash
npm install zustand
```

Using yarn:

```bash
yarn add zustand
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

# 6. How Zustand Works in This Project

This project has two main UI parts:

1. Product List
2. Cart

Product List shows products.

Cart shows selected products.

When user clicks Add to Cart:

1. `addToCart` action runs
2. Zustand updates `items`
3. Cart component receives updated items
4. UI re-renders automatically

---

# 7. Important Files Explanation

---

## 7.1 `cartStore.ts`

This file contains Zustand store.

```tsx
export const useCartStore = create<CartStore>()((set, get) => ({
  items: [],
}));
```

This creates one global cart store.

---

## 7.2 `items`

```tsx
items: [];
```

This is cart state.

It stores all cart products.

Example:

```tsx
items: [
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
addToCart: (product) => {
  const existingItem = get().items.find((item) => item.id === product.id);

  if (existingItem) {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    }));

    return;
  }

  set((state) => ({
    items: [
      ...state.items,
      {
        ...product,
        quantity: 1,
      },
    ],
  }));
};
```

This action adds product to cart.

If product already exists, it increases quantity.

---

## 7.4 `increaseQuantity`

```tsx
increaseQuantity: (productId) => {
  set((state) => ({
    items: state.items.map((item) =>
      item.id === productId
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item,
    ),
  }));
};
```

This action increases quantity.

---

## 7.5 `decreaseQuantity`

```tsx
decreaseQuantity: (productId) => {
  const item = get().items.find((item) => item.id === productId);

  if (!item) return;

  if (item.quantity === 1) {
    get().removeFromCart(productId);
    return;
  }

  set((state) => ({
    items: state.items.map((item) =>
      item.id === productId
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item,
    ),
  }));
};
```

This action decreases quantity.

If quantity is 1, it removes product from cart.

---

## 7.6 `removeFromCart`

```tsx
removeFromCart: (productId) => {
  set((state) => ({
    items: state.items.filter((item) => item.id !== productId),
  }));
};
```

This action removes one product from cart.

---

## 7.7 `clearCart`

```tsx
clearCart: () => {
  set({
    items: [],
  });
};
```

This action removes all products from cart.

---

## 7.8 `getTotalQuantity`

```tsx
getTotalQuantity: () => {
  return get().items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
};
```

This returns total cart quantity.

Example:

```txt
Mouse quantity: 2
Cable quantity: 1

Total quantity = 3
```

---

## 7.9 `getTotalAmount`

```tsx
getTotalAmount: () => {
  return get().items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};
```

This returns total cart amount.

Example:

```txt
Wireless Mouse: ₹799 × 2 = ₹1598
USB-C Cable: ₹399 × 1 = ₹399

Total Amount = ₹1997
```

---

# 8. `ProductList.tsx`

This component shows products.

It reads only the `addToCart` action from Zustand.

```tsx
const addToCart = useCartStore((state) => state.addToCart);
```

When user clicks Add to Cart:

```tsx
addToCart(product);
```

The store updates.

---

# 9. `Cart.tsx`

This component reads cart data and cart actions.

```tsx
const items = useCartStore((state) => state.items);
```

It also reads actions:

```tsx
const increaseQuantity = useCartStore((state) => state.increaseQuantity);
const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
const removeFromCart = useCartStore((state) => state.removeFromCart);
const clearCart = useCartStore((state) => state.clearCart);
```

When store state changes, this component re-renders.

---

# 10. Full Zustand Flow

```txt
User clicks Add to Cart
        |
        v
addToCart(product)
        |
        v
Zustand set() updates items
        |
        v
useCartStore selector gets new items
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

Zustand action:

```tsx
addToCart(product);
```

Zustand state becomes:

```tsx
items: [
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
items: [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 799,
    quantity: 2,
  },
];
```

---

# 12. Zustand vs Redux

| Zustand                              | Redux Toolkit                             |
| ------------------------------------ | ----------------------------------------- |
| Less boilerplate                     | More structured                           |
| No Provider required for basic store | Provider required                         |
| Direct store hook                    | Dispatch and selector pattern             |
| Simple actions                       | Reducer/action pattern                    |
| Easy for small-medium apps           | Better for very large strict architecture |
| Fast to setup                        | More setup                                |

---

# 13. Zustand vs MobX

| Zustand                  | MobX                             |
| ------------------------ | -------------------------------- |
| Hook-based store         | Observable-based store           |
| Usually functional style | Often class-based style          |
| Uses `set` and `get`     | Uses observable/actions/computed |
| No `observer` needed     | `observer` needed                |
| Simple mental model      | Reactive mental model            |
| Less magic               | More automatic reactivity        |

---

# 14. Zustand vs Context API

| Zustand                                   | Context API                             |
| ----------------------------------------- | --------------------------------------- |
| State management library                  | React built-in feature                  |
| Good for global app state                 | Good for simple shared values           |
| Cleaner updates                           | Can become messy for complex state      |
| Selectors help reduce unnecessary updates | Context updates can re-render consumers |
| Great for cart/auth/dashboard state       | Good for theme/language/basic auth      |

---

# 15. Zustand vs useState

| useState                  | Zustand                          |
| ------------------------- | -------------------------------- |
| Local state               | Global/shared state              |
| Used inside one component | Used across many components      |
| No setup                  | Small store setup                |
| Best for UI toggles       | Best for shared app data         |
| Example: modal open/close | Example: cart/auth/user/settings |

---

# 16. When Should We Use Zustand?

Use Zustand when:

- Many components need the same state
- You want simple global state
- Redux feels too heavy
- You want less boilerplate
- You want hook-based state management
- You want clean TypeScript store

Good examples:

- Cart system
- Auth user
- Theme settings
- Wishlist
- Notifications
- Dashboard filters
- Multi-step forms
- Selected sidebar/menu state
- User preferences

---

# 17. When Should We Not Use Zustand?

Do not use Zustand for every small state.

For small local UI state, use `useState`.

Example:

```tsx
const [isOpen, setIsOpen] = useState(false);
```

If only one component needs this state, Zustand is not needed.

---

# 18. Common Mistakes

---

## Mistake 1: Reading full store unnecessarily

Wrong:

```tsx
const store = useCartStore();
```

This subscribes component to the full store.

Better:

```tsx
const items = useCartStore((state) => state.items);
```

Read only what component needs.

---

## Mistake 2: Mutating array directly

Wrong:

```tsx
state.items.push(product);
```

Better:

```tsx
set((state) => ({
  items: [...state.items, product],
}));
```

Keep updates immutable unless you are using Immer middleware.

---

## Mistake 3: Using Zustand for small local state

Wrong:

```tsx
// Zustand store only for one dropdown open/close state
```

Better:

```tsx
const [isOpen, setIsOpen] = useState(false);
```

---

## Mistake 4: Putting API and UI styling together inside store

Store should manage business state.

Good store logic:

- addToCart
- removeFromCart
- clearCart
- totalAmount

Bad store logic:

- card background color
- button padding
- CSS classes
- UI layout decisions

---

# 19. Important Zustand Terms

| Term     | Meaning                               |
| -------- | ------------------------------------- |
| Store    | Global state container                |
| State    | Actual data                           |
| Action   | Function that updates state           |
| set      | Updates store state                   |
| get      | Reads current store state             |
| Selector | Reads selected data from store        |
| Hook     | Zustand store is used as a React hook |

---

# 20. Simple Mental Model

Think of Zustand like this:

```txt
Store = Global data box
State = Data inside box
Action = Function to change data
set = Save new data
get = Read current data
Selector = Pick only what component needs
```

---

# 21. Final Summary

Zustand is a simple hook-based state management library.

In this cart example:

- `cartStore.ts` contains cart state and actions
- `ProductList.tsx` adds products to cart
- `Cart.tsx` reads and updates cart items
- `set` updates state
- `get` reads current state
- selectors read only required data

Use Zustand when Redux feels too heavy and Context API becomes messy.

Use `useState` for local component state.

Use Redux Toolkit when your app needs strict architecture and predictable large-scale state flow.
