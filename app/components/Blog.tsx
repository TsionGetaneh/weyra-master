"use client";

import Link from "next/link";
import Image from "next/image";
import { blogData } from "../data/bolgData";

export default function Blog() {
  return (
    <section id="blog" className="py-16 bg-white container mx-auto px-6">
      <h2 className="bg-[#7E8038] font-space-grotesk text-black text-4xl font-bold rounded-lg px-7 py-2 uppercase mb-12 ml-[8.2rem] tracking-wide w-[115px] h-[51px] flex items-center justify-center">
        BLOG
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-[8.2rem]">
        {blogData.map((post, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md 
        overflow-hidden hover:shadow-lg transition-transform transform 
        hover:scale-[1.02] duration-300 flex flex-col"
          >
            <div className="relative w-full h-[224px] overflow-hidden rounded-t-[13px]">
              <Image
                src={post.image}
                alt={post.title}
                width={360}
                height={224}
                className="w-full h-full object-cover rounded-t-[13px]"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-2 text-black">
                  {post.title}
                </h3>
                <p className="text-black mb-4 text-sm">{post.description}</p>
              </div>

              <div className="mt-auto flex justify-center">
                <Link
                  href={post.link}
                  className="w-[160px] h-[48px] border border-black bg-white 
                              rounded-[13px] text-sm font-medium text-black 
                              hover:bg-[#7c7b38] hover:text-white transition duration-300 
                              flex items-center justify-center shadow-md"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
