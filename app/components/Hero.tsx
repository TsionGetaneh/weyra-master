"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-8 md:px-16 lg:px-24 py-16 container mx-auto">
      
      <div className="flex-1 max-w-lg text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6">
          Empowering businesses with <br /> innovative tech solutions.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          At Wey Tech, we specialize in delivering cutting-edge technology
          solutions that transform businesses. From custom software
          development...
        </p>
      </div>
      
      <div className="flex-1 flex justify-center">
        <Image
          src="/image.png"
          alt="Wey Tech Hero Illustration"
          width={700}
          height={500}
          className="object-contain"
        />
      </div>
    </section>
  );
}
