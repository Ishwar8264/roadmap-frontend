import { Cart } from "./components/Cart";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>MobX Cart Example</h1>

      <p>This example uses MobX for global cart state management.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          alignItems: "start",
        }}
      >
        <ProductList />

        <Cart />
      </div>
    </main>
  );
}

export default App;
