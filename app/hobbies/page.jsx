import Link from "next/link";

export default function Hobbies() {
  return (
    <div className="min-h-screen from-blue-100 to-indigo-200 flex items-center justify-center p-10">
      <div className="bg-red-900 shadow-2xl rounded-2xl p-8 max-w-3xl w-full border border-gray-100 transform transition hover:-translate-y-2 hover:shadow-2xl">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 text-center">
          My Hobbies
        </h1>

        <p className="text-red-700 text-lg mb-6 leading-relaxed text-center">
          Here are some activities I enjoy in my free time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-indigo-50 text-indigo-700 p-4 rounded-lg text-center font-medium shadow hover:shadow-md transition">
            Camping
          </div>
          <div className="bg-indigo-50 text-indigo-700 p-4 rounded-lg text-center font-medium shadow hover:shadow-md transition">
            Fishing
          </div>
          <div className="bg-indigo-50 text-indigo-700 p-4 rounded-lg text-center font-medium shadow hover:shadow-md transition">
            Biking
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/hobbies"
            className="inline-block text-blue bg-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
