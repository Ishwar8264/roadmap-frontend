"use client";

import { useEffect, useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useLargeUsers, type User } from "../hooks/useLargeUsers";

/**
 * Single user row UI.
 */
function UserRow({ user }: { user: User }) {
  return (
    <div className="flex items-center gap-4 border-b border-gray-100 p-4">
      <img
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        className="h-12 w-12 rounded-full border object-cover"
      />

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-semibold text-gray-900">
          #{user.id} {user.firstName} {user.lastName}
        </h3>

        <p className="truncate text-sm text-gray-500">{user.email}</p>
      </div>
    </div>
  );
}

export function VirtualizationCrashDemo() {
  const { users, isLoading, error } = useLargeUsers(50000);

  const [mode, setMode] = useState<"normal" | "virtual">("virtual");

  const parentRef = useRef<HTMLDivElement | null>(null);

  /**
   * Virtualizer config.
   * It renders only visible rows inside the scroll container.
   */
  const rowVirtualizer = useVirtualizer({
    count: users.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 82,
    overscan: 8,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();

  /**
   * Console behaviour demo.
   * This shows how many DOM rows are actually rendered.
   */
  useEffect(() => {
    if (users.length === 0) return;

    window.setTimeout(() => {
      const normalRows = document.querySelectorAll("[data-normal-row]").length;
      const virtualRows =
        document.querySelectorAll("[data-virtual-row]").length;

      console.clear();

      console.log("========== Virtualization Demo ==========");
      console.log("Mode:", mode);
      console.log("Total data rows:", users.length);

      if (mode === "normal") {
        console.log("DOM rows rendered:", normalRows);
        console.log(
          "Result:",
          "Normal list renders all rows. Browser may become slow or freeze.",
        );
      }

      if (mode === "virtual") {
        console.log("DOM rows rendered:", virtualRows);
        console.log("Visible virtual rows:", virtualItems.length);
        console.log(
          "Result:",
          "Virtual list renders only visible rows. Scroll remains smooth.",
        );
      }

      console.log("=========================================");
    }, 100);
  }, [mode, users.length, virtualItems.length]);

  if (isLoading) {
    return <p className="p-6">Loading users...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-600">{error}</p>;
  }

  return (
    <section className="mx-auto max-w-4xl p-6">
      <div className="mb-5">
        <h1 className="text-2xl font-bold">Normal List vs Virtualized List</h1>

        <p className="mt-2 text-sm text-gray-600">
          Open browser console and switch modes. You will clearly see DOM row
          count difference.
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Total data rows: {users.length}
        </p>
      </div>

      <div className="mb-4 flex gap-3">
        <button
          onClick={() => setMode("normal")}
          className={`rounded-lg border px-4 py-2 text-sm ${
            mode === "normal" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          Normal List
        </button>

        <button
          onClick={() => setMode("virtual")}
          className={`rounded-lg border px-4 py-2 text-sm ${
            mode === "virtual" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          Virtual List
        </button>
      </div>

      {mode === "normal" ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          Warning: Normal List renders all {users.length} rows. Your browser may
          lag. This is the problem virtualization solves.
        </div>
      ) : (
        <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
          Virtual List renders only visible rows. This is better for large data.
        </div>
      )}

      <div className="mt-4 h-[520px] overflow-auto rounded-xl border border-gray-200 bg-white">
        {mode === "normal" ? (
          /**
           * Bad performance example.
           * This renders all rows at once.
           */
          <div>
            {users.map((user) => (
              <div key={user.id} data-normal-row>
                <UserRow user={user} />
              </div>
            ))}
          </div>
        ) : (
          /**
           * Good performance example.
           * This renders only visible rows.
           */
          <div ref={parentRef} className="h-full overflow-auto">
            <div
              style={{
                height: `${rowVirtualizer.getTotalSize()}px`,
                width: "100%",
                position: "relative",
              }}
            >
              {virtualItems.map((virtualRow) => {
                const user = users[virtualRow.index];

                return (
                  <div
                    key={virtualRow.key}
                    data-virtual-row
                    ref={rowVirtualizer.measureElement}
                    className="absolute left-0 top-0 w-full"
                    style={{
                      transform: `translateY(${virtualRow.start}px)`,
                    }}
                  >
                    <UserRow user={user} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
