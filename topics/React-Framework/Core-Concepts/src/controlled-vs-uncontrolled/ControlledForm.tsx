"use client";

import { useState } from "react";

export default function ControlledForm() {
  // State stores the current input value.
  const [name, setName] = useState("");

  // This function runs when the form is submitted.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert(`Controlled Input Value: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border p-4">
      <div className="space-y-2">
        <label htmlFor="controlled-name" className="block font-medium">
          Name
        </label>

        <input
          id="controlled-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          className="w-full rounded-lg border px-3 py-2"
        />
      </div>

      <p className="text-sm text-gray-600">Live Value: {name}</p>

      <button
        type="submit"
        className="rounded-lg bg-black px-4 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
}
