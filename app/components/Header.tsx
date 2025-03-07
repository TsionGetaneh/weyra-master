"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white text-gray-600 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Weyra Tech
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <a href="#services">SERVICES</a>
            </li>
            <li>
              <Link href="/team" className="hover:text-gray-400">
                Team
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-gray-400">
                Portfolio
              </Link>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
