import { useMemo, useState } from "react";

/**
 * Fake large product list.
 */
const products = Array.from({ length: 8000 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: Math.floor(Math.random() * 5000) + 100,
}));

/**
 * This function intentionally does extra work.
 * This helps us see why useMemo is useful.
 */
function expensiveFilter(searchText: string) {
  console.log("Expensive filter running...");

  return products.filter((product) => {
    for (let i = 0; i < 5000; i++) {
      Math.sqrt(i);
    }

    return product.name.toLowerCase().includes(searchText.toLowerCase());
  });
}

export function UseMemoDemo() {
  const [searchText, setSearchText] = useState("");
  const [counter, setCounter] = useState(0);

  /**
   * useMemo caches filtered products.
   * Expensive filter runs only when searchText changes.
   * Counter update will not run expensiveFilter again.
   */
  const filteredProducts = useMemo(() => {
    return expensiveFilter(searchText);
  }, [searchText]);

  return (
    <section style={sectionStyle}>
      <h2>2. useMemo Demo</h2>

      <p>
        Type in search box. Expensive filtering runs only when search changes.
        Click counter button and check console — expensive filter will not run.
      </p>

      <input
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        placeholder="Search product..."
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "12px",
        }}
      />

      <button onClick={() => setCounter((value) => value + 1)}>
        Update Counter: {counter}
      </button>

      <p>Total Filtered Products: {filteredProducts.length}</p>

      <ul>
        {filteredProducts.slice(0, 5).map((product) => (
          <li key={product.id}>
            {product.name} — ₹{product.price}
          </li>
        ))}
      </ul>
    </section>
  );
}

const sectionStyle = {
  marginTop: "32px",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "12px",
};
