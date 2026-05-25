# Redux State Management Example

This project explains Redux state management using **Redux Toolkit** with a real-world cart example.

Redux is used when many components need to share, read, and update the same state.

In this example, we are building a simple **shopping cart system**.

---

## Table of Contents

1. What is Redux?
2. Why do we need Redux?
3. What is Redux Toolkit?
4. Redux Core Concepts
5. Project Setup
6. Folder Structure
7. How Redux Works in This Project
8. Important Files Explanation
9. Full Redux Flow
10. When to Use Redux
11. When Not to Use Redux
12. Redux vs useState
13. Redux vs Context API
14. Common Mistakes
15. Summary

---

# 1. What is Redux?

Redux is a global state management library.

It helps us keep application state in one central place called the **store**.

Instead of keeping important data inside many different components, Redux stores that data globally.

Example global states:

- Cart data
- Logged-in user
- Auth token
- Theme
- Notifications
- Wishlist
- User permissions
- Dashboard filters
- App settings

---

# 2. Why do we need Redux?

In React, we usually pass data using props.

Example:

```tsx
<App>
  <ProductList cart={cart} />
  <Cart cart={cart} />
</App>
```

This is fine for small apps.

But when the app becomes large, passing props again and again becomes difficult.

This problem is called **prop drilling**.

---

## Prop Drilling Example

```tsx
<App user={user}>
  <Layout user={user}>
    <Navbar user={user}>
      <ProfileButton user={user} />
    </Navbar>
  </Layout>
</App>
```

Here, `user` is passed through many components.

Some components may not even need `user`, but they still pass it to child components.

Redux solves this problem.

With Redux, any component can directly read the state from the Redux store.

---

# 3. What is Redux Toolkit?

Redux Toolkit is the modern recommended way to write Redux logic.

Old Redux required too much boilerplate code.

Redux Toolkit makes Redux easier, cleaner, and shorter.

Redux Toolkit gives useful APIs like:

- `configureStore`
- `createSlice`
- `createAsyncThunk`

In this project, we use:

- `configureStore` to create Redux store
- `createSlice` to create cart state and cart actions
- `Provider` to connect Redux with React
- `useSelector` to read Redux state
- `useDispatch` to update Redux state

---

# 4. Redux Core Concepts

Redux has these main concepts:

1. Store
2. State
3. Slice
4. Reducer
5. Action
6. Payload
7. Dispatch
8. Selector
9. Provider

---

# 4.1 Store

Store is the global container where Redux keeps application state.

Example:

```tsx
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
```

Here, `cart` is one part of the global Redux state.

---

# 4.2 State

State is the actual data stored inside Redux.

Example:

```tsx
const initialState = {
  items: [],
};
```

Here, `items` stores cart products.

---

# 4.3 Slice

Slice means one small section of Redux state.

Example slices:

- `cartSlice`
- `authSlice`
- `themeSlice`
- `notificationSlice`
- `wishlistSlice`

In this project, we are creating `cartSlice`.

---

# 4.4 Reducer

Reducer is a function that updates Redux state.

Example:

```tsx
addToCart: (state, action) => {
  state.items.push(action.payload);
};
```

In Redux Toolkit, we can write state update code like mutation.

Redux Toolkit internally handles immutable updates safely.

---

# 4.5 Action

Action tells Redux what happened.

Example:

```tsx
dispatch(addToCart(product));
```

This means:

> Add this product to the cart.

---

# 4.6 Payload

Payload is the data sent with an action.

Example:

```tsx
dispatch(
  addToCart({
    id: 1,
    name: "Wireless Mouse",
    price: 799,
  }),
);
```

Here, this product object is the payload.

---

# 4.7 Dispatch

Dispatch is used to send an action to Redux.

Example:

```tsx
dispatch(addToCart(product));
```

Without dispatch, Redux state will not update.

---

# 4.8 Selector

Selector is used to read data from Redux store.

Example:

```tsx
const cartItems = useAppSelector((state) => state.cart.items);
```

This reads cart items from Redux store.

---

# 4.9 Provider

Provider connects Redux store with React app.

Example:

```tsx
<Provider store={store}>
  <App />
</Provider>
```

Without Provider, React components cannot access Redux store.

---

# 5. Project Setup

Install Redux Toolkit and React Redux:

```bash
pnpm add @reduxjs/toolkit react-redux
```

Or using npm:

```bash
npm install @reduxjs/toolkit react-redux
```

Or using yarn:

```bash
yarn add @reduxjs/toolkit react-redux
```

---

# 6. Folder Structure

```txt
src/
├── main.tsx
├── App.tsx
├── store/
│   ├── store.ts
│   ├── hooks.ts
│   └── cartSlice.ts
└── components/
    ├── ProductList.tsx
    └── Cart.tsx
```

---

# 7. How Redux Works in This Project

This project has two main UI parts:

1. Product List
2. Cart

The Product List shows products.

The Cart shows added products.

When user clicks **Add to Cart**, Redux updates the cart state.

When Redux state updates, Cart component automatically re-renders.

---

# 8. Important Files Explanation

---

## 8.1 `cartSlice.ts`

This file contains cart state and cart actions.

It includes:

- Initial cart state
- Add to cart logic
- Increase quantity logic
- Decrease quantity logic
- Remove item logic
- Clear cart logic

Example:

```tsx
const initialState = {
  items: [],
};
```

This means the cart is empty by default.

---

## Actions inside cartSlice

### addToCart

Adds a product to cart.

If product already exists, it increases quantity.

```tsx
addToCart: (state, action) => {
  const existingItem = state.items.find(
    (item) => item.id === action.payload.id,
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.items.push({
      ...action.payload,
      quantity: 1,
    });
  }
};
```

---

### increaseQuantity

Increases quantity of a cart item.

```tsx
increaseQuantity: (state, action) => {
  const item = state.items.find((item) => item.id === action.payload);

  if (item) {
    item.quantity += 1;
  }
};
```

---

### decreaseQuantity

Decreases quantity of a cart item.

If quantity becomes 0, item is removed from cart.

```tsx
decreaseQuantity: (state, action) => {
  const item = state.items.find((item) => item.id === action.payload);

  if (!item) return;

  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    state.items = state.items.filter((item) => item.id !== action.payload);
  }
};
```

---

### removeFromCart

Removes item from cart.

```tsx
removeFromCart: (state, action) => {
  state.items = state.items.filter((item) => item.id !== action.payload);
};
```

---

### clearCart

Removes all cart items.

```tsx
clearCart: (state) => {
  state.items = [];
};
```

---

## 8.2 `store.ts`

This file creates Redux store.

```tsx
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
```

This means Redux store has one state section:

```tsx
state.cart;
```

Inside cart:

```tsx
state.cart.items;
```

---

## 8.3 `hooks.ts`

This file creates typed Redux hooks.

Instead of using normal hooks:

```tsx
useDispatch();
useSelector();
```

We create typed hooks:

```tsx
useAppDispatch();
useAppSelector();
```

This is better in TypeScript.

Example:

```tsx
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
```

---

## 8.4 `main.tsx`

This file wraps the full React app with Redux Provider.

```tsx
<Provider store={store}>
  <App />
</Provider>
```

Now every component inside `App` can access Redux store.

---

## 8.5 `ProductList.tsx`

This component shows products.

When user clicks **Add to Cart**, it dispatches Redux action.

```tsx
dispatch(addToCart(product));
```

This sends product data to Redux.

---

## 8.6 `Cart.tsx`

This component reads cart items from Redux store.

```tsx
const cartItems = useAppSelector((state) => state.cart.items);
```

Then it displays:

- Product name
- Product price
- Quantity
- Total price
- Increase button
- Decrease button
- Remove button

---

# 9. Full Redux Flow

```txt
User clicks Add to Cart
        |
        v
ProductList dispatches addToCart action
        |
        v
cartSlice reducer receives action
        |
        v
Redux store updates cart state
        |
        v
Cart component gets updated state
        |
        v
UI re-renders automatically
```

---

# 10. Real Example Flow

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

Redux action:

```tsx
dispatch(addToCart(product));
```

Redux state becomes:

```tsx
{
  cart: {
    items: [
      {
        id: 1,
        name: "Wireless Mouse",
        price: 799,
        quantity: 1,
      },
    ];
  }
}
```

If user clicks again, quantity becomes 2:

```tsx
{
  cart: {
    items: [
      {
        id: 1,
        name: "Wireless Mouse",
        price: 799,
        quantity: 2,
      },
    ];
  }
}
```

---

# 11. Total Price Calculation

In `Cart.tsx`, we calculate total amount:

```tsx
const totalAmount = cartItems.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);
```

Example:

```txt
Wireless Mouse: ₹799 × 2 = ₹1598
USB-C Cable: ₹399 × 1 = ₹399

Total = ₹1997
```

---

# 12. When Should We Use Redux?

Use Redux when state is shared across many components.

Good examples:

- Cart system
- Authentication user
- User permissions
- Global notifications
- Wishlist
- Dashboard filters
- Theme settings
- Multi-step forms
- Large app-level state

---

# 13. When Should We Not Use Redux?

Do not use Redux for every small state.

For local UI state, use `useState`.

Example:

```tsx
const [isOpen, setIsOpen] = useState(false);
```

This is local state.

Redux is not needed here if only one component uses it.

---

# 14. Redux vs useState

| useState                  | Redux                               |
| ------------------------- | ----------------------------------- |
| Local component state     | Global application state            |
| Used inside one component | Used across many components         |
| Simple and small          | Better for shared and complex state |
| No setup needed           | Store setup needed                  |
| Best for UI toggles       | Best for app-level data             |

---

# 15. Redux vs Context API

| Context API                                       | Redux                                          |
| ------------------------------------------------- | ---------------------------------------------- |
| Built into React                                  | External library                               |
| Good for small global data                        | Good for complex global state                  |
| Good for theme/auth                               | Good for cart/dashboard/large state            |
| Less boilerplate                                  | More structured                                |
| Can cause unnecessary re-renders if not optimized | Better developer tools and predictable updates |

---

# 16. Common Mistakes

---

## Mistake 1: Forgetting Provider

Wrong:

```tsx
<App />
```

Correct:

```tsx
<Provider store={store}>
  <App />
</Provider>
```

---

## Mistake 2: Using useSelector without Provider

If Provider is missing, this will fail:

```tsx
const cartItems = useSelector((state) => state.cart.items);
```

---

## Mistake 3: Using Redux for every small state

Wrong:

```tsx
// Using Redux for small modal open/close state
```

Better:

```tsx
const [isModalOpen, setIsModalOpen] = useState(false);
```

---

## Mistake 4: Mutating state in old Redux style

In normal Redux, direct mutation is wrong.

But in Redux Toolkit, this is okay:

```tsx
state.items.push(action.payload);
```

Redux Toolkit uses Immer internally to safely handle immutable updates.

---

## Mistake 5: Not typing Redux hooks in TypeScript

Instead of this:

```tsx
const dispatch = useDispatch();
const items = useSelector((state) => state.cart.items);
```

Use typed hooks:

```tsx
const dispatch = useAppDispatch();
const items = useAppSelector((state) => state.cart.items);
```

---

# 17. Redux Data Flow Diagram

```txt
Component
   |
   | dispatch(action)
   v
Reducer / Slice
   |
   | updates state
   v
Store
   |
   | selector reads state
   v
Component re-renders
```

---

# 18. Cart Example Data Flow

```txt
ProductList Component
   |
   | dispatch(addToCart(product))
   v
cartSlice
   |
   | updates items array
   v
Redux Store
   |
   | state.cart.items
   v
Cart Component
   |
   | useAppSelector reads items
   v
UI updates
```

---

# 19. Important Redux Terms

| Term     | Meaning                                        |
| -------- | ---------------------------------------------- |
| Store    | Central place where global state is stored     |
| State    | Actual data                                    |
| Slice    | One section of Redux state                     |
| Reducer  | Function that updates state                    |
| Action   | Event sent to Redux                            |
| Payload  | Data sent with action                          |
| Dispatch | Function used to send action                   |
| Selector | Function used to read state                    |
| Provider | Component that gives store access to React app |

---

# 20. Simple Mental Model

Think of Redux like a central office.

```txt
Component = Employee
Dispatch = Request
Action = Request details
Reducer = Manager
Store = Company database
Selector = Read database
```

When component wants to update something, it sends a request using dispatch.

Reducer handles the request.

Store updates the data.

Components read updated data using selector.

---

# 21. Final Summary

Redux is used for global state management.

Redux Toolkit makes Redux easier and cleaner.

In this cart example:

- `cartSlice.ts` contains cart logic
- `store.ts` creates Redux store
- `hooks.ts` creates typed Redux hooks
- `main.tsx` connects Redux with React using Provider
- `ProductList.tsx` dispatches cart actions
- `Cart.tsx` reads and displays cart state

Redux is best when many components need the same shared state.

For small local state, use `useState`.

For simple global values like theme, Context API is enough.

For larger and more structured app state, Redux Toolkit is better.
