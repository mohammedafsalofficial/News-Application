"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Pagination({ languageId, nextPageId }) {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center mt-8 gap-4">
      <button
        type="button"
        onClick={() => router.back()}
        className="px-4 py-2 bg-gray-600 text-white font-medium rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous Page
      </button>
      <Link
        href={`/latest-news/${languageId}/${nextPageId}`}
        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
      >
        Next Page
      </Link>
    </div>
  );
}
