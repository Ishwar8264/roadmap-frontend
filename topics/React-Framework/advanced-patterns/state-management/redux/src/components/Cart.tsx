import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export function Cart() {
  const dispatch = useAppDispatch();

  /**
   * Reading cart items from Redux store.
   */
  const cartItems = useAppSelector((state) => state.cart.items);

  /**
   * Calculate total cart amount.
   */
  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <section>
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div style={{ display: "grid", gap: "12px" }}>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  padding: "16px",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                }}
              >
                <h3>{item.name}</h3>

                <p>Price: ₹{item.price}</p>

                <p>Quantity: {item.quantity}</p>

                <p>Total: ₹{item.price * item.quantity}</p>

                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                    -
                  </button>

                  <button onClick={() => dispatch(increaseQuantity(item.id))}>
                    +
                  </button>

                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3>Total Amount: ₹{totalAmount}</h3>

          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </section>
  );
}
