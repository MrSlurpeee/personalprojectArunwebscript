"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hobbies() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDogs() {
      try {
        const res = await fetch("/api/hobbies");
        const data = await res.json();

        setDogs(data.dogs || []);
      } catch (err) {
        console.error("Failed to fetch dogs:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDogs(); 
  }, []);

  return (
    <div className="min-h-screen from-blue-100 to-indigo-200 flex items-center justify-center p-10">
      <div className="bg-red-900 shadow-2xl rounded-2xl p-8 max-w-3xl w-full border border-gray-100 hover:shadow-2xl">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 text-center">
          My Hobbies
        </h1>

        <p className="text-red-700 text-lg mb-6 leading-relaxed text-center">
          Here are some activities I enjoy in my free time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-indigo-50 text-indigo-700 p-4 rounded-lg text-center font-medium shadow">
            Camping
          </div>
          <div className="bg-indigo-50 text-indigo-700 p-4 rounded-lg text-center font-medium shadow">
            Fishing
          </div>
          <div className="bg-indigo-50 text-indigo-700 p-4 rounded-lg text-center font-medium shadow">
            Biking
          </div>
          <div className="bg-indigo-50 text-indigo-700 p-4 rounded-lg text-center font-medium shadow">
            Walking Dogs
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">
          Random Dogs 🐶
        </h2>

        {loading ? (
          <p className="text-center text-gray-300">Loading dogs...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {dogs.map((dog, index) => (
              <img
                key={index}
                src={dog}
                alt="Dog"
                className="w-full h-48 object-cover rounded-lg shadow hover:scale-105 transition"
              />
            ))}
          </div>
        )}

        <div className="text-center">
          <Link
            href="/hobbies"
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
