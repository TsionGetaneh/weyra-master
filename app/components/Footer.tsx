"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#7d7c38] text-white py-3 text-[11px]">
      <div className="container mx-auto px-2 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.1">
          <div>
            <h3 className="text-[10px] font-semibold mb-1 uppercase">Company</h3>
            <ul className="space-y-0.1">
              <li>
                <Link href="/about" className="hover:text-gray-200 transition-all duration-300">
                  Name
                </Link>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-200 transition-all duration-300">Services</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-gray-200 transition-all duration-300">Blog</a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-200 transition-all duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-semibold mb-1 uppercase">Support</h3>
            <ul className="space-y-0.1">
              <li>
                <Link href="/help" className="hover:text-gray-200 transition-all duration-300">
                  Help Notice
                </Link>
              </li>
              <li>
                <Link href="/password-services" className="hover:text-gray-200 transition-all duration-300">
                  Password Services
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-gray-200 transition-all duration-300">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-200 transition-all duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-gray-200 transition-all duration-300">
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-2 text-center text-gray-300 text-[9px] border-t border-gray-500 pt-1">
          <p>
            &copy; {new Date().getFullYear()} Weyra Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
