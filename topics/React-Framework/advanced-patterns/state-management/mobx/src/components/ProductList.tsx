import { observer } from "mobx-react-lite";
import { cartStore } from "../store/cartStore";

/**
 * Demo product list.
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
 * ProductList shows available products.
 * User can add products to cart from here.
 */
export const ProductList = observer(function ProductList() {
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
              onClick={() => cartStore.addToCart(product)}
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
});
