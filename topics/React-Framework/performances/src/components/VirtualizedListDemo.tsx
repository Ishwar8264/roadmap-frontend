import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

/**
 * Large user list.
 */
const users = Array.from({ length: 10000 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
}));

export function VirtualizedListDemo() {
  const parentRef = useRef<HTMLDivElement | null>(null);

  /**
   * Virtualizer renders only visible rows.
   */
  const rowVirtualizer = useVirtualizer({
    count: users.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 70,
  });

  return (
    <section style={sectionStyle}>
      <h2>3. Virtualization Demo</h2>

      <p>
        This list has 10,000 users, but only visible rows are rendered in the
        DOM.
      </p>

      <div
        ref={parentRef}
        style={{
          height: "400px",
          overflow: "auto",
          border: "1px solid #ddd",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const user = users[virtualRow.index];

            return (
              <div
                key={user.id}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                  padding: "12px",
                  borderBottom: "1px solid #eee",
                  boxSizing: "border-box",
                }}
              >
                <strong>{user.name}</strong>

                <p style={{ margin: "4px 0 0" }}>{user.email}</p>
              </div>
            );
          })}
        </div>
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
