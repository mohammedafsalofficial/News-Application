"use client";

export default function ErrorPage({ error, reset }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-lg bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Something Went Wrong!</h1>
        <p className="text-gray-700 mb-6">
          <span className="font-semibold">Error Message:</span>{" "}
          {error.message || "An unknown error occurred."}
        </p>
        <div className="text-left bg-gray-100 p-4 rounded mb-6">
          <h2 className="text-lg font-medium text-gray-800 mb-2">How to Fix:</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Check the browser&apos;s console for detailed error logs.</li>
            <li>Verify the API or resource you&apos;re trying to access is available.</li>
            <li>Ensure your internet connection is stable.</li>
          </ul>
        </div>
        <button
          onClick={reset}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
