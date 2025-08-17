import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-center px-4">
      <div className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse">
        404
      </div>
      <h1 className="mt-4 text-2xl md:text-3xl text-white font-semibold">
        Oops! Page not found.
      </h1>
      <p className="mt-3 text-lg md:text-xl text-gray-400 max-w-md">
        The vault you’re trying to access doesn’t exist yet.
        <br />
        Want us to generate it?
      </p>
      <div className="mt-6">
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
        >
          Go back to safety
        </Link>
      </div>
    </div>
  );
}
