import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-orange-200 flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-bold text-indigo-900 mb-8 text-center">
        Home Page
      </h1>

      <nav className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/about"
          className="text-red bg-red-600 px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Go to About
        </Link>
        <Link
          href="/hobbies"
          className="text-red bg-indigo-400 px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Go to Hobbies
        </Link>
      </nav>
    </main>
  );
}
