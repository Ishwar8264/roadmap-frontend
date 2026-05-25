"use client";

import { useEffect, useMemo, useState } from "react";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
};

type ApiUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
};

type ApiResponse = {
  users: ApiUser[];
};

/**
 * This hook fetches real users from API.
 * Then it repeats them to create a huge list for performance demo.
 */
export function useLargeUsers(totalRows = 50000) {
  const [apiUsers, setApiUsers] = useState<ApiUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Real API call.
   */
  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("https://dummyjson.com/users?limit=10000");

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: ApiResponse = await response.json();

        setApiUsers(data.users);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong",
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []);

  /**
   * Create large data from real API users.
   * This makes the demo heavy enough to show why virtualization is needed.
   */
  const users = useMemo<User[]>(
    // eslint-disable-next-line react-hooks/use-memo
    (() => {
      if (apiUsers.length === 0) return [];

      return Array.from({ length: totalRows }, (_, index) => {
        const apiUser = apiUsers[index % apiUsers.length];

        return {
          id: index + 1,
          firstName: apiUser.firstName,
          lastName: apiUser.lastName,
          email: `user-${index + 1}-${apiUser.email}`,
          image: apiUser.image,
        };
      });
    }) as () => User[],
    [apiUsers, totalRows],
  );

  return {
    users,
    totalRows,
    isLoading,
    error,
  };
}
