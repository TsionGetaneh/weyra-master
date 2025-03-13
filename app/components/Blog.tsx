"use client";

import Link from "next/link";
import Image from "next/image";
import { blogData } from "../data/bolgData";

export default function Blog() {
  return (
    <section id="blog" className="py-16 bg-white container mx-auto px-6">
      <h2 className="inline-block bg-[#7d7c38] text-white text-2xl font-bold rounded-[20px] px-4 py-2 text-start mb-6">
        BLOG
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogData.map((post, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:scale-[1.02] duration-300"
          >
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold mb-2 text-black">
                {post.title}
              </h3>
              <p className="text-black mb-4 text-sm">{post.description}</p>
              <Link
                href={post.link}
                className="inline-block px-4 py-2 text-sm font-medium text-black border border-gray-600 rounded-md hover:bg-[#7c7b38] hover:text-white transition duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
