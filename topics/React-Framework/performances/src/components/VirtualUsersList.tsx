"use client";

import { useEffect, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useVirtualUsers } from "../hooks/useVirtualUsers";

export function VirtualUsersList() {
  const parentRef = useRef<HTMLDivElement | null>(null);

  const { users, totalUsers, isLoading, error, hasMore, fetchUsers } =
    useVirtualUsers();

  /**
   * Extra loader row count.
   * If more data is available, we add 1 extra virtual row for loader.
   */
  const rowCount = hasMore ? users.length + 1 : users.length;

  /**
   * Virtualizer renders only visible rows.
   */
  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 92,
    overscan: 8,
  });

  /**
   * Infinite scroll logic.
   * When user reaches near bottom, fetch next users.
   */
  useEffect(() => {
    const virtualItems = rowVirtualizer.getVirtualItems();

    if (virtualItems.length === 0) return;

    const lastItem = virtualItems[virtualItems.length - 1];

    if (!lastItem) return;

    const isNearBottom = lastItem.index >= users.length - 1;

    if (isNearBottom && hasMore && !isLoading) {
      fetchUsers();
    }
  }, [
    rowVirtualizer.getVirtualItems(),
    users.length,
    hasMore,
    isLoading,
    fetchUsers,
  ]);

  return (
    <section className="mx-auto max-w-3xl p-6">
      <div className="mb-5">
        <h1 className="text-2xl font-bold">Virtualized Users List</h1>

        <p className="mt-2 text-sm text-gray-600">
          Real API users with virtualization and infinite loading.
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Loaded: {users.length} / {totalUsers || "..."}
        </p>
      </div>

      {error ? (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      ) : null}

      <div
        ref={parentRef}
        className="h-[520px] overflow-auto rounded-xl border border-gray-200 bg-white"
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

            const isLoaderRow = virtualRow.index > users.length - 1;

            return (
              <div
                key={virtualRow.key}
                data-index={virtualRow.index}
                ref={rowVirtualizer.measureElement}
                className="absolute left-0 top-0 w-full border-b border-gray-100"
                style={{
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                {isLoaderRow ? (
                  <div className="flex h-[92px] items-center justify-center text-sm text-gray-500">
                    {hasMore ? "Loading more users..." : "No more users"}
                  </div>
                ) : (
                  <div className="flex items-center gap-4 p-4">
                    <img
                      src={user.image}
                      alt={`${user.firstName} ${user.lastName}`}
                      className="h-14 w-14 rounded-full border border-gray-200 object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-semibold text-gray-900">
                        {user.firstName} {user.lastName}
                      </h3>

                      <p className="truncate text-sm text-gray-600">
                        {user.email}
                      </p>

                      <p className="truncate text-xs text-gray-500">
                        {user.company?.title} at {user.company?.name}
                      </p>
                    </div>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                      #{user.id}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {isLoading ? (
        <p className="mt-3 text-sm text-gray-500">Fetching users...</p>
      ) : null}
    </section>
  );
}
