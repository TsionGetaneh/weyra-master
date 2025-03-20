"use client";

import { ServicesData } from "../data/ServicesData";

export default function Services() {
  return (
    <section id="services" className="py-12 bg-gray-50 container mx-auto px-6">
      <h2 className="bg-[#7E8038] font-space-grotesk text-black text-4xl font-bold rounded-lg px-7 py-2 uppercase mb-12 ml-[8.2rem] tracking-wide w-[193px] h-[51px] flex items-center justify-center">
        SERVICES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-[8.2rem]">
        {ServicesData.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-transform transform hover:scale-[1.02] duration-300"
            >
              <div className="flex justify-center mb-4">
                <Icon className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold my-4">{service.title}</h3>
              <p className="text-center text-black">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
