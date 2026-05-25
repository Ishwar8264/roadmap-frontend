// import { MemoCallbackDemo } from "./components/MemoCallbackDemo";
// import { UseMemoDemo } from "./components/UseMemoDemo";
// import { VirtualizedListDemo } from "./components/VirtualizedListDemo";
import { VirtualDomFlowSvg } from "./components/virtual-dom-flow";
// import { VirtualUsersList } from "./components/VirtualUsersList";

function App() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>React Performance Demo</h1>

      <p>
        This demo explains React.memo, useCallback, useMemo, and virtualization.
      </p>

      {/* <MemoCallbackDemo /> */}

      {/* <UseMemoDemo /> */}

      {/* <VirtualizedListDemo /> */}
      {/* <VirtualUsersList /> */}

      <VirtualDomFlowSvg />
    </main>
  );
}

export default App;
