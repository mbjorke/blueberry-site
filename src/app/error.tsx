"use client";
import React from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
      <pre className="bg-gray-800 p-4 rounded text-red-400 mb-4 max-w-lg overflow-x-auto">
        {error.message}
      </pre>
      <button
        className="px-6 py-2 bg-cyan-600 rounded font-semibold hover:bg-cyan-700 transition"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
