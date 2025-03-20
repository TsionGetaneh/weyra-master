"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-16 lg:px-24 py-16 w-full">
      <div className="flex-1 max-w-lg text-left">
        <h1
          className="font-space-grotesk font-medium text-[60px] leading-[100%] text-black mt-10 mb-7 ml-[4rem]"
          style={{ width: "531px", height: "308px" }}
        >
          Empowering businesses with <br /> innovative tech solutions.
        </h1>
        <p
          className="font-space-grotesk font-normal text-[20px] leading-[28px] text-gray-600 mb-6 ml-[4rem]"
          style={{ width: "498px", height: "84px" }}
        >
          At Wey Tech, we specialize in delivering cutting-edge technology
          solutions that transform businesses. From custom software
          development...
        </p>
      </div>

      <div className="absolute mt-10 right-0 top-0 h-full">
        <Image
          src="/image.png"
          alt="Wey Tech Hero Illustration"
          width={600}
          height={550}
          className="object-contain"
        />
      </div>
    </section>
  );
}
