import { makeAutoObservable } from "mobx";

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
 * It extends Product and adds quantity.
 */
export type CartItem = Product & {
  quantity: number;
};

/**
 * CartStore manages all cart-related state and actions.
 */
class CartStore {
  /**
   * Cart items are stored here.
   * MobX will make this observable.
   */
  items: CartItem[] = [];

  constructor() {
    /**
     * makeAutoObservable automatically makes:
     * - properties observable
     * - methods actions
     * - getters computed
     */
    makeAutoObservable(this);
  }

  /**
   * Add product to cart.
   * If product already exists, increase quantity.
   */
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

  /**
   * Increase quantity of cart item.
   */
  increaseQuantity(productId: number) {
    const item = this.items.find((item) => item.id === productId);

    if (item) {
      item.quantity += 1;
    }
  }

  /**
   * Decrease quantity of cart item.
   * If quantity becomes 0, remove item from cart.
   */
  decreaseQuantity(productId: number) {
    const item = this.items.find((item) => item.id === productId);

    if (!item) return;

    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this.removeFromCart(productId);
    }
  }

  /**
   * Remove item from cart.
   */
  removeFromCart(productId: number) {
    this.items = this.items.filter((item) => item.id !== productId);
  }

  /**
   * Clear all cart items.
   */
  clearCart() {
    this.items = [];
  }

  /**
   * Computed total cart quantity.
   */
  get totalQuantity() {
    return this.items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  }

  /**
   * Computed total cart price.
   */
  get totalAmount() {
    return this.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
}

/**
 * Create one cart store instance.
 * Components can import and use this store.
 */
export const cartStore = new CartStore();
