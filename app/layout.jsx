import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-red-100">
        {/* Navbar */}
        <header className="bg-yellow-500 text-white shadow-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Portfolio</h1>

            <div className="flex gap-4">
              <Link
                href="/"
                className="px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-white"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition text-white"
              >
                About
              </Link>
              <Link
                href="/hobbies"
                className="px-3 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 transition text-white"
              >
                Hobbies
              </Link>
            </div>
          </nav>
        </header>

        <main className="pt-6">{children}</main>
      </body>
    </html>
  );
}
