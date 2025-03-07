"use client";

import { ServicesData } from "../data/ServicesData";

export default function Services() {
  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
      <h2 className="inline-block bg-[#7d7c38] text-black text-3xl font-bold rounded-[20px] px-4 py-2 text-start mb-6">
          SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ServicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-transform transform hover:scale-[1.02] duration-300"
              >
                <div className="flex justify-center">
                  <Icon className="w-12 h-12 mb-4 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold my-4">{service.title}</h3>
                <p className="text-center text-black">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
