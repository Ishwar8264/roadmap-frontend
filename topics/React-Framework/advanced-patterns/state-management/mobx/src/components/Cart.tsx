import { observer } from "mobx-react-lite";
import { cartStore } from "../store/cartStore";

/**
 * Cart component reads cart data from MobX store.
 * observer makes this component reactive.
 */
export const Cart = observer(function Cart() {
  return (
    <section>
      <h2>Cart</h2>

      {cartStore.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div style={{ display: "grid", gap: "12px" }}>
            {cartStore.items.map((item) => (
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
                  <button onClick={() => cartStore.decreaseQuantity(item.id)}>
                    -
                  </button>

                  <button onClick={() => cartStore.increaseQuantity(item.id)}>
                    +
                  </button>

                  <button onClick={() => cartStore.removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3>Total Quantity: {cartStore.totalQuantity}</h3>

          <h3>Total Amount: ₹{cartStore.totalAmount}</h3>

          <button onClick={() => cartStore.clearCart()}>Clear Cart</button>
        </>
      )}
    </section>
  );
});
