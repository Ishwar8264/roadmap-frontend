"use client";

import { useRef } from "react";

export default function UncontrolledForm() {
  // Ref is used to directly access the input DOM element.
  const nameInputRef = useRef<HTMLInputElement>(null);

  // This function runs when the form is submitted.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = nameInputRef.current?.value || "";

    alert(`Uncontrolled Input Value: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border p-4">
      <div className="space-y-2">
        <label htmlFor="uncontrolled-name" className="block font-medium">
          Name
        </label>

        <input
          id="uncontrolled-name"
          ref={nameInputRef}
          type="text"
          defaultValue=""
          placeholder="Enter your name"
          className="w-full rounded-lg border px-3 py-2"
        />
      </div>

      <p className="text-sm text-gray-600">
        Value is not stored in React state.
      </p>

      <button
        type="submit"
        className="rounded-lg bg-black px-4 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
}
