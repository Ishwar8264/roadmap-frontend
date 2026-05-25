"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  company?: {
    name: string;
    title: string;
  };
};

type UsersApiResponse = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};

const USERS_LIMIT = 20;

export function useVirtualUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [skip, setSkip] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * This ref prevents duplicate API calls while one request is already running.
   */
  const isFetchingRef = useRef(false);

  /**
   * Check if more users are available from API.
   */
  const hasMore = users.length < totalUsers || totalUsers === 0;

  /**
   * Fetch users from real API.
   */
  const fetchUsers = useCallback(async () => {
    if (isFetchingRef.current) return;

    if (totalUsers !== 0 && users.length >= totalUsers) return;

    try {
      isFetchingRef.current = true;
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `https://dummyjson.com/users?limit=${USERS_LIMIT}&skip=${skip}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data: UsersApiResponse = await response.json();

      setUsers((currentUsers) => {
        const existingIds = new Set(currentUsers.map((user) => user.id));

        const newUsers = data.users.filter((user) => !existingIds.has(user.id));

        return [...currentUsers, ...newUsers];
      });

      setTotalUsers(data.total);
      setSkip((currentSkip) => currentSkip + USERS_LIMIT);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      isFetchingRef.current = false;
      setIsLoading(false);
    }
  }, [skip, totalUsers, users.length]);

  /**
   * Initial API call.
   */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUsers();
  }, []);

  return {
    users,
    totalUsers,
    isLoading,
    error,
    hasMore,
    fetchUsers,
  };
}
