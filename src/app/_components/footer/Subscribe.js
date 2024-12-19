"use client";

import { useState } from "react";

export default function Subscribe() {
  const [emailAddress, setEmailAddress] = useState("");

  function handleChange(event) {
    setEmailAddress(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // TODO: Do some operations with the entered email address

    setEmailAddress("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className="p-2 w-64 rounded-l-md text-black outline-none"
        name="email"
        value={emailAddress}
        placeholder="Enter your email"
      />
      <button
        id="subscribe"
        className="bg-red-600 text-white py-2 px-4 rounded-r-md"
      >
        Subscribe
      </button>
    </form>
  );
}
