"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#7d7c38] text-white py-3 text-[20px] font-[400]">
      <div className="container mx-auto px-2 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 pl-[130px]">
          <div className="pl-[20px]">
            <h3 className="text-[28px] font-[300] mb-1 uppercase">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-200 text-sm transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-gray-200 text-sm transition-all duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="hover:text-gray-200 text-sm transition-all duration-300"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="hover:text-gray-200 text-sm transition-all duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-200 text-sm transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className=" ml-[-150px]">
            {" "}
            <h3 className="text-[28px] font-[300] mb-1 uppercase">Support</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/help"
                  className="hover:text-gray-200 text-[14px] transition-all duration-300"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-gray-200 text-sm transition-all duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="hover:text-gray-200 text-sm transition-all duration-300"
                >
                  Legal
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-gray-200 text-[14px] transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/status"
                  className="hover:text-gray-200 text-sm transition-all duration-300"
                >
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
