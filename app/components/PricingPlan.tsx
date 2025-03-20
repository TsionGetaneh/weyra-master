"use client";
import React, { useState } from "react";
import Image from "next/image";
import tick from "@/public/tick.png";
import x from "@/public/close.png";
import protick from "@/public/protick.png";
import exit from "@/public/proclose.png";
import { plans } from "../data/pricingData";

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const currentPlan = isYearly ? plans.yearly : plans.monthly;

  return (
    <div className="px-6 md:px-16 py-10 text-center">
      <div className="flex flex-col items-center">
        <div className="text-xs font-semibold px-4 py-1 rounded-full bg-green-100 text-green-800 uppercase">
          PRICING
        </div>
        <h1 className="font-bold text-4xl pt-3 text-black">Pricing Plans</h1>
        <h3 className="text-gray-500 text-lg pt-2">
          Check our easy and simple plans
        </h3>
      </div>

      <div className="flex items-center justify-center gap-2 py-6">
        <span
          className={isYearly ? "text-gray-400" : "text-black font-semibold"}
        >
          Yearly
        </span>
        <div
          onClick={handleToggle}
          className="relative w-14 h-7 bg-gray-300 rounded-full cursor-pointer transition-all duration-300 flex items-center px-1"
        >
          <div
            className={`w-5 h-5 bg-[#7d7c38] rounded-full shadow transition-transform duration-300 ${
              isYearly ? "translate-x-7" : "translate-x-0"
            }`}
          />
        </div>
        <span
          className={isYearly ? "text-gray-900 font-semibold" : "text-black"}
        >
          Monthly
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div
          className="relative p-10 rounded-lg shadow-lg w-full max-w-lg bg-cover bg-center"
          style={{ backgroundImage: "url('/Frame(2).png')" }}
        >
          <h2 className="font-bold text-3xl text-white">Basic</h2>
          <p className="text-gray-300 text-lg">
            Get unlimited services retainer
          </p>
          <h3 className="text-5xl font-bold py-4 text-white">
            {currentPlan.basic.price}
          </h3>
          <p className="text-xl text-white">Includes</p>
          <ul className="mt-4 space-y-4">
            {currentPlan.basic.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center space-x-4 border-b border-gray-500 pb-3"
              >
                <Image
                  src={currentPlan.basic.available[index] ? tick : x}
                  alt="icon"
                  width={24}
                  height={24}
                />
                <span className="text-white text-lg">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="bg-[#7d7c38] text-white px-8 py-4 rounded-full w-full mt-6 font-semibold text-lg hover:bg-green-600 transition">
            Get This Plan
          </button>
        </div>

        <div
          className="relative p-10 rounded-lg shadow-lg w-full max-w-lg bg-cover bg-center border border-gray-300"
          style={{ backgroundImage: "url('/Frame(3).png')" }}
        >
          <h2 className="font-bold text-3xl text-gray-900">Pro</h2>
          <p className="text-gray-700 text-lg">
            Get access to all of our services
          </p>
          <h3 className="text-5xl font-bold py-4 text-gray-900">
            {currentPlan.pro.price}
          </h3>
          <p className="text-xl text-gray-900">Includes</p>
          <ul className="mt-4 space-y-4">
            {currentPlan.pro.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center space-x-4 border-b border-gray-400 pb-3"
              >
                <Image
                  src={currentPlan.pro.available[index] ? protick : exit}
                  alt="icon"
                  width={24}
                  height={24}
                />
                <span className="text-gray-900 text-lg">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="bg-black text-white px-8 py-4 rounded-full w-full mt-6 font-semibold text-lg hover:bg-gray-900 transition">
            Get This Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
