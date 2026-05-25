import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/**
 * Product type defines the structure of one cart item.
 */
export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

/**
 * Cart state type.
 */
type CartState = {
  items: CartItem[];
};

/**
 * Initial cart state.
 */
const initialState: CartState = {
  items: [],
};

/**
 * Cart slice contains:
 * 1. slice name
 * 2. initial state
 * 3. reducer functions
 */
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /**
     * Add item to cart.
     * If item already exists, increase quantity.
     */
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
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
    },

    /**
     * Increase item quantity.
     */
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },

    /**
     * Decrease item quantity.
     * If quantity becomes 0, remove item from cart.
     */
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },

    /**
     * Remove item from cart.
     */
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    /**
     * Clear full cart.
     */
    clearCart: (state) => {
      state.items = [];
    },
  },
});

/**
 * Export actions.
 */
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

/**
 * Export reducer.
 */
export default cartSlice.reducer;
