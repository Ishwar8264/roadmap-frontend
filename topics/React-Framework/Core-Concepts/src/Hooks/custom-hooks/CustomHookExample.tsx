"use client";

import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increase = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrease = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return {
    count,
    increase,
    decrease,
    reset,
  };
}

export default function CustomHookExample() {
  const firstCounter = useCounter(0);
  const secondCounter = useCounter(10);

  return (
    <main className="mx-auto max-w-md space-y-6 p-6">
      <section className="space-y-3 rounded-xl border p-4">
        <h1 className="text-xl font-semibold">Custom Hook Example</h1>

        <p className="text-gray-600">
          Custom hooks help us reuse component logic.
        </p>
      </section>

      <section className="space-y-3 rounded-xl border p-4">
        <h2 className="font-semibold">First Counter</h2>

        <p>Count: {firstCounter.count}</p>

        <div className="flex gap-2">
          <button
            onClick={firstCounter.increase}
            className="rounded bg-black px-3 py-2 text-white"
          >
            Increase
          </button>

          <button
            onClick={firstCounter.decrease}
            className="rounded border px-3 py-2"
          >
            Decrease
          </button>

          <button
            onClick={firstCounter.reset}
            className="rounded border px-3 py-2"
          >
            Reset
          </button>
        </div>
      </section>

      <section className="space-y-3 rounded-xl border p-4">
        <h2 className="font-semibold">Second Counter</h2>

        <p>Count: {secondCounter.count}</p>

        <div className="flex gap-2">
          <button
            onClick={secondCounter.increase}
            className="rounded bg-black px-3 py-2 text-white"
          >
            Increase
          </button>

          <button
            onClick={secondCounter.decrease}
            className="rounded border px-3 py-2"
          >
            Decrease
          </button>

          <button
            onClick={secondCounter.reset}
            className="rounded border px-3 py-2"
          >
            Reset
          </button>
        </div>
      </section>
    </main>
  );
}
