import { useCartStore } from "../store/cartStore";

/**
 * Cart component reads and updates cart state using Zustand.
 */
export function Cart() {
  /**
   * Reading state from Zustand store.
   */
  const items = useCartStore((state) => state.items);

  /**
   * Reading actions from Zustand store.
   */
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  /**
   * Reading derived calculation methods from Zustand store.
   */
  const totalQuantity = useCartStore((state) => state.getTotalQuantity());
  const totalAmount = useCartStore((state) => state.getTotalAmount());

  return (
    <section>
      <h2>Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div style={{ display: "grid", gap: "12px" }}>
            {items.map((item) => (
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
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>

                  <button onClick={() => increaseQuantity(item.id)}>+</button>

                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3>Total Quantity: {totalQuantity}</h3>

          <h3>Total Amount: ₹{totalAmount}</h3>

          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </section>
  );
}
