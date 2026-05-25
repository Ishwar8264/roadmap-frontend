import { useCartStore } from "../store/cartStore";

/**
 * Demo products.
 * In real apps, this data can come from API.
 */
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 799,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 2499,
  },
  {
    id: 3,
    name: "USB-C Cable",
    price: 399,
  },
];

/**
 * ProductList component shows available products.
 */
export function ProductList() {
  /**
   * Reading only addToCart action from Zustand store.
   */
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <section>
      <h2>Products</h2>

      <div style={{ display: "grid", gap: "12px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              padding: "16px",
              border: "1px solid #ddd",
              borderRadius: "10px",
            }}
          >
            <h3>{product.name}</h3>

            <p>Price: ₹{product.price}</p>

            <button
              onClick={() => addToCart(product)}
              style={{
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
