import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] space-y-4">
      <h1 className="text-9xl">Oops!</h1>
      <h1 className="text-2xl font-semibold">404 - PAGE NOT FOUND</h1>
      <p className="max-w-[26rem] text-center">
        The page you are looking for might have been removed or had its name
        changed or is temporarily unavailable.
      </p>
      <Link
        href={"/"}
        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
      >
        GO TO HOMEPAGE
      </Link>
    </div>
  );
}
