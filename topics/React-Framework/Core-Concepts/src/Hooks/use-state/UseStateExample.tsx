"use client";

import { useState } from "react";

export default function UseStateExample() {
  // Number state
  const [count, setCount] = useState(0);

  // String state
  const [name, setName] = useState("");

  // Boolean state
  const [isVisible, setIsVisible] = useState(false);

  const increaseCount = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decreaseCount = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <main className="mx-auto max-w-md space-y-6 p-6">
      <section className="space-y-3 rounded-xl border p-4">
        <h1 className="text-xl font-semibold">useState Example</h1>

        <p className="text-gray-600">
          useState helps us store and update data inside a component.
        </p>
      </section>

      <section className="space-y-3 rounded-xl border p-4">
        <h2 className="font-semibold">Counter State</h2>

        <p>Count: {count}</p>

        <div className="flex gap-2">
          <button
            onClick={increaseCount}
            className="rounded bg-black px-3 py-2 text-white"
          >
            Increase
          </button>

          <button onClick={decreaseCount} className="rounded border px-3 py-2">
            Decrease
          </button>

          <button onClick={resetCount} className="rounded border px-3 py-2">
            Reset
          </button>
        </div>
      </section>

      <section className="space-y-3 rounded-xl border p-4">
        <h2 className="font-semibold">Input State</h2>

        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          className="w-full rounded border px-3 py-2"
        />

        <p>Your name is: {name || "Not entered yet"}</p>
      </section>

      <section className="space-y-3 rounded-xl border p-4">
        <h2 className="font-semibold">Boolean State</h2>

        <button
          onClick={() => setIsVisible((previousValue) => !previousValue)}
          className="rounded bg-black px-3 py-2 text-white"
        >
          Toggle Message
        </button>

        {isVisible && <p>Hello, this message is visible now.</p>}
      </section>
    </main>
  );
}
