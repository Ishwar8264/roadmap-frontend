import { create } from "zustand";

/**
 * Product type defines one product structure.
 */
export type Product = {
  id: number;
  name: string;
  price: number;
};

/**
 * Cart item type.
 * Cart item has product data plus quantity.
 */
export type CartItem = Product & {
  quantity: number;
};

/**
 * Cart store type.
 * This contains state and actions.
 */
type CartStore = {
  items: CartItem[];

  addToCart: (product: Product) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;

  getTotalQuantity: () => number;
  getTotalAmount: () => number;
};

/**
 * Zustand cart store.
 *
 * set = used to update state
 * get = used to read current state inside store actions
 */
export const useCartStore = create<CartStore>()((set, get) => ({
  /**
   * Initial cart state.
   */
  items: [],

  /**
   * Add product to cart.
   * If product already exists, increase quantity.
   */
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
  },

  /**
   * Increase cart item quantity.
   */
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
  },

  /**
   * Decrease cart item quantity.
   * If quantity becomes 0, remove item from cart.
   */
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
  },

  /**
   * Remove item from cart.
   */
  removeFromCart: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    }));
  },

  /**
   * Clear full cart.
   */
  clearCart: () => {
    set({
      items: [],
    });
  },

  /**
   * Get total cart quantity.
   */
  getTotalQuantity: () => {
    return get().items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  },

  /**
   * Get total cart amount.
   */
  getTotalAmount: () => {
    return get().items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  },
}));
