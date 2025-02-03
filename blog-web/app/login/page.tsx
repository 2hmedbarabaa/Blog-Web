"use client"

import Image from "next/image";
import { useEffect } from "react";

export default function loginPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // Hide Navbar if it exists
    document.body.classList.add("overflow-hidden");

    return () => {
      // Re-enable scrolling when leaving this page
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Side - Full Height Image */}
      <div className="hidden lg:flex w-1/2 h-auto relative bg-gray-100">
        <Image
          src="/images/posts/post4.jpg" // Ensure this exists in "public/images"
          alt="Man riding a bike"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 h-full">
        <div className="max-w-md w-full">
          <h1 className="text-2xl font-bold mb-2">Starter</h1>
          <p className="text-gray-600 mb-6">
            Get better with favorite blogs | posts
          </p>

          {/* Signup Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-black"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md mt-4 hover:bg-gray-900"
            >
              Login
            </button>
          </form>

          {/* Login Redirect */}
          <div className="mt-4 text-sm text-center">
            Do not have an account?{" "}
            <a href="/signup" className="text-blue-600 underline">
              SignUp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
