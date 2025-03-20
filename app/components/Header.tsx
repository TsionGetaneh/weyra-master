"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-gray-600 py-4 shadow-md z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold ml-[8.2rem]">
          Weyra Tech
        </Link>
        
        {/* Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="hover:text-gray-400">Services</a>
          <Link href="/team" className="hover:text-gray-400">Team</Link>
          <Link href="/portfolio" className="hover:text-gray-400">Portfolio</Link>
          <a href="#blog" onClick={(e) => handleSmoothScroll(e, "blog")} className="hover:text-gray-400">Blog</a>
          <Link href="/contact" className="hover:text-gray-400">Contact Us</Link>
        </nav>
        
        {/* Mobile*/}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isOpen && (
        <div className="absolute right-4 top-16 bg-white shadow-lg rounded-lg p-4 w-40 flex flex-col space-y-3 text-sm">
          <button className="self-end p-1" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")}>Services</a>
          <Link href="/team" onClick={() => setIsOpen(false)}>Team</Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <a href="#blog" onClick={(e) => handleSmoothScroll(e, "blog")}>Blog</a>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}
