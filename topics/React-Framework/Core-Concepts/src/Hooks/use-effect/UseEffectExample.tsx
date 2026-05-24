"use client";

import { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Runs whenever count changes.
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Runs only once when component mounts.
  // Cleanup runs when component unmounts.
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSeconds((previousSeconds) => previousSeconds + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <main className="mx-auto max-w-md space-y-6 p-6">
      <section className="space-y-3 rounded-xl border p-4">
        <h1 className="text-xl font-semibold">useEffect Example</h1>

        <p className="text-gray-600">
          useEffect runs side effects after the component renders.
        </p>
      </section>

      <section className="space-y-3 rounded-xl border p-4">
        <h2 className="font-semibold">Document Title Effect</h2>

        <p>Count: {count}</p>

        <button
          onClick={() => setCount((previousCount) => previousCount + 1)}
          className="rounded bg-black px-3 py-2 text-white"
        >
          Increase Count
        </button>

        <p className="text-sm text-gray-600">
          When count changes, browser tab title also updates.
        </p>
      </section>

      <section className="space-y-3 rounded-xl border p-4">
        <h2 className="font-semibold">Timer Effect</h2>

        <p>Seconds: {seconds}</p>

        <p className="text-sm text-gray-600">
          This timer starts when the component mounts and stops when it
          unmounts.
        </p>
      </section>
    </main>
  );
}
