"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white text-black p-4 flex"> {/* Change text-white to text-black for visibility */}
      <div className="container mx-auto flex items-center justify-between w-full">
        {/* Website Title - Left side */}
        <h1 className="text-xl font-bold text-black">starter</h1>
        {/* Navigation Links - Right side */}
        <ul style={{ marginLeft: 'auto' }} className="flex gap-x-8 ml-auto"> {/* Added ml-auto to push links to the right */}
          <li>
            <Link href="/blogs" className="hover:text-gray-400 transition-colors px-4 py-2 text-black">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/signup" className="hover:text-gray-400 transition-colors px-4 py-2 text-black">
              Signup
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-400 transition-colors px-4 py-2 text-black">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}