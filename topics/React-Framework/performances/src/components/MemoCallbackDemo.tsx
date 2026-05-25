import { memo, useCallback, useRef, useState } from "react";

/**
 * Normal child component.
 * This component re-renders whenever parent re-renders.
 */
function NormalChild({ onClick }: { onClick: () => void }) {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div style={cardStyle}>
      <h3>Normal Child</h3>

      <p>Render Count: {renderCount.current}</p>

      <button onClick={onClick}>Click Child Button</button>
    </div>
  );
}

/**
 * Memoized child component.
 * React.memo helps skip re-render when props are same.
 */
const MemoChild = memo(function MemoChild({
  onClick,
}: {
  onClick: () => void;
}) {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div style={cardStyle}>
      <h3>Memo Child</h3>

      <p>Render Count: {renderCount.current}</p>

      <button onClick={onClick}>Click Child Button</button>
    </div>
  );
});

export function MemoCallbackDemo() {
  const [count, setCount] = useState(0);

  /**
   * useCallback keeps the same function reference between re-renders.
   * This helps React.memo work properly.
   */
  const handleChildClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <section style={sectionStyle}>
      <h2>1. React.memo + useCallback Demo</h2>

      <p>
        Click parent button. Normal child will re-render. Memo child will avoid
        unnecessary re-render because function prop is stable with useCallback.
      </p>

      <button onClick={() => setCount((value) => value + 1)}>
        Update Parent Count: {count}
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        <NormalChild onClick={handleChildClick} />

        <MemoChild onClick={handleChildClick} />
      </div>
    </section>
  );
}

const sectionStyle = {
  marginTop: "32px",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "12px",
};

const cardStyle = {
  padding: "16px",
  border: "1px solid #ddd",
  borderRadius: "10px",
};
