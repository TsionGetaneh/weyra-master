"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#7d7c38] text-white py-8">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
         
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-400">
                  Name
                </Link>
              </li>
              <li>
                <a href="#services">SERVICES</a>
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
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="hover:text-gray-400">
                  Help notice
                </Link>
              </li>
              <li>
                <Link href="/password-services" className="hover:text-gray-400">
                  Password services
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-gray-400">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-400">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-gray-400">
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>
       
        <div className="mt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Wey Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
